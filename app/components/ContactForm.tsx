"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-white/5 border border-teal/20 rounded-3xl p-12 text-center backdrop-blur-xl">
        <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
        <p className="text-white/60">Our partnership lead will reach out within 24 hours to discuss your facility needs.</p>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-8">Schedule a Technical Walkthrough</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Full Name</label>
            <input required type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Work Email</label>
            <input required type="email" placeholder="john@hospital.com" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Facility Type</label>
          <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all appearance-none">
            <option className="bg-[#0B0E14]">Hospital / Healthcare</option>
            <option className="bg-[#0B0E14]">Shopping Mall / Retail</option>
            <option className="bg-[#0B0E14]">Airport / Transport Hub</option>
            <option className="bg-[#0B0E14]">University / Campus</option>
            <option className="bg-[#0B0E14]">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">What challenges are you looking to solve?</label>
          <textarea rows={3} placeholder="e.g. Reducing staff interruptions, improving ADA compliance..." className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all resize-none"></textarea>
        </div>
        <button disabled={status === "submitting"} className="btn-primary w-full py-4 mt-4">
          {status === "submitting" ? "Sending..." : "Request Demo"}
        </button>
        <p className="text-[10px] text-center text-white/30 font-medium tracking-wide">
          By clicking, you agree to our privacy policy and SOC 2 data commitments.
        </p>
      </form>
    </div>
  );
}
