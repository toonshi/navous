"use client";

import React from "react";

const columns = [
  {
    icon: "👤",
    audience: "For Visitors",
    tagline: "Confidence from step one.",
    features: [
      "Find any room, store, or office in under 60 seconds",
      "Turn-by-turn navigation — no app download required",
      "Works offline once loaded",
      "Accessibility-first: wheelchair routes, audio guidance",
      "Available in multiple languages",
      "Real-time updates if routes change or doors close",
    ],
    bg: "bg-white border border-slate-100",
    tagBg: "bg-primary/10 text-primary",
    featureIcon: "text-primary",
  },
  {
    icon: "🏢",
    audience: "For Facility Operators",
    tagline: "Clarity across every floor.",
    features: [
      "Real-time foot-traffic heatmaps by zone",
      "Identify where visitors get stuck or lost",
      "Staff efficiency analytics (time spent on directions)",
      "Emergency evacuation routing — instant reroute",
      "Visitor satisfaction tracking",
      "No hardware installation required",
    ],
    bg: "bg-dark text-white",
    tagBg: "bg-primary/20 text-primary",
    featureIcon: "text-primary",
  },
  {
    icon: "🏪",
    audience: "For Businesses & Tenants",
    tagline: "Turn footfall into revenue.",
    features: [
      "Push location-triggered promotions to nearby visitors",
      "Understand exactly how traffic flows past your space",
      "Track conversion from browse to transaction",
      "Measure marketing ROI precisely",
      "Appear in indoor search results",
      "Get insights on peak traffic times by zone",
    ],
    bg: "bg-white border border-slate-100",
    tagBg: "bg-primary/10 text-primary",
    featureIcon: "text-primary",
  },
];

export default function StakeholderValue() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Who it's for
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Everyone in your building wins.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Navous doesn't just solve navigation for visitors. It makes the
            whole ecosystem smarter — operators, tenants, and staff included.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {columns.map((col) => (
            <div
              key={col.audience}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${col.bg}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{col.icon}</span>
                <div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${col.tagBg}`}>
                    {col.audience}
                  </span>
                  <p className={`font-space-grotesque text-lg font-bold leading-snug ${col.bg.includes("bg-dark") ? "text-white" : "text-slate-900"}`}>
                    {col.tagline}
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {col.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 flex-shrink-0 ${col.featureIcon}`}>✓</span>
                    <span className={col.bg.includes("bg-dark") ? "text-slate-300" : "text-slate-600"}>
                      {feat}
                    </span>
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
