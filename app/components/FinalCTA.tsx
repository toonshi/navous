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
          <a href="/how-it-works" className="bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#0fa3c4] transition cursor-pointer no-underline shadow-lg shadow-primary/20">
            See How It Works
          </a>
          <a href="/features" className="border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-md font-bold text-lg hover:border-slate-900 hover:bg-slate-50 transition cursor-pointer no-underline">
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
