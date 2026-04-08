"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="pl-8 pr-0 flex justify-between items-center h-20 bg-white/70 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center h-full">
        <img src="/Left logo.svg" alt="Navous Logo" className="h-full w-auto" />
      </div>
      <div className="hidden md:flex gap-10 font-space-grotesque font-medium">
        <a href="#" className="text-[18px] tracking-wider text-slate-800 hover:text-primary transition">Home</a>
        <a href="#features" className="text-[18px] tracking-wider text-slate-800 hover:text-primary transition">Features</a>
        <a href="#how-it-works" className="text-[18px] tracking-wider text-slate-800 hover:text-primary transition">How It Works</a>
      </div>
      <div className="flex items-center h-full">
        <img src="/Building.svg" alt="" className="h-full w-auto opacity-10" aria-hidden="true" />
      </div>
    </nav>
  );
};

export default Navbar;
