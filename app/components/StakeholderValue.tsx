"use client";

import React from "react";
import Image from "next/image";

const columns = [
  {
    audience: "For Visitors",
    tagline: "Confidence from step one.",
    illustration: "/illustrations/stakeholder-visitor.svg",
    illustrationAlt: "Person navigating to destination",
    cardBg: "bg-slate-900/40 border-white/5",
    tagBg: "bg-accent text-slate-900",
    features: [
      "Reliable 'Blue Dot' tracking — even in signal dead zones",
      "Instant directions from any browser (no apps or logins)",
      "Accessible routes for wheelchairs and pushchairs",
      "Audio guidance for low-vision guests",
    ],
  },
  {
    audience: "For Facility Operators",
    tagline: "Unprecedented visibility.",
    illustration: "/illustrations/stakeholder-operator.svg",
    illustrationAlt: "Facility heatmap dashboard",
    cardBg: "bg-slate-900/60 border-white/10",
    tagBg: "bg-[#13B7DA] text-white",
    features: [
      "Real-time heatmaps: See exactly how traffic flows",
      "Reduce staff time spent giving directions by 15%",
      "Faster emergency response with dynamic rerouting",
      "100% data sovereignty — your building data is private",
    ],
  },
  {
    audience: "For Businesses & Tenants",
    tagline: "Turn footfall into ROI.",
    illustration: "/illustrations/stakeholder-tenant.svg",
    illustrationAlt: "Store visible in indoor search results",
    cardBg: "bg-slate-900/40 border-white/5",
    tagBg: "bg-accent text-slate-900",
    features: [
      "Proximity marketing: Alert nearby guests to offers",
      "Quantify store entry and browsing metrics",
      "Increase storefront visibility in the search bar",
      "Understand and predict visitor volume peaks",
    ],
  },
];

export default function StakeholderValue() {
  return (
    <section className="py-32 px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.3em] mb-6 block">
            The Shared Value
          </span>
          <h2 className="font-sans text-[3.5rem] md:text-[5rem] font-medium tracking-[-0.03em] leading-[0.95] mb-8">
            Everyone in your 
            <br />
            building wins.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div
              key={col.audience}
              className={`border rounded-[3rem] flex flex-col overflow-hidden group hover:bg-slate-900 transition-all duration-500 ${col.cardBg}`}
            >
              {/* Illustration */}
              <div className="relative h-64 w-full bg-black/20 flex items-center justify-center p-12 border-b border-white/5">
                <Image
                  src={col.illustration}
                  alt={col.illustrationAlt}
                  width={320}
                  height={200}
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              {/* Content */}
              <div className="p-10 flex flex-col gap-8 flex-1">
                <div>
                  <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6 ${col.tagBg}`}>
                    {col.audience}
                  </span>
                  <p className="font-sans text-2xl font-medium leading-tight">
                    {col.tagline}
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {col.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-[14px]">
                      <span className="mt-1 shrink-0 text-accent font-black">✓</span>
                      <span className="text-white/60 group-hover:text-white/80 transition-colors font-medium">{feat}</span>
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
