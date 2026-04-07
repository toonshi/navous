"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Sensor Setup & Map Prep",
    description:
      "Send us your existing floor plans. We convert them into a digital twin while you place our discreet, stick-on Bluetooth sensors. No wiring, no complex IT, just minutes per room.",
    accent: "bg-accent text-slate-900",
    illustration: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Precision Calibration",
    description:
      "We configure your routing logic and calibrate the sensors for sub-meter accuracy. Your team tests the experience on their own phones to ensure the directions are flawless.",
    accent: "bg-accent text-slate-900",
    illustration: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Launch & Track",
    description:
      "Place QR codes at entry points. Visitors scan once and get instant, turn-by-turn guidance through their mobile browser. No app downloads required. You see results from day one.",
    accent: "bg-[#13B7DA] text-white",
    illustration: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.3em] mb-6 block">
            The 21-Day Rollout
          </span>
          <h2 className="font-sans text-[3.5rem] md:text-[5rem] font-medium tracking-[-0.03em] leading-[0.95] mb-8">
            From blueprints to
            <br />
            live navigation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-slate-900 transition-all duration-500"
            >
              <div>
                <span className={`inline-block px-4 py-1 rounded-full text-[11px] font-black tracking-widest mb-10 ${step.accent}`}>
                  STEP {step.number}
                </span>
                <h3 className="text-3xl font-medium tracking-tight mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed mb-12 group-hover:text-white/70 transition-colors">
                  {step.description}
                </p>
              </div>
              
              <div className="relative h-48 w-full bg-black/20 rounded-3xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-all">
                <img
                  src={step.illustration}
                  alt={step.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Data Sovereignty", text: "Your spatial and operational data remains under your full control." },
            { label: "Inclusion First", text: "Logic includes step-free, lift-priority, and audio-assisted routing." },
            { label: "Pure Browser", text: "No mandatory app installs or accounts required for visitor wayfinding." }
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <p className="text-[13px] text-white/40 mb-2 font-black uppercase tracking-widest">{item.label}</p>
              <p className="text-[14px] text-white/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
