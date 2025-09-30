import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface PageHeaderStat {
  label: string;
  value: string | number;
  helperText?: string;
}

export interface PageHeaderBreadcrumb {
  label: string;
  href?: string;
}

export type PageHeaderVariant = 'gradient' | 'subtle';

export interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  breadcrumbs?: PageHeaderBreadcrumb[];
  stats?: PageHeaderStat[];
  variant?: PageHeaderVariant;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  icon,
  actions,
  breadcrumbs,
  stats,
  variant = 'gradient',
  className
}) => {
  const containerClasses = clsx(
    'relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500',
    variant === 'gradient'
      ? 'border-white/15 bg-gradient-to-br from-primary-500/18 via-surface/80 to-primary-hover/15 shadow-[0_20px_60px_rgba(240,68,68,0.15)]'
      : 'border-glass-border/60 bg-surface/60 shadow-[0_12px_40px_rgba(0,0,0,0.25)]',
    className
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={containerClasses}
    >
      <div className="pointer-events-none absolute inset-0">
        {variant === 'gradient' ? (
          <>
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-hover/25 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_rgba(10,10,10,0)_65%)]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_rgba(25,25,25,0)_70%)]" />
        )}
      </div>

      <div className="relative z-10 flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:gap-12 md:px-10 md:py-10">
        <div className="flex flex-1 items-start gap-6">
          {icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-hover shadow-[0_18px_45px_rgba(240,68,68,0.35)]">
              <span className="text-white">{icon}</span>
            </div>
          )}

          <div className="space-y-4">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral/70">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={`${crumb.label}-${index}`}>
                    {crumb.href ? (
                      <Link to={crumb.href} className="transition-colors duration-200 hover:text-primary-300">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-neutral/50">{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && <span className="text-neutral/40">/</span>}
                  </React.Fragment>
                ))}
              </nav>
            )}

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.4, ease: 'easeOut' }}
                className="text-3xl font-bold tracking-tight text-white md:text-4xl"
              >
                {title}
              </motion.h1>
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
                  className="mt-3 max-w-2xl text-base text-neutral/75 md:text-lg"
                >
                  {description}
                </motion.p>
              )}
            </div>
          </div>
        </div>

        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.4, ease: 'easeOut' }}
            className="flex flex-shrink-0 flex-col gap-3 md:flex-row"
          >
            {actions}
          </motion.div>
        )}
      </div>

      {stats && stats.length > 0 && (
        <div className="relative z-10 border-t border-white/10 px-6 py-6 md:px-10">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={`${stat.label}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.35, ease: 'easeOut' }}
                className="rounded-2xl border border-white/10 bg-white/5/50 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral/60">{stat.label}</p>
                <p className="mt-2 text-xl font-semibold text-white md:text-2xl">
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                </p>
                {stat.helperText && <p className="text-xs text-neutral/60">{stat.helperText}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default PageHeader;
