"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="bg-dark py-28 px-8 relative overflow-hidden">
      {/* Central glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[560px] h-[560px] rounded-full opacity-[0.12] blur-3xl"
          style={{ background: "#13B7DA" }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="inline-block border border-primary/40 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
          Get Started
        </span>
        <h2 className="font-space-grotesque text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          The buildings that solve
          <br />
          navigation <span className="text-primary">win.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
          Start with a 30-minute demo. We will walk you through exactly how
          Navous works in your specific space — no generic sales pitch.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition cursor-pointer">
            Book a Demo
          </button>
          <button className="border border-slate-700 text-slate-300 px-10 py-4 rounded-xl font-bold text-lg hover:border-slate-500 hover:text-white transition cursor-pointer">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
