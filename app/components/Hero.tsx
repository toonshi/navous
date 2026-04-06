"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-space-grotesque text-[3.6rem] md:text-[5.4rem] font-bold tracking-tighter text-black leading-[1.02] mb-8">
          Turn Every Visitor
          <br className="hidden md:block" />
          into a Navigated Guest.
        </h1>
        <p className="text-[#475569] text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
          One spatial intelligence platform for every facility need. From real-time wayfinding to deep movement analytics, Navous helps you run smoother operations and deliver lasting visitor satisfaction.
        </p>
        <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-2xl mx-auto">
          No app downloads. No hardware rollout. Accessible navigation for people with mobility needs and visitors who prefer different languages.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition cursor-pointer">
            Book a Demo
          </button>
          <button
            className="text-slate-500 px-8 py-4 rounded-full font-bold text-lg hover:text-slate-900 transition cursor-pointer"
            aria-label="See how it works"
          >
            See how it works &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
