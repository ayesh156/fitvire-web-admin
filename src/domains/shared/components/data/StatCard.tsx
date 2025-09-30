import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';

export type StatCardTone = 'primary' | 'orange' | 'emerald' | 'violet' | 'neutral';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: string;
  changeDirection?: 'up' | 'down' | 'neutral';
  helperText?: string;
  tone?: StatCardTone;
  delay?: number;
  className?: string;
}

const toneClassMap: Record<StatCardTone, string> = {
  primary: 'from-primary-500/35 via-primary-hover/15 to-transparent',
  orange: 'from-orange-500/35 via-amber-400/15 to-transparent',
  emerald: 'from-emerald-500/35 via-teal-400/15 to-transparent',
  violet: 'from-purple-500/35 via-indigo-400/15 to-transparent',
  neutral: 'from-slate-500/30 via-slate-400/10 to-transparent'
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  change,
  changeDirection = 'up',
  helperText,
  tone = 'primary',
  delay = 0,
  className
}) => {
  const trendIcon =
    changeDirection === 'up' ? <ArrowUpRight className="h-4 w-4" /> : changeDirection === 'down' ? <ArrowDownRight className="h-4 w-4" /> : <Minus className="h-4 w-4" />;

  const trendColor =
    changeDirection === 'up'
      ? 'text-emerald-300'
      : changeDirection === 'down'
        ? 'text-rose-300'
        : 'text-neutral/60';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={clsx(
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 shadow-[0_16px_45px_rgba(0,0,0,0.25)] hover:shadow-[0_24px_70px_rgba(240,68,68,0.18)]',
        className
      )}
    >
      <div
        className={clsx(
          'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
          toneClassMap[tone]
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(18,18,18,0)_65%)]" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-white shadow-[0_12px_30px_rgba(240,68,68,0.25)]">
            {icon}
          </div>
          {change && (
            <div
              className={clsx(
                'flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur',
                trendColor === 'text-emerald-300'
                  ? 'border-emerald-400/30 bg-emerald-400/10'
                  : trendColor === 'text-rose-300'
                    ? 'border-rose-400/30 bg-rose-400/10'
                    : 'border-white/10 bg-white/10 text-neutral/70'
              )}
            >
              <span className={trendColor}>{trendIcon}</span>
              <span className={clsx('tracking-tight', trendColor)}>{change}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral/60">{label}</p>
          <p className="text-3xl font-bold text-white md:text-[2.25rem] md:leading-tight">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          {helperText && <p className="text-sm text-neutral/60">{helperText}</p>}
        </div>
      </div>
    </motion.article>
  );
};

export default StatCard;
