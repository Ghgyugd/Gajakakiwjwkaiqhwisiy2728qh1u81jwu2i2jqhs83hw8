import React, { useState } from 'react';
import { Database, Compass, Cpu, Layers, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useExperience } from '../hooks/useExperience';

export const ArchitectureStage: React.FC = () => {
  const { triggerImpulse } = useExperience();
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const strata = [
    {
      id: 'grounding',
      number: 'LAYER 01',
      title: 'Semantic Grounding & Strict Provenance',
      subtitle: 'Every formula, derivation, and assertion is tied to your exact textbook pages.',
      icon: Database,
      queryTrace: {
        step: 'Provenance Verification',
        source: 'NCERT Physics Part I · Chapter 6 (Electromagnetic Induction), Section 6.8, pp. 219–221',
        citation: '“Equation 6.15: M₁₂ = μ₀ n₁ n₂ π r₁² l — verified against official CBSE mark scheme.”',
        confidence: '100% Page-Linked Semantic Grounding',
      },
    },
    {
      id: 'retention',
      number: 'LAYER 02',
      title: 'Persistent Trajectory & Spaced Retention Memory',
      subtitle: 'Maintains long-term error logs, understanding curves, and adaptive schedules.',
      icon: Compass,
      queryTrace: {
        step: 'Student Error Log Calibration',
        source: 'Diagnostic Error Log #4892 · Term II Mock Analysis',
        citation: '“Student lost 3 marks on Lenz’s law negative sign direction vectors. Scheduled high-priority retrieval drill for Day 02 at 07:30.”',
        confidence: 'Persistent Across All Tabs & Sessions',
      },
    },
    {
      id: 'solver',
      number: 'LAYER 03',
      title: 'Multi-Step Formal Proof & Diagnostic Solver',
      subtitle: 'Plans, inspects, executes calculations, and self-corrects before finalizing output.',
      icon: Cpu,
      queryTrace: {
        step: 'Autonomous Derivation & Step Check',
        source: 'Symbolic Calculus & Vector Verification Engine',
        citation: '“Decomposed into 4 steps: Magnetic flux through inner solenoid -> Total linkage -> Mutual inductance coefficient -> Dimensional analysis consistency check.”',
        confidence: 'Verified Derivation · Zero Hallucinations',
      },
    },
    {
      id: 'compiler',
      number: 'LAYER 04',
      title: 'Native Artifact & Sandbox Compiler',
      subtitle: 'Compiles explanations directly into interactive sandboxes, board exams, and code.',
      icon: Layers,
      queryTrace: {
        step: 'Artifact Synthesis',
        source: 'Board-Pattern Examination & Sandbox Generator',
        citation: '“Compiled printable 5-marker board question with official marking breakdown and step-by-step scoring rubric.”',
        confidence: 'Executable Artifact Output',
      },
    },
  ];

  const active = strata[selectedLayer];
  const ActiveIcon = active.icon;

  return (
    <section id="architecture" className="min-h-screen py-28 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Editorial Chapter Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2749]/40 border border-[#ced4da]/16 text-xs text-[#e4d9ff] font-mono mb-4">
          <span>CHAPTER 02</span>
          <span className="text-[#6c757d]">·</span>
          <span>THE OPERATING SYSTEM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#f8f9fa] leading-[1.1] mb-6">
          Chat is one interface.{' '}
          <span className="text-[#adb5bd] font-light">Veldrin is the persistent environment around your work.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#ced4da] leading-relaxed font-light">
          When intelligence has persistent awareness of your syllabus, your past mistakes, and your textbook pages, it ceases to be a forgetful conversationalist.
        </p>
      </div>

      {/* Interactive Architectural Strata Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: The 4 Architectural Strata Selector */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono uppercase text-[#adb5bd] mb-3 tracking-wider">
            Select Architectural Layer to Inspect
          </div>
          {strata.map((stratum, idx) => {
            const Icon = stratum.icon;
            const isSelected = selectedLayer === idx;

            return (
              <button
                key={stratum.id}
                onClick={() => {
                  setSelectedLayer(idx);
                  triggerImpulse();
                }}
                className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                  isSelected
                    ? 'bg-[#1e2749]/40 border-[#ced4da]/30 shadow-lg text-[#fafaff]'
                    : 'bg-[#212529]/30 border-[#ced4da]/10 text-[#adb5bd] hover:bg-[#212529]/60 hover:text-[#f8f9fa]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-[#273469] text-[#e4d9ff] border border-[#ced4da]/30'
                      : 'bg-[#30343f]/60 text-[#adb5bd] border border-[#ced4da]/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#adb5bd] uppercase">
                      {stratum.number}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-[#e4d9ff] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4d9ff] animate-pulse" />
                        ACTIVE STRATUM
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-medium text-[#f8f9fa] truncate mb-1">
                    {stratum.title}
                  </h4>
                  <p className="text-xs text-[#ced4da] font-light line-clamp-2 leading-relaxed">
                    {stratum.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Query Execution Trace & Architectural Proof */}
        <div className="lg:col-span-7 rounded-2xl bg-[#212529]/40 border border-[#ced4da]/18 p-7 sm:p-8 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs mb-6">
            <div className="flex items-center gap-2">
              <ActiveIcon className="w-4 h-4 text-[#e4d9ff]" />
              <span className="text-[#fafaff] font-mono font-medium">
                {active.number} Execution Inspection
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#adb5bd] px-2.5 py-0.5 rounded-full bg-[#30343f]/60 border border-[#ced4da]/12">
              {active.queryTrace.confidence}
            </span>
          </div>

          {/* Simulated Query Being Processed */}
          <div className="p-4 rounded-xl bg-[#050608]/80 border border-[#ced4da]/12 mb-6">
            <div className="text-[10px] font-mono text-[#adb5bd] uppercase mb-1">
              Live Query Sample
            </div>
            <div className="text-sm font-medium text-[#f8f9fa] font-mono">
              “Derive the formula for the mutual inductance of two coaxial solenoids (NCERT 5-marker board pattern).”
            </div>
          </div>

          {/* Active Layer Execution Output */}
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#1e2749]/35 border border-[#ced4da]/16">
              <div className="text-[10px] uppercase text-[#e4d9ff] mb-1 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e4d9ff]" />
                {active.queryTrace.step}
              </div>
              <div className="text-[#fafaff] font-sans text-sm font-medium mb-2">
                {active.queryTrace.source}
              </div>
              <div className="text-[#ced4da] font-sans text-xs font-light leading-relaxed p-3 rounded-lg bg-[#050608]/50 border border-[#ced4da]/10">
                {active.queryTrace.citation}
              </div>
            </div>

            {/* Architectural Invariant Guarantee */}
            <div className="p-4 rounded-xl bg-[#212529]/70 border border-[#ced4da]/12 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#e4d9ff] shrink-0 mt-0.5" />
              <div className="font-sans text-xs">
                <span className="text-[#fafaff] font-medium block mb-0.5">
                  Architectural Guarantee
                </span>
                <span className="text-[#adb5bd] font-light leading-relaxed">
                  Every output produced by Veldrin is grounded in textbook source pages, validated against target marking schemes, and retained in memory for lifelong recall.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
