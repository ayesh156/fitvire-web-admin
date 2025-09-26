/**
 * Common types and interfaces shared across all domains
 * Following FitVire Web Admin architecture patterns
 */

// Common API response structure
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
  pagination?: PaginationMeta;
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

// Common loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// User roles in FitVire ecosystem
export const UserRole = {
  SUPERADMIN: 'superadmin',
  INTERNAL_STAFF: 'internal_staff'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

// Internal staff titles for custom access control
export const InternalStaffTitle = {
  ADMIN: 'Admin',
  MANAGER: 'Manager',
  ANALYST: 'Analyst',
  SUPPORT: 'Support',
  MODERATOR: 'Moderator',
  VIEWER: 'Viewer'
} as const;

export type InternalStaffTitle = typeof InternalStaffTitle[keyof typeof InternalStaffTitle];

// User permissions for granular access control
export const Permission = {
  // Management permissions
  MANAGE_USERS: 'manage_users',
  MANAGE_PARTNERS: 'manage_partners',
  MANAGE_CUSTOMERS: 'manage_customers',
  MANAGE_SYSTEM: 'manage_system',
  
  // View permissions
  VIEW_ANALYTICS: 'view_analytics',
  VIEW_REPORTS: 'view_reports',
  VIEW_AUDIT_LOGS: 'view_audit_logs',
  
  // Export permissions
  EXPORT_DATA: 'export_data',
  EXPORT_REPORTS: 'export_reports'
} as const;

export type Permission = typeof Permission[keyof typeof Permission];

// Theme preferences
export type Theme = 'light' | 'dark' | 'system';

// Form field validation states
export interface FieldError {
  field: string;
  message: string;
}

// Common button variants matching FitVire design system
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Toast notification types
export type ToastType = 'success' | 'error' | 'warning' | 'info';

// Modal sizes
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// Status indicators for various entities
export type Status = 'active' | 'inactive' | 'pending' | 'suspended' | 'archived';

// File upload types
export interface FileUpload {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
  uploadProgress?: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
}

// Search and filter interfaces
export interface SearchFilters {
  query?: string;
  status?: Status;
  dateFrom?: string;
  dateTo?: string;
  tags?: string[];
  [key: string]: any;
}

// Sort configuration
export interface SortConfig {
  field: string;
  direction: 'asc' | 'desc';
}

// Base entity interface
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
}

// Error boundary error info
export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
}

// Feature flags for conditional rendering
export interface FeatureFlags {
  enableAnalytics: boolean;
  enableExport: boolean;
  enableNotifications: boolean;
  enableAdvancedFilters: boolean;
  enableBulkOperations: boolean;
}

// Environment configuration
export type Environment = 'development' | 'staging' | 'production';

// API endpoint types
export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  requiresAuth: boolean;
  permissions?: Permission[];
}

// TODO: Add more domain-specific types as we implement each domain
// TODO: Consider adding validation schemas with Zod
// TODO: Add internationalization (i18n) types when multi-language support is needed