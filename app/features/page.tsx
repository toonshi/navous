import Navbar from "../components/Navbar";
import BentoGrid from "../components/BentoGrid";
import UseCases from "../components/UseCases";
import StakeholderValue from "../components/StakeholderValue";
import TrustStats from "../components/TrustStats";
import ProblemSection from "../components/ProblemSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Features — Navous",
  description: "Explore Navous features: indoor navigation, accessibility routing, real-time analytics, and stakeholder value.",
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Page hero */}
        <div className="py-20 px-8 text-center bg-white border-b border-slate-100">
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide border" style={{ color: "#13B7DA", borderColor: "#13B7DA40", background: "#13B7DA0D" }}>
            Platform Features
          </span>
          <h1 className="font-laila text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight mb-4">
            The intelligence behind<br />every corridor.
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Everything your building needs — wayfinding, accessibility, analytics, and tenant value — in one platform.
          </p>
        </div>

        <TrustStats />
        <BentoGrid />
        <StakeholderValue />
        <ProblemSection />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}
