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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box A: Large — Searchable Infrastructure */}
          <div className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-end min-h-90 relative overflow-hidden border border-slate-200 bg-white">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-400">
              Infrastructure
            </span>
            <h3 className="font-space-grotesque text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              A searchable indoor layer.
            </h3>
            <p className="text-slate-600 text-lg max-w-xl leading-relaxed font-medium">
              Transform your facility into a live digital directory. Visitors find what they need in seconds, reducing staff interruptions and improving floor-wide operational efficiency.
            </p>
          </div>

          {/* Box B: Accessibility */}
          <div className="rounded-3xl p-8 flex flex-col justify-between min-h-90 border border-slate-200 bg-white">
            <div className="flex justify-center items-center h-full mb-8">
              <Image
                src="/illustrations/accessibility.svg"
                alt="Accessibility"
                width={200}
                height={150}
                className="w-full max-w-[180px]"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block text-slate-400">
                Accessibility
              </span>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tight text-slate-900 mb-3 leading-snug">
                Step-free wayfinding.
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Prioritize accessible routes, lift-only paths, and audio-assisted guidance for universal navigation.
              </p>
            </div>
          </div>

          {/* Box C: Real-time Analytics */}
          <div className="md:col-span-3 rounded-3xl p-10 flex flex-col md:flex-row md:items-center gap-12 border border-slate-200 bg-white">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block text-slate-400">
                Spatial Analytics
              </span>
              <h3 className="font-space-grotesque text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                Understand movement patterns.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
                Identify congestion points, track journey abandonment, and optimize staff deployment with high-precision heatmaps and flow analysis.
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
