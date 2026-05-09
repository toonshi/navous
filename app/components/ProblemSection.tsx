"use client";

import React from "react";
import Image from "next/image";
import { GlobeIcon, AccessibilityIcon } from "./Doodles";

export default function ProblemSection() {
  return (
    <section className="py-24 px-8 bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        {/* Row 1 — Visitor Experience */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Seamless Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Guide visitors from
              <br />
              <span className="text-accent">door to destination.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium mb-6">
              Ensure every visitor reaches their destination without the frustration of getting lost or asking for directions. 
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Give your guests a clear, interactive path that works instantly on any phone, for any building.
            </p>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <Image
                src="/visitor-nav.jpg"
                alt="Navous visitor navigation interface on mobile"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
              <div className="border-t border-white/10 bg-black/20 px-6 py-4">
                <span className="text-xs font-bold text-accent tracking-wide">
                  A clear, interactive path for every visitor.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 — Building Insights */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
             <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Building Insights
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              See where your
              <br />visitors need help.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Understand the flow of your building with real-time insights. Identify exactly where people get stuck to improve your signage, optimize floor plans, and ensure a smooth journey for everyone.
            </p>
          </div>
          <div className="flex-1">
            <div className="aspect-square max-w-sm mx-auto bg-[#000000] rounded-2xl shadow-2xl p-6 relative overflow-hidden border border-white/5">
               <div className="absolute inset-0 opacity-70 bg-[url('/isometric.jpg')] bg-cover bg-center" />
               <div className="relative h-full flex flex-col gap-4">
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="flex-1 rounded border border-white/5 flex items-center justify-center">
                     <div className="w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-pulse" />
                     <div className="w-16 h-16 rounded-full bg-accent/30 blur-xl" />
                  </div>
                  <div className="h-12 w-full bg-white/5 rounded" />
               </div>
            </div>
          </div>
        </div>

        {/* Row 3 — Accessibility */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
             <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Accessibility
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Navigation for
              <br />everyone.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Built with accessibility in mind. Automated wheelchair-optimized routing and high-contrast UI ensure every visitor, regardless of ability, moves through your space with ease.
            </p>
          </div>
          <div className="flex-1">
             <div className="bg-white/5 rounded-xl border border-white/10 shadow-xl p-8 flex flex-col gap-6 backdrop-blur-sm">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                   <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10">
                      <AccessibilityIcon className="text-accent w-6 h-6" />
                   </div>
                   <div className="flex-1">
                      <div className="h-3 w-1/2 bg-white/20 rounded mb-2" />
                      <div className="h-2 w-1/4 bg-white/10 rounded" />
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10">
                      <GlobeIcon className="text-accent w-6 h-6" />
                   </div>
                   <div className="flex-1">
                      <div className="h-3 w-1/2 bg-white/20 rounded mb-2" />
                      <div className="h-2 w-1/4 bg-white/10 rounded" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
