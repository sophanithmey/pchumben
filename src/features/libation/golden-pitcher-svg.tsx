import React from 'react';

interface GoldenPitcherSvgProps {
  isPouring: boolean;
  className?: string;
}

export const GoldenPitcherSvg: React.FC<GoldenPitcherSvgProps> = ({ isPouring, className = '' }) => {
  return (
    <div
      className={`relative transition-transform duration-500 ease-out select-none will-change-transform ${
        isPouring
          ? '-rotate-[42deg] -translate-x-7 translate-y-2'
          : 'rotate-0 translate-x-0 translate-y-0'
      } ${className}`}
      style={{ transformOrigin: '78% 70%' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 130"
        className="w-28 h-24 sm:w-36 sm:h-28 drop-shadow-[0_8px_16px_rgba(180,83,9,0.28)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Gold Primary Gradient */}
          <linearGradient id="goldVesselGrad" x1="20" y1="20" x2="140" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="25%" stopColor="#FBBF24" />
            <stop offset="55%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          {/* High Shimmer Metallic Reflection */}
          <linearGradient id="goldShimmerGrad" x1="70" y1="30" x2="105" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#FDE68A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          {/* Spout Gradient */}
          <linearGradient id="spoutGrad" x1="10" y1="40" x2="70" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Handle Gradient */}
          <linearGradient id="handleGrad" x1="110" y1="35" x2="155" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Pedestal Base Gradient */}
          <linearGradient id="baseGrad" x1="55" y1="105" x2="105" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* Pitcher Handle (Right side) */}
        <path
          d="M 108 48 C 138 42, 146 72, 134 94 C 126 106, 114 100, 106 96"
          stroke="url(#handleGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 110 50 C 134 46, 142 70, 132 90"
          stroke="#FEF3C7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.75"
          fill="none"
        />

        {/* Curved Spout (Left side) */}
        <path
          d="M 68 62 C 45 60, 24 50, 12 36 C 10 33, 16 30, 20 33 C 32 42, 50 48, 70 50 Z"
          fill="url(#spoutGrad)"
        />
        {/* Spout Tip Lip */}
        <ellipse cx="12" cy="34" rx="3.5" ry="5.5" transform="rotate(-30 12 34)" fill="#FEF08A" stroke="#B45309" strokeWidth="1" />

        {/* Pedestal Base */}
        <path
          d="M 58 108 C 58 108, 52 118, 48 122 C 46 124, 52 125, 80 125 C 108 125, 114 124, 112 122 C 108 118, 102 108, 102 108 Z"
          fill="url(#baseGrad)"
          stroke="#78350F"
          strokeWidth="1"
        />
        {/* Pedestal Rim highlight */}
        <line x1="50" y1="122" x2="110" y2="122" stroke="#FEF3C7" strokeWidth="1.2" strokeOpacity="0.8" />

        {/* Main Pitcher Bulbous Body */}
        <path
          d="M 66 48 C 48 60, 48 94, 62 106 C 70 110, 90 110, 98 106 C 112 94, 112 60, 94 48 Z"
          fill="url(#goldVesselGrad)"
          stroke="#92400E"
          strokeWidth="1.5"
        />

        {/* Engraved Filigree Bands (Khmer Kbach Motif Highlights) */}
        <path
          d="M 54 75 Q 80 84 106 75"
          stroke="#78350F"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          fill="none"
        />
        <path
          d="M 52 83 Q 80 92 108 83"
          stroke="#FEF3C7"
          strokeWidth="1.2"
          fill="none"
          strokeOpacity="0.9"
        />
        <path
          d="M 57 91 Q 80 98 103 91"
          stroke="#78350F"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          fill="none"
        />

        {/* Vertical Shimmer Highlight */}
        <path
          d="M 72 50 C 64 62, 64 92, 70 104 C 74 105, 80 102, 78 96 C 74 86, 73 64, 78 52 Z"
          fill="url(#goldShimmerGrad)"
        />

        {/* Vessel Neck & Rim */}
        <ellipse cx="80" cy="48" rx="15" ry="4.5" fill="#D97706" stroke="#78350F" strokeWidth="1" />
        <ellipse cx="80" cy="46" rx="14" ry="4" fill="#FEF08A" />

        {/* Ornate Lid with Sacred Lotus Bud Finial */}
        <path
          d="M 68 45 C 68 38, 72 35, 80 35 C 88 35, 92 38, 92 45 Z"
          fill="url(#goldVesselGrad)"
          stroke="#92400E"
          strokeWidth="1"
        />
        {/* Lotus Bud Crown */}
        <path
          d="M 80 20 C 76 26, 75 32, 80 35 C 85 32, 84 26, 80 20 Z"
          fill="#FEF08A"
          stroke="#D97706"
          strokeWidth="1"
        />
        <circle cx="80" cy="20" r="2.5" fill="#FEF3C7" />

        {/* Water Gleam droplet at spout tip when pouring */}
        {isPouring && (
          <circle cx="9" cy="34" r="3.5" fill="#38BDF8" className="animate-pulse" filter="drop-shadow(0 0 4px #0284C7)" />
        )}
      </svg>
    </div>
  );
};
