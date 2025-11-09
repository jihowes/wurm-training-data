export default function Roadmap() {
  const phases = [
    {
      title: 'Phase 0: Base(ment)',
      status: 'completed',
      items: [
        'Website live: wurm.meme',
        'Socials live',
        'Meme backlog cooking'
      ]
    },
    {
      title: 'Phase 1: Genesis',
      status: 'in-progress',
      items: [
        'Smart contract deployed on clanker.world',
        '$WURM token live on Base'
      ]
    },
    {
      title: 'Phase 2: Burrow & Build',
      status: 'in-progress',
      items: [
        '100% LP locked on Unicrypt (6+ months)',
        'Airdrop 50M $WURM to early worms (X + Farcaster)',
        'Meme gallery launch (submit your wurm art!)',
        'DEX listing (Uniswap V3 + DexScreener)',
        'Daily meme drops + community raids'
      ]
    },
    {
      title: 'Phase 3: Slime Surge',
      status: 'upcoming',
      items: [
        '$1M market cap target',
        'Basescan verified token page',
        'Collab WURM x BURD'
      ]
    }
  ];

  return (
    <section className="relative py-20 px-4 md:px-6 mobile-section-bg md:bg-none">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6" style={{ color: '#FB6600' }}>
          Slithering to meme-mortality
        </h2>
        <p className="text-center text-white mb-16 text-lg">
          The slime
        </p>

        {/* Timeline */}
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="relative z-10">
              {/* Timeline connector */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-24 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 opacity-30"></div>
              )}
              
              {/* Phase card */}
              <div className={`relative z-20 rounded-2xl p-6 md:p-8 border-2 bg-black/70 transition-all duration-300 ${
                phase.status === 'completed' ? 'border-green-500/50' :
                phase.status === 'in-progress' ? 'border-purple-500/50 shadow-lg shadow-purple-500/30' :
                'border-gray-700/50'
              }`}>
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`px-3 md:px-4 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm ${
                    phase.status === 'completed' ? 'bg-green-500 text-white' :
                    phase.status === 'in-progress' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white animate-pulse' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {phase.status === 'completed' ? '✅ COMPLETE' :
                     phase.status === 'in-progress' ? '🚀 IN PROGRESS' :
                     '⏳ UPCOMING'}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  {phase.title}
                </h3>

                <ul className="space-y-2 md:space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <span className="text-xl mr-3">•</span>
                      <span className="text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

