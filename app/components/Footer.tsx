"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-12 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1">
            <img src="/Left logo.svg" alt="Navous Logo" className="h-8 w-auto brightness-0 invert mb-8" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
              Transforming complex venues into searchable, intelligent environments. Built on the VisionTech spatial engine.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Platform</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Wayfinding</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Solutions</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Retail</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Aviation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Education</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Legal & Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/20">
              © 2026 NAVOUS INC.
            </p>
            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
          
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map(social => (
              <a key={social} href="#" className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-accent transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
