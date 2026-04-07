"use client";

import React, { useState } from "react";
import Image from "next/image";

const sectors = [
  {
    name: "Healthcare",
    description:
      "Appointment-heavy facilities where every minute matters. Navous guides patients from entrance to their exact ward or room — reducing late arrivals and freeing nurses from giving directions.",
  },
  {
    name: "Retail",
    description:
      "Large shopping centres where visitors abandon their visit when they can't find a store. Navous turns wanderers into purposeful shoppers with indoor search and turn-by-turn guidance.",
  },
  {
    name: "Airports",
    description:
      "Multi-terminal transport hubs under constant time pressure. Navous helps travellers find gates, services, and connections in seconds — in their own language.",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];

  return (
    <section id="use-cases" className="py-32 px-8" style={{ background: "linear-gradient(180deg, #CAFFBF 0%, #FDFFB6 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesque text-4xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
            Built for high-pressure facilities.
          </h2>
          <p className="text-secondary/60 text-lg leading-relaxed">
            Wherever people need to move confidently through complex spaces.
          </p>
        </div>

        {/* Sector tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {sectors.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-md text-sm font-bold transition cursor-pointer ${
                active === i
                  ? "bg-primary text-white"
                  : "text-secondary/60 hover:text-secondary border border-slate-200 hover:border-slate-300"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-10"
          style={{ background: "#FFADAD" }}>
          <div className="flex justify-center items-center h-full shrink-0 mx-auto md:mx-0">
            <Image
              src="/illustrations/navigation.svg"
              alt="Indoor navigation"
              width={280}
              height={210}
              className="w-full max-w-[280px]"
            />
          </div>
          <p className="text-secondary/80 text-lg leading-relaxed">{sector.description}</p>
        </div>
      </div>
    </section>
  );
}
