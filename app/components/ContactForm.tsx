"use client";

import React, { useActionState } from "react";
import { submitContactForm } from "../actions/contact";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state?.success) {
    return (
      <div className="bg-white/5 border border-teal/20 rounded-3xl p-12 text-center backdrop-blur-md">
        <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
        <p className="text-white/60 mb-6">Our partnership lead will reach out within 24 hours to discuss your facility needs.</p>
        <div className="bg-white/5 rounded-xl p-4 text-left border border-white/5">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Next Steps</p>
          <ul className="text-xs text-white/60 space-y-2">
            <li className="flex gap-2"><span>•</span> <span>Check your inbox for a confirmation receipt.</span></li>
            <li className="flex gap-2"><span>•</span> <span>We will review your facility challenges.</span></li>
            <li className="flex gap-2"><span>•</span> <span>You&apos;ll receive a calendar link to pick a walkthrough time.</span></li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-8">Schedule a Technical Walkthrough</h3>
      <form action={formAction} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Full Name</label>
            <input 
              required 
              name="fullName"
              type="text" 
              placeholder="John Doe" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Work Email</label>
            <input 
              required 
              name="email"
              type="email" 
              placeholder="john@hospital.com" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all" 
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">Facility Type</label>
          <select 
            name="facilityType"
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all appearance-none"
          >
            <option className="bg-[#0B0E14]" value="Hospital / Healthcare">Hospital / Healthcare</option>
            <option className="bg-[#0B0E14]" value="Shopping Mall / Retail">Shopping Mall / Retail</option>
            <option className="bg-[#0B0E14]" value="Airport / Transport Hub">Airport / Transport Hub</option>
            <option className="bg-[#0B0E14]" value="University / Campus">University / Campus</option>
            <option className="bg-[#0B0E14]" value="Events / Conference Venue">Events / Conference Venue</option>
            <option className="bg-[#0B0E14]" value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-1">What challenges are you looking to solve?</label>
          <textarea 
            rows={3} 
            name="challenges"
            placeholder="e.g. Reducing staff interruptions, improving ADA compliance..." 
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-all resize-none"
          ></textarea>
        </div>
        
        {state?.message && !state.success && (
          <p className="text-red-400 text-xs text-center font-medium bg-red-400/10 py-2 rounded-lg border border-red-400/20">
            {state.message}
          </p>
        )}

        <button disabled={isPending} className="btn-primary w-full py-4 mt-4">
          {isPending ? "Sending..." : "Request Demo"}
        </button>
        <p className="text-[10px] text-center text-white/30 font-medium tracking-wide">
          By clicking, you agree to our privacy policy and SOC 2 data commitments.
        </p>
      </form>
    </div>
  );
}
