"use client";

import React from "react";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="py-24 px-8 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        {/* Row 1 — left text, right illustration */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">
              The Challenge
            </span>
            <h2 className="font-laila text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              The high cost of
              <br />
              <span className="text-primary">people getting lost.</span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              When visitors can&apos;t find where they need to go, your front desk gets overloaded, teams get interrupted, and the experience feels chaotic.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/illustrations/navigation.svg"
              alt="Indoor navigation illustration"
              width={400}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Row 2 — right text, left illustration (zigzag) */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <h2 className="font-laila text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              Fewer questions. Faster arrivals.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Navous shows where confusion happens most, so you can fix routes, improve signage, and move people through the building with less friction.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <Image
              src="/illustrations/data-intelligence.svg"
              alt="Movement intelligence dashboard"
              width={400}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Row 3 — left text, right illustration */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <h2 className="font-laila text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              Better access for every visitor.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Offer routes that support mobility needs, multiple languages, and clear turn-by-turn guidance so more people can move confidently.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/illustrations/accessibility-nav.svg"
              alt="Accessibility and multilingual navigation"
              width={400}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Pull quote */}
        <div className="rounded-2xl p-10 flex flex-col md:flex-row md:items-center gap-6 bg-white border-l-4 border-slate-900">
          <div className="flex-1">
            <p className="font-laila text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-4">
              &ldquo;Wayfinding is customer experience. When arrival feels easy, everything after that gets better.&rdquo;
            </p>
            <p className="text-slate-500 text-sm">
              That means happier visitors, calmer staff, and smoother daily operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
