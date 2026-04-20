"use client";

import React from "react";
import { Sparkle, ScatterDots, WiggleLine } from "./Doodles";

export default function ProductStack() {
  return (
    <section className="py-24 px-8 bg-slate-50 relative overflow-hidden">
      <ScatterDots color="#FFADAD" className="absolute top-10 left-10 opacity-20" />
      <Sparkle size={18} color="#FFD6A5" className="absolute bottom-20 right-20 doodle-float-slow opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Integrated Product Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Two Engines. One Source of Truth.
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium subheading">
            Navous offers a Vertically Integrated Stack for maximum precision. The "1000% Robustness" of our positioning engine is directly derived from the high-fidelity vector constraints of our mapping engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Product A */}
          <div className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm relative overflow-hidden flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <Sparkle size={24} color="#13B7DA" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">PILLAR 1</span>
                <h3 className="text-2xl font-bold text-slate-900 subheading">The Geodetic Twin</h3>
              </div>
            </div>
            <p className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-widest italic">Spatial Frame Mapping</p>
            <div className="space-y-6 flex-grow">
              <div>
                <p className="text-slate-900 font-bold mb-2 subheading">Automated Digitization</p>
                <p className="text-slate-600 font-medium">Map physical structures into a high-fidelity geodetic frame of reference. Ensuring perfect alignment between local metric space and global coordinates.</p>
              </div>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#13B7DA]" />
                  <span>3D-mapped venues in minutes from blueprints</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#13B7DA]" />
                  <span>IMDF/OSM native reach for Google & Apple Maps</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Product B */}
          <div className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm relative overflow-hidden flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-50 rounded-2xl">
                <Sparkle size={24} color="#FFADAD" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">PILLAR 2</span>
                <h3 className="text-2xl font-bold text-slate-900 subheading">Sensor Fusion Core</h3>
              </div>
            </div>
            <p className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-widest italic">The Positioning Engine</p>
            <div className="space-y-6 flex-grow">
              <div>
                <p className="text-slate-900 font-bold mb-2 subheading">Navigational Stability</p>
                <p className="text-slate-600 font-medium">Fuses inertial movement with multi-path signal environment data through geodetic coordinate anchors.</p>
              </div>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFADAD]" />
                  <span>Sub-meter accuracy eliminating signal jumps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFADAD]" />
                  <span>On-device processing for total data security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
          <ScatterDots color="#ffffff" className="absolute top-6 right-10 opacity-10 pointer-events-none" />
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#13B7DA]" />
              <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-[0.2em] uppercase">
                Better Together
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-balance subheading">
              Deterministic Stability via Integrated Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[#13B7DA] font-bold text-sm mb-3 uppercase tracking-widest font-mono">01_COUPLING</p>
                <p className="text-slate-400 text-sm leading-relaxed">The positioning engine "knows" exactly how the mapping engine structures its skeletons.</p>
              </div>
              <div>
                <p className="text-[#13B7DA] font-bold text-sm mb-3 uppercase tracking-widest font-mono">02_STABILITY</p>
                <p className="text-slate-400 text-sm leading-relaxed">Wall-clipping is mathematically impossible because the EKF directly consumes mapping vector tangents.</p>
              </div>
              <div>
                <p className="text-[#13B7DA] font-bold text-sm mb-3 uppercase tracking-widest font-mono">03_PRECISION</p>
                <p className="text-slate-400 text-sm leading-relaxed">Pathfinding utilizes the unified topological graph generated by our PostGIS spatial solve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
