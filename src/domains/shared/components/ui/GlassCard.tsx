/**
 * Glass Card Component - FitVire Admin Design System
 * Glass morphism card following website design patterns
 */

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  blur?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

// Padding styles
const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10'
};

// Blur styles
const blurStyles = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-glass',
  lg: 'backdrop-blur-lg'
};

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  blur = 'md',
  onClick
}) => {
  const baseClasses = [
    'bg-glass-bg border border-glass-border rounded-2xl transition-all duration-300',
    blurStyles[blur],
    paddingStyles[padding],
    onClick && 'cursor-pointer',
    className
  ].filter(Boolean).join(' ');

  const Component = onClick ? motion.div : motion.div;

  return (
    <Component
      whileHover={hover && !onClick ? { y: -5, scale: 1.02 } : onClick ? { scale: 1.01 } : {}}
      whileTap={onClick ? { scale: 0.99 } : {}}
      className={baseClasses}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default GlassCard;