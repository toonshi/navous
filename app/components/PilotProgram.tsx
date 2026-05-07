"use client";

import React from "react";
import ContactForm from "./ContactForm";

export default function PilotProgram() {
  return (
    <section id="pilot" className="py-32 px-8 bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="inline-block text-accent text-sm font-bold uppercase tracking-[0.25em] mb-8 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
            Early access pilot program
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
            Build Navous with your facility, not after it.
          </h2>
          <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-xl font-medium">
            We are onboarding our first pilot partners now. Share your floor plans, edge cases, and visitor flow challenges in exchange for founding pricing, direct founder access, and a product shaped around your operation.
          </p>
          
          <ul className="flex flex-col gap-6 mb-12">
            {[
              "No implementation fee during the pilot",
              "Direct access to the founding team",
              "Priority input on pilot features and routing edge cases",
              "Optional case study only after measurable results exist"
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-black">✓</span>
                </span>
                <span className="text-white font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
