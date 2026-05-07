"use client";

import React from "react";

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 px-8 bg-primary text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.3em] mb-6 block">
            Capabilities
          </span>
          <h2 className="font-display text-[3.5rem] md:text-[5rem] font-bold tracking-tight leading-[0.95] mb-8 max-w-3xl">
            Everything you need to
            <br />
            master your space.
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed font-medium">
            One unified platform to guide your visitors, protect your staff, and optimize your facility operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Feature: Navigation */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-end min-h-[450px] relative overflow-hidden group shadow-2xl backdrop-blur-sm card-hover">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <span className="relative text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Real-Time Wayfinding
            </span>
            <h3 className="relative font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Turn-by-turn precision.
            </h3>
            <p className="relative text-white/50 text-lg max-w-md leading-relaxed font-medium">
              A seamless, app-free navigation experience. Powered by existing floor plans to provide sub-meter accuracy in every corridor.
            </p>
          </div>

          {/* Spec Card: Speed */}
          <div className="bg-accent rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl card-hover border border-accent/20">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-2xl font-black text-white">24h</span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2">Rapid Deployment</h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">Go from static floor plan to live, interactive wayfinding in under 24 hours.</p>
            </div>
          </div>

          {/* Spec Card: Accessibility */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[280px] shadow-2xl group backdrop-blur-sm card-hover">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
              <span className="text-3xl font-black text-accent">♿</span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2">WCAG 2.1 Native</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">Accessibility is not an add-on. Every route is optimized for mobility needs and high-contrast UI.</p>
            </div>
          </div>

          {/* Spec Card: Infrastructure */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-12 flex flex-col md:flex-row md:items-center gap-12 shadow-2xl relative overflow-hidden group backdrop-blur-sm card-hover">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            
            <div className="flex-1 relative z-10">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6 inline-block border border-accent/30 bg-accent/10">
                Enterprise Core
              </span>
              <h3 className="font-display text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
                Privacy-First Stack.
              </h3>
              <p className="text-white/40 text-base leading-relaxed font-medium max-w-lg">
                Your building data stays yours. Our spatial engine processes everything locally in the visitor&apos;s browser, ensuring total data sovereignty and security.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-64 h-48 bg-black/40 rounded-3xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-all">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-40" />
               <div className="w-full h-full flex items-center justify-center border border-dashed border-white/10 m-4 rounded-2xl">
                 <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Spatial Engine</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
