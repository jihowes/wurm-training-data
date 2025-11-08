'use client';

import { useState } from 'react';

interface Meme {
  id: number;
  title: string;
  type: 'image' | 'gif';
  url: string;
}

// Placeholder memes - replace with your actual memes
const memes: Meme[] = [];

export default function MemeGallery() {
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  const openModal = (meme: Meme) => {
    setSelectedMeme(meme);
  };

  const closeModal = () => {
    setSelectedMeme(null);
  };

  return (
    <div id="meme-gallery" className="py-20 px-4 md:px-6 scroll-mt-20 relative" style={{ 
      backgroundImage: 'url(/images/ground_up.PNG)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4" style={{ color: '#FB6600' }}>
          Meme Gallery
        </h2>
        <p className="text-center text-white mb-12 text-lg">
          The early $WURM catches the $BURD
        </p>

        {/* Banner Meme - Full Width */}
        <div className="mb-12 w-full">
          <img 
            src="/images/banner.png" 
            alt="Wurm Banner" 
            className="w-full rounded-xl shadow-2xl"
          />
        </div>

        {/* Gallery Grid */}
        {memes.length === 0 ? (
          <div className="bg-black/60 border border-purple-500/20 rounded-3xl p-10 md:p-16 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">Meme gallery coming soon</p>
            <p className="text-gray-300 text-base md:text-lg">
              Wurms cookin&apos; straight heat. Check back after launch!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memes.map((meme) => (
              <div
                key={meme.id}
                onClick={() => openModal(meme)}
                className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
              >
                {meme.type === 'gif' ? (
                  <div className="relative w-full aspect-square">
                    <img
                      src={meme.url}
                      alt={meme.title}
                      className="w-full h-full object-cover"
                    />
                    {/* GIF Badge */}
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-bold">
                      GIF
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-square">
                    <img
                      src={meme.url}
                      alt={meme.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{meme.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for full-size view */}
      {selectedMeme && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors text-4xl"
          >
            ✕
          </button>
          <img
            src={selectedMeme.url}
            alt={selectedMeme.title}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

