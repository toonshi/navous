"use client";

import React from "react";

export default function LogoBar() {
  const logos = [
    { name: "Regional Hospitals", icon: "🏥" },
    { name: "Urban Mall Groups", icon: "🛍️" },
    { name: "International Airports", icon: "✈️" },
    { name: "University Campuses", icon: "🎓" },
    { name: "Corporate Headquarters", icon: "🏢" },
  ];

  return (
    <section className="py-12 bg-secondary border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
          Built for institutional environments like:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3">
              <span className="text-2xl grayscale brightness-200">{logo.icon}</span>
              <span className="font-display text-sm font-bold text-white whitespace-nowrap tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
