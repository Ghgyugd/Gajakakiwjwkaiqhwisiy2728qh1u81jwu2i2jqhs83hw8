import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import { ArrowRight, CheckCircle2, Star, Sparkles, TrendingUp, BookOpen, Clock, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollProgress, scrollTo, triggerImpulse } = useExperience();

  // Target calibration simulation state
  const [selectedGoal, setSelectedGoal] = useState<'jee' | 'neet' | 'cbse' | 'dsa'>('jee');
  const [studyHours, setStudyHours] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState(false);

  // Gentle spatial translation as Lenis smoothly advances
  const opacity = Math.max(0, 1 - scrollProgress * 3.8);
  const translateY = scrollProgress * -35;

  const goalData = {
    jee: {
      label: 'JEE',
      tag: 'JEE Advanced · AIR 150 Target',
      baseline: 'Current Rank: ~2,400',
      target: 'Target Rank: Top 150',
      highYield: '14 Core Archetypes (78% Score Weight)',
      todayFocus: 'Rotational Dynamics: Angular Momentum Conservation Proofs',
      timeSaved: `${Math.round(studyHours * 4.5)} hrs/week on low-yield topics`,
      scoreGain: `+${26 + studyHours * 4} Marks projected from 14 high-yield topic derivations`,
    },
    neet: {
      label: 'NEET',
      tag: 'NEET UG · 690+ Target',
      baseline: 'Current Score: 580',
      target: 'Target Score: 695',
      highYield: '18 High-Yield Subtopics (84% Weight)',
      todayFocus: 'Genetics: Dihybrid Cross Linkage & Pedigree Analysis',
      timeSaved: `${Math.round(studyHours * 5)} hrs/week on low-yield topics`,
      scoreGain: `+${85 + studyHours * 10} Marks projected across 18 high-yield chapters`,
    },
    cbse: {
      label: 'CBSE',
      tag: 'CBSE Class 12 Board · 98% Target',
      baseline: 'Current Score: 81%',
      target: 'Target Score: 98%',
      highYield: '9 Derivations (82% 5-Marker Weight)',
      todayFocus: 'Electromagnetic Induction: AC Generator EMF Equation',
      timeSaved: `${Math.round(studyHours * 3.5)} hrs/week on low-yield topics`,
      scoreGain: `+${12 + studyHours * 2}% marks projected from 9 core proofs`,
    },
    dsa: {
      label: 'DSA / Skill',
      tag: 'Systems & DSA · Senior L6 Target',
      baseline: 'Current: Senior Mid',
      target: 'Target: Staff / L6 Architect',
      highYield: '11 Distributed Consensus Archetypes',
      todayFocus: 'Raft Protocol: Log Compaction & Leader Election Split-Brain',
      timeSaved: `${Math.round(studyHours * 4)} hrs/week on low-yield topics`,
      scoreGain: `${(2.2 + studyHours * 0.5).toFixed(1)}x faster systems engineering mastery`,
    },
  };

  const current = goalData[selectedGoal];

  const handleGoalSwitch = (key: 'jee' | 'neet' | 'cbse' | 'dsa') => {
    setSelectedGoal(key);
    setIsSimulating(true);
    triggerImpulse(0.8);
    setTimeout(() => setIsSimulating(false), 300);
  };

  return (
    <section className="min-h-screen relative flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 select-none pt-36 pb-36">
      <div
        className="transition-transform duration-100 ease-out grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        style={{
          opacity,
          transform: `translate3d(0px, ${translateY}px, 0px)`,
        }}
      >
        {/* LEFT COLUMN: Monumental Editorial Narrative & High-Converting Value Prop */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Luxury Floating Pill Badge with Soft Lavender Glow Dot */}
          <div className="mb-6 veldrin-pill-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
            <span className="font-sans text-xs tracking-normal font-normal text-[#F5F5F7]">
              <strong className="font-medium text-[#FFFFFF]">80% of exam marks</strong> come from 20% of your syllabus. <span className="text-[#B9AEFF]">Stop studying blindly.</span>
            </span>
          </div>

          {/* High-Converting H1 Headline with Tight Tracking */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-[-0.03em] leading-[1.06] mb-6 text-[#FFFFFF] font-heading">
            <span>Bridge the gap between </span>
            <span className="text-[rgba(245,245,247,0.62)] font-normal">what you know and </span>
            <span className="text-[#B9AEFF] font-medium">the rank your next exam demands.</span>
          </h1>

          {/* Subheadline with Direct Outcome & Value Delivery */}
          <p className="text-base sm:text-lg text-[rgba(245,245,247,0.62)] max-w-xl leading-relaxed font-light mb-9">
            Upload your textbook or previous report card. Veldrin isolates your weak concepts, builds a self-healing daily timetable, and teaches you down to the exact page number of your own book.
          </p>

          {/* High-Converting Glassmorphism Glow Primary CTA Button */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <button
              onClick={() => {
                triggerImpulse(1.0);
                scrollTo('#get-started');
              }}
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 flex items-center gap-2.5 bg-[#FFFFFF] text-[#030407] hover:bg-[#F5F5F7] hover:scale-[1.02] active:scale-[0.99] shadow-[0_0_35px_rgba(185,174,255,0.4),0_10px_25px_rgba(0,0,0,0.6)] border border-[#ffffff]"
            >
              <span>Calibrate My Syllabus Free</span>
              <ArrowRight className="w-4 h-4 ml-0.5 text-[#030407]" />
            </button>
            <button
              onClick={() => {
                triggerImpulse(0.7);
                scrollTo('#why-not-chatgpt');
              }}
              className="veldrin-btn-secondary px-6 py-3.5 text-sm font-medium cursor-pointer"
            >
              <span>Why Not ChatGPT?</span>
            </button>
          </div>

          {/* Micro-Trust Line */}
          <div className="flex items-center gap-2 text-xs text-[rgba(245,245,247,0.5)] font-light mb-10">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B9AEFF]" />
            <span>✓ Free 7-Day Access · No Credit Card Required · Instant Diagnostic</span>
          </div>

          {/* Social Proof Placed Before the First Scroll */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[rgba(245,245,247,0.5)] w-full">
            <div className="flex items-center gap-2 text-[#FFFFFF] font-medium">
              <div className="flex -space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[10px] text-[#FFFFFF]">V</div>
                <div className="w-6 h-6 rounded-full bg-[#1e2749] border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[10px] text-[#FFFFFF]">A</div>
                <div className="w-6 h-6 rounded-full bg-[#30343f] border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[10px] text-[#FFFFFF]">R</div>
              </div>
              <div className="flex items-center ml-1.5 text-[#B9AEFF]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <span className="font-light">
              Calibrating <strong className="font-medium text-[#F5F5F7]">14,800+ active learners</strong> across CBSE, JEE, NEET &amp; universities
            </span>
            <span className="hidden sm:inline-block text-[rgba(255,255,255,0.2)]">·</span>
            <span className="font-mono text-[11px] text-[#B9AEFF]">
              +34% avg score gain in 30 days
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Luxury Tech Translucent Console — Realtime Trajectory Engine */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-3xl veldrin-glass-card p-6 sm:p-8 relative overflow-hidden">
            {/* Top Device Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-ping" />
                <span className="text-[#F5F5F7] font-mono font-medium tracking-wider uppercase text-[11px]">
                  Trajectory Calibrator
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#B9AEFF] px-2.5 py-0.5 rounded-full bg-[rgba(185,174,255,0.08)] border border-[rgba(185,174,255,0.2)]">
                v4.8 Active
              </span>
            </div>

            {/* Interactive Goal Switcher Tabs: [JEE] [NEET] [CBSE] [DSA / Skill] */}
            <div className="mt-5 mb-4">
              <div className="text-[10px] uppercase tracking-wider text-[rgba(245,245,247,0.5)] font-mono mb-2">
                Target Exam / Benchmark
              </div>
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-[rgba(3,4,7,0.7)] border border-[rgba(255,255,255,0.08)]">
                {(['jee', 'neet', 'cbse', 'dsa'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleGoalSwitch(key)}
                    className={`py-2 px-1 text-xs font-mono rounded-lg transition-all cursor-pointer text-center truncate ${
                      selectedGoal === key
                        ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-sm'
                        : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.05)]'
                    }`}
                  >
                    {goalData[key].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Study Hours Slider for Realtime Projection */}
            <div className="mb-4 p-3.5 rounded-2xl bg-[rgba(3,4,7,0.6)] border border-[rgba(255,255,255,0.06)]">
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-[rgba(245,245,247,0.62)] font-light">Daily Study Commitment:</span>
                <span className="text-[#B9AEFF] font-medium">{studyHours} Hours / Day</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={studyHours}
                onChange={(e) => {
                  setStudyHours(Number(e.target.value));
                  triggerImpulse(0.5);
                }}
                className="w-full accent-[#B9AEFF] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[rgba(245,245,247,0.4)] font-mono mt-1">
                <span>1 hr (Light)</span>
                <span>4 hrs (Target)</span>
                <span>8 hrs (Intensive)</span>
              </div>
            </div>

            {/* Dynamic Trajectory Readout */}
            <div className={`space-y-3.5 transition-opacity duration-300 ${isSimulating ? 'opacity-40' : 'opacity-100'}`}>
              {/* Active Calibration Header */}
              <div className="p-4 rounded-2xl bg-[rgba(30,39,73,0.35)] border border-[rgba(185,174,255,0.25)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
                <div>
                  <span className="text-[10px] font-mono text-[#B9AEFF] uppercase tracking-wider block">BENCHMARK CALIBRATED</span>
                  <span className="text-sm font-medium text-[#FFFFFF]">{current.tag}</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] font-mono text-[rgba(245,245,247,0.5)] uppercase tracking-wider block">LIVE PROJECTION</span>
                  <span className="text-xs font-mono font-semibold text-[#B9AEFF]">{current.scoreGain}</span>
                </div>
              </div>

              {/* The 20/80 High-Yield Extraction Engine */}
              <div className="p-3.5 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[rgba(245,245,247,0.62)] font-light flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#B9AEFF]" />
                    High-Yield 20% Topic Extraction
                  </span>
                  <span className="font-mono text-[#FFFFFF] text-[11px]">80% Impact Isolated</span>
                </div>
                <div className="text-xs font-medium text-[#F5F5F7] mb-2">{current.highYield}</div>
                <div className="w-full h-1.5 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-[#FFFFFF] rounded-full w-[80%]" />
                </div>
              </div>

              {/* Today's Prioritized Daily Session */}
              <div className="p-3.5 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[rgba(245,245,247,0.62)] font-light flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B9AEFF]" />
                    Today&apos;s Highest-Yield Sprint
                  </span>
                  <span className="font-mono text-[#B9AEFF] text-[10px] px-2 py-0.5 rounded-full bg-[rgba(185,174,255,0.08)] border border-[rgba(185,174,255,0.2)]">
                    Day 01
                  </span>
                </div>
                <div className="text-xs text-[#FFFFFF] font-medium leading-snug">
                  {current.todayFocus}
                </div>
                <div className="mt-2 text-[11px] text-[rgba(245,245,247,0.5)] font-mono">
                  Saves {current.timeSaved}
                </div>
              </div>

              {/* Instant Action CTA inside Console */}
              <button
                onClick={() => {
                  triggerImpulse(1.0);
                  scrollTo('#get-started');
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F5F5F7] text-[#030407] text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-[0_0_25px_rgba(185,174,255,0.2)]"
              >
                <span>Calibrate My Syllabus for {current.label} Free</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#030407] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Center-Aligned Scroll Cue with Mouse Middle Button Icon */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300 flex flex-col items-center gap-2 text-xs text-[#adb5bd] font-light"
        style={{ opacity }}
        aria-hidden="true"
      >
        {/* Tactile Computer Mouse with Middle Button Scroll Wheel */}
        <div className="relative w-5 h-8 rounded-full border border-[#ced4da]/40 flex justify-center pt-1.5 shadow-sm">
          {/* Mouse Divider Line */}
          <div className="absolute top-0 w-[1px] h-3 bg-[#ced4da]/20" />
          {/* Animated Middle Scroll Wheel Button */}
          <div className="w-1 h-2 bg-[#fafaff] rounded-full animate-bounce shadow-[0_0_8px_rgba(250,250,255,0.8)]" />
        </div>
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#adb5bd]">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};
