"use client";

import React from "react";
import { ScatterDots } from "./Doodles";

const phases = [
  {
    phase: "PHASE_01",
    title: "The QR-Seeded Start",
    status: "Current",
    mechanism: "Physical QR stickers at entry points and key landmarks.",
    benefit: "Provides an instantaneous 'High-Confidence Pose' to seed the Kalman Filter without initial sensor calibration.",
    ux: "Scan → Navigate in under 3 seconds.",
    color: "#3B82F6",
  },
  {
    phase: "PHASE_02",
    title: "The GPS-Geofence Handover",
    status: "Intermediate",
    mechanism: "The PWA detects the user's proximity to a venue via GPS.",
    benefit: "Auto-prompts the user to 'Open Indoor Map' as they step inside, eliminating the need for physical QRs.",
    ux: "Automatic venue discovery.",
    color: "#60A5FA",
  },
  {
    phase: "PHASE_03",
    title: "The 'Zero-Sticker' Visual Anchor",
    status: "Future",
    mechanism: "Integration with WebXR or Google Live View API.",
    benefit: "Users simply point their camera at their surroundings to find their initial pose.",
    ux: "Permanent spatial persistence without any physical hardware dependence.",
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
            User Onboarding
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The Zero-Friction Roadmap
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Our multi-phase strategy to eliminate hardware dependence and provide the world&apos;s most accessible indoor navigation experience.
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
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">MECHANISM</span>
                    <p className="text-white/60 font-medium text-sm leading-relaxed">{item.mechanism}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">BENEFIT</span>
                    <p className="text-white/60 font-medium text-sm leading-relaxed">{item.benefit}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-accent/50 transition-all card-hover">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">UX</span>
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
