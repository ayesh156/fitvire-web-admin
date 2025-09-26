/**
 * Badge Component - FitVire Admin Design System
 * TailAdmin-inspired badge with variants and sizes
 */

import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  dot?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  dot = false,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center font-medium';
  
  const variantClasses = {
    primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
    secondary: 'bg-surface/50 text-neutral border border-glass-border',
    success: 'bg-green-500/20 text-green-400 border border-green-500/30',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
    info: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    gray: 'bg-surface/30 text-neutral/60 border border-glass-border'
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs font-body',
    md: 'px-2.5 py-1 text-sm font-body',
    lg: 'px-3 py-1.5 text-base font-body'
  };

  const dotColors = {
    primary: 'bg-primary',
    secondary: 'bg-neutral',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    danger: 'bg-error-500',
    info: 'bg-info-500',
    gray: 'bg-surface'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    rounded ? 'rounded-full' : 'rounded-md',
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {dot && (
        <span className={`w-2 h-2 rounded-full mr-1.5 ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
};

export default Badge;