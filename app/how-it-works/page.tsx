import Link from "next/link";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Integration from "../components/Integration";
import CoreValues from "../components/CoreValues";
import IndustrySolutions from "../components/IndustrySolutions";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "How It Works — Navous",
  description: "Learn how Navous brings world-class indoor navigation to hospitals, universities, and airports with zero hardware and zero friction.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-24 px-8 text-center border-b border-white/5 bg-primary">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide border border-accent/20 bg-accent/10 text-accent uppercase">
            Seamless Wayfinding
          </span>
          <h1 className="font-display text-5xl md:text-[5rem] font-bold tracking-tight text-white leading-[0.95] mb-8">
            World-Class Navigation,<br />
            <span className="text-white/60">Deployed Instantly.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            A seamless, web-based experience that helps your visitors find their way instantly.
          </p>
          <div className="flex justify-center">
            <Link href="/roadmap" className="btn-secondary">
              View Product Roadmap
            </Link>
          </div>
        </div>

        <Roadmap />
        
        <div className="flex justify-center -mt-8 mb-20">
          <Link href="/roadmap" className="btn-secondary">
            Our Roadmap
          </Link>
        </div>

        <IndustrySolutions />
        <Integration />
        <CoreValues />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
