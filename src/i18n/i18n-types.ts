import { TranslationKey } from './kh';

export type Locale = 'kh' | 'en';

export interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export const I18N_STORAGE_KEY = 'pchum_ben_locale';
