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
          <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <p className="text-neutral text-sm">
              If an admin account with that email address exists, we've sent you a password reset link.
            </p>
            <p className="text-neutral/70 text-xs">
              Please check your email and follow the instructions to reset your password.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="primary"
              fullWidth
              onClick={handleBackToLogin}
            >
              Back to Sign In
            </Button>
            
            <button
              onClick={handleResendEmail}
              className="text-sm text-primary-500 hover:text-primary-400 transition-colors"
            >
              Didn't receive the email? Resend
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-primary-500/5 border border-primary-500/20 rounded-lg">
            <p className="text-xs text-neutral/70 text-center">
              If you continue to have trouble accessing your account, please contact the system administrator.
            </p>
          </div>
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
            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <p className="text-red-500 text-sm">{error}</p>
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
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isValid || isLoading}
          loading={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Reset Instructions'}
        </Button>

        {/* Back to Login */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleBackToLogin}
            className="inline-flex items-center gap-2 text-sm text-neutral/70 hover:text-primary-500 transition-colors"
            disabled={isLoading}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Sign In
          </button>
        </div>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-surface/50 border border-glass-border rounded-lg">
          <p className="text-xs text-neutral/70 text-center">
            For security reasons, password reset is only available for verified admin accounts.
            The reset link will expire in 1 hour.
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;