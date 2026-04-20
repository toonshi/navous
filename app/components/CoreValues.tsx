"use client";

import React from "react";
import { Sparkle, ScatterDots } from "./Doodles";

const pillars = [
  {
    title: "Spatial Frame Mapping",
    subtitle: "The Geodetic Twin",
    description: "We map physical structures into a high-fidelity geodetic frame of reference, ensuring perfect alignment between local metric space and global coordinates.",
    features: [
      { label: "Automated Digitization", value: "3D-mapped venues in minutes, not weeks, from CAD." },
      { label: "Manifold Navigation", value: "Unified topological manifold for consistent pathfinding." },
      { label: "Native Reach", value: "Appear natively on Apple Maps and Google Maps via IMDF/OSM." }
    ],
    color: "#13B7DA",
  },
  {
    title: "Positioning Engine",
    subtitle: "Sensor Fusion Core",
    description: "A robust spatial engine that fuses inertial movement with multi-path signal environment data through geodetic coordinate anchors.",
    features: [
      { label: "Precision Stability", value: "Adaptive fusion that eliminates signal jumps and jumps." },
      { label: "Privacy & Performance", value: "On-device processing with total user data security." },
      { label: "Continuous Coverage", value: "Intelligently predicts movement patterns in complex zones." }
    ],
    color: "#FFADAD",
  },
  {
    title: "Enterprise Integration",
    subtitle: "The Operational Layer",
    description: "An event-driven integration layer that connects the indoor map to venue operations and autonomous logistics.",
    features: [
      { label: "Autonomous Triggers", value: "Notify security or customers the millisecond a threshold is crossed." },
      { label: "The Last Meter", value: "Headless Rust core for UberEats/DoorDash floor & door precision." },
      { label: "Profitability Routing", value: "Aisle-aware routing for warehouse fleets to minimize distance." }
    ],
    color: "#CAFFBF",
  },
  {
    title: "Spatial Analytics",
    subtitle: "Business Intelligence",
    description: "Providing actionable business intelligence through high-fidelity spatial data analytics.",
    features: [
      { label: "Visual Footfall", value: "Occupancy heatmaps to optimize security and staff placement." },
      { label: "Tenant Analytics", value: "Prove floor-space value with objective visitor dwell times." },
      { label: "Traffic Insight", value: "Attribute traffic to digital ads (GPS) or physical signs (QR)." }
    ],
    color: "#FFD6A5",
  },
  {
    title: "Economic Realization",
    subtitle: "The C-Suite ROI",
    description: "Quantifiable value realization through automation, safety, and performance-based alignment.",
    features: [
      { label: "Global Sync", value: "Maintain spatial truth in one place, synced to Apple/Google." },
      { label: "Performance Pricing", value: "Success bounties based on courier reach or asset optimization." },
      { label: "Zero-Accident Safety", value: "ROI through the prevention of collisions and automated protocols." }
    ],
    color: "#94A3B8",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      <ScatterDots color="#13B7DA" className="absolute top-10 right-10 opacity-20" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Navous Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Marketing & Value Proposition Matrix
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium subheading">
            Converting complex engineering into high-impact value. Our platform is built on five pillars of spatial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col h-full hover:border-[#13B7DA]/30 transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: pillar.color }}
                />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {pillar.subtitle}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 subheading">
                {pillar.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic">
                {pillar.description}
              </p>
              
              <div className="space-y-6 mt-auto">
                {pillar.features.map((feature) => (
                  <div key={feature.label}>
                    <span className="text-slate-900 font-bold block text-sm mb-1">{feature.label}</span>
                    <span className="text-slate-500 text-xs leading-relaxed font-medium">{feature.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex justify-end">
                <Sparkle size={16} color={pillar.color} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
