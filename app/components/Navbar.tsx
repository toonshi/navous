"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary pl-8 pr-0 flex justify-between items-center text-white h-20">
      <div className="flex items-center h-full">
        <img src="/Left logo.svg" alt="Navous Logo" className="h-full w-auto" />
      </div>
      <div className="hidden md:flex gap-10 font-space-grotesque font-medium">
        <a href="#" className="text-[14px] tracking-wider hover:opacity-80 transition">Home</a>
        <a href="#features" className="text-[14px] tracking-wider hover:opacity-80 transition">Features</a>
        <a href="#how-it-works" className="text-[14px] tracking-wider hover:opacity-80 transition">How It Works</a>
      </div>
      <div className="flex items-center gap-6 h-full">
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-slate-700 transition cursor-pointer">
          Book a Demo
        </button>
        <img src="/Building.svg" alt="" className="h-full w-auto" aria-hidden="true" />
      </div>
    </nav>
  );
};

export default Navbar;
