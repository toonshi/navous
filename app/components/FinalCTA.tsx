"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-28 px-8 bg-slate-900 overflow-hidden relative"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#13B7DA 1px, transparent 1px), linear-gradient(90deg, #13B7DA 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block bg-[#13B7DA]/10 text-[#13B7DA] border border-[#13B7DA]/20 text-xs font-black uppercase px-4 py-2 rounded-full mb-8 tracking-[0.2em] shadow-sm glass">
          Ready to digitize?
        </span>
        <h2 className="font-space-grotesque text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.95]">
          Your building,
          <br />
          <span className="text-[#13B7DA]">searchable in 21 days.</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Deploy high-precision indoor navigation with discreet, stick-on sensors and zero app downloads. Your 21-day rollout starts here.
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          <a href="#how-it-works" className="bg-[#13B7DA] text-slate-900 px-12 py-5 rounded-xl font-black text-lg hover:brightness-110 transition-all hover:scale-[1.02] cursor-pointer no-underline shadow-2xl">
            Start the 21-Day Rollout
          </a>
          <a href="/features" className="glass border-2 border-white/10 text-white px-12 py-5 rounded-xl font-black text-lg hover:bg-white/10 transition-all hover:scale-[1.02] cursor-pointer no-underline">
            View Technical Specs
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <p className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase">Free Onboarding</p>
          <p className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase">No Hardware Costs</p>
          <p className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase">GDPR/CCPA Compliant</p>
        </div>
      </div>
    </section>
  );
}
