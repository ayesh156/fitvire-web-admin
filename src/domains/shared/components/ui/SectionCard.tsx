import React from 'react';
import clsx from 'clsx';
import GlassCard, { type GlassCardProps } from './GlassCard';

export interface SectionCardProps extends Pick<GlassCardProps, 'variant' | 'padding' | 'hoverEffect' | 'className'> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  tone?: GlassCardProps['tone'];
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  icon,
  actions,
  children,
  footer,
  tone,
  className,
  ...glassProps
}) => {
  return (
    <GlassCard
      padding={glassProps.padding ?? 'lg'}
      variant={glassProps.variant ?? 'surface'}
      hoverEffect={glassProps.hoverEffect ?? 'float'}
      interactive={!!actions}
      tone={tone}
      className={clsx('space-y-6', className)}
      {...glassProps}
    >
      <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/90 to-primary-hover/80 text-white shadow-lg">
              {icon}
            </div>
          )}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white md:text-2xl">{title}</h2>
            {description && <p className="text-sm text-neutral/70 md:text-base">{description}</p>}
          </div>
        </div>
        {actions && <div className="flex flex-shrink-0 items-center gap-3">{actions}</div>}
      </header>

      <div className="space-y-6 text-neutral/80">{children}</div>

      {footer && <footer className="pt-4 border-t border-white/5 text-sm text-neutral/70">{footer}</footer>}
    </GlassCard>
  );
};

export default SectionCard;
