import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import BentoGrid from "./components/BentoGrid";
import UseCases from "./components/UseCases";
import StakeholderValue from "./components/StakeholderValue";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <BentoGrid />
        <UseCases />
        <StakeholderValue />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
