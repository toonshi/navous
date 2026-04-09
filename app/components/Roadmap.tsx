"use client";

import React from "react";

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

export default function Roadmap() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-slate-500 text-sm font-semibold tracking-wide uppercase mb-4">Development Roadmap</p>
          <h2 className="font-space-grotesque text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            System Architecture<br />Evolution
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Engineering milestones focused on achieving operational reliability and high-fidelity indoor positioning across complex architectural environments.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">

          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-slate-200 md:-translate-x-px" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((ms, index) => {
              const isEven = index % 2 === 0;
              const isActive = ms.status === "Active";
              const isCompleted = ms.status === "Completed";
              const isFuture = !isActive && !isCompleted;

              return (
                <div key={ms.phase} className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:justify-start" : "md:justify-end"
                } md:pb-16`}>

                  {/* Indicator dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 mt-1">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${isActive ? "border-indigo-600 bg-white" :
                        isCompleted ? "border-indigo-600 bg-indigo-600" :
                        "border-slate-300 bg-white"}
                    `}>
                      {isActive && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
                      {isCompleted && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`w-full pl-16 md:pl-0 md:w-[45%] ${
                    isEven ? "md:pr-12" : "md:pl-12"
                  }`}>
                    <div className={`p-6 md:p-8 rounded-2xl border transition-colors
                      ${isActive ? "bg-indigo-50 border-indigo-200" :
                        isCompleted ? "bg-white border-slate-200 shadow-sm" :
                        "bg-white border-slate-100 opacity-60 hover:opacity-100"}
                    `}>

                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-mono text-xs font-bold tracking-widest uppercase
                          ${isActive ? "text-indigo-600" : "text-slate-400"}
                        `}>
                          {ms.phase}
                        </span>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full
                          ${isActive ? "bg-indigo-600 text-white" :
                            isCompleted ? "bg-slate-100 text-slate-500" :
                            "bg-slate-50 text-slate-400"}
                        `}>
                          {ms.status}
                        </span>
                      </div>

                      <h3 className={`font-space-grotesque text-2xl font-bold mb-3 tracking-tight
                        ${isActive || isCompleted ? "text-slate-900" : "text-slate-400"}
                      `}>
                        {ms.title}
                      </h3>

                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                        {ms.description}
                      </p>

                      <ul className="space-y-2">
                        {ms.points.map(point => (
                          <li key={point} className="flex items-center gap-2.5 text-sm text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
