/**
 * Glass Card Component - FitVire Admin Design System
 * Glass morphism card following website design patterns
 */

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import {
  cardBaseClass,
  cardHoverEffects,
  cardPaddingClass,
  cardVariants,
  type CardPadding,
  type CardVariant
} from './componentThemes';
import { surfaceToneAccents, type ToneVariant } from '../../design-system';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  padding?: CardPadding;
  hoverEffect?: keyof typeof cardHoverEffects;
  interactive?: boolean;
  tone?: ToneVariant;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'glass',
  padding = 'md',
  hoverEffect = 'float',
  interactive = false,
  tone = 'default',
  onClick
}) => {
  const classes = clsx(
    cardBaseClass,
    cardVariants[variant],
    cardPaddingClass[padding],
    hoverEffect !== 'none' && cardHoverEffects[hoverEffect],
    interactive && 'cursor-pointer',
    interactive && surfaceToneAccents[tone],
    className
  );

  return (
    <motion.div
      whileHover={hoverEffect !== 'none' ? { y: -4, scale: 1.01 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      className={classes}
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="relative z-10 flex flex-col gap-4">{children}</div>
      <div className="absolute inset-0 -z-0 rounded-[inherit] bg-gradient-to-br from-white/5 to-transparent" />
    </motion.div>
  );
};

export default GlassCard;