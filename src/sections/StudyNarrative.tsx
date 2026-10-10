import React, { useState } from 'react';
import { Target, Calendar, BookOpen, Award, Check } from 'lucide-react';

export const StudyNarrative: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'understand-me',
      title: '1. Understand Me — Syllabus, Results & Weak Subjects',
      subtitle: 'Upload a report card. Veldrin detects your standard, syllabus, and exact weak areas.',
      summary:
        'Most study tools begin with a generic quiz. Veldrin reads your actual previous result (even from a past year), determines your current class, identifies where marks were lost, and extracts your board’s high-yield exam archetypes.',
      icon: Target,
      visual: (
        <div className="p-6 rounded-xl bg-[#30343f]/30 border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs text-[#adb5bd]">
            <span>Report Card Ingestion · Term II Diagnostic</span>
            <span className="text-[#fafaff] font-mono">CBSE Class 12 · Calibrated</span>
          </div>
          <div className="space-y-3 mt-4 text-xs">
            <div className="p-3.5 rounded-lg bg-[#273469]/30 border border-[#ced4da]/20 flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-[#fafaff] text-[#212529] flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                ✓
              </div>
              <div>
                <span className="text-[#fafaff] font-medium block">Automatic Class &amp; Board Inferred</span>
                <span className="text-[#ced4da] font-light text-[11px]">
                  Class 12 Physics &amp; Mathematics · Target Score: 95th Percentile
                </span>
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#212529]/60 border border-[#ced4da]/14 flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-[#e4d9ff] text-[#212529] flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                !
              </div>
              <div>
                <span className="text-[#fafaff] font-medium block">Weak Subject Root Cause Identified</span>
                <span className="text-[#ced4da] font-light text-[11px]">
                  Electromagnetism: Lost 8 marks in AC generator EMF derivations and Lenz’s law direction vectors.
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'what-matters-now',
      title: '2. Tell Me What Matters Now — Adaptive Timetable',
      subtitle: 'Nightly recalculation that prioritizes overdue topics and heals missed days automatically.',
      summary:
        'A static timetable fails the moment you get sick or have an unexpected event. Veldrin rebuilds your daily schedule every night: weak subjects get more frequent attention, regional holidays are pre-factored, and missed sessions are quietly redistributed.',
      icon: Calendar,
      visual: (
        <div className="p-6 rounded-xl bg-[#30343f]/30 border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs">
            <span className="text-[#fafaff] font-medium">Daily Adaptive Briefing</span>
            <span className="text-[#e4d9ff] font-mono">Exam in 42 Days</span>
          </div>
          <div className="mt-4 space-y-2.5 text-xs">
            <div className="p-3 rounded-lg bg-[#273469]/30 border border-[#ced4da]/20 flex items-center justify-between">
              <div>
                <span className="text-[#fafaff] font-medium block">07:30 · Weak Subject Repair (High-Load)</span>
                <span className="text-[#ced4da] text-[11px]">Lenz’s Law Negative Sign Directional Proofs</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#fafaff] text-[#212529] font-semibold">
                Priority 1
              </span>
            </div>
            <div className="p-3 rounded-lg bg-[#212529]/60 border border-[#ced4da]/12 flex items-center justify-between">
              <div>
                <span className="text-[#dee2e6] font-medium block">16:00 · Syllabus Advance &amp; Chapter Derivation</span>
                <span className="text-[#adb5bd] text-[11px]">Inductance Formulas (NCERT Chapter 6, Section 6.8)</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#30343f] text-[#dee2e6] border border-[#ced4da]/20">
                Priority 2
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'make-me-better',
      title: '3. Make Me Better — Textbook Teaching & Exams',
      subtitle: 'Teaches from your prescribed book with exact page citations and board-pattern chapter exams.',
      summary:
        'Veldrin does not guess from internet summaries. It mirrors your school textbook’s exact definitions, diagrams, and page numbers. Once a chapter is completed, an authentic exam opens with real mark schemes and step-by-step rubrics.',
      icon: BookOpen,
      visual: (
        <div className="p-6 rounded-xl bg-[#30343f]/30 border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs text-[#adb5bd]">
            <span>Grounded Source Explanation</span>
            <span className="text-[#fafaff] font-mono">NCERT Physics Page 214</span>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-[#212529]/70 border border-[#ced4da]/12">
              <span className="text-[#adb5bd] text-[11px] block mb-1">Textbook Reference · Eq 6.3</span>
              <code className="text-[#fafaff] font-mono block text-sm">ε = - N · (dΦ / dt)</code>
            </div>
            <div className="p-4 rounded-lg bg-[#30343f]/25 border border-[#ced4da]/12 text-[#dee2e6] leading-relaxed font-light space-y-2">
              <p>
                <strong className="text-[#fafaff] font-medium">Why the negative sign matters:</strong> In board exams,
                examiners test coil winding direction. Lenz’s law is not merely a sign convention—it represents the physical
                conservation of energy.
              </p>
              <div className="p-2.5 rounded bg-[#212529]/60 border border-[#ced4da]/15 text-[#adb5bd] text-[11px]">
                Board Marking Criterion: Full credit requires explicitly mentioning energy conservation before stating induced current direction.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'whole-system',
      title: '4. Whole System — Learning OS Convergence',
      subtitle: 'Honest 30-day intelligence reports, board-class leaderboards, and real study streaks.',
      summary:
        'You are not studying in a vacuum. Veldrin generates a monthly tutor-grade intelligence report, benchmarks you on a leaderboard against students in your exact board and class, and rewards streaks tied to genuine completed study blocks.',
      icon: Award,
      visual: (
        <div className="p-6 rounded-xl bg-[#30343f]/30 border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs">
            <span className="text-[#fafaff] font-medium">Monthly Intelligence Report · 30-Day Audit</span>
            <span className="text-[#e4d9ff] font-mono">Readiness Score: 88%</span>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-[#212529]/60 border border-[#ced4da]/12 flex justify-between items-center">
              <div>
                <span className="text-[#fafaff] font-medium block">Board &amp; Class Leaderboard</span>
                <span className="text-[#adb5bd] text-[11px]">Rank 14 of 420 Students · CBSE Class 12 Region</span>
              </div>
              <span className="font-mono text-[#fafaff] font-semibold">Top 3.3%</span>
            </div>
            <div className="p-3 rounded-lg bg-[#273469]/25 border border-[#ced4da]/15 flex justify-between items-center">
              <div>
                <span className="text-[#fafaff] font-medium block">Work-Verified Streak</span>
                <span className="text-[#ced4da] text-[11px]">Active streak for completed problem blocks (not just app opens)</span>
              </div>
              <span className="font-mono text-[#fafaff] font-bold text-xs">19 Days</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="study" className="min-h-screen py-28 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Chapter Lead */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2749]/40 border border-[#ced4da]/16 text-xs text-[#e4d9ff] font-mono mb-4">
          <span>CHAPTER 04</span>
          <span className="text-[#6c757d]">·</span>
          <span>THE ACADEMIC ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#f8f9fa] leading-[1.1] mb-6">
          For Students — Your entire academic year, organized.
        </h2>
        <p className="text-base sm:text-lg text-[#ced4da] leading-relaxed font-light">
          Built for board exams and competitive entrance. Veldrin takes your actual textbooks, diagnoses your past marks,
          builds an adaptive timetable, teaches chapter by chapter, and verifies your readiness.
        </p>
      </div>

      {/* Step Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#ced4da]/10">
        {steps.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(idx)}
            className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
              activeStep === idx
                ? 'bg-[#f8f9fa] text-[#111317] font-medium border border-white shadow-sm'
                : 'text-[#adb5bd] hover:text-[#f8f9fa] bg-[#30343f]/30 hover:bg-[#30343f]/60'
            }`}
          >
            {s.title.split('—')[0].trim()}
          </button>
        ))}
      </div>

      {/* Active Step Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Editorial Explanation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono text-[#adb5bd]">
            Phase 0{activeStep + 1} of 0{steps.length}
          </div>
          <h3 className="text-2xl font-normal tracking-[-0.02em] text-[#fafaff]">
            {steps[activeStep].title}
          </h3>
          <p className="text-sm text-[#e9ecef] font-normal leading-relaxed">
            {steps[activeStep].subtitle}
          </p>
          <p className="text-xs text-[#adb5bd] font-light leading-relaxed pt-2">
            {steps[activeStep].summary}
          </p>
        </div>

        {/* Right Column: Physical Demonstration Visual */}
        <div className="lg:col-span-7">
          {steps[activeStep].visual}
        </div>
      </div>
    </section>
  );
};
