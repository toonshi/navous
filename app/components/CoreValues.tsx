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
    color: "#3B82F6",
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
    color: "#60A5FA",
  },
  {
    title: "Enterprise Integration",
    subtitle: "The Operational Layer",
    description: "An event-driven integration layer that connects the indoor map to venue operations and autonomous logistics.",
    features: [
      { label: "Dynamic Zone Control", value: "Reroute visitors in real-time to manage maintenance or closures." },
      { label: "Autonomous Triggers", value: "Notify security or customers the millisecond a threshold is crossed." },
      { label: "The Last Meter", value: "Headless Rust core for UberEats/DoorDash floor & door precision." }
    ],
    color: "#93C5FD",
  },
  {
    title: "Spatial Analytics",
    subtitle: "Business Intelligence",
    description: "Providing actionable business intelligence through high-fidelity spatial data analytics.",
    features: [
      { label: "Contextual Promotions", value: "Trigger rewards or helpful info based on precise visitor location." },
      { label: "Visual Footfall", value: "Occupancy heatmaps to optimize security and staff placement." },
      { label: "Tenant Analytics", value: "Prove floor-space value with objective visitor dwell times." }
    ],
    color: "#3B82F6",
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
    color: "#64748B",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 px-8 bg-primary relative overflow-hidden border-b border-white/5">
      <ScatterDots color="#3B82F6" className="absolute top-10 right-10 opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Navous Foundation
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The Pillars of Spatial Intelligence
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Converting complex engineering into high-impact value. Our platform is built on five pillars of spatial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col h-full hover:border-accent/40 transition-all group card-hover backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="w-3 h-3 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" 
                  style={{ backgroundColor: pillar.color }}
                />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {pillar.subtitle}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {pillar.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-10 font-medium italic">
                {pillar.description}
              </p>
              
              <div className="space-y-8 mt-auto">
                {pillar.features.map((feature) => (
                  <div key={feature.label}>
                    <span className="text-white font-bold block text-sm mb-1">{feature.label}</span>
                    <span className="text-white/40 text-xs leading-relaxed font-medium">{feature.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 flex justify-end">
                <Sparkle size={16} color={pillar.color} className="opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
