"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-8 bg-[#13B7DA]/40 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="flex items-center">
        <img src="/Left logo.svg" alt="Navous Logo" className="h-16 w-auto" />
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-space-grotesque font-semibold text-sm uppercase tracking-widest">
        <a href="/" className="text-slate-900 transition hover:text-indigo-600">Overview</a>
        <a href="/features" className="text-slate-900 transition hover:text-indigo-600">Platform</a>
        <a href="/how-it-works" className="text-slate-900 transition hover:text-indigo-600">Solutions</a>
        <a href="/roadmap" className="text-slate-900 transition hover:text-indigo-600">Roadmap</a>
      </div>

    </nav>
  );
};

export default Navbar;
