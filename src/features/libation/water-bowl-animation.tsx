import React from 'react';
import { Droplet, Sparkles, RotateCcw } from 'lucide-react';
import { GoldenPitcherSvg } from './golden-pitcher-svg';
import { WaterStreamEffect } from './water-stream-effect';
import { WaterBasinLotus } from './water-basin-lotus';
import { useI18n } from '../../i18n/i18n-context';
import { toKhmerDigits } from '../../domain/services/calendar-service';

interface WaterBowlAnimationProps {
  progressPercent: number; // 0 to 100
  isPouring: boolean;
  dedicationName?: string;
  onPour: () => void;
  onReset?: () => void;
}

export const WaterBowlAnimation: React.FC<WaterBowlAnimationProps> = ({
  progressPercent,
  isPouring,
  dedicationName,
  onPour,
  onReset,
}) => {
  const { locale } = useI18n();
  const isComplete = progressPercent >= 100;

  const progressLabel =
    locale === 'kh'
      ? `${toKhmerDigits(progressPercent)}% / ១០០%`
      : `${progressPercent}% / 100%`;

  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-10 bg-gradient-to-b from-amber-50/70 via-warmth-100/50 to-lotus-50/60 rounded-3xl border border-warmth-200/90 shadow-inner overflow-hidden">
      {/* Background Sacred Ambience Highlights */}
      <div className="absolute -top-16 -left-16 w-52 h-52 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-lotus-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Libation Shrine Altar Header */}
      <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-warmth-600 font-khmer">
        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
        <span>
          {locale === 'kh'
            ? 'ក្អម និងផ្តិលច្រូចទឹកឧទ្ទិសកុសល'
            : 'Golden Ceremonial Pitcher & Sacred Libation Basin'}
        </span>
      </div>

      {/* Ceremonial Interactive Altar Stage */}
      <div className="relative flex flex-col items-center justify-center pt-2 pb-4">
        {/* Golden Ceremonial Pitcher (K-om Tuk Chroch) */}
        <GoldenPitcherSvg isPouring={isPouring} />

        {/* Dynamic Water Stream & Droplets Cascade */}
        <WaterStreamEffect
          isPouring={isPouring}
          idleText={locale === 'kh' ? 'ចុចដើម្បីច្រូចទឹក' : 'Tap to pour water'}
        />

        {/* Ceremonial Basin & Floating Sacred Lotus */}
        <WaterBasinLotus
          progressPercent={progressPercent}
          isPouring={isPouring}
          dedicationName={dedicationName}
          isComplete={isComplete}
        />
      </div>

      {/* Progress & Merit Counter */}
      <div className="mt-5 flex flex-col items-center gap-3.5 w-full max-w-sm">
        <div className="flex items-center justify-between w-full text-xs font-bold text-warmth-700 px-1 font-khmer">
          <span>{locale === 'kh' ? 'បរិមាណទឹកច្រូច' : 'Merit Water Level'}</span>
          <span className="font-mono text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
            {progressLabel}
          </span>
        </div>

        {/* Interactive Pour Trigger Buttons */}
        {!isComplete ? (
          <button
            type="button"
            onClick={onPour}
            disabled={isPouring}
            className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md transition transform active:scale-98 cursor-pointer select-none font-khmer ${
              isPouring
                ? 'bg-amber-600 text-white shadow-amber-300/50'
                : 'bg-amber-600 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-700 text-white shadow-lg shadow-amber-900/20 hover:-translate-y-0.5'
            }`}
            aria-label={
              locale === 'kh' ? 'ច្រូចទឹកឧទ្ទិសកុសល' : 'Pour water for merit dedication'
            }
          >
            <Droplet className={`w-4 h-4 fill-white ${isPouring ? 'animate-bounce' : ''}`} />
            <span>
              {isPouring
                ? locale === 'kh'
                  ? 'កំពុងច្រូចទឹក...'
                  : 'Pouring Sacred Water...'
                : locale === 'kh'
                ? 'ច្រូចទឹកឧទ្ទិសកុសល'
                : 'Pour Water (Dedicating Merit)'}
            </span>
          </button>
        ) : (
          <div className="w-full flex flex-col items-center gap-3 animate-scale-in">
            <div className="w-full text-center p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-amber-50 to-emerald-50 border border-emerald-300 text-emerald-900 shadow-xs font-khmer">
              <div className="flex items-center justify-center gap-1.5 font-extrabold text-sm mb-1">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>
                  {locale === 'kh'
                    ? 'ការច្រូចទឹកឧទ្ទិសកុសលបានពេញបរិបូរណ៍ហើយ'
                    : 'Water Libation Dedicated in Full'}
                </span>
              </div>
              <p className="text-xs text-warmth-700 font-normal">
                {locale === 'kh'
                  ? 'សូមផលបុណ្យកុសលនេះ បានសម្រេចដល់បុព្វការីជន និងញាតិកាលទាំង ៧ សន្តាន សូមបានប្រកបដោយសេចក្តីសុខស្ងប់តរៀងទៅ'
                  : 'May this wholesome deed bring peace and eternal joy to your loved ones.'}
              </p>
            </div>

            {onReset && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-warmth-700 bg-warmth-100 hover:bg-warmth-200 border border-warmth-300/80 transition active:scale-95 cursor-pointer font-khmer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{locale === 'kh' ? 'ច្រូចទឹកម្តងទៀត' : 'Pour Again'}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
