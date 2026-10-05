import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  ListChecks,
  Languages,
} from 'lucide-react';
import { usePchumBenJourney } from './use-pchum-ben-journey';
import { LoadingState } from '../../components/ui/loading-state';
import { ErrorState } from '../../components/ui/error-state';
import { useI18n } from '../../i18n/i18n-context';

type LanguageMode = 'both' | 'kh' | 'en';

const KHMER_DIGITS = [
  '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩', '១០',
  '១១', '១២', '១៣', '១៤', '១៥',
];

export const DayDetailPage: React.FC = () => {
  const { day } = useParams<{ day: string }>();
  const dayNumber = parseInt(day || '1', 10);
  const { days, progress, toggleDay, isLoading } = usePchumBenJourney();
  const { t, locale } = useI18n();
  const [langMode, setLangMode] = useState<LanguageMode>('both');

  if (isLoading) return <LoadingState />;

  const currentDay = days.find((d) => d.dayNumber === dayNumber);
  if (!currentDay) {
    return <ErrorState message={t('errors.notFound')} />;
  }

  const isCompleted = progress.completedDayNumbers.includes(dayNumber);
  const prevDay = dayNumber > 1 ? dayNumber - 1 : null;
  const nextDay = dayNumber < 15 ? dayNumber + 1 : null;

  const showKhmer = langMode === 'both' || langMode === 'kh';
  const showEnglish = langMode === 'both' || langMode === 'en';

  const khmerDayLabel = KHMER_DIGITS[dayNumber - 1] ?? `${dayNumber}`;

  return (
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 pb-6">
      {/* Top Navigation & Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3">
          <Link
            to="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-warmth-700 hover:text-warmth-950 bg-white px-3 py-2 rounded-xl border border-warmth-200 transition shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-khmer">{locale === 'kh' ? 'ត្រឡប់ក្រោយ' : 'Back'}</span>
          </Link>

          {/* Bilingual display switcher */}
          <div className="inline-flex items-center p-1 bg-warmth-100/90 rounded-xl sm:rounded-2xl border border-warmth-200/80 text-xs">
            <span className="sr-only">Display language</span>
            <button
              type="button"
              onClick={() => setLangMode('both')}
              className={`px-2.5 py-1 rounded-lg sm:rounded-xl text-xs font-medium transition cursor-pointer ${
                langMode === 'both'
                  ? 'bg-white text-warmth-950 shadow-xs font-bold'
                  : 'text-warmth-600 hover:text-warmth-900'
              }`}
              title="Show both Khmer and English"
            >
              <span className="inline-flex items-center gap-1">
                <Languages className="w-3.5 h-3.5 text-amber-600" />
                <span>ខ្មែរ + EN</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setLangMode('kh')}
              className={`px-2.5 py-1 rounded-lg sm:rounded-xl text-xs font-medium font-khmer transition cursor-pointer ${
                langMode === 'kh'
                  ? 'bg-white text-warmth-950 shadow-xs font-bold'
                  : 'text-warmth-600 hover:text-warmth-900'
              }`}
              title="Khmer only"
            >
              ខ្មែរ
            </button>
            <button
              type="button"
              onClick={() => setLangMode('en')}
              className={`px-2.5 py-1 rounded-lg sm:rounded-xl text-xs font-medium transition cursor-pointer ${
                langMode === 'en'
                  ? 'bg-white text-warmth-950 shadow-xs font-bold'
                  : 'text-warmth-600 hover:text-warmth-900'
              }`}
              title="English only"
            >
              English
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => toggleDay(dayNumber)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition shadow-xs active:scale-95 cursor-pointer ${
            isCompleted
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-white text-warmth-800 border border-warmth-300 hover:bg-warmth-100'
          }`}
        >
          {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
          <span className="font-khmer">{isCompleted ? t('status.completed') : t('action.markCompleted')}</span>
        </button>
      </div>

      {/* Main Day Header */}
      <div className="bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200 shadow-2xs font-khmer">
              ថ្ងៃទី {khmerDayLabel} / ១៥
            </span>
            <span className="text-xs font-semibold text-warmth-500 font-sans">
              Day {dayNumber} of 15
            </span>
          </div>

          {isCompleted && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs font-khmer">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('status.completed')}</span>
            </span>
          )}
        </div>

        {/* Titles */}
        <div className="space-y-1">
          {showKhmer && (
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-warmth-950 font-khmer leading-snug">
              {currentDay.khmerTitle}
            </h1>
          )}
          {showEnglish && (
            <h2
              className={`${
                showKhmer
                  ? 'text-sm sm:text-base md:text-lg text-lotus-800 font-semibold font-sans'
                  : 'text-xl sm:text-2xl md:text-3xl font-black text-warmth-950'
              }`}
            >
              {currentDay.title}
            </h2>
          )}
        </div>

        {/* Descriptions */}
        <div className="space-y-2 pt-1">
          {showKhmer && currentDay.khmerDescription && (
            <p className="text-sm sm:text-base text-warmth-800 font-khmer leading-relaxed">
              {currentDay.khmerDescription}
            </p>
          )}
          {showEnglish && (
            <p
              className={`text-xs sm:text-sm text-warmth-600 leading-relaxed ${
                showKhmer && currentDay.khmerDescription ? 'pt-2.5 border-t border-warmth-100/90' : ''
              }`}
            >
              {currentDay.description}
            </p>
          )}
        </div>
      </div>

      {/* Sacred Tradition Section */}
      <div className="bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between pb-3 border-b border-warmth-100/90 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-lotus-100/80 border border-lotus-200/90 flex items-center justify-center text-lotus-700 flex-shrink-0 shadow-2xs">
              <BookOpen className="w-5 h-5 text-lotus-600" />
            </div>
            <div className="min-w-0">
              {showKhmer && (
                <h3 className="text-base sm:text-lg font-bold text-warmth-950 font-khmer leading-snug">
                  ទំនៀមទម្លាប់ប្រពៃណី
                </h3>
              )}
              {showEnglish && (
                <div
                  className={`text-xs sm:text-sm font-semibold text-lotus-800 leading-tight ${
                    showKhmer ? 'mt-0.5' : 'text-base font-bold text-warmth-950'
                  }`}
                >
                  Traditional Customs & Significance
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2.5 pt-1">
          {showKhmer && (
            <p className="text-sm sm:text-base text-warmth-900 font-khmer leading-relaxed font-normal">
              {currentDay.khmerTradition || currentDay.tradition}
            </p>
          )}
          {showEnglish && (
            <p
              className={`text-sm sm:text-base text-warmth-700 leading-relaxed font-normal ${
                showKhmer ? 'pt-3 border-t border-warmth-100' : ''
              }`}
            >
              {currentDay.tradition}
            </p>
          )}
        </div>
      </div>

      {/* Suggested Customs & Activities */}
      {currentDay.activities && currentDay.activities.length > 0 && (
        <div className="bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-warmth-100/90 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-emerald-100/80 border border-emerald-200/80 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-2xs">
                <ListChecks className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="min-w-0">
                {showKhmer && (
                  <h3 className="text-base sm:text-lg font-bold text-warmth-950 font-khmer leading-snug">
                    សកម្មភាពអនុវត្ត
                  </h3>
                )}
                {showEnglish && (
                  <div
                    className={`text-xs sm:text-sm font-semibold text-emerald-800 leading-tight ${
                      showKhmer ? 'mt-0.5' : 'text-base font-bold text-warmth-950'
                    }`}
                  >
                    Daily Customs & Actions
                  </div>
                )}
              </div>
            </div>

            <span className="flex-shrink-0 text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-khmer shadow-2xs">
              {currentDay.activities.length} {locale === 'kh' ? 'សកម្មភាព' : 'tasks'}
            </span>
          </div>

          <ul className="space-y-2.5 pt-1">
            {currentDay.activities.map((activity, idx) => {
              const khmerAct = currentDay.khmerActivities?.[idx];
              return (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl sm:rounded-2xl bg-emerald-50/30 hover:bg-emerald-50/60 border border-emerald-100/70 transition"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-2xs">
                    ✓
                  </span>
                  <div className="space-y-1 min-w-0 flex-1">
                    {showKhmer && khmerAct && (
                      <p className="text-sm sm:text-base text-warmth-950 font-khmer font-bold leading-snug break-words">
                        {khmerAct}
                      </p>
                    )}
                    {showEnglish && (
                      <p
                        className={`text-xs sm:text-sm text-warmth-600 leading-relaxed break-words ${
                          showKhmer && khmerAct ? 'font-normal' : 'font-semibold text-warmth-900'
                        }`}
                      >
                        {activity}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Preparation Checklist */}
      <div className="bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between pb-3 border-b border-warmth-100/90 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-amber-100/80 border border-amber-200/80 flex items-center justify-center text-amber-800 flex-shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="min-w-0">
              {showKhmer && (
                <h3 className="text-base sm:text-lg font-bold text-warmth-950 font-khmer leading-snug">
                  ការរៀបចំទុកជាមុន
                </h3>
              )}
              {showEnglish && (
                <div
                  className={`text-xs sm:text-sm font-semibold text-amber-800 leading-tight ${
                    showKhmer ? 'mt-0.5' : 'text-base font-bold text-warmth-950'
                  }`}
                >
                  Preparation Checklist
                </div>
              )}
            </div>
          </div>

          <span className="flex-shrink-0 text-[11px] sm:text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 font-khmer shadow-2xs">
            {currentDay.preparation.length} {locale === 'kh' ? 'ចំណុច' : 'items'}
          </span>
        </div>

        <ul className="space-y-2.5 pt-1">
          {currentDay.preparation.map((prep, idx) => {
            const khmerPrep = currentDay.khmerPreparation?.[idx];
            return (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl sm:rounded-2xl bg-amber-50/30 hover:bg-amber-50/60 border border-amber-100/70 transition"
              >
                <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-2xs">
                  ✦
                </span>
                <div className="space-y-1 min-w-0 flex-1">
                  {showKhmer && khmerPrep && (
                    <p className="text-sm sm:text-base text-warmth-950 font-khmer font-bold leading-snug break-words">
                      {khmerPrep}
                    </p>
                  )}
                  {showEnglish && (
                    <p
                      className={`text-xs sm:text-sm text-warmth-600 leading-relaxed break-words ${
                        showKhmer && khmerPrep ? 'font-normal' : 'font-semibold text-warmth-900'
                      }`}
                    >
                      {prep}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mindful Reflection */}
      {(currentDay.reflection || currentDay.khmerReflection) && (
        <div className="bg-gradient-to-br from-lotus-50/90 to-amber-50/50 border border-lotus-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-lotus-200/70 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-lotus-100 border border-lotus-300 flex items-center justify-center text-lotus-700 flex-shrink-0 shadow-2xs">
                <Sparkles className="w-5 h-5 text-lotus-600" />
              </div>
              <div className="min-w-0">
                {showKhmer && (
                  <h3 className="text-base sm:text-lg font-bold text-lotus-950 font-khmer leading-snug">
                    ការឆ្លុះបញ្ចាំងផ្លូវចិត្ត
                  </h3>
                )}
                {showEnglish && (
                  <div
                    className={`text-xs sm:text-sm font-semibold text-lotus-800 leading-tight ${
                      showKhmer ? 'mt-0.5' : 'text-base font-bold text-lotus-950'
                    }`}
                  >
                    Mindful Reflection
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            {showKhmer && currentDay.khmerReflection && (
              <p className="text-base sm:text-lg text-lotus-950 font-khmer font-medium italic leading-relaxed">
                «{currentDay.khmerReflection}»
              </p>
            )}
            {showEnglish && currentDay.reflection && (
              <p
                className={`text-sm sm:text-base text-lotus-900 italic font-medium leading-relaxed ${
                  showKhmer && currentDay.khmerReflection ? 'pt-2 border-t border-lotus-200/70' : ''
                }`}
              >
                "{currentDay.reflection}"
              </p>
            )}
          </div>
        </div>
      )}

      {/* Next/Prev Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-warmth-200">
        {prevDay ? (
          <Link
            to={`/journey/${prevDay}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-warmth-700 hover:text-warmth-950 bg-white px-3 py-1.5 rounded-xl border border-warmth-200 transition shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>
              <span className="font-khmer">ថ្ងៃទី {prevDay}</span>
              <span className="text-warmth-400 mx-1">/</span>
              <span>Day {prevDay}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextDay && (
          <Link
            to={`/journey/${nextDay}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-lotus-700 hover:text-lotus-900 bg-white px-3 py-1.5 rounded-xl border border-lotus-200 transition shadow-xs ml-auto"
          >
            <span>
              <span className="font-khmer">ថ្ងៃទី {nextDay}</span>
              <span className="text-lotus-300 mx-1">/</span>
              <span>Day {nextDay}</span>
            </span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};
