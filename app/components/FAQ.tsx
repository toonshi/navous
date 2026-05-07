"use client";

import React from "react";

const faqs = [
  {
    q: "Will visitors need to download an app before arrival?",
    a: "No. Visitors scan a QR code or tap an email link and start wayfinding instantly in their mobile browser with no sign-up or app install required.",
  },
  {
    q: "How quickly can a facility go live?",
    a: "Most facilities can launch in under 24 hours. Once you provide your CAD or PDF floor plans, our engine digitizes and maps your environment for immediate deployment.",
  },
  {
    q: "Can routing handle accessibility and mobility needs?",
    a: "Yes. Navous supports step-free, wheelchair-optimized, and lift-priority routing, ensuring every visitor can navigate with confidence.",
  },
  {
    q: "Will this require beacons or new hardware procurement?",
    a: "No. Core wayfinding runs entirely without new indoor hardware by leveraging existing architectural blueprints and smartphone sensor fusion.",
  },
  {
    q: "How is visitor privacy protected and who owns the data?",
    a: "Location calculations happen on the user's device. We do not stream continuous location data to our servers. Your organization retains full ownership of facility and movement data.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-primary border-t border-white/5 py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Common questions from <br />facility operators.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about visitor access, deployment timelines, and institutional control.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:border-accent/40 transition-all cursor-pointer"
            >
              <summary className="list-none font-bold text-lg text-white flex items-start justify-between gap-4">
                {item.q}
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent transition-transform group-open:rotate-45">
                   <span className="text-xl leading-none">+</span>
                </div>
              </summary>
              <div className="text-white/60 text-base leading-relaxed mt-4 max-w-3xl pr-8">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
