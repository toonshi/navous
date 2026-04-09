"use client";

import React from "react";
import Image from "next/image";
import { CurvedArrowRight, Sparkle } from "./Doodles";

const steps = [
  {
    title: "Upload Floor Plans",
    description: "Simply upload your existing CAD, PDF, or high-resolution images. Our system automatically extracts architectural features.",
    illustration: "/illustrations/step-upload.svg",
    sparkleColor: "#FFD6A5",
  },
  {
    title: "Digital Processing",
    description: "Our spatial engine converts your static plans into a semantically rich, navigable digital twin in minutes.",
    illustration: "/illustrations/step-configure.svg",
    sparkleColor: "#CAFFBF",
  },
  {
    title: "Instant Go-Live",
    description: "Publish your navigation layer instantly. Your visitors can access it in any browser with sub-meter accuracy.",
    illustration: "/illustrations/step-live.svg",
    sparkleColor: "#FFADAD",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            From floor plan to navigation
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-medium subheading">
            A simple three-step process to bring your building into the digital age. No complex hardware installation required.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting arrows between steps — desktop only */}
          <div className="hidden md:flex absolute top-20 left-[calc(33.33%-12px)] items-center pointer-events-none" style={{ width: 'calc(33.33% + 24px)' }}>
            <CurvedArrowRight size={48} color="#13B7DA" className="opacity-50 mx-auto" />
          </div>
          <div className="hidden md:flex absolute top-20 left-[calc(66.66%-12px)] items-center pointer-events-none" style={{ width: 'calc(33.33% + 24px)' }}>
            <CurvedArrowRight size={48} color="#FFADAD" className="opacity-60 mx-auto" />
          </div>

          {steps.map((step, index) => (
            <div key={step.title} className="card-hover flex flex-col items-start text-left">
              <div className="w-full aspect-video bg-slate-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-slate-100 relative">
                <Image
                  src={step.illustration}
                  alt={step.title}
                  width={300}
                  height={200}
                  className="w-full max-w-[240px] opacity-80"
                />
                <Sparkle
                  size={12}
                  color={step.sparkleColor}
                  className="absolute top-3 right-4 doodle-float"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#13B7DA] font-mono text-sm font-bold tracking-tighter subheading">
                  STEP_{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 subheading">
                {step.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
