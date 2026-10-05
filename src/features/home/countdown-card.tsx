import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Flame, Moon } from 'lucide-react';
import { getPchumBenCountdown, toKhmerDigits } from '../../domain/services/calendar-service';
import { useI18n } from '../../i18n/i18n-context';

export const CountdownCard: React.FC = () => {
  const { t, locale } = useI18n();
  const [countdown, setCountdown] = useState(() => getPchumBenCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getPchumBenCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const beYearLabel =
    locale === 'kh'
      ? `ព.ស. ${toKhmerDigits(countdown.buddhistYear)}`
      : `B.E. ${countdown.buddhistYear}`;

  const timeBoxes = [
    { label: t('countdown.days'), value: String(countdown.days).padStart(2, '0') },
    { label: t('countdown.hours'), value: String(countdown.hours).padStart(2, '0') },
    { label: t('countdown.minutes'), value: String(countdown.minutes).padStart(2, '0') },
    { label: t('countdown.seconds'), value: String(countdown.seconds).padStart(2, '0') },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-3xl p-5 sm:p-6 shadow-sm mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-warmth-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-100/70 border border-amber-200 flex items-center justify-center text-amber-700">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-warmth-900 uppercase tracking-wider font-khmer">
              {countdown.status === 'ongoing'
                ? locale === 'kh'
                  ? `រាប់ថយក្រោយឆ្ពោះទៅកាន់ ថ្ងៃភ្ជុំធំ ${beYearLabel}`
                  : `Countdown to Pchum Ben Day ${beYearLabel}`
                : `${t('countdown.title')} ${beYearLabel}`}
            </h2>
            <div className="text-xs text-warmth-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {countdown.status === 'ongoing'
                  ? `${t('countdown.ongoing')} ${countdown.currentDayNumber}`
                  : countdown.status === 'upcoming'
                    ? 'បុណ្យភ្ជុំបិណ្ឌនឹងមកដល់ឆាប់ៗនេះ'
                    : t('countdown.ended')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Real-time Astronomical Lunar Phase */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warmth-100 border border-warmth-200 text-warmth-800 text-xs font-medium">
            <Moon className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {locale === 'kh'
                ? countdown.moonPhase.khmerPhase
                : countdown.moonPhase.englishPhase}{' '}
              ({Math.round(countdown.moonPhase.fraction * 100)}%)
            </span>
          </span>

          {countdown.status === 'ongoing' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold animate-pulse">
              <Flame className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>កំពុងប្រារព្ធ (Active Festival)</span>
            </span>
          )}
        </div>
      </div>

      {countdown.status === 'ended' ? (
        <div className="p-4 rounded-2xl bg-warmth-100 text-center text-warmth-700 font-medium text-sm">
          {t('countdown.ended')}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
          {timeBoxes.map((box, idx) => (
            <div
              key={idx}
              className="bg-warmth-50/80 rounded-2xl p-2.5 sm:p-4 border border-warmth-200/60 shadow-xs"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-warmth-900 tracking-tight font-mono">
                {box.value}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-warmth-600 uppercase mt-0.5">
                {box.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
