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
        <div className="py-20 px-8 text-center"
          style={{ background: "#13B7DA" }}>
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Platform Features
          </span>
          <h1 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
            The intelligence behind<br />every corridor.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
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
