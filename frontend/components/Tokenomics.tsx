const metrics = [
  {
    metric: 'Total Supply',
    value: '1,000,000,000 $WURM',
    proof: 'Fixed at deploy'
  },
  {
    metric: 'Liquidity',
    value: '100,000,000 $WURM (10%) + 0.025 ETH',
    proof: '→ Unicrypt Lock',
    proofLink: 'https://app.unicrypt.network/'
  },
  {
    metric: 'Airdrop',
    value: '50,000,000 $WURM (5%)',
    proof: '→ First 100 X/Farcaster joiners'
  },
  {
    metric: 'Dev / Team',
    value: '0 $WURM',
    proof: 'No allocation. No premine.'
  },
  {
    metric: 'Buy / Sell Tax',
    value: '0% / 0%',
    proof: 'No taxes. Ever.'
  },
  {
    metric: 'Contract',
    value: '0x...',
    proof: '→ Renounced',
    proofLink: 'https://basescan.org/'
  },
  {
    metric: 'Launch',
    value: 'clanker.world',
    proof: 'AI-powered, Base-native',
    proofLink: 'https://clanker.world'
  }
];

export default function Tokenomics() {
  return (
    <div className="py-20 px-4 md:px-6 relative" style={{ 
      backgroundImage: 'url(/images/ground_up.PNG)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={{ color: '#FB6600' }}>
            Tokenomics
          </h2>
          <p className="text-lg md:text-xl text-gray-300 tracking-wide uppercase">
            Fair. Transparent. No BS.
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {metrics.map(({ metric, value, proof, proofLink }) => (
              <div key={metric} className="bg-black/40 border border-purple-500/10 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{metric}</h3>
                <p className="text-xl md:text-2xl font-bold text-orange-300">{value}</p>
                <div>
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest">Proof (Post-Launch)</p>
                  {proofLink ? (
                    <a
                      href={proofLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors font-medium"
                    >
                      {proof}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h10m0 0v10m0-10L5 19"></path>
                      </svg>
                    </a>
                  ) : (
                    <p className="text-gray-300 font-medium">{proof}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 space-y-4 text-sm md:text-base text-gray-300">
            <p>
              <span className="text-purple-300 font-semibold">LP Lock Proof:</span>{' '}
              <a
                href="https://app.unicrypt.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200 underline"
              >
                Unicrypt Link
              </a>
            </p>
            <p>
              <span className="text-purple-300 font-semibold">Contract Renounced:</span> Yes
            </p>
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <p className="text-lg md:text-xl font-semibold text-white">
              No rugs. Just WURM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

