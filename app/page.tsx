import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
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
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
