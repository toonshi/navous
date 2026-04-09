"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            The Infrastructure Standard for<br />Spatial Intelligence
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            You don&apos;t need to hire more staff to act as human GPS. Turn your existing floor plans into a digital intelligence layer that manages itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box A: Large — Searchable Infrastructure */}
          <div className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-end min-h-90 relative overflow-hidden border border-slate-200 bg-white">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-400">
              Operational Efficiency
            </span>
            <h3 className="font-space-grotesque text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              Your facility, searchable in 21 days.
            </h3>
            <p className="text-slate-600 text-lg max-w-xl leading-relaxed font-medium">
              Infrastructure doesn&apos;t have to be slow. We take your existing PDFs or CAD files and deploy a fully searchable navigation layer across your entire building in under three weeks.
            </p>
          </div>

          {/* Box B: No Apps */}
          <div className="rounded-3xl p-8 flex flex-col justify-between min-h-90 border border-slate-200 bg-slate-900 text-white">
            <div className="flex justify-center items-center h-full mb-8">
               <div className="text-8xl font-bold text-[#13B7DA]">0</div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block text-slate-400">
                Zero Friction
              </span>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tight text-white mb-3 leading-snug">
                No Apps. No USSD.<br />Just Scan.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Kenyans value speed. Navous runs instantly in any mobile browser. No app store hurdles means 100% adoption from day one.
              </p>
            </div>
          </div>

          {/* Box C: Real-time Analytics */}
          <div className="md:col-span-3 rounded-3xl p-10 flex flex-col md:flex-row md:items-center gap-12 border border-slate-200 bg-white">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block text-slate-400">
                Facility Intelligence
              </span>
              <h3 className="font-space-grotesque text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                Understand your visitors&apos; journey.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
                Identify bottleneck corridors, track journey abandonment, and optimize your staff deployment with high-precision heatmaps. Stop guessing; start seeing.
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
