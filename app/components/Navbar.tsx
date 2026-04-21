"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-8 bg-white/40 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/Left logo.svg"
          alt="Navous Logo"
          width={100}
          height={30}
          className="h-7 w-auto brightness-0"
        />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em] subheading">
        <Link href="/" className="text-slate-900 transition hover:text-[#13B7DA]">Overview</Link>
        <a href="/features" className="text-slate-900 transition hover:text-[#13B7DA]">Results</a>
        <a href="/how-it-works" className="text-slate-900 transition hover:text-[#13B7DA]">How it Works</a>
        <a href="/roadmap" className="text-slate-900 transition hover:text-[#13B7DA]">Rollout</a>
      </div>

      <div className="hidden md:block">
        <a href="mailto:hello@navous.com" className="px-5 py-2 bg-slate-900 text-white rounded-md font-bold text-xs tracking-widest hover:bg-slate-800 transition-all">
          BOOK DEMO
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
