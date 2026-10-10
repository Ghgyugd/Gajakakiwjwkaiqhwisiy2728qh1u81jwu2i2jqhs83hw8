import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import { BookMarked, GitCompare, FileText, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const ResearchNarrative: React.FC = () => {
  const { triggerImpulse, scrollTo } = useExperience();
  const [activePaper, setActivePaper] = useState<'dao' | 'vaswani' | 'liu'>('dao');

  const papers = {
    dao: {
      title: 'FlashAttention: Fast & Memory-Efficient Exact Attention',
      authors: 'Dao et al. (Stanford / Meta)',
      hardware: 'GPU SRAM Tiling · O(N) Memory IO',
      claim: 'IO-awareness: computes exact softmax without materializing full N×N matrix in high-bandwidth memory (HBM).',
      math: 'Tiling block size B_c = ⌈M / 4d⌉, saving 5–10x memory traffic.',
      provenance: 'arXiv:2205.14135 · Section 3.2, Theorem 1',
    },
    vaswani: {
      title: 'Attention Is All You Need',
      authors: 'Vaswani et al. (Google Brain)',
      hardware: 'Standard Quadratic Attention · O(N²)',
      claim: 'Replaces recurrence entirely with multi-head self-attention mechanisms.',
      math: 'Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V',
      provenance: 'NeurIPS 2017 · Section 3.1, Equation 1',
    },
    liu: {
      title: 'RingAttention with Blockwise Transformers',
      authors: 'Liu et al. (UC Berkeley)',
      hardware: 'Distributed Ring Topology · 1M+ Context',
      claim: 'Distributes sequence across GPU ring by overlapping computation with communication.',
      math: 'Ring communication latency hidden under block attention FLOPs.',
      provenance: 'ICLR 2024 · Section 2.3, Algorithm 1',
    },
  };

  const current = papers[activePaper];

  return (
    <section id="research" className="py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
      <div className="mb-6 veldrin-pill-badge">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
        <BookMarked className="w-3.5 h-3.5 text-[#B9AEFF]" />
        <span>STAGE 05 · PRIMARY SOURCE SYNTHESIS</span>
      </div>

      {/* Editorial Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] font-heading">
            For serious research. Cross-examine hundreds of primary papers.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
            Not summaries—synthesis. Veldrin ingests dense literature, extracts mathematical claims, traces contradictions, and cites the exact theorem across publications.
          </p>
        </div>
      </div>

      {/* The Scholar's Synthesis Matrix Visualizer */}
      <div className="rounded-3xl veldrin-glass-card p-6 sm:p-9 shadow-2xl relative overflow-hidden">
        {/* Paper Ingestion Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4 mb-8">
          <div className="flex items-center gap-2">
            <GitCompare className="w-4 h-4 text-[#B9AEFF]" />
            <span className="text-xs font-mono font-medium text-[#FFFFFF]">
              Cross-Literature Synthesis Matrix (3 Papers Loaded)
            </span>
          </div>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[rgba(3,4,7,0.8)] border border-[rgba(255,255,255,0.08)]">
            {(['dao', 'vaswani', 'liu'] as const).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActivePaper(key);
                  triggerImpulse(0.7);
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  activePaper === key
                    ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-sm'
                    : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF]'
                }`}
              >
                {key.toUpperCase()} ET AL.
              </button>
            ))}
          </div>
        </div>

        {/* Paper Deconstruction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-6">
          {/* Paper Info & Claim */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-[rgba(3,4,7,0.7)] border border-[rgba(255,255,255,0.06)]">
              <div className="text-[10px] font-mono uppercase text-[#B9AEFF] mb-1">
                Deconstructed Manuscript
              </div>
              <h3 className="text-base font-medium text-[#FFFFFF] mb-1 font-heading">
                {current.title}
              </h3>
              <div className="text-xs text-[rgba(245,245,247,0.5)] font-mono mb-3">{current.authors}</div>
              <p className="text-xs text-[rgba(245,245,247,0.7)] font-light leading-relaxed">
                {current.claim}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[rgba(30,39,73,0.35)] border border-[rgba(185,174,255,0.25)]">
              <div className="text-[10px] font-mono uppercase text-[#B9AEFF] mb-1">
                Mathematical / Architectural Formulation
              </div>
              <code className="text-xs font-mono text-[#FFFFFF] block">
                {current.math}
              </code>
            </div>
          </div>

          {/* Cross-Paper Verification Matrix */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.06)] flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#B9AEFF] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B9AEFF]" />
                Cross-Literature Verification
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[rgba(3,4,7,0.6)] border border-[rgba(255,255,255,0.06)]">
                  <span className="text-[#F5F5F7] font-medium block mb-0.5">Hardware Invariant</span>
                  <span className="text-[rgba(245,245,247,0.62)] font-light text-[11px] font-mono">{current.hardware}</span>
                </div>
                <div className="p-3 rounded-xl bg-[rgba(3,4,7,0.6)] border border-[rgba(255,255,255,0.06)]">
                  <span className="text-[#F5F5F7] font-medium block mb-0.5">Strict Provenance</span>
                  <span className="text-[rgba(245,245,247,0.62)] font-light text-[11px] font-mono">{current.provenance}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-2 text-xs text-[#F5F5F7]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B9AEFF]" />
              <span>Full citation tree exportable to BibTeX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
