"use client";

import React from "react";
import { Sparkle, ScatterDots } from "./Doodles";
import Peeps from "./Peeps";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start pt-4 md:pt-6 px-6 md:px-12 bg-[#0B0E14] text-[#F0F6FC]">
      {/* Background Peeps — walking people */}
      <Peeps className="absolute top-0 left-0 w-full h-full opacity-90 z-0" />

      {/* Doodle accents — floating in background */}
      <Sparkle size={18} color="#0052FF" className="absolute top-28 left-[10%] doodle-float pointer-events-none opacity-40" />
      <Sparkle size={13} color="#22D3EE" className="absolute top-44 right-[12%] doodle-float-offset pointer-events-none opacity-30" />
      <Sparkle size={10} color="#0052FF" className="absolute top-64 left-[18%] doodle-float-slow pointer-events-none opacity-30" />
      <ScatterDots color="#22D3EE" className="absolute bottom-32 left-[6%] pointer-events-none opacity-25" />
      <ScatterDots color="#0052FF" className="absolute bottom-28 right-[8%] pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-4 md:mt-8 pb-16 md:pb-0">
        <span className="inline-block text-accent text-sm font-bold uppercase tracking-[0.2em] mb-6">
          Indoor Mapping Platform
        </span>
        <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight text-white leading-[0.95] mb-8 font-display">
          Map your building <br />in minutes.
        </h1>

        <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-10">
          The easiest way to turn floor plans into interactive indoor maps. Guide your visitors seamlessly from door to destination.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-2">
          <a href="#pilot" className="btn-primary w-full sm:min-w-[180px]">
            Get Started
          </a>
          <a href="/how-it-works" className="btn-secondary btn-learn-more w-full sm:min-w-[180px]">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
