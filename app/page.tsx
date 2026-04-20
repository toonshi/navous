import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import DashboardSection from "./components/DashboardSection";
import OwnerValue from "./components/OwnerValue";
import CoreValues from "./components/CoreValues";
import ProductStack from "./components/ProductStack";
import StrategicPartners from "./components/StrategicPartners";
import MarketGap from "./components/MarketGap";
import Integration from "./components/Integration";
import Roadmap from "./components/Roadmap";
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
        <DashboardSection />
        <OwnerValue />
        <CoreValues />
        <ProductStack />
        <StrategicPartners />
        <MarketGap />
        <Integration />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
