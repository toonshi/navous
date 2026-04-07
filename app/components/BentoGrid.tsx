"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#13B7DA] text-xs font-black uppercase tracking-[0.2em] mb-4 block">
            The Venue Platform
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-[0.95]">
            Everything you need to
            <br />
            <span className="text-[#13B7DA]">master your space.</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            One unified platform to guide your visitors, protect your staff, and optimize your facility operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Feature: Navigation */}
          <div className="md:col-span-2 bg-[#13B7DA] rounded-[2.5rem] p-12 flex flex-col justify-end min-h-[450px] relative overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none group-hover:scale-110 transition-transform duration-700" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <span className="relative text-white/90 text-xs font-black uppercase tracking-widest mb-4">
              Wayfinding
            </span>
            <h3 className="relative font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[0.95]">
              Real-time,
              <br />
              turn-by-turn.
            </h3>
            <p className="relative text-white/90 text-lg max-w-md leading-relaxed font-medium">
              A seamless, app-free navigation experience. Powered by discreet Bluetooth sensors for sub-meter precision in every corridor.
            </p>
          </div>

          {/* Spec Card: Accuracy */}
          <div className="bg-accent rounded-[2.5rem] p-10 flex flex-col justify-between shadow-sm border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-white/30 flex items-center justify-center">
              <span className="text-3xl font-black text-slate-900">0.5m</span>
            </div>
            <div>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tighter text-slate-900 mb-2">Sub-meter Precision</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">High-fidelity positioning that tracks every step with architectural accuracy.</p>
            </div>
          </div>

          {/* Spec Card: Latency */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[280px] shadow-2xl border border-white/5">
            <div className="w-16 h-16 rounded-2xl bg-[#13B7DA]/20 flex items-center justify-center">
              <span className="text-3xl font-black text-[#13B7DA]">&lt;5ms</span>
            </div>
            <div>
              <h3 className="font-space-grotesque text-2xl font-bold tracking-tighter text-white mb-2 text-[#13B7DA]">Instant Response</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">Zero-lag updates powered by our WASM-accelerated positioning engine.</p>
            </div>
          </div>

          {/* Spec Card: Infrastructure */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 flex flex-col md:flex-row md:items-center gap-10 shadow-sm">
            <div className="flex-1">
              <span className="text-slate-900 bg-accent text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded mb-4 inline-block">
                Enterprise Core
              </span>
              <h3 className="font-space-grotesque text-3xl font-bold tracking-tighter text-slate-900 mb-4 leading-tight">
                PostGIS-Native Infrastructure.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                Your building data is stored and processed on high-performance spatial databases, ensuring total data sovereignty and architectural integrity.
              </p>
            </div>
            <div className="relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm shrink-0">
               <Image
                src="/illustrations/data-intelligence.svg"
                alt="Infrastructure"
                width={200}
                height={150}
                className="w-full max-w-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
