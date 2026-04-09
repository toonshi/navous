"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-8 bg-[#13B7DA]/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/30 shadow-[0_8px_32px_0_rgba(19,183,218,0.1)]">
      <div className="flex items-center">
        <img src="/Left logo.svg" alt="Navous Logo" className="h-16 w-auto" />
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-space-grotesque font-semibold text-sm uppercase tracking-widest">
        <a href="/" className="text-slate-900 hover:text-slate-500 transition">Overview</a>
        <a href="/features" className="text-slate-900 hover:text-slate-500 transition">Platform</a>
        <a href="/how-it-works" className="text-slate-900 hover:text-slate-500 transition">Solutions</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="mailto:hello@navous.com" className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-slate-800 transition-all">
          Book a Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
