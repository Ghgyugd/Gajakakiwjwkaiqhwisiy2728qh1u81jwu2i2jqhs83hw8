import React, { useState } from 'react';
import { Code, FileSpreadsheet, Shield, Play, RotateCcw, Check } from 'lucide-react';
import { useExperience } from '../hooks/useExperience';

export const ArtifactsNarrative: React.FC = () => {
  const { triggerImpulse } = useExperience();
  const [selectedArtifact, setSelectedArtifact] = useState<'react_interface' | 'board_exam' | 'chess_engine'>('react_interface');

  // Interactive state for the Faraday-Lenz React Simulator
  const [turns, setTurns] = useState<number>(250);
  const [fluxRate, setFluxRate] = useState<number>(1.4);

  // Interactive state for the Chessboard
  const [chessMove, setChessMove] = useState<number>(12);
  const [evaluation, setEvaluation] = useState<string>('+0.4');

  const calculatedEmf = (-1 * turns * fluxRate).toFixed(1);

  const handleSelect = (key: 'react_interface' | 'board_exam' | 'chess_engine') => {
    setSelectedArtifact(key);
    triggerImpulse();
  };

  return (
    <section id="artifacts" className="min-h-screen py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Chapter Lead */}
      <div className="max-w-3xl mb-12">
        {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
        <div className="mb-6 veldrin-pill-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
          <Code className="w-3.5 h-3.5 text-[#B9AEFF]" />
          <span>STAGE 04 · LIVING ARTIFACTS &amp; REAL EXAMS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] mb-6 font-heading">
          The response becomes something you can actually use.
        </h2>
        <p className="text-base sm:text-lg text-[rgba(245,245,247,0.62)] leading-relaxed font-light">
          Instead of generating paragraphs that disappear into chat history, Veldrin produces tangible, actionable artifacts: interactive React sandboxes, official board-pattern exams with mark rubrics, and playable cognitive engines.
        </p>
      </div>

      {/* Artifact Selector Segmented Controls */}
      <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[rgba(18,22,31,0.6)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl gap-2 mb-10 max-w-2xl">
        <button
          onClick={() => handleSelect('react_interface')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            selectedArtifact === 'react_interface'
              ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
              : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.05)]'
          }`}
        >
          Interactive React Sandbox
        </button>
        <button
          onClick={() => handleSelect('board_exam')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            selectedArtifact === 'board_exam'
              ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
              : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.05)]'
          }`}
        >
          Calibrated Board Exam Paper
        </button>
        <button
          onClick={() => handleSelect('chess_engine')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            selectedArtifact === 'chess_engine'
              ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
              : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.05)]'
          }`}
        >
          Playable AI Chess Engine
        </button>
      </div>

      {/* Real Visual Demonstration */}
      <div className="p-7 sm:p-9 rounded-3xl veldrin-glass-card shadow-2xl relative overflow-hidden">
        {selectedArtifact === 'react_interface' && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs mb-6">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#e4d9ff]" />
                <span className="text-[#fafaff] font-mono font-medium">InducedEMFSimulator.tsx</span>
                <span className="px-2 py-0.5 rounded-full bg-[#273469]/60 text-[#e4d9ff] text-[10px] font-mono border border-[#ced4da]/15">
                  LIVE COMPILER
                </span>
              </div>
              <span className="text-[#adb5bd] font-mono text-[11px]">Interactive Component State Active</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Code Preview */}
              <div className="lg:col-span-6 p-5 rounded-xl bg-[#050608]/80 border border-[#ced4da]/12 font-mono text-xs text-[#dee2e6] space-y-1.5 overflow-x-auto">
                <p className="text-[#6c757d]">// Interactive simulation generated from textbook formulas</p>
                <p><span className="text-[#e4d9ff]">export const</span> CoilSimulator = () =&gt; &#123;</p>
                <p className="pl-4"><span className="text-[#e4d9ff]">const</span> [turns, setTurns] = useState({turns});</p>
                <p className="pl-4"><span className="text-[#e4d9ff]">const</span> [fluxRate, setFluxRate] = useState({fluxRate});</p>
                <p className="pl-4 text-[#ced4da]"><span className="text-[#e4d9ff]">const</span> emf = -1 * turns * fluxRate; // Lenz sign</p>
                <p className="pl-4 text-[#adb5bd]">return &lt;div className=&quot;coil-stage&quot;&gt;...&lt;/div&gt;;</p>
                <p>&#125;;</p>
              </div>

              {/* Rendered Live Component UI */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-[#1e2749]/30 border border-[#ced4da]/20 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#adb5bd] uppercase tracking-wider mb-1 font-mono">
                    Live Artifact Output
                  </div>
                  <div className="text-base font-medium text-[#fafaff] mb-1">
                    Faraday-Lenz Induced EMF Engine
                  </div>
                  <p className="text-xs text-[#ced4da] font-light mb-5">
                    Manipulate physical turns and magnetic flux rate to recalculate voltage in real time:
                  </p>
                </div>

                {/* Interactive Controls */}
                <div className="space-y-4 mb-5">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#ced4da]">Coil Turns (N):</span>
                      <span className="font-mono text-[#fafaff] font-bold">{turns}</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      step="25"
                      value={turns}
                      onChange={(e) => setTurns(Number(e.target.value))}
                      className="w-full accent-[#e4d9ff] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#ced4da]">Rate of Flux Change (dΦ/dt):</span>
                      <span className="font-mono text-[#fafaff] font-bold">{fluxRate} Wb/s</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="5.0"
                      step="0.1"
                      value={fluxRate}
                      onChange={(e) => setFluxRate(Number(e.target.value))}
                      className="w-full accent-[#e4d9ff] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Output Gauge */}
                <div className="p-4 rounded-xl bg-[#050608]/70 border border-[#ced4da]/14 flex items-center justify-between">
                  <span className="text-xs text-[#adb5bd]">Calculated Induced EMF:</span>
                  <span className="font-mono text-base text-[#fafaff] font-bold">
                    {calculatedEmf} Volts
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedArtifact === 'board_exam' && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs mb-6">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#e4d9ff]" />
                <span className="text-[#fafaff] font-mono font-medium">CBSE_Class12_Physics_Ch06_Exam.pdf</span>
              </div>
              <span className="text-[#adb5bd] font-mono text-[11px]">Board Pattern Paper Attached</span>
            </div>

            <div className="p-6 rounded-xl bg-[#050608]/80 border border-[#ced4da]/12 space-y-4 text-xs">
              <div className="flex justify-between items-center pb-3 border-b border-[#ced4da]/10">
                <span className="text-[#fafaff] font-medium text-sm">Question 04 · Derivation (5 Marks)</span>
                <span className="text-[#adb5bd] font-mono text-[11px] px-2 py-0.5 rounded bg-[#30343f]/60">
                  Section C · High Yield
                </span>
              </div>
              <p className="text-[#dee2e6] font-light leading-relaxed text-sm">
                Derive an expression for the motional electromotive force induced across the ends of a conducting rod of length <em>l</em>{' '}
                moving with velocity <em>v</em> perpendicular to a uniform magnetic field <em>B</em>. State Lenz’s law and prove mathematically that it obeys the law of conservation of energy.
              </p>
              <div className="p-4 rounded-lg bg-[#1e2749]/35 border border-[#ced4da]/14 text-[#ced4da] text-xs font-mono leading-relaxed">
                <div className="text-[#e4d9ff] font-semibold mb-1 uppercase text-[10px]">Official Marking Breakdown:</div>
                <div>• [2 Marks]: Derivation of e = B · l · v using Lorentz magnetic force balance.</div>
                <div>• [1 Mark]: Precise statement of Lenz&apos;s law with direction of induced current.</div>
                <div>• [2 Marks]: Mechanical power input (P = F · v) demonstrated identical to electrical heat dissipated (P = e²/R = B²l²v²/R).</div>
              </div>
            </div>
          </div>
        )}

        {selectedArtifact === 'chess_engine' && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#ced4da]/12 text-xs mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#e4d9ff]" />
                <span className="text-[#fafaff] font-mono font-medium">VeldrinChessEngine.wasm</span>
                <span className="px-2 py-0.5 rounded-full bg-[#273469]/60 text-[#e4d9ff] text-[10px] font-mono border border-[#ced4da]/15">
                  REAL AI OPPONENT
                </span>
              </div>
              <span className="text-[#adb5bd] font-mono text-[11px]">10-Minute Study Break Arena</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Chessboard visual representation */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-[#050608]/80 border border-[#ced4da]/15 flex flex-col items-center justify-center">
                <div className="grid grid-cols-8 gap-0.5 w-56 h-56 sm:w-64 sm:h-64 border border-[#ced4da]/20 rounded-lg overflow-hidden shadow-xl">
                  {Array.from({ length: 64 }).map((_, i) => {
                    const row = Math.floor(i / 8);
                    const col = i % 8;
                    const isDark = (row + col) % 2 === 1;
                    return (
                      <div
                        key={i}
                        className={`w-full h-full flex items-center justify-center text-xs sm:text-sm font-mono ${
                          isDark ? 'bg-[#30343f]' : 'bg-[#ced4da]/20'
                        }`}
                      >
                        {i === 4 && <span className="text-[#fafaff]">♔</span>}
                        {i === 60 && <span className="text-[#fafaff]">♚</span>}
                        {i === 28 && <span className="text-[#e4d9ff]">♙</span>}
                        {i === 35 && <span className="text-[#ced4da]">♟</span>}
                        {i === 21 && <span className="text-[#fafaff]">♘</span>}
                        {i === 42 && <span className="text-[#ced4da]">♞</span>}
                      </div>
                    );
                  })}
                </div>
                <div className="text-xs text-[#ced4da] font-mono pt-4 flex items-center gap-2">
                  <span>Move {chessMove} · White to Move</span>
                  <span className="text-[#e4d9ff] font-semibold">(Stockfish Eval: {evaluation})</span>
                </div>
              </div>

              {/* Move Notation & Strategy */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-[#1e2749]/30 border border-[#ced4da]/18 font-mono text-xs text-[#dee2e6] space-y-3">
                <div className="text-[#adb5bd] uppercase text-[10px] tracking-wider">
                  Cognitive Reset Match
                </div>
                <div className="p-3.5 rounded-lg bg-[#050608]/60 border border-[#ced4da]/10 space-y-1.5">
                  <p>1. e4 e5 &nbsp; 2. Nf3 Nc6</p>
                  <p>3. Bb5 a6 &nbsp; 4. Ba4 Nf6</p>
                  <p>5. O-O Be7 &nbsp; 6. Re1 b5</p>
                  <p className="text-[#e4d9ff]">7. Bb3 d6 &nbsp; 8. c3 O-O</p>
                </div>
                <p className="text-xs text-[#ced4da] font-sans font-light leading-relaxed">
                  Between demanding 90-minute problem-solving sprints, Veldrin spins up focused 5-minute tactical drills that refresh working memory without dopamine crash.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
