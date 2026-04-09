"use client";

import React from "react";

export default function DashboardSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              One dashboard for your entire footprint
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed subheading">
              Monitor your facility in real-time. Our central command interface gives you the visibility needed to manage large-scale movement across multiple floors and locations.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 subheading">Real-Time Movement</h3>
                  <p className="text-slate-400">See where your visitors are and where they're getting stuck. Make data-driven decisions on facility layouts and security deployment.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 subheading">Infrastructure Free</h3>
                  <p className="text-slate-400">Manage everything without installing a single beacon. We use software to define your space, making updates as simple as uploading a new floor plan.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-4 transform lg:rotate-2">
              <img 
                src="/screenshots/features.png" 
                alt="Navous Dashboard" 
                className="rounded-xl shadow-inner w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-2xl hidden md:block">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Efficiency Gain</div>
                <div className="text-3xl font-bold text-indigo-400">+14%</div>
                <div className="text-xs text-slate-400">Avg. Time to Destination</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
