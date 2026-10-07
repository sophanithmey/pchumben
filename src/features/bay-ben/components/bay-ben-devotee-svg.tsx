import React from 'react';

export type BayBenDevoteeType = 'leader' | 'bearer' | 'elder';

interface BayBenDevoteeSvgProps {
  type: BayBenDevoteeType;
  x: number;
  y: number;
  isFacingLeft: boolean;
  bobOffset?: number;
}

export const BayBenDevoteeSvg: React.FC<BayBenDevoteeSvgProps> = ({
  type,
  x,
  y,
  isFacingLeft,
  bobOffset = 0,
}) => {
  return (
    <g transform={`translate(${x}, ${y - 48 + bobOffset}) scale(${isFacingLeft ? -1 : 1}, 1)`}>
      {/* 1. LEADER: Carrying glowing lantern and pink lotus */}
      {type === 'leader' && (
        <g>
          {/* Ground Foot Shadow */}
          <ellipse cx="0" cy="52" rx="14" ry="4" fill="#090d16" opacity="0.75" />
          {/* Lantern Light Glow on Ground */}
          <polygon points="14,24 44,52 2,52" fill="#fbbf24" opacity="0.2" />
          <ellipse cx="22" cy="52" rx="18" ry="6" fill="#fde68a" opacity="0.35" />
          {/* White Ceremonial Sampot / Skirt */}
          <path d="M-8 27 C-8 23 8 23 8 27 L11 48 C11 50 -11 50 -11 48 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" />
          <line x1="-1" y1="28" x2="-1" y2="47" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="3 2" />
          {/* White Blouse (អាវប៉ាក់ស) */}
          <path d="M-9 14 C-9 9 9 9 9 14 L8 28 L-8 28 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
          <path d="M-4 13 Q0 16 4 13" stroke="#f59e0b" strokeWidth="0.8" fill="none" />
          {/* Head & Traditional Hair Bun */}
          <circle cx="0" cy="7" r="6.5" fill="#fde68a" />
          <ellipse cx="-2" cy="3" rx="6.5" ry="4.5" fill="#1e1b2e" />
          <circle cx="4" cy="3" r="1.5" fill="#f59e0b" />
          {/* Right Arm & Glowing Brass Lantern */}
          <line x1="4" y1="18" x2="14" y2="24" stroke="#fde68a" strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="24" x2="14" y2="27" stroke="#78350f" strokeWidth="1" />
          <polygon points="10,27 18,27 16,38 12,38" fill="#d97706" stroke="#fef08a" strokeWidth="0.8" />
          <rect x="11.5" y="29" width="5" height="7" rx="1" fill="#fef08a" opacity="0.9" />
          <circle cx="14" cy="32.5" r="2.2" fill="#f97316" />
          {/* Left Arm & Sacred Pink Lotus */}
          <line x1="-4" y1="18" x2="-8" y2="24" stroke="#fde68a" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="-8" y1="24" x2="-11" y2="18" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M-11 18 C-14 14 -12 10 -11 9 C-10 10 -8 14 -11 18 Z" fill="#f472b6" />
        </g>
      )}

      {/* 2. BEARER: Carrying sacred pedestal tray with 7 Bay Ben rice balls */}
      {type === 'bearer' && (
        <g>
          {/* Ground Foot Shadow */}
          <ellipse cx="0" cy="52" rx="15" ry="4.5" fill="#090d16" opacity="0.75" />
          {/* White Sampot */}
          <path d="M-8 27 C-8 23 8 23 8 27 L11 49 C11 51 -11 51 -11 49 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" />
          {/* White Blouse & Golden Ceremonial Shoulder Sash */}
          <path d="M-9 14 C-9 9 9 9 9 14 L8 28 L-8 28 Z" fill="#ffffff" />
          <path d="M-6 12 L7 28 L4 29 L-8 13 Z" fill="#f59e0b" opacity="0.85" />
          {/* Head & Hair */}
          <circle cx="0" cy="7" r="6.5" fill="#fde68a" />
          <ellipse cx="0" cy="4" rx="6" ry="4.5" fill="#1e1b2e" />
          {/* Two Arms Raised Holding Tray */}
          <line x1="-5" y1="18" x2="-8" y2="15" stroke="#fde68a" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="5" y1="18" x2="8" y2="15" stroke="#fde68a" strokeWidth="2.8" strokeLinecap="round" />
          {/* Golden Brass Pedestal Tray (ជើងពានសំរឹទ្ធ) */}
          <polygon points="-4,22 4,22 2,16 -2,16" fill="#d97706" />
          <ellipse cx="0" cy="22" rx="7" ry="2" fill="#b45309" stroke="#fef08a" strokeWidth="0.6" />
          <ellipse cx="0" cy="15" rx="16" ry="4.5" fill="#d97706" stroke="#fef08a" strokeWidth="1" />
          {/* Banana Leaf Base */}
          <ellipse cx="0" cy="14" rx="14" ry="3.5" fill="#15803d" />
          {/* 7 Sacred Sticky Rice Balls */}
          <circle cx="-8" cy="12.5" r="2.2" fill="#ffffff" />
          <circle cx="-3" cy="11.5" r="2.3" fill="#ffffff" />
          <circle cx="2" cy="11.5" r="2.3" fill="#ffffff" />
          <circle cx="7" cy="12.5" r="2.2" fill="#ffffff" />
          <circle cx="0" cy="9.5" r="2.4" fill="#ffffff" />
          <circle cx="-4" cy="13.5" r="2" fill="#ffffff" />
          <circle cx="4" cy="13.5" r="2" fill="#ffffff" />
          {/* Roasted Black Sesame seeds */}
          <circle cx="0" cy="9" r="0.6" fill="#0f172a" />
          <circle cx="-3" cy="11" r="0.6" fill="#0f172a" />
          <circle cx="2" cy="11" r="0.6" fill="#0f172a" />
        </g>
      )}

      {/* 3. ELDER: Reverent elder in Anjali prayer with incense */}
      {type === 'elder' && (
        <g>
          {/* Ground Foot Shadow */}
          <ellipse cx="0" cy="52" rx="14" ry="4" fill="#090d16" opacity="0.75" />
          {/* White Sampot */}
          <path d="M-8 27 C-8 23 8 23 8 27 L10 49 C10 51 -10 51 -10 49 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" />
          {/* White Blouse & White Prayer Scarf */}
          <path d="M-8 14 C-8 9 8 9 8 14 L7 28 L-7 28 Z" fill="#ffffff" />
          <path d="M-5 13 L-5 26" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M5 13 L5 26" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
          {/* Head & Silver Hair */}
          <circle cx="0" cy="7" r="6.5" fill="#fde68a" />
          <ellipse cx="0" cy="4" rx="6" ry="4.5" fill="#64748b" />
          <path d="M-3 3 Q0 1 3 3" stroke="#e2e8f0" strokeWidth="0.8" fill="none" />
          {/* Anjali Hands (សំពះ) */}
          <line x1="-5" y1="20" x2="0" y2="16" stroke="#fde68a" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="5" y1="20" x2="0" y2="16" stroke="#fde68a" strokeWidth="2.6" strokeLinecap="round" />
          <polygon points="-1.5,18 1.5,18 0,13" fill="#fde68a" stroke="#d97706" strokeWidth="0.6" />
          <line x1="0" y1="13" x2="0" y2="8" stroke="#ea580c" strokeWidth="1" strokeLinecap="round" />
          <circle cx="0" cy="7.5" r="1.5" fill="#fbbf24" />
        </g>
      )}
    </g>
  );
};
