"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#13B7DA] pl-8 pr-0 flex justify-between items-center text-white h-20">
      <div className="flex items-center h-full">
        <img src="/Left logo.svg" alt="Navous Logo" className="h-full w-auto" />
      </div>
      <div className="hidden md:flex gap-10 font-space-grotesque font-medium">
        <a href="#" className="text-[18px] tracking-wider hover:opacity-80 transition">Home</a>
        <a href="#features" className="text-[18px] tracking-wider hover:opacity-80 transition">Features</a>
        <a href="#how-it-works" className="text-[18px] tracking-wider hover:opacity-80 transition">How It Works</a>
      </div>
      <div className="flex items-center h-full">
        <img src="/Building.svg" alt="" className="h-full w-auto" aria-hidden="true" />
      </div>
    </nav>
  );
};

export default Navbar;
