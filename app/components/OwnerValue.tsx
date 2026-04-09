"use client";

import React from "react";

export default function OwnerValue() {
  return (
    <section className="py-24 px-8 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight text-balance">
              Strategic square footage management
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium subheading">
              Stop guessing how people move through your space. Navous gives mall and hospital owners the data they need to optimize floor plans and increase tenant value.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 text-balance subheading">Retail & Tenant Value</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Prove your foot traffic. Deliver precise movement data to your tenants and optimize lease rates based on actual journey patterns.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 text-balance subheading">Healthcare Operations</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Ensure patients and visitors reach their appointments on time. Reduce staff interruptions and improve the overall care experience.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 text-balance subheading">Zero Infrastructure</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  No beacons to install, no apps to download. We use your existing floor plans to create a digital layer that works in any mobile browser.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 text-balance subheading">Safety & Compliance</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Guide visitors through the safest egress routes during emergencies. Maintain full control over movement protocols from a single dashboard.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Building Intelligence</p>
                <p className="text-slate-900 font-bold text-2xl">Weekly Movement Report</p>
              </div>
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                Live Data
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                <span className="text-slate-600 font-medium">Average Dwell Time (Main Atrium)</span>
                <span className="text-slate-900 font-bold">14.2 min</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                <span className="text-slate-600 font-medium">Busiest Corridor (Level 2)</span>
                <span className="text-slate-900 font-bold">4.2k journeys/day</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                <span className="text-slate-600 font-medium">Wayfinding Success Rate</span>
                <span className="text-slate-900 font-bold text-indigo-600">98.4%</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
               </div>
               <span className="text-slate-500 text-sm font-medium">Export raw movement data for leasing reports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
