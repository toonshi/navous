"use client";

import React from "react";

const faqs = [
  {
    q: "Will patients need to download an app before arrival?",
    a: "No. Patients and caregivers scan a QR code and start wayfinding instantly in the browser with no sign-up or app install.",
  },
  {
    q: "How quickly can a hospital campus go live?",
    a: "Most hospitals launch in about three weeks, including floor plan digitization, route validation, and department-level signoff.",
  },
  {
    q: "Can routing handle accessibility and multilingual patients?",
    a: "Yes. Navous supports step-free and lift-priority routing, plus multilingual guidance for diverse patient populations.",
  },
  {
    q: "Will this require beacons or new hardware procurement?",
    a: "No. Core wayfinding runs without new indoor hardware by using your floor plans, route rules, and QR entry points.",
  },
  {
    q: "How is patient privacy protected and who owns the data?",
    a: "Your organization retains ownership of facility and movement data. Patient journeys can be analyzed in aggregate to support operational decisions.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-secondary py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Questions hospital operators ask before rollout.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            A compact overview of patient access, deployment risk, and operational control.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:border-primary/40"
            >
              <summary className="cursor-pointer list-none font-semibold text-white flex items-start justify-between gap-4">
                {item.q}
                <span className="text-primary text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-white/50 text-sm leading-relaxed mt-3 max-w-3xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
