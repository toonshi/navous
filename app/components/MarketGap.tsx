"use client";

import React from "react";
import { Sparkle, ScatterDots } from "./Doodles";

export default function MarketGap() {
  return (
    <section className="py-24 px-8 bg-secondary relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Competitive CapEx Analysis */}
          <div>
            <div className="mb-12">
              <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Competitive CapEx Analysis
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6 font-display">
                The &ldquo;Sticker vs. Beacon&rdquo; Play
              </h2>
              <p className="text-white/60 font-medium leading-relaxed">
                A common misconception is that Big Tech is &ldquo;hardware-free.&rdquo; In reality, they require massive, invisible infrastructure costs.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-5 text-[10px] font-bold text-white/40 uppercase tracking-widest">Metric</th>
                    <th className="p-5 text-[10px] font-bold text-white/40 uppercase tracking-widest">Big Tech</th>
                    <th className="p-5 text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5">Navous</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  <tr className="border-b border-white/5">
                    <td className="p-5 text-white/40 text-xs">Primary Anchor</td>
                    <td className="p-5 text-white/80">BLE Beacon / WiFi</td>
                    <td className="p-5 text-white bg-accent/10">QR Sticker</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-5 text-white/40 text-xs">Unit Cost</td>
                    <td className="p-5 text-white/80">$20 - $50 per unit</td>
                    <td className="p-5 text-accent font-bold bg-accent/10">$0.01 per unit</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-5 text-white/40 text-xs">Deployment</td>
                    <td className="p-5 text-white/80">Professional (Days)</td>
                    <td className="p-5 text-white bg-accent/10">Janitorial (Minutes)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-5 text-white/40 text-xs">Maintenance</td>
                    <td className="p-5 text-white/80">Battery every 1-2 yrs</td>
                    <td className="p-5 text-accent font-bold bg-accent/10">Zero Maintenance</td>
                  </tr>
                  <tr>
                    <td className="p-5 text-white/40 text-xs">Hidden Cost</td>
                    <td className="p-5 text-white/80">Constant re-mapping</td>
                    <td className="p-5 text-white bg-accent/10">Zero re-mapping</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-white/30 text-xs italic font-medium leading-relaxed">
              *By using QR codes in Phase 1, we offer properties a &ldquo;Zero-CapEx&rdquo; entry point. As we mature into Phase 3 (Visual Anchoring), we maintain a 100x cost advantage over legacy systems.
            </p>
          </div>

          {/* Big Tech Gap */}
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <span className="text-[#FFADAD] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                The Big Tech Gap
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6 font-display">
                Infrastructure for the 99%
              </h2>
              <p className="text-white/60 font-medium leading-relaxed">
                Google and Apple focus on the 0.01% of world-class venues. Navous builds infrastructure for the buildings where business actually happens.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="mt-1">
                  <Sparkle size={20} color="#3B82F6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">The Availability Gap</h4>
                  <p className="text-white/50 text-sm font-medium leading-relaxed">We provide a scalable engine for the 99% of venues — office complexes, hospitals, local malls, universities — that are too small or complex for Big Tech to map.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="mt-1">
                  <Sparkle size={20} color="#60A5FA" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">The Fidelity Gap</h4>
                  <p className="text-white/50 text-sm font-medium leading-relaxed">Big Tech uses grid-based paths that can feel &ldquo;clunky.&rdquo; Our Vector-Native Voronoi Medial Axis provides a &ldquo;premium&rdquo; blue-dot feel and prevents wall-clipping errors.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="mt-1">
                  <Sparkle size={20} color="#93C5FD" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">The Silo Gap</h4>
                  <p className="text-white/50 text-sm font-medium leading-relaxed">Platform lockdown is over. Use Navous once, and it serves your Web Portal, Visitor App, Staff App, and even exports to standard IMDF/OSM formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
