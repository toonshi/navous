"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary pl-8 pr-0 flex justify-between items-center text-white h-24">
      <div className="h-full flex items-center">
        <img src="/Left logo.svg" alt="Navous Logo" className="h-full w-auto" />
      </div>
      <div className="hidden md:flex gap-12 font-space-grotesque font-medium">
        <a href="#" className="hover:opacity-80 transition">Home</a>
        <a href="#" className="hover:opacity-80 transition">Features</a>
        <a href="#" className="hover:opacity-80 transition">About Us</a>
      </div>
      <div className="flex items-center gap-6 h-full">
        <button className="bg-white text-primary px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition cursor-pointer">
          Contact Us
        </button>
        <img src="/Building.svg" alt="Building Logo" className="h-full w-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
