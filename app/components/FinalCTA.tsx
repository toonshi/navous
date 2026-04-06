"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="bg-white py-28 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block border border-primary/40 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
          Get Started
        </span>
        <h2 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tighter text-secondary mb-6 leading-tight">
          Every day without Navous
          <br />
          is a day of <span className="text-primary">avoidable loss.</span>
        </h2>
        <p className="text-secondary/60 text-lg mb-4 leading-relaxed max-w-xl mx-auto">
          Missed appointments. Frustrated shoppers. Nurses giving directions
          instead of care. Staff hours wasted. These aren&apos;t abstract problems —
          they&apos;re happening in your building right now.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <button className="bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#0fa3c4] transition cursor-pointer">
            Book a Demo
          </button>
          <button className="border border-slate-200 text-secondary/60 px-10 py-4 rounded-md font-bold text-lg hover:border-slate-300 hover:text-secondary transition cursor-pointer">
            See How It Works
          </button>
        </div>
        <p className="text-secondary/40 text-sm mt-8">
          Free setup · No hardware · Live in 3 weeks · Cancel anytime
        </p>
      </div>
    </section>
  );
}
