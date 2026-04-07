"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-28 px-8" style={{ background: "linear-gradient(135deg, #e0f7fc 0%, #f0feff 50%, #fff8f0 100%)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block border border-primary/40 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
          Get Started
        </span>
        <h2 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight">
          Your facility,
          <br />
          <span className="text-primary">searchable in 21 days.</span>
        </h2>
        <p className="text-slate-700 text-lg mb-4 leading-relaxed max-w-xl mx-auto font-medium">
          Join the leading organizations using Navous to transform their visitor experience and facility efficiency. No hardware, no app downloads, just results.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <a href="/how-it-works" className="bg-primary text-slate-900 px-12 py-5 rounded-xl font-black text-lg hover:brightness-110 transition-all hover:scale-[1.02] cursor-pointer no-underline shadow-[0_20px_40px_-15px_rgba(0,229,255,0.4)]">
            See How It Works
          </a>
          <a href="/features" className="glass border-2 border-slate-900/10 text-slate-900 px-12 py-5 rounded-xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all hover:scale-[1.02] cursor-pointer no-underline">
            Explore Features
          </a>
        </div>
        <p className="text-slate-400 text-sm font-bold mt-8 tracking-wide">
          FREE SETUP · NO HARDWARE · LIVE IN 3 WEEKS
        </p>
      </div>
    </section>
  );
}
