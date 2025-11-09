'use client';

import { useState } from 'react';
import { useMobileParallax } from '@/hooks/useMobileParallax';
import WalletButton from './WalletButton';

export default function SwapSection() {
  const [amountIn, setAmountIn] = useState('');
  const [amountOut, setAmountOut] = useState('');
  const mobileParallaxStyle = useMobileParallax({ basePercent: 64, intensity: 0.1 });

  return (
    <section
      className="relative py-20 px-4 md:px-6 mobile-section-bg md:bg-none"
      style={mobileParallaxStyle}
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12" style={{ color: '#FB6600' }}>
          Swap
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-6 md:p-8 shadow-2xl">
          {/* Swap Input */}
          <div className="mb-4 md:mb-6">
            <label className="block text-gray-400 mb-2 text-sm font-bold uppercase">
              From
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.0"
                value={amountIn}
                onChange={(e) => setAmountIn(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-xl md:text-2xl font-bold focus:outline-none focus:border-purple-500 transition-colors"
              />
              <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-600 rounded-xl text-white font-bold text-sm md:text-base hover:bg-purple-700 transition-colors">
                  ETH
                </button>
              </div>
            </div>
          </div>

          {/* Swap Arrow */}
          <div className="flex justify-center my-3 md:my-4">
            <button className="bg-purple-600 rounded-full p-2 md:p-3 hover:bg-purple-700 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
              </svg>
            </button>
          </div>

          {/* Swap Output */}
          <div className="mb-6 md:mb-8">
            <label className="block text-gray-400 mb-2 text-sm font-bold uppercase">
              To
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.0"
                value={amountOut}
                onChange={(e) => setAmountOut(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-xl md:text-2xl font-bold focus:outline-none focus:border-purple-500 transition-colors"
              />
              <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-600 rounded-xl text-white font-bold text-sm md:text-base hover:bg-purple-700 transition-colors">
                  $WURM
                </button>
              </div>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div className="flex justify-center">
            <WalletButton />
          </div>

          <p className="text-center text-white text-sm mt-4">
            💡 Use our swap or trade on DexScreener
          </p>
        </div>
      </div>
    </section>
  );
}

