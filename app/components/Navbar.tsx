"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { 
      label: "Products", 
      columns: [
        { title: "Websites", links: ["Portfolio", "Business", "Blog", "Personal"] },
        { title: "Commerce", links: ["Online Store", "Local Business", "Subscriptions", "Inventory"] },
        { title: "Marketing", links: ["Email Campaigns", "SEO Tools", "Social Media", "Analytics"] },
        { title: "Resources", links: ["Help Center", "Community", "Developers", "Webinars"] }
      ]
    },
    { 
      label: "Solutions", 
      columns: [
        { title: "By Industry", links: ["Retail", "Healthcare", "Airports", "Stadiums"] },
        { title: "By Need", links: ["Wayfinding", "Analytics", "Security", "Accessibility"] },
        { title: "By Scale", links: ["Enterprise", "Mid-Market", "Small Venue", "Global"] },
        { title: "Case Studies", links: ["Success Stories", "Whitepapers", "ROI Calculator", "Demo"] }
      ]
    },
    { 
      label: "Experience", 
      columns: [
        { title: "Visitor App", links: ["Scan-Once", "Real-Time Map", "Search", "Accessibility"] },
        { title: "Staff Tools", links: ["Dashboard", "Heatmaps", "Management", "Alerts"] },
        { title: "Integrations", links: ["API Suite", "SDKs", "Webhooks", "Third-Party"] },
        { title: "Support", links: ["Knowledge Base", "Training", "Security", "Uptime"] }
      ]
    }
  ];

  const ChevronDown = () => (
    <svg className="w-3 h-3 opacity-40 ml-1.5 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isHeaderHovered || activeMenu ? "bg-black" : "bg-transparent"}`}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => {
        setIsHeaderHovered(false);
        setActiveMenu(null);
      }}
    >
      <nav className="flex justify-between items-center px-12 py-8 text-white relative">
        {/* Logo */}
        <div className="flex items-center h-10">
          <img src="/Left logo.svg" alt="Navous Logo" className="h-full w-auto brightness-0 invert" />
        </div>
        
        {/* Main Nav */}
        <div className="hidden md:flex gap-10 font-sans font-medium text-[12px] tracking-[0.15em] uppercase h-full items-center">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="group relative h-full flex items-center cursor-pointer py-2"
              onMouseEnter={() => setActiveMenu(item.label)}
            >
              <span className={`transition-opacity duration-300 flex items-center ${activeMenu === item.label ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}>
                {item.label}
                <ChevronDown />
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-[12px] uppercase tracking-wider hover:bg-slate-100 transition cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mega Menu Panel */}
        <div 
          className={`absolute top-full left-0 w-full bg-black border-t border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${activeMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-12 py-20">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className={`grid grid-cols-4 gap-16 transition-opacity duration-300 ${activeMenu === item.label ? "block opacity-100" : "hidden opacity-0"}`}
              >
                {item.columns.map((col) => (
                  <div key={col.title}>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">{col.title}</h4>
                    <ul className="flex flex-col gap-5 text-[14px] font-medium">
                      {col.links.map((link) => (
                        <li key={link}><a href="#" className="hover:text-accent transition-colors">{link}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
