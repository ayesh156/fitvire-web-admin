/**
 * Authentication Layout Component
 * Layout wrapper for login, signup, and password reset pages
 */

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import GlassCard from '../ui/GlassCard';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  backgroundClassName?: string;
  showBackgroundDecor?: boolean;
  cardClassName?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  showLogo = true,
  backgroundClassName,
  showBackgroundDecor = true,
  cardClassName
}) => {
  const containerClasses = clsx(
    'h-[100dvh] min-h-[100dvh] w-full flex items-center justify-center p-4 relative overflow-hidden overflow-y-auto',
    backgroundClassName ?? 'bg-background'
  );

  return (
    <div className={containerClasses}>
      {/* Background gradient effects */}
      {showBackgroundDecor && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
        </>
      )}
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo and branding */}
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-2xl mb-6 shadow-lg shadow-primary/25 animate-glow">
              <span className="text-white text-3xl font-bold font-display">F</span>
            </div>
            <h1 className="text-3xl font-bold text-neutral font-display gradient-text mb-2">
              FitVire Admin
            </h1>
            <p className="text-neutral/70 text-base font-body">
              Platform Management Dashboard
            </p>
          </motion.div>
        )}

        {/* Auth form card */}
        <GlassCard className={clsx('relative', cardClassName)}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-bold text-neutral mb-2 font-display">
              {title}
            </h2>
            {subtitle && (
              <p className="text-neutral/70 text-sm font-body">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Form content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {children}
          </motion.div>
        </GlassCard>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-6"
        >
          <p className="text-neutral/50 text-xs">
            © 2025 FitVire. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;