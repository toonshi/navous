"use client";

import React from "react";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        {/* Row 1 — left text, right illustration */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <span className="text-slate-900 bg-accent text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded mb-4 inline-block">
              Operational Impact
            </span>
            <h2 className="font-space-grotesque text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[0.95] mb-6">
              The high cost of
              <br />
              <span className="text-[#13B7DA]">navigation friction.</span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Inefficient indoor wayfinding is an operational bottleneck. When guests can&apos;t find their destination, staff spend 15% of their shifts giving directions instead of performing core duties.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <Image
                src="/illustrations/navigation.svg"
                alt="Indoor navigation illustration"
                width={480}
                height={360}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Row 2 — right text, left illustration (zigzag) */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <span className="text-slate-900 bg-accent text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded mb-4 inline-block">
              Spatial Analytics
            </span>
            <h2 className="font-space-grotesque text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[0.95] mb-6">
              Data-driven
              <br />
              spatial intelligence.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Navous captures movement patterns that are normally invisible. Identify bottlenecks, optimize layouts, and improve facility performance with real-time analytics powered by our Vector-Native engine.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <Image
                src="/illustrations/data-intelligence.svg"
                alt="Movement intelligence dashboard"
                width={480}
                height={360}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Row 3 — left text, right illustration */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <span className="text-slate-900 bg-accent text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded mb-4 inline-block">
              Inclusive Design
            </span>
            <h2 className="font-space-grotesque text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[0.95] mb-6">
              Accessibility
              <br />
              for every guest.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Navigation without barriers. Our platform includes wheelchair-optimized routing, multilingual support, and audio guidance to ensure every visitor moves with confidence.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <Image
                src="/illustrations/accessibility-nav.svg"
                alt="Accessibility and multilingual navigation"
                width={480}
                height={360}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Technical Callout */}
        <div className="bg-slate-900 rounded-[2rem] p-12 flex flex-col md:flex-row md:items-center gap-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#13B7DA 1px, transparent 1px), linear-gradient(90deg, #13B7DA 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="flex-1 relative z-10">
            <p className="font-space-grotesque text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
              &ldquo;Navigation is no longer a nice-to-have. It is the critical infrastructure for the modern venue.&rdquo;
            </p>
            <p className="text-[#13B7DA] font-black uppercase tracking-widest text-sm">
              VisionTech Enterprise Standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
