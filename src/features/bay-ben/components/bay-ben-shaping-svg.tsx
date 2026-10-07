import React from 'react';
import { toKhmerDigits } from '../../../domain/services/calendar-service';

interface BayBenShapingSvgProps {
  ballsCount: number; // 0 to 7
  onRollBall?: () => void;
  isAutoPlaying?: boolean;
}

export const BayBenShapingSvg: React.FC<BayBenShapingSvgProps> = ({
  ballsCount,
  onRollBall,
  isAutoPlaying,
}) => {
  // Balanced coordinates for 7 slots on the brass tray (rx=104, ry=34)
  const slots = [
    { id: 1, cx: 450, cy: 387, r: 13, khNum: '១' }, // Center
    { id: 2, cx: 412, cy: 372, r: 12, khNum: '២' }, // Top-left
    { id: 3, cx: 488, cy: 372, r: 12, khNum: '៣' }, // Top-right
    { id: 4, cx: 380, cy: 387, r: 12, khNum: '៤' }, // Far-left
    { id: 5, cx: 520, cy: 387, r: 12, khNum: '៥' }, // Far-right
    { id: 6, cx: 414, cy: 402, r: 12, khNum: '៦' }, // Bottom-left
    { id: 7, cx: 486, cy: 402, r: 12, khNum: '៧' }, // Bottom-right
  ];

  const isComplete = ballsCount >= 7;

  return (
    <g id="bay-ben-shaping-overlay" className="animate-fade-in">
      {/* Wooden Altar Table Base */}
      <polygon points="60,520 840,520 780,435 120,435" fill="#1e1424" opacity="0.95" />
      <line x1="120" y1="435" x2="780" y2="435" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1" />

      {/* LEFT ZONE: INGREDIENTS STATION (x = 80 to 280) */}
      <rect x="80" y="370" width="200" height="96" rx="14" fill="#2d1d33" stroke="#78350f" strokeWidth="1.2" />

      {/* Ingredient 1: Steaming Glutinous Rice Pot (អង្ករដំណើប) at x=135 */}
      <g transform="translate(135, 405)">
        <ellipse cx="0" cy="18" rx="26" ry="10" fill="#78350f" stroke="#92400e" strokeWidth="1.5" />
        <path d="M-22 5 C-24 24 24 24 22 5 Z" fill="#92400e" />
        <ellipse cx="0" cy="4" rx="20" ry="9" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        {/* Steam wisps */}
        <path d="M-6 -4 Q-12 -16 -4 -26" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-pulse" />
        <path d="M6 -5 Q14 -17 8 -28" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-pulse" />
        {/* Label Tag */}
        <rect x="-35" y="28" width="70" height="18" rx="9" fill="#090d16" stroke="#f59e0b" strokeWidth="0.8" />
        <text x="0" y="41" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="bold" fontFamily="Kantumruy Pro, sans-serif">
          អង្ករដំណើប
        </text>
      </g>

      {/* Ingredient 2: Roasted Sesame & Coconut Bowl (ល្ងខ្មៅ + ដូង) at x=225 */}
      <g transform="translate(225, 408)">
        <ellipse cx="0" cy="15" rx="22" ry="9" fill="#d97706" stroke="#fef08a" strokeWidth="1.2" />
        <ellipse cx="0" cy="13" rx="18" ry="7" fill="#0f172a" />
        {/* White coconut specks */}
        <circle cx="-5" cy="12" r="1.2" fill="#ffffff" />
        <circle cx="5" cy="14" r="1.2" fill="#ffffff" />
        <circle cx="1" cy="11" r="1" fill="#ffffff" />
        {/* Label Tag */}
        <rect x="-36" y="25" width="72" height="18" rx="9" fill="#090d16" stroke="#f59e0b" strokeWidth="0.8" />
        <text x="0" y="38" textAnchor="middle" fill="#fde68a" fontSize="9.5" fontWeight="bold" fontFamily="Kantumruy Pro, sans-serif">
          ល្ងខ្មៅ + ដូង
        </text>
      </g>

      {/* CENTER ZONE: SACRED BRASS PLATTER (x = 335 to 565, center = 450) */}
      <g id="cherng-pean-brass-tray">
        <polygon points="418,445 482,445 470,418 430,418" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
        <ellipse cx="450" cy="445" rx="38" ry="9" fill="#b45309" stroke="#fde68a" strokeWidth="0.8" />
        {/* Brass Platter Outer Lip */}
        <ellipse cx="450" cy="390" rx="122" ry="44" fill="#d97706" stroke="#fef08a" strokeWidth="2.5" />
        <ellipse cx="450" cy="388" rx="114" ry="38" fill="#b45309" />
        {/* Fresh Emerald Banana Leaf (ទ្រនាប់ស្លឹកចេក) */}
        <ellipse cx="450" cy="385" rx="106" ry="34" fill="#15803d" stroke="#22c55e" strokeWidth="1.2" />
        <path d="M355 385 Q450 380 545 385" stroke="#166534" strokeWidth="1.8" fill="none" opacity="0.6" />
      </g>

      {/* 7 Slots & Rolled Sticky Rice Balls */}
      {slots.map((slot, idx) => {
        const isFilled = idx < ballsCount;
        const isNextSlot = idx === ballsCount;

        return (
          <g key={slot.id}>
            {/* Empty Slot Placeholder */}
            {!isFilled && (
              <g>
                <ellipse cx={slot.cx} cy={slot.cy} rx={slot.r} ry={slot.r * 0.75} fill="#14532d" stroke="#86efac" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.85" />
                <text x={slot.cx} y={slot.cy + 4} textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="bold" fontFamily="Kantumruy Pro, sans-serif" opacity="0.9">
                  {slot.khNum}
                </text>
                {/* Active Next Slot Glowing Halo Ring */}
                {isNextSlot && !isAutoPlaying && (
                  <ellipse cx={slot.cx} cy={slot.cy} rx={slot.r + 5} ry={(slot.r + 5) * 0.75} fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse" />
                )}
              </g>
            )}

            {/* Filled Rice Ball with black sesame specks & golden aura */}
            {isFilled && (
              <g className="animate-scale-in" style={{ transformOrigin: `${slot.cx}px ${slot.cy}px` }}>
                <ellipse cx={slot.cx} cy={slot.cy + 7} rx={slot.r} ry={slot.r * 0.4} fill="#052e16" opacity="0.75" />
                <circle cx={slot.cx} cy={slot.cy} r={slot.r} fill="#ffffff" stroke="#fef08a" strokeWidth="1.4" className="drop-shadow-xs" />
                <ellipse cx={slot.cx - 4} cy={slot.cy - 4} rx="4" ry="2.2" fill="#ffffff" opacity="0.9" />
                {/* Sesame seeds (ល្ងខ្មៅ) */}
                <ellipse cx={slot.cx - 3} cy={slot.cy - 2} rx="1.2" ry="0.8" fill="#0f172a" />
                <ellipse cx={slot.cx + 4} cy={slot.cy + 2} rx="1.2" ry="0.8" fill="#0f172a" />
                <ellipse cx={slot.cx - 1} cy={slot.cy + 4} rx="1.1" ry="0.7" fill="#0f172a" />
                <ellipse cx={slot.cx + 2} cy={slot.cy - 5} rx="1.1" ry="0.7" fill="#0f172a" />
                <circle cx={slot.cx} cy={slot.cy} r={slot.r + 3} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.5" />
              </g>
            )}
          </g>
        );
      })}

      {/* RIGHT ZONE: SACRED OFFERINGS (x = 620 to 820) */}
      <rect x="620" y="370" width="200" height="96" rx="14" fill="#2d1d33" stroke="#78350f" strokeWidth="1.2" />

      {/* Lotus Offering in Brass Cup at x=670 */}
      <g transform="translate(670, 410)">
        <ellipse cx="0" cy="14" rx="18" ry="8" fill="#d97706" stroke="#fef08a" strokeWidth="1" />
        <path d="M0 -14 C-8 0 -4 10 0 14 C4 10 8 0 0 -14 Z" fill="#ec4899" />
        <path d="M-6 -6 C-12 2 -8 10 0 14 C-4 10 -6 2 -6 -6 Z" fill="#f472b6" />
        <path d="M6 -6 C12 2 8 10 0 14 C4 10 6 2 6 -6 Z" fill="#f472b6" />
        <rect x="-32" y="24" width="64" height="18" rx="9" fill="#090d16" stroke="#f59e0b" strokeWidth="0.8" />
        <text x="0" y="37" textAnchor="middle" fill="#fde68a" fontSize="9.5" fontWeight="bold" fontFamily="Kantumruy Pro, sans-serif">
          ផ្កាឈូក
        </text>
      </g>

      {/* Incense Burner & Sacred Candles at x=760 */}
      <g transform="translate(760, 405)">
        <ellipse cx="0" cy="18" rx="20" ry="8" fill="#fbbf24" opacity="0.3" />
        {/* Two yellow candles */}
        <rect x="-14" y="0" width="4" height="18" fill="#fef08a" />
        <circle cx="-12" cy="-2" r="3" fill="#f59e0b" className="animate-candle-flicker" />
        <rect x="10" y="0" width="4" height="18" fill="#fef08a" />
        <circle cx="12" cy="-2" r="3" fill="#f59e0b" className="animate-candle-flicker" />
        {/* Incense stick */}
        <rect x="-1" y="4" width="2.5" height="20" fill="#991b1b" />
        <line x1="0" y1="4" x2="0" y2="-10" stroke="#ea580c" strokeWidth="1.5" />
        <circle cx="0" cy="-12" r="2" fill="#f97316" className="animate-pulse" />
        {/* Label Tag */}
        <rect x="-34" y="28" width="68" height="18" rx="9" fill="#090d16" stroke="#f59e0b" strokeWidth="0.8" />
        <text x="0" y="41" textAnchor="middle" fill="#fde68a" fontSize="9.5" fontWeight="bold" fontFamily="Kantumruy Pro, sans-serif">
          ធូប & ទៀន
        </text>
      </g>

      {/* Interactive Tray Hit Target (Click anywhere on tray to roll) */}
      {!isComplete && (
        <ellipse
          cx="450"
          cy="388"
          rx="115"
          ry="38"
          fill="transparent"
          className="cursor-pointer"
          onClick={onRollBall}
        >
          <title>ចុចទីនេះដើម្បីពួតដុំបាយបិណ្ឌ / Click to roll a rice ball</title>
        </ellipse>
      )}

      {/* Bottom Platter Status Badge (Cleanly separated at y=485) */}
      <g transform="translate(450, 485)">
        <rect
          x="-150"
          y="-16"
          width="300"
          height="32"
          rx="16"
          fill={isComplete ? '#065f46' : '#0f172a'}
          opacity="0.95"
          stroke={isComplete ? '#34d399' : '#f59e0b'}
          strokeWidth="1.5"
        />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#fef3c7"
          fontSize="12.5"
          fontWeight="bold"
          fontFamily="Kantumruy Pro, sans-serif"
        >
          {isComplete
            ? '✓ ពួតបានគ្រប់ ៧ ដុំពេញជើងពានហើយ'
            : `ពួតដុំបាយបិណ្ឌ: ${toKhmerDigits(ballsCount)} / ៧ ដុំ (ចុចដើម្បីពួត)`}
        </text>
      </g>
    </g>
  );
};
