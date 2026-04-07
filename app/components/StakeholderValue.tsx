"use client";

import React from "react";
import Image from "next/image";

const columns = [
  {
    audience: "For Visitors",
    tagline: "Confidence from step one.",
    illustration: "/illustrations/stakeholder-visitor.svg",
    illustrationAlt: "Person navigating to destination",
    cardBg: "bg-sky-50 border-sky-100",
    tagBg: "bg-primary/10 text-primary",
    isDark: false,
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
    cardBg: "bg-slate-900 border-slate-800",
    tagBg: "bg-primary/20 text-primary",
    isDark: true,
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
    cardBg: "bg-amber-50 border-amber-100",
    tagBg: "bg-amber-500/10 text-amber-600",
    isDark: false,
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
    <section className="py-24 px-8" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0feff 100%)" }}>
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
              className={`border rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow ${col.cardBg}`}
            >
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
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${col.tagBg}`}>
                    {col.audience}
                  </span>
                  <p className={`font-space-grotesque text-xl font-bold leading-snug ${col.isDark ? 'text-white' : 'text-slate-900'}`}>
                    {col.tagline}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {col.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 shrink-0 text-primary">✓</span>
                      <span className={col.isDark ? 'text-slate-300 font-medium' : 'text-slate-700 font-medium'}>{feat}</span>
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
