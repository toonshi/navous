"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    title: "Spatial Ingestion",
    description: "Automated extraction of architectural features from existing CAD (DXF), PDF, or high-resolution image assets.",
    illustration: "/illustrations/step-upload.svg",
  },
  {
    title: "Distributed Processing",
    description: "Our spatial engine performs morphological refinement and generates high-performance navigation graphs via PostGIS.",
    illustration: "/illustrations/step-configure.svg",
  },
  {
    title: "Instant Deployment",
    description: "A zero-footprint navigation layer is published to the browser, enabling sub-meter positioning via BLE and sensor fusion.",
    illustration: "/illustrations/step-live.svg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            The engineering pipeline
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A distributed architecture designed to convert static floor plans into semantically rich, navigable digital twins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-start text-left">
              <div className="w-full aspect-video bg-slate-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-slate-100">
                <Image
                  src={step.illustration}
                  alt={step.title}
                  width={300}
                  height={200}
                  className="w-full max-w-[240px] opacity-80"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-indigo-600 font-mono text-sm font-bold tracking-tighter">
                  STEP_{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-space-grotesque text-2xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
