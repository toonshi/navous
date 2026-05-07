"use client";

import React from "react";

export default function DashboardSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-display">
              Everything you need to <br /><span className="text-indigo-400">manage your venue</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed subheading">
              Guide your visitors and get the information you need to run a better facility. See exactly how people use your space in real-time.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 subheading">See where people go</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Know which areas are busiest and where visitors might need help. Use this information to improve your layout and place staff where they are needed most.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 subheading">Message visitors nearby</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Send helpful updates, emergency alerts, or even special offers to visitors based on where they are standing in your building.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 subheading">Every room, every floor</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Manage your entire building across multiple levels. Change a room name or mark an elevator as &ldquo;out of service&rdquo; instantly from your dashboard.</p>
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
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Results</div>
                <div className="text-3xl font-bold text-indigo-400">+22%</div>
                <div className="text-xs text-slate-400">Visitor satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

