"use client";

import React from "react";
import { ScatterDots } from "./Doodles";

const phases = [
  {
    phase: "STEP_01",
    title: "Instant Upload",
    status: "Day 1",
    mechanism: "Upload your existing floor plans (CAD, PDF, or high-res images) directly to our platform.",
    benefit: "Our tools help you quickly convert your venue layout into a high-fidelity, interactive map yourself in just minutes.",
    ux: "Upload → Map ready.",
    color: "#3B82F6",
  },
  {
    phase: "STEP_02",
    title: "Point-of-Interest Setup",
    status: "Week 2",
    mechanism: "Define key locations like clinics, lecture halls, or boarding gates.",
    benefit: "Add rich metadata, accessibility notes, and real-time status updates for every important room in your building.",
    ux: "Searchable venue directory.",
    color: "#60A5FA",
  },
  {
    phase: "STEP_03",
    title: "Instant Go-Live",
    status: "Launch",
    mechanism: "Deploy via web-link or QR codes placed at key decision points.",
    benefit: "Visitors get turn-by-turn directions instantly on their own devices. No app downloads or hardware maintenance required.",
    ux: "Scan & Navigate in seconds.",
    color: "#93C5FD",
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-8 bg-secondary relative overflow-hidden border-y border-white/5">
      <ScatterDots color="#3B82F6" className="absolute top-20 right-10 opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Rollout Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            From Blueprint to Live Navigation
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            A streamlined implementation path designed to get your venue live without disrupting your daily operations or requiring expensive hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {phases.map((item, index) => (
            <div key={item.phase} className="relative group">
              {/* Connecting line for desktop */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-white/10 z-0 -translate-x-12" />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold font-mono text-sm shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">{item.status}</span>
                    <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">THE PROCESS</span>
                    <p className="text-white/60 font-medium text-sm leading-relaxed">{item.mechanism}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">WHY IT MATTERS</span>
                    <p className="text-white/60 font-medium text-sm leading-relaxed">{item.benefit}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-accent/50 transition-all card-hover">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">VISITOR EXPERIENCE</span>
                    <p className="text-white font-bold text-sm leading-relaxed">&ldquo;{item.ux}&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

