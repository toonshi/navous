"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-8 bg-primary/40 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Navous Logo"
          width={160}
          height={48}
          className="h-10 w-auto brightness-0 invert"
        />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-bold text-[10px] uppercase tracking-[0.25em] text-white/40">
        <Link href="/" className="transition hover:text-white">Features</Link>
        <a href="/how-it-works" className="transition hover:text-white">How it Works</a>
        <a href="/technology" className="transition hover:text-white">Implementation</a>
        <a href="/#faq" className="transition hover:text-white">FAQ</a>
      </div>

      <div className="hidden md:block">
        <a href="mailto:hello@navous.com" className="px-5 py-2.5 bg-accent text-white rounded font-bold text-[10px] tracking-widest hover:bg-accent/80 transition-all shadow-lg shadow-accent/20">
          BOOK DEMO
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
