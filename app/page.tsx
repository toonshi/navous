import Navbar from "./components/Navbar";
import BentoGrid from "./components/BentoGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <BentoGrid />
      </main>
      <footer className="py-12 px-8 border-t border-slate-100 text-center text-slate-400 font-sans">
        <p>&copy; {new Date().getFullYear()} Navous. All rights reserved.</p>
      </footer>
    </div>
  );
}
