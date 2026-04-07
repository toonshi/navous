import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "How It Works — Navous",
  description: "Deploy Navous in 3 weeks. Upload floor plans, configure routes, and go live with zero hardware.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Page hero */}
        <div className="py-20 px-8 text-center"
          style={{ background: "linear-gradient(135deg, #e0f7fc 0%, #f0feff 50%, #fff8f0 100%)" }}
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Deployment
          </span>
          <h1 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tighter text-secondary leading-tight mb-4">
            Live in 3 weeks.<br />Not 3 months.
          </h1>
          <p className="text-secondary/60 text-lg max-w-xl mx-auto leading-relaxed">
            No hardware. No infrastructure overhaul. Just your floor plans and three clean steps.
          </p>
        </div>

        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
