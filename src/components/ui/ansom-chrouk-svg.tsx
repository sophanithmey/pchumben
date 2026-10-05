import React from 'react';

interface AnsomChroukSvgProps {
  className?: string;
  size?: number | string;
  watermark?: boolean;
}

export const AnsomChroukSvg: React.FC<AnsomChroukSvgProps> = ({
  className = 'w-16 h-16',
  size,
  watermark = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      width={size}
      height={size}
      className={`${className} ${watermark ? 'opacity-10 pointer-events-none select-none' : ''}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ansLeaf" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2c5324" />
          <stop offset="25%" stopColor="#417734" />
          <stop offset="50%" stopColor="#5d9647" />
          <stop offset="75%" stopColor="#437a35" />
          <stop offset="100%" stopColor="#274c20" />
        </linearGradient>

        <linearGradient id="ansShade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stop-opacity="0.25" />
          <stop offset="40%" stopColor="#ffffff" stop-opacity="0.05" />
          <stop offset="70%" stopColor="#000000" stop-opacity="0.15" />
          <stop offset="100%" stopColor="#000000" stop-opacity="0.4" />
        </linearGradient>

        <linearGradient id="ansTie" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#eab308" />
          <stop offset="85%" stopColor="#a16207" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>

        <radialGradient id="ansRice" cx="70%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#fcf9ee" />
          <stop offset="60%" stopColor="#eae3cb" />
          <stop offset="100%" stopColor="#c5baa0" />
        </radialGradient>

        <radialGradient id="ansBean" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="65%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </radialGradient>

        <radialGradient id="ansPork" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
      </defs>

      {/* Main Cylinder Body */}
      <path
        d="M48 64 C42 57 44 48 53 39 C62 30 71 28 78 35 L158 115 C165 122 163 131 154 140 C145 149 136 151 129 144 Z"
        fill="url(#ansLeaf)"
      />
      <path
        d="M48 64 C42 57 44 48 53 39 C62 30 71 28 78 35 L158 115 C165 122 163 131 154 140 C145 149 136 151 129 144 Z"
        fill="url(#ansShade)"
      />

      {/* Leaf Fibers */}
      <g stroke="#386b2b" stroke-width="0.8" opacity="0.5">
        <path d="M58 48 L138 128" />
        <path d="M66 44 L146 124" />
        <path d="M52 56 L132 136" />
      </g>

      {/* Folded Banana Leaf Ends */}
      <path d="M48 64 L26 44 L45 28 L65 52 Z" fill="#2d5222" stroke="#162e12" stroke-width="1.2" />
      <path d="M142 128 L168 152 L160 174 L126 146 Z" fill="#35652a" stroke="#162e12" stroke-width="1.2" />

      {/* Bamboo Ties along the Cylinder */}
      <path d="M60 48 Q72 58 84 46" stroke="url(#ansTie)" stroke-width="3.5" stroke-linecap="round" />
      <path d="M78 66 Q90 76 102 64" stroke="url(#ansTie)" stroke-width="3.5" stroke-linecap="round" />
      <path d="M96 84 Q108 94 120 82" stroke="url(#ansTie)" stroke-width="3.5" stroke-linecap="round" />
      <path d="M114 102 Q126 112 138 100" stroke="url(#ansTie)" stroke-width="3.5" stroke-linecap="round" />
      <path d="M132 120 Q144 130 156 118" stroke="url(#ansTie)" stroke-width="3.5" stroke-linecap="round" />

      {/* Hanging Bamboo Strings & End Loops */}
      <path d="M38 52 C26 44 14 42 16 32 C18 24 28 26 34 36" stroke="url(#ansTie)" stroke-width="2.5" fill="none" />
      <path d="M148 140 C156 146 166 152 174 148" stroke="url(#ansTie)" stroke-width="2.5" fill="none" />

      {/* Cross Section Slice at Bottom Left */}
      <g transform="translate(18, 102) rotate(-10)">
        <ellipse cx="38" cy="38" rx="27" ry="23" fill="#274c20" stroke="#173313" stroke-width="2" />
        <ellipse cx="38" cy="38" rx="24" ry="20" fill="url(#ansRice)" stroke="#ab9f82" stroke-width="0.8" />
        <ellipse cx="38" cy="38" rx="15" ry="12" fill="url(#ansBean)" />
        <path d="M32 35 C32 31 36 30 42 32 C46 34 46 38 45 42 C43 45 37 46 33 44 Z" fill="url(#ansPork)" />
        <circle cx="35" cy="38" r="1.3" fill="#1c1917" />
        <circle cx="41" cy="36" r="1.1" fill="#1c1917" />
        <circle cx="39" cy="42" r="1.2" fill="#1c1917" />
      </g>
    </svg>
  );
};
