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
          Every day without Navous
          <br />
          is a day of <span className="text-primary">avoidable loss.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-4 leading-relaxed max-w-xl mx-auto">
          Missed appointments. Frustrated shoppers. Nurses giving directions
          instead of care. Staff hours wasted. These aren't abstract problems —
          they're happening in your building right now.
        </p>
        <p className="text-slate-500 text-base mb-12">
          Book a 30-minute demo. We'll show you exactly what it looks like in
          your space — not a generic walkthrough.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition cursor-pointer">
            Book a Demo
          </button>
          <button className="border border-slate-700 text-slate-300 px-10 py-4 rounded-xl font-bold text-lg hover:border-slate-500 hover:text-white transition cursor-pointer">
            View Pricing
          </button>
        </div>
        <p className="text-slate-600 text-sm mt-8">
          Free setup · No hardware · Live in 3 weeks · Cancel anytime
        </p>
      </div>
    </section>
  );
}
