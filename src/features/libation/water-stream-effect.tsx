import React from 'react';
import { Droplet } from 'lucide-react';

interface WaterStreamEffectProps {
  isPouring: boolean;
  idleText?: string;
}

export const WaterStreamEffect: React.FC<WaterStreamEffectProps> = ({
  isPouring,
  idleText = 'ចុចដើម្បីច្រូចទឹក',
}) => {
  return (
    <div className="relative h-20 w-32 flex flex-col items-center justify-start pointer-events-none select-none">
      {isPouring ? (
        <div className="relative w-full h-full flex flex-col items-center">
          {/* Main Shimmering Cascading Stream */}
          <div className="relative w-2 sm:w-2.5 h-full rounded-full overflow-hidden shadow-[0_0_12px_rgba(56,189,248,0.7)] animate-water-stream">
            {/* Inner highlight core */}
            <div className="absolute inset-y-0 left-1/4 w-1/2 bg-white/70 rounded-full blur-[0.5px]" />
          </div>

          {/* Falling Droplet Beads on the sides */}
          <div className="absolute top-0 left-8 w-2 h-3.5 bg-sky-300 rounded-full animate-water-drop-1 opacity-90 shadow-[0_0_6px_#38BDF8]" />
          <div className="absolute top-1 right-8 w-1.5 h-3 bg-sky-200 rounded-full animate-water-drop-2 opacity-85 shadow-[0_0_5px_#7DD3FC]" />
          <div className="absolute top-2 left-10 w-2 h-4 bg-cyan-200 rounded-full animate-water-drop-3 opacity-95 shadow-[0_0_6px_#67E8F9]" />

          {/* Glistening Mist / Sparkle Particles */}
          <div className="absolute top-6 -left-2 w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-75" />
          <div className="absolute top-10 -right-2 w-1.5 h-1.5 rounded-full bg-sky-100 animate-ping opacity-60" />

          {/* Splash Impact Base Halo */}
          <div className="absolute bottom-0 w-8 h-2 rounded-full bg-sky-300/80 blur-xs animate-pulse" />
        </div>
      ) : (
        <div className="h-full flex items-center justify-center">
          <div className="text-xs text-warmth-500 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-warmth-200/70 shadow-2xs flex items-center gap-1.5 font-medium animate-pulse font-khmer">
            <Droplet className="w-3.5 h-3.5 text-sky-500 fill-sky-400" />
            <span>{idleText}</span>
          </div>
        </div>
      )}
    </div>
  );
};
