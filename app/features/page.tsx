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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-20 px-8 text-center bg-white border-b border-slate-100">
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide border" style={{ color: "#13B7DA", borderColor: "#13B7DA40", background: "#13B7DA0D" }}>
            Value Matrix
          </span>
          <h1 className="font-laila text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight mb-4">
            The GPS of <br />Indoor Space.
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Converting Navous's complex engineering foundation into high-impact value for autonomous logistics, AR, and smart venue management.
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
