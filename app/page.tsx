import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import ProblemSection from "./components/ProblemSection";
import StakeholderValue from "./components/StakeholderValue";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <div className="border-t border-slate-100" />
        <TrustStats />
        <ProblemSection />
        <HowItWorks />
        <StakeholderValue />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
