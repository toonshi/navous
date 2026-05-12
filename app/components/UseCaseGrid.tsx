"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
      "Direct-to-department routing",
      "Direct-to-ward navigation",
      "Real-time closure rerouting"
    ],
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
  },
  {
    id: 3,
    title: "Corporate",
    category: "Offices & Conferences",
    description: "Find rooms and event spaces.",
    longDescription: "Maximize your real estate efficiency with deep workplace integrations and conference center wayfinding.",
    image: "/corporate.jpg",
    benefits: [
      "Meeting room booking sync", 
      "Conference hall navigation", 
      "Visitor check-in flow", 
      "Hot-desk wayfinding"
    ],
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
  },
  {
    id: 6,
    title: "Civic",
    category: "Government",
    description: "Inclusive wayfinding.",
    longDescription: "Public service belongs to everyone. Empowering citizens with diverse accessibility needs and enterprise security.",
    image: "/parliament.jpg",
    benefits: [
      "SOC 2 TYPE II Compliant", 
      "GDPR & HIPAA Ready", 
      "PWD-optimized routing", 
      "Audio-guided journeys"
    ],
  },
  {
    id: 7,
    title: "Social",
    category: "Public Facilities",
    description: "Connect with your community.",
    longDescription: "Transform community centers and social hubs into inclusive environments. Helping visitors find events, facilities, and each other with ease.",
    image: "/stadium.jpg",
    benefits: [
      "Event-based routing", 
      "Inclusive PWD access", 
      "Facility status alerts",
      "Community hub navigation"
    ],
  },
];

const UseCaseGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollerRef = useRef<HTMLDivElement>(null);

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
    else if (hoveredId === 7) { colTracks = "0.4fr 1.2fr 2.2fr 0.4fr"; rowTracks = "0.4fr 0.6fr 2.2fr"; }

    gsap.to(gridRef.current, {
      gridTemplateColumns: colTracks,
      gridTemplateRows: rowTracks,
      duration: 0.8,
      ease: "power4.inOut",
      overwrite: "auto"
    });
  }, { dependencies: [hoveredId], scope: containerRef });

  const handleMobileScrollerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!mobileScrollerRef.current) return;

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      mobileScrollerRef.current.scrollBy({
        left: event.key === "ArrowRight" ? 280 : -280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={containerRef} id="solutions" className="overflow-hidden border-t border-white/5 bg-primary px-5 py-24 text-white sm:px-8 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        
        {/* Left Side: Dynamic Bento Grid */}
        <div 
          ref={gridRef}
          className="hidden md:grid gap-4 w-full lg:w-[55%] h-[650px] will-change-[grid-template-columns,grid-template-rows]"
          style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "1fr 1fr 1fr" }}
        >
          {useCases.map((useCase, idx) => {
            const initialPos = [
              "col-start-1 row-start-1 col-span-2 row-span-2",
              "col-start-3 row-start-1 col-span-1 row-span-1",
              "col-start-4 row-start-1 col-span-1 row-span-2",
              "col-start-3 row-start-2 col-span-1 row-span-1",
              "col-start-1 row-start-3 col-span-1 row-span-1",
              "col-start-2 row-start-3 col-span-1 row-span-1",
              "col-start-4 row-start-3 col-span-1 row-span-1",
              "col-start-3 row-start-3 col-span-1 row-span-1"
            ];
            
            return (
              <div
                key={useCase.id}
                onMouseEnter={() => setHoveredId(useCase.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`usecase-grid-card relative rounded-3xl overflow-hidden group border border-white/5 bg-secondary transition-all duration-300 shadow-2xl ${initialPos[idx]}`}
              >
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`usecase-grid-image object-cover transition-all duration-1000 ease-out ${hoveredId === useCase.id ? "scale-105" : ""}`}
                />
                
                <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredId === useCase.id ? "bg-accent/5" : "bg-transparent"}`} />
                <div className="usecase-grid-fog absolute inset-0 z-10" />

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end pointer-events-none">
                  <div className="transition-all duration-500">
                    <span className="text-white text-[9px] font-bold uppercase tracking-[0.25em] mb-2 block">
                      {useCase.category}
                    </span>
                    <h3 className={`font-display font-bold tracking-tight mb-2 text-white transition-all duration-500 ${hoveredId === useCase.id ? "text-4xl" : "text-lg"}`}>
                      {useCase.title}
                    </h3>
                    
                    <div className={`transition-all duration-500 ${hoveredId === useCase.id ? "opacity-100 mt-4" : "opacity-0 h-0 overflow-hidden"}`}>
                      <p className="text-white text-[14px] max-w-xl mb-6 leading-relaxed font-medium">
                        {useCase.longDescription}
                      </p>

                      <ul className="flex flex-col gap-2 mb-8">
                        {useCase.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3 text-[12px] font-bold text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: High-Impact Copy */}
        <div className="flex-1 text-left lg:pl-12">
          <span className="mb-6 block text-sm font-bold uppercase tracking-[0.3em] text-accent md:mb-8">
            Industry Reach
          </span>
          <h2 className="font-display mb-8 max-w-2xl text-[2.4rem] font-bold leading-[1.05] tracking-tight text-white sm:text-[2.8rem] md:mb-10 md:text-[4rem]">
            A map for <br />every space.
          </h2>
          <div className="max-w-xl space-y-6 text-base font-medium leading-relaxed text-white/50 sm:text-lg md:space-y-8 md:text-xl">
            <p>
              From hospitals to airports, Navous provides the interactive maps your visitors need to navigate complex buildings with confidence.
            </p>
            <p>
              Deploy a seamless, web-based experience that helps everyone find their way instantly, on any device.
            </p>
          </div>
          

        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div
            ref={mobileScrollerRef}
            tabIndex={0}
            aria-label="Browse industry use cases"
            onKeyDown={handleMobileScrollerKeyDown}
            className="flex gap-4 overflow-x-auto pb-2 outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            {useCases.map((useCase) => (
              <div key={useCase.id} className="usecase-grid-card relative flex aspect-[4/5] min-w-[85%] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/5 bg-secondary p-6 sm:min-w-[70%] sm:p-8">
                <Image src={useCase.image} alt={useCase.title} fill className="object-cover opacity-40" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/40 to-transparent" />
                <div className="relative z-20">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-white">{useCase.category}</span>
                  <h3 className="font-display mb-4 text-2xl font-bold text-white">{useCase.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white">
                    {useCase.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-xs font-bold text-white">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;
