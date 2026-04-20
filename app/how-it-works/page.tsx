import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Integration from "../components/Integration";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "Deployment & Integration — Navous",
  description: "Explore the Zero-Friction Roadmap and integration capabilities of the Navous indoor intelligence platform.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-20 px-8 text-center bg-white border-b border-slate-100">
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide border" style={{ color: "#13B7DA", borderColor: "#13B7DA40", background: "#13B7DA0D" }}>
            Deployment Strategy
          </span>
          <h1 className="font-laila text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight mb-4">
            The Zero-Friction<br />Deployment Roadmap.
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            From QR-seeded starts to visual anchoring—eliminating hardware dependence for the world's most accessible indoor navigation.
          </p>
        </div>

        <Roadmap />
        <Integration />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
