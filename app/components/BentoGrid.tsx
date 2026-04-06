"use client";

import React from "react";

const useCases = ["Hospitals", "Shopping Malls", "University Campuses", "Airports"];

const BentoGrid = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto py-24 px-8">
      {/* Section header */}
      <div className="text-center mb-14">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Platform
        </span>
        <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
          Built for the spaces that matter most.
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
          From emergency departments to international airports — Navous works
          where getting lost has real consequences.
        </p>
      </div>

      {/* Bento grid — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Card 1: Main hook (col-span-2) */}
        <div className="md:col-span-2 bg-dark rounded-2xl p-10 flex flex-col justify-end min-h-[320px] relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-72 h-72 opacity-20 blur-2xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #13B7DA 0%, transparent 70%)" }}
          />
          <img
            src="/Building.svg"
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 h-full w-auto opacity-20 object-cover"
          />
          <span className="relative text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            AI-Powered Wayfinding
          </span>
          <h3 className="relative font-space-grotesque text-3xl font-bold text-white mb-3 leading-tight">
            The right door.<br />The right floor. Every time.
          </h3>
          <p className="relative text-slate-400 text-base max-w-md leading-relaxed">
            Navous eliminates dead-ends and confused visitors with turn-by-turn
            indoor routing — built for the real-world complexity of large buildings.
          </p>
        </div>

        {/* Card 2: Accessibility */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 flex flex-col justify-between min-h-[320px]">
          <img
            src="/Accesibility illustration.svg"
            alt="Accessibility"
            className="w-14 h-14"
          />
          <div>
            <h3 className="font-space-grotesque text-2xl font-bold text-slate-900 mb-3 leading-snug">
              Nobody<br />left behind.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Automatic routing via ramps, lifts, and accessible entrances — so
              every visitor arrives independently, without having to ask for help.
            </p>
          </div>
          <span className="self-start mt-5 bg-primary/20 text-primary text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
            WCAG Compliant
          </span>
        </div>

        {/* Card 3: Stat — 38% */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col justify-center min-h-[200px] shadow-sm">
          <p className="font-space-grotesque text-6xl font-bold text-primary leading-none mb-3">
            38%
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Reduction in staff-assisted navigation requests within the first month.
          </p>
        </div>

        {/* Card 4: Stat — 3 min */}
        <div className="bg-dark rounded-2xl p-8 flex flex-col justify-center min-h-[200px]">
          <p className="font-space-grotesque text-6xl font-bold text-white leading-none mb-3">
            3 min
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Average time saved per visitor journey across all building types.
          </p>
        </div>

        {/* Card 5: Stat — 99.3% */}
        <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center min-h-[200px]">
          <p className="font-space-grotesque text-6xl font-bold text-white leading-none mb-3">
            99.3%
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Routing accuracy across every floor plan we have ever mapped.
          </p>
        </div>

        {/* Card 6: Analytics (col-span-2) */}
        <div className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-2xl p-10 flex flex-col justify-between min-h-[280px]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
              Analytics & Intelligence
            </span>
            <h3 className="font-space-grotesque text-3xl font-bold text-slate-900 mb-4 leading-snug">
              Your building has blind spots.
              <br />
              <span className="text-primary">We map them.</span>
            </h3>
            <p className="text-slate-500 max-w-md leading-relaxed">
              Foot-traffic heatmaps, real-time flow analytics, and congestion
              alerts — turning your space into a data source you can actually act
              on, not just observe.
            </p>
          </div>
          <button className="mt-8 self-start bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-700 transition cursor-pointer">
            View Analytics Demo →
          </button>
        </div>

        {/* Card 7: Use cases */}
        <div className="bg-dark rounded-2xl p-8 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
          <div
            className="absolute bottom-0 right-0 w-48 h-48 opacity-10 blur-2xl pointer-events-none"
            style={{ background: "#13B7DA" }}
          />
          <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            Works in
          </span>
          <ul className="flex flex-col gap-3 my-4 relative">
            {useCases.map((uc) => (
              <li key={uc} className="flex items-center gap-3 text-white">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="font-space-grotesque font-semibold text-lg">{uc}</span>
              </li>
            ))}
          </ul>
          <button className="relative self-start border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:border-white hover:bg-white/10 transition cursor-pointer">
            Book a Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
