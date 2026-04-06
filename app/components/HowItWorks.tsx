"use client";

import React from "react";

const steps = [
  {
    number: "Week 1",
    title: "Upload your floor plans",
    description:
      "Send us your existing floor plans — any format. Our team digitises every room, corridor, lift, stairwell, and access point with AI. No hardware. No site visit required.",
    accent: "bg-primary/10 text-primary",
  },
  {
    number: "Week 2",
    title: "Configure, test, and brand it",
    description:
      "Set up points of interest, accessible routes, and routing rules through our no-code dashboard. Match your brand. Integrate with your booking or appointment system if needed. Test with your team.",
    accent: "bg-dark text-white",
  },
  {
    number: "Week 3",
    title: "Go live — visitors navigate",
    description:
      "Place QR codes at entrances. Visitors scan, and they're guided turn-by-turn in real time. No app download. No sign-up. No friction. Just directions that work.",
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
            Live in 3 weeks. Not 3 months.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            No expensive hardware. No infrastructure overhaul. No IT project.
            Navous deploys in three clean steps — and your team barely needs to
            be involved.
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
