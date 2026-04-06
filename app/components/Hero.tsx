"use client";

import React from "react";

const stats = [
  { value: "38%", label: "Fewer staff-directed queries" },
  { value: "3 min", label: "Saved per visitor journey" },
  { value: "99.3%", label: "Routing accuracy" },
  { value: "< 5 sec", label: "Time to first route" },
];

export default function Hero() {
  return (
    <section className="bg-dark relative overflow-hidden">
      {/* Ambient glow — top left */}
      <div
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: "#13B7DA" }}
      />
      {/* Ambient glow — bottom right */}
      <div
        className="absolute -bottom-32 right-1/4 w-[480px] h-[480px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: "#13B7DA" }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 pt-28 pb-24 relative z-10">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Indoor Navigation · Real-Time · AI-Powered
        </div>

        {/* Headline */}
        <h1 className="font-space-grotesque text-5xl md:text-[4.5rem] font-bold text-white leading-[1.05] max-w-4xl mb-6">
          Stop losing people
          <br />
          <span className="text-primary">inside your building.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-12">
          Navous delivers real-time indoor navigation for hospitals, malls, and
          campuses — so every visitor arrives with confidence, and every
          operator knows exactly what&#39;s happening on every floor.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition hover:brightness-110 cursor-pointer">
            Book a Demo
          </button>
          <button className="border border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-400 hover:text-white transition cursor-pointer">
            See How It Works
          </button>
        </div>

        {/* Stats row */}
        <div className="border-t border-slate-800 pt-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="font-space-grotesque text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
