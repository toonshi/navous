"use client";

import React from "react";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="py-32 px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.3em] mb-6 block">
            The Friction Problem
          </span>
          <h2 className="font-sans text-[3.5rem] md:text-[5rem] font-medium tracking-[-0.03em] leading-[0.95] mb-8">
            The hidden cost of
            <br />
            being lost.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1: Operational Impact */}
          <div className="bg-slate-900/50 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-medium tracking-tight mb-6">Operational Bottleneck</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Staff spend 15% of their shifts giving directions. Inefficient wayfinding is not just a guest frustration—it&apos;s a direct drain on your bottom line.
                </p>
              </div>
              <div className="relative h-64 w-full bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center p-8">
                <Image
                  src="/illustrations/navigation.svg"
                  alt="Navigation"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Analytics */}
          <div className="bg-slate-900/50 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-medium tracking-tight mb-6">Invisible Patterns</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Without digital spatial data, you are blind to how your venue is actually used. Navous captures every movement, missed turn, and dwell point.
                </p>
              </div>
              <div className="relative h-64 w-full bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center p-8">
                <Image
                  src="/illustrations/data-intelligence.svg"
                  alt="Data"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Callout Card - Full Width */}
        <div className="mt-10 bg-[#13B7DA] rounded-[3rem] p-16 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <p className="font-sans text-3xl md:text-5xl font-medium text-white leading-tight flex-1">
              &ldquo;Navigation is the critical infrastructure for the modern venue.&rdquo;
            </p>
            <div className="shrink-0 flex flex-col gap-2">
              <span className="text-white font-black uppercase tracking-widest text-xs">Standardized by</span>
              <span className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase">VisionTech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
