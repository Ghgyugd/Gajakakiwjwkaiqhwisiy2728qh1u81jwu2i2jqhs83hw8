import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import { BookOpen, ShieldCheck, Check, ArrowRight, FileText } from 'lucide-react';

export const TextbookGroundingStage: React.FC = () => {
  const { triggerImpulse, scrollTo } = useExperience();

  return (
    <section id="textbook-teaching" className="py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
      <div className="mb-6 veldrin-pill-badge">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
        <BookOpen className="w-3.5 h-3.5 text-[#B9AEFF]" />
        <span>STAGE 03 · GROUNDED SOURCE TEACHING</span>
      </div>

      {/* Editorial Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] font-heading">
            Taught from your exact textbook. Down to the page number.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
            Generic AI chats guess from random internet articles. Veldrin mirrors your official prescribed textbook—teaching the precise definitions, diagrams, and proofs your examiner demands.
          </p>
        </div>
      </div>

      {/* Realistic Textbook Spread & Derivation Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Authentic Textbook Page Reference */}
        <div className="lg:col-span-5 rounded-3xl veldrin-glass-card p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] text-xs mb-5">
              <span className="text-[#FFFFFF] font-mono font-medium">NCERT Physics Class 12 · Part I</span>
              <span className="text-[10px] font-mono text-[#B9AEFF] px-2.5 py-0.5 rounded-full bg-[rgba(185,174,255,0.08)] border border-[rgba(185,174,255,0.2)]">
                Page 214 · Section 6.4
              </span>
            </div>

            {/* Simulating Textbook Excerpt */}
            <div className="p-5 rounded-2xl bg-[rgba(3,4,7,0.7)] border border-[rgba(255,255,255,0.06)] space-y-4 mb-6">
              <div className="text-xs text-[rgba(245,245,247,0.5)] font-mono uppercase tracking-wider">
                Prescribed Equation 6.3
              </div>
              <div className="p-4 rounded-xl bg-[rgba(30,39,73,0.35)] border border-[rgba(185,174,255,0.25)] text-center">
                <code className="text-lg sm:text-xl font-mono text-[#FFFFFF] font-bold">
                  ε = - N · (dΦ / dt)
                </code>
              </div>
              <p className="text-xs text-[rgba(245,245,247,0.7)] font-light leading-relaxed">
                “The polarity of the induced emf is such that it tends to produce a current which opposes the change in magnetic flux that produces it.”
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-[rgba(245,245,247,0.5)]">
              <div className="flex justify-between py-1 border-b border-[rgba(255,255,255,0.06)]">
                <span>Chapter Weightage:</span>
                <span className="text-[#FFFFFF]">16 Marks Total</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[rgba(255,255,255,0.06)]">
                <span>Diagram Mandated:</span>
                <span className="text-[#FFFFFF]">Figure 6.4 (Bar Magnet &amp; Coil)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-[#B9AEFF] font-mono">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Zero internet hallucination · Strict syllabus fidelity</span>
          </div>
        </div>

        {/* Right Side: Veldrin Step-by-Step Marking Rubric Derivation */}
        <div className="lg:col-span-7 rounded-3xl veldrin-glass-card p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden ring-1 ring-[rgba(185,174,255,0.2)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(185,174,255,0.06)] rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] text-xs mb-5">
              <span className="text-[#FFFFFF] font-mono font-medium">Board-Calibrated Step Proof</span>
              <span className="text-[10px] font-mono text-[#B9AEFF] px-2.5 py-0.5 rounded-full bg-[rgba(185,174,255,0.08)] border border-[rgba(185,174,255,0.2)]">
                Official CBSE Marking Rubric
              </span>
            </div>

            <div className="space-y-3.5 mb-6 text-xs">
              {/* Step 1 */}
              <div className="p-4 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[#B9AEFF] font-bold">Step 01 // Statement &amp; Premise</span>
                  <span className="font-mono text-[#FFFFFF] text-[10px]">[1 Mark]</span>
                </div>
                <p className="text-[rgba(245,245,247,0.7)] font-light leading-relaxed">
                  State Faraday’s magnitude formula. State Lenz’s law and explicitly identify that the negative sign represents energy conservation.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[#B9AEFF] font-bold">Step 02 // Mathematical Equivalence</span>
                  <span className="font-mono text-[#FFFFFF] text-[10px]">[2 Marks]</span>
                </div>
                <p className="text-[rgba(245,245,247,0.7)] font-light leading-relaxed">
                  Derive motional EMF via Lorentz force on conduction electrons: <code className="text-[#FFFFFF] font-mono">F = q(v × B)</code>. Demonstrate mechanical work done equals electrical heat dissipated in resistor.
                </p>
              </div>

              {/* Examiner Pitfall Warning */}
              <div className="p-4 rounded-2xl bg-[rgba(30,39,73,0.35)] border border-[rgba(185,174,255,0.25)] text-xs">
                <div className="text-[10px] font-mono uppercase text-[#B9AEFF] mb-1 font-semibold">
                  Common Mark-Loss Pitfall Detected:
                </div>
                <p className="text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
                  84% of students lose 1 mark here by omitting the physical energy conservation statement before writing the induced current direction. Veldrin auto-flags this in every mock attempt.
                </p>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                triggerImpulse(0.85);
                scrollTo('#get-started');
              }}
              className="w-full py-3.5 rounded-full text-xs font-semibold cursor-pointer transition-all bg-[#FFFFFF] text-[#030407] hover:bg-[#F5F5F7] shadow-[0_0_20px_rgba(185,174,255,0.25)] flex items-center justify-center gap-2"
            >
              <span>Explore My Textbook Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
