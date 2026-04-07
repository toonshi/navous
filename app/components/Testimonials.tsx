"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "We saw a 31% reduction in missed outpatient appointments within the first month. Nursing staff were visibly less stressed. Navous paid for itself before we even sent the first invoice.",
    name: "Dr. Adaeze Okafor",
    title: "Head of Patient Experience, Regional Medical Centre",
    vertical: "🏥 Healthcare",
    verticalBg: "bg-blue-50 text-blue-700",
  },
  {
    quote:
      "Our tenants were frustrated with foot traffic distribution — the anchor stores got everything, smaller units got nothing. After Navous, shoppers actually discover the whole mall. Tenant renewals are up.",
    name: "James Kariuki",
    title: "Operations Director, Westview Shopping Complex",
    vertical: "🛍️ Retail",
    verticalBg: "bg-amber-50 text-amber-700",
  },
  {
    quote:
      "On orientation week, we used to flood the campus with volunteers just to point students in the right direction. This year we deployed Navous QR codes at every entrance. Zero volunteer requests. Zero late arrivals to registration.",
    name: "Prof. Sandra Osei",
    title: "Registrar, Greenfield University",
    vertical: "🎓 Campus",
    verticalBg: "bg-green-50 text-green-700",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Social Proof
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-secondary mt-3 mb-4">
            What operators say
            <br />
            after going live.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between gap-6"
            >
              <div>
                <span className={`inline-flex text-xs font-bold px-3 py-1.5 rounded-full mb-5 ${t.verticalBg}`}>
                  {t.vertical}
                </span>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-secondary">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
