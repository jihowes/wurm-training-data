import type { Metadata } from "next";
import "./globals.css";
import MobileParallaxController from "@/components/MobileParallaxController";

export const metadata: Metadata = {
  title: "Wurmonbase - 🪙 Wurm on Base",
  description: "The meme coin that's taking Base by storm! Join the Wurm movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white antialiased relative">
        <div className="parallax-bg" aria-hidden="true"></div>
        <div className="background-overlay" aria-hidden="true"></div>
        <MobileParallaxController />
        {children}
      </body>
    </html>
  );
}

