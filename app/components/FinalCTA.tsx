"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-28 px-8 bg-primary border-t border-white/5 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-white/5 text-white/40 text-[10px] font-bold px-5 py-2 rounded-full mb-10 tracking-[0.25em] border border-white/10 uppercase">
          No-Risk Implementation
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          Ready to map your building?
        </h2>
        <p className="text-white/60 text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Send a floor plan and we&apos;ll turn it into a live walkthrough you can test with your team. No hardware to install, no app to build, and no pressure to pretend the pilot is further along than it is.
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          <a href="/#contact" className="btn-primary min-w-[220px]">Book a Live Demo</a>
          <a href="/how-it-works" className="btn-secondary min-w-[220px]">See Implementation Path</a>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6">
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
