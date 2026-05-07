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
    <section id="how-it-works" className="py-32 px-8 bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent text-sm font-bold uppercase tracking-[0.25em] mb-6 block">
            Implementation Path
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 font-display">
            From floor plan to live wayfinding
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A simple three-step rollout your operations team can approve quickly.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-start text-left group">
              <div className="w-full aspect-video bg-white/5 rounded-2xl mb-10 flex items-center justify-center overflow-hidden border border-white/10 relative backdrop-blur-sm group-hover:border-accent/50 transition-all duration-300 shadow-2xl">
                 <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                 <span className="text-7xl font-display font-black text-white/10 group-hover:text-accent/10 transition-colors duration-300">0{index + 1}</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-bold text-xs tracking-widest uppercase px-3 py-1 bg-accent/10 border border-accent/20 rounded">
                  STEP_{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {step.title}
              </h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
