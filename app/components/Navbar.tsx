"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    handleChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/70 shadow-xl backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Image
            src="/logo.svg"
            alt="Navous Logo"
            width={160}
            height={48}
            className="h-9 w-auto brightness-0 invert sm:h-10"
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

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-4 w-4">
            <span className={`absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-4 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] block h-0.5 w-4 rounded-full bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-primary/95 px-4 py-4 shadow-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link href="/features" className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/5 hover:text-white" onClick={closeMenu}>Features</Link>
            <Link href="/how-it-works" className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/5 hover:text-white" onClick={closeMenu}>How it Works</Link>
            <Link href="/technology" className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/5 hover:text-white" onClick={closeMenu}>Implementation</Link>
            <Link href="/how-it-works#faq" className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/5 hover:text-white" onClick={closeMenu}>FAQ</Link>
            <Link href="/#contact" className="mt-2 rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-accent/20 transition hover:bg-accent/85" onClick={closeMenu}>
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
