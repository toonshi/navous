"use client";

import React from "react";

export default function LogoBar() {
  const logos = [
    { name: "Regional Hospitals" },
    { name: "Urban Mall Groups" },
    { name: "International Airports" },
    { name: "University Campuses" },
    { name: "Corporate Headquarters" },
    { name: "Conference Centres" },
  ];

  return (
    <section className="border-y border-white/5 bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
          Built for institutional environments like:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 opacity-40 transition-all duration-500 hover:opacity-100 sm:gap-x-16 sm:gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3 text-center">
              <span className="font-display text-sm font-bold tracking-tight text-white sm:whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
