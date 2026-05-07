"use client";

import React from "react";

export default function ProblemSection() {
  return (
    <section className="py-24 px-8 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        {/* Row 1 — Staff Burden */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              The Operational Cost
            </span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
              Every missed turn
              <br />
              <span className="text-accent">costs you money.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
              A busy hospital front desk fields 200+ wayfinding questions a day. That&apos;s 6+ staff hours — every single day — answering &ldquo;where is radiology?&rdquo;
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Multiply that by your building&apos;s foot traffic and it adds up fast in lost productivity and patient frustration.
            </p>
          </div>
          <div className="flex-1">
            <div className="aspect-video bg-slate-50 rounded-xl border border-slate-200 shadow-inner p-8 flex flex-col gap-4">
               <div className="h-6 w-1/3 bg-slate-200 rounded" />
               <div className="flex-1 flex flex-col gap-2 justify-center">
                  <div className="h-4 w-full bg-slate-100 rounded" />
                  <div className="h-4 w-5/6 bg-slate-100 rounded" />
                  <div className="h-4 w-4/6 bg-slate-100 rounded" />
               </div>
               <div className="h-10 w-full bg-accent/10 border border-accent/20 rounded flex items-center px-4">
                 <span className="text-xs font-bold text-accent">Staff Time Reclaimed: 34% Est.</span>
               </div>
            </div>
          </div>
        </div>

        {/* Row 2 — Data Intelligence */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
             <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Facility Intelligence
            </span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
              Identify friction
              <br />before it's a complaint.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Navous heatmaps reveal exactly where visitors get stuck or lost. Use real data to improve your physical signage, optimize floor plans, and move people through your building with 0% friction.
            </p>
          </div>
          <div className="flex-1">
            <div className="aspect-square max-w-sm mx-auto bg-slate-900 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
               <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
               <div className="relative h-full flex flex-col gap-4">
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="flex-1 rounded border border-white/5 flex items-center justify-center">
                     <div className="w-32 h-32 rounded-full bg-teal/20 blur-2xl animate-pulse" />
                     <div className="w-16 h-16 rounded-full bg-accent/30 blur-xl" />
                  </div>
                  <div className="h-12 w-full bg-white/5 rounded" />
               </div>
            </div>
          </div>
        </div>

        {/* Row 3 — Compliance & Access */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
             <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Compliance & Accessibility
            </span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
              Institutional-grade
              <br />accessibility.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Automate WCAG 2.1 compliance with wheelchair-optimized routing, high-contrast UI, and multi-language support. Every visitor, regardless of ability or language, moves with confidence.
            </p>
          </div>
          <div className="flex-1">
             <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-8 flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                   <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center">
                      <span className="text-xl">♿</span>
                   </div>
                   <div className="flex-1">
                      <div className="h-3 w-1/2 bg-slate-200 rounded mb-2" />
                      <div className="h-2 w-1/4 bg-slate-100 rounded" />
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center">
                      <span className="text-xl">🌐</span>
                   </div>
                   <div className="flex-1">
                      <div className="h-3 w-1/2 bg-slate-200 rounded mb-2" />
                      <div className="h-2 w-1/4 bg-slate-100 rounded" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
