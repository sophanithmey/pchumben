import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Globe, Settings, Menu } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { SacredLotus } from '../ui/sacred-lotus';

interface NavbarProps {
  onOpenMobileMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/journey', label: t('nav.journey') },
    { to: '/libation', label: t('nav.libation') },
    { to: '/activities', label: t('nav.activities') },
    { to: '/memories', label: t('nav.memories') },
    { to: '/family', label: t('nav.family') },
    { to: '/about', label: t('nav.about') },
    { to: '/stories', label: t('nav.stories') },
    { to: '/pagodas', label: t('nav.pagodas') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-warmth-50/95 backdrop-blur-md border-b border-warmth-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-lotus-50 border border-lotus-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition">
            <span className="text-xl">🪷</span>
          </div>
          <div>
            <div className="font-bold text-warmth-950 text-base leading-tight">
              {t('appName')}
            </div>
            <div className="text-[11px] text-warmth-600 font-medium">
              {t('appSubtitle')}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-2.5 lg:px-3 py-1.5 rounded-xl text-xs lg:text-sm font-medium transition-all whitespace-nowrap border ${
                  isActive
                    ? 'text-lotus-900 bg-gradient-to-b from-lotus-100/90 via-lotus-50/90 to-lotus-50/70 font-semibold border-lotus-300/80 shadow-[0_2px_10px_rgba(220,80,120,0.18)] ring-1 ring-lotus-400/30'
                    : 'text-warmth-700 hover:text-warmth-950 hover:bg-warmth-100/70 border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <SacredLotus />}
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions: Language, Settings, Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === 'kh' ? 'en' : 'kh')}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-warmth-100 hover:bg-warmth-200 text-warmth-800 border border-warmth-200/70 transition shadow-xs active:scale-95"
            title="Toggle Language"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-lotus-600" />
            <span>{locale === 'kh' ? '🇰🇭 ខ្មែរ' : '🇬🇧 EN'}</span>
          </button>

          <Link
            to="/settings"
            className="p-2 rounded-xl text-warmth-600 hover:text-warmth-900 hover:bg-warmth-100 transition hidden sm:inline-flex"
            title={t('nav.settings')}
            aria-label={t('nav.settings')}
          >
            <Settings className="w-5 h-5" />
          </Link>

          {/* Mobile Drawer Hamburger Button */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-xl text-warmth-700 hover:text-warmth-950 hover:bg-warmth-100 border border-warmth-200/60 transition active:scale-95"
            title={locale === 'kh' ? 'បើកបញ្ជីមុខម្ហូប' : 'Open menu'}
            aria-label="Open navigation menu drawer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
