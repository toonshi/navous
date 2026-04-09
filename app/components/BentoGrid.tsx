"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-laila text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            High-precision indoor spatial engineering
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Our platform utilizes automated morphological refinement and zonal intelligence to convert existing architectural assets into high-performance navigation graphs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box A: Large — Searchable Infrastructure */}
          <div className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-end min-h-90 relative overflow-hidden border border-slate-200 bg-white shadow-sm">
            <h3 className="font-laila text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              Automated asset vectorization
            </h3>
            <p className="text-slate-600 text-lg max-w-xl leading-relaxed font-medium">
              We process existing PDF and CAD files through a distributed spatial engine, extracting geometric features and generating topological navigation layers for rapid facility onboarding.
            </p>
          </div>

          {/* Box B: No Apps */}
          <div className="rounded-3xl p-8 flex flex-col justify-between min-h-90 border border-slate-200 bg-slate-900 text-white shadow-2xl">
            <div className="flex justify-center items-center h-full mb-8">
               <div className="text-8xl font-bold text-indigo-500">0</div>
            </div>
            <div>
              <h3 className="font-laila text-2xl font-bold tracking-tight text-white mb-3 leading-snug">
                Zero-deployment footprint
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Our browser-native architecture eliminates the friction of application installation. Visitors access the full navigation stack instantly via standard QR protocols.
              </p>
            </div>
          </div>

          {/* Box C: Real-time Analytics */}
          <div className="md:col-span-3 rounded-3xl p-10 flex flex-col md:flex-row md:items-center gap-12 border border-slate-200 bg-white shadow-sm">
            <div className="flex-1">
              <h3 className="font-laila text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                Movement Intelligence
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
                Identify journey abandonment rates and analyze high-traffic bottleneck zones. Our analytics suite provides facility operators with high-fidelity visibility into pedestrian movement patterns.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/illustrations/analytics.svg"
                alt="Analytics overview"
                width={300}
                height={220}
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
