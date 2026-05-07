"use client";

import React from "react";

const steps = [
  {
    title: "Share your floor plans",
    description: "Send your existing CAD files, PDFs, or image plans. No site wiring, no hardware install, no construction work.",
  },
  {
    title: "We map your visitor journeys",
    description: "We turn those plans into clear, phone-friendly routes so people can find entrances, departments, stores, and exits quickly.",
  },
  {
    title: "Go live and keep improving",
    description: "Launch with a QR code and start guiding visitors right away, then update routes and points of interest anytime.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/5 bg-primary px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-24">
          <span className="text-accent text-sm font-bold uppercase tracking-[0.25em] mb-6 block">
            Implementation Path
          </span>
          <h2 className="font-display mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            From floor plan to live wayfinding
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-white/50 sm:text-lg md:text-xl">
            A simple three-step rollout your operations team can approve quickly.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-start text-left group">
              <div className="relative mb-8 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:border-accent/50 md:mb-10">
                 <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                 <span className="font-display text-6xl font-black text-white/10 transition-colors duration-300 group-hover:text-accent/10 sm:text-7xl">0{index + 1}</span>
              </div>
              <div className="mb-5 flex items-center gap-4 md:mb-6">
                <span className="text-accent font-bold text-xs tracking-widest uppercase px-3 py-1 bg-accent/10 border border-accent/20 rounded">
                  STEP_{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {step.title}
              </h3>
              <p className="text-base font-medium leading-relaxed text-white/50 sm:text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
