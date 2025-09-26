/**
 * Test setup configuration
 * Global test utilities and mocks
 */

import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Mock environment variables
vi.mock('../core/config/environment', () => ({
  env: {
    APP_NAME: 'FitVire Web Admin',
    APP_VERSION: '1.0.0',
    APP_ENV: 'development',
    API_BASE_URL: 'http://localhost:3000/api',
    API_TIMEOUT: 30000,
    API_RETRY_ATTEMPTS: 3,
    JWT_ACCESS_TOKEN_EXPIRY: 15,
    JWT_REFRESH_TOKEN_EXPIRY: 7,
    SESSION_TIMEOUT: 60,
    ENABLE_ANALYTICS: false,
    ENABLE_ERROR_REPORTING: false,
    ENABLE_PERFORMANCE_MONITORING: false,
    ENABLE_DEBUG_MODE: true,
    MAX_FILE_SIZE: 10 * 1024 * 1024,
    ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'application/pdf']
  },
  isDevelopment: true,
  isStaging: false,
  isProduction: false
}));

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock sessionStorage
const sessionStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

// Mock fetch
globalThis.fetch = vi.fn();

// Mock ResizeObserver
globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
globalThis.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});