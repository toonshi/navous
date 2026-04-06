"use client";

import React from "react";

const painPoints = [
  {
    icon: "🏥",
    stat: "1 in 4",
    label: "patients arrive late to their appointment because of wayfinding issues",
    color: "border-primary/30 bg-primary/5",
    statColor: "text-primary",
  },
  {
    icon: "🛍️",
    stat: "23 min",
    label: "the average shopper wanders before giving up and walking out empty-handed",
    color: "border-slate-200 bg-slate-50",
    statColor: "text-slate-900",
  },
  {
    icon: "👷",
    stat: "18 min",
    label: "lost per staff member per shift giving directions — time that belongs to their actual job",
    color: "border-dark/20 bg-dark/5",
    statColor: "text-dark",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mt-3 mb-5 leading-tight">
            Getting lost isn&apos;t just frustrating.
            <br />
            <span className="text-primary">It&apos;s costing you.</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Bad indoor navigation is invisible until you measure it. When you
            do, the numbers are uncomfortable — and the fix is simpler than you
            think.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {painPoints.map((p) => (
            <div
              key={p.stat}
              className={`rounded-2xl border p-8 flex flex-col gap-4 ${p.color}`}
            >
              <span className="text-3xl">{p.icon}</span>
              <p className={`font-space-grotesque text-5xl font-bold leading-none ${p.statColor}`}>
                {p.stat}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">{p.label}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="bg-dark rounded-2xl p-10 flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden">
          <div
            className="absolute right-0 top-0 w-64 h-64 opacity-10 blur-2xl pointer-events-none"
            style={{ background: "#13B7DA" }}
          />
          <div className="flex-1 relative">
            <p className="font-space-grotesque text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              &ldquo;Navigation is not a nice-to-have. It is the difference between a
              visitor who completes their journey and one who doesn&apos;t.&rdquo;
            </p>
            <p className="text-slate-400 text-sm">
              The hidden cost that facility managers stop ignoring once they
              see the data.
            </p>
          </div>
          <div className="shrink-0 relative">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition cursor-pointer whitespace-nowrap">
              See Your Numbers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
