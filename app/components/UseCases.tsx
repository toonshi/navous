"use client";

import React, { useState } from "react";
import Image from "next/image";

const sectors = [
  {
    name: "Hospitals",
    description:
      "Reduce patient stress and late appointments. Navous guides patients directly to their ward or consulting room, freeing medical staff from acting as guides and improving clinic flow.",
  },
  {
    name: "Shopping Malls",
    description:
      "Turn footfall into revenue. Help shoppers find specific stores, services, or their car in seconds. Integrated search turns a frustrating search into a purposeful journey.",
  },
  {
    name: "Universities",
    description:
      "Get students and visitors to the right lecture hall on time. Navigate complex campuses and multi-story buildings with ease, especially during high-traffic events like open days.",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];

  return (
    <section id="use-cases" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-space-grotesque text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Built for the most complex spaces.
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Navous provides high-precision navigation where GPS fails, tailored to the specific needs of your facility.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 grid grid-cols-1 gap-4">
            {sectors.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-8 rounded-2xl transition-all border ${
                  active === i
                    ? "bg-slate-900 border-slate-900 shadow-xl scale-[1.02]"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3 className={`font-space-grotesque text-2xl font-bold mb-3 ${
                  active === i ? "text-white" : "text-slate-900"
                }`}>
                  {s.name}
                </h3>
                <p className={`text-lg leading-relaxed font-medium ${
                  active === i ? "text-slate-300" : "text-slate-600"
                }`}>
                  {s.description}
                </p>
              </button>
            ))}
          </div>

          <div className="flex-1 bg-slate-50 rounded-3xl p-12 flex items-center justify-center border border-slate-100 min-h-[400px]">
            <div className="relative w-full max-w-sm aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 p-8 flex flex-col justify-center items-center gap-8">
               <Image
                src="/illustrations/navigation.svg"
                alt="Indoor navigation"
                width={300}
                height={220}
                className="w-full"
              />
              <div className="text-center">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Live Preview</p>
                <p className="text-slate-900 font-bold">Interactive {sector.name} Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
