/**
 * Reset Password Page Component
 * Password reset form with token validation
 */

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { LockIcon, CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
import { useResetPassword, usePasswordStrength } from '../hooks/useAuth';
import { AuthLayout } from '../components/layout/AuthLayout';
import Button from '../components/ui/Button';
import { Input } from '../components/ui/Input';

// Reset password form validation schema
const resetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  confirmPassword: z.string().min(1, 'Please confirm your password')
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

interface ResetPasswordPageProps {
  token?: string; // TODO: Get from URL params
}

export const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ 
  token = 'demo-token' // TODO: Remove demo token
}) => {
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const { resetPassword, isLoading, error, isSuccess, clearError } = useResetPassword();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      newPassword: '',
      confirmPassword: ''
    }
  });

  const newPassword = watch('newPassword');
  const passwordStrength = usePasswordStrength(newPassword);

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setTokenValid(false);
        return;
      }

      try {
        // TODO: Implement token validation API call
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        setTokenValid(true);
      } catch (error) {
        setTokenValid(false);
      }
    };

    validateToken();
  }, [token]);

  // Clear error when form changes
  const watchedFields = watch();
  useEffect(() => {
    if (error) {
      clearError();
    }
  }, [watchedFields, error, clearError]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      await resetPassword({
        token,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword
      });
    } catch (error) {
      // Error is handled by the hook
      console.error('Password reset failed:', error);
    }
  };

  const handleBackToLogin = () => {
    // TODO: Navigate back to login page
    console.log('Navigate back to login');
  };

  // Loading state while validating token
  if (tokenValid === null) {
    return (
      <AuthLayout
        title="Validating Reset Link"
        subtitle="Please wait while we verify your reset token"
      >
        <div className="text-center py-8">
          <div className="animate-spin mx-auto w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full mb-4" />
          <p className="text-neutral/70 text-sm">Validating your reset link...</p>
        </div>
      </AuthLayout>
    );
  }

  // Invalid token state
  if (!tokenValid) {
    return (
      <AuthLayout
        title="Invalid Reset Link"
        subtitle="This password reset link is invalid or has expired"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-20 h-20 bg-red-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-red-500/30"
          >
            <AlertTriangleIcon className="h-10 w-10 text-red-400" />
          </motion.div>

          {/* Error Message */}
          <div className="space-y-3">
            <p className="text-white text-base font-medium">
              The password reset link you clicked is either invalid or has expired.
            </p>
            <p className="text-neutral/80 text-sm leading-relaxed">
              Password reset links are valid for 1 hour from the time they are sent.
            </p>
          </div>

          {/* Action Button */}
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

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 p-4 bg-surface/30 backdrop-blur-sm border border-glass-border rounded-xl"
          >
            <p className="text-xs text-neutral/80 text-center leading-relaxed">
              If you need to reset your password, please request a new reset link from the sign-in page.
            </p>
          </motion.div>
        </motion.div>
      </AuthLayout>
    );
  }

  // Success state
  if (isSuccess) {
    return (
      <AuthLayout
        title="Password Reset Successful"
        subtitle="Your password has been successfully updated"
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
              Your password has been successfully reset. You can now sign in with your new password.
            </p>
          </div>

          {/* Action Button */}
          <Button
            variant="primary"
            fullWidth
            onClick={handleBackToLogin}
          >
            Continue to Sign In
          </Button>
        </motion.div>
      </AuthLayout>
    );
  }

  // Reset password form
  return (
    <AuthLayout
      title="Set New Password"
      subtitle="Enter your new password below"
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

        {/* New Password Field */}
        <div>
          <Input
            {...register('newPassword')}
            type="password"
            label="New Password"
            placeholder="Enter your new password"
            leftIcon={<LockIcon className="h-4 w-4" />}
            showPasswordToggle
            error={errors.newPassword?.message}
            disabled={isLoading}
            autoComplete="new-password"
            autoFocus
          />
          
          {/* Password Strength Indicator */}
          {newPassword && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 bg-surface rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      passwordStrength.score <= 1 ? 'bg-red-500 w-1/4' :
                      passwordStrength.score <= 2 ? 'bg-yellow-500 w-2/4' :
                      passwordStrength.score <= 3 ? 'bg-blue-500 w-3/4' :
                      'bg-green-500 w-full'
                    }`}
                  />
                </div>
                <span className={`text-xs font-medium ${
                  passwordStrength.score <= 1 ? 'text-red-500' :
                  passwordStrength.score <= 2 ? 'text-yellow-500' :
                  passwordStrength.score <= 3 ? 'text-blue-500' :
                  'text-green-500'
                }`}>
                  {passwordStrength.score <= 1 ? 'Weak' :
                   passwordStrength.score <= 2 ? 'Fair' :
                   passwordStrength.score <= 3 ? 'Good' :
                   'Strong'}
                </span>
              </div>
              
              {passwordStrength.feedback.length > 0 && (
                <ul className="text-xs text-neutral/70 space-y-1">
                  {passwordStrength.feedback.map((feedback, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neutral/50 rounded-full" />
                      {feedback}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <Input
            {...register('confirmPassword')}
            type="password"
            label="Confirm New Password"
            placeholder="Confirm your new password"
            leftIcon={<LockIcon className="h-4 w-4" />}
            showPasswordToggle
            error={errors.confirmPassword?.message}
            disabled={isLoading}
            autoComplete="new-password"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isValid || isLoading || !passwordStrength.isValid}
          loading={isLoading}
        >
          {isLoading ? 'Updating Password...' : 'Update Password'}
        </Button>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-surface/50 border border-glass-border rounded-lg">
          <p className="text-xs text-neutral/70 text-center">
            After updating your password, you'll be automatically signed out of all devices and need to sign in again.
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;