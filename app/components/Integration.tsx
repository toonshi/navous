"use client";

import React from "react";
import { Sparkle, ScatterDots, CurvedArrowRight } from "./Doodles";

const deliveryModes = [
  {
    title: "Safety & Security",
    subtitle: "Real-time Awareness",
    description: "Instantly identify crowd density and high-traffic bottlenecks. Guide security or medical teams via the most efficient routes during emergencies.",
    benefit: "Faster response times and improved visitor safety metrics.",
    color: "#3B82F6",
  },
  {
    title: "Facility Maintenance",
    subtitle: "Staff Optimization",
    description: "Equip your maintenance and cleaning crews with precise indoor navigation to reported issues, reducing downtime and operational friction.",
    benefit: "Lower operational costs through smarter staff deployment.",
    color: "#60A5FA",
  },
  {
    title: "Visitor Satisfaction",
    subtitle: "Stress-Free Journey",
    description: "Provide patients, students, or travelers with the confidence of knowing exactly where they are and how to reach their destination.",
    benefit: "Higher NPS and reduced staff time spent giving directions.",
    color: "#93C5FD",
  },
  {
    title: "Commercial Growth",
    subtitle: "Retail & Dining",
    description: "Direct foot traffic toward retail hubs, dining areas, and amenities. Use spatial data to optimize tenant placement and lease value.",
    benefit: "Quantifiable increase in secondary venue revenue.",
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
            Venue Intelligence
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Navous doesn&apos;t just show a map—it provides the spatial infrastructure to run a more efficient, safer, and more profitable venue.
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
                  <span className="text-white font-bold text-sm">Value: {mode.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden">
          <ScatterDots color="#3B82F6" className="absolute -bottom-4 -right-4 opacity-20" />
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-4 font-display">Ready for Enterprise-Scale Deployment</h4>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                Whether you manage a single hospital wing or a global network of international airports, our platform is built to scale. No complex hardware audits or months of calibration required.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 bg-accent text-white rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-accent/20 cursor-pointer hover:bg-accent/80 transition-colors">
                SCHEDULE A DEMO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

