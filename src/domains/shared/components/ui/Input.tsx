/**
 * Base Input Component - FitVire Admin Design System
 * Form input with validation states and icons
 */

import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon, AlertCircleIcon } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled';
  showPasswordToggle?: boolean;
  fullWidth?: boolean;
}

// Size styles
const sizeStyles = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-4 text-lg'
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
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
  className = '',
  disabled,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPasswordToggle && showPassword ? 'text' : type;

  const baseInputClasses = [
    'w-full rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background',
    sizeStyles[size],
    variant === 'default' 
      ? 'bg-transparent border-glass-border focus:border-primary-500 focus:ring-primary-500/20' 
      : 'bg-surface border-surface focus:border-primary-500 focus:ring-primary-500/20',
    error 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
      : 'hover:border-primary-500/50',
    disabled && 'opacity-50 cursor-not-allowed',
    leftIcon && 'pl-10',
    (rightIcon || showPasswordToggle) && 'pr-10',
    className
  ].filter(Boolean).join(' ');

  const containerClasses = [
    fullWidth ? 'w-full' : 'w-auto',
    'relative'
  ].join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <motion.label
          animate={{
            color: error ? '#ef4444' : isFocused ? '#F04444' : '#D9D9D9'
          }}
          className="block text-sm font-medium mb-2 transition-colors duration-200"
        >
          {label}
        </motion.label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral pointer-events-none">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          className={baseInputClasses}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {/* Right side icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {error && (
            <AlertCircleIcon className="h-4 w-4 text-red-500" />
          )}
          
          {showPasswordToggle && type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-neutral hover:text-primary-500 transition-colors duration-200"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </button>
          )}
          
          {rightIcon && !error && (
            <div className="text-neutral">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
      
      {/* Helper text or error message */}
      {(error || helperText) && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-2 text-sm ${
            error ? 'text-red-500' : 'text-neutral/70'
          }`}
        >
          {error || helperText}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;