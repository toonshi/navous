"use client";

import React from "react";
import { AccessibilityIcon } from "./Doodles";

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
            <span className="text-white/60">master your space.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed font-medium">
            One unified platform to guide your visitors, protect your staff, and optimize your facility operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: The App-Free Experience */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-end min-h-[450px] relative overflow-hidden group shadow-2xl backdrop-blur-sm card-hover">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <span className="relative text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Instant Access
            </span>
            <h3 className="relative font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              No apps to download. <br />Just scan and go.
            </h3>
            <p className="relative text-white/50 text-lg max-w-md leading-relaxed font-medium">
              Visitors scan a QR code at your entrance to open a high-precision map instantly in their browser. It works on any modern phone, from door to destination.
            </p>
          </div>

          {/* Feature 2: Get directions */}
          <div className="bg-accent rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl card-hover border border-accent/20">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2">Get directions</h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">Follow clear, turn-by-turn paths that show you exactly where to turn and how far you are from your destination.</p>
            </div>
          </div>

          {/* Feature 3: Safety & Alerts */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[280px] shadow-2xl group backdrop-blur-sm card-hover">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2">Instant Alerts</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">Broadcast emergency routes or important facility updates to every visitor on-site instantly through the map interface.</p>
            </div>
          </div>

          {/* Feature 4: Spatial Data Analytics */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-12 flex flex-col md:flex-row md:items-center gap-12 shadow-2xl relative overflow-hidden group backdrop-blur-sm card-hover">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                 style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            
            <div className="flex-1 relative z-10">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6 inline-block border border-accent/30 bg-accent/10">
                Data Intelligence
              </span>
              <h3 className="font-display text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
                Deep Spatial Analytics
              </h3>
              <p className="text-white/40 text-base leading-relaxed font-medium max-w-lg">
                See where visitors get stuck and which routes are most popular. Our deep analytics suite gives you the data to optimize your layout and staff placement.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-64 h-48 bg-black/40 rounded-3xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-all">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-40" />
               <div className="w-full h-full flex items-center justify-center border border-dashed border-white/10 m-4 rounded-2xl">
                 <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Data Analytics</span>
               </div>
            </div>
          </div>

          {/* Feature 5: Dynamic Control */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[280px] shadow-2xl group backdrop-blur-sm card-hover">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2">Zone Management</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">Close off wings, redirect traffic for maintenance, or manage VIP zones in real-time without updating floor plans.</p>
            </div>
          </div>

          {/* Feature 6: Promotions */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[280px] shadow-2xl group backdrop-blur-sm card-hover">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2">Live Promotions</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">Deliver location-based offers or helpful suggestions based on where your visitors are currently standing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
