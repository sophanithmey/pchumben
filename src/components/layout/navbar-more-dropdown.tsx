import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';

interface NavItem {
  to: string;
  label: string;
}

interface NavbarMoreDropdownProps {
  secondaryLinks: NavItem[];
  extraLinks: NavItem[];
}

export const NavbarMoreDropdown: React.FC<NavbarMoreDropdownProps> = ({
  secondaryLinks,
  extraLinks,
}) => {
  const { t } = useI18n();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHiddenActive = [...secondaryLinks, ...extraLinks].some(
    (l) => location.pathname === l.to,
  );

  return (
    <div ref={containerRef} className="relative xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1 px-2.5 lg:px-3 py-1.5 rounded-xl text-xs lg:text-sm font-medium transition-all whitespace-nowrap border cursor-pointer ${
          isHiddenActive || isOpen
            ? 'text-lotus-900 bg-gradient-to-b from-lotus-100/90 via-lotus-50/90 to-lotus-50/70 font-semibold border-lotus-300/80 shadow-[0_2px_10px_rgba(220,80,120,0.18)]'
            : 'text-warmth-700 hover:text-warmth-950 hover:bg-warmth-100/70 border-transparent'
        }`}
        aria-expanded={isOpen}
        aria-label="More navigation links"
      >
        <span>{t('nav.more')}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-lotus-700' : 'text-warmth-500'
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 py-1.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-warmth-200/90 z-50 animate-scale-in">
          {/* On md: secondary links shown in dropdown */}
          <div className="lg:hidden border-b border-warmth-100 pb-1 mb-1">
            {secondaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3.5 py-2 text-xs font-medium font-khmer transition-colors ${
                    isActive
                      ? 'bg-lotus-50 text-lotus-900 font-semibold border-l-2 border-lotus-600'
                      : 'text-warmth-700 hover:bg-warmth-100 hover:text-warmth-950'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Extra links in dropdown for md and lg */}
          {extraLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3.5 py-2 text-xs font-medium font-khmer transition-colors ${
                  isActive
                    ? 'bg-lotus-50 text-lotus-900 font-semibold border-l-2 border-lotus-600'
                    : 'text-warmth-700 hover:bg-warmth-100 hover:text-warmth-950'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
