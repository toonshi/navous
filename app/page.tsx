import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      <main className="h-full">
        <Hero />
      </main>
    </div>
  );
}
