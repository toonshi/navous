"use client";

import React from "react";

const milestones = [
  {
    phase: "PHASE_01",
    title: "Core Spatial Architecture",
    status: "Completed",
    description: "Distributed processing pipeline for CAD/PDF ingestion. Vector-native PostGIS storage and automated navigation graph generation.",
    points: ["DWG/DXF Ingestion", "Morphological Refinement", "MVT Vector Tile Server"],
    coords: "LAT -1.2921 LONG 36.8219"
  },
  {
    phase: "PHASE_02",
    title: "Strategic Pilot Rollout",
    status: "Active",
    description: "Deployment of high-fidelity positioning in selected Nairobi facilities. Validation of sub-meter accuracy via BLE and sensor fusion.",
    points: ["Pilot Partner Selection", "Browser-Native Navigation", "BLE Beacon Optimization"],
    coords: "SYS.OP.2026.02"
  },
  {
    phase: "PHASE_03",
    title: "Augmented Perception",
    status: "Q3 2026",
    description: "Integration of AR-immersive overlays and biomechanical sensor fusion. Deployment of the Rust+WASM positioning core.",
    points: ["AR View Mode", "Advanced Sensor Fusion", "Audio-Stealth Routing"],
    coords: "PENDING.AWAIT.SEQ"
  },
  {
    phase: "PHASE_04",
    title: "Unified Intelligence",
    status: "Q4 2026",
    description: "Launch of the Command Center analytics suite. Synchronization of spatial data with existing facility CCTV infrastructure.",
    points: ["CCTV Integration", "Journey Analytics Dashboard", "Enterprise SDK Suite"],
    coords: "TBD.FUTURE.STATE"
  }
];

export default function Roadmap() {
  return (
    <section className="py-32 px-8 bg-slate-900 overflow-hidden relative border-y border-white/10">
      {/* Tech Grid Background overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 text-center md:text-left">
          <span className="text-indigo-400 font-mono text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
            [ INFRASTRUCTURE TIMELINE ]
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            System Architecture<br />Evolution
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl font-medium leading-relaxed">
            Engineering milestones focused on achieving absolute operational reliability and high-fidelity indoor positioning across complex architectural environments.
          </p>
        </div>

        {/* The Asymmetrical Timeline Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          
          {/* The Continuous Glowing Nav Path */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 md:-ml-0.5 bg-slate-800 rounded-full z-0" />
          
          {/* Active Glow Segment */}
          <div 
            className="absolute top-0 left-8 md:left-1/2 w-1 md:-ml-0.5 bg-indigo-500 rounded-full z-0 shadow-[0_0_15px_#6366f1]"
            style={{ height: '40%' }} // Simulates progress down the line
          />

          <div className="space-y-16 md:space-y-0 relative z-10">
            {milestones.map((ms, index) => {
              const isEven = index % 2 === 0;
              const isActive = ms.status === "Active";
              const isCompleted = ms.status === "Completed";
              const isFuture = !isActive && !isCompleted;

              return (
                <div key={ms.phase} className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}>
                  
                  {/* Indicator Node */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center
                    ${isActive ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6 md:w-8 md:h-8 mt-1"}
                  `}>
                    {isActive && (
                      <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-30" />
                    )}
                    <div className={`w-full h-full rounded-full border-2 flex items-center justify-center
                      ${isActive ? "bg-slate-900 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]" : 
                        isCompleted ? "bg-indigo-500 border-indigo-500" : 
                        "bg-slate-900 border-slate-700"}
                    `}>
                      {isCompleted && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                      {isActive && (
                        <div className="w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_#6366f1]" />
                      )}
                      {isFuture && (
                        <div className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full pl-24 md:pl-0 md:w-[45%] ${
                    isEven ? "md:pr-16 text-left" : "md:pl-16 md:text-left"
                  }`}>
                    
                    <div className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-300
                      ${isActive ? "bg-indigo-500/5 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)] scale-[1.02]" : 
                        isCompleted ? "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60" : 
                        "bg-slate-900/50 border-slate-800 opacity-60 hover:opacity-100"}
                    `}>
                      
                      {/* Tech Accent Coordinates */}
                      <div className="absolute top-4 right-4 hidden sm:block">
                        <span className="font-mono text-[9px] text-slate-500 tracking-widest uppercase opacity-50">
                          {ms.coords}
                        </span>
                      </div>

                      <span className={`font-mono text-xs font-bold tracking-[0.1em] block mb-3
                        ${isActive ? "text-indigo-400" : "text-slate-500"}
                      `}>
                        [ {ms.phase} ]
                      </span>
                      
                      <h3 className={`font-space-grotesque text-2xl font-bold mb-3 tracking-tight
                        ${isActive ? "text-white" : isCompleted ? "text-slate-200" : "text-slate-400"}
                      `}>
                        {ms.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 font-medium
                        ${isActive ? "text-slate-300" : "text-slate-500"}
                      `}>
                        {ms.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {ms.points.map(point => (
                          <li key={point} className={`font-mono text-[11px] uppercase tracking-wider flex items-start gap-3
                            ${isActive ? "text-indigo-200" : "text-slate-500"}
                          `}>
                            <span className="text-indigo-500 font-bold shrink-0">{'=>'}</span>
                            <span className="mt-0.5">{point}</span>
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
