import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

export interface QuickActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent?: 'primary' | 'emerald' | 'orange' | 'violet';
  onClick?: () => void;
  href?: string;
}

const accentClasses: Record<NonNullable<QuickActionCardProps['accent']>, string> = {
  primary: 'from-primary-500 to-primary-hover',
  emerald: 'from-emerald-500 to-teal-500',
  orange: 'from-orange-500 to-amber-500',
  violet: 'from-purple-500 to-indigo-500'
};

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  title,
  description,
  icon,
  accent = 'primary',
  onClick,
  href
}) => {
  const content = (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-6 text-left shadow-[0_14px_40px_rgba(0,0,0,0.25)] transition-all duration-300 backdrop-blur-xl hover:border-white/18',
        'hover:shadow-[0_20px_60px_rgba(240,68,68,0.18)]'
      )}
    >
      <div className={clsx('absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100', accentClasses[accent])} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_rgba(0,0,0,0)_70%)]" />

      <div className="relative z-10 flex h-full flex-col gap-4 text-neutral">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white shadow-[0_10px_24px_rgba(240,68,68,0.25)]">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-neutral/70 leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-white">
          <span>Open</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        {content}
      </a>
    );
  }

  return <div onClick={onClick}>{content}</div>;
};

export default QuickActionCard;
