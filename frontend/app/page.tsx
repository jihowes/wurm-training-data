import Hero from "@/components/Hero";
import MemeGallery from "@/components/MemeGallery";
import SwapSection from "@/components/SwapSection";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white space-y-12 md:space-y-20">
      <div className="scroll-mt-20">
        <Hero />
      </div>
      <div className="scroll-mt-20">
        <SwapSection />
      </div>
      <div className="scroll-mt-20">
        <MemeGallery />
      </div>
      <div className="scroll-mt-20">
        <Roadmap />
      </div>
      <div className="scroll-mt-20">
        <Tokenomics />
      </div>
      <Footer />
    </main>
  );
}

