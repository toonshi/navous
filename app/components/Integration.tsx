"use client";

import React from "react";
import { Sparkle, ScatterDots, CurvedArrowRight } from "./Doodles";

const deliveryModes = [
  {
    title: "Spatial Action Bus",
    subtitle: "Autonomous Triggers",
    description: "Automatically notify customers or security the millisecond a courier or asset crosses a precise threshold (e.g., Suite 405 door).",
    benefit: "Event-driven integration that connects indoor maps to venue operations.",
    color: "#3B82F6",
  },
  {
    title: "Headless WASM Core",
    subtitle: "The Last Meter",
    description: "High-performance Rust core designed for UberEats and DoorDash. Provides sub-meter 'Floor & Door' precision entirely on-device.",
    benefit: "Instantly integrate our spatial engine into existing logistics apps.",
    color: "#60A5FA",
  },
  {
    title: "Pathing Optimization",
    subtitle: "Profitability Routing",
    description: "Aisle-aware routing for warehouse fleets and industrial pick-points to minimize travel distance and maximize throughput.",
    benefit: "Quantifiable ROI through automated movement optimization.",
    color: "#93C5FD",
  },
  {
    title: "GIS Aggregation",
    subtitle: "Google Maps Sync",
    description: "Venue owners maintain their 'Spatial Truth' in one place. We sync high-fidelity data to Google and Apple so you are never 'Off the Map.'",
    benefit: "Unified management of global mapping standards (IMDF/OSM).",
    color: "#3B82F6",
  },
];

export default function Integration() {
  return (
    <section className="py-24 px-8 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Operational Layer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Enterprise Integration
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Navous provides the spatial infrastructure required to power the next decade of autonomous logistics and smart venue management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deliveryModes.map((mode) => (
            <div key={mode.title} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col hover:border-accent/50 hover:bg-white/10 transition-all duration-300 card-hover">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">{mode.subtitle}</span>
                  <h3 className="text-2xl font-bold text-white font-display">{mode.title}</h3>
                </div>
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center" 
                  style={{ backgroundColor: `${mode.color}15` }}
                >
                  <Sparkle size={20} color={mode.color} />
                </div>
              </div>
              <p className="text-white/60 font-medium leading-relaxed mb-6 flex-grow">
                {mode.description}
              </p>
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-accent rounded-full">
                    <CurvedArrowRight size={14} color="#fff" />
                  </div>
                  <span className="text-white font-bold text-sm">Benefit: {mode.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden">
          <ScatterDots color="#3B82F6" className="absolute -bottom-4 -right-4 opacity-20" />
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-4 font-display">The &ldquo;Zero-Manual&rdquo; Integration Architecture</h4>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                Our codebase includes a generic <strong>Action Bus</strong> that processes external events and converts them into core operations like <code>UPDATE_POI_METADATA</code> or <code>UPDATE_ZONE_STATUS</code>. The architecture is ready for enterprise-scale deployment.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 bg-accent text-white rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-accent/20 cursor-pointer hover:bg-accent/80 transition-colors">
                VIEW API DOCS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
