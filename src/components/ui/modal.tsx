import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'md',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  const maxWidthClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }[maxWidth];

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto w-screen min-h-screen "
    >
      {/* Full-screen backdrop with blur */}
      <div
        className="fixed inset-0 w-full h-full min-h-screen  bg-warmth-950/60 backdrop-blur-md animate-backdrop-fade"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Centering wrapper */}
      <div
        className="min-h-full flex items-center justify-center p-2.5 sm:p-4 relative z-10"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          ref={modalRef}
          className={`w-full ${maxWidthClass} bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-warmth-200 overflow-hidden transform transition-all p-3.5 sm:p-6 animate-scale-in my-auto`}
        >
          <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-warmth-100 mb-3 sm:mb-4">
            <div className="text-base sm:text-lg font-bold text-warmth-900 font-khmer">{title}</div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-full text-warmth-500 hover:text-warmth-800 hover:bg-warmth-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="max-h-[82vh] overflow-y-auto pr-0.5">{children}</div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};
