import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import { Calendar, RefreshCw, CheckCircle2, Clock, Zap, ArrowRight } from 'lucide-react';

export const AdaptivePlannerStage: React.FC = () => {
  const { triggerImpulse, scrollTo } = useExperience();
  const [isHealed, setIsHealed] = useState<boolean>(false);

  const handleToggleHealing = () => {
    setIsHealed(!isHealed);
    triggerImpulse(0.8);
  };

  return (
    <section id="learn" className="py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
      <div className="mb-6 veldrin-pill-badge">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
        <Calendar className="w-3.5 h-3.5 text-[#B9AEFF]" />
        <span>OBJECTION DESTROYER 02 · SELF-HEALING ADAPTIVE TIMETABLE</span>
      </div>

      {/* Editorial Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] font-heading">
            Miss a day? The schedule heals itself before morning.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
            Static paper timetables die the first time life happens. Veldrin recalibrates every night—redistributing high-yield topics without shame, overload, or ruined streaks.
          </p>
        </div>
      </div>

      {/* Interactive Adaptive Timetable Visualizer in Layered Translucent Glass */}
      <div className="rounded-3xl veldrin-glass-card p-6 sm:p-9 shadow-2xl relative overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 right-1/4 w-64 h-32 bg-[rgba(185,174,255,0.05)] rounded-full blur-3xl pointer-events-none" />

        {/* Console Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-ping" />
            <span className="text-sm font-medium text-[#FFFFFF] font-mono">
              Live Schedule Recovery Engine
            </span>
          </div>
          <button
            onClick={handleToggleHealing}
            className={`px-4 py-2.5 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
              isHealed
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'bg-[rgba(185,174,255,0.08)] hover:bg-[rgba(185,174,255,0.15)] text-[#B9AEFF] border border-[rgba(185,174,255,0.25)]'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isHealed ? 'rotate-180 transition-transform' : ''}`} />
            <span>{isHealed ? 'Reset Demo Schedule' : 'Simulate Missed Monday Session'}</span>
          </button>
        </div>

        {/* 5-Day Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Day 1: Monday */}
          <div className={`p-4 rounded-2xl border transition-all ${
            isHealed
              ? 'bg-[rgba(3,4,7,0.8)] border-[rgba(255,255,255,0.06)] opacity-60'
              : 'bg-[rgba(30,39,73,0.35)] border-[rgba(185,174,255,0.25)]'
          }`}>
            <div className="flex justify-between items-center text-xs font-mono text-[rgba(245,245,247,0.5)] mb-2">
              <span>MON · DAY 01</span>
              {isHealed && <span className="text-[rgba(245,245,247,0.4)] text-[10px]">MISSED</span>}
            </div>
            <div className="text-xs font-medium text-[#FFFFFF] mb-2">
              {isHealed ? 'Session Interrupted' : '07:30 · Lenz Derivation Proof'}
            </div>
            <p className="text-[11px] text-[rgba(245,245,247,0.62)] font-light">
              {isHealed ? 'Auto-healed by nightly scheduler' : 'NCERT Ch 6 · 5-Marker weightage'}
            </p>
          </div>

          {/* Day 2: Tuesday */}
          <div className={`p-4 rounded-2xl border transition-all ${
            isHealed
              ? 'bg-[rgba(30,39,73,0.45)] border-[rgba(185,174,255,0.4)] ring-1 ring-[rgba(185,174,255,0.25)]'
              : 'bg-[rgba(18,22,31,0.5)] border-[rgba(255,255,255,0.06)]'
          }`}>
            <div className="flex justify-between items-center text-xs font-mono text-[rgba(245,245,247,0.5)] mb-2">
              <span>TUE · DAY 02</span>
              {isHealed && <span className="text-[#B9AEFF] text-[10px] font-semibold">REALLOCATED</span>}
            </div>
            <div className="text-xs font-medium text-[#FFFFFF] mb-2">
              {isHealed ? '07:30 · Lenz Derivation Proof (Healed)' : '07:30 · Mutual Inductance Formulas'}
            </div>
            <p className="text-[11px] text-[rgba(245,245,247,0.62)] font-light">
              {isHealed ? 'Moved forward without overload' : 'Section 6.8 · Solenoid linkage'}
            </p>
          </div>

          {/* Day 3: Wednesday */}
          <div className="p-4 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
            <div className="flex justify-between items-center text-xs font-mono text-[rgba(245,245,247,0.5)] mb-2">
              <span>WED · DAY 03</span>
              <span className="text-[#B9AEFF] text-[10px]">ACTIVE</span>
            </div>
            <div className="text-xs font-medium text-[#FFFFFF] mb-2">
              16:00 · AC Generator Proofs
            </div>
            <p className="text-[11px] text-[rgba(245,245,247,0.62)] font-light">
              Board-pattern exam question drill
            </p>
          </div>

          {/* Day 4: Thursday */}
          <div className="p-4 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
            <div className="flex justify-between items-center text-xs font-mono text-[rgba(245,245,247,0.5)] mb-2">
              <span>THU · DAY 04</span>
              <span className="text-[rgba(245,245,247,0.4)] text-[10px]">SPACED</span>
            </div>
            <div className="text-xs font-medium text-[#FFFFFF] mb-2">
              18:30 · Diagnostic Quiz 02
            </div>
            <p className="text-[11px] text-[rgba(245,245,247,0.62)] font-light">
              15-minute speed recall test
            </p>
          </div>

          {/* Day 5: Friday */}
          <div className="p-4 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
            <div className="flex justify-between items-center text-xs font-mono text-[rgba(245,245,247,0.5)] mb-2">
              <span>FRI · DAY 05</span>
              <span className="text-[#B9AEFF] text-[10px]">MILESTONE</span>
            </div>
            <div className="text-xs font-medium text-[#FFFFFF] mb-2">
              Full Chapter Mock Exam
            </div>
            <p className="text-[11px] text-[rgba(245,245,247,0.62)] font-light">
              Calibrated against board rubrics
            </p>
          </div>
        </div>

        {/* System Invariant Note */}
        <div className="p-4 rounded-2xl bg-[rgba(3,4,7,0.7)] border border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[rgba(245,245,247,0.62)] gap-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#B9AEFF] shrink-0" />
            <span className="text-[#F5F5F7] font-light">
              Streak verified: Completed problem blocks maintain your 19-day streak, even when session timing shifts.
            </span>
          </div>
          <span className="font-mono text-[#B9AEFF] text-[11px] shrink-0">
            0% Abandonment Rate
          </span>
        </div>
      </div>
    </section>
  );
};
