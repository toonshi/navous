"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Map your space",
    description:
      "Upload your existing floor plans or let us survey your building. We digitise every room, corridor, lift, and access point — no hardware installation required.",
    accent: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    title: "Configure & brand it",
    description:
      "Set up points of interest, accessible routes, and routing logic through our no-code dashboard. Match your brand colours and language in minutes.",
    accent: "bg-dark text-white",
  },
  {
    number: "03",
    title: "Visitors navigate",
    description:
      "Visitors scan a QR code or tap a link — and they're guided turn-by-turn in real time. No app download. No sign-up. Just directions that work.",
    accent: "bg-primary text-white",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Process
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Live in days, not months.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            No custom dev work. No procurement nightmare. Navous integrates with
            what you already have and goes live fast.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-6"
            >
              <span
                className={`self-start px-3 py-1.5 rounded-lg text-sm font-bold ${step.accent}`}
              >
                {step.number}
              </span>
              <div>
                <h3 className="font-space-grotesque text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
