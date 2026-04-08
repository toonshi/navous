"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            Intelligence behind every corridor.
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Unified wayfinding for visitors, actionable insights for operations, and high-precision data for facility decision makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Box A: Large — Searchable Infrastructure */}
          <div className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-end min-h-90 relative overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="absolute inset-0 rounded-3xl" style={{ background: "#13B7DA", opacity: 0.06 }} />
            <Image
              src="/Building.svg"
              alt=""
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              aria-hidden
              className="absolute top-0 right-0 h-full w-auto opacity-5 object-cover translate-x-8"
            />
            <span className="relative text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#13B7DA" }}>
              Infrastructure
            </span>
            <h3 className="relative font-space-grotesque text-3xl font-bold tracking-tighter text-slate-900 mb-3 leading-tight">
              A searchable indoor layer.
            </h3>
            <p className="relative text-slate-600 text-base max-w-md leading-relaxed font-medium">
              Transform your facility into a live digital directory. Visitors find what they need in seconds, reducing staff interruptions and improving floor-wide operational efficiency.
            </p>
          </div>

          {/* Box B: Accessibility */}
          <div className="rounded-3xl p-8 flex flex-col justify-between min-h-90 border border-slate-200 bg-white shadow-sm">
            <div className="flex justify-center items-center h-full mb-6">
              <Image
                src="/illustrations/accessibility.svg"
                alt="Accessibility"
                width={240}
                height={180}
                className="w-full max-w-[240px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#13B7DA" }}>
                Accessibility
              </span>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tighter text-slate-900 mb-3 leading-snug">
                Step-free wayfinding.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Prioritize accessible routes, lift-only paths, and audio-assisted guidance to ensure universal navigation for all guests.
              </p>
            </div>
          </div>

          {/* Box C: Real-time Analytics */}
          <div className="md:col-span-3 rounded-3xl p-10 flex flex-col md:flex-row md:items-center gap-8 border border-slate-200 bg-white shadow-sm">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#13B7DA" }}>
                Spatial Analytics
              </span>
              <h3 className="font-space-grotesque text-3xl font-bold tracking-tighter text-slate-900 mb-3 leading-tight">
                Understand movement patterns.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg font-medium">
                Identify congestion points, track journey abandonment, and optimize staff deployment with high-precision heatmaps and flow analysis.
              </p>
            </div>
            <Image
              src="/illustrations/analytics.svg"
              alt="Analytics overview"
              width={320}
              height={240}
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
