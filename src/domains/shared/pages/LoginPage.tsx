/**
 * Modern Login Page Component - Matching Provided Design
 * Clean authentication interface with social login and email flow
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MailIcon, Chrome, Apple } from 'lucide-react';

// Login form validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: ''
    }
  });

  const handleEmailSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store email for verification page and navigate
    localStorage.setItem('pendingEmail', data.email);
    navigate('/auth/verify');
    
    setIsLoading(false);
  };

  const handleSocialLogin = async (provider: 'google' | 'apple') => {
    setIsLoading(true);
    
    // Simulate social login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store provider info for future use
    localStorage.setItem('authProvider', provider);
    
    // Navigate directly to dashboard for social login
    navigate('/dashboard');
    
    setIsLoading(false);
  };

  return (
    <div className="relative h-[100dvh] min-h-[100dvh] overflow-hidden overflow-y-auto bg-[#191919] text-neutral">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px)`
          }}
        />
      </div>
      <div className="relative grid h-full min-h-[100dvh] grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        {/* Left visual panel */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden overflow-hidden lg:flex"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#202020] via-[#121212] to-[#090909]" />

          <div className="absolute inset-0 opacity-70">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 10% 20%, rgba(240, 68, 68, 0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255,107,74,0.35), transparent 40%), radial-gradient(circle at 50% 70%, rgba(240,68,68,0.4), transparent 45%)`
              }}
            />
          </div>

          {/* Hero Illustration */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ rotate: -8, opacity: 0 }}
              animate={{ rotate: -2, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute -left-16 bottom-12 h-[540px] w-[540px] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-[40px]"
            >
              <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-black/50 p-8">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-neutral/60">Active Members</p>
                      <p className="mt-2 text-4xl font-bold text-white">48,920</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary">+18.6%</span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 rounded-2xl bg-gradient-to-r from-primary/40 via-primary-hover/20 to-white/0 p-4">
                      <div className="flex items-center justify-between text-sm text-neutral/70">
                        <span>Weekly Sessions</span>
                        <span>+126%</span>
                      </div>
                      <div className="mt-4 grid grid-cols-12 gap-1">
                        {[...Array(12)].map((_, index) => (
                          <motion.span
                            key={index}
                            animate={{ height: [12, 32, 20, 38, 18][index % 5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.1, repeatType: 'mirror' }}
                            className="block h-24 rounded-full bg-white/20"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.06] px-4 py-3 text-sm">
                      <span className="text-neutral/60">Scheduled PT Sessions</span>
                      <span className="font-semibold text-white">1,284</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.06] px-4 py-3 text-sm">
                      <span className="text-neutral/60">Partner Earnings</span>
                      <span className="font-semibold text-primary">$212,450</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-12 top-10 h-16 w-16 rounded-full border border-white/15 bg-white/5"
              animate={{ y: [0, -14, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1.2 }}
            />
            <motion.div
              className="absolute right-12 top-12 h-32 w-32 rounded-full border border-white/15 bg-white/5"
              animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative z-10 flex flex-col justify-between gap-16 p-16 text-white">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-neutral/70">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                FitVire Intelligence Hub
              </div>
              <div>
                <h1 className="text-5xl font-semibold leading-tight tracking-tight">
                  Insightful control for every fitness experience
                </h1>
                <p className="mt-6 max-w-md text-lg text-neutral/70">
                  Monitor performance, track community growth, and orchestrate partners in one cohesive, data-rich dashboard.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral/70">
              <div>
                <p className="text-3xl font-semibold text-white">97%</p>
                <p className="mt-1">Avg. partner satisfaction</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <p className="text-3xl font-semibold text-white">42+</p>
                <p className="mt-1">Countries onboarded</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.08] px-6 py-5"
            >
              <div>
                <p className="text-sm text-neutral/60">Live coaching sessions</p>
                <p className="text-2xl font-semibold text-white">312 currently active</p>
              </div>
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-medium text-white"
                  >
                    {['AI', 'KP', 'SW', '+'][index]}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Right authentication panel */}
        <section className="relative flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 0 0, rgba(255,255,255,0.2), transparent 45%)` }} />
          <motion.div
            className="absolute -right-10 top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral/60">
                FitVire Admin
              </div>
              <div>
                <h2 className="text-4xl font-semibold text-white">Sign in to the command center</h2>
                <p className="mt-3 text-sm text-neutral/60">
                  Access live insights, orchestrate partners, and monitor customer journeys in a cinematic, low-light workspace crafted for focus.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.12] disabled:opacity-60"
              >
                <Chrome className="h-5 w-5 text-primary" />
                Continue with Google
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialLogin('apple')}
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.12] disabled:opacity-60"
              >
                <Apple className="h-5 w-5" />
                Continue with Apple
              </motion.button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-[0.4em] text-neutral/50">
                <span className="bg-[#191919] px-4">or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit(handleEmailSubmit)} className="space-y-6">
              <div className="space-y-2">
                <div className="relative group">
                  <MailIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral/60 transition-colors duration-300 group-focus-within:text-primary" />
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="admin@fitvire.com"
                    disabled={isLoading}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-12 py-4 text-base text-white placeholder:text-neutral/50 transition-all duration-300 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-error-400"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!isValid || isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-hover px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  'Continue with Email'
                )}
              </motion.button>
            </form>

            <div className="space-y-4 text-sm text-neutral/60">
              <p>
                Need help with access?{' '}
                <button
                  onClick={() => navigate('/auth/verify')}
                  className="font-medium text-primary transition-colors duration-300 hover:text-primary-hover"
                >
                  Contact Support
                </button>
              </p>
              <p className="text-xs leading-relaxed">
                By accessing the admin dashboard, you agree to FitVire's{' '}
                <a href="/terms" className="mx-1 text-primary transition-colors duration-300 hover:text-primary-hover">
                  Terms of Service
                </a>
                and
                <a href="/privacy" className="ml-1 text-primary transition-colors duration-300 hover:text-primary-hover">
                  Privacy Policy
                </a>
              </p>
            </div>

            {import.meta.env.DEV && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-6"
              >
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Development Quick Access
                </h3>
                <div className="grid grid-cols-3 gap-3 text-xs font-medium">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/dashboard')}
                    className="rounded-xl bg-gradient-to-r from-primary to-primary-hover px-4 py-3 text-white shadow-primary/30 transition-all hover:shadow-lg"
                  >
                    SuperAdmin
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/dashboard')}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-neutral transition-all hover:border-white/25 hover:bg-white/[0.12]"
                  >
                    Admin
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/dashboard')}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-neutral transition-all hover:border-white/25 hover:bg-white/[0.12]"
                  >
                    Manager
                  </motion.button>
                </div>
                <p className="mt-3 text-center text-xs text-neutral/50">TODO: Remove in production build</p>
              </motion.div>
            )}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;