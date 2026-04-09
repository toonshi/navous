import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import TechnicalCapabilities from "./components/TechnicalCapabilities";
import DashboardSection from "./components/DashboardSection";
import OwnerValue from "./components/OwnerValue";
import UseCases from "./components/UseCases";
import HowItWorks from "./components/HowItWorks";
import PilotProgram from "./components/PilotProgram";
import Roadmap from "./components/Roadmap";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-slate-100" />
        <TrustStats />
        <div className="border-t border-slate-100" />
        <TechnicalCapabilities />
        <div className="border-t border-slate-100" />
        <DashboardSection />
        <div className="border-t border-slate-100" />
        <OwnerValue />
        <div className="border-t border-slate-100" />
        <UseCases />
        <div className="border-t border-slate-100" />
        <HowItWorks />
        <div className="border-t border-slate-100" />
        <PilotProgram />
        <div className="border-t border-slate-100" />
        <Roadmap />
        <div className="border-t border-slate-100" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
