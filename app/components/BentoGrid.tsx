"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            Everything you need,<br />none of the friction.
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Building navigation shouldn&apos;t be hard. We take your floor plans and turn them into a digital map your visitors can actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box A: Large — Searchable Infrastructure */}
          <div className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-end min-h-90 relative overflow-hidden border border-slate-200 bg-white shadow-sm">
            <h3 className="font-space-grotesque text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              From zero to live in weeks.
            </h3>
            <p className="text-slate-600 text-lg max-w-xl leading-relaxed font-medium">
              You don&apos;t have time for a year-long project. We take your current PDFs or CAD files and give you a fully searchable building map in under 21 days.
            </p>
          </div>

          {/* Box B: No Apps */}
          <div className="rounded-3xl p-8 flex flex-col justify-between min-h-90 border border-slate-200 bg-slate-900 text-white shadow-2xl">
            <div className="flex justify-center items-center h-full mb-8">
               <div className="text-8xl font-bold text-[#13B7DA]">0</div>
            </div>
            <div>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tight text-white mb-3 leading-snug">
                No Apps.<br />Just Scan.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                People won&apos;t download an app just to find a room. Navous runs right in the mobile browser as soon as they scan a QR code.
              </p>
            </div>
          </div>

          {/* Box C: Real-time Analytics */}
          <div className="md:col-span-3 rounded-3xl p-10 flex flex-col md:flex-row md:items-center gap-12 border border-slate-200 bg-white shadow-sm">
            <div className="flex-1">
              <h3 className="font-space-grotesque text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                See where people get lost.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
                Stop guessing where the bottlenecks are. Our heatmaps show you exactly where visitors struggle, so you can fix your signage or move staff to the right spots.
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
