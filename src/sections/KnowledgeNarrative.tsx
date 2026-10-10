import React, { useState } from 'react';
import { BookOpen, Brain, Network, FileCheck, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { useExperience } from '../hooks/useExperience';

export const KnowledgeNarrative: React.FC = () => {
  const { triggerImpulse } = useExperience();
  const [activeStage, setActiveStage] = useState<number>(0);

  const pipeline = [
    {
      stage: '01',
      title: 'Raw Document Ingestion',
      subtitle: 'Upload textbooks, research PDFs, ZIP packages, and course slides.',
      detail: 'Parses complex multi-column typography, mathematical notations, and diagram labels with zero OCR degradation.',
      icon: BookOpen,
      sample: {
        header: 'Document Processed',
        content: '“NCERT_Physics_Part1_Class12.pdf · 284 Pages parsed · 42 vector diagrams extracted.”',
        badge: 'Zero OCR Degradation',
      },
    },
    {
      stage: '02',
      title: 'Structural Decomposition',
      subtitle: 'Deconstructs chapters into concepts, prerequisites, and formulas.',
      detail: 'Extracts the underlying conceptual blueprint and matches it against target exam or board standards.',
      icon: Brain,
      sample: {
        header: 'Concept Topology',
        content: '“Isolated Chapter 6 into 7 Concept Nodes: Faraday Law -> Lenz Conservation -> Motional EMF -> Eddy Currents -> Solenoid Inductance.”',
        badge: 'Prerequisite Graph Mapped',
      },
    },
    {
      stage: '03',
      title: 'Semantic Graph Linkage',
      subtitle: 'Builds cross-reference indexes and persistent semantic links.',
      detail: 'Links formulas, historical exam appearances, code patterns, and page numbers into an interconnected memory bank.',
      icon: Network,
      sample: {
        header: 'Cross-Reference Index',
        content: '“Linked Equation 6.15 directly to 2018–2024 CBSE board questions and past-year mark loss error logs.”',
        badge: 'Bidirectional Linking',
      },
    },
    {
      stage: '04',
      title: 'Verified Grounded Output',
      subtitle: 'Generates tailored answers, practice exams, and interactive tools.',
      detail: 'Every explanation cites the exact source paragraph, creating an unshakeable grounded study experience.',
      icon: FileCheck,
      sample: {
        header: 'Grounded Output Synthesized',
        content: '“5-Marker practice test generated with full official rubric and page 214 citation.”',
        badge: 'Page-Linked Provenance',
      },
    },
  ];

  return (
    <section id="knowledge" className="min-h-screen py-28 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Chapter Lead */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2749]/40 border border-[#ced4da]/16 text-xs text-[#e4d9ff] font-mono mb-4">
          <span>CHAPTER 09</span>
          <span className="text-[#6c757d]">·</span>
          <span>THE KNOWLEDGE PIPELINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#f8f9fa] leading-[1.1] mb-6">
          From raw textbooks to structured understanding.
        </h2>
        <p className="text-base sm:text-lg text-[#ced4da] leading-relaxed font-light">
          Your textbooks and research papers should not sit as static files on a drive.
          Veldrin moves them through an active pipeline, turning inert pages into living intelligence.
        </p>
      </div>

      {/* Sequential Pipeline Flow Grid with Interactive Selection */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {pipeline.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = activeStage === idx;

          return (
            <button
              key={p.stage}
              onClick={() => {
                setActiveStage(idx);
                triggerImpulse();
              }}
              className={`p-6 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1e2749]/40 border-[#ced4da]/30 shadow-xl'
                  : 'bg-[#212529]/30 border-[#ced4da]/12 hover:bg-[#212529]/60 hover:border-[#ced4da]/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#adb5bd]">{p.stage}</span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#273469] text-[#e4d9ff] border border-[#ced4da]/30'
                        : 'bg-[#30343f]/50 text-[#ced4da] border border-[#ced4da]/12'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-[#fafaff] mb-1.5">{p.title}</h3>
                <p className="text-xs text-[#dee2e6] font-light leading-relaxed mb-3">{p.subtitle}</p>
              </div>
              <p className="text-[11px] text-[#adb5bd] font-light leading-relaxed pt-3 border-t border-[#ced4da]/10">
                {p.detail}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Stage Inspection Console */}
      <div className="p-7 rounded-2xl bg-[#212529]/40 border border-[#ced4da]/16 backdrop-blur-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-[#ced4da]/12 text-xs mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#e4d9ff]">Stage {pipeline[activeStage].stage} Live Demonstration:</span>
            <span className="text-[#fafaff] font-medium">{pipeline[activeStage].sample.header}</span>
          </div>
          <span className="font-mono text-[10px] text-[#adb5bd] px-2 py-0.5 rounded bg-[#30343f]/60 border border-[#ced4da]/12">
            {pipeline[activeStage].sample.badge}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#dee2e6] font-mono leading-relaxed bg-[#050608]/70 p-4 rounded-xl border border-[#ced4da]/10">
          {pipeline[activeStage].sample.content}
        </p>
      </div>
    </section>
  );
};
