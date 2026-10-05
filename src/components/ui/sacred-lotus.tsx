import React from 'react';

interface SacredLotusProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const SacredLotus: React.FC<SacredLotusProps> = ({
  className = 'absolute -top-3.5 left-1/2 -translate-x-1/2',
  size = 'md',
}) => {
  const isSm = size === 'sm';

  return (
    <span
      className={`${className} flex flex-col items-center pointer-events-none animate-scale-in z-20`}
      aria-hidden="true"
    >
      {/* Ambient sacred lotus pink glow halo */}
      <span
        className={`absolute -top-1 ${
          isSm ? 'w-4 h-4' : 'w-6 h-6'
        } bg-lotus-400/35 rounded-full blur-[5px] pointer-events-none animate-lotus-glow`}
      />

      {/* Handcrafted Sacred Lotus Blossom (ផ្កាឈូក) */}
      <svg
        className={`${
          isSm ? 'w-4 h-3.5' : 'w-5 h-4'
        } overflow-visible drop-shadow-[0_2px_4px_rgba(197,52,93,0.32)] animate-lotus-float`}
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer Petal Gradient */}
          <linearGradient id="lotusOuterPetal" x1="12" y1="4" x2="12" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fce7eb" />
            <stop offset="40%" stopColor="#ea7c9b" />
            <stop offset="100%" stopColor="#c5345d" />
          </linearGradient>

          {/* Center Main Petal Gradient */}
          <linearGradient id="lotusCenterPetal" x1="12" y1="1" x2="12" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fdf4f6" />
            <stop offset="70%" stopColor="#ea7c9b" />
            <stop offset="100%" stopColor="#c5345d" />
          </linearGradient>

          {/* Side Petal Left Gradient */}
          <linearGradient id="lotusSidePetalLeft" x1="6" y1="5" x2="12" y2="17" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff5f7" />
            <stop offset="50%" stopColor="#f4adc0" />
            <stop offset="100%" stopColor="#a52549" />
          </linearGradient>

          {/* Side Petal Right Gradient */}
          <linearGradient id="lotusSidePetalRight" x1="18" y1="5" x2="12" y2="17" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff5f7" />
            <stop offset="50%" stopColor="#f4adc0" />
            <stop offset="100%" stopColor="#a52549" />
          </linearGradient>

          {/* Base Lily Leaf Calyx Gradient */}
          <linearGradient id="lotusCalyx" x1="12" y1="15" x2="12" y2="19" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Golden Stamen Core */}
          <radialGradient id="lotusGoldCore" cx="12" cy="13.5" r="3" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>
        </defs>

        {/* Green Calyx / Lily Leaf Base */}
        <path
          d="M12 18.5C8 18.5 4 17.5 2 15C5 17 9 17.5 12 17C15 17.5 19 17 22 15C20 17.5 16 18.5 12 18.5Z"
          fill="url(#lotusCalyx)"
        />

        {/* Wide Outspread Lower Petals */}
        <path
          d="M12 16.5C7 16 2.5 12 1 8C4.5 10 9 12 12 15.5C15 12 19.5 10 23 8C21.5 12 17 16 12 16.5Z"
          fill="url(#lotusOuterPetal)"
          opacity="0.88"
        />

        {/* Mid Left Petal */}
        <path
          d="M12 16C8 14 4.5 9 5 4C8.5 7 11 11 12 16Z"
          fill="url(#lotusSidePetalLeft)"
        />

        {/* Mid Right Petal */}
        <path
          d="M12 16C16 14 19.5 9 19 4C15.5 7 13 11 12 16Z"
          fill="url(#lotusSidePetalRight)"
        />

        {/* Center Tallest Lotus Crown Petal */}
        <path
          d="M12 1.5C10 5.5 8.5 9.5 9 14.5C10 15.5 11 16 12 16C13 16 14 15.5 15 14.5C15.5 9.5 14 5.5 12 1.5Z"
          fill="url(#lotusCenterPetal)"
        />

        {/* Center Golden Stamen Core */}
        <ellipse cx="12" cy="13.5" rx="2" ry="1.5" fill="url(#lotusGoldCore)" />
        <circle cx="11.3" cy="13.2" r="0.4" fill="#ffffff" />
      </svg>
    </span>
  );
};
