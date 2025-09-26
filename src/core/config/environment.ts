/**
 * Environment configuration and constants
 * Centralized configuration management for different environments
 */

export interface EnvironmentConfig {
  // Application metadata
  APP_NAME: string;
  APP_VERSION: string;
  APP_ENV: 'development' | 'staging' | 'production';
  
  // API configuration
  API_BASE_URL: string;
  API_TIMEOUT: number;
  API_RETRY_ATTEMPTS: number;
  
  // Authentication
  JWT_ACCESS_TOKEN_EXPIRY: number; // in minutes
  JWT_REFRESH_TOKEN_EXPIRY: number; // in days
  SESSION_TIMEOUT: number; // in minutes
  
  // Features flags
  ENABLE_ANALYTICS: boolean;
  ENABLE_ERROR_REPORTING: boolean;
  ENABLE_PERFORMANCE_MONITORING: boolean;
  ENABLE_DEBUG_MODE: boolean;
  
  // File upload
  MAX_FILE_SIZE: number; // in bytes
  ALLOWED_FILE_TYPES: string[];
  
  // External services (optional)
  GOOGLE_ANALYTICS_ID?: string;
  SENTRY_DSN?: string;
  MIXPANEL_PROJECT_TOKEN?: string;
}

// Environment variable getter with type safety
function getEnvVar(key: string, defaultValue?: string): string {
  const value = import.meta.env[`VITE_${key}`];
  if (value === undefined && defaultValue === undefined) {
    throw new Error(`Environment variable VITE_${key} is required but not defined`);
  }
  return value || defaultValue || '';
}

function getEnvVarBoolean(key: string, defaultValue: boolean = false): boolean {
  const value = import.meta.env[`VITE_${key}`];
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === 'true';
}

function getEnvVarNumber(key: string, defaultValue?: number): number {
  const value = import.meta.env[`VITE_${key}`];
  if (value === undefined && defaultValue === undefined) {
    throw new Error(`Environment variable VITE_${key} is required but not defined`);
  }
  const parsed = parseInt(value || String(defaultValue), 10);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable VITE_${key} must be a valid number`);
  }
  return parsed;
}

// Load and validate environment configuration
export const env: EnvironmentConfig = {
  // Application metadata
  APP_NAME: getEnvVar('APP_NAME', 'FitVire Web Admin'),
  APP_VERSION: getEnvVar('APP_VERSION', '1.0.0'),
  APP_ENV: getEnvVar('APP_ENV', 'development') as EnvironmentConfig['APP_ENV'],
  
  // API configuration
  API_BASE_URL: getEnvVar('API_BASE_URL', 'http://localhost:3000/api'),
  API_TIMEOUT: getEnvVarNumber('API_TIMEOUT', 30000),
  API_RETRY_ATTEMPTS: getEnvVarNumber('API_RETRY_ATTEMPTS', 3),
  
  // Authentication
  JWT_ACCESS_TOKEN_EXPIRY: getEnvVarNumber('JWT_ACCESS_TOKEN_EXPIRY', 15),
  JWT_REFRESH_TOKEN_EXPIRY: getEnvVarNumber('JWT_REFRESH_TOKEN_EXPIRY', 7),
  SESSION_TIMEOUT: getEnvVarNumber('SESSION_TIMEOUT', 60),
  
  // Feature flags
  ENABLE_ANALYTICS: getEnvVarBoolean('ENABLE_ANALYTICS', false),
  ENABLE_ERROR_REPORTING: getEnvVarBoolean('ENABLE_ERROR_REPORTING', false),
  ENABLE_PERFORMANCE_MONITORING: getEnvVarBoolean('ENABLE_PERFORMANCE_MONITORING', false),
  ENABLE_DEBUG_MODE: getEnvVarBoolean('ENABLE_DEBUG_MODE', true),
  
  // File upload
  MAX_FILE_SIZE: getEnvVarNumber('MAX_FILE_SIZE', 10 * 1024 * 1024), // 10MB default
  ALLOWED_FILE_TYPES: getEnvVar('ALLOWED_FILE_TYPES', 'image/jpeg,image/png,image/gif,application/pdf').split(','),
  
  // External services (optional)
  GOOGLE_ANALYTICS_ID: getEnvVar('GOOGLE_ANALYTICS_ID', ''),
  SENTRY_DSN: getEnvVar('SENTRY_DSN', ''),
  MIXPANEL_PROJECT_TOKEN: getEnvVar('MIXPANEL_PROJECT_TOKEN', '')
};

// Environment checks
export const isDevelopment = env.APP_ENV === 'development';
export const isStaging = env.APP_ENV === 'staging';
export const isProduction = env.APP_ENV === 'production';

// API endpoints configuration
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    CHANGE_PASSWORD: '/auth/change-password',
    EMAIL_VERIFICATION: '/auth/verify-email',
    RESEND_VERIFICATION: '/auth/resend-verification',
    PROFILE: '/auth/profile',
    SESSION_VALIDATE: '/auth/session/validate'
  },
  
  // User management
  USERS: {
    LIST: '/users',
    CREATE: '/users',
    UPDATE: '/users/:id',
    DELETE: '/users/:id',
    BULK: '/users/bulk',
    SEARCH: '/users/search',
    EXPORT: '/users/export'
  },
  
  // System
  SYSTEM: {
    HEALTH: '/system/health',
    CONFIG: '/system/config',
    LOGS: '/system/logs'
  }
} as const;

// Application constants
export const APP_CONSTANTS = {
  // Pagination
  DEFAULT_PAGE_SIZE: 25,
  MAX_PAGE_SIZE: 100,
  
  // Timeouts
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 5000,
  SESSION_CHECK_INTERVAL: 60000, // 1 minute
  
  // UI
  SIDEBAR_WIDTH: 280,
  HEADER_HEIGHT: 64,
  
  // Validation
  MIN_PASSWORD_LENGTH: 8,
  MAX_FILE_SIZE_MB: env.MAX_FILE_SIZE / (1024 * 1024),
  
  // Date formats
  DATE_FORMAT: 'MMM dd, yyyy',
  DATE_TIME_FORMAT: 'MMM dd, yyyy HH:mm',
  TIME_FORMAT: 'HH:mm'
} as const;

// Storage keys for local/session storage
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'fitvire_admin_auth_token',
  REFRESH_TOKEN: 'fitvire_admin_refresh_token',
  USER_PREFERENCES: 'fitvire_admin_preferences',
  SIDEBAR_STATE: 'fitvire_admin_sidebar_state',
  THEME: 'fitvire_admin_theme',
  LAST_ROUTE: 'fitvire_admin_last_route'
} as const;

// Validate environment configuration on module load
function validateEnvironment() {
  const requiredVars = ['API_BASE_URL'];
  const missing = requiredVars.filter(key => !env[key as keyof EnvironmentConfig]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
  
  // Validate API URL format
  try {
    new URL(env.API_BASE_URL);
  } catch {
    throw new Error('VITE_API_BASE_URL must be a valid URL');
  }
  
  // TODO: Add more environment validation as needed
}

// Run validation in development
if (isDevelopment) {
  validateEnvironment();
}

// TODO: Implement environment-specific logging configuration
// TODO: Add configuration for CDN endpoints
// TODO: Implement feature flag management service integration
// TODO: Add monitoring and analytics configuration
// TODO: Consider adding database connection strings for direct queries