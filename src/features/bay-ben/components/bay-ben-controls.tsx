import React from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, ArrowRight } from 'lucide-react';
import { BayBenPhase, BAY_BEN_PHASES } from '../bay-ben.constants';
import { useI18n } from '../../../i18n/i18n-context';

interface BayBenControlsProps {
  currentPhase: BayBenPhase;
  onPhaseChange: (phase: BayBenPhase) => void;
  onPerformAction: () => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onReset: () => void;
  ballsCount: number;
  round: number;
  tossedCount: number;
}

export const BayBenControls: React.FC<BayBenControlsProps> = ({
  currentPhase,
  onPhaseChange,
  onPerformAction,
  isAutoPlaying,
  onToggleAutoPlay,
  isMuted,
  onToggleMute,
  onReset,
  ballsCount,
  round,
  tossedCount,
}) => {
  const { locale } = useI18n();
  const phaseInfo = BAY_BEN_PHASES[currentPhase];

  // Dynamic contextual action label
  let actionLabelKh = phaseInfo.actionKh;
  let actionLabelEn = phaseInfo.actionEn;

  if (currentPhase === 'shaping' && ballsCount >= 7) {
    actionLabelKh = 'ពេញជើងពានហើយ — បន្តទៅដើរប្រទក្សិណ';
    actionLabelEn = 'Tray Complete — Proceed to Procession';
  } else if (currentPhase === 'procession' && round === 3) {
    actionLabelKh = 'គ្រប់ ៣ ជុំហើយ — បន្តទៅបោះបាយបិណ្ឌ';
    actionLabelEn = '3 Rounds Done — Proceed to Rice Tossing';
  } else if (currentPhase === 'tossing' && tossedCount >= 7) {
    actionLabelKh = 'បោះបានគ្រប់ ៧ ដុំហើយ — បញ្ចប់ពិធី';
    actionLabelEn = '7 Offerings Completed — Ritual Finished';
  }

  return (
    <div className="space-y-4">
      {/* 3 Ritual Phase Selector Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {(Object.keys(BAY_BEN_PHASES) as BayBenPhase[]).map((phaseKey) => {
          const item = BAY_BEN_PHASES[phaseKey];
          const isActive = currentPhase === phaseKey;

          return (
            <button
              key={phaseKey}
              type="button"
              onClick={() => onPhaseChange(phaseKey)}
              className={`p-3 rounded-2xl text-left border transition flex flex-col justify-between min-h-[56px] ${
                isActive
                  ? 'bg-amber-100/90 border-amber-400 text-amber-950 shadow-xs ring-2 ring-amber-400/30'
                  : 'bg-warmth-50 hover:bg-warmth-100/80 border-warmth-200/80 text-warmth-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                  {`ដំណាក់កាលទី ${item.stepNumber}`}
                </span>
                <span className="text-[11px] font-medium text-warmth-500">
                  {locale === 'kh' ? item.timeKh : item.timeEn}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold font-khmer mt-1">
                {locale === 'kh' ? item.titleKh : item.titleEn}
              </p>
            </button>
          );
        })}
      </div>

      {/* Interactive Guidance Hint Strip */}
      <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs font-khmer text-amber-900 flex items-center justify-between gap-2">
        <span className="font-semibold">
          {locale === 'kh' ? `💡 គោលដៅ: ${phaseInfo.goalKh}` : `💡 Goal: ${phaseInfo.goalEn}`}
        </span>
        <span className="text-[11px] text-amber-700 hidden sm:inline">
          {locale === 'kh' ? phaseInfo.hintKh : phaseInfo.hintEn}
        </span>
      </div>

      {/* Primary Action & Utility Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
        {/* Main Interactive Button */}
        <button
          type="button"
          onClick={onPerformAction}
          disabled={isAutoPlaying}
          className="w-full sm:w-auto flex-1 min-h-[44px] px-6 py-2.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-700 text-white shadow-sm hover:shadow active:scale-98 transition flex items-center justify-center gap-2 font-khmer disabled:opacity-50"
        >
          {ballsCount >= 7 || (round === 3 && currentPhase === 'procession') ? (
            <ArrowRight className="w-4 h-4 text-amber-100" />
          ) : (
            <Sparkles className="w-4 h-4 text-amber-100" />
          )}
          <span>{locale === 'kh' ? actionLabelKh : actionLabelEn}</span>
        </button>

        {/* Secondary Auxiliary Controls */}
        <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
          {/* Auto Play Ritual Loop */}
          <button
            type="button"
            onClick={onToggleAutoPlay}
            className={`min-h-[44px] px-4 py-2 rounded-2xl border text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 font-khmer ${
              isAutoPlaying
                ? 'bg-lotus-100 border-lotus-300 text-lotus-900 shadow-xs'
                : 'bg-white hover:bg-warmth-50 border-warmth-200 text-warmth-800'
            }`}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isAutoPlaying ? (locale === 'kh' ? 'ផ្អាកពិធី' : 'Pause') : (locale === 'kh' ? 'ចាក់ស្វ័យប្រវត្តិ' : 'Auto Ceremony')}</span>
          </button>

          {/* Audio Sound Toggle */}
          <button
            type="button"
            onClick={onToggleMute}
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-warmth-200 bg-white hover:bg-warmth-50 text-warmth-700 transition flex items-center justify-center"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
          </button>

          {/* Reset Ritual */}
          <button
            type="button"
            onClick={onReset}
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-2xl border border-warmth-200 bg-white hover:bg-warmth-50 text-warmth-700 transition flex items-center justify-center"
            title={locale === 'kh' ? 'ចាប់ផ្តើមឡើងវិញ' : 'Reset Ritual'}
            aria-label={locale === 'kh' ? 'ចាប់ផ្តើមឡើងវិញ' : 'Reset Ritual'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
