"use client";

import React from "react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-primary px-5 py-24 sm:px-8 md:py-28">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-display mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:mb-8 md:text-7xl">
          Ready to map your building?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base font-medium leading-relaxed text-white/60 sm:text-lg md:mb-12 md:text-xl">
          Reach out and we&apos;ll turn your floor plans into a live walkthrough you can test with your team. No app to build, and no pressure to pretend the pilot is further along than it is.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
          <Link href="/#contact" className="btn-primary w-full sm:min-w-[180px] sm:w-auto">Get Started</Link>
          <Link href="/how-it-works" className="btn-secondary btn-learn-more w-full sm:min-w-[180px] sm:w-auto">Learn More</Link>
        </div>
      </div>
    </section>
  );
}
