import React, { useState } from 'react';
import { Sunrise, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { BAY_BEN_PHASES, CULTURAL_NARRATIVE } from './bay-ben.constants';
import { useBayBenAnimation } from './use-bay-ben-animation';
import { BayBenViharaSvg } from './components/bay-ben-vihara-svg';
import { BayBenShapingSvg } from './components/bay-ben-shaping-svg';
import { BayBenProcessionSvg } from './components/bay-ben-procession-svg';
import { BayBenTossSvg } from './components/bay-ben-toss-svg';
import { BayBenControls } from './components/bay-ben-controls';

export const BayBenSection: React.FC = () => {
  const { locale } = useI18n();
  const [showCulturalLore, setShowCulturalLore] = useState(false);

  const {
    currentPhase,
    setCurrentPhase,
    ballsCount,
    round,
    processionAngle,
    tossedBalls,
    tossedCount,
    isAutoPlaying,
    setIsAutoPlaying,
    isMuted,
    handleToggleMute,
    handlePerformAction,
    handleRollBall,
    handleAdvanceProcession,
    handleTossRiceToPoint,
    handleReset,
  } = useBayBenAnimation();

  const activePhase = BAY_BEN_PHASES[currentPhase];

  return (
    <section
      id="bay-ben"
      className="relative overflow-hidden bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-warmth-100 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/90 text-amber-900 border border-amber-200/80 shadow-2xs">
            <Sunrise className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-khmer">
              {locale === 'kh' ? 'ពិធីបោះបាយបិណ្ឌពេលទៀបភ្លឺ' : 'Sacred Dawn Rice Ritual'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-warmth-950 font-khmer tracking-tight leading-snug">
            {locale === 'kh'
              ? 'ពិធីពួត និងបោះបាយបិណ្ឌឧទ្ទិសកុសល'
              : 'Bos Bay Ben Dawn Ceremony'}
          </h2>

          <p className="text-xs sm:text-sm text-warmth-600 font-khmer max-w-2xl leading-relaxed">
            {locale === 'kh'
              ? 'ពួតដុំបាយដំណើបលាយល្ងខ្មៅ ដើរប្រទក្សិណ ៣ ជុំជុំវិញព្រះវិហារ និងបោះឧទ្ទិសដល់ដូនតា ៧ សន្តាន នាវេលាម៉ោង ៤ ទៀបភ្លឺ'
              : 'Shape sesame sticky rice, circumambulate the sacred vihara 3 times, and toss rice offerings for ancestors at 4:00 AM.'}
          </p>
        </div>

        {/* Toggle Cultural Lore Button */}
        <button
          type="button"
          onClick={() => setShowCulturalLore((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-warmth-200 bg-warmth-50 hover:bg-warmth-100/80 text-warmth-800 text-xs font-bold font-khmer transition self-start md:self-auto min-h-[44px]"
        >
          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
          <span>{locale === 'kh' ? 'អត្ថន័យ និងធម៌ឧទ្ទិស' : 'Sacred Meaning & Lore'}</span>
          {showCulturalLore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Cultural Lore & Pali Chant Accordion Banner */}
      {showCulturalLore && (
        <div className="bg-gradient-to-br from-amber-500/10 via-amber-100/30 to-warmth-50 p-4 sm:p-5 rounded-2xl border border-amber-200/80 space-y-3 animate-fade-in font-khmer">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-2">
            <span className="text-xs font-bold text-amber-900">
              {locale === 'kh' ? CULTURAL_NARRATIVE.titleKh : CULTURAL_NARRATIVE.titleEn}
            </span>
            <span className="text-[11px] font-semibold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-full self-start sm:self-auto">
              {locale === 'kh' ? CULTURAL_NARRATIVE.tagKh : CULTURAL_NARRATIVE.tagEn}
            </span>
          </div>

          {/* Sacred Pali Dedication Verse */}
          <div className="p-3 rounded-xl bg-amber-100/60 border border-amber-300/60 text-center space-y-1">
            <p className="text-sm font-bold text-amber-950 font-serif tracking-wide">
              {`« ${CULTURAL_NARRATIVE.paliVerse} »`}
            </p>
            <p className="text-xs text-amber-800">
              {locale === 'kh' ? CULTURAL_NARRATIVE.paliTranslationKh : CULTURAL_NARRATIVE.paliTranslationEn}
            </p>
          </div>

          {/* Quick Cultural Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            {CULTURAL_NARRATIVE.facts.map((fact, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white/70 border border-warmth-200/60 text-xs space-y-1">
                <span className="font-bold text-warmth-900 block">
                  {locale === 'kh' ? fact.labelKh : fact.labelEn}
                </span>
                <p className="text-warmth-600 leading-relaxed text-[11.5px]">
                  {locale === 'kh' ? fact.descKh : fact.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Interactive Animated SVG Stage */}
      <div className="relative rounded-2xl overflow-hidden border border-warmth-300/80 bg-slate-950 shadow-inner">
        <BayBenViharaSvg>
          {currentPhase === 'shaping' && (
            <BayBenShapingSvg
              ballsCount={ballsCount}
              onRollBall={handleRollBall}
              isAutoPlaying={isAutoPlaying}
            />
          )}

          {currentPhase === 'procession' && (
            <BayBenProcessionSvg
              round={round}
              progressAngle={processionAngle}
              onAdvance={handleAdvanceProcession}
              locale={locale}
            />
          )}

          {currentPhase === 'tossing' && (
            <BayBenTossSvg
              tossedBalls={tossedBalls}
              tossedCount={tossedCount}
              onTossToPoint={handleTossRiceToPoint}
            />
          )}
        </BayBenViharaSvg>

        {/* Phase Contextual Caption Floating Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1.5 rounded-full text-[11.5px] font-bold bg-slate-900/85 text-amber-300 border border-amber-500/30 backdrop-blur-xs font-khmer shadow-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
            <span>{locale === 'kh' ? activePhase.subtitleKh : activePhase.subtitleEn}</span>
          </span>
        </div>
      </div>

      {/* Controls & Ceremony Progression */}
      <BayBenControls
        currentPhase={currentPhase}
        onPhaseChange={setCurrentPhase}
        onPerformAction={handlePerformAction}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying((prev) => !prev)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onReset={handleReset}
        ballsCount={ballsCount}
        round={round}
        tossedCount={tossedCount}
      />
    </section>
  );
};
