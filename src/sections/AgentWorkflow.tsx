import React, { useState } from 'react';
import { Play, CheckCircle2, ChevronRight, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';
import { useExperience } from '../hooks/useExperience';

export const AgentWorkflow: React.FC = () => {
  const { triggerImpulse } = useExperience();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2);

  const workflowSteps = [
    {
      id: 'step1',
      num: '01',
      title: 'Inspect Exam Blueprint & Syllabus Weightage',
      status: 'VERIFIED',
      tool: 'syllabus_parser.wasm',
      detail:
        'Parsed official board scheme. Isolated 3 dominant scoring domains: Optics (14 Marks), Modern Physics (12 Marks), Electromagnetism (16 Marks). Flagged 9 high-frequency 5-marker derivations.',
      output: 'Weightage matrix constructed · 20% topic subset mapped to 82% scoring potential.',
    },
    {
      id: 'step2',
      num: '02',
      title: 'Retrieve Past Mock Diagnostics & Error Logs',
      status: 'VERIFIED',
      tool: 'diagnostic_engine.ts',
      detail:
        'Queried student’s last 3 mock test submissions. Pinpointed root mark losses: Ray Optics sign conventions (-4 marks) and Lenz’s law negative sign direction proofs (-5 marks).',
      output: 'Isolated failure points at formula level · Spaced revision drills queued.',
    },
    {
      id: 'step3',
      num: '03',
      title: 'Synthesize Adaptive 21-Day Schedule & Drill Sets',
      status: 'EXECUTING',
      tool: 'adaptive_scheduler.ts',
      detail:
        'Calculated spaced retrieval intervals across 21 days. Front-loaded high-weight weak topics into Day 1–5 high-energy morning study blocks. Auto-allocated catch-up buffer for unexpected delays.',
      output: 'Dynamic 21-day calendar synthesized · 4 board-pattern diagnostic exams compiled.',
    },
    {
      id: 'step4',
      num: '04',
      title: 'Formal Invariant & Grounding Check',
      status: 'STANDBY',
      tool: 'provenance_verifier.wasm',
      detail:
        'Cross-checks every question against official marking rubrics and NCERT textbook citations before surfacing to student.',
      output: 'Zero ungrounded assertions · Full rubric conformance guaranteed.',
    },
  ];

  return (
    <section className="min-h-screen py-28 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Chapter Lead */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2749]/40 border border-[#ced4da]/16 text-xs text-[#e4d9ff] font-mono mb-4">
          <span>CHAPTER 10</span>
          <span className="text-[#6c757d]">·</span>
          <span>MULTI-STEP INTELLIGENCE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#f8f9fa] leading-[1.1] mb-6">
          Plans, inspects, and finishes the task.
        </h2>
        <p className="text-base sm:text-lg text-[#ced4da] leading-relaxed font-light">
          Instead of offering a single superficial answer, Veldrin evaluates your goal, decomposes it into sequential steps,
          executes verification tools, checks the result against official marking rubrics, and refines until the objective is solved.
        </p>
      </div>

      {/* Visual Multi-Step Execution Trace Terminal */}
      <div className="rounded-2xl bg-[#212529]/40 border border-[#ced4da]/18 p-7 sm:p-9 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
        {/* Terminal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs gap-2 mb-6">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-4 h-4 text-[#e4d9ff]" />
            <span className="text-[#adb5bd] font-mono">User Objective:</span>
            <span className="text-[#fafaff] font-medium font-sans">
              “Build a 21-day board exam revision blueprint for Physics”
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e4d9ff] animate-pulse" />
            <span className="text-[#e4d9ff] font-mono text-[11px]">Autonomous Multi-Step Trace</span>
          </div>
        </div>

        {/* Interactive Step Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps List */}
          <div className="lg:col-span-5 space-y-3">
            {workflowSteps.map((s, idx) => {
              const isSelected = activeStepIndex === idx;

              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    triggerImpulse();
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1e2749]/40 border-[#ced4da]/30 shadow-md text-[#fafaff]'
                      : 'bg-[#050608]/60 border-[#ced4da]/10 text-[#adb5bd] hover:bg-[#212529]/60 hover:text-[#f8f9fa]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#e4d9ff]">{s.num}</span>
                    <span className="text-xs font-medium font-sans truncate max-w-[210px] sm:max-w-[260px]">
                      {s.title}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      s.status === 'VERIFIED'
                        ? 'bg-[#273469]/50 text-[#e4d9ff] border border-[#ced4da]/15'
                        : s.status === 'EXECUTING'
                        ? 'bg-[#30343f] text-[#fafaff] border border-[#ced4da]/20'
                        : 'bg-[#212529] text-[#6c757d]'
                    }`}
                  >
                    {s.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details & Output Inspection */}
          <div className="lg:col-span-7 p-6 rounded-xl bg-[#050608]/80 border border-[#ced4da]/14">
            <div className="flex items-center justify-between pb-3 border-b border-[#ced4da]/10 text-xs mb-4">
              <span className="font-mono text-[#adb5bd]">
                Step {workflowSteps[activeStepIndex].num} Tool Call:
              </span>
              <span className="font-mono text-[11px] text-[#e4d9ff]">
                {workflowSteps[activeStepIndex].tool}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-[#fafaff] mb-1.5 font-sans">
                  {workflowSteps[activeStepIndex].title}
                </h4>
                <p className="text-xs text-[#ced4da] font-light leading-relaxed font-sans">
                  {workflowSteps[activeStepIndex].detail}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1e2749]/35 border border-[#ced4da]/14 font-mono text-xs text-[#fafaff]">
                <div className="text-[10px] uppercase text-[#e4d9ff] mb-1">Execution Output</div>
                <p className="text-[#dee2e6]">{workflowSteps[activeStepIndex].output}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
