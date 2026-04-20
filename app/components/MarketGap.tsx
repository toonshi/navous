"use client";

import React from "react";
import { Sparkle, ScatterDots, WiggleLine } from "./Doodles";

export default function MarketGap() {
  return (
    <section className="py-24 px-8 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Competitive CapEx Analysis */}
          <div>
            <div className="mb-12">
              <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Competitive CapEx Analysis
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6 subheading">
                The &ldquo;Sticker vs. Beacon&rdquo; Play
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                A common misconception is that Big Tech is &ldquo;hardware-free.&rdquo; In reality, they require massive, invisible infrastructure costs.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Metric</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Big Tech</th>
                    <th className="p-4 text-xs font-bold text-[#13B7DA] uppercase tracking-widest bg-blue-50/50">Navous</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  <tr className="border-b border-slate-100">
                    <td className="p-4 text-slate-500">Primary Anchor</td>
                    <td className="p-4 text-slate-900">BLE Beacon / WiFi</td>
                    <td className="p-4 text-slate-900 bg-blue-50/20">QR Sticker</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 text-slate-500">Unit Cost</td>
                    <td className="p-4 text-slate-900">$20 - $50 per unit</td>
                    <td className="p-4 text-[#13B7DA] font-bold bg-blue-50/20">$0.01 per unit</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 text-slate-500">Deployment</td>
                    <td className="p-4 text-slate-900">Professional (Days)</td>
                    <td className="p-4 text-slate-900 bg-blue-50/20">Janitorial (Minutes)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 text-slate-500">Maintenance</td>
                    <td className="p-4 text-slate-900">Battery every 1-2 yrs</td>
                    <td className="p-4 text-[#13B7DA] font-bold bg-blue-50/20">Zero Maintenance</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-500">Hidden Cost</td>
                    <td className="p-4 text-slate-900">Constant re-mapping</td>
                    <td className="p-4 text-slate-900 bg-blue-50/20">Zero re-mapping</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-slate-500 text-sm italic font-medium">
              *By using QR codes in Phase 1, we offer properties a &ldquo;Zero-CapEx&rdquo; entry point. As we mature into Phase 3 (Visual Anchoring), we maintain a 100x cost advantage over legacy systems.
            </p>
          </div>

          {/* Big Tech Gap */}
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <span className="text-[#FFADAD] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                The Big Tech Gap
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6 subheading">
                Infrastructure for the 99%
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Google and Apple focus on the 0.01% of world-class venues. Navous builds infrastructure for the buildings where business actually happens.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1">
                  <Sparkle size={20} color="#13B7DA" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 subheading">The Availability Gap</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">We provide a scalable engine for the 99% of venues—office complexes, hospitals, local malls, universities—that are too small or complex for Big Tech to map.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1">
                  <Sparkle size={20} color="#FFADAD" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 subheading">The Fidelity Gap</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Big Tech uses grid-based paths that can feel &ldquo;clunky.&rdquo; Our Vector-Native Voronoi Medial Axis provides a &ldquo;premium&rdquo; blue-dot feel and prevents wall-clipping errors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1">
                  <Sparkle size={20} color="#CAFFBF" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 subheading">The Silo Gap</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Platform lockdown is over. Use Navous once, and it serves your Web Portal, Visitor App, Staff App, and even exports to standard IMDF/OSM formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
