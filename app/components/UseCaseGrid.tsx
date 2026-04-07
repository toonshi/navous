"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as pretext from "@chenglou/pretext";

// Register GSAP plugins
gsap.registerPlugin(useGSAP);

interface UseCase {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  benefits: string[];
  stats: { label: string; value: string }[];
}

const useCases: UseCase[] = [
  {
    id: 0,
    title: "Healthcare",
    category: "Hospitals",
    description: "Eliminate late appointments.",
    longDescription: "Navous transforms the stressful 'first 15 minutes' into a guided, dignified journey for every patient.",
    image: "/hospital.jpg",
    benefits: [
      "Wheelchair-accessible routing", 
      "Staff time saved by 15%", 
      "Direct-to-ward navigation",
      "Real-time closure rerouting"
    ],
    stats: [{ label: "Anxiety", value: "40%" }, { label: "On-Time", value: "98%" }],
  },
  {
    id: 1,
    title: "Retail",
    category: "Malls",
    description: "Guide shoppers and boost ROI.",
    longDescription: "Turn your mall into a searchable ecosystem. Capturing intent data to drive storefront traffic.",
    image: "/shopping.jpg",
    benefits: [
      "Store-front search", 
      "Traffic flow heatmaps", 
      "Proximity sale alerts",
      "Multi-floor directory"
    ],
    stats: [{ label: "Conversion", value: "+22%" }, { label: "Accuracy", value: "0.5m" }],
  },
  {
    id: 2,
    title: "Aviation",
    category: "Airports",
    description: "Ensure passengers never miss a flight.",
    longDescription: "Complex terminal environments become intuitive. Guiding passengers through every security gate.",
    image: "/airport.jpg",
    benefits: [
      "Gate-change alerts", 
      "Wait-time routing", 
      "Duty-free proximity",
      "Stress-free transfers"
    ],
    stats: [{ label: "Missed Flights", value: "-12%" }, { label: "Dwell ROI", value: "18%" }],
  },
  {
    id: 3,
    title: "Corporate",
    category: "Offices",
    description: "Find rooms and desks easily.",
    longDescription: "Maximize your real estate efficiency with deep workplace integrations and real-time syncing.",
    image: "/corporate.jpg",
    benefits: [
      "Meeting room booking sync", 
      "Visitor check-in flow", 
      "Hot-desk wayfinding",
      "Staff directory routing"
    ],
    stats: [{ label: "Start Speed", value: "+5m" }, { label: "Utilization", value: "92%" }],
  },
  {
    id: 4,
    title: "Residential",
    category: "Apartments",
    description: "Secure last-mile delivery.",
    longDescription: "Redefines home entry, from secure courier access to private resident guest management.",
    image: "/apartments.jpg",
    benefits: [
      "Last-mile courier routing", 
      "Restricted area fencing", 
      "Emergency broadcasting",
      "Guest access control"
    ],
    stats: [{ label: "Delivery", value: "100%" }, { label: "Security", value: "<30s" }],
  },
  {
    id: 5,
    title: "Academic",
    category: "Universities",
    description: "Campus orientation and events.",
    longDescription: "Orientation day becomes effortless with high-precision campus routing for students and staff.",
    image: "/universities.jpg",
    benefits: [
      "Orientation wayfinding", 
      "Schedule-to-room sync", 
      "Real-time event routing",
      "Campus-wide alerts"
    ],
    stats: [{ label: "Orientation", value: "-35%" }, { label: "Event Flow", value: "95%" }],
  },
  {
    id: 6,
    title: "Civic",
    category: "Government",
    description: "Inclusive wayfinding.",
    longDescription: "Public service belongs to everyone. Empowering citizens with diverse accessibility needs.",
    image: "/parliament.jpg",
    benefits: [
      "PWD-optimized routing", 
      "24+ Language support", 
      "Audio-guided journeys",
      "GDPR data sovereignty"
    ],
    stats: [{ label: "Equality", value: "100%" }, { label: "Languages", value: "24" }],
  },
];

const UseCaseGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (pretext && typeof pretext.prepare === 'function') {
      useCases.forEach(uc => {
        pretext.prepare(uc.longDescription, "14px Inter, sans-serif");
      });
    }
  }, []);

  useGSAP(() => {
    if (!gridRef.current) return;

    let colTracks = "1fr 1fr 1fr 1fr";
    let rowTracks = "1fr 1fr 1fr";

    if (hoveredId === 0) { colTracks = "2.5fr 1fr 0.4fr 0.4fr"; rowTracks = "2.2fr 0.6fr 0.4fr"; }
    else if (hoveredId === 1) { colTracks = "0.4fr 0.4fr 2.2fr 1.2fr"; rowTracks = "2.2fr 0.6fr 0.4fr"; }
    else if (hoveredId === 2) { colTracks = "0.4fr 0.4fr 0.4fr 3fr"; rowTracks = "1fr 1fr 1fr"; }
    else if (hoveredId === 3) { colTracks = "0.4fr 0.4fr 2.5fr 1fr"; rowTracks = "0.4fr 2.2fr 0.6fr"; }
    else if (hoveredId === 4) { colTracks = "2.5fr 0.6fr 0.6fr 0.6fr"; rowTracks = "0.4fr 0.6fr 2.2fr"; }
    else if (hoveredId === 5) { colTracks = "0.4fr 2.5fr 1.2fr 0.4fr"; rowTracks = "0.4fr 0.6fr 2.2fr"; }
    else if (hoveredId === 6) { colTracks = "0.4fr 0.4fr 0.4fr 3fr"; rowTracks = "0.4fr 0.6fr 2.2fr"; }

    gsap.to(gridRef.current, {
      gridTemplateColumns: colTracks,
      gridTemplateRows: rowTracks,
      duration: 0.8,
      ease: "power4.inOut",
      overwrite: "auto"
    });
  }, { dependencies: [hoveredId], scope: containerRef });

  return (
    <section ref={containerRef} id="solutions" className="py-32 px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Shrunk 7-Item Bento Grid (52% Width) */}
        <div 
          ref={gridRef}
          className="hidden md:grid gap-4 w-full lg:w-[52%] h-[650px] will-change-[grid-template-columns,grid-template-rows]"
          style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "1fr 1fr 1fr" }}
        >
          {useCases.map((useCase, idx) => {
            const initialPos = [
              "col-start-1 row-start-1 col-span-2 row-span-2",
              "col-start-3 row-start-1 col-span-1 row-span-1",
              "col-start-4 row-start-1 col-span-1 row-span-2",
              "col-start-3 row-start-2 col-span-1 row-span-1",
              "col-start-1 row-start-3 col-span-1 row-span-1",
              "col-start-2 row-start-3 col-span-2 row-span-1",
              "col-start-4 row-start-3 col-span-1 row-span-1"
            ];
            
            return (
              <div
                key={useCase.id}
                onMouseEnter={() => setHoveredId(useCase.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-[1.5rem] overflow-hidden group border border-white/5 bg-slate-900 transition-all duration-300 ${initialPos[idx]}`}
              >
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  priority
                  className={`object-cover transition-all duration-1000 ease-out ${hoveredId === useCase.id ? "opacity-90 scale-105" : "opacity-80"}`}
                />
                
                <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredId === useCase.id ? "bg-black/40" : "bg-black/10"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end pointer-events-none">
                  <div className="transition-all duration-500">
                    <span className="text-accent text-[9px] font-bold uppercase tracking-[0.25em] mb-2 block">
                      {useCase.category}
                    </span>
                    <h3 className={`font-sans font-medium tracking-tight mb-2 text-white transition-all duration-500 ${hoveredId === useCase.id ? "text-4xl" : "text-lg"}`}>
                      {useCase.title}
                    </h3>
                    
                    <div className={`transition-all duration-500 ${hoveredId === useCase.id ? "opacity-100 mt-4" : "opacity-0 h-0"}`}>
                      <p className="text-white/80 text-[14px] max-w-xl mb-6 leading-relaxed">
                        {useCase.longDescription}
                      </p>

                      <ul className="flex flex-col gap-2 mb-8">
                        {useCase.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3 text-[12px] font-medium text-white/90">
                            <span className="text-accent font-black">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-2 gap-8">
                        {useCase.stats.map(stat => (
                          <div key={stat.label}>
                            <p className="text-3xl font-black text-accent mb-0.5 tracking-tight">{stat.value}</p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/40">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: High-Impact Copy */}
        <div className="flex-1 text-left lg:pl-12">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.3em] mb-8 block">
            Industry Reach
          </span>
          <h2 className="font-sans text-[2.8rem] md:text-[4rem] font-medium tracking-[-0.03em] leading-[1.05] mb-10 max-w-2xl">
            Turn Every Visitor
            <br />
            into a Navigated Guest.
          </h2>
          <div className="space-y-8 text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            <p>
              One spatial intelligence platform for all your facility needs.
            </p>
            <p>
              From real-time wayfinding to deep movement analytics, drive operational efficiency and lasting visitor satisfaction.
            </p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-10">
            <div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Coverage</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">0.5m</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Precision</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">&lt;21d</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Deployment</p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-10">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden p-8 flex flex-col justify-end border border-white/10">
              <Image src={useCase.image} alt={useCase.title} fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <div className="relative z-20">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{useCase.category}</span>
                <h3 className="text-2xl font-medium mb-4">{useCase.title}</h3>
                <ul className="flex flex-col gap-2">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-xs font-medium text-white/90">
                      <span className="text-accent font-black">✓</span>
                      {benefit}
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
};

export default UseCaseGrid;
