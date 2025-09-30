/**
 * Forgot Password Page Component
 * Password reset request form for admin users
 */

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MailIcon, ArrowLeftIcon, CheckCircleIcon } from 'lucide-react';
import { useForgotPassword } from '../hooks/useAuth';
import { AuthLayout } from '../components/layout/AuthLayout';
import Button from '../components/ui/Button';
import { Input } from '../components/ui/Input';

// Forgot password form validation schema
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordPage: React.FC = () => {
  const { forgotPassword, isLoading, error, isSuccess, reset } = useForgotPassword();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      email: ''
    }
  });

  // Clear error when email changes
  const email = watch('email');
  useEffect(() => {
    if (error) {
      reset();
    }
  }, [email, error, reset]);

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await forgotPassword({ email: data.email });
    } catch (error) {
      // Error is handled by the hook
      console.error('Forgot password failed:', error);
    }
  };

  const handleBackToLogin = () => {
    // TODO: Navigate back to login page
    console.log('Navigate back to login');
  };

  const handleResendEmail = () => {
    // TODO: Implement resend functionality
    console.log('Resend email');
  };

  if (isSuccess) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="We've sent password reset instructions to your email"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/30"
          >
            <CheckCircleIcon className="h-10 w-10 text-primary" />
          </motion.div>

          {/* Success Message */}
          <div className="space-y-3">
            <p className="text-white text-base font-medium">
              If an admin account with that email address exists, we've sent you a password reset link.
            </p>
            <p className="text-neutral/80 text-sm leading-relaxed">
              Please check your email and follow the instructions to reset your password.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                variant="primary"
                fullWidth
                size="lg"
                onClick={handleBackToLogin}
                className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg hover:shadow-primary/25"
              >
                Back to Sign In
              </Button>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleResendEmail}
              className="text-sm text-primary hover:text-primary-hover transition-colors duration-300 font-medium"
            >
              Didn't receive the email? Resend
            </motion.button>
          </div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 p-4 bg-surface/30 backdrop-blur-sm border border-glass-border rounded-xl"
          >
            <p className="text-xs text-neutral/80 text-center leading-relaxed">
              If you continue to have trouble accessing your account, please contact the system administrator.
            </p>
          </motion.div>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email address and we'll send you reset instructions"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl"
          >
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </motion.div>
        )}

        {/* Email Field */}
        <div>
          <Input
            {...register('email')}
            type="email"
            label="Email Address"
            placeholder="Enter your admin email address"
            leftIcon={<MailIcon className="h-4 w-4" />}
            error={errors.email?.message}
            disabled={isLoading}
            autoComplete="email"
            autoFocus
          />
        </div>

        {/* Submit Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={!isValid || isLoading}
            loading={isLoading}
            className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg hover:shadow-primary/25 py-4 text-lg font-semibold"
          >
            {isLoading ? 'Sending...' : 'Send Reset Instructions'}
          </Button>
        </motion.div>

        {/* Back to Login */}
        <div className="text-center">
          <motion.button
            whileHover={{ x: -2 }}
            type="button"
            onClick={handleBackToLogin}
            className="inline-flex items-center gap-2 text-sm text-neutral/70 hover:text-white transition-all duration-300 font-medium"
            disabled={isLoading}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Sign In
          </motion.button>
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 p-4 bg-surface/30 backdrop-blur-sm border border-glass-border rounded-xl"
        >
          <p className="text-xs text-neutral/80 text-center leading-relaxed">
            For security reasons, password reset is only available for verified admin accounts.
            <br />The reset link will expire in 1 hour.
          </p>
        </motion.div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;