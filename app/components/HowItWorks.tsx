"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "Week 1",
    title: "Upload your floor plans",
    description:
      "Send us your existing floor plans — any format. Our team digitises every room, corridor, lift, stairwell, and access point with AI. No hardware. No site visit required.",
    cardBg: "#FFD6A5",
    tagColor: "text-orange-700",
    tagBg: "bg-orange-100",
    illustration: "/illustrations/step-upload.svg",
  },
  {
    number: "Week 2",
    title: "Configure, test, and brand it",
    description:
      "Set up points of interest, accessible routes, and routing rules through our no-code dashboard. Match your brand. Integrate with your booking or appointment system if needed. Test with your team.",
    cardBg: "#FDFFB6",
    tagColor: "text-yellow-700",
    tagBg: "bg-yellow-100",
    illustration: "/illustrations/step-configure.svg",
  },
  {
    number: "Week 3",
    title: "Go live — visitors navigate",
    description:
      "Place QR codes at entrances. Visitors scan, and they're guided turn-by-turn in real time. No app download. No sign-up. No friction. Just directions that work.",
    cardBg: "#CAFFBF",
    tagColor: "text-emerald-700",
    tagBg: "bg-emerald-100",
    illustration: "/illustrations/step-live.svg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mt-3 mb-4">
            Floor plan to live navigation in 21 days.
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            No infrastructure overhaul or expensive hardware required. Navous deploys in three streamlined phases with minimal disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{ background: step.cardBg }}
            >
              <Image
                src={step.illustration}
                alt={step.title}
                width={320}
                height={200}
                className="w-full"
              />
              <div className="p-8 flex flex-col gap-4">
                <span className={`self-start px-3 py-1.5 rounded-lg text-sm font-bold ${step.tagBg} ${step.tagColor}`}>
                  {step.number}
                </span>
                <div>
                  <h3 className="font-space-grotesque text-xl font-bold tracking-tighter text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ background: "#FFADAD" }}>
          <p className="text-sm text-slate-700 font-medium"><span className="font-bold text-slate-900">Data Sovereignty:</span> Your spatial and operational data remains under your full control.</p>
          <p className="text-sm text-slate-700 font-medium"><span className="font-bold text-slate-900">Accessibility First:</span> Logic includes step-free, lift-priority, and audio-assisted routing.</p>
          <p className="text-sm text-slate-700 font-medium"><span className="font-bold text-slate-900">Frictionless Access:</span> No mandatory app installs or accounts required for visitor wayfinding.</p>
        </div>
      </div>
    </section>
  );
}
