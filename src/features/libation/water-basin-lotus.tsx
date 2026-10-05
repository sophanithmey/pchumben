import React from 'react';
import { Sparkles } from 'lucide-react';

interface WaterBasinLotusProps {
  progressPercent: number; // 0 to 100
  isPouring: boolean;
  dedicationName?: string;
  isComplete: boolean;
}

export const WaterBasinLotus: React.FC<WaterBasinLotusProps> = ({
  progressPercent,
  isPouring,
  dedicationName,
  isComplete,
}) => {
  // Clamp progress between 0 and 100
  const clamped = Math.max(0, Math.min(100, progressPercent));

  return (
    <div className="relative flex flex-col items-center">
      {/* Dedication floating ribbon */}
      {dedicationName && dedicationName.trim() && (
        <div className="mb-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 shadow-2xs text-xs font-bold text-amber-950 font-khmer flex items-center gap-1.5 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>ឧទ្ទិសជូន ៖ {dedicationName.trim()}</span>
        </div>
      )}

      {/* Main Ceremonial Lotus Basin (ផ្តិលមាសច្រូចទឹក) */}
      <div
        className={`relative w-64 h-36 sm:w-80 sm:h-44 rounded-b-[130px] border-4 border-amber-400 bg-white bg-gradient-to-b from-amber-100/40 via-amber-50/20 to-white/90 overflow-hidden shadow-xl flex items-end justify-center transition-all duration-500 ${
          isComplete ? 'ring-4 ring-amber-300/80 shadow-[0_0_40px_rgba(245,158,11,0.45)]' : ''
        }`}
      >
        {/* Basin Ornamental Rim Highlight */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300 opacity-80 z-20" />

        {/* Concentric Impact Water Ripples (Active when water is pouring) */}
        {isPouring && (
          <div className="absolute inset-x-0 bottom-0 top-1/4 flex items-center justify-center pointer-events-none z-15">
            <span className="absolute w-16 h-8 rounded-full border-2 border-sky-300/80 animate-water-ripple-1" />
            <span className="absolute w-24 h-12 rounded-full border-2 border-sky-200/70 animate-water-ripple-2" />
            <span className="absolute w-32 h-16 rounded-full border border-cyan-100/60 animate-water-ripple-3" />
          </div>
        )}

        {/* Liquid Water Container */}
        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200/90 transition-all duration-500 ease-out overflow-hidden z-10"
          style={{ height: `${Math.max(8, clamped)}%` }}
        >
          {/* Surface Wave Layer 1 (Sinusoidal rolling wave) */}
          <div className="absolute -top-3 left-0 w-[200%] h-6 opacity-60 animate-wave-1">
            <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-full fill-sky-200">
              <path d="M0,20 C150,5 350,35 500,20 C650,5 850,35 1000,20 C1150,5 1200,20 1200,20 L1200,40 L0,40 Z" />
            </svg>
          </div>

          {/* Surface Wave Layer 2 (Opposing shimmering crest) */}
          <div className="absolute -top-3 left-0 w-[200%] h-6 opacity-45 animate-wave-2">
            <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-full fill-white">
              <path d="M0,25 C200,38 400,10 600,25 C800,40 1000,12 1200,25 L1200,40 L0,40 Z" />
            </svg>
          </div>

          {/* Sub-surface Light Refraction Beams */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

          {/* Floating Jasmine & Lotus Petals in Water */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="absolute left-[20%] top-[40%] text-sm select-none opacity-80 animate-drift-petal-1">🌸</span>
            <span className="absolute right-[25%] top-[50%] text-xs select-none opacity-75 animate-drift-petal-2">🤍</span>
            <span className="absolute left-[65%] top-[30%] text-xs select-none opacity-85 animate-drift-petal-1">🌸</span>
          </div>
        </div>

        {/* Floating Sacred Lotus Blossom that rises with the water */}
        <div
          className="absolute z-20 transition-all duration-500 ease-out select-none flex flex-col items-center animate-lotus-bob"
          style={{
            bottom: `calc(${Math.min(88, Math.max(6, clamped))}% - 20px)`,
          }}
        >
          {/* Golden glow aura around lotus when complete */}
          {isComplete && (
            <div className="absolute -inset-4 rounded-full bg-amber-400/40 blur-md animate-merit-glow pointer-events-none" />
          )}

          {/* Sacred Lotus Flower Icon / Graphic */}
          <div className="relative text-3xl sm:text-4xl drop-shadow-[0_4px_8px_rgba(165,37,73,0.35)] hover:scale-110 transition-transform">
            🪷
          </div>

          {/* Floating water ripples underneath lotus blossom */}
          <div className="w-12 h-2 rounded-full bg-sky-900/30 blur-[1px] mt-0.5" />
        </div>
      </div>

      {/* Carved Basin Pedestal Foot (ជើងពាន ឬ ជើងផ្តិល) */}
      <div className="w-32 sm:w-40 h-4 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-b-xl shadow-md border-t border-amber-300" />
      <div className="w-44 sm:w-52 h-2.5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded-b-2xl shadow-sm -mt-0.5" />
    </div>
  );
};
