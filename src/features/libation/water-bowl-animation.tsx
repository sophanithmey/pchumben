import React from 'react';
import { Droplet, Sparkles } from 'lucide-react';

interface WaterBowlAnimationProps {
  progressPercent: number; // 0 to 100
  isPouring: boolean;
  onPour: () => void;
  onComplete: () => void;
}

export const WaterBowlAnimation: React.FC<WaterBowlAnimationProps> = ({
  progressPercent,
  isPouring,
  onPour,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-b from-amber-50/50 via-warmth-100/60 to-lotus-50/50 rounded-3xl border border-warmth-200/90 shadow-inner overflow-hidden">
      {/* Golden Pitcher */}
      <div
        className={`text-4xl sm:text-5xl transition-transform duration-300 ${
          isPouring ? '-rotate-45 -translate-x-4' : 'rotate-0'
        }`}
        title="Golden Pitcher"
      >
        🫖
      </div>

      {/* Falling Water Stream */}
      <div className="h-14 flex flex-col items-center justify-center">
        {isPouring ? (
          <div className="flex flex-col items-center animate-pulse">
            <span className="w-1.5 h-3 bg-sky-400 rounded-full animate-bounce mb-1" />
            <span className="w-1 h-3 bg-sky-300 rounded-full" />
            <span className="w-1.5 h-2 bg-sky-200 rounded-full" />
          </div>
        ) : (
          <div className="text-xs text-warmth-400 flex items-center gap-1 font-medium">
            <Droplet className="w-3.5 h-3.5" />
            <span>ចុចដើម្បីច្រូចទឹក (Tap to pour)</span>
          </div>
        )}
      </div>

      {/* Lotus Bowl (ផ្តិលទឹក) Filling Up */}
      <div className="relative w-44 h-24 sm:w-52 sm:h-28 rounded-b-full border-4 border-amber-400/80 bg-white/70 overflow-hidden shadow-md flex items-end justify-center">
        {/* Water Level */}
        <div
          className="w-full bg-gradient-to-t from-sky-400 via-sky-300 to-sky-200/90 transition-all duration-300 relative"
          style={{ height: `${Math.min(100, progressPercent)}%` }}
        >
          {isPouring && (
            <div className="absolute inset-0 bg-white/30 animate-pulse pointer-events-none" />
          )}
        </div>

        {/* Floating Lotus Flower Blossom */}
        <div
          className="absolute text-2xl transition-all duration-300 select-none"
          style={{
            bottom: `calc(${Math.min(85, Math.max(10, progressPercent))}% - 14px)`,
          }}
        >
          🪷
        </div>
      </div>

      {/* Progress & Pour Control Button */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <div className="text-xs font-bold text-warmth-700 font-mono">
          {progressPercent}% / 100% {progressPercent >= 100 && '✨ បរិបូណ៌ (Complete)'}
        </div>

        {progressPercent < 100 ? (
          <button
            type="button"
            onClick={onPour}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Droplet className="w-4 h-4 fill-white" />
            <span>ច្រូចទឹកឧទ្ទិសកុសល (Pour Water)</span>
          </button>
        ) : (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-100 text-emerald-800 font-bold text-sm border border-emerald-300 shadow-xs animate-fade-in">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>កុសលផលបុណ្យបានពេញបរិបូណ៌ហើយ!</span>
          </div>
        )}
      </div>
    </div>
  );
};
