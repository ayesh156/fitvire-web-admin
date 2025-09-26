/**
 * Email Verification Page Component
 * 6-digit verification code entry with email confirmation
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, RefreshCw, CheckCircle } from 'lucide-react';
import { AuthLayout } from '../components/layout/AuthLayout';
import Button from '../components/ui/Button';

interface EmailVerificationPageProps {
  email: string;
  onVerificationSuccess: () => void;
  onBack: () => void;
}

export const EmailVerificationPage: React.FC<EmailVerificationPageProps> = ({
  email,
  onVerificationSuccess,
  onBack
}) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pastedCode = value.slice(0, 6).split('');
      const newCode = [...verificationCode];
      pastedCode.forEach((digit, i) => {
        if (index + i < 6 && /^\d$/.test(digit)) {
          newCode[index + i] = digit;
        }
      });
      setVerificationCode(newCode);
      
      // Focus last filled input or next empty input
      const nextIndex = Math.min(index + pastedCode.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (!/^\d*$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newCode.every(digit => digit !== '') && newCode.join('').length === 6) {
      handleVerification(newCode.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerification = async (code: string) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, accept any 6-digit code
      if (code.length === 6) {
        onVerificationSuccess();
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } catch (error) {
      setError('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset timer
      setTimeLeft(60);
      setCanResend(false);
      
      // Clear current code
      setVerificationCode(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch (error) {
      setError('Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <AuthLayout
      title="Verify Your Email"
      subtitle={`We've sent a 6-digit code to ${email}`}
      showLogo={false}
    >
      <div className="space-y-6">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </button>

        {/* Email display */}
        <div className="flex items-center justify-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <Mail className="h-5 w-5 text-primary-400" />
          <span className="text-neutral text-sm font-medium">{email}</span>
        </div>

        {/* Error message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
          >
            <p className="text-red-400 text-sm">{error}</p>
          </motion.div>
        )}

        {/* Verification code inputs */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-neutral text-center">
            Enter the 6-digit verification code
          </label>
          
          <div className="flex justify-center gap-3">
            {verificationCode.map((digit, index) => (
              <motion.input
                key={index}
                ref={el => { inputRefs.current[index] = el; }}
                type="text"
                maxLength={6}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-bold bg-surface border border-glass-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-neutral"
                disabled={isLoading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Verify button */}
        <Button
          onClick={() => handleVerification(verificationCode.join(''))}
          variant="primary"
          size="lg"
          fullWidth
          disabled={verificationCode.join('').length !== 6 || isLoading}
          loading={isLoading}
          className="flex items-center justify-center gap-2"
        >
          {isLoading ? (
            'Verifying...'
          ) : (
            <>
              <CheckCircle className="h-4 w-4" />
              Verify Code
            </>
          )}
        </Button>

        {/* Resend code */}
        <div className="text-center space-y-3">
          <p className="text-neutral/70 text-sm">
            Didn't receive the code?
          </p>
          
          {canResend ? (
            <Button
              onClick={handleResendCode}
              variant="ghost"
              size="sm"
              disabled={isResending}
              loading={isResending}
              className="flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              {isResending ? 'Sending...' : 'Resend Code'}
            </Button>
          ) : (
            <p className="text-neutral/50 text-sm">
              Resend code in {formatTime(timeLeft)}
            </p>
          )}
        </div>

        {/* Help text */}
        <div className="text-center p-4 bg-surface/30 border border-glass-border rounded-lg">
          <p className="text-xs text-neutral/60">
            Check your spam folder if you don't see the email.
            <br />
            For demo purposes, any 6-digit code will work.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default EmailVerificationPage;