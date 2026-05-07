"use client";

import React from "react";
import { Sparkle } from "./Doodles";

const stats = [
  { value: "Same day", label: "first interactive map preview after you share your floor plans", sparkleColor: "#3B82F6" },
  { value: "0", label: "apps visitors need to download before they can navigate", sparkleColor: "#60A5FA" },
  { value: "More time", label: "for your staff, because fewer people need to ask for directions", sparkleColor: "#93C5FD" },
];

export default function TrustStats() {
  return (
    <section className="py-24 px-8 bg-primary border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Why teams choose Navous
          </span>
          <p className="text-white/40 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Simple rollout. Clear value. Better visitor experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="card-hover rounded-3xl p-10 text-center border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <Sparkle
                size={14}
                color={stat.sparkleColor}
                className="absolute top-6 right-6 doodle-float opacity-40"
              />
              <Sparkle
                size={9}
                color={stat.sparkleColor}
                className="absolute top-8 right-12 doodle-float-offset opacity-20"
              />
              <p className="font-display text-[3.5rem] font-bold leading-none mb-6 text-white">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm tracking-wide font-medium leading-relaxed mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
