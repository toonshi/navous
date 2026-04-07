"use client";

import React from "react";

const stats = [
  { value: "22 MIN", label: "STAFF TIME SAVED PER SHIFT" },
  { value: "31%", label: "FEWER MISSED APPOINTMENTS" },
  { value: "99.3%", label: "INDOOR ROUTING ACCURACY" },
];

export default function TrustStats() {
  return (
    <section className="bg-secondary py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white text-sm font-semibold tracking-wide uppercase">Measured Impact from Early Deployments</p>
          <p className="text-white/40 text-sm mt-2">Based on pilot rollout data across healthcare, retail, and campus facilities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-space-grotesque text-[3rem] font-bold text-primary leading-none mb-3">
                {stat.value}
              </p>
              <p className="text-white/50 text-[12px] uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
