/**
 * Authentication Hooks
 * Custom hooks for authentication state and operations
 */

import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore, useAuthActions } from '../stores/authStore';
import { authService } from '../services/authService';
import type { LoginRequest, ForgotPasswordRequest, ResetPasswordRequest } from '../types/auth';
import { Permission, type UserRole } from '../types/common';

/**
 * Hook for login functionality
 */
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: setAuthState } = useAuthActions();
  const navigate = useNavigate();
  const location = useLocation();

  const login = useCallback(async (credentials: LoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(credentials);
      
      // Update auth store
      setAuthState(response.user, response.tokens, response.sessionId);
      
      // Navigate to dashboard or intended destination
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
      
      return response;
    } catch (err) {
      const errorMessage = authService.formatAuthError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [setAuthState, navigate, location]);

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
 * Hook for logout functionality
 */
export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logout: clearAuthState } = useAuthActions();
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    setIsLoading(true);

    try {
      await authService.logout();
    } catch (error) {
      console.warn('Logout API call failed:', error);
    } finally {
      // Always clear local state regardless of API success
      clearAuthState();
      navigate('/login', { replace: true });
      setIsLoading(false);
    }
  }, [clearAuthState, navigate]);

  return {
    logout,
    isLoading
  };
};

/**
 * Hook for forgot password functionality
 */
export const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const forgotPassword = useCallback(async (request: ForgotPasswordRequest) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await authService.forgotPassword(request);
      setIsSuccess(true);
    } catch (err) {
      const errorMessage = authService.formatAuthError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setError(null);
    setIsSuccess(false);
  }, []);

  return {
    forgotPassword,
    isLoading,
    error,
    isSuccess,
    reset
  };
};

/**
 * Hook for reset password functionality
 */
export const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetPassword = useCallback(async (request: ResetPasswordRequest) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await authService.resetPassword(request);
      setIsSuccess(true);
    } catch (err) {
      const errorMessage = authService.formatAuthError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    resetPassword,
    isLoading,
    error,
    isSuccess,
    clearError
  };
};

/**
 * Hook for session validation and auto-refresh
 */
export const useSessionManager = () => {
  const { isAuthenticated } = useAuthStore();
  const { logout } = useAuthActions();
  const [isValidating, setIsValidating] = useState(false);

  // Validate session on mount and periodically
  useEffect(() => {
    if (!isAuthenticated) return;

    const validateSession = async () => {
      setIsValidating(true);
      
      try {
        const result = await authService.validateSession();
        
        if (!result.isValid) {
          logout();
        }
      } catch (error) {
        console.error('Session validation failed:', error);
        logout();
      } finally {
        setIsValidating(false);
      }
    };

    // Initial validation
    validateSession();

    // Set up periodic validation (every 5 minutes)
    const interval = setInterval(validateSession, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated, logout]);

  return {
    isValidating
  };
};

/**
 * Hook for password strength validation
 */
export const usePasswordStrength = (password: string) => {
  const [strength, setStrength] = useState({
    score: 0,
    feedback: [] as string[],
    isValid: false
  });

  useEffect(() => {
    if (!password) {
      setStrength({ score: 0, feedback: [], isValid: false });
      return;
    }

    const result = authService.validatePasswordStrength(password);
    setStrength(result);
  }, [password]);

  return strength;
};

/**
 * Hook for email availability checking
 */
export const useEmailAvailability = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const checkAvailability = useCallback(async (email: string) => {
    if (!email) {
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);
    
    try {
      const available = await authService.checkEmailAvailability(email);
      setIsAvailable(available);
    } catch (error) {
      console.error('Email availability check failed:', error);
      setIsAvailable(null);
    } finally {
      setIsChecking(false);
    }
  }, []);

  const reset = useCallback(() => {
    setIsAvailable(null);
  }, []);

  return {
    checkAvailability,
    isChecking,
    isAvailable,
    reset
  };
};

/**
 * Hook for authentication status with loading states
 */
export const useAuthStatus = () => {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Mark as initialized after first render
    setIsInitialized(true);
  }, []);

  return {
    user,
    isAuthenticated,
    isLoading,
    isInitialized,
    hasUser: !!user,
    userRole: user?.role,
    userPermissions: user?.permissions || []
  };
};

