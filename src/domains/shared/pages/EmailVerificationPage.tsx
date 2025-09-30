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
  const codeValue = verificationCode.join('');
  const isCodeComplete = verificationCode.every(digit => digit !== '') && codeValue.length === 6;

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
  } catch {
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
  } catch {
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
      subtitle={`Enter the 6-digit security code we just sent to ${email}`}
      backgroundClassName="bg-[#191919]"
      showBackgroundDecor={false}
      cardClassName="bg-[#1f1f1f]/90 border border-white/10 shadow-2xl shadow-black/50"
    >
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <motion.button
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#191919]/60 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </motion.button>

          {canResend ? (
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}>
              <Button
                onClick={handleResendCode}
                variant="outline"
                size="sm"
                disabled={isResending}
                loading={isResending}
                className="rounded-full border-white/20 bg-transparent text-neutral hover:text-white hover:border-primary/60 hover:bg-primary/10"
              >
                <RefreshCw className="h-4 w-4" />
                {isResending ? 'Sending…' : 'Resend code'}
              </Button>
            </motion.div>
          ) : (
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral/70">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Resend available in {formatTime(timeLeft)}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-inner shadow-black/40"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral/60">
              Verification email
            </span>
            <span className="text-base font-semibold text-white break-all">
              {email}
            </span>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-center"
          >
            <p className="text-sm font-medium text-red-300">{error}</p>
          </motion.div>
        )}

        <div className="space-y-5">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold text-neutral/80">
              Enter your 6-digit verification code
            </p>
            <p className="text-xs text-neutral/60">
              Use the code within 10 minutes to keep your account secure.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {verificationCode.map((digit, index) => (
              <motion.input
                key={index}
                ref={el => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                value={digit}
                onChange={e => handleInputChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                aria-label={`Verification digit ${index + 1}`}
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#252525] text-center text-xl font-semibold text-white shadow-inner shadow-black/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-[#191919] sm:h-16"
                disabled={isLoading}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileFocus={{ scale: 1.05 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.05, duration: 0.35, ease: 'easeOut' }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => handleVerification(codeValue)}
            variant="primary"
            size="lg"
            fullWidth
            disabled={!isCodeComplete || isLoading}
            loading={isLoading}
            className="rounded-xl border-none shadow-lg shadow-primary/30 focus-visible:ring-primary/70"
          >
            {isLoading ? (
              'Verifying…'
            ) : (
              <span className="flex w-full items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Verify code</span>
              </span>
            )}
          </Button>

          <p className="text-center text-xs text-neutral/60">
            Need a different email?{' '}
            <button
              type="button"
              onClick={onBack}
              className="font-semibold text-primary transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#191919]"
            >
              Go back to update it
            </button>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#202020]/70 px-5 py-4 text-sm text-neutral/70"
        >
          <p className="leading-relaxed">
            Can’t find the email? Try searching for <span className="font-semibold text-white">“FitVire verification”</span> or
            check your spam folder. For this demo environment, any six-digit code will confirm your account.
          </p>
        </motion.div>
      </div>
    </AuthLayout>
  );
};

export default EmailVerificationPage;