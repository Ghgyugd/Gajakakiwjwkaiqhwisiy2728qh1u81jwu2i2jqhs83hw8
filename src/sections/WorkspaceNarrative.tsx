import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import { LayoutGrid, Command, Terminal, Search, Calculator, Layers, ArrowRight } from 'lucide-react';

export const WorkspaceNarrative: React.FC = () => {
  const { triggerImpulse, scrollTo } = useExperience();
  const [activeTool, setActiveTool] = useState<'search' | 'math' | 'code' | 'artifact'>('math');

  const toolDemonstrations = {
    search: {
      tool: 'web_search_grounding.wasm',
      action: 'Fetch latest 2025/2026 board circulars & marking scheme changes',
      output: 'Retrieved CBSE Circular #2026/04: 50% competency-based question weighting enforced.',
    },
    math: {
      tool: 'symbolic_calculus_engine.py',
      action: 'Verify curl of magnetic vector potential: ∇ × A = B',
      output: 'Symbolic proof complete: Gauge condition ∇ · A = 0 verified. Dimensions match Tesla-meters.',
    },
    code: {
      tool: 'python_sandbox_runtime',
      action: 'Run Monte Carlo simulation of thermal electron drift velocity',
      output: 'Simulation converged: v_d = 1.42 × 10⁻⁴ m/s at E = 100 V/m. 0 runtime errors.',
    },
    artifact: {
      tool: 'artifact_compiler.tsx',
      action: 'Compile interactive React sandbox for LC oscillations',
      output: 'Component mounted: Frequency f = 1 / (2π√LC) rendered with interactive charge graph.',
    },
  };

  const active = toolDemonstrations[activeTool];

  return (
    <section id="workspace" className="py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
      <div className="mb-6 veldrin-pill-badge">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
        <LayoutGrid className="w-3.5 h-3.5 text-[#B9AEFF]" />
        <span>STAGE 06 · UNIFIED MULTI-TOOL WORKSPACE</span>
      </div>

      {/* Editorial Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] font-heading">
            An intelligent environment around daily work.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
            Not a chat window that resets every morning. Veldrin maintains persistent notes, executes code, verifies derivations, and creates living artifacts in one unified canvas.
          </p>
        </div>
      </div>

      {/* Realistic Product Interface — Unified Workspace Command Bar & Tools */}
      <div className="rounded-3xl veldrin-glass-card p-6 sm:p-9 shadow-2xl relative overflow-hidden">
        {/* Mock Command Palette */}
        <div className="p-4 rounded-2xl bg-[rgba(3,4,7,0.85)] border border-[rgba(255,255,255,0.08)] flex items-center justify-between mb-8 shadow-inner">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-[rgba(245,245,247,0.6)]">
            <Command className="w-4 h-4 text-[#B9AEFF]" />
            <span className="text-[#FFFFFF] font-mono">
              “Derive mutual inductance of solenoids and plot flux linkage graph”
            </span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[rgba(185,174,255,0.08)] text-[#B9AEFF] border border-[rgba(185,174,255,0.2)]">
            Auto-Delegating
          </span>
        </div>

        {/* Multi-Tool Delegation Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <button
            onClick={() => {
              setActiveTool('math');
              triggerImpulse(0.7);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
              activeTool === 'math'
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'bg-[rgba(18,22,31,0.5)] hover:bg-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.6)] border border-[rgba(255,255,255,0.06)]'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Symbolic Calculus</span>
          </button>
          <button
            onClick={() => {
              setActiveTool('code');
              triggerImpulse(0.7);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
              activeTool === 'code'
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'bg-[rgba(18,22,31,0.5)] hover:bg-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.6)] border border-[rgba(255,255,255,0.06)]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Python Sandbox</span>
          </button>
          <button
            onClick={() => {
              setActiveTool('search');
              triggerImpulse(0.7);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
              activeTool === 'search'
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'bg-[rgba(18,22,31,0.5)] hover:bg-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.6)] border border-[rgba(255,255,255,0.06)]'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Web Grounding</span>
          </button>
          <button
            onClick={() => {
              setActiveTool('artifact');
              triggerImpulse(0.7);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
              activeTool === 'artifact'
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'bg-[rgba(18,22,31,0.5)] hover:bg-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.6)] border border-[rgba(255,255,255,0.06)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Artifact Compiler</span>
          </button>
        </div>

        {/* Active Tool Live Readout */}
        <div className="p-5 rounded-2xl bg-[rgba(3,4,7,0.8)] border border-[rgba(255,255,255,0.06)] space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center text-[rgba(245,245,247,0.5)] pb-2 border-b border-[rgba(255,255,255,0.06)]">
            <span className="text-[#B9AEFF]">Invoked: {active.tool}</span>
            <span>Status: Executed in 140ms</span>
          </div>
          <div>
            <span className="text-[rgba(245,245,247,0.5)] block mb-1">Subtask Action:</span>
            <span className="text-[#FFFFFF] font-sans text-sm font-medium">{active.action}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[rgba(30,39,73,0.35)] border border-[rgba(185,174,255,0.2)] text-[#F5F5F7]">
            {active.output}
          </div>
        </div>
      </div>
    </section>
  );
};