/**
 * Hook for permission checking
 */
export const usePermissions = () => {
  const { user } = useAuthStore();

  const hasPermission = useCallback((permission: Permission): boolean => {
    if (!user) return false;
    
    // SuperAdmin has all permissions
    if (user.role === 'superadmin') return true;
    
    // Internal staff users need explicit permissions
    if (!user.permissions) return false;
    return user.permissions.includes(permission);
  }, [user]);

  const hasAnyPermission = useCallback((permissions: Permission[]): boolean => {
    if (!user) return false;
    
    // SuperAdmin has all permissions
    if (user.role === 'superadmin') return true;
    
    // Internal staff users need explicit permissions
    if (!user.permissions) return false;
    return permissions.some(permission => user.permissions.includes(permission));
  }, [user]);

  const hasAllPermissions = useCallback((permissions: Permission[]): boolean => {
    if (!user) return false;
    
    // SuperAdmin has all permissions
    if (user.role === 'superadmin') return true;
    
    // Internal staff users need explicit permissions
    if (!user.permissions) return false;
    return permissions.every(permission => user.permissions.includes(permission));
  }, [user]);

  const hasRole = useCallback((role: UserRole): boolean => {
    return user?.role === role;
  }, [user]);

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

  return {
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    hasRole,
    isSuperAdmin,
    isInternalStaff,
    getInternalStaffTitle,
    userRole: user?.role,
    userInternalStaffTitle: user?.internalStaffTitle,
    userPermissions: user?.permissions || []
  };
};

/**
 * Hook for test login functionality (development only)
 */
export const useTestLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: setAuthState } = useAuthActions();
  const navigate = useNavigate();

  const testLogin = useCallback(async (userType: 'superadmin' | 'admin' | 'manager' = 'superadmin') => {
    setIsLoading(true);
    setError(null);

    try {
      // Create mock user data for testing
      const mockUsers = {
        superadmin: {
          id: 'test-superadmin-id',
          email: 'superadmin@fitvire.com',
          firstName: 'Test',
          lastName: 'SuperAdmin',
          role: 'superadmin' as const,
          permissions: [Permission.MANAGE_SYSTEM, Permission.MANAGE_USERS, Permission.MANAGE_PARTNERS, Permission.VIEW_ANALYTICS],
          isActive: true,
          emailVerified: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        admin: {
          id: 'test-admin-id',
          email: 'admin@fitvire.com',
          firstName: 'Test',
          lastName: 'Admin',
          role: 'internal_staff' as const,
          internalStaffTitle: 'Admin' as const,
          permissions: [Permission.MANAGE_USERS, Permission.MANAGE_PARTNERS, Permission.VIEW_ANALYTICS],
          isActive: true,
          emailVerified: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        manager: {
          id: 'test-manager-id',
          email: 'manager@fitvire.com',
          firstName: 'Test',
          lastName: 'Manager',
          role: 'internal_staff' as const,
          internalStaffTitle: 'Manager' as const,
          permissions: [Permission.VIEW_ANALYTICS, Permission.VIEW_REPORTS],
          isActive: true,
          emailVerified: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      };

      const mockTokens = {
        accessToken: 'mock-access-token-' + Date.now(),
        refreshToken: 'mock-refresh-token-' + Date.now(),
        accessTokenExpiry: Date.now() + (60 * 60 * 1000), // 1 hour
        refreshTokenExpiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      };

      const mockSessionId = 'mock-session-' + Date.now();
      
      // Update auth store with mock data
      setAuthState(mockUsers[userType], mockTokens, mockSessionId);
      
      // Navigate to dashboard
      navigate('/dashboard', { replace: true });
      
      return {
        user: mockUsers[userType],
        tokens: mockTokens,
        sessionId: mockSessionId
      };
    } catch (err) {
      const errorMessage = 'Test login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [setAuthState, navigate]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    testLogin,
    isLoading,
    error,
    clearError
  };
};

// TODO: Implement useAuthRedirect hook for navigation after auth
// TODO: Add useAuthError hook for centralized error handling
// TODO: Create useAuthForm hook for form validation and submission
// TODO: Implement useDeviceManagement hook for trusted devices
// TODO: Add useTwoFactor hook for 2FA management
// TODO: Create useSecurityEvents hook for audit trail viewing