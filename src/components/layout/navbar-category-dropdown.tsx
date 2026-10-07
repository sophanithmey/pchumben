import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { SacredLotus } from '../ui/sacred-lotus';
import { NavbarCategory } from './navbar-config';

interface NavbarCategoryDropdownProps {
  category: NavbarCategory;
  locale: string;
}

export const NavbarCategoryDropdown: React.FC<NavbarCategoryDropdownProps> = ({
  category,
  locale,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const title = locale === 'kh' ? category.titleKh : category.titleEn;
  const isAnyChildActive = category.items.some((item) => location.pathname === item.to);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Click outside and escape key handling
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 180);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all whitespace-nowrap border cursor-pointer ${
          isAnyChildActive || isOpen
            ? 'text-lotus-900 bg-gradient-to-b from-lotus-100/90 via-lotus-50/90 to-lotus-50/70 font-semibold border-lotus-300/80 shadow-[0_2px_10px_rgba(220,80,120,0.18)] ring-1 ring-lotus-400/30'
            : 'text-warmth-700 hover:text-warmth-950 hover:bg-warmth-100/70 border-transparent'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {isAnyChildActive && <SacredLotus size="sm" />}
        <span className="font-khmer">{title}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-lotus-700' : 'text-warmth-500'
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 sm:w-88 p-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-warmth-200/90 shadow-2xl z-50 animate-scale-in space-y-1">
          {category.items.map((item) => {
            const Icon = item.icon;
            const label = locale === 'kh' ? item.labelKh : item.labelEn;
            const sub = locale === 'kh' ? item.subKh : item.subEn;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                    isActive
                      ? 'bg-lotus-50/90 text-lotus-900 border border-lotus-200/70 font-semibold'
                      : 'text-warmth-800 hover:bg-warmth-100/80 hover:text-warmth-950 border border-transparent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                        item.iconBg
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 leading-tight">
                        <span className="text-xs sm:text-sm font-khmer group-hover:text-lotus-700 transition-colors">
                          {label}
                        </span>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-500 text-white tracking-wide">
                            {item.badge}
                          </span>
                        )}
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-lotus-600" />
                        )}
                      </div>
                      <p className="text-[11px] text-warmth-500 font-khmer mt-0.5 line-clamp-1">
                        {sub}
                      </p>
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};
