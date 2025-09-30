/**
 * Base Input Component - FitVire Admin Design System
 * Form input with validation states and icons
 */

import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon, AlertCircleIcon } from 'lucide-react';

import {
  helperTextClass,
  inputBaseClass,
  inputLabelClass,
  inputSizeClass,
  inputVariantClass,
  type InputSize,
  type InputVariant
} from './componentThemes';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: InputSize;
  variant?: InputVariant;
  showPasswordToggle?: boolean;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      size = 'md',
      variant = 'default',
      showPasswordToggle = false,
      fullWidth = true,
      type = 'text',
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputType = type === 'password' && showPasswordToggle && showPassword ? 'text' : type;

    const inputClasses = clsx(
      inputBaseClass,
      inputVariantClass[variant],
      inputSizeClass[size],
      error && 'border-error-500 focus-visible:ring-error-500/40 focus-visible:ring-offset-background',
      leftIcon && 'pl-12',
      (rightIcon || showPasswordToggle || error) && 'pr-12',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    );

    const labelColor = error ? '#ef4444' : isFocused ? '#F04444' : undefined;

    return (
      <div className={clsx(fullWidth ? 'w-full' : 'w-auto', 'space-y-1')}>
        {label && (
          <motion.label
            animate={{ color: labelColor }}
            className={inputLabelClass}
          >
            {label}
          </motion.label>
        )}

        <div className="relative">
          {leftIcon && (
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-neutral/60">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            type={inputType}
            className={inputClasses}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          <div className="absolute inset-y-0 right-3 flex items-center gap-2">
            {error && <AlertCircleIcon className="h-4 w-4 text-error-500" />}

            {showPasswordToggle && type === 'password' && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-neutral/60 hover:text-primary-400 transition-colors duration-200"
                tabIndex={-1}
              >
                {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </button>
            )}

            {rightIcon && !error && (
              <span className="text-neutral/60">{rightIcon}</span>
            )}
          </div>
        </div>

        {(error || helperText) && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx(helperTextClass, error && 'text-error-400')}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;