import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
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
        <LogoBar />
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
