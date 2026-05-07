import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import ProblemSection from "./components/ProblemSection";
import UseCaseGrid from "./components/UseCaseGrid";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import PilotProgram from "./components/PilotProgram";
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
        <UseCaseGrid />
        <HowItWorks />
        <Pricing />
        <PilotProgram />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
