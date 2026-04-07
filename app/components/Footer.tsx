import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <Image
            src="/Left logo.svg"
            alt="Navous Logo"
            width={120}
            height={36}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="text-white/40 text-sm mt-4">
            &copy; 2026 Navous. Built for the moments that matter.
          </p>
        </div>
        <nav className="flex flex-col gap-3 text-sm text-white/60">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/how-it-works" className="hover:text-white transition">How It Works</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/faq" className="hover:text-white transition">FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
