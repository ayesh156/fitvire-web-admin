/**
 * API-related types and interfaces
 * HTTP client configuration and response handling
 */

import type { Permission } from './common';

// HTTP methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// API request configuration
export interface ApiRequestConfig {
  method: HttpMethod;
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
  requiresAuth?: boolean;
  permissions?: Permission[];
  retries?: number;
}

// API response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  errors?: ApiError[];
  meta?: ResponseMeta;
}

// API error structure
export interface ApiError {
  code: string;
  message: string;
  field?: string;
  details?: Record<string, any>;
}

// Response metadata
export interface ResponseMeta {
  timestamp: string;
  requestId: string;
  version: string;
  pagination?: PaginationMeta;
  rateLimit?: RateLimitInfo;
}

// Pagination metadata
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Rate limiting information
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  resetTime: string;
}

// Request interceptor context
export interface RequestInterceptorContext {
  config: ApiRequestConfig;
  user?: any;
  permissions?: Permission[];
}

// Response interceptor context
export interface ResponseInterceptorContext {
  response: any;
  config: ApiRequestConfig;
  duration: number;
}

// HTTP status code ranges
export const HttpStatus = {
  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  
  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  
  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
} as const;

export type HttpStatusCode = typeof HttpStatus[keyof typeof HttpStatus];

// API endpoint definitions
export interface ApiEndpoint {
  path: string;
  method: HttpMethod;
  requiresAuth: boolean;
  permissions?: Permission[];
  rateLimit?: {
    maxRequests: number;
    windowMs: number;
  };
}

// File upload configuration
export interface FileUploadConfig {
  maxSize: number; // in bytes
  allowedTypes: string[];
  maxFiles: number;
  endpoint: string;
}

// Bulk operation request
export interface BulkOperationRequest<T = any> {
  operation: 'create' | 'update' | 'delete';
  items: T[];
  options?: {
    continueOnError?: boolean;
    batchSize?: number;
  };
}

// Bulk operation response
export interface BulkOperationResponse<T = any> {
  successful: T[];
  failed: {
    item: T;
    error: ApiError;
  }[];
  summary: {
    total: number;
    successful: number;
    failed: number;
  };
}

// Search and filter request
export interface SearchRequest {
  query?: string;
  filters?: Record<string, any>;
  sort?: {
    field: string;
    direction: 'asc' | 'desc';
  };
  pagination?: {
    page: number;
    limit: number;
  };
}

// Export request configuration
export interface ExportRequest {
  format: 'csv' | 'xlsx' | 'pdf' | 'json';
  filters?: Record<string, any>;
  fields?: string[];
  options?: {
    includeHeaders?: boolean;
    dateFormat?: string;
    timezone?: string;
  };
}

// WebSocket event types
export interface WebSocketEvent<T = any> {
  type: string;
  data: T;
  timestamp: string;
  source: string;
}

// Real-time subscription request
export interface SubscriptionRequest {
  channel: string;
  events: string[];
  filters?: Record<string, any>;
}

// Health check response
export interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  services: {
    database: ServiceHealth;
    cache: ServiceHealth;
    storage: ServiceHealth;
    queue: ServiceHealth;
  };
  uptime: number;
  version: string;
}

export interface ServiceHealth {
  status: 'up' | 'down' | 'degraded';
  responseTime?: number;
  lastCheck: string;
  message?: string;
}

// API retry configuration
export interface RetryConfig {
  maxRetries: number;
  retryDelay: number;
  retryCondition: (error: any) => boolean;
  onRetry?: (retryCount: number, error: any) => void;
}

// Cache configuration
export interface CacheConfig {
  ttl: number; // Time to live in seconds
  key: string;
  tags?: string[];
  invalidateOn?: string[];
}

// TODO: Implement request/response logging for debugging
// TODO: Add request cancellation support for better UX
// TODO: Implement offline request queuing and sync
// TODO: Add request deduplication to prevent duplicate API calls
// TODO: Implement circuit breaker pattern for API resilience
// TODO: Add request tracing for performance monitoring