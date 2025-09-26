/**
 * FitVire Brand Header Component
 * Enhanced header with prominent FitVire branding
 */

import React from 'react';
import { motion } from 'framer-motion';

interface FitVireBrandHeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}

export const FitVireBrandHeader: React.FC<FitVireBrandHeaderProps> = ({
  title,
  subtitle,
  showLogo = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-8 p-8 glass-card border border-glass-border rounded-3xl overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary to-primary-hover rounded-full blur-3xl animate-gradient-shift" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-primary-hover to-primary rounded-full blur-3xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {showLogo && (
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl shadow-lg shadow-primary/25 animate-glow"
            >
              <span className="text-white text-2xl font-bold font-display">F</span>
            </motion.div>
          )}
          
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-text font-display">{title}</span>
            </h1>
            {subtitle && (
              <p className="text-neutral/70 text-lg font-body">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Brand Elements */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-semibold text-neutral font-display">
              FitVire Platform
            </p>
            <p className="text-xs text-primary font-body">
              Admin Dashboard
            </p>
          </div>
          
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary-hover rounded-full animate-shimmer" />
          
          <div className="text-left">
            <p className="text-xs text-neutral/70 font-body">
              Powered by
            </p>
            <p className="text-sm font-bold gradient-text font-display">
              FitVire
            </p>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-line" />
    </motion.div>
  );
};

export default FitVireBrandHeader;