export default function Tokenomics() {
  return (
    <div className="py-20 px-4 md:px-6 relative" style={{ 
      backgroundImage: 'url(/images/background2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12" style={{ color: '#FB6600' }}>
          Tokenomics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Total Supply */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-purple-300">💰 Total Supply</h3>
            <p className="text-3xl md:text-4xl font-bold text-white">1,000,000,000</p>
            <p className="text-gray-400 mt-2">$WURM</p>
          </div>

          {/* Liquidity */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-purple-300">💧 Liquidity</h3>
            <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
            <p className="text-gray-400 mt-2">Locked & Burned</p>
          </div>

          {/* Taxes */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-purple-300">📊 Buy/Sell Tax</h3>
            <p className="text-3xl md:text-4xl font-bold text-white">0% / 0%</p>
            <p className="text-gray-400 mt-2">No taxes ever!</p>
          </div>

          {/* Contract */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-purple-300">🔐 Contract</h3>
            <p className="text-xs md:text-sm font-mono text-white break-all mt-4">
              0x0000000000000000000000000000000000000000
            </p>
            <p className="text-gray-400 mt-2 text-xs md:text-sm italic">
              🔒 Coming soon after launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

