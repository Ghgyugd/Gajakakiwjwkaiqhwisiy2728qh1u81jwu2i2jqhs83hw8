import React, { useState, useRef, useEffect } from 'react';
import { useExperience } from '../hooks/useExperience';
import { VeldrinPath } from '../lib/experience';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const PathDiscovery: React.FC = () => {
  const { activePath, setActivePath, triggerImpulse, scrollTo } = useExperience();
  const [hoveredPath, setHoveredPath] = useState<VeldrinPath | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const paths: VeldrinPath[] = ['study', 'learn', 'research', 'workspace'];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pathDetails: Record<
    VeldrinPath,
    {
      index: string;
      title: string;
      audience: string;
      sentence: string;
      sectionAnchor: string;
      image: string;
      alt: string;
    }
  > = {
    study: {
      index: '01',
      title: 'Study',
      audience: 'For Students',
      sentence: 'Your bridge between the syllabus you have and the rank you want: board exams, entrance tests, and textbook-grounded pacing.',
      sectionAnchor: '#study',
      image: '/src/assets/images/path_study_academic_1791358514932.jpg',
      alt: 'Academic desk with textbooks, fountain pen, and scholarly notes',
    },
    learn: {
      index: '02',
      title: 'Learn',
      audience: 'For Independent Learners',
      sentence: 'Master skills and concepts outside a formal syllabus—such as DSA, systems architecture, and engineering—on your own terms.',
      sectionAnchor: '#learn',
      image: '/src/assets/images/path_learn_systems_1791358528394.jpg',
      alt: 'Engineering workspace with computational architecture and system diagrams',
    },
    research: {
      index: '03',
      title: 'Research',
      audience: 'For Researchers',
      sentence: 'Deep exploration, source synthesis, and structured citation-aware investigation across hundreds of dense primary papers.',
      sectionAnchor: '#research',
      image: '/src/assets/images/path_research_synthesis_1791358547436.jpg',
      alt: 'Deep research archive with synthesis charts, manuscripts, and literature notes',
    },
    workspace: {
      index: '04',
      title: 'Workspace',
      audience: 'For Everyday AI Users',
      sentence: 'An intelligent environment around daily work: multi-tool AI routing, living React artifacts, and persistent notes that never evaporate.',
      sectionAnchor: '#workspace',
      image: '/src/assets/images/path_workspace_unified_1791376063536.jpg',
      alt: 'Unified modern workspace interface connecting conversations, documents, and tools',
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 2, y: y * 2 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredPath(null);
  };

  const handleSelect = (key: VeldrinPath) => {
    setActivePath(key);
    triggerImpulse(0.75);
  };

  const handleCycle = (direction: 'next' | 'prev') => {
    const curIdx = paths.indexOf(activePath);
    let nextIdx = direction === 'next' ? curIdx + 1 : curIdx - 1;
    if (nextIdx < 0) nextIdx = paths.length - 1;
    if (nextIdx >= paths.length) nextIdx = 0;
    handleSelect(paths[nextIdx]);
  };

  // Calculates physical 3D spatial transformation for each floating translucent plane in the stack
  const getCardTransform = (key: VeldrinPath) => {
    const isSelected = activePath === key;
    const isHovered = hoveredPath === key;

    const mousePitch = -mousePos.y * 2.8;
    const mouseYaw = mousePos.x * 3.6;

    if (isSelected) {
      // Primary dominant foreground surface: closest to camera, sharpest detail
      const hoverElev = isHovered ? -8 : 0;
      return {
        transform: `translate3d(0px, ${hoverElev}px, 40px) rotateX(${mousePitch}deg) rotateY(${mouseYaw}deg) scale(1)`,
        zIndex: 35,
        opacity: 1,
        filter: 'blur(0px)',
      };
    }

    const activeIndex = paths.indexOf(activePath);
    const keyIndex = paths.indexOf(key);
    let offset = keyIndex - activeIndex;

    // Wrap-around normalization for circular carousel stack
    const half = paths.length / 2;
    if (offset > half) offset -= paths.length;
    if (offset < -half) offset += paths.length;

    const absOffset = Math.abs(offset);
    const sign = offset >= 0 ? 1 : -1;
    const hoverElev = isHovered ? -6 : 0;

    // Receding spatial depth planes
    const lateralShift = isMobile ? (sign * Math.min(absOffset, 2) * 44) : (sign * (180 + (absOffset - 1) * 85));
    const zDepth = -70 * absOffset;
    const scale = Math.max(0.76, 1.0 - absOffset * 0.09);
    const rotY = sign * (14 + absOffset * 4) + mouseYaw * 0.5;
    const blur = Math.min(6, (absOffset - 1) * 2.5);
    const opacity = Math.max(0.35, 0.85 - absOffset * 0.20);

    return {
      transform: `translate3d(${lateralShift}px, ${16 * absOffset + hoverElev}px, ${zDepth}px) rotateX(${
        mousePitch * 0.5
      }deg) rotateY(${rotY}deg) scale(${scale})`,
      zIndex: 30 - absOffset * 5,
      opacity: isHovered ? Math.min(1, opacity + 0.25) : opacity,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
    };
  };

  return (
    <section
      id="paths"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen py-36 px-6 sm:px-12 max-w-6xl mx-auto z-10 relative flex flex-col justify-center items-center select-none"
    >
      {/* Chapter Lead */}
      <div className="mb-12 text-center max-w-xl mx-auto">
        {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
        <div className="mb-6 veldrin-pill-badge mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
          <span>FOUR MODES OF INTELLIGENCE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[#FFFFFF] mb-4 font-heading">
          Built for how you actually think.
        </h2>
        <p className="text-sm sm:text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed">
          Veldrin reorganizes its cognitive engine around your specific goal.
          Select your mode to explore how the system adapts.
        </p>

        {/* Objective Selector Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-lg mx-auto">
          {paths.map((p) => (
            <button
              key={p}
              onClick={() => handleSelect(p)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activePath === p
                  ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md scale-105'
                  : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF] bg-[rgba(18,22,31,0.5)] border border-[rgba(255,255,255,0.08)]'
              }`}
            >
              {pathDetails[p].title} · <span className="text-[11px] opacity-75">{pathDetails[p].audience}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Spatial 3D Stack Scene */}
      <div
        className="relative w-full max-w-3xl min-h-[500px] sm:min-h-[540px] flex items-center justify-center my-4 preserve-3d"
        style={{ perspective: '1400px' }}
      >
        {paths.map((key) => {
          const item = pathDetails[key];
          const isSelected = activePath === key;
          const isHovered = hoveredPath === key;
          const transformStyle = getCardTransform(key);

          return (
            <div
              key={key}
              onClick={() => handleSelect(key)}
              onMouseEnter={() => setHoveredPath(key)}
              onMouseLeave={() => setHoveredPath(null)}
              style={{
                ...transformStyle,
                backdropFilter: 'blur(24px) saturate(130%)',
                WebkitBackdropFilter: 'blur(24px) saturate(130%)',
              }}
              className={`absolute top-0 w-[300px] sm:w-[380px] md:w-[440px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-out preserve-3d veldrin-glass-card ${
                isSelected
                  ? 'ring-1 ring-[rgba(185,174,255,0.4)] shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
                  : 'shadow-xl'
              }`}
            >
              {/* Meaningful Image Asset */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#030407]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
                  style={{
                    transform: isSelected && isHovered ? 'scale(1.04)' : 'scale(1)',
                  }}
                  loading="lazy"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,22,31,0.9)] via-[rgba(18,22,31,0.2)] to-transparent pointer-events-none" />

                {/* Index Pill */}
                <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[rgba(3,4,7,0.8)] border border-[rgba(255,255,255,0.12)] text-[#F5F5F7] backdrop-blur-md">
                  {item.index}
                </div>
                <div className="absolute top-4 right-4 px-3 py-0.5 rounded-full text-[10px] font-sans bg-[rgba(3,4,7,0.8)] border border-[rgba(185,174,255,0.2)] text-[#B9AEFF] backdrop-blur-md">
                  {item.audience}
                </div>
              </div>

              {/* Editorial Body */}
              <div className="p-6 relative z-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.03em] text-[#FFFFFF] mb-2.5 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(245,245,247,0.62)] font-light leading-relaxed mb-6">
                    {item.sentence}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.08)] text-xs">
                  <span className="text-[rgba(245,245,247,0.45)] font-light font-mono">
                    {isSelected ? 'Active Mode' : 'Select Mode'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(key);
                      scrollTo(item.sectionAnchor);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-sm'
                        : 'text-[#F5F5F7] hover:text-[#FFFFFF] bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.1)]'
                    }`}
                  >
                    <span>Inspect Layer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stack Navigation Controls */}
      <div className="flex items-center gap-4 mt-6 z-20">
        <button
          onClick={() => handleCycle('prev')}
          aria-label="Previous Mode"
          className="p-2.5 rounded-full bg-[#30343f]/30 border border-[#ced4da]/15 text-[#dee2e6] hover:text-[#fafaff] hover:border-[#ced4da]/30 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-xs text-[#adb5bd] font-mono">
          {pathDetails[activePath].index} / 04
        </span>
        <button
          onClick={() => handleCycle('next')}
          aria-label="Next Mode"
          className="p-2.5 rounded-full bg-[#30343f]/30 border border-[#ced4da]/15 text-[#dee2e6] hover:text-[#fafaff] hover:border-[#ced4da]/30 transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
