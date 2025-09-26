/**
 * Ultra Simple Authentication Store - No Infinite Loops
 * Minimal state management with stable selectors
 */

import { create } from 'zustand';

// Minimal auth state
interface SimpleAuthState {
  isLoggedIn: boolean;
  currentUser: string | null;
  currentStep: 'login' | 'verification' | 'dashboard';
  
  // Actions
  setLoginState: (isLoggedIn: boolean, user?: string) => void;
  setCurrentStep: (step: 'login' | 'verification' | 'dashboard') => void;
  reset: () => void;
}

// Create store with stable references
export const useSimpleAuthStore = create<SimpleAuthState>((set) => ({
  isLoggedIn: false,
  currentUser: null,
  currentStep: 'login',

  setLoginState: (isLoggedIn: boolean, user?: string) => {
    set({ isLoggedIn, currentUser: user || null });
  },

  setCurrentStep: (step: 'login' | 'verification' | 'dashboard') => {
    set({ currentStep: step });
  },

  reset: () => {
    set({ isLoggedIn: false, currentUser: null, currentStep: 'login' });
  },
}));

// Stable individual selectors to prevent re-renders
export const useIsLoggedIn = () => useSimpleAuthStore((state) => state.isLoggedIn);
export const useCurrentUser = () => useSimpleAuthStore((state) => state.currentUser);
export const useCurrentStep = () => useSimpleAuthStore((state) => state.currentStep);

// Actions selector
export const useSimpleAuthActions = () => useSimpleAuthStore((state) => ({
  setLoginState: state.setLoginState,
  setCurrentStep: state.setCurrentStep,
  reset: state.reset,
}));