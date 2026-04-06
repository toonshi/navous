"use client";

import React, { useState } from "react";

const sectors = [
  {
    name: "Healthcare",
    outcomes: [
      { value: "31%", label: "FEWER MISSED APPOINTMENTS" },
      { value: "22 MIN", label: "SAVED PER NURSE, PER SHIFT" },
    ],
  },
  {
    name: "Retail",
    outcomes: [
      { value: "47%", label: "INCREASE IN IMPULSE PURCHASES" },
      { value: "38 MIN", label: "LONGER AVERAGE DWELL TIME" },
    ],
  },
  {
    name: "Airports",
    outcomes: [
      { value: "60 SEC", label: "TO FIND ANY GATE OR SERVICE" },
      { value: "38%", label: "REDUCTION IN STAFF-ASSISTED NAVIGATION" },
    ],
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];

  return (
    <section id="use-cases" className="bg-white py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4">
            Built for where it matters.
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Real outcomes. Real sectors.
          </p>
        </div>

        {/* Sector tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-20">
          {sectors.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition cursor-pointer ${
                active === i
                  ? "bg-black text-white"
                  : "text-[#475569] hover:text-black"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-2xl mx-auto">
          {sector.outcomes.map((o) => (
            <div key={o.value} className="text-center">
              <p className="font-space-grotesque text-[3rem] font-bold text-black leading-none mb-3">
                {o.value}
              </p>
              <p className="text-[#475569] text-[12px] uppercase tracking-widest">
                {o.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
