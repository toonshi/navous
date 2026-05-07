"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-28 px-8 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F1F3D 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-slate-50 text-slate-500 text-sm font-bold px-5 py-2 rounded-full mb-10 tracking-[0.15em] border border-slate-100 uppercase">
          No-Risk Implementation
        </span>
        <h2 className="font-fraunces text-5xl md:text-7xl font-bold tracking-tight text-primary mb-8 leading-[1.1]">
          Ready to see it in your building?
        </h2>
        <p className="text-slate-600 text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Most venues go from floor plan to live demo in under 24 hours. No hardware to install, no app to build, and no long-term commitment required to start.
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          <a href="mailto:hello@navous.com" className="btn-primary min-w-[220px]">Book a Live Demo</a>
          <a href="/how-it-works" className="btn-secondary min-w-[220px]">See Implementation Path</a>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-x-12 gap-y-6">
           <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-teal opacity-50" />
              SOC 2 COMPLIANT
           </div>
           <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-teal opacity-50" />
              GDPR READY
           </div>
           <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-teal opacity-50" />
              WCAG 2.1 ACCESSIBLE
           </div>
        </div>
      </div>
    </section>
  );
}
