import React from 'react';
import { toKhmerDigits } from '../../../domain/services/calendar-service';
import { BayBenDevoteeSvg, BayBenDevoteeType } from './bay-ben-devotee-svg';

interface BayBenProcessionSvgProps {
  round: number; // 1, 2, or 3
  progressAngle: number; // 0 to 360 in degrees
  onAdvance?: () => void;
  locale?: string;
}

interface ProcessionDevoteeItem {
  type: BayBenDevoteeType;
  x: number;
  y: number;
  isFacingLeft: boolean;
  bob: number;
}

export const BayBenProcessionSvg: React.FC<BayBenProcessionSvgProps> = ({
  round,
  progressAngle,
  onAdvance,
  locale = 'kh',
}) => {
  // Courtyard Procession Path centered comfortably in the foreground courtyard
  const centerX = 450;
  const centerY = 416;
  const radiusX = 320;
  const radiusY = 50;

  // Calculate coordinates for 3 procession devotees walking along the path
  const rad1 = (progressAngle * Math.PI) / 180;
  const x1 = centerX + radiusX * Math.cos(rad1);
  const y1 = centerY + radiusY * Math.sin(rad1);
  const isFacingLeft1 = Math.sin(rad1) >= 0;
  const bob1 = Math.sin((progressAngle * Math.PI) / 30) * 3;

  const rad2 = ((progressAngle - 26) * Math.PI) / 180;
  const x2 = centerX + radiusX * Math.cos(rad2);
  const y2 = centerY + radiusY * Math.sin(rad2);
  const isFacingLeft2 = Math.sin(rad2) >= 0;
  const bob2 = Math.sin(((progressAngle - 26) * Math.PI) / 30) * 3;

  const rad3 = ((progressAngle - 52) * Math.PI) / 180;
  const x3 = centerX + radiusX * Math.cos(rad3);
  const y3 = centerY + radiusY * Math.sin(rad3);
  const isFacingLeft3 = Math.sin(rad3) >= 0;
  const bob3 = Math.sin(((progressAngle - 52) * Math.PI) / 30) * 3;

  // Directional guide angles around the clockwise path
  const guideAngles = [30, 90, 150, 210, 270, 330];

  // Depth-sort devotees so lower Y (background) renders first, higher Y (foreground) renders on top
  const rawDevotees: ProcessionDevoteeItem[] = [
    { type: 'elder', x: x3, y: y3, isFacingLeft: isFacingLeft3, bob: bob3 },
    { type: 'bearer', x: x2, y: y2, isFacingLeft: isFacingLeft2, bob: bob2 },
    { type: 'leader', x: x1, y: y1, isFacingLeft: isFacingLeft1, bob: bob1 },
  ];
  const devotees = [...rawDevotees].sort((a, b) => a.y - b.y);

  // Triple Gem rounds data
  const gems = [
    { roundNum: 1, icon: '🪷', titleKh: 'គុណព្រះពុទ្ធ', titleEn: 'Buddha' },
    { roundNum: 2, icon: '📜', titleKh: 'គុណព្រះធម៌', titleEn: 'Dhamma' },
    { roundNum: 3, icon: '☸️', titleKh: 'គុណព្រះសង្ឃ', titleEn: 'Sangha' },
  ];

  return (
    <g id="bay-ben-procession-overlay" className="animate-fade-in">
      {/* Stone-Paved Walking Pathway in Pagoda Courtyard */}
      <ellipse
        cx={centerX}
        cy={centerY}
        rx={radiusX}
        ry={radiusY}
        fill="none"
        stroke="#221929"
        strokeWidth="30"
        opacity="0.8"
      />
      {/* Golden Guiding Path Ribbon */}
      <ellipse
        cx={centerX}
        cy={centerY}
        rx={radiusX}
        ry={radiusY}
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.8"
        strokeDasharray="8 6"
        opacity="0.85"
      />

      {/* Clockwise Directional Arrow Chevrons on Path */}
      {guideAngles.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const ax = centerX + radiusX * Math.cos(rad);
        const ay = centerY + radiusY * Math.sin(rad);
        const tangentAngle = deg + 90;

        return (
          <g key={deg} transform={`translate(${ax}, ${ay}) rotate(${tangentAngle})`}>
            <polygon
              points="-5,-3 0,4 5,-3"
              fill="#fbbf24"
              opacity="0.85"
              className="animate-pulse"
            />
          </g>
        );
      })}

      {/* 3 Walking Devotees (Depth-Sorted with Lantern, Platter, and Prayer) */}
      {devotees.map((d) => (
        <BayBenDevoteeSvg
          key={d.type}
          type={d.type}
          x={d.x}
          y={d.y}
          isFacingLeft={d.isFacingLeft}
          bobOffset={d.bob}
        />
      ))}

      {/* Interactive Walking Path Click Hitbox */}
      <ellipse
        cx={centerX}
        cy={centerY}
        rx={radiusX}
        ry={radiusY}
        fill="transparent"
        stroke="transparent"
        strokeWidth="48"
        className="cursor-pointer"
        onClick={onAdvance}
      >
        <title>ចុចទីនេះដើម្បីបន្តដំណើរប្រទក្សិណ / Click to advance circumambulation</title>
      </ellipse>

      {/* Triple Gem 3-Round Progress HUD Banner at Bottom */}
      <g transform="translate(450, 488)">
        <rect
          x="-220"
          y="-18"
          width="440"
          height="36"
          rx="18"
          fill="#0c101c"
          opacity="0.95"
          stroke="#f59e0b"
          strokeWidth="1.4"
        />

        {/* 3 Segmented Gem Round Indicators */}
        {gems.map((gem, idx) => {
          const isCurrent = round === gem.roundNum;
          const isDone = round > gem.roundNum;
          const posX = -140 + idx * 140;

          return (
            <g key={gem.roundNum} transform={`translate(${posX}, 0)`}>
              {isCurrent && (
                <rect
                  x="-62"
                  y="-14"
                  width="124"
                  height="28"
                  rx="14"
                  fill="#78350f"
                  stroke="#fbbf24"
                  strokeWidth="1"
                />
              )}
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fill={isCurrent ? '#fef08a' : isDone ? '#86efac' : '#94a3b8'}
                fontSize="11.5"
                fontWeight="bold"
                fontFamily="Kantumruy Pro, sans-serif"
              >
                {`${gem.icon} ជុំទី ${toKhmerDigits(gem.roundNum)}: ${locale === 'kh' ? gem.titleKh : gem.titleEn}`}
                {isDone ? ' ✓' : ''}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
};
