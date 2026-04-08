"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-28 px-8" style={{ background: "#CAFFBF" }}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-white/60 text-slate-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
          Get Started
        </span>
        <h2 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight">
          Your facility,
          <br />
          <span style={{ color: "#13B7DA" }}>searchable in 21 days.</span>
        </h2>
        <p className="text-slate-700 text-lg mb-4 leading-relaxed max-w-xl mx-auto font-medium">
          Join the leading organizations using Navous to transform their visitor experience and facility efficiency. No hardware, no app downloads, just results.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <a href="/how-it-works" className="btn-primary"><span>See How It Works</span></a>
          <a href="/features" className="btn-secondary"><span>Explore Features</span></a>
        </div>
        <p className="text-slate-500 text-sm font-bold mt-8 tracking-wide">
          FREE SETUP · NO HARDWARE · LIVE IN 3 WEEKS
        </p>
      </div>
    </section>
  );
}
