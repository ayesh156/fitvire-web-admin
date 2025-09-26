/**
 * Authentication Service
 * Handles authentication operations and API communication
 */

import { apiClient } from '../../../core/api/client';
import { API_ENDPOINTS } from '../../../core/config/environment';
import type {
  LoginRequest,
  LoginResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  User
} from '../types/auth';


class AuthService {
  /**
   * Authenticate user with email and password
   */
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials,
        { skipAuth: true }
      );

      if (!response.success) {
        throw new Error(response.message || 'Login failed');
      }

      return response.data;
    } catch (error) {
      console.error('[AuthService] Login error:', error);
      throw error;
    }
  }

  /**
   * Logout current user and invalidate session
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch (error) {
      // Continue with logout even if API call fails
      console.warn('[AuthService] Logout API call failed:', error);
    }
  }

  /**
   * Refresh authentication tokens
   */
  async refreshTokens(): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const response = await apiClient.post<{ accessToken: string; refreshToken: string }>(
        API_ENDPOINTS.AUTH.REFRESH,
        {},
        { skipAuth: true }
      );

      if (!response.success) {
        throw new Error('Token refresh failed');
      }

      return response.data;
    } catch (error) {
      console.error('[AuthService] Token refresh error:', error);
      throw error;
    }
  }

  /**
   * Request password reset email
   */
  async forgotPassword(request: ForgotPasswordRequest): Promise<void> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
        request,
        { skipAuth: true }
      );

      if (!response.success) {
        throw new Error(response.message || 'Password reset request failed');
      }
    } catch (error) {
      console.error('[AuthService] Forgot password error:', error);
      throw error;
    }
  }

  /**
   * Reset password with token
   */
  async resetPassword(request: ResetPasswordRequest): Promise<void> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.RESET_PASSWORD,
        request,
        { skipAuth: true }
      );

      if (!response.success) {
        throw new Error(response.message || 'Password reset failed');
      }
    } catch (error) {
      console.error('[AuthService] Reset password error:', error);
      throw error;
    }
  }

  /**
   * Change password for authenticated user
   */
  async changePassword(request: ChangePasswordRequest): Promise<void> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.CHANGE_PASSWORD,
        request
      );

      if (!response.success) {
        throw new Error(response.message || 'Password change failed');
      }
    } catch (error) {
      console.error('[AuthService] Change password error:', error);
      throw error;
    }
  }

  /**
   * Get current user profile
   */
  async getProfile(): Promise<User> {
    try {
      const response = await apiClient.get<User>(API_ENDPOINTS.AUTH.PROFILE);

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch user profile');
      }

      return response.data;
    } catch (error) {
      console.error('[AuthService] Get profile error:', error);
      throw error;
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(updates: Partial<User>): Promise<User> {
    try {
      const response = await apiClient.patch<User>(
        API_ENDPOINTS.AUTH.PROFILE,
        updates
      );

      if (!response.success) {
        throw new Error(response.message || 'Profile update failed');
      }

      return response.data;
    } catch (error) {
      console.error('[AuthService] Update profile error:', error);
      throw error;
    }
  }

  /**
   * Validate current session
   */
  async validateSession(): Promise<{ isValid: boolean; user?: User }> {
    try {
      const response = await apiClient.get<{ isValid: boolean; user?: User }>(
        API_ENDPOINTS.AUTH.SESSION_VALIDATE
      );

      if (!response.success) {
        return { isValid: false };
      }

      return response.data;
    } catch (error) {
      console.error('[AuthService] Session validation error:', error);
      return { isValid: false };
    }
  }

  /**
   * Send email verification
   */
  async sendEmailVerification(): Promise<void> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.RESEND_VERIFICATION
      );

      if (!response.success) {
        throw new Error(response.message || 'Failed to send verification email');
      }
    } catch (error) {
      console.error('[AuthService] Send email verification error:', error);
      throw error;
    }
  }

  /**
   * Verify email with token
   */
  async verifyEmail(token: string): Promise<void> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.EMAIL_VERIFICATION,
        { token },
        { skipAuth: true }
      );

      if (!response.success) {
        throw new Error(response.message || 'Email verification failed');
      }
    } catch (error) {
      console.error('[AuthService] Email verification error:', error);
      throw error;
    }
  }

  /**
   * Check if email is available (for registration)
   */
  async checkEmailAvailability(email: string): Promise<boolean> {
    try {
      const response = await apiClient.get<{ available: boolean }>(
        `/auth/check-email?email=${encodeURIComponent(email)}`,
        { skipAuth: true }
      );

      return response.data.available;
    } catch (error) {
      console.error('[AuthService] Email availability check error:', error);
      return false;
    }
  }

  /**
   * Validate password strength
   */
  validatePasswordStrength(password: string): {
    score: number;
    feedback: string[];
    isValid: boolean;
  } {
    const feedback: string[] = [];
    let score = 0;

    // Length check
    if (password.length >= 8) {
      score += 1;
    } else {
      feedback.push('Password must be at least 8 characters long');
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Password must contain at least one uppercase letter');
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Password must contain at least one lowercase letter');
    }

    // Number check
    if (/\d/.test(password)) {
      score += 1;
    } else {
      feedback.push('Password must contain at least one number');
    }

    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Password must contain at least one special character');
    }

    return {
      score,
      feedback,
      isValid: score >= 4
    };
  }

  /**
   * Format auth error for display
   */
  formatAuthError(error: any): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error?.message) {
      return error.message;
    }

    if (error?.code) {
      // Map common error codes to user-friendly messages
      const errorMessages: Record<string, string> = {
        'AUTH_INVALID_CREDENTIALS': 'Invalid email or password',
        'AUTH_ACCOUNT_LOCKED': 'Account is temporarily locked due to too many failed attempts',
        'AUTH_EMAIL_NOT_VERIFIED': 'Please verify your email address before logging in',
        'AUTH_TOKEN_EXPIRED': 'Your session has expired. Please log in again',
        'AUTH_TOKEN_INVALID': 'Invalid authentication token',
        'AUTH_INSUFFICIENT_PERMISSIONS': 'You do not have permission to access this resource',
      };

      return errorMessages[error.code] || 'An authentication error occurred';
    }

    return 'An unexpected error occurred. Please try again.';
  }
}

// Export singleton instance
export const authService = new AuthService();

// TODO: Implement OAuth integration (Google, Microsoft)
// TODO: Add biometric authentication support for future mobile app
// TODO: Implement device trust and remember device functionality
// TODO: Add comprehensive audit logging for security events
// TODO: Implement rate limiting and brute force protection
// TODO: Add multi-factor authentication (TOTP, SMS)
// TODO: Implement session management for concurrent logins