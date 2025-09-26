/**
 * Enhanced Button Component - FitVire Admin Design System
 * TailAdmin-inspired button with comprehensive variants and styling
 */

import React from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  rounded = 'md',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background border';
  
  const variantClasses = {
    primary: 'bg-primary-500 border-primary-500 text-white hover:bg-primary-hover hover:border-primary-hover focus:ring-primary-500 shadow-sm hover:shadow-lg hover:shadow-primary-500/25 btn-smooth-hover',
    secondary: 'bg-surface border-surface text-neutral hover:bg-surface/80 hover:border-surface/80 focus:ring-brand-500 shadow-sm hover:shadow-lg hover:shadow-surface/25 btn-smooth-hover',
    outline: 'border-glass-border text-neutral bg-transparent hover:bg-glass-bg hover:border-primary-500/50 focus:ring-primary-500 btn-smooth-hover',
    ghost: 'border-transparent text-neutral/70 hover:text-neutral hover:bg-glass-bg focus:ring-primary-500 btn-smooth-hover',
    success: 'bg-success-500 border-success-500 text-white hover:bg-success-600 hover:border-success-600 focus:ring-success-500 shadow-sm hover:shadow-lg hover:shadow-success-500/25 btn-smooth-hover',
    warning: 'bg-warning-500 border-warning-500 text-white hover:bg-warning-600 hover:border-warning-600 focus:ring-warning-500 shadow-sm hover:shadow-lg hover:shadow-warning-500/25 btn-smooth-hover',
    danger: 'bg-error-500 border-error-500 text-white hover:bg-error-600 hover:border-error-600 focus:ring-error-500 shadow-sm hover:shadow-lg hover:shadow-error-500/25 btn-smooth-hover'
  };

  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full'
  };

  const iconSizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    roundedClasses[rounded],
    fullWidth ? 'w-full' : '',
    disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className
  ].filter(Boolean).join(' ');

  const iconSpacing = {
    xs: 'space-x-1',
    sm: 'space-x-1.5',
    md: 'space-x-2',
    lg: 'space-x-2.5',
    xl: 'space-x-3'
  };

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      className={classes}
      disabled={disabled || loading}
      {...(props as any)}
    >
      <div className={`flex items-center ${iconSpacing[size]}`}>
        {loading && (
          <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${iconSizeClasses[size]}`} />
        )}
        
        {icon && iconPosition === 'left' && !loading && (
          <span className={iconSizeClasses[size]}>{icon}</span>
        )}
        
        {children && <span>{children}</span>}
        
        {icon && iconPosition === 'right' && !loading && (
          <span className={iconSizeClasses[size]}>{icon}</span>
        )}
      </div>
    </motion.button>
  );
};

// Additional Button Variants
export const IconButton: React.FC<Omit<ButtonProps, 'children'> & { icon: React.ReactNode }> = ({
  icon,
  className = '',
  ...props
}) => (
  <Button className={`!p-2 ${className}`} {...props}>
    {icon}
  </Button>
);

export const LoadingButton: React.FC<ButtonProps & { loadingText?: string }> = ({
  loading,
  loadingText = 'Loading...',
  children,
  ...props
}) => (
  <Button loading={loading} {...props}>
    {loading ? loadingText : children}
  </Button>
);

export default Button;