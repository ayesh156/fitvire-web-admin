import type { ReactNode } from 'react';

import {
  blurs,
  borders,
  gradients,
  radii,
  rings,
  shadows,
  surfaces,
  surfaceToneAccents,
  transitions
} from '../../design-system';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'surface'
  | 'link'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRadius = 'sm' | 'md' | 'lg' | 'full';

export const buttonBaseClass = [
  'relative inline-flex items-center justify-center font-medium tracking-tight',
  transitions.default,
  rings.primary,
  'disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none'
].join(' ');

export const buttonShapeClass: Record<ButtonRadius, string> = {
  sm: radii.xs,
  md: radii.sm,
  lg: radii.md,
  full: radii.full
};

export const buttonSizeClass: Record<ButtonSize, string> = {
  xs: 'h-7 px-3 text-xs',
  sm: 'h-8 px-3.5 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-6 text-base',
  xl: 'h-12 px-7 text-lg'
};

export const buttonGapClass: Record<ButtonSize, string> = {
  xs: 'gap-1',
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-2.5',
  xl: 'gap-3'
};

export const buttonIconSizeClass: Record<ButtonSize, string> = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
  xl: 'h-6 w-6'
};

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r',
    gradients.primary,
    'text-white',
    shadows.glowPrimary,
    'hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(240,68,68,0.35)]'
  ].join(' '),
  secondary: [
    'bg-surface/80 text-neutral',
    borders.base,
    blurs.glass,
    'hover:text-white hover:border-primary-500/60 hover:bg-surface/95 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
  ].join(' '),
  outline: [
    borders.base,
    'text-neutral/90 backdrop-blur-sm',
    'hover:text-white hover:border-primary-500 hover:bg-primary-500/10'
  ].join(' '),
  ghost: [
    'border border-transparent text-neutral/70',
    'hover:text-white hover:bg-glass-bg/70 hover:border-glass-border/80'
  ].join(' '),
  surface: [
    'bg-gradient-to-br',
    gradients.primaryHover,
    'text-white',
    borders.base,
    'hover:border-primary-500/40 hover:shadow-[0_18px_48px_rgba(240,68,68,0.18)]'
  ].join(' '),
  link: [
    'bg-transparent border-none text-primary-400 px-1 py-0 focus-visible:ring-0',
    'underline underline-offset-4 decoration-transparent hover:text-primary-300 hover:decoration-primary-400'
  ].join(' '),
  success: [
    'bg-gradient-to-r',
    gradients.success,
    'text-white',
    shadows.glowPrimary,
    'hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(34,197,94,0.35)]'
  ].join(' '),
  warning: [
    'bg-gradient-to-r',
    gradients.warning,
    'text-white',
    shadows.glowPrimary,
    'hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(245,158,11,0.35)]'
  ].join(' '),
  danger: [
    'bg-gradient-to-r',
    gradients.danger,
    'text-white',
    shadows.glowPrimary,
    'hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(239,68,68,0.35)]'
  ].join(' ')
};

export type CardVariant = 'glass' | 'surface' | 'elevated' | 'outline' | 'subtle';
export type CardPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg';

export const cardBaseClass = [
  'relative overflow-hidden',
  radii.md,
  borders.base,
  blurs.glass,
  transitions.expressive
].join(' ');

export const cardVariants: Record<CardVariant, string> = {
  glass: surfaces.glass,
  surface: surfaces.surface,
  elevated: surfaces.elevated,
  outline: surfaces.outline,
  subtle: surfaces.subtle
};

export const cardPaddingClass: Record<CardPadding, string> = {
  none: 'p-0',
  xs: 'p-4',
  sm: 'p-5',
  md: 'p-6',
  lg: 'p-8'
};

export const cardHoverEffects: Record<'none' | 'float' | 'lift', string> = {
  none: '',
  float: 'hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(240,68,68,0.12)]',
  lift: ['hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(240,68,68,0.18)]', surfaceToneAccents.accent].join(' ')
};

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export type BadgeSize = 'xs' | 'sm' | 'md';

export const badgeBaseClass = [
  'inline-flex items-center gap-1.5 font-medium uppercase tracking-wide',
  transitions.subtle
].join(' ');

export const badgeSizeClass: Record<BadgeSize, string> = {
  xs: 'text-[10px] px-1.5 py-1 rounded-full',
  sm: 'text-xs px-2 py-1 rounded-full',
  md: 'text-sm px-3 py-1.5 rounded-full'
};

export const badgeVariants: Record<BadgeVariant, string> = {
  primary:
    'bg-primary-500/15 text-primary-300 border border-primary-500/30 shadow-[0_0_20px_rgba(240,68,68,0.2)]',
  secondary:
    'bg-surface/60 text-neutral border border-glass-border/70 backdrop-blur-sm',
  success:
    'bg-success-500/15 text-success-400 border border-success-500/30',
  warning:
    'bg-warning-500/15 text-warning-400 border border-warning-500/30',
  danger:
    'bg-error-500/15 text-error-400 border border-error-500/30',
  info:
    'bg-info-500/15 text-info-400 border border-info-500/30',
  neutral:
    'bg-background/70 text-neutral/80 border border-glass-border/60'
};

export type InputVariant = 'default' | 'filled' | 'subtle';
export type InputSize = 'sm' | 'md' | 'lg';

export const inputBaseClass =
  'w-full rounded-xl border transition-all duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background placeholder:text-neutral/50 disabled:opacity-50 disabled:cursor-not-allowed';

export const inputVariantClass: Record<InputVariant, string> = {
  default: 'bg-transparent border-glass-border hover:border-primary-500/40 focus:border-primary-500',
  filled: 'bg-surface/80 border-transparent hover:border-primary-500/40 focus:border-primary-500 focus:bg-surface/90',
  subtle: 'bg-background/60 border-glass-border/50 hover:border-primary-500/30 focus:border-primary-500'
};

export const inputSizeClass: Record<InputSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-base',
  lg: 'h-12 px-5 text-lg'
};

export const inputLabelClass = 'block text-sm font-medium text-neutral/80 mb-2';

export const helperTextClass = 'mt-2 text-xs text-neutral/60';

export interface ComponentThemePreview {
  title: string;
  variant: string;
  description?: string;
  icon?: ReactNode;
}
