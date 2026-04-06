"use client";

import React from "react";

const tiers = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    forWhom: "Up to 50 rooms or stores",
    description:
      "Perfect for clinics, boutique malls, or small campuses that need reliable navigation without complexity.",
    features: [
      "Full indoor navigation engine",
      "QR code access — no app download",
      "Up to 3 floor plans",
      "Multi-language support",
      "Email support",
      "99.9% uptime SLA",
    ],
    cta: "Start Free Trial",
    highlight: false,
    roi: "ROI typically within 3 weeks",
    roiColor: "text-slate-500",
  },
  {
    name: "Growth",
    price: "$899",
    period: "/month",
    forWhom: "50–200 rooms or stores",
    description:
      "For hospitals, malls, and campuses that want navigation plus the analytics to act on what they learn.",
    features: [
      "Everything in Starter",
      "Real-time foot-traffic heatmaps",
      "Analytics dashboard",
      "Appointment/event integration",
      "Location-triggered promotions",
      "Priority support + onboarding",
    ],
    cta: "Book a Demo",
    highlight: true,
    roi: "Most operators see ROI in month 1",
    roiColor: "text-primary",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    forWhom: "200+ rooms, multi-site",
    description:
      "For large hospital networks, regional mall groups, and multi-campus institutions that need full control.",
    features: [
      "Everything in Growth",
      "Full API access",
      "Custom branding & white-label",
      "Dedicated account manager",
      "SLA-backed response times",
      "Custom integrations",
    ],
    cta: "Talk to Sales",
    highlight: false,
    roi: "Custom ROI modelling included",
    roiColor: "text-slate-500",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mt-3 mb-4">
            Pricing that pays for itself.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every plan includes free setup, unlimited users, and a 30-day
            money-back guarantee. No lock-in.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${
                tier.highlight
                  ? "bg-dark text-white border-2 border-primary relative"
                  : "bg-white border border-slate-100 shadow-sm"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </span>
              )}

              {/* Price */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                  {tier.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`font-space-grotesque text-5xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-lg mb-1 ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                    {tier.period}
                  </span>
                </div>
                <p className={`text-sm ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {tier.forWhom}
                </p>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 grow">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    <span className={tier.highlight ? "text-slate-300" : "text-slate-600"}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ROI note */}
              <p className={`text-xs font-semibold ${tier.highlight ? "text-primary" : tier.roiColor}`}>
                {tier.roi}
              </p>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-full font-bold text-sm transition cursor-pointer ${
                  tier.highlight
                    ? "bg-primary text-white hover:brightness-110"
                    : "border border-slate-200 text-slate-900 hover:border-slate-400 bg-white"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          All plans: Free setup · Unlimited users · Cancel anytime · 99.9% uptime guarantee
        </p>
      </div>
    </section>
  );
}
