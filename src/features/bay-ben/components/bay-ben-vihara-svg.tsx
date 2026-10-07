import React from 'react';

interface BayBenViharaSvgProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

export const BayBenViharaSvg: React.FC<BayBenViharaSvgProps> = ({ children, onClick }) => {
  return (
    <svg
      viewBox="0 0 900 520"
      className="w-full h-auto max-h-[500px] select-none rounded-2xl shadow-inner drop-shadow-sm"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      aria-label="Bos Bay Ben Sacred Dawn Pagoda Scene"
    >
      <defs>
        {/* Mystic Pre-Dawn Sky Gradient */}
        <linearGradient id="bay-ben-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#080716" />
          <stop offset="35%" stopColor="#151233" />
          <stop offset="65%" stopColor="#2c1a45" />
          <stop offset="88%" stopColor="#4c1e3d" />
          <stop offset="100%" stopColor="#632617" />
        </linearGradient>

        {/* Flagstone Courtyard Gradient */}
        <linearGradient id="bay-ben-ground" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2b2133" />
          <stop offset="50%" stopColor="#1f1826" />
          <stop offset="100%" stopColor="#130e17" />
        </linearGradient>

        {/* Terracotta Khmer Roof Tile Gradient */}
        <linearGradient id="khmer-tile-roof" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="45%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>

        {/* Golden Ridge & Chofa Gradient */}
        <linearGradient id="khmer-gold-ridge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Candlelight & Altar Radial Glow */}
        <radialGradient id="candle-radial-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>

        {/* Moon Soft Glow Filter */}
        <filter id="moon-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Pre-Dawn Sky Backdrop */}
      <rect width="900" height="520" fill="url(#bay-ben-sky)" />

      {/* Predawn Stars */}
      <g opacity="0.85">
        <circle cx="75" cy="40" r="1.5" fill="#fef08a" className="animate-pulse" />
        <circle cx="160" cy="75" r="1.2" fill="#ffffff" />
        <circle cx="250" cy="30" r="1.6" fill="#fde68a" className="animate-pulse" />
        <circle cx="360" cy="60" r="1.3" fill="#ffffff" />
        <circle cx="660" cy="35" r="1.8" fill="#fef08a" className="animate-pulse" />
        <circle cx="750" cy="65" r="1.2" fill="#ffffff" />
        <circle cx="835" cy="28" r="1.5" fill="#fde68a" />
      </g>

      {/* Radiant Crescent Moon (ព្រះចន្ទខ្នើត) */}
      <g transform="translate(90, 30)" filter="url(#moon-soft-glow)">
        <circle cx="26" cy="26" r="24" fill="#fef08a" opacity="0.95" />
        <circle cx="35" cy="18" r="21" fill="#0b0a1a" />
        <circle cx="26" cy="26" r="28" fill="#fbbf24" opacity="0.18" />
      </g>

      {/* Distant Sugar Palms Silhouettes (ដើមត្នោតខ្មែរ) */}
      <g fill="#140e21" opacity="0.65">
        <path d="M45 345 Q48 240 52 165 Q56 240 60 345 Z" />
        <circle cx="52" cy="165" r="20" />
        <path d="M840 345 Q844 240 848 175 Q852 240 856 345 Z" />
        <circle cx="848" cy="175" r="18" />
      </g>

      {/* Flagstone Courtyard Ground */}
      <rect x="0" y="345" width="900" height="175" fill="url(#bay-ben-ground)" />
      <line x1="0" y1="345" x2="900" y2="345" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="1" />

      {/* AUTHENTIC SACRED KHMER VIHARA (ព្រះវិហារវត្តអារាម) */}
      <g id="sacred-vihara-pagoda" transform="translate(190, 42)">
        {/* Tiered Sandstone Terrace (ខឿនព្រះវិហារ) */}
        <polygon points="30,265 490,265 515,295 5,295" fill="#2d2238" />
        <rect x="15" y="295" width="490" height="10" fill="#1d1625" />
        {/* Terrace Steps & Guardian Balustrades */}
        <polygon points="205,265 315,265 328,303 192,303" fill="#3f324c" />
        <rect x="195" y="300" width="130" height="5" fill="#291e33" />

        {/* Sanctuary Inner Hall with Cream Columns */}
        <rect x="80" y="195" width="360" height="72" fill="#fffbeb" opacity="0.95" />
        {/* 6 Carved Columns with Golden Lotus Capitals */}
        {[85, 145, 205, 305, 365, 425].map((colX) => (
          <g key={colX}>
            <rect x={colX} y="195" width="12" height="70" fill="#92400e" rx="1" />
            <rect x={colX - 2} y="193" width="16" height="5" fill="#f59e0b" />
          </g>
        ))}

        {/* Sanctuary Entrance Portal with Golden Buddha Halo Glow */}
        <rect x="232" y="202" width="56" height="65" rx="3" fill="#3b1104" />
        <ellipse cx="260" cy="230" rx="18" ry="24" fill="#fbbf24" opacity="0.75" />
        {/* Seated Golden Buddha Statue Silhouette */}
        <circle cx="260" cy="220" r="5" fill="#78350f" />
        <path d="M253 229 C253 225 267 225 267 229 L270 244 L250 244 Z" fill="#78350f" />
        <ellipse cx="260" cy="245" rx="12" ry="3.5" fill="#f59e0b" />
        {/* Portal Arched Pediment */}
        <path d="M230 205 Q260 188 290 205" fill="none" stroke="url(#khmer-gold-ridge)" strokeWidth="3" />

        {/* TIER 1: Lower Sweeping Pagoda Roof with Curved Eaves */}
        <path d="M 10 200 Q 135 186 260 128 Q 385 186 510 200 Z" fill="url(#khmer-tile-roof)" />
        <path d="M 10 200 Q 260 182 510 200" fill="none" stroke="url(#khmer-gold-ridge)" strokeWidth="3.2" />
        {/* Graceful Tier 1 Chofas (ជហ្វា) */}
        <path d="M10 200 C-6 186 -9 166 2 160 C5 171 7 190 17 196 Z" fill="url(#khmer-gold-ridge)" />
        <path d="M510 200 C526 186 529 166 518 160 C515 171 513 190 503 196 Z" fill="url(#khmer-gold-ridge)" />

        {/* TIER 2: Mid Sweeping Roof */}
        <path d="M 65 152 Q 162 138 260 90 Q 358 138 455 152 Z" fill="url(#khmer-tile-roof)" />
        <path d="M 65 152 Q 260 135 455 152" fill="none" stroke="url(#khmer-gold-ridge)" strokeWidth="2.8" />
        {/* Tier 2 Chofas */}
        <path d="M65 152 C51 139 48 122 57 116 C60 125 62 141 71 148 Z" fill="url(#khmer-gold-ridge)" />
        <path d="M455 152 C469 139 472 122 463 116 C460 125 458 141 449 148 Z" fill="url(#khmer-gold-ridge)" />

        {/* TIER 3: Main Gable Roof & Carved Pediment (ហោជាង) */}
        <path d="M 120 106 Q 190 92 260 48 Q 330 92 400 106 Z" fill="url(#khmer-tile-roof)" />
        <path d="M 120 106 Q 260 90 400 106" fill="none" stroke="url(#khmer-gold-ridge)" strokeWidth="2.5" />
        {/* Gilded Pediment Floral Medallion */}
        <circle cx="260" cy="74" r="6" fill="#fef08a" stroke="#d97706" strokeWidth="1" />

        {/* Sacred Golden Spire (កំពូលប្រាសាទព្រះវិហារ) */}
        <polygon points="260,-16 254,48 266,48" fill="url(#khmer-gold-ridge)" />
        <circle cx="260" cy="-18" r="4.5" fill="#fef08a" />
        <circle cx="260" cy="8" r="5" fill="#f59e0b" />
        <ellipse cx="260" cy="24" rx="7.5" ry="3.2" fill="#f59e0b" />
      </g>

      {/* Sacred Sema Boundary Stones (សន្លឹកសីមា) at Left & Right Courtyard */}
      <g transform="translate(110, 365)">
        <ellipse cx="14" cy="46" rx="22" ry="9" fill="url(#candle-radial-glow)" />
        <path d="M6 20 C6 5 22 5 22 20 L24 46 L4 46 Z" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="14" cy="18" r="4.5" fill="#fbbf24" opacity="0.85" />
      </g>
      <g transform="translate(760, 365)">
        <ellipse cx="14" cy="46" rx="22" ry="9" fill="url(#candle-radial-glow)" />
        <path d="M6 20 C6 5 22 5 22 20 L24 46 L4 46 Z" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="14" cy="18" r="4.5" fill="#fbbf24" opacity="0.85" />
      </g>

      {/* Interactive Phase Children Layer */}
      {children}
    </svg>
  );
};
