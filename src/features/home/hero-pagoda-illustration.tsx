import React from 'react';

export type ActivityKey = 'procession' | 'bosBayBen' | 'libation';

interface HeroPagodaIllustrationProps {
  activeKey: ActivityKey;
  className?: string;
}

export const HeroPagodaIllustration: React.FC<HeroPagodaIllustrationProps> = ({
  activeKey,
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 1000 460"
      className={`w-full h-auto block select-none ${className}`}
      aria-label="Pchum Ben Pagoda Illustration"
    >
      <defs>
        {/* Sky Gradients */}
        <linearGradient id="morningSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdf0dd" />
          <stop offset="45%" stopColor="#fbe3c7" />
          <stop offset="85%" stopColor="#f7d4b2" />
          <stop offset="100%" stopColor="#eed0be" />
        </linearGradient>

        <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="45%" stopColor="#1e1e38" />
          <stop offset="80%" stopColor="#312e52" />
          <stop offset="100%" stopColor="#433559" />
        </linearGradient>

        <linearGradient id="hallGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="40%" stopColor="#fef3c7" />
          <stop offset="85%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fcd34d" />
        </linearGradient>

        {/* Roof Gradient */}
        <linearGradient id="khmerRoof" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e06c28" />
          <stop offset="60%" stopColor="#b44d18" />
          <stop offset="100%" stopColor="#8d3810" />
        </linearGradient>

        {/* Gold Spire Gradient */}
        <linearGradient id="khmerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>

        {/* Stone Pathway */}
        <linearGradient id="stonePath" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e2d6c5" />
          <stop offset="100%" stopColor="#cfbea7" />
        </linearGradient>

        {/* Lotus Pond Water */}
        <linearGradient id="pondWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67b0b7" />
          <stop offset="100%" stopColor="#387f87" />
        </linearGradient>
      </defs>

      {/* Background Sky */}
      <rect
        x="0"
        y="0"
        width="1000"
        height="460"
        fill={
          activeKey === 'bosBayBen'
            ? 'url(#nightSky)'
            : activeKey === 'libation'
              ? 'url(#hallGlow)'
              : 'url(#morningSky)'
        }
        className="transition-colors duration-700"
      />

      {/* Sun / Moon celestial body */}
      {activeKey === 'bosBayBen' ? (
        <g className="animate-fade-in">
          {/* Crescent Moon */}
          <circle cx="820" cy="80" r="32" fill="#fef08a" opacity="0.95" />
          <circle cx="832" cy="74" r="28" fill="#1e1e38" />
          {/* Stars in pre-dawn sky */}
          <circle cx="120" cy="60" r="1.5" fill="#ffffff" opacity="0.8" />
          <circle cx="240" cy="90" r="2" fill="#ffffff" opacity="0.9" />
          <circle cx="360" cy="50" r="1.5" fill="#ffffff" opacity="0.7" />
          <circle cx="700" cy="65" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="920" cy="110" r="1.5" fill="#ffffff" opacity="0.75" />
          <circle cx="540" cy="80" r="2.5" fill="#fef08a" opacity="0.9" />
        </g>
      ) : (
        <g className="animate-fade-in">
          {/* Morning Sun */}
          <circle cx="800" cy="120" r="64" fill="#fef08a" opacity="0.35" />
          <circle cx="800" cy="120" r="46" fill="#fef9c3" opacity="0.65" />
          <circle cx="800" cy="120" r="30" fill="#ffffff" opacity="0.9" />
          {/* Soft Morning Clouds */}
          <path
            d="M100 130 q30 -20 60 0 q40 -25 80 0 q30 -15 60 0 h-200 z"
            fill="#ffffff"
            opacity="0.35"
          />
          <path
            d="M620 100 q25 -15 50 0 q30 -20 60 0 q25 -10 50 0 h-160 z"
            fill="#ffffff"
            opacity="0.3"
          />
        </g>
      )}

      {/* Distant Cambodian Sugar Palm Trees (ដើមត្នោត) */}
      <g opacity="0.45">
        {/* Palm 1 (Left) */}
        <path d="M70 280 Q65 190 60 110" stroke="#713f12" strokeWidth="3" fill="none" />
        <circle cx="60" cy="105" r="18" fill="#365314" />
        <path d="M42 105 Q60 85 78 105" stroke="#4d7c0f" strokeWidth="2.5" fill="none" />
        <path d="M45 115 Q60 90 75 115" stroke="#4d7c0f" strokeWidth="2.5" fill="none" />
        {/* Palm 2 */}
        <path d="M92 280 Q96 180 100 95" stroke="#713f12" strokeWidth="3.5" fill="none" />
        <circle cx="100" cy="90" r="22" fill="#365314" />
        <path d="M78 90 Q100 68 122 90" stroke="#4d7c0f" strokeWidth="3" fill="none" />
        {/* Palm 3 (Right) */}
        <path d="M910 280 Q905 180 900 100" stroke="#713f12" strokeWidth="3" fill="none" />
        <circle cx="900" cy="95" r="20" fill="#365314" />
        <path d="M880 95 Q900 75 920 95" stroke="#4d7c0f" strokeWidth="2.5" fill="none" />
        {/* Palm 4 */}
        <path d="M935 280 Q938 190 940 120" stroke="#713f12" strokeWidth="3" fill="none" />
        <circle cx="940" cy="115" r="17" fill="#365314" />
      </g>

      {/* Main Cambodian Buddhist Pagoda Structure (វត្តអារាមខ្មែរ) */}
      <g id="pagoda">
        {/* Base Platform / Foundation */}
        <polygon
          points="220,290 780,290 810,315 190,315"
          fill={activeKey === 'bosBayBen' ? '#332940' : '#d4c2aa'}
        />
        <rect
          x="200"
          y="315"
          width="600"
          height="15"
          fill={activeKey === 'bosBayBen' ? '#241c30' : '#b8a58d'}
        />

        {/* Temple Hall Columns */}
        <g fill={activeKey === 'bosBayBen' ? '#fff1d6' : '#fdfaf5'} opacity="0.95">
          <rect x="270" y="225" width="14" height="65" rx="2" />
          <rect x="330" y="225" width="14" height="65" rx="2" />
          <rect x="390" y="225" width="14" height="65" rx="2" />
          <rect x="450" y="225" width="14" height="65" rx="2" />
          <rect x="536" y="225" width="14" height="65" rx="2" />
          <rect x="596" y="225" width="14" height="65" rx="2" />
          <rect x="656" y="225" width="14" height="65" rx="2" />
          <rect x="716" y="225" width="14" height="65" rx="2" />
        </g>

        {/* Grand Entrance Door / Portal */}
        <rect
          x="478"
          y="235"
          width="44"
          height="55"
          rx="4"
          fill={activeKey === 'bosBayBen' ? '#f59e0b' : '#78350f'}
          opacity={activeKey === 'bosBayBen' ? '0.85' : '0.9'}
        />
        <path
          d="M478 235 Q500 215 522 235"
          fill="none"
          stroke="url(#khmerGold)"
          strokeWidth="3.5"
        />

        {/* Tier 1 Lower Roof */}
        <polygon points="210,230 790,230 750,195 250,195" fill="url(#khmerRoof)" />
        {/* Roof Trim Gold */}
        <line x1="205" y1="230" x2="795" y2="230" stroke="url(#khmerGold)" strokeWidth="4" />
        {/* Choofah (ជហ្វា) - Swept roof finials */}
        <path d="M205 230 Q190 220 185 205 Q192 215 210 225" fill="url(#khmerGold)" />
        <path d="M795 230 Q810 220 815 205 Q808 215 790 225" fill="url(#khmerGold)" />

        {/* Tier 2 Middle Roof */}
        <polygon points="260,198 740,198 705,160 295,160" fill="url(#khmerRoof)" />
        <line
          x1="255"
          y1="198"
          x2="745"
          y2="198"
          stroke="url(#khmerGold)"
          strokeWidth="3.5"
        />
        <path d="M255 198 Q240 188 235 175 Q242 185 260 194" fill="url(#khmerGold)" />
        <path d="M745 198 Q760 188 765 175 Q758 185 740 194" fill="url(#khmerGold)" />

        {/* Tier 3 Top Roof Peak */}
        <polygon points="320,162 680,162 620,125 380,125" fill="url(#khmerRoof)" />
        <line x1="315" y1="162" x2="685" y2="162" stroke="url(#khmerGold)" strokeWidth="3" />
        <path d="M315 162 Q302 152 298 140 Q305 150 320 158" fill="url(#khmerGold)" />
        <path d="M685 162 Q698 152 702 140 Q695 150 680 158" fill="url(#khmerGold)" />

        {/* Grand Central Spire (កំពូលព្រះវិហារ) */}
        <polygon points="485,125 515,125 500,45" fill="url(#khmerGold)" />
        <circle cx="500" cy="40" r="6" fill="#fef08a" />
        {/* Spire Umbrella rings */}
        <line x1="490" y1="95" x2="510" y2="95" stroke="#ca8a04" strokeWidth="2.5" />
        <line x1="492" y1="75" x2="508" y2="75" stroke="#ca8a04" strokeWidth="2.5" />
        <line x1="495" y1="60" x2="505" y2="60" stroke="#ca8a04" strokeWidth="2" />

        {/* Stupa (ចេតិយ) on Left */}
        <polygon points="150,290 190,290 180,240 160,240" fill="#f8fafc" opacity="0.9" />
        <polygon points="160,240 180,240 170,170" fill="url(#khmerGold)" />
        <circle cx="170" cy="165" r="3.5" fill="#fef08a" />

        {/* Stupa (ចេតិយ) on Right */}
        <polygon points="810,290 850,290 840,240 820,240" fill="#f8fafc" opacity="0.9" />
        <polygon points="820,240 840,240 830,170" fill="url(#khmerGold)" />
        <circle cx="830" cy="165" r="3.5" fill="#fef08a" />

        {/* National Flag of Cambodia (ទង់ជាតិកម្ពុជា) */}
        <line x1="230" y1="172" x2="230" y2="290" stroke="#5c2c16" strokeWidth="2.5" />
        <circle cx="230" cy="172" r="2.2" fill="#f59e0b" />
        <g transform="translate(230, 175)">
          {/* Top Blue Band */}
          <rect x="0" y="0" width="28" height="4.5" fill="#032ea1" />
          {/* Middle Red Band */}
          <rect x="0" y="4.5" width="28" height="9" fill="#e00025" />
          {/* Bottom Blue Band */}
          <rect x="0" y="13.5" width="28" height="4.5" fill="#032ea1" />

          {/* Angkor Wat Silhouette in Pure White */}
          {/* Bottom Foundation */}
          <rect x="5.5" y="11.4" width="17" height="1.4" fill="#ffffff" />
          {/* Stepped Plinth */}
          <rect x="7" y="10" width="14" height="1.4" fill="#ffffff" />
          {/* Central Main Tower */}
          <rect x="12.3" y="6.8" width="3.4" height="3.2" fill="#ffffff" />
          <polygon points="11.8,6.8 16.2,6.8 14,4.4" fill="#ffffff" />
          {/* Left Tower */}
          <rect x="8.2" y="7.8" width="2.6" height="2.2" fill="#ffffff" />
          <polygon points="7.7,7.8 11.3,7.8 9.5,6" fill="#ffffff" />
          {/* Right Tower */}
          <rect x="17.2" y="7.8" width="2.6" height="2.2" fill="#ffffff" />
          <polygon points="16.7,7.8 20.3,7.8 18.5,6" fill="#ffffff" />
        </g>
      </g>

      {/* Sacred Lotus Pond in Foreground (Left & Right) */}
      <path d="M0 370 Q160 360 220 460 L0 460 Z" fill="url(#pondWater)" opacity="0.85" />
      {/* Lily Pads & Lotus Flowers */}
      <ellipse cx="60" cy="405" rx="30" ry="12" fill="#15803d" opacity="0.85" />
      <ellipse cx="130" cy="425" rx="36" ry="14" fill="#166534" opacity="0.85" />
      {/* Pink Lotus Flower 1 */}
      <g transform="translate(60, 395)" className="animate-lotus-float">
        <path d="M-8 0 Q0 -16 8 0 Q0 6 -8 0" fill="#ec4899" />
        <path d="M-14 2 Q0 -12 14 2 Q0 8 -14 2" fill="#f472b6" opacity="0.8" />
        <circle cx="0" cy="-2" r="3" fill="#fde047" />
      </g>
      {/* Pink Lotus Flower 2 */}
      <g transform="translate(135, 415)" className="animate-lotus-float">
        <path d="M-10 0 Q0 -18 10 0 Q0 8 -10 0" fill="#db2777" />
        <path d="M-16 3 Q0 -14 16 3 Q0 9 -16 3" fill="#f472b6" opacity="0.75" />
        <circle cx="0" cy="-3" r="3.5" fill="#fde047" />
      </g>

      {/* Paved Center Courtyard & Stone Pathway for Pilgrims */}
      <polygon points="320,310 680,310 880,460 120,460" fill="url(#stonePath)" />

      {/* Decorative Pathway Flagstones */}
      <g stroke="#b8a58d" strokeWidth="1.5" opacity="0.6">
        <line x1="280" y1="350" x2="720" y2="350" />
        <line x1="220" y1="390" x2="780" y2="390" />
        <line x1="160" y1="430" x2="840" y2="430" />
        <line x1="430" y1="310" x2="380" y2="460" />
        <line x1="570" y1="310" x2="620" y2="460" />
      </g>

      {/* SCENE SPECIFIC: Illustrated People & Activity Figures */}
      {activeKey === 'procession' && (
        <g id="procession-figures" className="animate-fade-in">
          {/* 1. Buddhist Monk leading mindfully (Center-Right) */}
          <g transform="translate(560, 318)">
            {/* Saffron Robe */}
            <path d="M10 25 C10 18 35 18 35 25 L38 95 C38 98 8 98 8 95 Z" fill="#ea580c" />
            {/* Shaved Head */}
            <circle cx="23" cy="14" r="10" fill="#fed7aa" />
            {/* Robe Fold over shoulder */}
            <path d="M12 25 Q24 45 36 30" stroke="#c2410c" strokeWidth="2.5" fill="none" />
            {/* Black Alms Bowl (បាត្រ) */}
            <ellipse cx="32" cy="46" rx="8" ry="7" fill="#0f172a" />
            <ellipse cx="32" cy="44" rx="7" ry="3" fill="#334155" />
          </g>

          {/* 2. Grandmother in Traditional White Shirt & Silk Sampot (Left-Center) */}
          <g transform="translate(365, 332)">
            {/* Sampot (Skirt) */}
            <path d="M8 48 C8 45 32 45 32 48 L35 95 C35 97 5 97 5 95 Z" fill="#831843" />
            {/* White Embroidered Blouse (អាវប៉ាក់) */}
            <path d="M6 26 C6 20 34 20 34 26 L32 50 L8 50 Z" fill="#ffffff" />
            {/* Head & Silver Hair Bun */}
            <circle cx="20" cy="15" r="9" fill="#fde68a" />
            <circle cx="26" cy="12" r="4.5" fill="#94a3b8" />
            {/* Carrying Traditional Silver Tray (ជើងពាន) with Lotus */}
            <path
              d="M-4 34 L14 34 L9 42 L1 42 Z"
              fill="#cbd5e1"
              stroke="#94a3b8"
              strokeWidth="1"
            />
            <circle cx="5" cy="31" r="5" fill="#ec4899" />
            {/* Incense sticks with smoke */}
            <line x1="8" y1="31" x2="16" y2="18" stroke="#b45309" strokeWidth="1" />
            <path
              d="M16 18 Q20 12 18 6 T22 0"
              stroke="#e2e8f0"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
          </g>

          {/* 3. Father in White Shirt carrying 3-tier Tiffin Carrier (Chan Srak) */}
          <g transform="translate(440, 325)">
            {/* Dark Sampot Chong Kben */}
            <path d="M10 50 C10 46 36 46 36 50 L38 98 C38 100 8 100 8 98 Z" fill="#451a03" />
            {/* White Shirt */}
            <path d="M8 26 C8 20 38 20 38 26 L36 52 L10 52 Z" fill="#ffffff" />
            <circle cx="23" cy="14" r="9.5" fill="#fed7aa" />
            {/* Traditional 3-Tier Metallic Chan Srak (ចានស្រាក់) */}
            <g transform="translate(42, 46)">
              <rect
                x="0"
                y="8"
                width="12"
                height="6"
                rx="1.5"
                fill="#e2e8f0"
                stroke="#94a3b8"
                strokeWidth="0.8"
              />
              <rect
                x="0"
                y="15"
                width="12"
                height="6"
                rx="1.5"
                fill="#e2e8f0"
                stroke="#94a3b8"
                strokeWidth="0.8"
              />
              <rect
                x="0"
                y="22"
                width="12"
                height="6"
                rx="1.5"
                fill="#e2e8f0"
                stroke="#94a3b8"
                strokeWidth="0.8"
              />
              {/* Carrier Handle */}
              <path
                d="M-1 26 L-1 4 Q6 -2 13 4 L13 26"
                stroke="#ca8a04"
                strokeWidth="1.2"
                fill="none"
              />
            </g>
          </g>

          {/* 4. Youth / Child in White carrying Lotus Flowers (Far Left) */}
          <g transform="translate(305, 355)">
            {/* Purple Silk Sampot */}
            <path d="M8 38 C8 35 26 35 26 38 L28 75 C28 77 6 77 6 75 Z" fill="#4338ca" />
            {/* White Shirt */}
            <path d="M7 20 C7 16 27 16 27 20 L26 40 L8 40 Z" fill="#ffffff" />
            <circle cx="17" cy="12" r="7.5" fill="#fde68a" />
            {/* Hand holding lotus bouquet */}
            <line x1="20" y1="26" x2="28" y2="18" stroke="#16a34a" strokeWidth="1.5" />
            <circle cx="29" cy="16" r="4.5" fill="#f472b6" />
          </g>
        </g>
      )}

      {activeKey === 'bosBayBen' && (
        <g id="bos-bay-ben-figures" className="animate-fade-in">
          {/* Candlelight glow circles on the pagoda stones */}
          <ellipse cx="380" cy="400" rx="35" ry="14" fill="#fbbf24" opacity="0.3" />
          <ellipse cx="500" cy="410" rx="40" ry="16" fill="#fbbf24" opacity="0.35" />
          <ellipse cx="620" cy="390" rx="35" ry="14" fill="#fbbf24" opacity="0.3" />

          {/* Golden Candles & Incense on the ground */}
          <g transform="translate(380, 396)">
            <rect x="0" y="0" width="3" height="12" fill="#fef08a" />
            <circle cx="1.5" cy="-2" r="2.5" fill="#f59e0b" className="animate-candle-flicker" />
          </g>
          <g transform="translate(500, 406)">
            <rect x="0" y="0" width="3" height="14" fill="#fef08a" />
            <circle cx="1.5" cy="-2" r="3" fill="#f59e0b" className="animate-candle-flicker" />
          </g>
          <g transform="translate(620, 386)">
            <rect x="0" y="0" width="3" height="12" fill="#fef08a" />
            <circle cx="1.5" cy="-2" r="2.5" fill="#f59e0b" className="animate-candle-flicker" />
          </g>

          {/* White rice balls (ដុំបាយបិណ្ឌ) scattered gently */}
          <circle cx="360" cy="410" r="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="410" cy="415" r="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="480" cy="425" r="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="530" cy="420" r="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="590" cy="405" r="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="640" cy="410" r="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />

          {/* Devotees circumambulating around the vihara */}
          <g transform="translate(480, 330)">
            <path d="M8 48 C8 45 32 45 32 48 L35 95 C35 97 5 97 5 95 Z" fill="#1e1b4b" />
            <path d="M6 24 C6 18 34 18 34 24 L32 50 L8 50 Z" fill="#f8fafc" />
            <circle cx="20" cy="14" r="9" fill="#fde68a" />
            {/* Plate with Rice Balls */}
            <ellipse
              cx="28"
              cy="36"
              rx="9"
              ry="3.5"
              fill="#e2e8f0"
              stroke="#94a3b8"
              strokeWidth="0.8"
            />
            <circle cx="26" cy="34" r="2.5" fill="#ffffff" />
            <circle cx="30" cy="34" r="2.5" fill="#ffffff" />
          </g>

          <g transform="translate(380, 340)">
            <path d="M8 46 C8 42 30 42 30 46 L33 90 C33 92 5 92 5 90 Z" fill="#312e81" />
            <path d="M6 22 C6 17 32 17 32 22 L30 48 L8 48 Z" fill="#f8fafc" />
            <circle cx="19" cy="13" r="8.5" fill="#fed7aa" />
            <ellipse
              cx="26"
              cy="32"
              rx="8"
              ry="3"
              fill="#e2e8f0"
              stroke="#94a3b8"
              strokeWidth="0.8"
            />
            <circle cx="26" cy="30" r="2.5" fill="#ffffff" />
          </g>
        </g>
      )}

      {activeKey === 'libation' && (
        <g id="libation-figures" className="animate-fade-in">
          {/* Sacred Libation Water vessel & Monastic Blessing scene */}
          {/* Woven prayer mat on the floor */}
          <polygon points="340,360 660,360 740,440 260,440" fill="#b45309" opacity="0.35" />

          {/* Monks in row blessing (Center) */}
          <g transform="translate(430, 320)">
            <path d="M12 25 C12 18 42 18 42 25 L45 80 L9 80 Z" fill="#ea580c" />
            <circle cx="27" cy="14" r="9.5" fill="#fed7aa" />
            {/* Hands in Sampeah */}
            <ellipse cx="27" cy="36" rx="5" ry="6" fill="#fde047" />
          </g>

          <g transform="translate(510, 320)">
            <path d="M12 25 C12 18 42 18 42 25 L45 80 L9 80 Z" fill="#ea580c" />
            <circle cx="27" cy="14" r="9.5" fill="#fed7aa" />
            <ellipse cx="27" cy="36" rx="5" ry="6" fill="#fde047" />
          </g>

          {/* Sacred Brass Libation Vessel (កណ្ឌោ) pouring water */}
          <g transform="translate(360, 360)">
            {/* Glass/Brass Vessel */}
            <path
              d="M10 0 L18 0 L15 15 L20 28 L8 28 L13 15 Z"
              fill="url(#khmerGold)"
              stroke="#b45309"
              strokeWidth="1"
            />
            {/* Stream of Sacred Libation Water (ច្រូចទឹក) */}
            <line
              x1="8"
              y1="28"
              x2="8"
              y2="60"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="3 2"
              opacity="0.9"
            />
            {/* Water Bowl beneath */}
            <ellipse
              cx="8"
              cy="62"
              rx="14"
              ry="6"
              fill="#cbd5e1"
              stroke="#64748b"
              strokeWidth="1"
            />
            <ellipse cx="8" cy="61" rx="11" ry="4" fill="#38bdf8" opacity="0.8" />
            {/* Water Ripple rings */}
            <circle
              cx="8"
              cy="62"
              r="8"
              fill="none"
              stroke="#e0f2fe"
              strokeWidth="1"
              opacity="0.7"
            />
          </g>
        </g>
      )}

      {/* Floating Soft Golden Merit Particles */}
      <circle
        cx="340"
        cy="210"
        r="2"
        fill="#fde047"
        opacity="0.8"
        className="animate-float-sparkle-1"
      />
      <circle
        cx="480"
        cy="170"
        r="2.5"
        fill="#fde047"
        opacity="0.85"
        className="animate-float-sparkle-2"
      />
      <circle
        cx="640"
        cy="200"
        r="2"
        fill="#fde047"
        opacity="0.7"
        className="animate-float-sparkle-3"
      />
      <circle
        cx="780"
        cy="160"
        r="3"
        fill="#fef08a"
        opacity="0.75"
        className="animate-float-sparkle-1"
      />
    </svg>
  );
};
