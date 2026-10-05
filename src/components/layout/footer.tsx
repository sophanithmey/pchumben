import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';

export const Footer: React.FC = () => {
  const { t } = useI18n();

  const footerLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/journey', label: t('nav.journey') },
    { to: '/stories', label: t('nav.stories') },
    { to: '/libation', label: t('nav.libation') },
    { to: '/memories', label: t('nav.memories') },
    { to: '/family', label: t('nav.family') },
    { to: '/pagodas', label: t('nav.pagodas') },
  ];

  return (
    <footer className="mt-16 border-t border-warmth-200/80 bg-white/80 backdrop-blur-sm text-warmth-700 py-8 pb-28 md:pb-10 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🪷</span>
          <span className="font-extrabold text-warmth-950 tracking-tight text-base sm:text-lg">
            {t('appName')} — {t('appSubtitle')}
          </span>
        </div>

        {/* Slogan with colored highlights */}
        <div className="text-xs sm:text-sm max-w-lg mx-auto mb-5 leading-relaxed font-khmer flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
          <span className="font-semibold text-warmth-900">{t('sloganLine1')}</span>
          <span className="text-warmth-300 select-none">•</span>
          <span className="text-lotus-700 font-semibold">{t('sloganLine2')}</span>
          <span className="text-warmth-300 select-none">•</span>
          <span className="text-amber-800 font-semibold">{t('sloganLine3')}</span>
        </div>

        {/* Tappable Pill Links (Mobile Friendly, No Broken Dots) */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-1.5 rounded-full bg-warmth-100/70 hover:bg-lotus-50 hover:text-lotus-700 hover:border-lotus-200 text-warmth-700 text-xs font-semibold border border-warmth-200/70 transition shadow-2xs active:scale-95"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Heart Dedication Tagline (Proper inline wrapping without flex columns) */}
        <p className="text-xs text-warmth-500 leading-relaxed max-w-md mx-auto">
          <span>Crafted with</span>{' '}
          <Heart className="inline w-3.5 h-3.5 text-lotus-500 fill-lotus-500 -mt-0.5 mx-0.5 align-middle" />{' '}
          <span>for Cambodian Cultural Preservation & Filial Remembrance</span>
        </p>
      </div>
    </footer>
  );
};
