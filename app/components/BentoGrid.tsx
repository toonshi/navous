"use client";

import React from "react";

const BentoGrid = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        
        {/* Main Hook Card */}
        <div className="md:col-span-2 row-span-1 bg-slate-50 rounded-3xl p-10 flex flex-col justify-center border border-slate-100">
          <h2 className="font-space-grotesque text-4xl font-bold text-slate-900 mb-4">
            Stop losing people in the hallways.
          </h2>
          <p className="text-slate-600 text-lg max-w-lg">
            Navous transforms your space into a searchable, intelligent environment. Make sure visitors find exactly what they need.
          </p>
        </div>

        {/* Building Card */}
        <div className="bg-primary/10 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
          <img src="/Building.svg" alt="Building Illustration" className="w-full scale-125 translate-y-8" />
        </div>

        {/* Accessibility Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
          <img src="/Accesibility illustration.svg" alt="PWD Access" className="w-24 mb-4" />
          <div>
            <h3 className="font-bold text-xl mb-2">Barrier-Free</h3>
            <p className="text-sm text-slate-500 font-sans">Automated routing that prioritizes elevators and accessible paths. No dead-ends.</p>
          </div>
        </div>

        {/* Data Card */}
        <div className="md:col-span-2 bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-center">
          <h3 className="text-3xl font-space-grotesque font-bold mb-4">Infrastructure with a pulse.</h3>
          <p className="text-slate-400 font-sans">
            Your building is generating data you aren't seeing. We provide the precision needed to optimize staff and flow.
          </p>
          <div className="mt-8 flex gap-4">
             <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold cursor-pointer hover:bg-opacity-90 transition">Watch Demo</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
