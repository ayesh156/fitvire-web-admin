/**
 * Badge Component - FitVire Admin Design System
 * TailAdmin-inspired badge with variants and sizes
 */

import React from 'react';
import clsx from 'clsx';

import {
  badgeBaseClass,
  badgeSizeClass,
  badgeVariants,
  type BadgeSize,
  type BadgeVariant
} from './componentThemes';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  withGlow?: boolean;
  dot?: boolean;
  className?: string;
}

const dotAccent: Record<BadgeVariant, string> = {
  primary: 'bg-primary-400',
  secondary: 'bg-neutral/80',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-error-500',
  info: 'bg-info-500',
  neutral: 'bg-glass-border'
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  dot = false,
  withGlow = false,
  className
}) => {
  const classes = clsx(
    badgeBaseClass,
    badgeVariants[variant],
    badgeSizeClass[size],
    withGlow && 'ring-2 ring-primary-500/20',
    className
  );

  return (
    <span className={classes}>
      {dot && <span className={clsx('h-1.5 w-1.5 rounded-full', dotAccent[variant])} />}
      {children}
    </span>
  );
};

export default Badge;