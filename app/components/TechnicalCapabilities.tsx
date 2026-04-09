"use client";

import React from "react";

const capabilities = [
  {
    title: "Vector-Native Architecture",
    description: "Built on PostGIS, our engine maintains geometric integrity across all multi-story architectural layers, providing sub-meter precision for complex indoor environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.487V6.513a2 2 0 011.553-1.943L9 2l5.447 2.57a2 2 0 011.553 1.943v8.974a2 2 0 01-1.553 1.943L9 20z" />
      </svg>
    )
  },
  {
    title: "Rust + WASM Positioning",
    description: "Our positioning engine is compiled to WebAssembly for sub-millisecond pgRouting integration and biomechanical sensor fusion on any modern browser.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Multi-Modal Engagement",
    description: "Support for Map-Centric (Active), AR-Immersive (View), and Audio-Stealth modes ensures universal accessibility and high user retention.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

export default function TechnicalCapabilities() {
  return (
    <section className="py-32 px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Institutional-grade technology
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl font-medium leading-relaxed">
            A mathematically robust spatial core designed for the specific constraints of large-scale, high-traffic indoor environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {capabilities.map((cap) => (
            <div key={cap.title} className="group">
              <h3 className="font-space-grotesque text-2xl font-bold text-slate-900 mb-4 pt-8 border-t border-slate-200">
                {cap.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
