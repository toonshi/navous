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
          <h2 className="font-laila text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            Everyone in your building wins.
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Navous creates a smarter ecosystem by delivering value to visitors, facility operators, and business tenants alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {columns.map((col) => (
            <div
              key={col.audience}
              className="flex flex-col overflow-hidden bg-white"
            >
              {/* Illustration */}
              <div className="bg-white p-12 flex justify-center">
                <Image
                  src={col.illustration}
                  alt={col.illustrationAlt}
                  width={280}
                  height={180}
                  className="w-full max-w-[200px]"
                />
              </div>
              {/* Content */}
              <div className="p-12 pt-0 flex flex-col gap-10 flex-1">
                <div>
                  <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-6 border border-slate-200 text-slate-500 uppercase tracking-widest">
                    {col.audience}
                  </span>
                  <p className="font-laila text-3xl font-bold tracking-tight leading-[1.1] text-slate-900">
                    {col.tagline}
                  </p>
                </div>
                <ul className="flex flex-col gap-5">
                  {col.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-4 text-sm">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-slate-900" />
                      <span className="text-slate-600 font-medium leading-relaxed">{feat}</span>
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
