import React from 'react';
import { ExperienceProvider } from './hooks/useExperience';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { PathDiscovery } from './sections/PathDiscovery';
import { ObjectionDestroyerChatbot } from './sections/ObjectionDestroyerChatbot';
import { SyllabusDiagnosticStage } from './sections/SyllabusDiagnosticStage';
import { AdaptivePlannerStage } from './sections/AdaptivePlannerStage';
import { TextbookGroundingStage } from './sections/TextbookGroundingStage';
import { ArtifactsNarrative } from './sections/ArtifactsNarrative';
import { ResearchNarrative } from './sections/ResearchNarrative';
import { WorkspaceNarrative } from './sections/WorkspaceNarrative';
import { Pricing } from './sections/Pricing';
import { FinalCTA } from './sections/FinalCTA';

export default function App() {
  return (
    <ExperienceProvider>
      <div className="min-h-screen bg-[#030407] text-[#e9ecef] relative selection:bg-[#30343f] selection:text-[#fafaff]">
        {/* Continuous Flowing Metallic Dust Wave & Transformation Canvas with Ambient & Noise */}
        <ParticleCanvas />

        {/* Fixed Architectural Header Navigation */}
        <Navbar />

        {/* Continuous Vertical Editorial Journey (No Horizontal Divider Lines) */}
        <main className="relative z-10 flex flex-col">
          {/* 1. Hero: Monumental Headline + Live Syllabus Trajectory Calibrator */}
          <Hero />

          {/* 2. Path Discovery: The 4 Core Domains (Study, Learn, Research, Workspace) */}
          <PathDiscovery />

          {/* 3. Objection Destroyer #1: Why Generic AI Chatbots Fail Students on Exam Day */}
          <ObjectionDestroyerChatbot />

          {/* 4. Syllabus Mapping & Weak-Subject Analysis: Scanned Mark-Sheet OCR & 20% High-Yield Matrix */}
          <SyllabusDiagnosticStage />

          {/* 5. Objection Destroyer #2 / Adaptive Study Plans: 5-Day Timetable Auto-Healing Engine */}
          <AdaptivePlannerStage />

          {/* 6. Textbook-Grounded Teaching: Prescribed Textbook Page Spread & Official Marking Rubric */}
          <TextbookGroundingStage />

          {/* 7. Living Artifacts: React Faraday-Lenz Sandbox, CBSE Board Exam, & Tactical Chess Arena */}
          <ArtifactsNarrative />

          {/* 8. Research Synthesis: The Scholar's Synthesis Matrix & Cross-Literature Deconstruction */}
          <ResearchNarrative />

          {/* 9. Unified Workspace: Command Bar, Multi-Tool Delegation (Python, Math, Web Grounding) */}
          <WorkspaceNarrative />

          {/* 10. Transparent Access: INR/USD Currency Switcher with ₹29/day Value Anchor */}
          <Pricing />

          {/* 11. Final CTA & Restrained Editorial Footer */}
          <FinalCTA />
        </main>
      </div>
    </ExperienceProvider>
  );
}
