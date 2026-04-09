"use client";

import React from "react";
import { Sparkle, MapPin, ScatterDots } from "./Doodles";

export default function PilotProgram() {
  return (
    <section className="py-24 px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle doodle accents in the dark section */}
      <Sparkle size={16} color="#CAFFBF" className="absolute top-10 left-12 doodle-float opacity-30 pointer-events-none" />
      <Sparkle size={11} color="#FFD6A5" className="absolute top-16 right-16 doodle-float-offset opacity-25 pointer-events-none" />
      <Sparkle size={9}  color="#FFADAD" className="absolute bottom-12 left-1/4 doodle-float-slow opacity-20 pointer-events-none" />
      <MapPin size={14} color="#13B7DA" className="absolute bottom-16 right-12 doodle-float opacity-20 pointer-events-none" />
      <ScatterDots color="#ffffff" className="absolute top-6 right-1/3 opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
          Strategic Partnership
        </span>
        <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold mb-8 text-balance">
          Join the 2026 Pilot Program
        </h2>
        <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-12">
          We are currently selecting a limited number of high-traffic facilities in Nairobi for our final pre-launch deployment phase. Partners receive full spatial asset vectorization and high-fidelity positioning at a preferred infrastructure rate.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          <div className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-3">Custom Deployment</h3>
            <p className="text-slate-400 text-sm">Full engineering support for your specific floor plans and multi-story requirements.</p>
          </div>
          <div className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-3">Direct Feedback</h3>
            <p className="text-slate-400 text-sm">Influence the development of the Command Center features based on your operational needs.</p>
          </div>
          <div className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-3">Preferred Rate</h3>
            <p className="text-slate-400 text-sm">Locked-in early adopter pricing before the full commercial infrastructure launch.</p>
          </div>
        </div>

        <a 
          href="mailto:hello@navous.com?subject=Pilot Program Inquiry" 
          className="inline-block px-10 py-4 bg-[#13B7DA] text-slate-900 rounded-md font-semibold hover:bg-[#0ea5c9] transition-all text-lg shadow-lg shadow-cyan-500/20"
        >
          Apply for Pilot Access
        </a>
      </div>
    </section>
  );
}
