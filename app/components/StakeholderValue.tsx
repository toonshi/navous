"use client";

import React from "react";
import { HospitalIcon } from "./Doodles";

const columns = [
  {
    audience: "For Facility Operators",
    tagline: "Clarity across every floor.",
    accentColor: "#3B82F6",
    features: [
      "Real-time foot-traffic heatmaps by zone",
      "Identify where visitors get stuck or lost",
      "Emergency evacuation routing — instant reroute",
      "No hardware installation required",
    ],
  },
  {
    audience: "For Visitors",
    tagline: "Confidence from step one.",
    accentColor: "#3B82F6",
    features: [
      "Find any room, store, or office in under 60 seconds",
      "Turn-by-turn navigation — no app download required",
      "Accessibility-first: wheelchair routes, audio guidance",
      "Available in multiple languages",
    ],
  },
  {
    audience: "For Businesses & Tenants",
    tagline: "Turn footfall into revenue.",
    accentColor: "#3B82F6",
    features: [
      "Push location-triggered promotions to nearby visitors",
      "Understand exactly how traffic flows past your space",
      "Track conversion from browse to transaction",
      "Appear in indoor search results",
    ],
  },
];

export default function StakeholderValue() {
  return (
    <section className="py-24 px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            The Ecosystem
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Everyone in your building wins.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Navous creates a smarter ecosystem by delivering value to visitors, facility operators, and business tenants alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/5 py-16">
          {columns.map((col) => (
            <div
              key={col.audience}
              className="flex flex-col overflow-hidden bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm card-hover"
            >
              {/* Icon Section */}
              <div className="p-12 flex justify-center bg-white/5 border-b border-white/5">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                   <HospitalIcon className="text-accent w-10 h-10" />
                </div>
              </div>
              {/* Content */}
              <div className="p-10 flex flex-col gap-10 flex-1">
                <div>
                  <span className="inline-block text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 border border-white/10 text-accent uppercase tracking-[0.2em]">
                    {col.audience}
                  </span>
                  <p className="font-display text-3xl font-bold tracking-tight leading-[1.1] text-white">
                    {col.tagline}
                  </p>
                </div>
                <ul className="flex flex-col gap-6">
                  {col.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-4 text-sm">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-white/60 font-medium leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
