"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-6">
          Turn Every Visitor into a Navigated Guest
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left: text */}
          <div className="flex-1 max-w-2xl">
            <h1 className="font-space-grotesque text-[3.2rem] md:text-[4.4rem] lg:text-[5rem] font-bold tracking-tighter text-black leading-[1.04] mb-8">
              Stop losing people
              <br />
              in the hallways.
            </h1>
            <p className="text-[#1E293B] text-xl md:text-2xl leading-relaxed mb-6 font-medium">
              Navous transforms your space into a searchable, intelligent environment. Make sure your visitors find exactly what they need, the moment they enter your doors.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              One spatial intelligence platform for all your facility needs.
              From real-time wayfinding to deep movement analytics, drive
              operational efficiency and lasting visitor satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition cursor-pointer">
                Book a Demo
              </button>
              <button
                className="text-slate-500 px-8 py-4 rounded-full font-bold text-lg hover:text-slate-900 transition cursor-pointer"
                aria-label="See how it works"
              >
                See how it works &rarr;
              </button>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/illustrations/hero.svg"
              alt="Indoor navigation map showing a visitor being guided to their destination"
              width={560}
              height={480}
              className="w-full max-w-lg lg:max-w-xl drop-shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
