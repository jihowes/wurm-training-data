export default function About() {
  return (
    <div className="py-20 px-4 md:px-6 relative" style={{ background: 'linear-gradient(to bottom, #0A0E27, #1A1F3A, #0A0E27)' }}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12" style={{ color: '#FB6600' }}>
          About Wurmonbase
        </h2>
        
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="text-xl text-gray-300 mb-6 text-center">
            🪙 Wurmonbase is the meme coin that&apos;s making Base the place to be!
          </p>
          
          <div className="space-y-8 text-gray-400">
            <p>
              Born from the underground, Wurmonbase is here to shake up the crypto world. 
              Just like Bird on Base, we&apos;re all about community, memes, and having fun while 
              building something special.
            </p>
            
            <p>
              Our mission? To create the most legendary meme coin on Base. We&apos;re combining 
              the power of decentralized finance with pure, unadulterated meme magic. 
              Because let&apos;s face it, worms are underrated. 🌈
            </p>

            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">
                🎯 What Makes Us Special?
              </h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🐛</span>
                  <span>Community-driven and fully decentralized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Built on Base for low fees and fast transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎨</span>
                  <span>Curated meme collection that&apos;s always growing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💎</span>
                  <span>No rug pulls, 100% on-chain transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

