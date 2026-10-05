import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Sun, Moon, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { HeroPagodaIllustration, ActivityKey } from './hero-pagoda-illustration';
import { ACTIVITIES } from './hero-activities.constants';

export const HomeHero: React.FC = () => {
  const { locale } = useI18n();
  const [activeKey, setActiveKey] = useState<ActivityKey>('procession');

  const currentActivity = ACTIVITIES.find((a) => a.key === activeKey) ?? ACTIVITIES[0]!;

  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-warmth-200/90 shadow-sm bg-gradient-to-b from-[#faf6f0] via-[#f7f0e4] to-[#f4ebe0] mb-6 sm:mb-8 min-h-svh flex flex-col justify-between gap-4 p-3.5 sm:p-6 lg:p-8">
      {/* Top Banner & Cultural Identity */}
      <div className="text-center max-w-3xl mx-auto pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-warmth-200/90 text-xs font-semibold text-lotus-800 shadow-2xs mb-2">
          <span className="text-sm">🪷</span>
          <span className="font-khmer">បុណ្យភ្ជុំបិណ្ឌ • កម្មវិធីឌីជីថល</span>
          <span className="text-warmth-300 hidden sm:inline">•</span>
          <span className="font-sans font-normal text-warmth-600 hidden sm:inline">
            Pchum Ben Companion
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-warmth-950 tracking-tight font-khmer mb-1 sm:mb-1.5 leading-tight">
          បុណ្យភ្ជុំបិណ្ឌ
          <span className="block text-lg sm:text-xl lg:text-2xl font-light text-warmth-600 tracking-normal font-sans mt-0.5">
            The Ancestors' Day Festival
          </span>
        </h1>

        <p className="text-xs sm:text-sm font-khmer text-warmth-800 font-medium leading-relaxed max-w-xl mx-auto mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
          <span className="text-warmth-950 font-bold">រលឹកអតីតកាល</span>
          <span className="text-warmth-400 hidden sm:inline">•</span>
          <span className="text-lotus-700 font-bold">អបអរបច្ចុប្បន្នកាល</span>
          <span className="text-warmth-400 hidden sm:inline">•</span>
          <span className="text-amber-800 font-bold">បន្តប្រពៃណីទៅអនាគត</span>
        </p>

        {/* Activity Tab Switcher */}
        <div className="grid grid-cols-3 sm:inline-flex w-full sm:w-auto p-1 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-warmth-200/90 shadow-2xs gap-1 max-w-full">
          {ACTIVITIES.map((activity) => {
            const isActive = activity.key === activeKey;
            return (
              <button
                key={activity.key}
                type="button"
                onClick={() => setActiveKey(activity.key)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] leading-tight sm:text-sm font-semibold transition-all sm:whitespace-nowrap text-center cursor-pointer ${
                  isActive
                    ? 'bg-lotus-700 text-white shadow-xs'
                    : 'text-warmth-700 hover:text-warmth-950 hover:bg-warmth-100/70'
                }`}
              >
                {activity.key === 'procession' && (
                  <Sun
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-amber-200' : 'text-amber-600'}`}
                  />
                )}
                {activity.key === 'bosBayBen' && (
                  <Moon
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-amber-200' : 'text-indigo-600'}`}
                  />
                )}
                {activity.key === 'libation' && (
                  <Droplets
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-cyan-200' : 'text-cyan-600'}`}
                  />
                )}
                <span className="font-khmer">{activity.tabLabelKh}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Showcase: Split 2-Column on Desktop */}
      <div className="my-auto py-4 sm:py-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Column: Activity Context & Actions */}
          <div className="lg:col-span-6 space-y-3.5 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-lotus-800 bg-lotus-100/80 px-2.5 py-0.5 rounded-full border border-lotus-200/80 font-sans">
                {locale === 'kh' ? 'ទំនៀមទម្លាប់ប្រពៃណី' : 'Sacred Tradition'}
              </span>
              <span className="text-xs text-warmth-700 font-khmer bg-warmth-100 px-2.5 py-0.5 rounded-full border border-warmth-200">
                {currentActivity.badgeKh}
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-warmth-950 font-khmer leading-snug">
                {currentActivity.titleKh}
              </h2>
              <h3 className="text-xs sm:text-sm font-semibold text-lotus-800 font-sans">
                {currentActivity.titleEn}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-warmth-800 font-khmer leading-relaxed line-clamp-3">
              {currentActivity.descriptionKh}
            </p>

            {/* Practical Customs Chips */}
            <div className="bg-white/80 border border-warmth-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-2xs space-y-2">
              <div className="text-[11px] font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lotus-600" />
                <span>ទំនៀមទម្លាប់អនុវត្តសំខាន់ៗ</span>
              </div>
              <ul className="space-y-1.5 text-xs">
                {currentActivity.customs.map((custom, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-warmth-800 font-khmer">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{custom.kh}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-2.5 pt-1">
              <Link
                to={currentActivity.primaryAction.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-lotus-700 hover:bg-lotus-800 text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition active:scale-95"
              >
                <span className="font-khmer">
                  {locale === 'kh'
                    ? currentActivity.primaryAction.kh
                    : currentActivity.primaryAction.en}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to={currentActivity.secondaryAction.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-white hover:bg-warmth-100 text-warmth-800 border border-warmth-300 font-semibold text-xs sm:text-sm shadow-2xs transition active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-warmth-600" />
                <span className="font-khmer">
                  {locale === 'kh'
                    ? currentActivity.secondaryAction.kh
                    : currentActivity.secondaryAction.en}
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Handcrafted Cambodian Illustration */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-warmth-300/80 shadow-md bg-white">
              <HeroPagodaIllustration activeKey={activeKey} />

              {/* Caption Tag Overlay on the Illustration */}
              <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-warmth-200 text-[11px] sm:text-xs font-bold text-warmth-900 shadow-2xs font-khmer">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{currentActivity.timeKh}</span>
                  <span className="text-warmth-400 font-normal hidden sm:inline">•</span>
                  <span className="text-warmth-600 font-sans font-normal hidden sm:inline">
                    {currentActivity.timeEn}
                  </span>
                </span>
              </div>

              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-warmth-950/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium border border-white/20 font-khmer">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>{currentActivity.badgeKh}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: 4 Quick Access Cultural Features */}
      <div className="pt-3 border-t border-warmth-200/70 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <Link
            to="/journey"
            className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-lotus-50/70 border border-warmth-200/90 hover:border-lotus-300 transition group shadow-2xs"
          >
            <div className="text-xl sm:text-2xl flex-shrink-0">🚶‍♂️</div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-warmth-950 font-khmer group-hover:text-lotus-800 transition truncate">
                ដំណើរ ១៥ ថ្ងៃ
              </h4>
              <p className="text-[10px] sm:text-[11px] text-warmth-500 font-khmer truncate">
                តាមដានថ្ងៃកាន់បិណ្ឌ
              </p>
            </div>
          </Link>

          <Link
            to="/stories"
            className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-amber-50/70 border border-warmth-200/90 hover:border-amber-300 transition group shadow-2xs"
          >
            <div className="text-xl sm:text-2xl flex-shrink-0">🌙</div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-warmth-950 font-khmer group-hover:text-amber-800 transition truncate">
                រឿងនិទានប្រេត
              </h4>
              <p className="text-[10px] sm:text-[11px] text-warmth-500 font-khmer truncate">
                ប្រវត្តិបោះបាយបិណ្ឌ
              </p>
            </div>
          </Link>

          <Link
            to="/libation"
            className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-cyan-50/70 border border-warmth-200/90 hover:border-cyan-300 transition group shadow-2xs"
          >
            <div className="text-xl sm:text-2xl flex-shrink-0">💧</div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-warmth-950 font-khmer group-hover:text-cyan-800 transition truncate">
                ពិធីច្រូចទឹកនិម្មិត
              </h4>
              <p className="text-[10px] sm:text-[11px] text-warmth-500 font-khmer truncate">
                ឧទ្ទិសកុសល ៧ សន្តាន
              </p>
            </div>
          </Link>

          <Link
            to="/memories"
            className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-rose-50/70 border border-warmth-200/90 hover:border-rose-300 transition group shadow-2xs"
          >
            <div className="text-xl sm:text-2xl flex-shrink-0">🪷</div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-warmth-950 font-khmer group-hover:text-rose-800 transition truncate">
                សួនអនុស្សាវរីយ៍
              </h4>
              <p className="text-[10px] sm:text-[11px] text-warmth-500 font-khmer truncate">
                ដាំផ្កាឈូករលឹកគុណ
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
