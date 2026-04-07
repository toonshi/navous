"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "Week 1",
    title: "Sensor Setup & Map Prep",
    description:
      "Send us your existing floor plans. We convert them into a digital twin while you place our discreet, stick-on Bluetooth sensors. No wiring, no complex IT, just minutes per room.",
    accent: "bg-accent text-slate-900",
    illustration: "/illustrations/step-upload.svg",
  },
  {
    number: "Week 2",
    title: "Precision Calibration",
    description:
      "We configure your routing logic and calibrate the sensors for sub-meter accuracy. Your team tests the experience on their own phones to ensure the directions are flawless.",
    accent: "bg-accent text-slate-900",
    illustration: "/illustrations/step-configure.svg",
  },
  {
    number: "Week 3",
    title: "Launch & Track",
    description:
      "Place QR codes at entry points. Visitors scan once and get instant, turn-by-turn guidance through their mobile browser. No app downloads required. You see results from day one.",
    accent: "bg-[#13B7DA] text-white",
    illustration: "/illustrations/step-live.svg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-8" style={{ background: "linear-gradient(180deg, #f0feff 0%, #f8fafc 100%)" }}>
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
              className="bg-white border border-slate-100 rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                  <h3 className="font-space-grotesque text-xl font-bold tracking-tighter text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white border border-slate-100 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 shadow-sm">
          <p className="text-sm text-slate-600 font-medium"><span className="font-bold text-slate-900">Data Sovereignty:</span> Your spatial and operational data remains under your full control.</p>
          <p className="text-sm text-slate-600 font-medium"><span className="font-bold text-slate-900">Accessibility First:</span> Logic includes step-free, lift-priority, and audio-assisted routing.</p>
          <p className="text-sm text-slate-600 font-medium"><span className="font-bold text-slate-900">Frictionless Access:</span> No mandatory app installs or accounts required for visitor wayfinding.</p>
        </div>
      </div>
    </section>
  );
}
