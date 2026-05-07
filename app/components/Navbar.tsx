"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-8 bg-white/40 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Navous Logo"
          width={160}
          height={48}
          className="h-10 w-auto brightness-0"
        />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em] text-slate-500">
        <Link href="/" className="text-slate-900 transition hover:text-teal">Features</Link>
        <a href="/how-it-works" className="text-slate-900 transition hover:text-teal">How it Works</a>
        <a href="/technology" className="text-slate-900 transition hover:text-teal">Implementation</a>
        <a href="/#faq" className="text-slate-900 transition hover:text-teal">FAQ</a>
      </div>

      <div className="hidden md:block">
        <a href="mailto:hello@navous.com" className="px-5 py-2.5 bg-primary text-white rounded font-bold text-xs tracking-widest hover:bg-secondary transition-all">
          BOOK DEMO
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
