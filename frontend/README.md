# Wurmonbase Frontend

This is the frontend for the Wurmonbase meme coin project, built with Next.js 15, React, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design inspired by burd.meme and toshithecat.com
- 🪙 Hero section with animated background
- 🖼️ Meme gallery supporting both images and GIFs
- 📖 About section
- 🗺️ Interactive roadmap
- 🔗 Social links and footer
- 📱 Mobile-first responsive design

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── MemeGallery.tsx  # Meme gallery
│   ├── About.tsx        # About section
│   ├── Roadmap.tsx      # Roadmap
│   └── Footer.tsx       # Footer
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Customization

### Update Memes

Edit `components/MemeGallery.tsx` to update the meme array with your actual images/GIFs.

### Update Contract Address

The contract address placeholder is in `components/Hero.tsx`. Update it after your launch.

### Styling

The site uses Tailwind CSS. Custom colors and animations can be found in:
- `tailwind.config.ts` - Color scheme
- `app/globals.css` - Custom animations

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

