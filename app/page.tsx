import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import UseCases from "./components/UseCases";
import BentoGrid from "./components/BentoGrid";
import StakeholderValue from "./components/StakeholderValue";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <Hero />
        <ProblemSection />
        <UseCases />
        <BentoGrid />
        <StakeholderValue />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <footer className="py-10 px-8 border-t border-slate-100 text-center text-slate-400 font-sans text-sm bg-white">
        <p>&copy; {new Date().getFullYear()} Navous. All rights reserved.</p>
      </footer>
    </div>
  );
}
