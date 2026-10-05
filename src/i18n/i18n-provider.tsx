import React, { useState, useEffect, useCallback } from 'react';
import { I18nContext } from './i18n-context';
import { Locale, I18N_STORAGE_KEY } from './i18n-types';
import { khDictionary, TranslationKey } from './kh';
import { enDictionary } from './en';

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem(I18N_STORAGE_KEY);
      return saved === 'en' ? 'en' : 'kh';
    } catch {
      return 'kh';
    }
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(I18N_STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale === 'kh' ? 'km' : 'en';
    } catch {
      // storage unavailable
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale === 'kh' ? 'km' : 'en';
  }, [locale]);

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>): string => {
      const dict = locale === 'kh' ? khDictionary : enDictionary;
      let text =
        (dict as Record<string, string>)[key] ||
        (khDictionary as Record<string, string>)[key] ||
        key;
      if (params) {
        Object.entries(params).forEach(([paramKey, val]) => {
          text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(val));
        });
      }
      return text;
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};
