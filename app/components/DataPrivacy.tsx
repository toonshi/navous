"use client";

import React from "react";

const securityFeatures = [
  {
    title: "On-Device Processing",
    description: "Location calculations happen exclusively on the visitor's smartphone. Navous does not stream continuous location data to our servers, ensuring absolute visitor privacy.",
  },
  {
    title: "SOC 2 Type II Compliant",
    description: "Our infrastructure and operational processes are audited to meet the highest standards of security, availability, and processing integrity for enterprise healthcare.",
  },
  {
    title: "GDPR & HIPAA Ready",
    description: "Because we process location data locally and do not require user accounts or personally identifiable information (PII) to navigate, Navous is natively compliant.",
  },
  {
    title: "Complete Data Sovereignty",
    description: "You own your floor plans and your analytics data. We provide the platform; you retain full control over who sees your facility's internal structure.",
  }
];

export default function DataPrivacy() {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="flex-1 text-left">
          <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
            Compliance & Privacy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Security built for <br />
            hospital procurement.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-medium mb-10 max-w-xl">
            We know that deploying new software in healthcare and enterprise environments requires rigorous security reviews. Navous is architected from the ground up to pass those reviews without hesitation.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <div className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-bold tracking-widest uppercase">
                SOC 2 TYPE II
             </div>
             <div className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-bold tracking-widest uppercase">
                GDPR
             </div>
             <div className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-bold tracking-widest uppercase">
                HIPAA READY
             </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
