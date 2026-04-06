"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section id="features" className="bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
            The intelligence behind every corridor.
          </h2>
          <p className="text-secondary/60 text-lg max-w-xl mx-auto leading-relaxed">
            Wayfinding for visitors. Operational clarity for teams. Revenue insight for decision makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Box A: Large — Searchable Infrastructure */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col justify-end min-h-90 relative overflow-hidden">
            <Image
              src="/Building.svg"
              alt=""
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              aria-hidden
              className="absolute top-0 right-0 h-full w-auto opacity-[0.03] object-cover translate-x-8"
            />
            <span className="relative text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Infrastructure
            </span>
            <h3 className="relative font-space-grotesque text-3xl font-bold tracking-tighter text-secondary mb-3 leading-tight">
              Searchable indoor infrastructure.
            </h3>
            <p className="relative text-secondary/60 text-base max-w-md leading-relaxed">
              Convert every floor, corridor, and entrance into a live search layer. Visitors find destinations in under 60 seconds, while your team handles fewer directional interruptions.
            </p>
          </div>

          {/* Box B: Accessibility */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between min-h-90">
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
              <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-3 block">
                Accessibility
              </span>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tighter text-secondary mb-3 leading-snug">
                Accessible navigation for everyone.
              </h3>
              <p className="text-secondary/60 text-sm leading-relaxed">
                Route around stairs, prioritize lifts, and support multilingual guidance so every guest can move confidently.
              </p>
            </div>
          </div>

          {/* Box C: Real-time Analytics */}
          <div className="md:col-span-3 bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-3 block">
                Real-time Analytics
              </span>
              <h3 className="font-space-grotesque text-3xl font-bold tracking-tighter text-secondary mb-3 leading-tight">
                See movement patterns, not just map views.
              </h3>
              <p className="text-secondary/60 text-base leading-relaxed max-w-lg">
                Pinpoint where visitors slow down, reroute, or abandon journeys. Heatmaps and congestion alerts help operations teams redesign flow with confidence.
              </p>
            </div>
            <Image
              src="/illustrations/analytics.svg"
              alt="Analytics overview"
              width={320}
              height={240}
              className="w-full max-w-xs opacity-90"
            />
            <button
              className="self-start md:self-center bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#0fa3c4] transition cursor-pointer whitespace-nowrap"
              aria-label="View Analytics Demo"
            >
              View Analytics Demo &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
