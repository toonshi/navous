"use client";

import React from "react";

const stats = [
  { value: "22 MIN", label: "STAFF TIME SAVED PER SHIFT" },
  { value: "31%", label: "FEWER MISSED APPOINTMENTS" },
  { value: "99.3%", label: "INDOOR ROUTING ACCURACY" },
];

export default function TrustStats() {
  return (
    <section className="py-20 px-8" style={{ background: "linear-gradient(135deg, #13B7DA 0%, #0e9ab9 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white text-sm font-semibold tracking-wide uppercase">Measured Impact from Early Deployments</p>
          <p className="text-white/70 text-sm mt-2">Based on pilot rollout data across healthcare, retail, and campus facilities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const colors = ["#CAFFBF", "#FDFFB6", "#FFD6A5"];
            return (
              <div key={stat.value} className="rounded-2xl p-8 text-center shadow-sm"
                style={{ background: colors[i] }}>
                <p className="font-space-grotesque text-[3rem] font-bold text-slate-900 leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-slate-600 text-[12px] uppercase tracking-widest font-bold">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
