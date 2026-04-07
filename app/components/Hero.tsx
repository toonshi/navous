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
          className="w-full h-full object-cover opacity-50"
        />
        {/* Fine Grain / Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
        <div className="flex items-center gap-4 mb-10 group cursor-default">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </div>
          <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-accent transition-colors duration-500">
            Spatial Intelligence Live
          </span>
        </div>

        <h1 className="font-sans text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-medium tracking-[-0.03em] text-white leading-[1] mb-10 max-w-5xl">
          Stop losing people 
          <br />
          in the hallways.
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mb-14 font-light">
          Navous transforms your space into a searchable, intelligent environment. Make sure your visitors find exactly what they need, the moment they enter your doors.
        </p>

        <div className="flex items-center gap-8">
          <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-[1.05] cursor-pointer shadow-2xl">
            Get Started
          </button>
          <div className="hidden md:flex flex-col">
            <span className="text-white font-bold text-lg">0.5m</span>
            <span className="text-white/30 text-[9px] font-black uppercase tracking-widest">Precision</span>
          </div>
          <div className="hidden md:w-px md:h-10 md:bg-white/10"></div>
          <div className="hidden md:flex flex-col">
            <span className="text-white font-bold text-lg">100%</span>
            <span className="text-white/30 text-[9px] font-black uppercase tracking-widest">Coverage</span>
          </div>
        </div>
      </div>

      {/* Floating Pill Bar (Bottom) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <nav className="flex items-center gap-10 px-10 py-5 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap">
          <a href="#solutions" className="hover:text-white transition">Industry Reach</a>
          <div className="w-1 h-1 rounded-full bg-accent/30" />
          <a href="#features" className="hover:text-white transition">Platform</a>
          <div className="w-1 h-1 rounded-full bg-accent/30" />
          <a href="#how-it-works" className="hover:text-white transition">Rollout</a>
          <div className="w-1 h-1 rounded-full bg-accent/30" />
          <a href="#" className="hover:text-white transition">Company</a>
        </nav>
      </div>
    </section>
  );
}
