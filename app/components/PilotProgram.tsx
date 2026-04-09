"use client";

import React from "react";

export default function PilotProgram() {
  return (
    <section className="py-24 px-8 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-indigo-400 font-mono text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
          Strategic Partnership
        </span>
        <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold mb-8 text-balance">
          Join the 2026 Pilot Program
        </h2>
        <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-12">
          We are currently selecting a limited number of high-traffic facilities in Nairobi for our final pre-launch deployment phase. Partners receive full spatial asset vectorization and high-fidelity positioning at a preferred infrastructure rate.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-3">Custom Deployment</h3>
            <p className="text-slate-400 text-sm">Full engineering support for your specific floor plans and multi-story requirements.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-3">Direct Feedback</h3>
            <p className="text-slate-400 text-sm">Influence the development of the Command Center features based on your operational needs.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg mb-3">Preferred Rate</h3>
            <p className="text-slate-400 text-sm">Locked-in early adopter pricing before the full commercial infrastructure launch.</p>
          </div>
        </div>

        <a 
          href="mailto:hello@navous.com?subject=Pilot Program Inquiry" 
          className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-500 transition-all text-lg shadow-lg shadow-indigo-500/20"
        >
          Apply for Pilot Access
        </a>
      </div>
    </section>
  );
}
