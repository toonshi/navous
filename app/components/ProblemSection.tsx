"use client";

import React from "react";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        {/* Row 1 — left text, right illustration */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              The Problem
            </span>
            <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              Getting lost isn&apos;t just frustrating.
              <br />
              <span className="text-primary">It&apos;s costing you.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Bad indoor navigation is invisible until you measure it. When
              visitors can&apos;t find where they&apos;re going, they leave frustrated —
              and your staff spend their shift giving directions instead of
              doing their jobs.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/illustrations/navigation.svg"
              alt="Indoor navigation illustration"
              width={480}
              height={360}
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Row 2 — right text, left illustration (zigzag) */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Operational Intelligence
            </span>
            <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              Your building is generating data you aren&apos;t seeing.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Navous provides the precision needed to improve staff efficiency
              and ensures that it&apos;s accessible to the people inside it. Every
              movement, every bottleneck, every missed turn — turned into
              actionable insight.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <Image
              src="/illustrations/data-intelligence.svg"
              alt="Movement intelligence dashboard"
              width={480}
              height={360}
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Row 3 — left text, right illustration */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Inclusive by Design
            </span>
            <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
              Accessible Navigation for everybody.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Including{" "}
              <span className="font-semibold text-slate-900">
                People with Special Needs
              </span>{" "}
              &amp;{" "}
              <span className="font-semibold text-slate-900">
                People with Foreign Languages
              </span>
              . Wheelchair-friendly routing, audio guidance, lift-priority
              paths, and multilingual support so every guest moves with
              confidence.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/illustrations/accessibility-nav.svg"
              alt="Accessibility and multilingual navigation"
              width={480}
              height={360}
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Pull quote */}
        <div className="bg-dark rounded-2xl p-10 flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden">
          <div
            className="absolute right-0 top-0 w-64 h-64 opacity-10 blur-2xl pointer-events-none"
            style={{ background: "#13B7DA" }}
          />
          <div className="flex-1 relative">
            <p className="font-space-grotesque text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              &ldquo;Navigation is not a nice-to-have. It is the difference between a
              visitor who completes their journey and one who doesn&apos;t.&rdquo;
            </p>
            <p className="text-slate-400 text-sm">
              The hidden cost that facility managers stop ignoring once they
              see the data.
            </p>
          </div>
          <div className="shrink-0 relative">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition cursor-pointer whitespace-nowrap">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
