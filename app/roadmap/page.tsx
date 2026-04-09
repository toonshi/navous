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
    status: "Active",
    description: "Deployment of high-fidelity positioning in selected Nairobi facilities. Validation of sub-meter accuracy via BLE and sensor fusion.",
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
    <div className="relative min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-indigo-600 text-sm font-bold tracking-widest uppercase mb-4">Development Roadmap</p>
            <h1 className="font-space-grotesque text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              System Architecture<br />Evolution
            </h1>
            <p className="text-slate-700 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Engineering milestones focused on achieving operational reliability and high-fidelity indoor positioning across complex architectural environments.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-slate-300 md:-translate-x-px" />

            <div className="space-y-16 md:space-y-0">
              {milestones.map((ms, index) => {
                const isEven = index % 2 === 0;
                const isActive = ms.status === "Active";
                const isCompleted = ms.status === "Completed";

                return (
                  <div key={ms.phase} className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  } md:pb-24 last:pb-0`}>

                    {/* Indicator dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 mt-1 z-10">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-sm
                        ${isActive ? "border-indigo-600 bg-white" :
                          isCompleted ? "border-indigo-600 bg-indigo-600" :
                          "border-slate-400 bg-white"}
                      `}>
                        {isActive && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />}
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
                      <div className={`p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 shadow-xl
                        ${isActive ? "bg-white border-indigo-600 scale-[1.02]" :
                          isCompleted ? "bg-white border-slate-200" :
                          "bg-white border-slate-100 opacity-80 hover:opacity-100"}
                      `}>

                        <div className="flex items-center justify-between mb-6">
                          <span className={`font-mono text-sm font-bold tracking-widest uppercase
                            ${isActive ? "text-indigo-600" : isCompleted ? "text-slate-500" : "text-slate-400"}
                          `}>
                            {ms.phase}
                          </span>
                          <span className={`text-xs font-black px-3 py-1.5 rounded-full tracking-wider uppercase
                            ${isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" :
                              isCompleted ? "bg-emerald-100 text-emerald-700" :
                              "bg-slate-100 text-slate-500"}
                          `}>
                            {ms.status}
                          </span>
                        </div>

                        <h3 className="font-space-grotesque text-3xl font-bold mb-4 tracking-tight text-slate-900">
                          {ms.title}
                        </h3>

                        <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                          {ms.description}
                        </p>

                        <div className="space-y-3 border-t border-slate-100 pt-6">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Deliverables</p>
                          {ms.points.map(point => (
                            <div key={point} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                              <div className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-indigo-500" : isCompleted ? "bg-emerald-500" : "bg-slate-300"}`} />
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
