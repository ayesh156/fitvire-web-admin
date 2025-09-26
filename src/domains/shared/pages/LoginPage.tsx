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
import { MailIcon, Chrome } from 'lucide-react';

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

  const handleSocialLogin = async (provider: 'google' | 'microsoft') => {
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
    <div className="min-h-screen flex">
      {/* Left Side - Gradient Background */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300/90 via-pink-400/90 to-purple-500/90">
          {/* Abstract Design Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Decorative Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-2xl rotate-12"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-20 h-20 bg-white/10 rounded-lg rotate-45"></div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-background">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl mb-4">
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-neutral">
                Welcome to FitVire
              </h1>
              <p className="text-gray-600 dark:text-neutral/70">
                FitVire is a fast, simple and secure way to access your admin dashboard. 
                With it, you can manage your fitness platform anytime and anywhere.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-glass-border rounded-lg hover:bg-gray-50 dark:hover:bg-surface/50 transition-colors disabled:opacity-50"
              >
                <Chrome className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700 dark:text-neutral font-medium">Continue with Google</span>
              </button>

              <button
                onClick={() => handleSocialLogin('microsoft')}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-glass-border rounded-lg hover:bg-gray-50 dark:hover:bg-surface/50 transition-colors disabled:opacity-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                  <rect x="13" y="1" width="10" height="10" fill="#00a4ef"/>
                  <rect x="1" y="13" width="10" height="10" fill="#ffb900"/>
                  <rect x="13" y="13" width="10" height="10" fill="#7fbb00"/>
                </svg>
                <span className="text-gray-700 dark:text-neutral font-medium">Continue with Microsoft</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-glass-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-background text-gray-500 dark:text-neutral/60">
                  Or
                </span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit(handleEmailSubmit)} className="space-y-4">
              <div>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-neutral/60" />
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="john.doe@email.com"
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-glass-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-surface text-gray-900 dark:text-neutral placeholder-gray-500 dark:placeholder-neutral/50 disabled:opacity-50 transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || isLoading}
                className="w-full bg-gradient-to-r from-primary to-primary-hover text-white py-3 px-4 rounded-lg font-medium hover:from-primary-hover hover:to-primary transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  'Continue with email'
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-600 dark:text-neutral/70">
                Already have an account?{' '}
                <button 
                  onClick={() => navigate('/auth/verify')}
                  className="text-primary hover:text-primary-hover font-medium"
                >
                  Sign in
                </button>
              </p>
              
              <p className="text-xs text-gray-500 dark:text-neutral/50">
                By signing up, you agree to our{' '}
                <a href="/terms" className="text-primary hover:text-primary-hover underline">
                  Terms of service
                </a>{' '}
                &{' '}
                <a href="/privacy" className="text-primary hover:text-primary-hover underline">
                  Privacy policy
                </a>
              </p>
            </div>

            {/* Development Quick Access */}
            {import.meta.env.DEV && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 p-4 bg-gray-50 dark:bg-surface/50 border border-gray-200 dark:border-glass-border rounded-lg"
              >
                <h3 className="text-sm font-semibold text-gray-700 dark:text-neutral mb-3">
                  Quick Access (Development)
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-3 py-2 text-xs bg-primary text-white rounded hover:bg-primary-hover transition-colors"
                  >
                    SuperAdmin
                  </button>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-3 py-2 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    Admin
                  </button>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-3 py-2 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    Manager
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;