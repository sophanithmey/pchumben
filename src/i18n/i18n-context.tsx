import { createContext, useContext } from 'react';
import { I18nContextType, Locale } from './i18n-types';

export const I18nContext = createContext<I18nContextType | null>(null);

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export type { Locale };
