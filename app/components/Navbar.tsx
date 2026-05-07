"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[4.5rem] px-6 md:px-8 lg:px-10 bg-primary/70 backdrop-blur-xl border-b border-white/10 shadow-xl">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Navous Logo"
          width={160}
          height={48}
          className="h-10 w-auto brightness-0 invert"
        />
      </Link>
      
      <div className="hidden md:flex items-center gap-7 font-semibold text-xs uppercase tracking-[0.14em] text-white/65">
        <Link href="/features" className="transition hover:text-white">Features</Link>
        <Link href="/how-it-works" className="transition hover:text-white">How it Works</Link>
        <Link href="/technology" className="transition hover:text-white">Implementation</Link>
        <Link href="/how-it-works#faq" className="transition hover:text-white">FAQ</Link>
      </div>

      <div className="hidden md:block">
        <Link href="/#contact" className="px-5 py-2.5 bg-accent text-white rounded-md font-semibold text-xs tracking-[0.14em] uppercase hover:bg-accent/85 transition-all shadow-lg shadow-accent/20">
          BOOK DEMO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
