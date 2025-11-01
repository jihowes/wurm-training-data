# 🪙 Wurmonbase

Wurmonbase is a meme coin project built on the blockchain - "From the ground up, powered by Base."

## 📁 Project Structure

```
wurmonbase/
├── contracts/     # Smart contracts (Solidity)
├── frontend/      # Next.js web interface
├── docs/          # Documentation and whitepaper
├── scripts/       # GIF processing and deployment scripts
│   ├── split_gifs.py         # Extract frames from GIFs
│   ├── reassemble_gif.py     # Rebuild GIFs from frames
│   ├── quick_start.py        # Setup workflow
│   └── COMFYUI_SETUP.md      # AI setup guide
├── source_gifs/   # Input GIFs (burdonbase source)
├── frames/        # Extracted frames
├── output_gifs/   # Final wurmonbase GIFs
└── training_data/ # AI training images
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- Python 3.8+ (for GIF processing)
- GPU with 8GB+ VRAM (recommended for AI processing)

### Website Setup

1. Clone the repository
2. Navigate to frontend: `cd frontend`
3. Install dependencies: `npm install`
4. Run dev server: `npm run dev`
5. Open http://localhost:3000

### GIF Processing Setup

1. Install Python dependencies: `pip install -r scripts/requirements.txt`
2. Run setup: `python scripts/quick_start.py`
3. Add your burdonbase GIFs to `source_gifs/`
4. Add worm training images to `training_data/wurm/`
5. Split GIFs: `python scripts/split_gifs.py`

See `scripts/WORKFLOW_GUIDE.md` for complete AI workflow instructions.

## 📝 Development

More development instructions will be added as the project progresses.

## 🎯 Roadmap

- [x] Frontend interface
- [x] Meme gallery with GIF support
- [x] Wallet connection
- [x] Swap interface
- [ ] Smart contract development
- [ ] GIF processing pipeline
- [ ] AI meme generation workflow
- [ ] Tokenomics design
- [ ] Security audit
- [ ] Mainnet deployment

## 📄 License

To be determined.

## ⚠️ Disclaimer

This is a meme coin project. Do your own research (DYOR) before investing.

