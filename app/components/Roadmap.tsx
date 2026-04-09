"use client";

import React from "react";

const milestones = [
  {
    phase: "PHASE_01",
    title: "Core Spatial Architecture",
    status: "Completed",
    description: "Distributed processing pipeline for CAD/PDF ingestion. Vector-native PostGIS storage and automated navigation graph generation.",
    points: ["DWG/DXF Ingestion", "Morphological Refinement", "MVT Vector Tile Server"]
  },
  {
    phase: "PHASE_02",
    title: "Strategic Pilot Rollout",
    status: "Active",
    description: "Deployment of high-fidelity positioning in selected Nairobi facilities. Validation of sub-meter accuracy via BLE and sensor fusion.",
    points: ["Pilot Partner Selection", "Browser-Native Navigation", "BLE Beacon Optimization"]
  },
  {
    phase: "PHASE_03",
    title: "Augmented Perception",
    status: "Q3 2026",
    description: "Integration of AR-immersive overlays and biomechanical sensor fusion. Deployment of the Rust+WASM positioning core.",
    points: ["AR View Mode", "Advanced Sensor Fusion", "Audio-Stealth Routing"]
  },
  {
    phase: "PHASE_04",
    title: "Unified Intelligence",
    status: "Q4 2026",
    description: "Launch of the Command Center analytics suite. Synchronization of spatial data with existing facility CCTV infrastructure.",
    points: ["CCTV Integration", "Journey Analytics Dashboard", "Enterprise SDK Suite"]
  }
];

export default function Roadmap() {
  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-indigo-600 font-mono text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
            Infrastructure Timeline
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            The Roadmap to 1000% Robustness
          </h2>
          <p className="text-slate-500 text-xl max-w-3xl font-medium leading-relaxed">
            Our engineering milestones are focused on achieving absolute operational reliability in complex architectural environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-slate-100 z-0" />
          
          {milestones.map((ms, index) => (
            <div key={ms.phase} className="relative z-10 group">
              <div className={`w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center mb-8 transition-colors ${
                ms.status === "Completed" ? "bg-indigo-600 text-white" : 
                ms.status === "Active" ? "bg-indigo-100 text-indigo-600 border-indigo-50" : 
                "bg-slate-50 text-slate-400"
              }`}>
                {ms.status === "Completed" ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="font-mono text-xs font-bold">{index + 1}</span>
                )}
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  {ms.phase} — {ms.status}
                </span>
                <h3 className="font-space-grotesque text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {ms.title}
                </h3>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {ms.description}
              </p>
              
              <ul className="space-y-2">
                {ms.points.map(point => (
                  <li key={point} className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
