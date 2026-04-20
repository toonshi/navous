"use client";

import React from "react";
import { Sparkle } from "./Doodles";

const stats = [
  { value: "Same day", label: "first interactive map preview after you share your floor plans", sparkleColor: "#FFADAD" },
  { value: "0", label: "apps visitors need to download before they can navigate", sparkleColor: "#FFD6A5" },
  { value: "More time", label: "for your staff, because fewer people need to ask for directions", sparkleColor: "#CAFFBF" },
];

export default function TrustStats() {
  return (
    <section className="py-20 px-8 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-slate-500 text-sm font-semibold tracking-wide uppercase">Why teams choose Navous</p>
          <p className="text-slate-400 text-sm mt-2">Simple rollout. Clear value. Better visitor experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.value} className="card-hover rounded-2xl p-8 text-center border border-slate-200 bg-white shadow-sm relative overflow-hidden">
              <Sparkle
                size={14}
                color={stat.sparkleColor}
                className="absolute top-4 right-5 doodle-float opacity-90"
              />
              <Sparkle
                size={9}
                color={stat.sparkleColor}
                className="absolute top-6 right-10 doodle-float-offset opacity-60"
              />
              <p className="font-laila text-[3rem] font-bold leading-none mb-3 text-[#13B7DA]">
                {stat.value}
              </p>
          <p className="text-slate-500 text-[12px] tracking-wide font-semibold leading-snug mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
