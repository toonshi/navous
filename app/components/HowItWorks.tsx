"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    title: "Scan",
    description: "Point your camera at a Navous QR code at any entrance or hallway.",
    illustration: "/illustrations/step-upload.svg",
  },
  {
    title: "Navigate",
    description: "Get a live, interactive map in your browser. No app download required.",
    illustration: "/illustrations/step-configure.svg",
  },
  {
    title: "Arrive",
    description: "Follow turn-by-turn directions to reach your destination without friction.",
    illustration: "/illustrations/step-live.svg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Show, don&apos;t just tell.
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Navous is designed to be invisible. No app installs, no accounts—just instant directions when you need them most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="w-full aspect-video bg-slate-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-slate-100">
                <Image
                  src={step.illustration}
                  alt={step.title}
                  width={300}
                  height={200}
                  className="w-full max-w-[240px]"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold">
                  {index + 1}
                </span>
                <h3 className="font-space-grotesque text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
