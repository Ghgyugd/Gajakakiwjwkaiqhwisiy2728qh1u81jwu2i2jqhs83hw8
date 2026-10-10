import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  DEFAULT_CONFIG,
  ParticleConfig,
  VeldrinPath,
  StageId,
} from '../lib/experience';
import { ParticleEngine } from '../lib/ParticleEngine';

interface ExperienceContextType {
  activePath: VeldrinPath;
  setActivePath: (path: VeldrinPath) => void;
  scrollProgress: number; // 0.0 to 1.0 continuous progress from Lenis
  scrollVelocity: number; // current smooth scroll velocity
  activeStage: StageId;
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: any) => void;
  triggerImpulse: (intensity?: number) => void;
  engineRef: React.MutableRefObject<ParticleEngine | null>;
  config: ParticleConfig;
  updateConfig: (newConfig: Partial<ParticleConfig>) => void;
}

const ExperienceContext = createContext<ExperienceContextType | null>(null);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [activePath, setActivePathState] = useState<VeldrinPath>('study');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollVelocity, setScrollVelocity] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<StageId>('waves');
  const [config, setConfig] = useState<ParticleConfig>(DEFAULT_CONFIG);
  const [lenisState, setLenisState] = useState<Lenis | null>(null);

  const engineRef = useRef<ParticleEngine | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // STEP 2: Initialize Lenis using the autoRaf feature
  useEffect(() => {
    const lenis = (window as any).lenis || new (Lenis as any)({ autoRaf: true });

    lenisRef.current = lenis;
    setLenisState(lenis);
    (window as any).lenis = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);

    lenis.on('scroll', (e: any) => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollHeight > 0
          ? Math.max(0, Math.min(1, (e.scroll ?? window.scrollY) / scrollHeight))
          : 0;

      setScrollProgress(progress);
      setScrollVelocity(e.velocity ?? 0);

      if (engineRef.current) {
        engineRef.current.setScrollProgress(progress);
      }

      // Progression narrative checkpoints
      if (progress < 0.16) {
        setActiveStage('waves');
      } else if (progress < 0.38) {
        setActiveStage('paths');
      } else if (progress < 0.72) {
        setActiveStage('study');
      } else if (progress < 0.88) {
        setActiveStage('workspace');
      } else {
        setActiveStage('access');
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const triggerImpulse = (intensity: number = 1.0) => {
    if (engineRef.current) {
      engineRef.current.triggerImpulse(intensity);
    }
  };

  const setActivePath = (path: VeldrinPath) => {
    setActivePathState(path);
    setConfig((prev) => ({ ...prev, activePath: path }));
    if (engineRef.current) {
      engineRef.current.setPath(path);
      engineRef.current.triggerImpulse(0.75);
    }
  };

  const updateConfig = (newConfig: Partial<ParticleConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const scrollTo = (target: string | number | HTMLElement, options?: any) => {
    const activeLenis = lenisRef.current || lenisState;
    if (activeLenis) {
      activeLenis.scrollTo(target, {
        offset: -40,
        duration: 1.2,
        ...options,
      });
    } else {
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ExperienceContext.Provider
      value={{
        activePath,
        setActivePath,
        scrollProgress,
        scrollVelocity,
        activeStage,
        lenis: lenisState,
        scrollTo,
        triggerImpulse,
        engineRef,
        config,
        updateConfig,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const ctx = useContext(ExperienceContext);
  if (!ctx) {
    throw new Error('useExperience must be used within an ExperienceProvider');
  }
  return ctx;
}
