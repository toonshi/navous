"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center px-12 bg-black">
      {/* High-End Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/anna-dziubinska-mVhd5QVlDWw-unsplash.jpg" 
          alt="Architectural space" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content - Now Left Aligned Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
        <h1 className="font-sans text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium tracking-[-0.02em] text-white leading-[1.1] mb-8 max-w-4xl">
          Stop losing people in the hallways.
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-12 font-light">
          Navous transforms your space into a searchable, intelligent environment. Make sure your visitors find exactly what they need, the moment they enter your doors.
        </p>

        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-slate-100 transition-all hover:scale-[1.02] cursor-pointer shadow-2xl">
          Get Started
        </button>
      </div>

      {/* Floating Pill Bar (Bottom) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <nav className="flex items-center gap-10 px-10 py-5 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 whitespace-nowrap">
          <a href="#" className="hover:text-white transition">Templates</a>
          <div className="w-1 h-1 rounded-full bg-accent/40" />
          <a href="#" className="hover:text-white transition">Experiences</a>
          <div className="w-1 h-1 rounded-full bg-accent/40" />
          <a href="#" className="hover:text-white transition">Commerce</a>
          <div className="w-1 h-1 rounded-full bg-accent/40" />
          <a href="#" className="hover:text-white transition">Domains</a>
        </nav>
      </div>
    </section>
  );
}
