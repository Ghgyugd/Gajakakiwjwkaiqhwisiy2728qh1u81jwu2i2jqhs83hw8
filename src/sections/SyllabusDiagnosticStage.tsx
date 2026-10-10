import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import { Target, FileSearch, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

export const SyllabusDiagnosticStage: React.FC = () => {
  const { triggerImpulse, scrollTo } = useExperience();
  const [selectedFailure, setSelectedFailure] = useState<'lenz' | 'optics' | 'rotational'>('lenz');

  const failureDetails = {
    lenz: {
      subject: 'Physics · Electromagnetism',
      topic: 'Lenz’s Law & Induced EMF Derivations',
      marksLost: '-8 Marks',
      reason: 'Missing energy conservation premise in 5-marker board rubric',
      fix: 'Auto-scheduled 3-step proof drill for Day 01 at 07:30',
      weightage: '16 Marks in Exam (High Yield)',
    },
    optics: {
      subject: 'Physics · Ray Optics',
      topic: 'Lens Maker’s Formula Sign Conventions',
      marksLost: '-5 Marks',
      reason: 'Inverted Cartesian sign coordinates on refracting surfaces',
      fix: 'Interactive ray tracer simulation linked to textbook pp. 312',
      weightage: '14 Marks in Exam (High Yield)',
    },
    rotational: {
      subject: 'Physics · Mechanics',
      topic: 'Rolling Without Slipping & Torque Balance',
      marksLost: '-7 Marks',
      reason: 'Incorrect instantaneous center of rotation velocity vector',
      fix: 'First-principles angular momentum proof generator queued',
      weightage: '12 Marks in Exam (High Yield)',
    },
  };

  const active = failureDetails[selectedFailure];

  return (
    <section id="study" className="py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Luxury Tech Floating Pill Badge with glowing dot */}
      <div className="mb-6 veldrin-pill-badge">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
        <Target className="w-3.5 h-3.5 text-[#B9AEFF]" />
        <span>STAGE 01 · SYLLABUS INGESTION &amp; DIAGNOSTIC</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] font-heading">
            We find the exact derivation where your marks bled.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
            Upload your previous test or syllabus. Veldrin isolates the 20% of high-yield concepts that decide your rank, so you never waste weeks grinding low-yield chapters.
          </p>
        </div>
      </div>

      {/* Dual-Pane Sophisticated Visual Demonstration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Pane: Realistic Mark-Sheet OCR Diagnostic */}
        <div className="lg:col-span-6 rounded-3xl veldrin-glass-card p-6 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] text-xs mb-6">
              <div className="flex items-center gap-2">
                <FileSearch className="w-4 h-4 text-[#B9AEFF]" />
                <span className="text-[#FFFFFF] font-mono font-medium">Diagnostic Mark-Sheet OCR</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[rgba(185,174,255,0.08)] border border-[rgba(185,174,255,0.2)] text-[#B9AEFF]">
                Term II Mock · Calibrated
              </span>
            </div>

            {/* Diagnostic Document Simulation with Bounding Boxes */}
            <div className="p-4 rounded-2xl bg-[rgba(3,4,7,0.7)] border border-[rgba(255,255,255,0.06)] space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs font-mono text-[rgba(245,245,247,0.5)] pb-2 border-b border-[rgba(255,255,255,0.06)]">
                <span>Student Baseline: 78 / 100</span>
                <span className="text-[#B9AEFF] font-medium">Target: 96 / 100</span>
              </div>

              {/* Interactive Bounding Boxes */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedFailure('lenz');
                    triggerImpulse();
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs font-mono ${
                    selectedFailure === 'lenz'
                      ? 'bg-[rgba(30,39,73,0.5)] border-[rgba(185,174,255,0.4)] text-[#FFFFFF] shadow-sm'
                      : 'bg-[rgba(18,22,31,0.5)] border-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.6)] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[#B9AEFF] font-bold">Q14.</span>
                    <span className="truncate">Lenz&apos;s Law Negative Sign Proof</span>
                  </div>
                  <span className="text-[#B9AEFF] font-semibold shrink-0 ml-2">-8 Marks</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedFailure('optics');
                    triggerImpulse();
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs font-mono ${
                    selectedFailure === 'optics'
                      ? 'bg-[rgba(30,39,73,0.5)] border-[rgba(185,174,255,0.4)] text-[#FFFFFF] shadow-sm'
                      : 'bg-[rgba(18,22,31,0.5)] border-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.6)] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[#B9AEFF] font-bold">Q18.</span>
                    <span className="truncate">Lens Maker&apos;s Sign Convention</span>
                  </div>
                  <span className="text-[rgba(245,245,247,0.5)] font-semibold shrink-0 ml-2">-5 Marks</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedFailure('rotational');
                    triggerImpulse();
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs font-mono ${
                    selectedFailure === 'rotational'
                      ? 'bg-[rgba(30,39,73,0.5)] border-[rgba(185,174,255,0.4)] text-[#FFFFFF] shadow-sm'
                      : 'bg-[rgba(18,22,31,0.5)] border-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.6)] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[#B9AEFF] font-bold">Q22.</span>
                    <span className="truncate">Torque Balance on Incline</span>
                  </div>
                  <span className="text-[rgba(245,245,247,0.5)] font-semibold shrink-0 ml-2">-7 Marks</span>
                </button>
              </div>
            </div>

            {/* Root Cause Readout */}
            <div className="p-4 rounded-2xl bg-[rgba(30,39,73,0.35)] border border-[rgba(185,174,255,0.2)]">
              <div className="text-[10px] font-mono uppercase text-[#B9AEFF] mb-1">
                Root Cause Diagnostic
              </div>
              <div className="text-xs text-[#FFFFFF] font-medium mb-1">{active.reason}</div>
              <div className="text-[11px] text-[rgba(245,245,247,0.62)] font-light">{active.fix}</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-[rgba(245,245,247,0.5)] font-mono">
            <span>Isolation Confidence: 99.4%</span>
            <span className="text-[#B9AEFF]">{active.weightage}</span>
          </div>
        </div>

        {/* Right Pane: The 20% High-Yield Extraction Visualizer */}
        <div className="lg:col-span-6 rounded-3xl veldrin-glass-card p-6 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] text-xs mb-6">
              <span className="text-[#FFFFFF] font-mono font-medium">The 20% High-Yield Extraction</span>
              <span className="text-[10px] font-mono text-[#B9AEFF] px-2.5 py-0.5 rounded-full bg-[rgba(185,174,255,0.08)] border border-[rgba(185,174,255,0.2)]">
                80% Score Impact
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-[rgba(3,4,7,0.6)] border border-[rgba(255,255,255,0.06)]">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-[#F5F5F7] font-medium">High-Yield Archetypes Isolated</span>
                  <span className="font-mono text-[#FFFFFF]">14 of 72 Topics</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-[#FFFFFF] rounded-full w-[82%]" />
                </div>
                <div className="flex justify-between text-[11px] text-[rgba(245,245,247,0.5)] font-mono mt-2">
                  <span>Covers 82% of total exam marks</span>
                  <span>Saves 18 study hrs/wk</span>
                </div>
              </div>

              {/* Architectural Breakdown */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
                  <span className="text-[10px] text-[rgba(245,245,247,0.5)] block mb-1">NCERT CHAPTERS</span>
                  <span className="text-lg font-semibold text-[#FFFFFF]">14 Core</span>
                  <p className="text-[10px] text-[rgba(245,245,247,0.5)] font-sans font-light mt-1">Filtered from 30 chapters</p>
                </div>
                <div className="p-4 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
                  <span className="text-[10px] text-[rgba(245,245,247,0.5)] block mb-1">BOARD DERIVATIONS</span>
                  <span className="text-lg font-semibold text-[#FFFFFF]">9 Proofs</span>
                  <p className="text-[10px] text-[rgba(245,245,247,0.5)] font-sans font-light mt-1">Account for all 5-markers</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[rgba(3,4,7,0.7)] border border-[rgba(255,255,255,0.06)] text-xs text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
              Instead of re-reading entire textbooks cover to cover, Veldrin constructs your daily study blocks specifically around the 9 recurring derivations that examiners repeat annually.
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                triggerImpulse();
                scrollTo('#get-started');
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F5F5F7] text-[#030407] text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(185,174,255,0.2)]"
            >
              <span>Scan My Syllabus &amp; Past Tests</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#030407]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
