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
    <section id="pricing" className="py-24 px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-4">
            Pricing that pays for itself.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
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
                  ? "bg-accent text-white border-2 border-accent relative shadow-2xl shadow-accent/20"
                  : "bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-accent text-[10px] font-black px-4 py-1 rounded-full whitespace-nowrap tracking-widest uppercase">
                  MOST POPULAR
                </span>
              )}

              {/* Price */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.highlight ? "text-white/80" : "text-white/40"}`}>
                  {tier.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`font-display text-5xl font-bold ${tier.highlight ? "text-white" : "text-white"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-lg mb-1 ${tier.highlight ? "text-white/70" : "text-white/40"}`}>
                    {tier.period}
                  </span>
                </div>
                <p className={`text-sm ${tier.highlight ? "text-white/80" : "text-white/40"}`}>
                  {tier.forWhom}
                </p>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${tier.highlight ? "text-white/90" : "text-white/50"}`}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 grow">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 shrink-0 ${tier.highlight ? "text-white" : "text-accent"}`}>✓</span>
                    <span className={tier.highlight ? "text-white/90" : "text-white/70"}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ROI note */}
              <p className={`text-xs font-semibold ${tier.highlight ? "text-white" : "text-accent"}`}>
                {tier.roi}
              </p>

              {/* CTA */}
              <a
                href="/#contact"
                className={`block w-full py-4 rounded-lg font-bold text-sm text-center transition cursor-pointer ${
                  tier.highlight
                    ? "bg-white text-accent hover:bg-slate-50 shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-8 font-medium tracking-wide">
          All plans: Free setup · Unlimited users · Cancel anytime · 99.9% uptime guarantee
        </p>

        {/* ROI Calculation Section */}
        <div className="mt-24 max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">
                The Math
              </span>
              <h3 className="font-display text-3xl font-bold text-white mb-6 leading-tight">
                How Navous pays for itself in staff hours alone.
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                A mid-size hospital front desk handles <span className="font-bold text-white">200+ wayfinding questions per day</span>. At just 2 minutes each, that&apos;s <span className="font-bold text-white">6+ staff hours daily</span>.
              </p>
              <p className="text-white/60 leading-relaxed">
                This is an estimate, not a pilot claim. The point is simple: wayfinding questions consume paid staff time that can be better spent elsewhere.
              </p>
            </div>
            <div className="flex-1 w-full bg-[#000000] rounded-2xl p-8 border border-white/5 flex flex-col gap-6 shadow-2xl">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-sm text-white/40">Daily Questions</span>
                <span className="text-2xl font-bold text-white">200+</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-sm text-white/40">Staff Time Lost</span>
                <span className="text-2xl font-bold text-white">6.6 Hours</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-accent italic">Estimated Monthly Savings</span>
                <span className="text-3xl font-bold text-accent">$4,000+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
