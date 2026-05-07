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
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-24 px-8 text-center border-b border-white/5 bg-primary">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide border border-accent/20 bg-accent/10 text-accent uppercase">
            Deployment Strategy
          </span>
          <h1 className="font-display text-5xl md:text-[5rem] font-bold tracking-tight text-white leading-[0.95] mb-8">
            The Zero-Friction<br />
            <span className="text-white/60">Deployment Roadmap.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            From QR-seeded starts to visual anchoring — eliminating hardware dependence for the world&apos;s most accessible indoor navigation.
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
