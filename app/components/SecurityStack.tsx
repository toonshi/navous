"use client";

import React from "react";
import { HospitalIcon, GlobeIcon, AccessibilityIcon } from "./Doodles";

export default function SecurityStack() {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Setup
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Everything you need.<br />Built for your team.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We made indoor navigation simple for everyone. No apps for your visitors to download, and a choice of how you want to set up your venue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
               <HospitalIcon className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Flexible Setup</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Start with just your floor plans or add small sensors for extra precision. We help you choose the best fit for your specific venue.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
               <GlobeIcon className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">No apps to download</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Visitors just scan a QR code to start. It works instantly right in their phone&apos;s browser, so nobody has to wait.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
               <AccessibilityIcon className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Set up a map yourself</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Simply upload your existing floor plans and use our easy tools to define your layout. You can have a live, working map ready for your visitors in just a few minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

