"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary pl-8 pr-0 flex justify-between items-center text-white h-20">
      <div className="flex items-center h-full">
        <Link href="/">
          <img src="/Left logo.svg" alt="Navous Logo" className="h-full w-auto" />
        </Link>
      </div>
      <div className="hidden md:flex gap-10 font-space-grotesque font-medium">
        <Link href="/" className="text-[14px] tracking-wider hover:opacity-80 transition">Home</Link>
        <Link href="/features" className="text-[14px] tracking-wider hover:opacity-80 transition">Features</Link>
        <Link href="/how-it-works" className="text-[14px] tracking-wider hover:opacity-80 transition">How It Works</Link>
      </div>
      <div className="flex items-center h-full">
        <img src="/Building.svg" alt="" className="h-full w-auto" aria-hidden="true" />
      </div>
    </nav>
  );
};

export default Navbar;
