import React, { useState } from 'react';
import { Compass, GitBranch, Terminal, Share2 } from 'lucide-react';

export const LearnNarrative: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'define-goal',
      title: '1. Define the Goal — Beyond a Fixed Syllabus',
      subtitle: 'Study without a board exam. Learn languages, engineering, or new domains on your own terms.',
      summary:
        'Not everyone is in a school classroom. When mastering Data Structures & Algorithms, systems architecture, or an unfamiliar subject, you bring whatever material you want, and Veldrin structures it into an ordered, goal-driven mastery sequence.',
      icon: Compass,
      visual: (
        <div className="p-6 rounded-xl bg-[#30343f]/30 border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs text-[#adb5bd]">
            <span>Goal Definition: Distributed Systems Engineering</span>
            <span className="text-[#fafaff] font-mono">Self-Directed Track</span>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="p-3.5 rounded-lg bg-[#212529]/60 border border-[#ced4da]/14">
              <span className="text-[#e4d9ff] font-mono text-[11px] block mb-1">Target Invariant</span>
              <p className="text-[#fafaff] font-medium">Memory Models, Cache Coherency &amp; Hardware Atomicity</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#273469]/25 border border-[#ced4da]/18">
              <span className="text-[#ced4da] font-mono text-[11px] block mb-1">Advanced Milestone</span>
              <p className="text-[#fafaff] font-medium">Lock-Free Concurrent Queues &amp; Compare-And-Swap Algorithms</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'adaptive-path',
      title: '2. Build an Adaptive Path — Flexible Pacing',
      subtitle: 'A schedule built around your actual hours, not an arbitrary school calendar.',
      summary:
        'Your timetable flexes around whatever time you actually have. Veldrin schedules deep-work study blocks, revision checkpoints, and practice sets that adapt whether you have 30 minutes on a weekday or four hours on a weekend.',
      icon: GitBranch,
      visual: (
        <div className="p-6 rounded-xl bg-[#30343f]/30 border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs text-[#adb5bd]">
            <span>Dynamic Goal Schedule</span>
            <span className="text-[#fafaff] font-mono">12-Week Milestone Arc</span>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="p-3.5 rounded-lg bg-[#212529]/60 border border-[#ced4da]/12">
              <span className="text-[#adb5bd] text-[11px] block mb-1">Week 03 Focus</span>
              <p className="text-[#dee2e6] font-light leading-relaxed">
                Hardware page-size boundaries vs B-Trees. Deconstruct why fanout reduces disk seek latency to 3–4 I/Os.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#273469]/30 border border-[#e4d9ff]/25">
              <span className="text-[#e4d9ff] text-[11px] font-medium block mb-1">Adaptive Pacing Update</span>
              <p className="text-[#fafaff] font-light leading-relaxed">
                Benchmark completed early: Next session auto-promoted to consensus protocols (Raft &amp; Paxos).
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'practice-create',
      title: '3. Learn / Practice / Create — Bare-Metal Scaffolding',
      subtitle: 'Real executable code verification and interactive sandboxes instead of passive videos.',
      summary:
        'Watching someone else code does not build intuition. Veldrin generates live code benchmarks, pointer manipulation exercises, and interactive memory simulations where you verify algorithmic invariants directly.',
      icon: Terminal,
      visual: (
        <div className="p-6 rounded-xl bg-[#212529] border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#ced4da]/12 text-xs">
            <div className="flex items-center gap-2 text-[#dee2e6]">
              <Terminal className="w-3.5 h-3.5 text-[#e4d9ff]" />
              <span className="font-mono">dsa_benchmark.cpp</span>
            </div>
            <span className="text-[#fafaff] font-mono text-[11px]">0 Data Races Detected</span>
          </div>
          <div className="mt-4 font-mono text-xs text-[#dee2e6] space-y-1 bg-[#212529]/90 p-4 rounded-lg border border-[#ced4da]/10">
            <p className="text-[#adb5bd]">// Benchmarking Lock-Free Treiber Stack vs Mutex</p>
            <p><span className="text-[#e4d9ff]">auto</span> start = chrono::high_resolution_clock::now();</p>
            <p><span className="text-[#fafaff]">atomic_compare_exchange_weak</span>(&amp;head, &amp;old_head, new_node);</p>
            <p className="text-[#ced4da] pt-2">// Throughput: 14.8M ops/sec (3.4x faster than std::mutex)</p>
          </div>
        </div>
      ),
    },
    {
      id: 'learning-workspace',
      title: '4. Flexible Learning Workspace — Transfer Knowledge',
      subtitle: 'Reveals structural patterns across domains so ideas transfer permanently.',
      summary:
        'True expertise is transfer. Veldrin’s knowledge lattice bridges paradigms—showing how backpressure in reactive distributed streams mirrors capillary resistance in human physiology, cementing the concept forever.',
      icon: Share2,
      visual: (
        <div className="p-6 rounded-xl bg-[#30343f]/30 border border-[#ced4da]/15 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs text-[#adb5bd]">
            <span>Knowledge Bridge: Structural Isomorphism</span>
            <span className="text-[#fafaff] font-mono">Cross-Disciplinary</span>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#212529]/60 border border-[#ced4da]/12">
                <span className="text-[#adb5bd] text-[11px] block mb-1">Software Architecture</span>
                <span className="text-[#fafaff] font-medium block">Reactive Backpressure</span>
                <span className="text-[#ced4da] text-[11px] font-light">Downstream buffers throttle upstream sources.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#212529]/60 border border-[#ced4da]/12">
                <span className="text-[#adb5bd] text-[11px] block mb-1">Biological Physiology</span>
                <span className="text-[#fafaff] font-medium block">Arterial Resistance</span>
                <span className="text-[#ced4da] text-[11px] font-light">Capillary beds restrict flow to prevent rupture.</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#273469]/25 border border-[#e4d9ff]/20 text-[11px] text-[#dee2e6] leading-relaxed">
              Synthesized Invariant: Both architectures protect capacity limits by shifting latency to producer boundaries.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="learn" className="min-h-screen py-28 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Chapter Lead */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2749]/40 border border-[#ced4da]/16 text-xs text-[#e4d9ff] font-mono mb-4">
          <span>CHAPTER 05</span>
          <span className="text-[#6c757d]">·</span>
          <span>THE AUTONOMOUS LEARNER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#f8f9fa] leading-[1.1] mb-6">
          For Independent Learners — Master complex systems on your own terms.
        </h2>
        <p className="text-base sm:text-lg text-[#ced4da] leading-relaxed font-light">
          When pursuing concepts outside a fixed classroom curriculum—from Data Structures &amp; Algorithms to distributed consensus protocols—Veldrin builds an adaptive milestone arc, provides bare-metal scaffolding, and accelerates transfer.
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

        <div className="lg:col-span-7">
          {steps[activeStep].visual}
        </div>
      </div>
    </section>
  );
};
