"use client";

import React from "react";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.3em] mb-6 block">
            The Venue Platform
          </span>
          <h2 className="font-sans text-[3.5rem] md:text-[5rem] font-medium tracking-[-0.03em] leading-[0.95] mb-8 max-w-3xl">
            Everything you need to
            <br />
            master your space.
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed font-light">
            One unified platform to guide your visitors, protect your staff, and optimize your facility operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Feature: Navigation - Now Dark & Premium */}
          <div className="md:col-span-2 bg-slate-900/40 border border-white/10 rounded-[3rem] p-12 flex flex-col justify-end min-h-[450px] relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-700" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <span className="relative text-accent text-[10px] font-black uppercase tracking-widest mb-4">
              Real-Time Wayfinding
            </span>
            <h3 className="relative font-sans text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Turn-by-turn precision.
            </h3>
            <p className="relative text-white/50 text-lg max-w-md leading-relaxed font-light">
              A seamless, app-free navigation experience. Powered by discreet Bluetooth sensors for sub-meter accuracy in every corridor.
            </p>
          </div>

          {/* Spec Card: Accuracy */}
          <div className="bg-accent rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center">
              <span className="text-3xl font-black text-black">0.5m</span>
            </div>
            <div>
              <h3 className="font-sans text-2xl font-medium tracking-tight text-black mb-2">Sub-meter Accuracy</h3>
              <p className="text-black/70 text-sm leading-relaxed font-medium">High-fidelity positioning that tracks every step with architectural precision.</p>
            </div>
          </div>

          {/* Spec Card: Latency */}
          <div className="bg-slate-900/60 border border-white/5 rounded-[3rem] p-10 flex flex-col justify-between min-h-[280px] shadow-2xl group hover:bg-slate-900 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
              <span className="text-3xl font-black text-accent">&lt;5ms</span>
            </div>
            <div>
              <h3 className="font-sans text-2xl font-medium tracking-tight text-white mb-2">Instant Response</h3>
              <p className="text-white/30 text-sm leading-relaxed font-medium group-hover:text-white/50 transition-colors">Zero-lag updates powered by our WASM-accelerated positioning engine.</p>
            </div>
          </div>

          {/* Spec Card: Infrastructure */}
          <div className="md:col-span-2 bg-slate-900/40 border border-white/10 rounded-[3rem] p-12 flex flex-col md:flex-row md:items-center gap-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            
            <div className="flex-1 relative z-10">
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded mb-6 inline-block border border-accent/20">
                Enterprise Core
              </span>
              <h3 className="font-sans text-3xl font-medium tracking-tight text-white mb-4 leading-tight">
                PostGIS-Native Stack.
              </h3>
              <p className="text-white/40 text-base leading-relaxed font-light max-w-lg">
                Your building data is processed on high-performance spatial databases, ensuring total data sovereignty and architectural integrity.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-64 h-48 bg-black/40 rounded-3xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-all">
               <img
                src="/infra-data.jpg"
                alt="Infrastructure Data"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
