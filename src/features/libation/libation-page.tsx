import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Heart, Sparkles } from 'lucide-react';
import { WaterBowlAnimation } from './water-bowl-animation';
import { WaterFourQualities } from './water-four-qualities';
import { libationAudio } from './libation-audio';
import { useI18n } from '../../i18n/i18n-context';

export const LibationPage: React.FC = () => {
  const { locale } = useI18n();
  const [dedicationName, setDedicationName] = useState('');
  const [progress, setProgress] = useState(0);
  const [isPouring, setIsPouring] = useState(false);
  const [isPlayingChant, setIsPlayingChant] = useState(false);
  const [activeVerseStep, setActiveVerseStep] = useState(0);
  const cancelChantRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      if (cancelChantRef.current) cancelChantRef.current();
    };
  }, []);

  const handlePour = () => {
    if (progress >= 100 || isPouring) return;
    setIsPouring(true);
    libationAudio.playWaterDrop();

    const next = Math.min(100, progress + 20);
    setProgress(next);

    // Keep pouring animation visible for realistic fluid cascade
    setTimeout(() => {
      setIsPouring(false);
      if (next >= 100) {
        libationAudio.playTempleChime();
      }
    }, 750);
  };

  const handleReset = () => {
    setProgress(0);
    setIsPouring(false);
  };

  const handleToggleChant = () => {
    if (isPlayingChant) {
      if (cancelChantRef.current) cancelChantRef.current();
      setIsPlayingChant(false);
      setActiveVerseStep(0);
      return;
    }

    setIsPlayingChant(true);
    cancelChantRef.current = libationAudio.playPaliChant(
      (step) => setActiveVerseStep(step),
      () => {
        setIsPlayingChant(false);
        setActiveVerseStep(0);
      },
    );
  };

  const recipientPresets =
    locale === 'kh'
      ? ['មាតាបិតា', 'ជីដូនជីតា', 'បុព្វការីជន', 'ញាតិទាំង ៧ សន្តាន']
      : ['Parents', 'Grandparents', 'Ancestors', 'Departed Relatives'];

  return (
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
      {/* Header Banner */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
        <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5 font-khmer">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{locale === 'kh' ? 'កិច្ចពិធីបុណ្យប្រពៃណី' : 'Sacred Buddhist Ritual'}</span>
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mt-2.5 mb-2 font-khmer">
          {locale === 'kh' ? 'ពិធីច្រូចទឹកឧទ្ទិសកុសល' : 'Water Libation Ceremony (Dacina)'}
        </h1>
        <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed font-khmer">
          {locale === 'kh'
            ? 'ការច្រូចទឹកជាកិច្ចឧទ្ទិសផលបុណ្យយ៉ាងស្ងប់ស្ងាត់ និងបរិសុទ្ធជូនដល់ដូនតា និងញាតិកាលទាំង ៧ សន្តាន'
            : 'Pouring water drop-by-drop dedicates pure merit to ancestors and departed relatives across 7 generations.'}
        </p>
      </div>

      {/* Dedication Input & Quick Presets */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-warmth-200/90 shadow-xs space-y-3">
        <label className="block text-xs sm:text-sm font-bold text-warmth-900 font-khmer">
          {locale === 'kh'
            ? 'ឧទ្ទិសកុសលនេះជូនចំពោះ (ឈ្មោះ ឬបុព្វការីជន) ៖'
            : 'Dedicate this merit to (Name of loved one / ancestors):'}
        </label>
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-lotus-600 flex-shrink-0" />
          <input
            type="text"
            value={dedicationName}
            onChange={(e) => setDedicationName(e.target.value)}
            placeholder={
              locale === 'kh'
                ? 'ឧ. លោកឪពុក អ្នកម្តាយ ជីដូនជីតា...'
                : 'e.g., Beloved Parents, Grandparents, Teachers...'
            }
            className="flex-1 px-4 py-2.5 rounded-2xl border border-warmth-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-hidden text-xs sm:text-sm bg-warmth-50/50 font-khmer"
          />
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <span className="text-[11px] text-warmth-500 font-medium font-khmer">
            {locale === 'kh' ? 'ជម្រើសលឿន ៖' : 'Quick select:'}
          </span>
          {recipientPresets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setDedicationName(preset)}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-xl bg-warmth-100 hover:bg-amber-100 text-warmth-800 hover:text-amber-900 border border-warmth-200 transition font-khmer cursor-pointer active:scale-95"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Water Bowl Animation */}
      <WaterBowlAnimation
        progressPercent={progress}
        isPouring={isPouring}
        dedicationName={dedicationName}
        onPour={handlePour}
        onReset={handleReset}
      />

      {/* Sacred Pali Chants */}
      <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase tracking-wider">
          <span className="font-khmer">{locale === 'kh' ? 'ធម៌ច្រូចទឹក' : 'Pali Dedication Verses'}</span>
          <button
            type="button"
            onClick={handleToggleChant}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition shadow-2xs cursor-pointer active:scale-95 ${
              isPlayingChant
                ? 'bg-amber-600 text-white animate-pulse'
                : 'bg-amber-200/90 hover:bg-amber-300 text-amber-950 border border-amber-300/80'
            }`}
            title={locale === 'kh' ? 'ចាក់សំឡេងជួងធម៌' : 'Play sacred bell chimes'}
            aria-label={locale === 'kh' ? 'ចាក់សំឡេងធម៌ច្រូចទឹក' : 'Play sacred chants audio'}
          >
            {isPlayingChant ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="font-khmer">{locale === 'kh' ? 'បញ្ឈប់' : 'Stop'}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-800" />
                <span className="font-khmer">{locale === 'kh' ? 'ស្តាប់សំឡេង' : 'Play Sound'}</span>
              </>
            )}
          </button>
        </div>

        <div className="text-center space-y-2.5">
          <p
            className={`font-khmer font-bold text-base sm:text-lg transition-all duration-300 ${
              activeVerseStep === 1
                ? 'text-amber-600 scale-105 font-black drop-shadow-xs'
                : 'text-amber-950'
            }`}
          >
            « យថា វារិវហា បូរា បារិបូរេន្តិ សាគរំ »
          </p>
          <p
            className={`font-khmer font-bold text-base sm:text-lg transition-all duration-300 ${
              activeVerseStep === 2
                ? 'text-amber-600 scale-105 font-black drop-shadow-xs'
                : 'text-amber-950'
            }`}
          >
            « ឯវមេវ ឥតោ ទិន្នំ បេតានំ ឧបកប្បតិ »
          </p>
          <p
            className={`text-xs sm:text-sm italic transition-all duration-300 mt-2 ${
              activeVerseStep === 3
                ? 'text-amber-700 font-bold scale-105'
                : 'text-amber-900'
            }`}
          >
            « ឥទំ មេ ញាតីនំ ហោតុ សុខិតា ហោន្តុ ញាតយោ »
          </p>
        </div>

        <p className="text-xs text-amber-900/90 leading-relaxed text-center pt-2 border-t border-amber-200/70 font-khmer">
          {locale === 'kh'
            ? '« ដូចជាអន្លង់ទឹកដ៏ពេញ រមែងញ៉ាំងសាគរឱ្យពេញប្រៀបបានយ៉ាងណា មហាទានដែលអ្នកបានធ្វើហើយនេះ រមែងសម្រេចផលដល់អ្នកដែលចែកឋានទៅបានយ៉ាងនោះដែរ »'
            : '"Just as overflowing rivers fill the great ocean, so does this wholesome offering reach and uplift departed ancestors."'}
        </p>
      </div>

      {/* The 4 Qualities of Libation Water */}
      <WaterFourQualities />
    </div>
  );
};
