import React, { useState } from 'react';
import { Globe, Trash2, ShieldCheck, Wifi, CheckCircle2 } from 'lucide-react';
import { useI18n, Locale } from '../../i18n/i18n-context';
import { localProgressRepository } from '../../infrastructure/repositories/local-progress-repository';
import { useQueryClient } from '@tanstack/react-query';

export const SettingsPage: React.FC = () => {
  const { locale, setLocale, t } = useI18n();
  const queryClient = useQueryClient();
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleReset = async () => {
    if (window.confirm(t('settings.resetConfirm'))) {
      await localProgressRepository.resetProgress();
      queryClient.invalidateQueries();
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
        <span className="text-xs font-bold text-warmth-700 bg-warmth-100 px-3 py-1 rounded-full border border-warmth-200">
          {t('nav.settings')}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mt-2 mb-2">
          {t('settings.title')}
        </h1>
      </div>

      {/* Language Selection */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-warmth-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <Globe className="w-5 h-5 text-lotus-600" />
          <h2 className="text-base font-bold text-warmth-900">{t('settings.language')}</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {(['kh', 'en'] as Locale[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLocale(lang)}
              className={`p-3.5 rounded-2xl border text-center font-bold text-sm transition ${
                locale === lang
                  ? 'bg-lotus-50 border-lotus-400 text-lotus-900 ring-2 ring-lotus-200 shadow-xs'
                  : 'bg-warmth-50 border-warmth-200 text-warmth-700 hover:bg-white'
              }`}
            >
              {lang === 'kh' ? '🇰🇭 ភាសាខ្មែរ (Khmer)' : '🇬🇧 English'}
            </button>
          ))}
        </div>
      </div>

      {/* Offline & Privacy Indicators */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-warmth-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between text-xs sm:text-sm text-warmth-700 py-1">
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-emerald-600" />
            <span>{t('settings.offlineReady')}</span>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Active
          </span>
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm text-warmth-700 py-1 border-t border-warmth-100 pt-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-warmth-600" />
            <span>{t('memory.privacyNotice')}</span>
          </div>
          <span className="text-xs font-bold text-warmth-700 bg-warmth-100 px-2.5 py-0.5 rounded-full">
            Private
          </span>
        </div>
      </div>

      {/* Reset Progress */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-warmth-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-red-900">{t('settings.resetData')}</h3>
            <p className="text-xs text-warmth-500 mt-0.5">Clear local journey checkmarks</p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-xs border border-red-200 transition"
          >
            <Trash2 className="w-4 h-4" />
            <span>{t('action.delete')}</span>
          </button>
        </div>

        {resetSuccess && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4" />
            <span>ទិន្នន័យត្រូវបានកំណត់ឡើងវិញដោយជោគជ័យ!</span>
          </div>
        )}
      </div>
    </div>
  );
};
