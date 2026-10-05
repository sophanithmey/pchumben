import React from 'react';

interface SacredCandleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const SacredCandle: React.FC<SacredCandleProps> = ({
  className = 'absolute -top-[17px] left-1/2 -translate-x-1/2',
  size = 'md',
}) => {
  const isSm = size === 'sm';

  return (
    <span
      className={`${className} flex flex-col items-center pointer-events-none animate-scale-in z-20`}
      aria-hidden="true"
    >
      {/* Dynamic ambient golden aura halo */}
      <span
        className={`absolute -top-1.5 ${
          isSm ? 'w-4 h-4' : 'w-6 h-6'
        } bg-amber-400/35 rounded-full blur-[5px] pointer-events-none animate-candle-glow`}
      />

      {/* Crafted Buddhist Temple Candle (ទៀនវត្ត / ទៀនបុណ្យ) */}
      <svg
        className={`${
          isSm ? 'w-3 h-4' : 'w-4 h-5'
        } overflow-visible drop-shadow-[0_2px_4px_rgba(217,119,6,0.35)]`}
        viewBox="0 0 20 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Flame outer gradient */}
          <linearGradient id="flameGrad" x1="10" y1="1" x2="10" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#fef08a" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>

          {/* Hot white flame core */}
          <linearGradient id="flameCoreGrad" x1="10" y1="3.5" x2="10" y2="10.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#fffbeb" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>

          {/* Candle wax 3D cylinder lighting gradient */}
          <linearGradient id="waxGrad" x1="7" y1="11" x2="13" y2="11" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="25%" stopColor="#fffdf5" />
            <stop offset="65%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Melted wax pool on top */}
          <radialGradient id="waxTopGrad" cx="10" cy="11.2" r="3" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>

          {/* Traditional Golden Pedestal / Saucer (ជើងទៀន) */}
          <linearGradient id="goldStandGrad" x1="4.5" y1="20" x2="15.5" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="25%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="80%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Blue heat base gradient */}
          <linearGradient id="blueBaseGrad" x1="10" y1="9.5" x2="10" y2="11.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- FLAME & WICK (flickering group) --- */}
        <g className="animate-candle-flicker">
          {/* Outer glowing flame */}
          <path
            d="M10 1.2C10 1.2 13.5 5 13.5 8.8C13.5 10.8 11.9 12 10 12C8.1 12 6.5 10.8 6.5 8.8C6.5 5 10 1.2 10 1.2Z"
            fill="url(#flameGrad)"
          />

          {/* Inner hot white/yellow core */}
          <path
            d="M10 3.8C10 3.8 12 6.5 12 8.6C12 9.8 11.1 10.6 10 10.6C8.9 10.6 8 9.8 8 8.6C8 6.5 10 3.8 10 3.8Z"
            fill="url(#flameCoreGrad)"
          />

          {/* Blue heat base halo */}
          <ellipse cx="10" cy="10.8" rx="2" ry="0.8" fill="url(#blueBaseGrad)" />

          {/* Curved charred wick */}
          <path
            d="M10 12C10 11.2 10.2 10.2 9.9 9.5"
            stroke="#451a03"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Glowing ember tip at top of wick */}
          <circle cx="9.9" cy="9.5" r="0.4" fill="#ef4444" />
        </g>

        {/* --- WAX BODY --- */}
        {/* Wax cylinder */}
        <rect
          x="7.2"
          y="11.2"
          width="5.6"
          height="8.3"
          rx="0.8"
          fill="url(#waxGrad)"
        />

        {/* Natural wax drip tear running down the left */}
        <path
          d="M7.2 12.8C6.7 13.5 6.8 14.6 7.4 14.9C7.5 14.3 7.3 13.6 7.2 12.8Z"
          fill="#fef3c7"
          opacity="0.9"
        />

        {/* 3D Melted wax bowl pool on top */}
        <ellipse cx="10" cy="11.2" rx="2.8" ry="1" fill="url(#waxTopGrad)" />

        {/* --- GOLDEN SAUCER / PEDESTAL (ជើងទៀន) --- */}
        {/* Neck collar */}
        <rect x="8" y="19.2" width="4" height="1" rx="0.5" fill="#d97706" />

        {/* Flared Lotus Saucer Base */}
        <path
          d="M4.5 22.2C6.5 20.6 13.5 20.6 15.5 22.2C14.8 23.3 5.2 23.3 4.5 22.2Z"
          fill="url(#goldStandGrad)"
        />

        {/* Stand bottom rim foot */}
        <rect x="6.5" y="22.8" width="7" height="1" rx="0.5" fill="#92400e" />
      </svg>
    </span>
  );
};
