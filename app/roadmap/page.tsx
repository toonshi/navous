"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const milestones = [
  {
    phase: "PHASE_01",
    title: "Core Spatial Architecture",
    status: "Completed",
    description: "Distributed processing pipeline for CAD/PDF ingestion. Vector-native PostGIS storage and automated navigation graph generation.",
    points: ["DWG/DXF Ingestion", "Morphological Refinement", "MVT Vector Tile Server"],
  },
  {
    phase: "PHASE_02",
    title: "Strategic Pilot Rollout",
    status: "Now Enrolling",
    description: "Recruiting the first pilot partners and preparing initial facility deployments. Floor-plan ingestion, browser-native navigation, and rollout feedback loops are being finalized before launch.",
    points: ["Pilot Partner Selection", "Browser-Native Navigation", "BLE Beacon Optimization"],
  },
  {
    phase: "PHASE_03",
    title: "Augmented Perception",
    status: "Q3 2026",
    description: "Integration of AR-immersive overlays and biomechanical sensor fusion. Deployment of the Rust+WASM positioning core.",
    points: ["AR View Mode", "Advanced Sensor Fusion", "Audio-Stealth Routing"],
  },
  {
    phase: "PHASE_04",
    title: "Unified Intelligence",
    status: "Q4 2026",
    description: "Launch of the Command Center analytics suite. Synchronization of spatial data with existing facility CCTV infrastructure.",
    points: ["CCTV Integration", "Journey Analytics Dashboard", "Enterprise SDK Suite"],
  }
];

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen bg-primary">
      <Navbar />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <p className="text-accent text-xs font-black tracking-[0.3em] uppercase mb-4">Development Roadmap</p>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              System Architecture<br />Evolution
            </h1>
            <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Engineering milestones focused on achieving operational reliability and high-fidelity indoor positioning across complex architectural environments.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-white/10 md:-translate-x-px" />

            <div className="space-y-16 md:space-y-0">
              {milestones.map((ms, index) => {
                const isEven = index % 2 === 0;
                const isActive = ms.status === "Now Enrolling";
                const isCompleted = ms.status === "Completed";

                return (
                  <div key={ms.phase} className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  } md:pb-32 last:pb-0`}>

                    {/* Indicator dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 mt-1 z-10">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg
                        ${isActive ? "border-accent bg-primary" :
                          isCompleted ? "border-accent bg-accent" :
                          "border-white/20 bg-primary"}
                      `}>
                        {isActive && <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />}
                        {isCompleted && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`w-full pl-16 md:pl-0 md:w-[45%] ${
                      isEven ? "md:pr-16" : "md:pl-16"
                    }`}>
                      <div className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 glass card-hover
                        ${isActive ? "border-accent/50 scale-[1.02] shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]" :
                          isCompleted ? "border-white/10" :
                          "border-white/5 opacity-60 hover:opacity-100"}
                      `}>

                        <div className="flex items-center justify-between mb-6">
                          <span className={`font-sans text-xs font-black tracking-[0.2em] uppercase
                            ${isActive ? "text-accent" : isCompleted ? "text-white/40" : "text-white/30"}
                          `}>
                            {ms.phase}
                          </span>
                          <span className={`text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider uppercase
                            ${isActive ? "bg-accent text-white" :
                              isCompleted ? "bg-white/10 text-white/60" :
                              "bg-white/5 text-white/40"}
                          `}>
                            {ms.status}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">
                          {ms.title}
                        </h3>

                        <p className="text-white/60 text-base leading-relaxed mb-8 font-medium">
                          {ms.description}
                        </p>

                        <div className="space-y-4 border-t border-white/5 pt-8">
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Core Deliverables</p>
                          {ms.points.map(point => (
                            <div key={point} className="flex items-center gap-3 text-sm font-bold text-white/80">
                              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-accent" : isCompleted ? "bg-accent" : "bg-white/10"}`} />
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
