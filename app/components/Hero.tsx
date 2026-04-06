"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-space-grotesque text-[5rem] md:text-[6rem] font-bold tracking-tighter text-black leading-[1.0] mb-8">
          Stop losing people.
        </h1>
        <p className="text-[#475569] text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Navous turns complex buildings into searchable spaces. No app downloads. No hardware. No confusion.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition cursor-pointer">
            Book a Demo
          </button>
          <button className="text-slate-500 px-8 py-4 rounded-full font-bold text-lg hover:text-slate-900 transition cursor-pointer">
            See how it works &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
