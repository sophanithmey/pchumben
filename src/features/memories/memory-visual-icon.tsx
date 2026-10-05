import React from 'react';
import { MemoryVisualType } from '../../domain/entities/memory';

interface MemoryVisualIconProps {
  type: MemoryVisualType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const MemoryVisualIcon: React.FC<MemoryVisualIconProps> = ({
  type,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  }[size];

  const getEmojiAndGlow = () => {
    switch (type) {
      case 'lotus':
        return { emoji: '🪷', glow: 'shadow-lotus-200' };
      case 'candle':
        return { emoji: '🕯️', glow: 'shadow-amber-200' };
      case 'flower':
        return { emoji: '🌸', glow: 'shadow-pink-200' };
      case 'tree':
        return { emoji: '🌳', glow: 'shadow-emerald-200' };
      default:
        return { emoji: '🪷', glow: 'shadow-lotus-200' };
    }
  };

  const { emoji } = getEmojiAndGlow();

  return (
    <span
      className={`inline-flex items-center justify-center transform hover:scale-110 transition duration-300 select-none ${sizeClasses} ${className}`}
    >
      {emoji}
    </span>
  );
};
