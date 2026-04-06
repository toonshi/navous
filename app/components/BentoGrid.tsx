"use client";

import React from "react";

const BentoGrid = () => {
  return (
    <section id="features" className="bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4">
            The machine behind the map.
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto leading-relaxed">
            Three capabilities. One seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Box A: Large — Searchable Infrastructure */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-10 flex flex-col justify-end min-h-[360px] relative overflow-hidden shadow-sm">
            <img
              src="/Building.svg"
              alt=""
              aria-hidden="true"
              className="absolute top-0 right-0 h-full w-auto opacity-[0.08] object-cover translate-x-8"
            />
            <span className="relative text-[#13B7DA] text-xs font-semibold uppercase tracking-widest mb-3">
              Infrastructure
            </span>
            <h3 className="relative font-space-grotesque text-3xl font-bold tracking-tighter text-black mb-3 leading-tight">
              Searchable Infrastructure.
            </h3>
            <p className="relative text-[#475569] text-base max-w-md leading-relaxed">
              Every corridor, lift, and entrance becomes a searchable node. Visitors find any room in under 60 seconds; no app download required.
            </p>
          </div>

          {/* Box B: Accessibility */}
          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] shadow-sm">
            <img
              src="/Accesibility illustration.svg"
              alt="Accessibility"
              className="w-14 h-14"
            />
            <div>
              <span className="text-[#13B7DA] text-xs font-semibold uppercase tracking-widest mb-3 block">
                Accessibility
              </span>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tighter text-black mb-3 leading-snug">
                Routing for everyone.
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                Digital paths that bypass stairs and prioritize lifts.
              </p>
            </div>
          </div>

          {/* Box C: Real-time Analytics */}
          <div className="md:col-span-3 bg-slate-50 rounded-3xl p-10 flex flex-col md:flex-row md:items-center gap-8 shadow-sm">
            <div className="flex-1">
              <span className="text-[#13B7DA] text-xs font-semibold uppercase tracking-widest mb-3 block">
                Real-time Analytics
              </span>
              <h3 className="font-space-grotesque text-3xl font-bold tracking-tighter text-black mb-3 leading-tight">
                Zero blind spots.
              </h3>
              <p className="text-[#475569] text-base leading-relaxed max-w-lg">
                See exactly where your visitors get stuck. Foot-traffic heatmaps and congestion alerts; turning your space into intelligence you can act on.
              </p>
            </div>
            <button className="self-start md:self-center bg-black text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition cursor-pointer whitespace-nowrap">
              View Analytics Demo &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
