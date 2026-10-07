import React from 'react';
import { toKhmerDigits } from '../../../domain/services/calendar-service';

interface FlyingBall {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
  isLanded: boolean;
}

interface BayBenTossSvgProps {
  tossedBalls: FlyingBall[];
  tossedCount: number;
  onTossToPoint?: (x: number, y: number) => void;
}

export const BayBenTossSvg: React.FC<BayBenTossSvgProps> = ({
  tossedBalls,
  tossedCount,
  onTossToPoint,
}) => {
  // Pre-placed targets around sacred Sema boundary stones (សន្លឹកសីមា)
  const targets = [
    { x: 180, y: 400, label: 'សីមាខាងលិច' },
    { x: 260, y: 385, label: 'ខឿនវិហារ' },
    { x: 450, y: 420, label: 'ទីធ្លាកណ្តាល' },
    { x: 640, y: 385, label: 'ខឿនវិហារ' },
    { x: 720, y: 400, label: 'សីមាខាងកើត' },
  ];

  return (
    <g id="bay-ben-toss-overlay" className="animate-fade-in">
      {/* 3 Ethereal Hungry Spirit Silhouettes (ពពួកប្រេត និងដូនតា) waiting in pre-dawn mist */}
      {/* Spirit 1 (Far-Left near West Sema) */}
      <g transform="translate(130, 310)" opacity="0.85" className="animate-pulse">
        <ellipse cx="14" cy="95" rx="18" ry="6" fill="#0284c7" opacity="0.25" />
        <path d="M14 25 C10 45 4 80 8 95 C14 96 22 96 20 95 C24 80 18 45 14 25 Z" fill="#0369a1" opacity="0.75" />
        <circle cx="14" cy="18" r="7" fill="#38bdf8" opacity="0.9" />
        <circle cx="12" cy="17" r="1.2" fill="#ffffff" />
        <circle cx="16" cy="17" r="1.2" fill="#ffffff" />
        <line x1="8" y1="40" x2="2" y2="48" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="40" x2="26" y2="48" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Spirit 2 (Far-Right near East Sema) */}
      <g transform="translate(740, 310)" opacity="0.85" className="animate-pulse">
        <ellipse cx="14" cy="95" rx="18" ry="6" fill="#0284c7" opacity="0.25" />
        <path d="M14 25 C10 45 4 80 8 95 C14 96 22 96 20 95 C24 80 18 45 14 25 Z" fill="#0369a1" opacity="0.75" />
        <circle cx="14" cy="18" r="7" fill="#38bdf8" opacity="0.9" />
        <circle cx="12" cy="17" r="1.2" fill="#ffffff" />
        <circle cx="16" cy="17" r="1.2" fill="#ffffff" />
        <line x1="8" y1="40" x2="2" y2="48" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="40" x2="26" y2="48" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Pulsing Target Rings at Sacred Boundary Stones */}
      {targets.map((tgt, idx) => (
        <g
          key={idx}
          className="cursor-pointer"
          onClick={() => onTossToPoint?.(tgt.x, tgt.y)}
        >
          <circle cx={tgt.x} cy={tgt.y} r="18" fill="#fbbf24" opacity="0.12" className="animate-pulse" />
          <circle cx={tgt.x} cy={tgt.y} r="14" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx={tgt.x} cy={tgt.y} r="3" fill="#fbbf24" />
        </g>
      ))}

      {/* Devotee in White Tossing Sacred Rice */}
      <g transform="translate(360, 385)">
        <ellipse cx="20" cy="56" rx="20" ry="7" fill="#090d16" opacity="0.7" />
        <path d="M8 28 C8 24 32 24 32 28 L35 50 C35 52 5 52 5 50 Z" fill="#e2e8f0" />
        <path d="M6 14 C6 10 34 10 34 14 L33 30 L7 30 Z" fill="#ffffff" />
        <circle cx="20" cy="7" r="7" fill="#fde68a" />
        <line x1="28" y1="18" x2="44" y2="10" stroke="#fde68a" strokeWidth="4.5" strokeLinecap="round" />
        <ellipse cx="14" cy="24" rx="14" ry="4.5" fill="#d97706" stroke="#fef08a" strokeWidth="1" />
      </g>

      {/* Active Airborne Flying Balls along Parabolic Trajectory */}
      {tossedBalls.map((b) => {
        const t = b.progress;
        const controlX = (b.startX + b.targetX) / 2;
        const controlY = Math.min(b.startY, b.targetY) - 95;
        const curX = (1 - t) * (1 - t) * b.startX + 2 * (1 - t) * t * controlX + t * t * b.targetX;
        const curY = (1 - t) * (1 - t) * b.startY + 2 * (1 - t) * t * controlY + t * t * b.targetY;

        return (
          <g key={b.id}>
            <circle cx={curX} cy={curY} r="8" fill="#fbbf24" opacity="0.4" />
            <circle cx={curX} cy={curY} r="5" fill="#ffffff" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx={curX - 1} cy={curY - 1} r="1" fill="#1e293b" />
          </g>
        );
      })}

      {/* Settled Rice Balls & Liberating Spirit Light Blooms */}
      {targets.slice(0, Math.min(tossedCount, targets.length)).map((pt, idx) => (
        <g key={idx} className="animate-scale-in">
          <circle cx={pt.x} cy={pt.y} r="18" fill="none" stroke="#fbbf24" strokeWidth="1.2" className="animate-pulse" />
          <circle cx={pt.x} cy={pt.y} r="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx={pt.x - 1} cy={pt.y} r="0.8" fill="#1e293b" />

          {/* Golden Lotus Merit Bloom rising to the heavens */}
          <g transform={`translate(${pt.x - 10}, ${pt.y - 36 - (idx % 3) * 14})`} className="animate-pulse">
            <ellipse cx="10" cy="14" rx="12" ry="16" fill="#38bdf8" opacity="0.3" filter="url(#moon-glow)" />
            <path d="M10 2 C6 10 3 16 10 22 C17 16 14 10 10 2 Z" fill="#f472b6" opacity="0.9" />
            <circle cx="10" cy="12" r="3" fill="#fef08a" />
          </g>
        </g>
      ))}

      {/* Sacred Pali Dedication Verse Banner */}
      <g transform="translate(450, 485)">
        <rect
          x="-185"
          y="-18"
          width="370"
          height="36"
          rx="18"
          fill="#0f172a"
          opacity="0.95"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="12.5"
          fontWeight="bold"
          fontFamily="Kantumruy Pro, sans-serif"
        >
          {`« ឥទំ មេ ញាតីនំ ហោតុ » — បោះបាន ${toKhmerDigits(tossedCount)} / ៧ ដុំឧទ្ទិសកុសល`}
        </text>
      </g>
    </g>
  );
};
