"use client";

import React from "react";
import { Sparkle } from "./Doodles";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-8 bg-white/40 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#13B7DA] rounded-lg flex items-center justify-center">
          <Sparkle size={16} color="white" />
        </div>
        <span className="font-bold text-xl tracking-tighter text-slate-900 font-laila">Navous</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em] subheading">
        <a href="/" className="text-slate-900 transition hover:text-[#13B7DA]">Overview</a>
        <a href="/features" className="text-slate-900 transition hover:text-[#13B7DA]">Value</a>
        <a href="/technology" className="text-slate-900 transition hover:text-[#13B7DA]">Platform</a>
        <a href="/how-it-works" className="text-slate-900 transition hover:text-[#13B7DA]">Deployment</a>
      </div>

      <div className="hidden md:block">
        <a href="mailto:hello@navous.com" className="px-5 py-2 bg-slate-900 text-white rounded-md font-bold text-xs tracking-widest hover:bg-slate-800 transition-all">
          GET ACCESS
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
