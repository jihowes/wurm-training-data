export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 border-t border-purple-900/30" style={{ background: '#000000' }}>
      <div className="max-w-6xl mx-auto">
        {/* Bottom bar */}
        <div className="border-t border-purple-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wurmonbase. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center gap-2">
            Built with 🐛 on 
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#0052FF"/>
            </svg>
            Base
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-sm text-yellow-300 text-center">
            ⚠️ <strong>Disclaimer:</strong> This is a meme coin. DYOR (Do Your Own Research). 
            Not financial advice. Only invest what you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}

