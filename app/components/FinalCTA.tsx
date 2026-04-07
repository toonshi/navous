"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-28 px-12 bg-black overflow-hidden relative"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block bg-accent/10 text-accent border border-accent/20 text-[10px] font-black uppercase px-4 py-2 rounded-full mb-8 tracking-[0.3em] shadow-sm backdrop-blur-xl">
          Ready to digitize?
        </span>
        <h2 className="font-sans text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[0.95]">
          Your building,
          <br />
          <span className="text-accent">searchable in 21 days.</span>
        </h2>
        <p className="text-white/40 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Deploy high-precision indoor navigation with discreet, stick-on sensors and zero app downloads. Your 21-day rollout starts here.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-[1.05] cursor-pointer shadow-2xl">
            Start the 21-Day Rollout
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-white/10 transition-all hover:scale-[1.05] cursor-pointer backdrop-blur-xl">
            View Specs
          </button>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] text-white/20 font-black tracking-[0.25em] uppercase">Free Onboarding</p>
          <p className="text-[10px] text-white/20 font-black tracking-[0.25em] uppercase">No Hardware Costs</p>
          <p className="text-[10px] text-white/20 font-black tracking-[0.25em] uppercase">GDPR/CCPA Compliant</p>
        </div>
      </div>
    </section>
  );
}
