"use client";

import React from "react";
import { Sparkle, ScatterDots } from "./Doodles";

export default function FinalCTA() {
  return (
    <section className="py-28 px-8 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background doodle accents */}
      <ScatterDots color="#13B7DA" className="absolute top-8 left-8 opacity-20 pointer-events-none" />
      <ScatterDots color="#FFADAD" className="absolute bottom-8 right-8 opacity-25 pointer-events-none" />
      <Sparkle size={22} color="#FFD6A5" className="absolute top-12 right-16 doodle-float pointer-events-none opacity-70" />
      <Sparkle size={14} color="#CAFFBF" className="absolute top-24 right-28 doodle-float-offset pointer-events-none opacity-60" />
      <Sparkle size={16} color="#FFADAD" className="absolute bottom-16 left-20 doodle-float-slow pointer-events-none opacity-55" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-white/60 text-slate-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide border border-slate-100">
          <Sparkle size={10} color="#13B7DA" />
          Get Started
        </span>
        <h2 className="font-laila text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight">
          Your facility,
          <br />
          searchable in 21 days.
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
