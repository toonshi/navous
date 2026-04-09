import Navbar from "../components/Navbar";
import TechnicalCapabilities from "../components/TechnicalCapabilities";
import Footer from "../components/Footer";

export const metadata = {
  title: "Technology — Navous",
  description: "The mathematical and spatial engine powering Navous indoor navigation.",
};

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-20 px-8 text-center bg-white border-b border-slate-100">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide border subheading" style={{ color: "#13B7DA", borderColor: "#13B7DA40", background: "#13B7DA0D" }}>
            The Platform
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight mb-4">
            A software-defined layer<br />for physical world.
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Our technology utilizes existing spatial data to deliver high-fidelity indoor positioning without the need for infrastructure-heavy hardware.
          </p>
        </div>

        <TechnicalCapabilities />
        
        <section className="py-24 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Hardware-Free Implementation</h2>
                <p className="text-slate-600 text-lg mb-6">
                    Traditional indoor positioning systems (IPS) rely on Bluetooth beacons, Wi-Fi fingerprinting, or expensive UWB infrastructure. Navous bypasses these requirements by leveraging advanced sensor fusion and geometric mapping directly in the browser.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-bold text-xl mb-3">Sub-Meter Precision</h3>
                        <p className="text-slate-500 text-sm">
                            Our algorithms combine pedestrian dead reckoning (PDR) with environmental markers to maintain accurate positioning even in deep indoor environments where GPS fails.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-bold text-xl mb-3">Real-Time Routing</h3>
                        <p className="text-slate-500 text-sm">
                            Dynamic pathfinding accounts for accessibility needs, elevator status, and crowd density to provide the optimal journey through multi-story structures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
