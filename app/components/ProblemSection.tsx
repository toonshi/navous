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
            <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              The high cost of
              <br />
              <span className="text-primary">navigation friction.</span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Inefficient indoor wayfinding isn&apos;t just a frustration for visitors—it&apos;s an operational bottleneck. When guests can&apos;t find their destination, staff spend their shifts giving directions instead of performing core duties.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/illustrations/navigation.svg"
              alt="Indoor navigation illustration"
              width={480}
              height={360}
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Row 2 — right text, left illustration (zigzag) */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              Data-driven spatial intelligence.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Navous captures movement patterns that are normally invisible. Identify bottlenecks, optimize layouts, and improve facility performance with real-time analytics. Every missed turn is a data point for improvement.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <Image
              src="/illustrations/data-intelligence.svg"
              alt="Movement intelligence dashboard"
              width={480}
              height={360}
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Row 3 — left text, right illustration */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              Accessibility for every guest.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              We believe in navigation without barriers. Our platform includes wheelchair-optimized routing, multilingual support, and audio guidance to ensure that everyone moves through your space with confidence.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/illustrations/accessibility-nav.svg"
              alt="Accessibility and multilingual navigation"
              width={480}
              height={360}
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Pull quote */}
        <div className="rounded-2xl p-10 flex flex-col md:flex-row md:items-center gap-6 bg-white border-l-4 border-slate-900">
          <div className="flex-1">
            <p className="font-space-grotesque text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-4">
              &ldquo;Navigation is not a nice-to-have. It is the difference between a
              visitor who completes their journey and one who doesn&apos;t.&rdquo;
            </p>
            <p className="text-slate-500 text-sm">
              The hidden cost that facility managers stop ignoring once they
              see the data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
