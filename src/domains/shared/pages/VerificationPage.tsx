/**
 * Email Verification Page Wrapper
 * Handles email verification flow with routing integration
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailVerificationPage from './EmailVerificationPage';

export const VerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@fitvire.com');

  useEffect(() => {
    // Get email from localStorage (set by login page) or use demo email
    const pendingEmail = localStorage.getItem('pendingEmail');
    if (pendingEmail) {
      setEmail(pendingEmail);
    }
  }, []);

  const handleVerificationSuccess = () => {
    // Clear pending email and navigate to dashboard
    localStorage.removeItem('pendingEmail');
    navigate('/dashboard');
  };

  const handleBack = () => {
    // Clear pending email and go back to login
    localStorage.removeItem('pendingEmail');
    navigate('/login');
  };

  return (
    <EmailVerificationPage
      email={email}
      onVerificationSuccess={handleVerificationSuccess}
      onBack={handleBack}
    />
  );
};

export default VerificationPage;