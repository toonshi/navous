"use client";

import React from "react";
import { HospitalIcon, GlobeIcon, AccessibilityIcon } from "./Doodles";

export default function SecurityStack() {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Infrastructure
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Everything you need.<br />Nothing you have to manage.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We removed the two biggest barriers to indoor navigation: installing hardware and forcing visitors to download an app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
               <HospitalIcon className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">No Beacons or Wi-Fi</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Navous runs entirely on the visitor&apos;s smartphone using local sensor data and existing architectural blueprints. Zero hardware to install, calibrate, or maintain.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
               <GlobeIcon className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">App-Free Experience</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Visitors scan a QR code or tap a link in their appointment email to instantly open turn-by-turn navigation in their mobile browser. No downloads required.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start card-hover">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6">
               <AccessibilityIcon className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Floor Plan Sync</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Send us your CAD or PDF floor plans. Our engine digitizes and maps your entire facility, typically deploying your live wayfinding environment in under 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
