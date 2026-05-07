import Navbar from "../components/Navbar";
import BentoGrid from "../components/BentoGrid";
import CoreValues from "../components/CoreValues";
import MarketGap from "../components/MarketGap";
import StakeholderValue from "../components/StakeholderValue";
import TrustStats from "../components/TrustStats";
import ProblemSection from "../components/ProblemSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Value Propositions — Navous",
  description: "Explore the Core Value Propositions of the Navous indoor intelligence platform.",
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-24 px-8 text-center bg-primary border-b border-white/5">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide border border-accent/20 bg-accent/10 text-accent uppercase">
            Value Matrix
          </span>
          <h1 className="font-display text-5xl md:text-[5rem] font-bold tracking-tight text-white leading-[0.95] mb-8">
            The GPS of <br />
            <span className="text-white/60">Indoor Space.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            Converting Navous&apos;s complex engineering foundation into high-impact value for autonomous logistics, AR, and smart venue management.
          </p>
        </div>

        <TrustStats />
        <CoreValues />
        <MarketGap />
        <BentoGrid />
        <StakeholderValue />
        <ProblemSection />
      </main>
      <Footer />
    </div>
  );
}
