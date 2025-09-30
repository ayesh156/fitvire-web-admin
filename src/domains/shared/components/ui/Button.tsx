/**
 * Enhanced Button Component - FitVire Admin Design System
 * TailAdmin-inspired button with comprehensive variants and styling
 */

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';

import {
  buttonBaseClass,
  buttonGapClass,
  buttonIconSizeClass,
  buttonShapeClass,
  buttonSizeClass,
  buttonVariants,
  type ButtonRadius,
  type ButtonSize,
  type ButtonVariant
} from './componentThemes';

type MotionButtonProps = HTMLMotionProps<'button'>;

export interface ButtonProps extends Omit<MotionButtonProps, 'ref' | 'color'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounding?: ButtonRadius;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  ripple?: boolean;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      rounding = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      ripple = true,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const content = (
      <span className={clsx('relative flex items-center justify-center', buttonGapClass[size])}>
        {loading && (
          <span
            className={clsx(
              'inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent',
              buttonIconSizeClass[size]
            )}
          />
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className={clsx('flex items-center justify-center', buttonIconSizeClass[size])}>{icon}</span>
        )}
        {children && <span className="truncate whitespace-nowrap">{children}</span>}
        {icon && iconPosition === 'right' && !loading && (
          <span className={clsx('flex items-center justify-center', buttonIconSizeClass[size])}>{icon}</span>
        )}
      </span>
    );

    const classes = clsx(
      buttonBaseClass,
      buttonVariants[variant],
      buttonSizeClass[size],
      buttonShapeClass[rounding],
      fullWidth && 'w-full',
      ripple && 'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      className
    );

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled && !loading ? { y: -2, scale: 1.01 } : undefined}
        whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
        className={classes}
        disabled={disabled || loading}
        type={type}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export const IconButton: React.FC<Omit<ButtonProps, 'children'> & { icon: React.ReactNode }> = ({
  icon,
  size = 'sm',
  variant = 'outline',
  rounding = 'lg',
  className,
  ...props
}) => (
  <Button
    variant={variant}
    size={size}
    rounding={rounding}
    className={clsx('aspect-square !px-0 justify-center', className)}
    icon={icon}
    aria-label={props['aria-label']}
    {...props}
  />
);

export const LoadingButton: React.FC<ButtonProps & { loadingText?: string }> = ({
  loading,
  loadingText = 'Processing...',
  children,
  ...props
}) => (
  <Button loading={loading} {...props}>
    {loading ? loadingText : children}
  </Button>
);

export default Button;