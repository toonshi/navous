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
      <footer className="bg-dark py-16 px-8 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Image
              src="/Left logo.svg"
              alt="Navous Logo"
              width={120}
              height={36}
              className="h-9 w-auto"
            />
            <p className="text-slate-500 text-sm mt-4">
              &copy; 2026 Navous. Built for the moments that matter.
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#use-cases" className="hover:text-white transition">Use Cases</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
