"use client";

import React from "react";
import Image from "next/image";

const columns = [
  {
    audience: "For Visitors",
    tagline: "Confidence from step one.",
    illustration: "/illustrations/stakeholder-visitor.svg",
    illustrationAlt: "Person navigating to destination",
    accentColor: "#13B7DA",
    features: [
      "Find any room, store, or office in under 60 seconds",
      "Turn-by-turn navigation — no app download required",
      "Accessibility-first: wheelchair routes, audio guidance",
      "Available in multiple languages",
    ],
  },
  {
    audience: "For Facility Operators",
    tagline: "Clarity across every floor.",
    illustration: "/illustrations/stakeholder-operator.svg",
    illustrationAlt: "Facility heatmap dashboard",
    accentColor: "#13B7DA",
    features: [
      "Real-time foot-traffic heatmaps by zone",
      "Identify where visitors get stuck or lost",
      "Emergency evacuation routing — instant reroute",
      "No hardware installation required",
    ],
  },
  {
    audience: "For Businesses & Tenants",
    tagline: "Turn footfall into revenue.",
    illustration: "/illustrations/stakeholder-tenant.svg",
    illustrationAlt: "Store visible in indoor search results",
    accentColor: "#13B7DA",
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
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            Everyone in your building wins.
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Navous creates a smarter ecosystem by delivering value to visitors, facility operators, and business tenants alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {columns.map((col) => (
            <div
              key={col.audience}
              className="rounded-2xl flex flex-col overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Thin teal top accent bar */}
              <div className="h-1 w-full" style={{ background: col.accentColor }} />
              {/* Illustration */}
              <Image
                src={col.illustration}
                alt={col.illustrationAlt}
                width={320}
                height={200}
                className="w-full"
              />
              {/* Content */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                <div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 border" style={{ color: col.accentColor, borderColor: col.accentColor + "40", background: col.accentColor + "0D" }}>
                    {col.audience}
                  </span>
                  <p className="font-space-grotesque text-xl font-bold leading-snug text-slate-900">
                    {col.tagline}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {col.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: col.accentColor }}>✓</span>
                      <span className="text-slate-600 font-medium">{feat}</span>
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
