import Hero from "@/components/Hero";
import MemeGallery from "@/components/MemeGallery";
import SwapSection from "@/components/SwapSection";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <SwapSection />
      <MemeGallery />
      <Roadmap />
      <Tokenomics />
      <Footer />
    </main>
  );
}

