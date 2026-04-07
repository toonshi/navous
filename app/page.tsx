import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import BentoGrid from "./components/BentoGrid";
import HowItWorks from "./components/HowItWorks";
import StakeholderValue from "./components/StakeholderValue";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <BentoGrid />
        <HowItWorks />
        <StakeholderValue />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
