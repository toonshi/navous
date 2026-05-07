"use client";

import React from "react";
import Image from "next/image";

const industries = [
  {
    name: "Hospitals",
    description: "Reduce missed appointments and patient stress with clear, turn-by-turn directions to clinics, labs, and pharmacies. Improve staff efficiency by guiding them through the fastest internal routes.",
    features: ["Patient-first navigation", "Staff route optimization", "Accessibility routing"],
    image: "/hospital.jpg",
    accent: "#3B82F6"
  },
  {
    name: "Universities",
    description: "Help students and visitors find lecture halls, libraries, and campus amenities on day one. Modernize campus tours and ensure every building is accessible to everyone.",
    features: ["Campus-wide wayfinding", "Building-to-room routing", "Event-based directions"],
    image: "/universities.jpg",
    accent: "#60A5FA"
  },
  {
    name: "Airports",
    description: "Streamline the traveler journey from security to the gate. Direct passengers to retail, dining, and lounges, increasing secondary revenue while improving on-time departures.",
    features: ["Gate-to-gate routing", "Retail & Lounge discovery", "Real-time flow analytics"],
    image: "/airport.jpg",
    accent: "#93C5FD"
  }
];

export default function IndustrySolutions() {
  return (
    <section className="py-24 px-8 bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Tailored Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Built for Complex Venues
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Whether it&apos;s a high-stress medical environment or a sprawling university campus, Navous is engineered for the unique challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="flex flex-col bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-300">
              <div className="relative h-48 bg-white/10">
                {/* Placeholder for images */}
                <div className="absolute inset-0 flex items-center justify-center bg-accent/10">
                   <span className="text-white/20 font-bold uppercase tracking-widest">{industry.name} Image</span>
                </div>
                <Image 
                  src={industry.image} 
                  alt={industry.name} 
                  fill 
                  className="object-cover opacity-50 mix-blend-overlay"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 font-display">{industry.name}</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed mb-8 flex-grow">
                  {industry.description}
                </p>
                <ul className="space-y-3">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-bold text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
