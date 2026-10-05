import React from 'react';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'lotus'
  | 'gold'
  | 'success'
  | 'outline'
  | 'muted';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-warmth-100 text-warmth-800 border-warmth-200',
    primary: 'bg-warmth-900 text-warmth-50 border-warmth-950',
    lotus: 'bg-lotus-100 text-lotus-800 border-lotus-200',
    gold: 'bg-amber-100 text-amber-900 border-amber-300',
    success: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    outline: 'bg-transparent text-warmth-700 border-warmth-300',
    muted: 'bg-gray-100 text-gray-600 border-gray-200',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs md:text-sm px-2.5 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variantStyles[variant]} ${sizeStyles} ${className}`}
    >
      {children}
    </span>
  );
};
