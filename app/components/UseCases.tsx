"use client";

import React, { useState } from "react";

const cases = [
  {
    tag: "🏥 Healthcare",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    headline: "Your staff is spending 18 minutes a shift giving directions.",
    story:
      "It's 2 AM. A family rushes into a hospital — mother admitted to cardiac, third floor, wing B. The signs are confusing. The corridors all look the same. Nurses are asked three times before the family finds the right room. That nurse's 18 minutes were not spent on patient care. They were spent being a human GPS.",
    solution:
      "Navous guides every patient and visitor from the moment they walk in — by appointment, by department, or by name. QR codes at every entrance. No app download. Turn-by-turn, accessible, multilingual.",
    stats: [
      { value: "31%", label: "fewer missed appointments" },
      { value: "43%", label: "drop in patient anxiety scores" },
      { value: "22 min", label: "saved per nurse per shift" },
    ],
    accentColor: "bg-blue-500",
  },
  {
    tag: "🛍️ Retail & Malls",
    tagColor: "bg-amber-50 text-amber-700 border-amber-100",
    headline: "They had money to spend. They left without buying anything.",
    story:
      "Millions of shoppers walk into malls every weekend. They wander for 23 minutes looking for a store they know exists. Frustration sets in. Impulse buying collapses. They leave. The store they were looking for? 40 meters away, behind a pillar. Lost footfall is lost revenue — and it's happening every single day.",
    solution:
      "Navous puts every store, promotion, and service on a live indoor map. Shoppers find what they want in under 60 seconds. Mall operators see real-time foot-traffic heatmaps. Tenants push location-triggered promotions to shoppers walking past.",
    stats: [
      { value: "47%", label: "increase in impulse purchases" },
      { value: "38 min", label: "longer average dwell time" },
      { value: "28%", label: "higher return visit rate" },
    ],
    accentColor: "bg-amber-500",
  },
  {
    tag: "🎓 Campuses",
    tagColor: "bg-green-50 text-green-700 border-green-100",
    headline: "First-year students are missing class because they can't find it.",
    story:
      "A new student on day one of the semester. Building codes that mean nothing. Room numbers that don't follow any logic. A lecture starting in 4 minutes. They're on the wrong side of campus. They arrive 12 minutes late — embarrassed, stressed, and already behind. This repeats for the first three weeks.",
    solution:
      "Navous maps every lecture hall, lab, office, canteen, and facility across your campus. Students navigate from wherever they are. Staff are routable by name. Events are discoverable. One QR code, zero confusion.",
    stats: [
      { value: "31%", label: "fewer late arrivals to class" },
      { value: "89%", label: "student satisfaction with wayfinding" },
      { value: "4 hrs", label: "per week saved by admin on directions" },
    ],
    accentColor: "bg-green-500",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Use Cases
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Built for where getting lost
            <br />
            has real consequences.
          </h2>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {cases.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition cursor-pointer ${
                active === i
                  ? "bg-dark text-white border-dark"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* Active case card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: story */}
            <div className="p-10 flex flex-col justify-between gap-8">
              <div>
                <span className={`inline-flex text-xs font-bold px-3 py-1.5 rounded-full border mb-5 ${c.tagColor}`}>
                  {c.tag}
                </span>
                <h3 className="font-space-grotesque text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-snug">
                  {c.headline}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{c.story}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  The Navous fix
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">{c.solution}</p>
              </div>
            </div>

            {/* Right: stats */}
            <div className="bg-dark p-10 flex flex-col justify-center gap-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-10 blur-2xl pointer-events-none"
                style={{ background: "#13B7DA" }}
              />
              {c.stats.map((s) => (
                <div key={s.value} className="relative">
                  <p className="font-space-grotesque text-5xl font-bold text-white leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-slate-400 text-sm">{s.label}</p>
                </div>
              ))}
              <button className="relative self-start mt-4 border border-white/30 text-white px-6 py-3 rounded-xl text-sm font-bold hover:border-white hover:bg-white/10 transition cursor-pointer">
                See this in action →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
