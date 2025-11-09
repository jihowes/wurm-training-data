import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

