/**
 * Authentication-related types and interfaces
 * JWT token management and user session types
 */

import type { UserRole, Permission, InternalStaffTitle } from './common';

// User authentication data
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  internalStaffTitle?: InternalStaffTitle; // Only for internal staff users
  permissions: Permission[];
  avatar?: string;
  lastLoginAt?: string;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// JWT token structure
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry: number;
  refreshTokenExpiry: number;
}

// Login request payload
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Login response from API
export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
  sessionId: string;
}

// Forgot password request
export interface ForgotPasswordRequest {
  email: string;
}

// Reset password request
export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

// Change password request (authenticated user)
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Two-factor authentication setup
export interface TwoFactorSetupResponse {
  qrCode: string;
  secret: string;
  backupCodes: string[];
}

// Two-factor authentication verification
export interface TwoFactorVerifyRequest {
  code: string;
  token?: string; // For login flow
}

// Authentication session state
export interface AuthSession {
  user: User | null;
  tokens: AuthTokens | null;
  sessionId: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  lastActivity: number;
}

// Authentication error types
export interface AuthError {
  code: string;
  message: string;
  field?: string;
}

// Password strength validation
export interface PasswordStrength {
  score: number; // 0-4
  feedback: string[];
  isValid: boolean;
}

// Session validation response
export interface SessionValidationResponse {
  isValid: boolean;
  user?: User;
  needsRefresh: boolean;
}

// Logout request (for session cleanup)
export interface LogoutRequest {
  sessionId: string;
  allDevices?: boolean;
}

// Account lockout information
export interface AccountLockout {
  isLocked: boolean;
  lockoutUntil?: string;
  failedAttempts: number;
  maxAttempts: number;
}

// Email verification request
export interface EmailVerificationRequest {
  token: string;
}

// Resend email verification
export interface ResendVerificationRequest {
  email: string;
}

// OAuth provider types (future implementation)
export type OAuthProvider = 'google' | 'microsoft' | 'apple';

export interface OAuthLoginRequest {
  provider: OAuthProvider;
  code: string;
  redirectUri: string;
}

// Security events for audit logging
export interface SecurityEvent {
  id: string;
  userId: string;
  event: SecurityEventType;
  ipAddress: string;
  userAgent: string;
  location?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export type SecurityEventType = 
  | 'login_success'
  | 'login_failed' 
  | 'logout'
  | 'password_changed'
  | 'password_reset_requested'
  | 'password_reset_completed'
  | '2fa_enabled'
  | '2fa_disabled'
  | 'account_locked'
  | 'suspicious_activity';

// Role-based permissions check helper types
export interface PermissionCheck {
  resource: string;
  action: string;
  conditions?: Record<string, any>;
}

// TODO: Implement OAuth integration for Google/Microsoft SSO
// TODO: Add biometric authentication types for future mobile admin app
// TODO: Implement session management for concurrent logins
// TODO: Add audit trail types for compliance requirements
// TODO: Consider implementing role-based field-level permissions