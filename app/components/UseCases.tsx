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
            Your Hospital, Optimized
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Your nurses are clinicians, not tour guides. Return focus to patient care by removing the 22 minutes of wayfinding interruptions every staff member faces per shift.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex-1 space-y-6">
            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
               <h3 className="font-space-grotesque text-3xl font-bold mb-4">Clinical Flow</h3>
               <p className="text-slate-400 text-lg mb-6 leading-relaxed font-medium">
                 Direct your patients to Emergency, Diagnostics, and Wards without manual intervention. Integrated lift-priority routes ensure gurneys and accessible needs are prioritized.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[#13B7DA] font-bold text-xl">22 MIN</div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Saved Per Shift</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[#13B7DA] font-bold text-xl">31%</div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Flow Increase</div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
               <h3 className="font-space-grotesque text-2xl font-bold text-slate-900 mb-4">Staff Optimization</h3>
               <p className="text-slate-600 text-lg leading-relaxed font-medium">
                 Stop hiring more security and front-desk staff just to manage navigation. Navous automates the &quot;How do I get to...&quot; question, allowing your team to focus on their actual roles.
               </p>
            </div>
          </div>

          <div className="flex-1 bg-slate-50 rounded-3xl p-12 flex items-center justify-center border border-slate-100 min-h-[400px]">
            <div className="relative w-full max-w-sm aspect-[9/16] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-slate-900 p-6 flex flex-col items-center gap-8">
               <div className="w-16 h-1 bg-slate-800 rounded-full mb-4" />
               <Image
                src="/illustrations/navigation.svg"
                alt="Indoor navigation"
                width={300}
                height={220}
                className="w-full opacity-80"
              />
              <div className="text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Live Interface</p>
                <p className="text-slate-900 font-bold text-xl">Level 4: Radiology</p>
                <div className="mt-4 px-4 py-2 bg-[#13B7DA] text-white text-sm font-bold rounded-lg shadow-lg">
                  Turn Left at Ward B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
