import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Globe, Settings, Menu } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { SacredLotus } from '../ui/sacred-lotus';
import { NavbarMoreDropdown } from './navbar-more-dropdown';

interface NavbarProps {
  onOpenMobileMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const { locale, setLocale, t } = useI18n();

  // Core links: always visible on tablet & desktop (md+)
  const coreLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/journey', label: t('nav.journey') },
    { to: '/libation', label: t('nav.libation') },
    { to: '/family', label: t('nav.family') },
  ];

  // Secondary links: visible inline on lg+ (iPad landscape / laptop)
  const secondaryLinks = [
    { to: '/activities', label: t('nav.activities') },
    { to: '/stories', label: t('nav.stories') },
  ];

  // Extra links: visible inline on xl+ (desktop)
  const extraLinks = [
    { to: '/memories', label: t('nav.memories') },
    { to: '/pagodas', label: t('nav.pagodas') },
    { to: '/about', label: t('nav.about') },
  ];

  const renderNavLink = (link: { to: string; label: string }) => (
    <NavLink
      key={link.to}
      to={link.to}
      end={link.to === '/'}
      className={({ isActive }) =>
        `relative px-2 sm:px-2.5 lg:px-3 py-1.5 rounded-xl text-xs lg:text-sm font-medium transition-all whitespace-nowrap border ${
          isActive
            ? 'text-lotus-900 bg-gradient-to-b from-lotus-100/90 via-lotus-50/90 to-lotus-50/70 font-semibold border-lotus-300/80 shadow-[0_2px_10px_rgba(220,80,120,0.18)] ring-1 ring-lotus-400/30'
            : 'text-warmth-700 hover:text-warmth-950 hover:bg-warmth-100/70 border-transparent'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && <SacredLotus size="sm" />}
          <span>{link.label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-40 bg-warmth-50/95 backdrop-blur-md border-b border-warmth-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-lotus-50 border border-lotus-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition">
            <span className="text-lg sm:text-xl">🪷</span>
          </div>
          <div>
            <div className="font-bold text-warmth-950 text-sm sm:text-base leading-tight font-khmer">
              {t('appName')}
            </div>
            <div className="text-[10px] sm:text-[11px] text-warmth-600 font-medium hidden sm:block md:hidden lg:block font-sans">
              {t('appSubtitle')}
            </div>
          </div>
        </Link>

        {/* Adaptive Tablet & Desktop Navigation (md+) */}
        <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
          {/* Always visible on md+ (Home, Journey, Libation, Family) */}
          {coreLinks.map(renderNavLink)}

          {/* Visible on lg+ (Activities, Stories) */}
          <div className="hidden lg:flex items-center space-x-0.5 lg:space-x-1">
            {secondaryLinks.map(renderNavLink)}
          </div>

          {/* Visible only on xl+ (Memories, Pagodas, About) */}
          <div className="hidden xl:flex items-center space-x-0.5 lg:space-x-1">
            {extraLinks.map(renderNavLink)}
          </div>

          {/* Responsive "More" Dropdown on md and lg (iPad / medium screens) */}
          <NavbarMoreDropdown
            secondaryLinks={secondaryLinks}
            extraLinks={extraLinks}
          />
        </nav>

        {/* Action Controls: Language, Settings, Mobile/Tablet Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
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
            className="p-2 rounded-xl text-warmth-600 hover:text-warmth-900 hover:bg-warmth-100 transition hidden lg:inline-flex"
            title={t('nav.settings')}
            aria-label={t('nav.settings')}
          >
            <Settings className="w-5 h-5" />
          </Link>

          {/* Drawer Hamburger Button (available on mobile and small tablets) */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-xl text-warmth-700 hover:text-warmth-950 hover:bg-warmth-100 border border-warmth-200/60 transition active:scale-95"
            title={locale === 'kh' ? 'បើកម៉ឺនុយ' : 'Open menu'}
            aria-label={locale === 'kh' ? 'បើកម៉ឺនុយរុករក' : 'Open navigation menu drawer'}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
