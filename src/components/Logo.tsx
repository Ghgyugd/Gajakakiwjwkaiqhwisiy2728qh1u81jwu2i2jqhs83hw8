import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/*
          Veldrin Bespoke V-Bridge Mark:
          A refined geometric V-construction communicating connection, transition, and progression.
          Restrained, razor-sharp at 16-24px, free of DNA, brains, or generic AI iconography.
        */}
        {/* Left descent arm: represents initial knowledge state */}
        <path
          d="M4.5 5.5L12 18.5"
          stroke="#f8f9fa"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Right ascent arm: represents objective knowledge state */}
        <path
          d="M12 18.5L19.5 5.5"
          stroke="#f8f9fa"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Central horizontal bridge: the transformative transition linking the two states */}
        <path
          d="M7.5 11H16.5"
          stroke="#e4d9ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
