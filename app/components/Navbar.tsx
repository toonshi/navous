"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-16">
        <Image src="/Left logo.svg" alt="Navous Logo" width={120} height={36} className="h-9 w-auto" />
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-[14px] font-medium text-slate-500 tracking-wide hover:text-slate-900 transition">
            Home
          </a>
          <a href="#features" className="text-[14px] font-medium text-slate-500 tracking-wide hover:text-slate-900 transition">
            Features
          </a>
          <a href="#use-cases" className="text-[14px] font-medium text-slate-500 tracking-wide hover:text-slate-900 transition">
            Use Cases
          </a>
        </div>
        <button className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-800 transition cursor-pointer">
          Book a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
