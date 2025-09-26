/**
 * Authentication state management with Zustand
 * Optimized implementation to prevent infinite loops
 */

import { create } from 'zustand';
import type { User, AuthTokens } from '../types/auth';
import { STORAGE_KEYS } from '../../../core/config/environment';

// Simple token storage without methods that could cause loops
const getStoredTokens = (): AuthTokens | null => {
  try {
    const accessToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    
    if (!accessToken || !refreshToken) return null;
    
    return {
      accessToken,
      refreshToken,
      accessTokenExpiry: 0,
      refreshTokenExpiry: 0
    };
  } catch {
    return null;
  }
};

const storeTokens = (tokens: AuthTokens): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, tokens.accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refreshToken);
  } catch (error) {
    console.warn('Token storage failed:', error);
  }
};

const clearStoredTokens = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  } catch (error) {
    console.warn('Token cleanup failed:', error);
  }
};

// Simplified auth state interface
interface AuthState {
  // Core state only
  user: User | null;
  sessionId: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions only
  login: (user: User, tokens: AuthTokens, sessionId: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// Create the auth store with minimal complexity and initialization
export const useAuthStore = create<AuthState>((set, get) => {
  // Initialize from stored tokens
  const storedTokens = getStoredTokens();
  const hasStoredAuth = !!storedTokens;
  
  return {
    // Initial state - check if we have stored tokens
    user: null,
    sessionId: null,
    isAuthenticated: hasStoredAuth,
    isLoading: false,
    error: null,

    // Actions
    login: (user: User, tokens: AuthTokens, sessionId: string) => {
      storeTokens(tokens);
      set({
        user,
        sessionId,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
    },

    logout: () => {
      clearStoredTokens();
      set({
        user: null,
        sessionId: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      });
    },

    setLoading: (loading: boolean) => {
      const currentState = get();
      if (currentState.isLoading !== loading) {
        set({ isLoading: loading });
      }
    },

    setError: (error: string | null) => {
      const currentState = get();
      if (currentState.error !== error) {
        set({ error });
      }
    }
  };
});

// Stable selector hooks to prevent infinite loops
export const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  
  return { user, isAuthenticated, isLoading, error };
};

export const useAuthActions = () => {
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const setLoading = useAuthStore((state) => state.setLoading);
  const setError = useAuthStore((state) => state.setError);
  
  return { login, logout, setLoading, setError };
};

// Simple token access function - memoized
export const useAuthTokens = () => {
  return getStoredTokens();
};

// Auth initialization - call this once at app startup
export const initializeAuth = () => {
  const storedTokens = getStoredTokens();
  if (storedTokens) {
    // If we have stored tokens, we're likely authenticated
    // But we don't restore user data from localStorage for security
    console.log('Found stored auth tokens');
  }
};

// TODO: Implement automatic token refresh logic
// TODO: Add session activity tracking 
// TODO: Implement concurrent session management across tabs