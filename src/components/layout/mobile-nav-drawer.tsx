import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import {
  X,
  Home,
  Sparkles,
  Droplet,
  CheckCircle2,
  Trees,
  Users,
  BookOpen,
  MapPin,
  Info,
  Settings,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { SacredLotus } from '../ui/sacred-lotus';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({ isOpen, onClose }) => {
  const { locale, setLocale, t } = useI18n();
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuSections = [
    {
      title: locale === 'kh' ? 'កិច្ចប្រារព្ធ និងពិធីសាសនា' : 'Sacred Rituals & Journey',
      items: [
        {
          to: '/',
          label: t('nav.home'),
          sub: locale === 'kh' ? 'ទំព័រដើម និងរាប់ថយក្រោយ' : 'Countdown & Overview',
          icon: Home,
          iconBg: 'bg-amber-100 text-amber-800',
        },
        {
          to: '/journey',
          label: t('nav.journey'),
          sub: locale === 'kh' ? 'ដំណើរបុណ្យ ១៥ ថ្ងៃ' : '15-Day Sacred Calendar',
          icon: Sparkles,
          iconBg: 'bg-lotus-100 text-lotus-800',
        },
        {
          to: '/libation',
          label: t('nav.libation'),
          sub: locale === 'kh' ? 'ពិធីច្រូចទឹក និងធម៌បាលី' : 'Water Libation & Chants',
          icon: Droplet,
          iconBg: 'bg-sky-100 text-sky-800',
        },
        {
          to: '/activities',
          label: t('nav.activities'),
          sub: locale === 'kh' ? 'កិច្ចការបុណ្យប្រចាំថ្ងៃ' : 'Daily Merits & Deeds',
          icon: CheckCircle2,
          iconBg: 'bg-emerald-100 text-emerald-800',
        },
      ],
    },
    {
      title: locale === 'kh' ? 'ការចងចាំ និងគ្រួសារ' : 'Remembrance & Family',
      items: [
        {
          to: '/memories',
          label: t('nav.memories'),
          sub: locale === 'kh' ? 'សួនអនុស្សាវរីយ៍ដូនតា' : 'Ancestral Tribute Garden',
          icon: Trees,
          iconBg: 'bg-emerald-100 text-emerald-800',
        },
        {
          to: '/family',
          label: t('nav.family'),
          sub: locale === 'kh' ? 'កិច្ចសាមគ្គីគ្រួសារ' : 'Family Traditions Challenge',
          icon: Users,
          iconBg: 'bg-purple-100 text-purple-800',
        },
      ],
    },
    {
      title: locale === 'kh' ? 'វប្បធម៌ និងវត្តអារាម' : 'Heritage & Exploration',
      items: [
        {
          to: '/stories',
          label: t('nav.stories'),
          sub: locale === 'kh' ? 'រឿងនិទាន និងប្រវត្តិបុណ្យ' : 'Legends & Cultural Lore',
          icon: BookOpen,
          iconBg: 'bg-orange-100 text-orange-800',
        },
        {
          to: '/pagodas',
          label: t('nav.pagodas'),
          sub: locale === 'kh' ? 'បញ្ជីវត្តអារាម ១៥ ថ្ងៃ' : '15 Historic Pagodas',
          icon: MapPin,
          iconBg: 'bg-rose-100 text-rose-800',
        },
        {
          to: '/about',
          label: t('nav.about'),
          sub: locale === 'kh' ? 'អំពីពិធីបុណ្យភ្ជុំបិណ្ឌ' : 'About Pchum Ben Festival',
          icon: Info,
          iconBg: 'bg-blue-100 text-blue-800',
        },
        {
          to: '/settings',
          label: t('nav.settings'),
          sub: locale === 'kh' ? 'ការកំណត់សំឡេង និងទូទៅ' : 'Audio & Preferences',
          icon: Settings,
          iconBg: 'bg-warmth-200 text-warmth-800',
        },
      ],
    },
  ];

  const drawerContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={locale === 'kh' ? 'ម៉ឺនុយរុករក' : 'Navigation Menu'}
      className="fixed inset-0 z-50 overflow-hidden w-screen h-screen h-[100dvh]"
    >
      {/* Dark blur backdrop */}
      <div
        className="fixed inset-0 w-full h-full bg-warmth-950/60 backdrop-blur-sm animate-backdrop-fade"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer sheet sliding in from right */}
      <div className="fixed top-0 bottom-0 right-0 z-10 w-[86vw] max-w-sm bg-warmth-50 border-l border-warmth-200/90 shadow-2xl flex flex-col animate-slide-in-right overflow-hidden safe-bottom">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-warmth-200/80 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-lotus-50 border border-lotus-200 flex items-center justify-center shadow-2xs">
              <span className="text-lg">🪷</span>
            </div>
            <div>
              <div className="font-bold text-warmth-950 text-sm leading-tight font-khmer">
                {t('appName')}
              </div>
              <div className="text-[10px] text-warmth-600 font-medium">
                {locale === 'kh' ? 'មគ្គុទ្ទេសក៍ឌីជីថលបុណ្យ' : 'Digital Companion'}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-xl text-warmth-500 hover:text-warmth-900 hover:bg-warmth-100 transition active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content: All Menus */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {menuSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1.5">
              <div className="text-[11px] font-bold text-warmth-500 uppercase tracking-wider px-2 font-khmer">
                {section.title}
              </div>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between p-2.5 rounded-2xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-lotus-100/95 via-lotus-50/90 to-lotus-50/70 border border-lotus-300/80 shadow-xs text-lotus-950 font-semibold'
                            : 'text-warmth-800 hover:bg-warmth-100/80 active:bg-warmth-200/60 border border-transparent'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                                isActive ? 'scale-105 shadow-2xs' : ''
                              } ${item.iconBg}`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs sm:text-sm font-semibold truncate font-khmer">
                                {item.label}
                              </div>
                              <div className="text-[10px] text-warmth-600 truncate font-khmer">
                                {item.sub}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 flex-shrink-0 pl-2">
                            {isActive ? (
                              <SacredLotus
                                size="sm"
                                className="relative -top-0.5 ml-1"
                              />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-warmth-400" />
                            )}
                          </div>
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer: Language Toggle & Cultural Motto */}
        <div className="p-4 border-t border-warmth-200/80 bg-white/60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-warmth-700 font-khmer">
              {locale === 'kh' ? 'ប្តូរភាសា' : 'Language'}
            </span>
            <button
              type="button"
              onClick={() => setLocale(locale === 'kh' ? 'en' : 'kh')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-warmth-100 hover:bg-warmth-200 text-warmth-900 border border-warmth-200/80 transition shadow-2xs active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-lotus-600" />
              <span>{locale === 'kh' ? '🇰🇭 ភាសាខ្មែរ' : '🇬🇧 English'}</span>
            </button>
          </div>

          <div className="text-center text-[11px] text-warmth-500 italic pt-1 font-khmer border-t border-warmth-100">
            {locale === 'kh'
              ? '« ចងចាំគុណ គោរពដូនតា បន្តប្រពៃណី »'
              : 'Remember. Honor. Continue.'}
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(drawerContent, document.body);
  }

  return drawerContent;
};
