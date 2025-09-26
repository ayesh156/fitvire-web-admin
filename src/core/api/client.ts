/**
 * HTTP client configuration with Axios
 * Request/response interceptors and error handling
 */

import axios, { 
  type AxiosInstance, 
  type AxiosRequestConfig, 
  type AxiosResponse,
  type AxiosError 
} from 'axios';
import { env, STORAGE_KEYS } from '../config/environment';
import type { ApiResponse, ApiError } from '../../domains/shared/types/api';

// Custom axios request config
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean;
  skipErrorHandling?: boolean;
  retryCount?: number;
  maxRetries?: number;
  _retry?: boolean;
}

class ApiClient {
  private client: AxiosInstance;
  private refreshPromise: Promise<string> | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: env.API_BASE_URL,
      timeout: env.API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Client-Version': env.APP_VERSION,
        'X-Client-Platform': 'web-admin'
      }
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor - Add auth token and request logging
    this.client.interceptors.request.use(
      (config: any) => {
        const customConfig = config as CustomAxiosRequestConfig;
        
        // Add authentication token if not skipped
        if (!customConfig.skipAuth) {
          const token = this.getAccessToken();
          if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        // Add request ID for tracing
        config.headers = config.headers || {};
        config.headers['X-Request-ID'] = this.generateRequestId();

        // Log request in development
        if (env.ENABLE_DEBUG_MODE) {
          console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
            data: config.data,
            params: config.params
          });
        }

        return config;
      },
      (error) => {
        console.error('[API Request Error]', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor - Handle responses and token refresh
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        // Log response in development
        if (env.ENABLE_DEBUG_MODE) {
          console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
            status: response.status,
            data: response.data
          });
        }

        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig & { _retry?: boolean };

        // Handle token refresh for 401 errors
        if (error.response?.status === 401 && !originalRequest.skipAuth && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newToken = await this.refreshToken();
            if (newToken && originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return this.client(originalRequest);
            }
          } catch (refreshError) {
            // Refresh failed, redirect to login
            this.handleAuthenticationFailure();
            return Promise.reject(refreshError);
          }
        }

        // Retry logic for network errors
        if (this.shouldRetry(error) && originalRequest.retryCount !== undefined) {
          const retryCount = originalRequest.retryCount || 0;
          const maxRetries = originalRequest.maxRetries || env.API_RETRY_ATTEMPTS;

          if (retryCount < maxRetries) {
            originalRequest.retryCount = retryCount + 1;
            
            // Exponential backoff
            const delay = Math.pow(2, retryCount) * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
            
            return this.client(originalRequest);
          }
        }

        // Handle and format error
        return this.handleResponseError(error);
      }
    );
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getAccessToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  private async refreshToken(): Promise<string | null> {
    // Prevent multiple concurrent refresh attempts
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    this.refreshPromise = this.performTokenRefresh(refreshToken);
    
    try {
      const newToken = await this.refreshPromise;
      return newToken;
    } finally {
      this.refreshPromise = null;
    }
  }

  private async performTokenRefresh(refreshToken: string): Promise<string> {
    try {
      const response = await this.client.post('/auth/refresh', {
        refreshToken
      }, {
        skipAuth: true // Don't add auth header for refresh request
      } as CustomAxiosRequestConfig);

      const { accessToken, refreshToken: newRefreshToken } = response.data.data;
      
      // Store new tokens
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, accessToken);
      if (newRefreshToken) {
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, newRefreshToken);
      }

      return accessToken;
    } catch (error) {
      // Clear invalid tokens
      this.clearTokens();
      throw error;
    }
  }

  private clearTokens(): void {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  private handleAuthenticationFailure(): void {
    this.clearTokens();
    
    // TODO: Emit event for auth state change
    // TODO: Redirect to login page
    
    // For now, reload to login page
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }

  private shouldRetry(error: AxiosError): boolean {
    // Retry on network errors and 5xx server errors
    return !error.response || (error.response.status >= 500 && error.response.status < 600);
  }

  private handleResponseError(error: AxiosError): Promise<never> {
    const apiError: ApiError = {
      code: error.code || 'UNKNOWN_ERROR',
      message: error.message || 'An unexpected error occurred'
    };

    // Extract API error details from response
    if (error.response?.data) {
      const errorData = error.response.data as any;
      apiError.code = errorData.code || error.response.status.toString();
      apiError.message = errorData.message || error.message;
      
      if (errorData.errors) {
        apiError.details = errorData.errors;
      }
    }

    // Log error in development
    if (env.ENABLE_DEBUG_MODE) {
      console.error('[API Error]', {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        message: apiError.message,
        details: apiError.details
      });
    }

    return Promise.reject(apiError);
  }

  // Public API methods
  async get<T = any>(url: string, config?: CustomAxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.get(url, config);
    return response.data;
  }

  async post<T = any>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.post(url, data, config);
    return response.data;
  }

  async put<T = any>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.put(url, data, config);
    return response.data;
  }

  async patch<T = any>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.patch(url, data, config);
    return response.data;
  }

  async delete<T = any>(url: string, config?: CustomAxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.delete(url, config);
    return response.data;
  }

  // File upload method
  async uploadFile<T = any>(
    url: string, 
    file: File, 
    onProgress?: (progress: number) => void,
    config?: CustomAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);

    const uploadConfig: CustomAxiosRequestConfig = {
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      }
    };

    const response = await this.client.post(url, formData, uploadConfig);
    return response.data;
  }

  // Health check method
  async healthCheck(): Promise<boolean> {
    try {
      await this.get('/system/health', { skipAuth: true });
      return true;
    } catch {
      return false;
    }
  }
}

// Create and export singleton instance
export const apiClient = new ApiClient();

// TODO: Implement request/response caching for better performance
// TODO: Add request cancellation support using AbortController
// TODO: Implement offline request queuing and sync
// TODO: Add request deduplication to prevent duplicate API calls
// TODO: Implement circuit breaker pattern for API resilience
// TODO: Add comprehensive error tracking integration with Sentry