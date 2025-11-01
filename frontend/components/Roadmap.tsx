export default function Roadmap() {
  const phases = [
    {
      title: 'Phase 1: Genesis',
      status: 'completed',
      items: [
        '🎨 Build the website',
        '🧪 Create smart contract',
        '🐛 Launch Wurmonbase token',
        '📱 Set up social media'
      ]
    },
    {
      title: 'Phase 2: Community',
      status: 'in-progress',
      items: [
        '💬 Build active community',
        '🎭 Expand meme gallery',
        '🔗 Get listed on DEX',
        '📢 Marketing campaigns'
      ]
    },
    {
      title: 'Phase 3: Growth',
      status: 'upcoming',
      items: [
        '🎯 Reach 1M market cap',
        '🤝 Strategic partnerships',
        '🌉 Cross-chain integrations',
        '🎮 Community events & contests'
      ]
    },
    {
      title: 'Phase 4: Empire',
      status: 'upcoming',
      items: [
        '🏆 Cement our place in meme coin history',
        '🌍 Global recognition',
        '💰 Sustainable tokenomics',
        '🚀 To the moon and beyond'
      ]
    }
  ];

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
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4" style={{ color: '#FB6600' }}>
          Roadmap
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Our journey to meme coin domination 🗺️
        </p>

        {/* Timeline */}
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-24 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 opacity-30"></div>
              )}
              
              {/* Phase card */}
              <div className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 ${
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
                    {phase.status === 'completed' ? '✅ COMPLETED' :
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
    </div>
  );
}

