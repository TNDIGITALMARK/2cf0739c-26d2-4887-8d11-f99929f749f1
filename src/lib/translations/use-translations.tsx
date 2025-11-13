'use client';

import { createContext, useContext, ReactNode } from 'react';
import { fr, TranslationKey } from './fr';

type Locale = 'fr';

interface TranslationContextType {
  locale: Locale;
  t: TranslationKey;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
  locale?: Locale;
}

export function TranslationProvider({ children, locale = 'fr' }: TranslationProviderProps) {
  const translations: Record<Locale, TranslationKey> = {
    fr,
  };

  const value = {
    locale,
    t: translations[locale],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }
  return context;
}

/**
 * Hook for using translations in components
 * @returns Translation object (t) and current locale
 *
 * @example
 * const { t } = useTranslations();
 * return <h1>{t.home.hero.title}</h1>
 */
export function useT() {
  const { t } = useTranslations();
  return { t };
}
