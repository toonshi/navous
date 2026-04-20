"use client";

import React from "react";
import { Sparkle, ScatterDots } from "./Doodles";

const phases = [
  {
    phase: "PHASE_01",
    title: "The QR-Seeded Start",
    status: "Current",
    mechanism: "Physical QR stickers at entry points and key landmarks.",
    benefit: "Provides an instantaneous 'High-Confidence Pose' to seed the Kalman Filter without initial sensor calibration.",
    ux: "Scan → Navigate in under 3 seconds.",
    color: "#13B7DA",
  },
  {
    phase: "PHASE_02",
    title: "The GPS-Geofence Handover",
    status: "Intermediate",
    mechanism: "The PWA detects the user's proximity to a venue via GPS.",
    benefit: "Auto-prompts the user to 'Open Indoor Map' as they step inside, eliminating the need for physical QRs.",
    ux: "Automatic venue discovery.",
    color: "#FFADAD",
  },
  {
    phase: "PHASE_03",
    title: "The 'Zero-Sticker' Visual Anchor",
    status: "Future",
    mechanism: "Integration with WebXR or Google Live View API.",
    benefit: "Users simply point their camera at their surroundings to find their initial pose.",
    ux: "Permanent spatial persistence without any physical hardware dependence.",
    color: "#CAFFBF",
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-8 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <ScatterDots color="#13B7DA" className="absolute top-20 right-10 opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            User Onboarding
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            The Zero-Friction Roadmap
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium subheading">
            Our multi-phase strategy to eliminate hardware dependence and provide the world's most accessible indoor navigation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {phases.map((item, index) => (
            <div key={item.phase} className="relative group">
              {/* Connecting line for desktop */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-slate-200 z-0 -translate-x-12" />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold font-mono text-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{item.status}</span>
                    <h3 className="text-xl font-bold text-slate-900 subheading">{item.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">MECHANISM</span>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.mechanism}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">BENEFIT</span>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.benefit}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">UX</span>
                    <p className="text-slate-900 font-bold text-sm">"{item.ux}"</p>
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
