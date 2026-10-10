import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, BookX, Compass, RefreshCw, Zap } from 'lucide-react';

export const ProblemStage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'fragmented' | 'continuous'>('comparison');

  return (
    <section id="problem" className="min-h-screen py-28 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Editorial Chapter Header with Scale Contrast */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2749]/40 border border-[#ced4da]/16 text-xs text-[#e4d9ff] font-mono mb-4">
          <span>CHAPTER 01</span>
          <span className="text-[#6c757d]">·</span>
          <span>THE STRUCTURAL BREAKDOWN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#f8f9fa] leading-[1.1] mb-6">
          The dilemma is not a lack of content.{' '}
          <span className="text-[#adb5bd] font-light">It is knowing what deserves your mind today.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#ced4da] leading-relaxed font-light">
          Whether preparing for JEE, CBSE boards, NEET, or deep systems engineering, learners are trapped in a cycle of disconnected chats, abandoned static timetables, and random question grinding.
        </p>
      </div>

      {/* Side-by-Side Asymmetric Spatial Contrast */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT PANE: The Fragmented Scatter (The Bleeding Loop) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#212529]/30 border border-[#ced4da]/12 p-7 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-[#30343f]/60 text-[10px] font-mono text-[#adb5bd] border-b border-l border-[#ced4da]/10">
            CURRENT REALITY · FRAGMENTED
          </div>

          <div>
            <div className="w-10 h-10 rounded-xl bg-[#30343f]/50 border border-[#ced4da]/15 flex items-center justify-center text-[#adb5bd] mb-6">
              <BookX className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-[#f8f9fa] mb-3">
              The Disconnected Grinding Loop
            </h3>
            <p className="text-sm text-[#adb5bd] font-light leading-relaxed mb-6">
              You jump between 30 browser tabs, 4 unorganized PDF books, and blank AI chat prompts that reset every night.
            </p>

            {/* Pain Points Micro-Visualizer */}
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#050608]/60 border border-[#ced4da]/10 flex items-start gap-3 text-[#adb5bd]">
                <span className="text-[#6c757d] font-bold">✕</span>
                <div>
                  <span className="text-[#dee2e6] font-medium block">Static Timetables Collapse</span>
                  <span className="text-[#6c757d] font-sans text-[11px]">
                    One missed lecture destroys the schedule; no automatic reallocation occurs.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#050608]/60 border border-[#ced4da]/10 flex items-start gap-3 text-[#adb5bd]">
                <span className="text-[#6c757d] font-bold">✕</span>
                <div>
                  <span className="text-[#dee2e6] font-medium block">Blank Chat Memory Wipe</span>
                  <span className="text-[#6c757d] font-sans text-[11px]">
                    Generic LLMs forget your textbooks, mock test mark sheets, and past mistakes.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#050608]/60 border border-[#ced4da]/10 flex items-start gap-3 text-[#adb5bd]">
                <span className="text-[#6c757d] font-bold">✕</span>
                <div>
                  <span className="text-[#dee2e6] font-medium block">The Diagnostic Blackhole</span>
                  <span className="text-[#6c757d] font-sans text-[11px]">
                    Grinding 100 questions without knowing which 20% actually appear on exam day.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-[#ced4da]/10 flex items-center justify-between text-xs text-[#6c757d] font-mono">
            <span>Result: Stagnant rank trajectory</span>
            <span>-32% study efficiency</span>
          </div>
        </div>

        {/* RIGHT PANE: The Veldrin Continuous Environment */}
        <div className="lg:col-span-7 rounded-2xl bg-[#1e2749]/25 border border-[#ced4da]/20 p-7 sm:p-8 backdrop-blur-2xl flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.7)] relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-[#273469]/50 text-[10px] font-mono text-[#e4d9ff] border-b border-l border-[#ced4da]/15">
            VELDRIN CONTINUOUS OS · ACTIVE
          </div>

          <div>
            <div className="w-10 h-10 rounded-xl bg-[#273469]/60 border border-[#ced4da]/20 flex items-center justify-center text-[#e4d9ff] mb-6">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-[#fafaff] mb-3">
              One Persistent Thread Around Your Work
            </h3>
            <p className="text-sm sm:text-base text-[#ced4da] font-light leading-relaxed mb-6">
              Veldrin wraps your textbooks, mock diagnostics, adaptive timetable, and tool execution into a living, unified canvas.
            </p>

            {/* The 4 Architectural Strata of Resolution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-4 rounded-xl bg-[#212529]/60 border border-[#ced4da]/14">
                <div className="flex items-center gap-2 mb-1.5 text-[#fafaff] font-medium font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e4d9ff]" />
                  01 // Syllabus Ingestion
                </div>
                <p className="text-[#adb5bd] font-light text-[11px] leading-relaxed">
                  Extracts board-specific marking schemes and isolates the high-yield 20% topics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#212529]/60 border border-[#ced4da]/14">
                <div className="flex items-center gap-2 mb-1.5 text-[#fafaff] font-medium font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e4d9ff]" />
                  02 // Adaptive Timetable
                </div>
                <p className="text-[#adb5bd] font-light text-[11px] leading-relaxed">
                  Nightly schedule rebuilding that heals missed sessions and factors regional exam dates.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#212529]/60 border border-[#ced4da]/14">
                <div className="flex items-center gap-2 mb-1.5 text-[#fafaff] font-medium font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e4d9ff]" />
                  03 // Error Trajectory Memory
                </div>
                <p className="text-[#adb5bd] font-light text-[11px] leading-relaxed">
                  Remembers your exact lost marks in derivations and rebuilds proofs from first principles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#212529]/60 border border-[#ced4da]/14">
                <div className="flex items-center gap-2 mb-1.5 text-[#fafaff] font-medium font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e4d9ff]" />
                  04 // Grounded Artifacts
                </div>
                <p className="text-[#adb5bd] font-light text-[11px] leading-relaxed">
                  Compiles chapter revision papers, interactive sandboxes, and formula sheets citing your textbook.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-[#ced4da]/12 flex flex-wrap items-center justify-between text-xs text-[#adb5bd]">
            <span className="flex items-center gap-2 text-[#fafaff] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#e4d9ff]" />
              Zero context evaporation across sessions
            </span>
            <span className="font-mono text-[#e4d9ff] text-[11px]">
              +34% avg score gain in 30 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
