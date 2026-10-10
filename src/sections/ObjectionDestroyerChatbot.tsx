import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Archive,
  Code2,
  ArrowRight,
  Sparkles,
  Bot,
  Cpu
} from 'lucide-react';

export const ObjectionDestroyerChatbot: React.FC = () => {
  const { triggerImpulse, scrollTo } = useExperience();
  const [activeScenario, setActiveScenario] = useState<'derivation' | 'memory' | 'artifact'>('derivation');

  const scenarios = {
    derivation: {
      label: 'Formula & Derivation Accuracy',
      genericHeadline: 'Hallucinates Steps & Skips Board Rubrics',
      genericDescription:
        'Generates plausible-sounding approximations from random internet blogs. Misses step-marking criteria mandated by examiners and cites non-existent formulas.',
      genericSample:
        '“To find the induced emf, just take derivative of flux. Signs don’t matter much unless asked, so E = dΦ/dt is generally fine.”',
      genericTag: 'Mark Penalty: -4 Marks on 5-Marker Board Exam',
      veldrinHeadline: 'NCERT Grounded to the Exact Page Number',
      veldrinDescription:
        'Reads your exact prescribed textbook. Cites Figure 6.4, Page 214. Enforces Lenz’s negative sign as an explicit conservation of energy premise.',
      veldrinSample:
        'NCERT Physics Pt. 1 · Page 214 (Section 6.4):\nε = - N · (dΦ/dt). Step 1 requires explicit statement of Lenz’s Law as energy conservation for the 1-mark foundation before mathematical steps.',
      veldrinTag: 'Board Calibrated: 5/5 Full Rubric Score',
    },
    memory: {
      label: 'Persistent Mistake Vault',
      genericHeadline: 'Zero Retention Across Sessions',
      genericDescription:
        'The moment you close the browser tab, the chat history resets into an endless unindexed scroll. Your weak areas are forgotten tomorrow.',
      genericSample:
        'Chat session ended.\nNext day: “Hello! How can I help you today?” (Has no record that you failed Lenz sign convention 14 hours ago).',
      genericTag: 'Weak spots repeat on actual exam day',
      veldrinHeadline: 'Automatic Mistake Vault & Spaced Recovery',
      veldrinDescription:
        'Every incorrect derivation step or missed test question is automatically filed into your private Mistake Vault, then re-injected into your daily timetable.',
      veldrinSample:
        'Mistake Vault Entry #142:\n“Lenz Law Energy Balance Premise”\nLogged: Tuesday 16:40 · Re-drill scheduled for Friday morning 07:30.',
      veldrinTag: 'Persistent Knowledge Graph Updated',
    },
    artifact: {
      label: 'Interactive Living Artifacts',
      genericHeadline: 'Static Walls of Markdown Text',
      genericDescription:
        'Dumps 800 words of static markdown paragraphs that numb your eyes. You cannot touch, simulate, or test the physics concept.',
      genericSample:
        '“In conclusion, Faraday’s law states that the induced electromotive force in any closed circuit is equal to the time rate of change of the magnetic flux through the circuit...”',
      genericTag: 'Passive reading: 12% 7-day retention',
      veldrinHeadline: 'Live Compiling React Sandboxes & Real Exams',
      veldrinDescription:
        'Spins up interactive sandboxes with real sliders for coil turns (N) and flux rate (dΦ/dt), so you can physically manipulate the concept until it clicks.',
      veldrinSample:
        'Artifact Compiled: <FaradayLenzSimulator />\nSlider active: N = 250 turns, dΦ/dt = 1.4 Wb/s → Realtime EMF: -350.0V rendered with live flux vector visualization.',
      veldrinTag: 'Active manipulation: 84% 7-day retention',
    },
  };

  const current = scenarios[activeScenario];

  return (
    <section id="why-not-chatgpt" className="py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Luxury Tech Floating Pill Badge with glowing dot */}
      <div className="mb-6 veldrin-pill-badge">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
        <span>OBJECTION DESTROYER 01 · NOT ANOTHER GENERIC AI CHATBOT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] font-heading">
            Why generic AI chatbots fail students on exam day.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
            ChatGPT and Claude are general conversational engines. Veldrin is an academic Learning OS engineered around textbook provenance, persistent mistake logging, and board mark rubrics.
          </p>
        </div>
      </div>

      {/* Scenario Segmented Switcher */}
      <div className="flex flex-wrap p-1.5 rounded-2xl bg-[rgba(18,22,31,0.6)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl gap-2 mb-12 max-w-2xl">
        {(['derivation', 'memory', 'artifact'] as const).map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveScenario(key);
              triggerImpulse(0.7);
            }}
            className={`flex-1 min-w-[170px] py-2.5 px-4 rounded-xl text-xs font-mono transition-all cursor-pointer text-center ${
              activeScenario === key
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            {scenarios[key].label}
          </button>
        ))}
      </div>

      {/* Side-by-Side Architectural Contrast Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Generic Chatbot (Pain / Failure Mode) */}
        <div className="lg:col-span-6 rounded-3xl veldrin-glass-card p-6 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(255,255,255,0.02)] rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.06)] text-xs mb-6">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-[rgba(245,245,247,0.4)]" />
                <span className="text-[rgba(245,245,247,0.5)] font-mono font-medium">Generic AI Chatbot (ChatGPT / Claude)</span>
              </div>
              <span className="text-[10px] font-mono text-[rgba(245,245,247,0.4)]">Passive Text Generation</span>
            </div>

            <div className="text-xl font-medium text-[#F5F5F7] mb-3 font-heading">
              {current.genericHeadline}
            </div>

            <p className="text-xs sm:text-sm text-[rgba(245,245,247,0.62)] font-light leading-relaxed mb-6">
              {current.genericDescription}
            </p>

            {/* Simulated Chat Bubble with Failure */}
            <div className="p-4 rounded-2xl bg-[rgba(3,4,7,0.7)] border border-[rgba(255,255,255,0.06)] space-y-2.5 font-mono text-xs text-[rgba(245,245,247,0.5)] mb-6">
              <div className="flex items-center gap-1.5 text-[10px] text-[rgba(245,245,247,0.4)] uppercase tracking-wider">
                <AlertTriangle className="w-3 h-3 text-[rgba(245,245,247,0.5)]" />
                <span>Simulated Chat Response</span>
              </div>
              <p className="font-sans text-xs text-[rgba(245,245,247,0.65)] leading-relaxed italic">
                {current.genericSample}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs font-mono text-[rgba(245,245,247,0.45)]">
            <span>{current.genericTag}</span>
          </div>
        </div>

        {/* Right Side: Veldrin Learning OS (Prescribed Textbook & Living Sandbox) */}
        <div className="lg:col-span-6 rounded-3xl veldrin-glass-card p-6 sm:p-9 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative ring-1 ring-[rgba(185,174,255,0.25)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(185,174,255,0.08)] rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] text-xs mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B9AEFF]" />
                <span className="text-[#FFFFFF] font-mono font-medium">Veldrin Learning OS</span>
              </div>
              <span className="text-[10px] font-mono text-[#B9AEFF] px-2.5 py-0.5 rounded-full bg-[rgba(185,174,255,0.08)] border border-[rgba(185,174,255,0.2)]">
                Exact Syllabus Grounded
              </span>
            </div>

            <div className="text-xl font-medium text-[#FFFFFF] mb-3 font-heading">
              {current.veldrinHeadline}
            </div>

            <p className="text-xs sm:text-sm text-[rgba(245,245,247,0.62)] font-light leading-relaxed mb-6">
              {current.veldrinDescription}
            </p>

            {/* Veldrin Physical Output Simulation */}
            <div className="p-4 rounded-2xl bg-[rgba(3,4,7,0.85)] border border-[rgba(185,174,255,0.2)] space-y-2.5 font-mono text-xs text-[#F5F5F7] mb-6 shadow-inner">
              <div className="flex items-center justify-between text-[10px] text-[#B9AEFF] uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#B9AEFF]" />
                  <span>Veldrin Verified Execution</span>
                </span>
                <span className="text-[9px] text-[rgba(245,245,247,0.5)]">100% Provenance</span>
              </div>
              <p className="font-mono text-xs text-[#FFFFFF] leading-relaxed whitespace-pre-line">
                {current.veldrinSample}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#B9AEFF]">
              {current.veldrinTag}
            </span>
            <button
              onClick={() => {
                triggerImpulse(0.85);
                scrollTo('#get-started');
              }}
              className="px-6 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#F5F5F7] text-[#030407] text-xs font-semibold cursor-pointer shrink-0 transition-all shadow-[0_0_20px_rgba(185,174,255,0.25)] flex items-center gap-1.5"
            >
              <span>Calibrate My Syllabus Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
