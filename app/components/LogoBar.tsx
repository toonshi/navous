"use client";

import React from "react";

export default function LogoBar() {
  const logos = [
    { name: "Regional Hospitals", icon: "🏥" },
    { name: "Urban Mall Groups", icon: "🛍️" },
    { name: "International Airports", icon: "✈️" },
    { name: "University Campuses", icon: "🎓" },
    { name: "Corporate Headquarters", icon: "🏢" },
    { name: "Conference Centres", icon: "🎟️" },
  ];

  return (
    <section className="border-y border-white/5 bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
          Built for institutional environments like:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 sm:gap-x-16 sm:gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3 text-center">
              <span className="text-2xl grayscale brightness-200">{logo.icon}</span>
              <span className="font-display text-sm font-bold tracking-tight text-white sm:whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
