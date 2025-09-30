/*
 * FitVire Admin Design System Tokens
 * TailAdmin-inspired primitives for consistent UI styling across the dashboard.
 */

export const colors = {
  primary: 'var(--color-primary)',
  primaryHover: 'var(--color-primary-hover)',
  primary500: 'var(--color-primary-500)',
  primary400: 'var(--color-primary-400)',
  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  elevated: 'var(--color-elevated)',
  neutral: 'var(--color-neutral)',
  glassBg: 'var(--color-glass-bg)',
  glassBorder: 'var(--color-glass-border)',
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6'
} as const;

export const gradients = {
  primary: 'from-primary-500 via-primary-500 to-primary-hover',
  primaryHover: 'from-primary-400 via-primary-500 to-primary-hover',
  glassShine: 'from-white/6 via-transparent to-transparent',
  success: 'from-success-500 via-success-500 to-success-600',
  warning: 'from-warning-500 via-warning-500 to-warning-600',
  danger: 'from-error-500 via-error-500 to-error-600'
} as const;

export const radii = {
  xs: 'rounded-lg',
  sm: 'rounded-xl',
  md: 'rounded-2xl',
  lg: 'rounded-[28px]',
  full: 'rounded-full'
} as const;

export const shadows = {
  subtle: 'shadow-[0_10px_25px_rgba(0,0,0,0.25)]',
  medium: 'shadow-[0_18px_55px_rgba(15,15,15,0.35)]',
  glowPrimary: 'shadow-[0_18px_55px_rgba(240,68,68,0.25)]',
  glass: 'shadow-[0_22px_65px_rgba(240,68,68,0.12)]',
  outline: 'shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
} as const;

export const rings = {
  primary: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  soft: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
} as const;

export const transitions = {
  subtle: 'transition-all duration-200 ease-out',
  default: 'transition-all duration-300 ease-out',
  expressive: 'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
} as const;

export const blurs = {
  glass: 'backdrop-blur-[12px]',
  intense: 'backdrop-blur-xl'
} as const;

export const borders = {
  base: 'border border-glass-border/70',
  subtle: 'border border-glass-border/40',
  strong: 'border border-primary-500/40'
} as const;

export type SurfaceVariant = 'glass' | 'surface' | 'elevated' | 'outline' | 'subtle';
export type ToneVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'info';

export const surfaces: Record<SurfaceVariant, string> = {
  glass: `bg-[${colors.glassBg}] ${borders.base} ${blurs.glass} ${shadows.medium}`,
  surface: `bg-surface/85 ${borders.base} ${blurs.glass} ${shadows.glass}`,
  elevated: `bg-elevated/90 ${borders.subtle} ${blurs.intense} ${shadows.glowPrimary}`,
  outline: `bg-transparent ${borders.subtle}`,
  subtle: `bg-background/70 ${borders.subtle} ${blurs.glass} ${shadows.subtle}`
};

export const surfaceToneAccents: Record<ToneVariant, string> = {
  default: '',
  accent: 'hover:border-primary-500/50',
  success: 'hover:border-success-500/40',
  warning: 'hover:border-warning-500/40',
  danger: 'hover:border-error-500/40',
  info: 'hover:border-info-500/40'
};

export const text = {
  heading: 'text-white',
  body: 'text-neutral/80',
  muted: 'text-neutral/60',
  onPrimary: 'text-white',
  onSurface: 'text-neutral',
  accent: 'text-primary-300'
} as const;

export const layout = {
  pagePadding: 'px-6 pb-10 pt-6 sm:px-8 lg:px-10 xl:px-14',
  contentWidth: 'max-w-[1440px] mx-auto',
  sectionSpacing: 'space-y-6 lg:space-y-8'
} as const;

export const spacing = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8'
} as const;

export const componentHeights = {
  inputSm: 'h-9',
  inputMd: 'h-11',
  inputLg: 'h-12',
  buttonSm: 'h-9',
  buttonMd: 'h-10',
  buttonLg: 'h-12'
} as const;

export const overlays = {
  ambient: 'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(240,68,68,0.08),_transparent_65%)] before:opacity-60 before:content-[\'\']',
  softLight: 'after:absolute after:inset-0 after:bg-[linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(25,25,25,0.85))] after:mix-blend-soft-light after:content-[\'\']'
} as const;

export const designTokens = {
  colors,
  gradients,
  radii,
  shadows,
  rings,
  transitions,
  blurs,
  borders,
  surfaces,
  surfaceToneAccents,
  text,
  layout,
  spacing,
  componentHeights,
  overlays
} as const;

export type DesignTokens = typeof designTokens;
