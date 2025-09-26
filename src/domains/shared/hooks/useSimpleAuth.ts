/**
 * Simple Authentication Hooks (Fixed Version)
 * Simplified hooks to prevent infinite loops
 */

import { useState, useCallback } from 'react';
import { useAuthStore } from '../stores/authStore';
import type { LoginRequest } from '../types/auth';

/**
 * Simple login hook without complex effects
 */
export const useSimpleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual API call
      console.log('Login attempt:', credentials);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful response
      const mockUser = {
        id: '1',
        email: credentials.email,
        firstName: 'Admin',
        lastName: 'User',
        role: 'superadmin' as const,
        internalStaffTitle: undefined,
        permissions: [],
        emailVerified: true,
        isActive: true,
        lastLoginAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const mockTokens = {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        accessTokenExpiry: Date.now() + (15 * 60 * 1000),
        refreshTokenExpiry: Date.now() + (7 * 24 * 60 * 60 * 1000)
      };

      // Update auth store
      const authStore = useAuthStore.getState();
      authStore.login(mockUser, mockTokens, 'mock-session-id');
      
      return { user: mockUser, tokens: mockTokens, sessionId: 'mock-session-id' };
    } catch (err) {
      const errorMessage = 'Login failed. Please check your credentials.';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    login,
    isLoading,
    error,
    clearError
  };
};

/**
 * Simple auth status hook
 */
export const useSimpleAuthStatus = () => {
  const authState = useAuthStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading
  }));

  return {
    ...authState,
    isInitialized: true, // Always initialized for simplicity
    hasUser: !!authState.user,
    userRole: authState.user?.role,
    userPermissions: authState.user?.permissions || []
  };
};

/**
 * Simple permissions hook
 */
export const useSimplePermissions = () => {
  const user = useAuthStore((state) => state.user);

  const isSuperAdmin = useCallback((): boolean => {
    return user?.role === 'superadmin';
  }, [user]);

  const isInternalStaff = useCallback((): boolean => {
    return user?.role === 'internal_staff';
  }, [user]);

  const getInternalStaffTitle = useCallback((): string | null => {
    if (user?.role === 'superadmin') return 'SuperAdmin';
    if (user?.role === 'internal_staff') return user.internalStaffTitle || 'Internal Staff';
    return null;
  }, [user]);

  const hasPermission = useCallback((permission: any): boolean => {
    if (!user) return false;
    if (user.role === 'superadmin') return true;
    return user.permissions?.includes(permission) || false;
  }, [user]);

  return {
    isSuperAdmin,
    isInternalStaff,
    getInternalStaffTitle,
    hasPermission,
    userRole: user?.role,
    userPermissions: user?.permissions || []
  };
};

export default {
  useSimpleLogin,
  useSimpleAuthStatus,
  useSimplePermissions
};