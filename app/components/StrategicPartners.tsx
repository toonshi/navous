"use client";

import React from "react";
import { Sparkle, ScatterDots, MapPin } from "./Doodles";

const partners = [
  {
    name: "Apple Maps",
    hook: "IMDF / Privacy",
    value: "Provides Apple-grade blue-dot stability (MA-EKF) that runs 100% on-device via WASM, aligning with industry-leading privacy standards.",
    standard: "1:1 IMDF export pipeline",
    color: "#13B7DA",
  },
  {
    name: "Google Maps",
    hook: "VPS / Efficiency",
    value: "Complements Live View (AR) with low-power Dead Reckoning (Weinberg PDR) to maintain position when the camera is off.",
    standard: "VPS-to-EKF Hybrid Handover",
    color: "#FFADAD",
  },
  {
    name: "OpenStreetMap",
    hook: "Open Skeleton",
    value: "Solves the ingestion bottleneck by automatically generating and contributing high-quality topological skeletons to the open-source community.",
    standard: "Automated Simple Indoor Tagging",
    color: "#CAFFBF",
  },
  {
    name: "Meta / AR Technology",
    hook: "Spatial Anchor",
    value: "Provides a mathematically perfect 'Fixed Global Frame' that Meta's SLAM can align to, preventing digital drift in AR glasses.",
    standard: "World-Locked Spatial Anchoring",
    color: "#FFD6A5",
  },
];

export default function StrategicPartners() {
  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Ecosystem Play
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            The "Invisible Glue" for Big Tech
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium subheading">
            Navous is designed to power the world's largest mapping ecosystems, filling the gap between directory maps and high-fidelity indoor infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div key={partner.name} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={18} color={partner.color} />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{partner.hook}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 subheading">{partner.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium flex-grow mb-6">
                {partner.value}
              </p>
              <div className="pt-6 border-t border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block mb-1">STANDARD</span>
                <span className="text-slate-900 font-bold text-xs">{partner.standard}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
