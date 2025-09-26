/**
 * Loading Spinner Component - FitVire Admin Design System
 * Consistent loading indicators across the application
 */

import React from 'react';
import { motion } from 'framer-motion';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'white' | 'neutral';
  className?: string;
}

// Size configurations
const sizeConfig = {
  sm: { size: 16, strokeWidth: 2 },
  md: { size: 24, strokeWidth: 2.5 },
  lg: { size: 32, strokeWidth: 3 },
  xl: { size: 40, strokeWidth: 3.5 }
};

// Color styles
const colorStyles = {
  primary: 'text-primary-500',
  white: 'text-white',
  neutral: 'text-neutral'
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const { size: spinnerSize, strokeWidth } = sizeConfig[size];
  
  const classes = [
    'animate-spin',
    colorStyles[color],
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes}
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </motion.svg>
  );
};

// Loading overlay component
interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  message?: string;
  blur?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  message = 'Loading...',
  blur = true
}) => {
  return (
    <div className="relative">
      {children}
      
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 flex flex-col items-center justify-center bg-background/80 ${
            blur ? 'backdrop-blur-sm' : ''
          } z-50`}
        >
          <Spinner size="lg" />
          {message && (
            <p className="mt-4 text-neutral text-sm font-medium">
              {message}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Spinner;