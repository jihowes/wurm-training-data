const metrics = [
  {
    metric: 'Total Supply',
    value: '1,000,000,000 $WURM',
    notes: '(Clanker default)'
  },
  {
    metric: 'Buy / Sell Tax',
    value: '0% / 0%',
    notes: '(no tax)'
  },
  {
    metric: 'Liquidity',
    value: '100,000,000 $WURM + 0.025 ETH',
    notes: '→ Locked 6+ months (post-launch)',
    proofLink: 'https://app.unicrypt.network/'
  },
  {
    metric: 'Airdrop',
    value: '50,000,000 $WURM (5%)',
    notes: '→ First 100 X/Farcaster joiners via Clanker CSV'
  }
];

export default function Tokenomics() {
  return (
    <section className="relative py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={{ color: '#FB6600' }}>
            $WURM Tokenomics
          </h2>
          <p className="text-lg md:text-xl text-gray-300 tracking-wide uppercase">
            Fair. Slime. Verified on clanker.world V4
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-flow-row">
            {metrics.map(({ metric, value, notes, proofLink }) => (
              <div key={metric} className="bg-black/40 border border-purple-500/10 rounded-2xl p-6 md:p-8 flex flex-col gap-3">
                <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                  <span className="text-purple-300">{metric}:</span>{' '}
                  <span className="text-orange-300 font-bold">{value}</span>
                  {notes && (
                    <span className="block text-sm md:text-base text-gray-300 mt-2">
                      {notes}
                    </span>
                  )}
                </p>
                {proofLink && (
                  <a
                    href={proofLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors text-sm md:text-base font-medium"
                  >
                    View lock proof
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
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <p className="text-base md:text-lg font-semibold text-gray-200 uppercase tracking-wide">
              LP lock • Contract renounced • Airdrop live - all within 10 mins of launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

