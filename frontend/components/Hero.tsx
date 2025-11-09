'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden mobile-section-bg md:bg-none">
      <div className={`relative z-10 flex items-center justify-center min-h-screen text-center px-4 md:px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="w-full">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <img 
              src="/images/hero-logo.png" 
              alt="Wurm Logo" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain mix-blend-screen"
            />
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#FB6600' }}>
            $WURM
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-4xl mb-4 md:mb-6 font-medium">
            From the ground up - powered by Base.
          </p>

        {/* Social Links Banner */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <a 
            href="https://x.com/wurmonbase" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a 
            href="https://telegram.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Telegram"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </a>
          <a
            href="https://warpcast.com/wurmonbase"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:-translate-y-1"
            aria-label="Farcaster"
          >
            <img
              src="/images/farcaster.png"
              alt="Farcaster"
              className="w-8 h-8"
            />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://dexscreener.com/base" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 bg-transparent border-2 border-purple-500 rounded-full hover:bg-purple-500 transition-all flex items-center gap-2"
          >
            <img 
              src="/images/dexscreener.jpg" 
              alt="DexScreener" 
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="text-purple-300 font-bold text-base sm:text-lg hover:text-white transition-colors">
              DEXSCREENER
            </span>
          </a>
        </div>

        {/* Contract Address (Placeholder) */}
        <div className="mt-12 md:mt-16 p-4 md:p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 max-w-xl mx-auto">
          <p className="text-xs md:text-sm text-gray-400 mb-2">Contract Address:</p>
          <p className="text-xs md:text-sm font-mono text-purple-300 break-all">
            0x0000000000000000000000000000000000000000
          </p>
          <p className="text-xs text-gray-500 mt-2 italic">
            🔒 Coming soon after launch
          </p>
        </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-purple-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

