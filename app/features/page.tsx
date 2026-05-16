import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata = {
  title: "Value Propositions — Navous",
  description: "Explore the Core Value Propositions of the Navous indoor intelligence platform.",
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-24 px-8 text-center bg-primary border-b border-white/5">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide border border-accent/20 bg-accent/10 text-accent uppercase">
            Value Matrix
          </span>
          <h1 className="font-display text-5xl md:text-[5rem] font-bold tracking-tight text-white leading-[0.95] mb-8">
            The Digital Infrastructure <br />
            <span className="text-white/60">for Your Building.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-16">
            Converting Navous&apos;s complex engineering foundation into high-impact value for autonomous logistics, AR, and smart venue management.
          </p>

          {/* Primary Feature: Data Analytics */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden relative group backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-50" />
              
              <div className="relative z-10 mb-12">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                  Primary Capability
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Spatial Data Analytics
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium">
                  The most robust analytical suite for indoor environments. Monitor flow, identify bottlenecks, and optimize your facility in real-time.
                </p>
              </div>

              <div className="relative z-10 flex justify-center mt-8">
                <div className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
                  <Image 
                    src="/data-analytics.png" 
                    alt="Data Analytics Dashboard" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Control Section */}
        <div className="py-24 px-8 bg-secondary border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                Facility Management
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Total Operational Control.
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium">
                Go beyond static maps. Actively manage your facility and engage your visitors with real-time tools.
              </p>
            </div>

            <div className="space-y-8">
               {/* Large Feature: Alerts */}
               <div className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 card-hover flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex-1 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Instant Local Alerts</h3>
                    <p className="text-white/50 text-lg leading-relaxed font-medium max-w-xl">
                      Broadcast safety alerts, emergency routes, or critical updates to every user on-site instantly. Ensure your visitors are informed and safe during any event or emergency.
                    </p>
                  </div>

                  <div className="flex-1 w-full relative z-10">
                    <div className="relative w-full aspect-[728/752] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                      <Image 
                        src="/alerts.jpeg" 
                        alt="Local Alerts" 
                        fill 
                        className="object-contain opacity-90"
                      />
                    </div>
                  </div>
               </div>

               {/* Large Feature: Zoning (Full Width Stack) */}
               <div className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 card-hover flex flex-col gap-12 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Real-time Restrictions</h3>
                    <p className="text-white/50 text-lg leading-relaxed font-medium max-w-3xl">
                      Close off zones or redirect traffic for maintenance in seconds without re-uploading floor plans. Maintain total control over your venue's accessibility and safety dynamically.
                    </p>
                  </div>

                  <div className="w-full relative z-10">
                    <div className="relative w-full aspect-[1600/286] rounded-2xl overflow-hidden border border-white/10 bg-black/20 shadow-2xl">
                      <Image 
                        src="/zoning.jpeg" 
                        alt="Zone Management" 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  </div>
               </div>

               {/* Simple Text Feature: Promotions */}
               <div className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 card-hover relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Location Promotions</h3>
                    <p className="text-white/40 text-lg leading-relaxed font-medium">
                      Deliver context-aware rewards and offers based on exactly where your visitors are standing. Turn footfall into engagement with targeted, real-time incentives.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
