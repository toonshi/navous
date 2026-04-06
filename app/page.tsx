import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import BentoGrid from "./components/BentoGrid";
import UseCases from "./components/UseCases";
import HowItWorks from "./components/HowItWorks";
import StakeholderValue from "./components/StakeholderValue";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="grow">
        <Hero />
        <ProblemSection />
        <BentoGrid />
        <UseCases />
        <HowItWorks />
        <StakeholderValue />
        <FAQ />
        <FinalCTA />
      </main>
      <footer className="bg-white py-16 px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Image
              src="/Left logo.svg"
              alt="Navous Logo"
              width={120}
              height={36}
              className="grayscale opacity-60"
            />
            <p className="text-[#475569] text-sm mt-4">
              &copy; 2026 Navous. Built for the moments that matter.
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-[#475569]">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#how-it-works" className="hover:text-black transition">How It Works</a>
            <a href="#features" className="hover:text-black transition">Features</a>
            <a href="#use-cases" className="hover:text-black transition">Use Cases</a>
            <a href="#faq" className="hover:text-black transition">FAQ</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
