import React, { useEffect, useRef } from 'react';
import { useExperience } from '../hooks/useExperience';
import { ParticleEngine } from '../lib/ParticleEngine';

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { config, activePath, engineRef } = useExperience();

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new ParticleEngine(canvasRef.current, config);
    engineRef.current = engine;
    engine.setPath(activePath);
    engine.start();

    return () => {
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  return (
    <>
      {/* 1. Multi-layered, low-opacity radial ambient gradients fixed in background */}
      <div className="bg-ambient-layer" aria-hidden="true" />

      {/* 2. Subtle film-grain noise overlay for rich luxury texture */}
      <div className="bg-noise-overlay" aria-hidden="true" />

      {/* 3. Deep matte obsidian particle world */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#030407]">
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-default"
        />

        {/* Atmospheric depth gradients blending the canvas smoothly into deep matte obsidian */}
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_35%,transparent_30%,#030407_95%)]"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 inset-x-0 h-48 pointer-events-none bg-gradient-to-b from-[#030407] to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 inset-x-0 h-48 pointer-events-none bg-gradient-to-t from-[#030407] to-transparent"
          aria-hidden="true"
        />
      </div>
    </>
  );
};
