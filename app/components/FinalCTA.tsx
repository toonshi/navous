"use client";

import React from "react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-primary px-5 py-24 sm:px-8 md:py-28">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 sm:px-5 md:mb-10">
          No-Risk Implementation
        </span>
        <h2 className="font-display mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:mb-8 md:text-7xl">
          Ready to map your building?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base font-medium leading-relaxed text-white/60 sm:text-lg md:mb-12 md:text-xl">
          Send a floor plan and we&apos;ll turn it into a live walkthrough you can test with your team. No hardware to install, no app to build, and no pressure to pretend the pilot is further along than it is.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
          <Link href="/#contact" className="btn-primary w-full sm:min-w-[180px] sm:w-auto">Get Started</Link>
          <Link href="/how-it-works" className="btn-secondary w-full sm:min-w-[180px] sm:w-auto">Learn More</Link>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-white/5 pt-8 md:mt-16 md:gap-x-12 md:gap-y-6">
           <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-accent opacity-50" />
              SOC 2 COMPLIANT
           </div>
           <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-accent opacity-50" />
              GDPR READY
           </div>
           <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-accent opacity-50" />
              WCAG 2.1 ACCESSIBLE
           </div>
        </div>
      </div>
    </section>
  );
}
