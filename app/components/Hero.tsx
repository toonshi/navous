"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-32 px-6 md:px-12 bg-[#F9F8F6] text-primary">
      {/* Background visual anchor - Subtle floor plan or grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F1F3D 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start text-left">
          <span className="inline-block text-accent text-sm font-bold uppercase tracking-[0.2em] mb-6">
            Enterprise Indoor Wayfinding
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.05] mb-8 font-fraunces">
            Stop losing your visitors inside your building.
          </h1>

          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-10">
            Navous turns your existing floor plans into live, turn-by-turn wayfinding. No hardware, no app downloads, and no complex IT projects. Your front desk gets their time back from day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="mailto:hello@navous.com" className="btn-primary w-full sm:w-auto">
              Book a Demo
            </a>
            <a href="/how-it-works" className="btn-secondary w-full sm:w-auto">
              See the Platform
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-teal" />
              </span>
              <span className="text-sm font-bold text-slate-700">Cut staff interruptions by 30%+</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-teal" />
              </span>
              <span className="text-sm font-bold text-slate-700">Go live in under 24 hours</span>
            </div>
          </div>
        </div>

        {/* Product Visual Anchor */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-2">
            {/* Mockup UI: Dashboard Snapshot */}
            <div className="absolute inset-0 p-6 flex flex-col gap-6 bg-slate-50">
              <div className="h-8 w-1/3 bg-slate-200 rounded" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-white rounded border border-slate-100 shadow-sm" />
                <div className="h-24 bg-white rounded border border-slate-100 shadow-sm" />
                <div className="h-24 bg-white rounded border border-slate-100 shadow-sm" />
              </div>
              <div className="flex-1 bg-white rounded-lg border border-slate-100 shadow-sm p-4 overflow-hidden relative">
                {/* Visualizing a heatmap or floorplan mockup */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                <div className="relative h-full w-full rounded border border-dashed border-slate-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Operations Dashboard</span>
                </div>
              </div>
            </div>
            
            {/* Phone Overlay: Mobile Wayfinding */}
            <div className="absolute -bottom-10 -left-10 w-56 h-[400px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden transform -rotate-6">
               <div className="absolute inset-0 bg-white p-4 flex flex-col gap-4">
                 <div className="h-4 w-1/2 bg-slate-100 rounded mx-auto" />
                 <div className="flex-1 bg-slate-50 rounded border border-slate-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                    </div>
                 </div>
                 <div className="h-16 bg-primary rounded p-3 flex flex-col justify-center">
                    <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                    <div className="h-3 w-1/2 bg-white/40 rounded" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
