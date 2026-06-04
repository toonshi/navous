"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Sparkle, ScatterDots } from "../components/Doodles";

const tiers = [
  {
    num: "01",
    name: "Self",
    tag: "Fastest",
    tagStyle: "text-teal border-teal/30 bg-teal/10",
    timeStyle: "text-teal",
    has: "A CAD, DXF, or PDF floor plan",
    does: "We ingest and configure it automatically",
    time: "Same day",
    note: "Upload your file — we handle the rest. Your venue is live the same day.",
  },
  {
    num: "02",
    name: "Assisted",
    tag: "Most common",
    tagStyle: "text-accent border-accent/30 bg-accent/10",
    timeStyle: "text-accent",
    has: "Paper blueprints, a photo, or a rough sketch",
    does: "We digitize it for you",
    time: "3–5 days",
    note: "A photo on your phone is enough. Our team converts it into a precise map — no technical prep on your side.",
  },
  {
    num: "03",
    name: "Surveyed",
    tag: "Zero prep",
    tagStyle: "text-white/50 border-white/15 bg-white/5",
    timeStyle: "text-white",
    has: "Nothing — no blueprints, no plans",
    does: "Our team physically walks and maps your building",
    time: "1–2 weeks",
    note: "We schedule a site visit and deliver a complete navigable map. You prepare nothing.",
  },
];

const benefits = [
  "No implementation fee — all three tiers are free during the pilot",
  "Direct access to the founding team, not a support ticket queue",
  "Priority input on features and routing edge cases specific to your venue",
  "Optional case study — only published after measurable results, and only with your approval",
];

export default function PilotPage() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />

      <main className="flex-1 pt-20">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative py-28 px-8 overflow-hidden border-b border-white/5">
          {/* dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.015]"
            style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <Sparkle size={18} color="#3B82F6" className="absolute top-24 right-[14%] doodle-float pointer-events-none opacity-30" />
          <Sparkle size={11} color="#2DD4BF" className="absolute top-40 left-[9%] doodle-float-slow pointer-events-none opacity-20" />
          <ScatterDots color="#3B82F6" className="absolute bottom-16 right-[6%] pointer-events-none opacity-10" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="reveal inline-block text-accent text-sm font-bold uppercase tracking-[0.25em] mb-6 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
              Early access pilot programme
            </span>
            <h1 className="reveal font-display text-5xl md:text-[5.5rem] font-bold tracking-tight text-white leading-[0.95] mb-8">
              Your building, live<br />
              <span className="text-white/35">in days — not months.</span>
            </h1>
            <p className="reveal text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              No beacons. No hardware. No CAD files required.<br />
              Start from wherever you are — we handle the rest. Everything is free during the pilot.
            </p>
            <a href="#apply" className="btn-primary">Apply for the pilot →</a>
          </div>
        </section>

        {/* ── Tier rows ─────────────────────────────────────────────── */}
        <section className="px-8 py-24 max-w-7xl mx-auto">

          <div className="mb-14">
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Onboarding tiers
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-lg">
              Start from wherever you are.
            </h2>
          </div>

          {/* Spectrum bar */}
          <div className="flex items-center mb-16 max-w-2xl gap-4">
            <span className="text-white/25 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">No docs</span>
            <div className="flex-1 relative h-px bg-gradient-to-r from-white/10 via-accent/50 to-teal">
              {[0, 50, 100].map((pos, i) => (
                <div
                  key={i}
                  className="absolute -top-[5px] w-2.5 h-2.5 rounded-full bg-accent border-2 border-primary"
                  style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
                />
              ))}
            </div>
            <span className="text-teal text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">CAD ready</span>
          </div>

          {/* Rows */}
          <div className="border-t border-white/5 divide-y divide-white/5">
            {tiers.map((tier, i) => (
              <div
                key={tier.num}
                onMouseEnter={() => setActiveRow(i)}
                onMouseLeave={() => setActiveRow(null)}
                className={`-mx-8 px-8 transition-colors duration-300 cursor-default ${activeRow === i ? "bg-white/[0.025]" : ""}`}
              >
                {/* Main row */}
                <div className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_180px_1fr_1fr_110px] gap-x-8 gap-y-1 items-center py-9 md:py-10">

                  {/* Large number */}
                  <span
                    className={`font-display text-5xl md:text-6xl font-bold tracking-tight transition-colors duration-300 leading-none ${activeRow === i ? "text-white" : "text-white/10"}`}
                  >
                    {tier.num}
                  </span>

                  {/* Name + tag */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-display text-xl md:text-2xl font-bold text-white">{tier.name}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border w-fit ${tier.tagStyle}`}>
                      {tier.tag}
                    </span>
                  </div>

                  {/* You have — desktop */}
                  <div className="hidden md:block">
                    <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1.5">You have</p>
                    <p className="text-white/65 text-sm leading-relaxed">{tier.has}</p>
                  </div>

                  {/* We do — desktop */}
                  <div className="hidden md:block">
                    <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1.5">We do</p>
                    <p className="text-white/65 text-sm leading-relaxed">{tier.does}</p>
                  </div>

                  {/* Time — desktop */}
                  <div className="hidden md:block text-right">
                    <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1.5">Live in</p>
                    <p className={`text-xl font-bold ${tier.timeStyle}`}>{tier.time}</p>
                  </div>

                  {/* Mobile: time inline */}
                  <div className="md:hidden flex items-center justify-end">
                    <p className={`text-lg font-bold ${tier.timeStyle}`}>{tier.time}</p>
                  </div>

                  {/* Mobile: has + does below */}
                  <div className="col-span-2 md:hidden pt-3 border-t border-white/5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">You have</p>
                      <p className="text-white/60 text-xs leading-relaxed">{tier.has}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">We do</p>
                      <p className="text-white/60 text-xs leading-relaxed">{tier.does}</p>
                    </div>
                  </div>
                </div>

                {/* Hover note — slides in */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${activeRow === i ? "max-h-16 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-white/30 text-xs leading-relaxed md:pl-[calc(80px+2rem)]">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/15 text-xs mt-8 pt-6 border-t border-white/5">
            All tiers are free during the pilot. After launch, Assisted and Surveyed become one-time setup services.
          </p>
        </section>

        {/* ── Benefits — split card ──────────────────────────────────── */}
        <section className="px-8 pb-24 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]">

            {/* Left: statement */}
            <div className="relative p-10 md:p-16 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
              />
              <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-5 block">What you get</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                We&apos;re not selling<br />
                you a product.<br />
                <span className="text-white/35">We&apos;re building it<br />with you.</span>
              </h2>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                Pilot partners get direct access to the team, shape the roadmap, and go live at no cost. In return, we get honest feedback from a real venue.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-white/5" />

            {/* Right: checklist */}
            <div className="p-10 md:p-16 flex flex-col justify-center gap-7">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-4 group">
                  <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/25 transition-colors">
                    <span className="text-accent text-[10px] font-black">✓</span>
                  </span>
                  <span className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────── */}
        <section id="apply" className="relative px-8 pb-32 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.01]"
            style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Apply for the pilot.
              </h2>
              <p className="text-white/35 text-lg">
                Tell us about your venue. We&apos;ll reply within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
