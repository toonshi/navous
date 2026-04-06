"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "Week 1",
    title: "Upload your floor plans",
    description:
      "Send us your existing floor plans — any format. Our team digitises every room, corridor, lift, stairwell, and access point with AI. No hardware. No site visit required.",
    accent: "bg-primary/10 text-primary",
    illustration: "/illustrations/step-upload.svg",
  },
  {
    number: "Week 2",
    title: "Configure, test, and brand it",
    description:
      "Set up points of interest, accessible routes, and routing rules through our no-code dashboard. Match your brand. Integrate with your booking or appointment system if needed. Test with your team.",
    accent: "bg-[#1E293B] text-slate-300",
    illustration: "/illustrations/step-configure.svg",
  },
  {
    number: "Week 3",
    title: "Go live — visitors navigate",
    description:
      "Place QR codes at entrances. Visitors scan, and they're guided turn-by-turn in real time. No app download. No sign-up. No friction. Just directions that work.",
    accent: "bg-primary text-white",
    illustration: "/illustrations/step-live.svg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0D1628] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Process
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-white mt-3 mb-4">
            Live in 3 weeks. Not 3 months.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No expensive hardware and no infrastructure overhaul. Navous deploys in three clean steps, with minimal lift from your internal team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl flex flex-col overflow-hidden"
            >
              <Image
                src={step.illustration}
                alt={step.title}
                width={320}
                height={200}
                className="w-full"
              />
              <div className="p-8 flex flex-col gap-4">
                <span className={`self-start px-3 py-1.5 rounded-lg text-sm font-bold ${step.accent}`}>
                  {step.number}
                </span>
                <div>
                  <h3 className="font-space-grotesque text-xl font-bold tracking-tighter text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <p className="text-sm text-slate-400"><span className="font-semibold text-white">Data ownership:</span> your floor plans and operational data remain yours.</p>
          <p className="text-sm text-slate-400"><span className="font-semibold text-white">Accessibility:</span> route logic includes wheelchair-friendly and lift-priority paths.</p>
          <p className="text-sm text-slate-400"><span className="font-semibold text-white">Visitor privacy:</span> no mandatory app install or account creation for wayfinding.</p>
        </div>
      </div>
    </section>
  );
}
