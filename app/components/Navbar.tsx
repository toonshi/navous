"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary px-8 py-6 flex justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <img src="/Left logo.svg" alt="Navous Logo" className="h-10" />
        <span className="font-space-grotesque text-2xl font-bold tracking-tight">Navous</span>
        <img src="/Building.svg" alt="Building Logo" className="h-10" />
      </div>
      <div className="hidden md:flex gap-12 font-space-grotesque font-medium">
        <a href="#" className="hover:opacity-80 transition">Home</a>
        <a href="#" className="hover:opacity-80 transition">Features</a>
        <a href="#" className="hover:opacity-80 transition">About Us</a>
      </div>
      <button className="bg-white text-primary px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition cursor-pointer">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
