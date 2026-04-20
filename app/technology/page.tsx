import Navbar from "../components/Navbar";
import TechnicalCapabilities from "../components/TechnicalCapabilities";
import ProductStack from "../components/ProductStack";
import StrategicPartners from "../components/StrategicPartners";
import Footer from "../components/Footer";

export const metadata = {
  title: "Technology — Navous",
  description: "The mathematical and spatial engine powering Navous indoor intelligence.",
};

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-20 px-8 text-center bg-white border-b border-slate-100">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide border subheading" style={{ color: "#13B7DA", borderColor: "#13B7DA40", background: "#13B7DA0D" }}>
            The Foundation
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight mb-4">
            The Geodetic Twin.<br />The Sensor Fusion Core.
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            High-fidelity spatial infrastructure required to power the next decade of autonomous logistics, AR, and smart venue management.
          </p>
        </div>

        <ProductStack />
        <StrategicPartners />
        <TechnicalCapabilities />
        
        <section className="py-24 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Hardware-Free Implementation</h2>
                <p className="text-slate-600 text-lg mb-6">
                    Navous bypasses the requirements for expensive Bluetooth beacons or Wi-Fi fingerprinting by leveraging industry-leading MA-EKF (Manifold-Aware Extended Kalman Filter) and Biomechanical PDR directly in a lightweight WASM core.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-bold text-xl mb-3">Deterministic Stability</h3>
                        <p className="text-slate-500 text-sm">
                            Wall-clipping is mathematically impossible because the EKF directly consumes the mapping engine&apos;s vector tangents, ensuring a premium &ldquo;blue-dot&rdquo; feel.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-bold text-xl mb-3">Seamless Handover</h3>
                        <p className="text-slate-500 text-sm">
                            Our topological &ldquo;stitching&rdquo; allows for continuous routing from building interiors to the global OpenStreetMap highway network.
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
