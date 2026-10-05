import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sparkles, Trees, Users, MoreHorizontal } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';

interface BottomNavProps {
  onOpenMobileMenu?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenMobileMenu }) => {
  const { t } = useI18n();

  const navItems = [
    { to: '/', label: t('nav.home'), icon: Home },
    { to: '/journey', label: t('nav.journey'), icon: Sparkles },
    { to: '/memories', label: t('nav.memories'), icon: Trees },
    { to: '/family', label: t('nav.family'), icon: Users },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-warmth-200/80 px-2 py-1.5 shadow-lg safe-bottom"
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl text-[11px] font-medium transition-colors min-w-[56px] min-h-[48px] ${
                  isActive
                    ? 'text-lotus-700 bg-lotus-50 font-semibold'
                    : 'text-warmth-600 hover:text-warmth-900'
                }`
              }
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="truncate max-w-[62px]">{item.label}</span>
            </NavLink>
          );
        })}

        {/* All Menus Drawer Trigger */}
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl text-[11px] font-medium transition-colors min-w-[56px] min-h-[48px] text-warmth-600 hover:text-warmth-900 active:scale-95 cursor-pointer"
          aria-label="Open all menus drawer"
        >
          <MoreHorizontal className="w-5 h-5 mb-0.5 text-warmth-500" />
          <span className="truncate max-w-[62px]">{t('nav.more')}</span>
        </button>
      </div>
    </nav>
  );
};
