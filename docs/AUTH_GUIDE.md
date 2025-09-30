# FitVire Web Admin - Complete Project & Authentication Guide

**Version**: 1.0.0  
**Last Updated**: September 30, 2025  
**Maintainer**: FitVire Development Team

> **The Single Source of Truth** - Complete guide to the FitVire Web Admin platform including architecture, development guidelines, authentication system, and deployment.

---

## 📑 Table of Contents

### 🚀 Getting Started
1. [Quick Start](#-quick-start)
2. [Project Overview](#-project-overview)
3. [Technology Stack](#-technology-stack)

### 🏗️ Architecture & Design
4. [System Architecture](#-system-architecture)
5. [Domain Structure](#-domain-structure)
6. [Component Organization](#-component-organization)
7. [Design System](#-design-system)

### 🔐 Authentication System
8. [Authentication Overview](#-authentication-overview)
9. [Authentication Architecture](#-authentication-architecture)
10. [Authentication Flow](#-authentication-flow)
11. [Implementation Guide](#-implementation-guide)
12. [API Integration](#-api-integration)
13. [State Management](#-state-management)

### 💻 Development
14. [Development Guidelines](#-development-guidelines)
15. [File & Folder Conventions](#-file--folder-conventions)
16. [State Management Patterns](#-state-management-patterns)
17. [Testing Strategy](#-testing-strategy)

### 🔒 Security & Deployment
18. [Security Best Practices](#-security-best-practices)
19. [Deployment](#-deployment)
20. [Performance Optimization](#-performance-optimization)

### 📚 Reference
21. [API Reference](#-api-reference)
22. [Troubleshooting](#-troubleshooting)
23. [Change Log](#-change-log)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 18.0.0+
- **npm**: 9.0.0+
- **Git**: 2.34.0+

### Installation

```bash
# 1. Clone repository
git clone https://github.com/FitVire/fitvire-web-admin.git
cd fitvire-web-admin

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your configuration

# 4. Start development server
npm run dev
```

### Development Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run dev:host         # Network-accessible dev server
npm run dev:https        # HTTPS development server

# Building
npm run build            # Production build
npm run build:analyze    # Bundle analysis
npm run preview          # Preview production build

# Code Quality
npm run lint             # ESLint analysis with auto-fix
npm run type-check       # TypeScript compilation verification
npm run format           # Prettier code formatting
npm run audit            # Security vulnerability scanning

# Testing
npm run test             # Unit tests with Vitest
npm run test:watch       # Tests in watch mode
npm run test:coverage    # Coverage reports
npm run test:e2e         # E2E tests with Playwright

# Utilities
npm run clean            # Clean build artifacts
npm run deps:check       # Check outdated dependencies
npm run deps:update      # Update dependencies
```

---

## 📖 Project Overview

### What is FitVire Web Admin?

**FitVire Web Admin** is a modern, production-ready administrative dashboard built with cutting-edge technologies and architectural patterns. It serves as the central management hub for the FitVire fitness marketplace ecosystem, enabling platform administrators to manage users, partners, content, and system operations.

### Core Philosophy

FitVire Web Admin is built on four foundational principles:

1. **Domain-Driven Design**: Clear separation of business concerns with explicit domain boundaries
2. **Clean Architecture**: Dependency inversion with infrastructure isolation from business logic
3. **Scalable Patterns**: SOLID principles with composition over inheritance
4. **Type Safety**: End-to-end TypeScript with comprehensive interface contracts

### Key Features

✅ **Executive Dashboard** - Real-time metrics with WebSocket updates  
✅ **Advanced User Management** - Customer & partner lifecycle management  
✅ **Business Intelligence** - Revenue analytics and custom reports  
✅ **Content Management** - Service categories and media library  
✅ **System Administration** - Feature flags and configuration  
✅ **Security & Compliance** - Multi-factor auth and audit logging  
✅ **Performance Optimized** - Code splitting and lazy loading  
✅ **Responsive Design** - Mobile-first with glass morphism UI

---

## 🛠️ Technology Stack

### Core Framework & Runtime
- **⚛️ React 19.1.1** - Latest React with concurrent features, automatic batching, and improved hydration
- **🔧 TypeScript 5.8.3** - Advanced type system with strict mode, comprehensive interface contracts
- **⚡ Vite 7.1.6** - Next-generation build tool with lightning-fast HMR and optimized bundling
- **🎨 Tailwind CSS 4.1.13** - Utility-first CSS framework with CSS-in-JS engine for production performance

### State Management & Data Layer
- **🏪 Zustand 5.0.8** - Lightweight (2KB) state management with TypeScript-first API and persistence
- **🔄 TanStack React Query 5.89.0** - Server state management with intelligent caching, background updates, and optimistic updates
- **📡 Axios 1.12.2** - Promise-based HTTP client with comprehensive interceptors and request/response transformation
- **🗄️ React Hook Form 7.62.0** - High-performance forms with minimal re-renders and comprehensive validation

### UI & User Experience
- **🎭 Framer Motion 12.23.15** - Production-ready motion library for fluid animations and gesture handling
- **✅ Zod 4.1.9** - TypeScript-first schema validation with runtime safety and type inference
- **📝 Hookform Resolvers 5.2.2** - Seamless integration between React Hook Form and validation libraries
- **🎛️ Lucide React 0.544.0** - Beautiful, consistent icon library with 1000+ SVG icons

### Data Visualization & Analytics
- **📊 Chart.js 5.7.14** - Flexible, responsive charting library with Canvas rendering for performance
- **📈 React Chart.js 2 7.7.3** - React wrapper for Chart.js with component-based API

### Development & Code Quality
- **🔍 ESLint 9.20.0** - Advanced linting with TypeScript rules and React best practices
- **💅 Prettier 4.0.5** - Consistent code formatting with Tailwind CSS class sorting
- **🐕 Husky 10.6.11** - Git hooks for automated quality checks and commit standards
- **🧪 Vitest 2.1.4** - Fast unit testing framework with native TypeScript support

### Routing & Navigation
- **🛣️ React Router DOM 7.9.1** - Declarative routing with data loading and nested routes
- **📅 date-fns 4.1.0** - Modern date utility library with tree-shaking support

### Performance Requirements

- **First Contentful Paint**: <1.2s (Excellent)
- **Largest Contentful Paint**: <2.0s (High-performance target)
- **Time to Interactive**: <2.8s (Responsive user experience)
- **Cumulative Layout Shift**: <0.1 (Stable visual experience)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

---

## 🏗️ System Architecture

### Clean Architecture Layers

The application implements a four-layer architecture:

#### 1. Presentation Layer
- React components with functional programming patterns
- Zustand stores for UI state management
- React Query for server state management
- Framer Motion for animations and transitions

#### 2. Application Layer
- Custom hooks for business logic encapsulation
- Service layer for API communication
- Event handlers for user interactions
- Form validation with React Hook Form + Zod

#### 3. Domain Layer
- Core business rules and entities
- Domain models with validation logic
- Use cases implementing business policies
- Domain events and side effects

#### 4. Infrastructure Layer
- HTTP client configuration (Axios)
- Local storage management
- External API integrations
- Environment configuration

### Architecture Principles

#### Dependency Inversion
- High-level modules don't depend on low-level implementation
- Abstraction layers define contracts between layers
- Infrastructure isolated behind interfaces

#### Single Responsibility Principle
- Each component has one reason to change
- Services handle only HTTP communication
- Hooks encapsulate single pieces of business logic

#### Domain-Driven Design
- Ubiquitous language consistent between code and stakeholders
- Bounded contexts prevent feature creep
- Aggregate roots maintain consistency

---

## 🎯 Domain Structure

### FitVire User Ecosystem

**CRITICAL**: In FitVire, "Users" is an umbrella term for ALL platform participants:

#### 1. Customers (Top-End Users)
- Primary end-users of the FitVire fitness marketplace
- Book services, purchase products, consume content
- **Focus**: Booking management, payment history, subscriptions

#### 2. Partners (Service Providers)
- Fitness professionals providing services
- Trainers, gym owners, nutritionists, sports facilities
- **Focus**: Service management, availability, earnings, clients

#### 3. Management Users (FitVire Staff)
- FitVire management team overseeing platform
- Administrators, managers, content moderators, support
- **Focus**: Platform configuration, user moderation, analytics

### Domain Architecture Pattern

**Shared → Management → Customer → Partner**

Each domain follows consistent structure:
```
domain-name/
├── components/   # UI components specific to this domain
├── hooks/        # Custom hooks for business logic
├── pages/        # Page components
├── services/     # API service layer
├── stores/       # Zustand state management
└── types/        # TypeScript type definitions
```

### Shared Domain (Cross-Domain Infrastructure)

**Purpose**: Foundational components and utilities used across all domains

**Key Components**:
- Atomic design components (Button, Input, Card, Modal, Table)
- Reusable hooks (useDebounce, useLocalStorage, useMediaQuery)
- Cross-domain utilities (API client, Zod schemas, formatters)
- Shared types (HTTP responses, common enums, events)
- Global state (authentication, UI theme, notifications)

### Management Domain (Platform Administration)

**Purpose**: Internal FitVire staff operations and system administration

**Responsibilities**:
- System metrics dashboards and real-time monitoring
- Staff user administration and access control
- Platform configuration and feature flags
- Audit trail and compliance tracking
- System health monitoring and alerts

### Customer Domain (Customer Lifecycle Management)

**Purpose**: Customer account management, support, and engagement analytics

**Responsibilities**:
- Customer account management and profiles
- Booking history and management
- Support ticket system
- Customer analytics and insights
- Subscription and payment tracking

### Partner Domain (Partner Ecosystem Management)

**Purpose**: Gym, trainer, and sports center partnership management

**Responsibilities**:
- Partner application and approval workflows
- Gym and trainer profile management
- Service offering catalog management
- Commission tracking and payouts
- Partner performance analytics

---

## 🧩 Component Organization

### Component Categorization

All components follow atomic design principles:

#### 1. UI Components (`components/ui/`)
**Purpose**: Basic building blocks (Atoms)

**Examples**: Button, Input, Badge, Spinner, Card, Avatar, Tooltip, Divider

**Characteristics**:
- No business logic
- Highly reusable
- Polymorphic when appropriate
- Fully typed with TypeScript

#### 2. Form Components (`components/forms/`)
**Purpose**: Form-related elements (Molecules)

**Examples**: FormField, SearchBox, Select, Checkbox, RadioGroup, DatePicker

**Characteristics**:
- Validation integration
- Error state handling
- Accessibility features
- React Hook Form compatible

#### 3. Data Components (`components/data/`)
**Purpose**: Data display and manipulation (Organisms)

**Examples**: DataTable, StatCard, FilterComponent, ProgressBar, EmptyState

**Characteristics**:
- Complex data handling
- Sorting and filtering
- Pagination support
- Virtual scrolling for large datasets

#### 4. Navigation Components (`components/navigation/`)
**Purpose**: Navigation and wayfinding

**Examples**: Sidebar, Header, Breadcrumb, TabsContainer, Pagination

**Characteristics**:
- Active state management
- Route awareness
- Responsive design
- Keyboard navigation

#### 5. Feedback Components (`components/feedback/`)
**Purpose**: User feedback and notifications

**Examples**: Modal, ConfirmDialog, Toast, Alert, LoadingOverlay

**Characteristics**:
- Portal-based rendering
- Animation support
- Accessibility (ARIA)
- Dismissible states

#### 6. Media Components (`components/media/`)
**Purpose**: Media handling

**Examples**: FileUploader, ImagePreview, MediaGallery

**Characteristics**:
- Drag-and-drop support
- File validation
- Preview functionality
- Progress tracking

#### 7. Chart Components (`components/charts/`)
**Purpose**: Data visualization

**Examples**: ChartContainer, LineChart, BarChart, PieChart

**Characteristics**:
- Chart.js integration
- Responsive sizing
- Color palette consistency
- Tooltip customization

#### 8. Layout Components (`components/layout/`)
**Purpose**: Page structure (Templates)

**Examples**: DashboardLayout, AuthLayout, PageHeader, ContentWrapper

**Characteristics**:
- Consistent spacing
- Responsive breakpoints
- Slot-based composition
- SEO optimization

#### 9. Utility Components (`components/utility/`)
**Purpose**: Helper components

**Examples**: ActionMenu, CopyButton, ExportButton, RefreshButton

**Characteristics**:
- Cross-cutting concerns
- Minimal UI
- Action-focused
- Event handling

---

## 🎨 Design System

### Design Tokens

```typescript
// design-system/tokens.ts
export const tokens = {
  colors: {
    // Primary palette
    primary: '#EF4444',      // Red-500
    primaryDark: '#DC2626',  // Red-600
    primaryLight: '#F87171', // Red-400
    
    // Neutral palette
    neutral: '#F5F5F5',      // Neutral-100
    neutralDark: '#171717',  // Neutral-900
    
    // Status colors
    success: '#10B981',      // Green-500
    warning: '#F59E0B',      // Amber-500
    error: '#EF4444',        // Red-500
    info: '#3B82F6',         // Blue-500
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
  },
  
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'Monaco, Courier New, monospace',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
    },
  },
  
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    full: '9999px',  // Circular
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
};
```

### Glass Morphism System

```typescript
// Glass card variants
export const glassVariants = {
  elevated: 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl',
  surface: 'bg-white/[0.02] backdrop-blur-lg border border-white/5',
  glass: 'bg-white/[0.01] backdrop-blur-md border border-white/[0.02]',
};
```

---

---

## 🔐 Authentication Overview

### Authentication System

The FitVire Web Admin implements a **JWT (JSON Web Token)** based authentication system with the following characteristics:

- **Token Type**: Bearer tokens with access/refresh token pattern
- **Storage**: LocalStorage for tokens (with security considerations)
- **State Management**: Zustand for authentication state
- **API Communication**: Axios with automatic token injection
- **Session Management**: Automatic token refresh and session validation
- **Role-Based Access**: Hierarchical permission system

### Key Features

✅ **Secure JWT Authentication** - Industry-standard token-based authentication  
✅ **Automatic Token Refresh** - Seamless session renewal without user intervention  
✅ **Role-Based Access Control** - Granular permissions for different user types  
✅ **Session Validation** - Periodic session health checks  
✅ **Password Management** - Forgot password, reset, and change functionality  
✅ **Email Verification** - Email confirmation workflow  
✅ **Security Events** - Comprehensive audit logging  
✅ **Development Test Mode** - Quick login for testing without backend

### User Roles & Permissions

The system supports hierarchical user roles with different permission levels:

#### 1. SuperAdmin
- **Description**: Highest level of access with all system permissions
- **Permissions**: All permissions including system management
- **Use Case**: Platform administrators and system maintainers

#### 2. Internal Staff (Admin)
- **Description**: FitVire management team with administrative privileges
- **Title**: Admin
- **Permissions**: User management, partner management, analytics viewing
- **Use Case**: Platform managers and content moderators

#### 3. Internal Staff (Manager)
- **Description**: Mid-level staff with limited administrative access
- **Title**: Manager
- **Permissions**: View analytics, view reports
- **Use Case**: Team leads and department managers

---

## 🏗️ Architecture

### Component Structure

```
Authentication System Architecture
│
├── Core Layer (HTTP Client & Configuration)
│   ├── core/api/client.ts              # Axios instance with interceptors
│   └── core/config/environment.ts      # Environment configuration
│
├── Service Layer (API Communication)
│   └── domains/shared/services/authService.ts
│       ├── login()                     # User authentication
│       ├── logout()                    # Session termination
│       ├── refreshTokens()             # Token renewal
│       ├── forgotPassword()            # Password reset request
│       ├── resetPassword()             # Password reset with token
│       ├── changePassword()            # Password change (authenticated)
│       ├── getProfile()                # Fetch user profile
│       ├── updateProfile()             # Update user data
│       ├── validateSession()           # Session health check
│       ├── verifyEmail()               # Email verification
│       └── validatePasswordStrength()  # Password validation
│
├── State Management (Zustand Store)
│   └── domains/shared/stores/authStore.ts
│       ├── State
│       │   ├── user                    # Current user object
│       │   ├── sessionId               # Active session ID
│       │   ├── isAuthenticated         # Authentication status
│       │   ├── isLoading               # Loading state
│       │   └── error                   # Error messages
│       └── Actions
│           ├── login()                 # Set authenticated state
│           ├── logout()                # Clear authentication
│           ├── setLoading()            # Update loading state
│           └── setError()              # Set error message
│
├── Business Logic (Custom Hooks)
│   └── domains/shared/hooks/useAuth.ts
│       ├── useLogin()                  # Login functionality
│       ├── useLogout()                 # Logout functionality
│       ├── useForgotPassword()         # Password reset request
│       ├── useResetPassword()          # Password reset completion
│       ├── useSessionManager()         # Session validation
│       ├── usePasswordStrength()       # Password validation
│       ├── useEmailAvailability()      # Email checking
│       ├── useAuthStatus()             # Auth state selector
│       ├── usePermissions()            # Permission checking
│       └── useTestLogin()              # Development test login
│
├── Type Definitions
│   └── domains/shared/types/auth.ts
│       ├── User                        # User entity interface
│       ├── AuthTokens                  # JWT tokens structure
│       ├── LoginRequest                # Login payload
│       ├── LoginResponse               # Login response
│       ├── ForgotPasswordRequest       # Password reset request
│       ├── ResetPasswordRequest        # Password reset payload
│       ├── ChangePasswordRequest       # Password change payload
│       └── SecurityEvent               # Audit event types
│
└── UI Components
    └── domains/shared/pages/
        ├── LoginPage.tsx               # Login form
        ├── ForgotPasswordPage.tsx      # Password reset request
        ├── ResetPasswordPage.tsx       # Password reset form
        └── EmailVerificationPage.tsx   # Email confirmation
```

### Data Flow

```
User Action → UI Component → Custom Hook → Auth Service → API Client → Backend
                ↓                                                          ↓
         Update UI State ← Zustand Store ← Token Storage ← Response
```

---

## 🔄 Authentication Flow

### 1. Login Flow

```typescript
/**
 * Complete login workflow
 */
User enters credentials
    ↓
LoginPage validates input (React Hook Form + Zod)
    ↓
useLogin() hook called
    ↓
authService.login(credentials)
    ↓
API POST /auth/login
    ↓
Backend validates credentials
    ↓
Returns: { user, tokens, sessionId }
    ↓
Store tokens in localStorage
    ↓
Update Zustand authStore state
    ↓
Navigate to dashboard
```

**Code Example:**

```typescript
// LoginPage.tsx
import { useLogin } from '@/domains/shared/hooks/useAuth';

const LoginPage = () => {
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (credentials: LoginRequest) => {
    try {
      await login(credentials);
      // Navigation handled automatically by useLogin hook
    } catch (err) {
      // Error displayed automatically
    }
  };

  return (
    <LoginForm 
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
};
```

### 2. Token Refresh Flow

```typescript
/**
 * Automatic token refresh on 401 error
 */
API Request with expired token
    ↓
Returns 401 Unauthorized
    ↓
Axios interceptor catches error
    ↓
Check if refresh is already in progress
    ↓
Call authService.refreshToken()
    ↓
API POST /auth/refresh with refresh token
    ↓
Returns: { accessToken, refreshToken }
    ↓
Store new tokens in localStorage
    ↓
Retry original request with new token
    ↓
Return response to caller
```

**Implementation:**

```typescript
// core/api/client.ts - Automatic token refresh
this.client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await this.refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return this.client(originalRequest);
      } catch (refreshError) {
        this.handleAuthenticationFailure();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
```

### 3. Session Validation Flow

```typescript
/**
 * Periodic session health checks
 */
Component mounts with useSessionManager()
    ↓
Initial session validation
    ↓
API GET /auth/session/validate
    ↓
Backend checks token validity
    ↓
Returns: { isValid: true/false, user }
    ↓
If invalid: logout() and redirect to login
    ↓
If valid: continue
    ↓
Set interval for periodic checks (every 5 minutes)
    ↓
Repeat validation
```

### 4. Logout Flow

```typescript
/**
 * Complete logout workflow
 */
User clicks logout
    ↓
useLogout() hook called
    ↓
authService.logout() - API call (best effort)
    ↓
Clear tokens from localStorage
    ↓
Clear Zustand authStore state
    ↓
Navigate to login page
    ↓
All protected routes become inaccessible
```

### 5. Password Reset Flow

```typescript
/**
 * Forgot password → Reset → Login
 */
// Step 1: Request Reset
User enters email on ForgotPasswordPage
    ↓
useForgotPassword() hook called
    ↓
API POST /auth/forgot-password
    ↓
Backend sends reset email with token
    ↓
Show success message

// Step 2: Reset Password
User clicks link in email (with token)
    ↓
Opens ResetPasswordPage with token in URL
    ↓
User enters new password
    ↓
useResetPassword() hook called
    ↓
API POST /auth/reset-password { token, newPassword }
    ↓
Backend validates token and updates password
    ↓
Navigate to login page
    ↓
User logs in with new password
```

---

## 💻 Implementation Guide

### Setting Up Authentication

#### 1. Environment Configuration

Create `.env.local` file with authentication settings:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8000/api/
VITE_API_TIMEOUT=30000

# Authentication Configuration
VITE_JWT_ACCESS_TOKEN_EXPIRY=15        # 15 minutes
VITE_JWT_REFRESH_TOKEN_EXPIRY=7        # 7 days
VITE_SESSION_TIMEOUT=60                # 60 minutes
```

#### 2. Initialize Authentication Store

The auth store is automatically initialized on app startup:

```typescript
// main.tsx
import { initializeAuth } from '@/domains/shared/stores/authStore';

// Initialize auth state from stored tokens
initializeAuth();

// Render app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### 3. Using Authentication in Components

**Example: Login Page**

```typescript
import React from 'react';
import { useLogin } from '@/domains/shared/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const { login, isLoading, error, clearError } = useLogin();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    clearError();
    try {
      await login(data);
      // Navigation handled automatically
    } catch (err) {
      // Error displayed automatically
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register('email')}
        placeholder="Email"
        disabled={isLoading}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register('password')}
        placeholder="Password"
        disabled={isLoading}
      />
      {errors.password && <span>{errors.password.message}</span>}

      {error && <div className="error">{error}</div>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
```

**Example: Protected Component**

```typescript
import { useAuthStatus, usePermissions } from '@/domains/shared/hooks/useAuth';
import { Permission } from '@/domains/shared/types/common';

export const AdminPanel: React.FC = () => {
  const { user, isAuthenticated, isInitialized } = useAuthStatus();
  const { hasPermission, isSuperAdmin } = usePermissions();

  // Wait for auth initialization
  if (!isInitialized) {
    return <Spinner />;
  }

  // Check authentication
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check permissions
  if (!hasPermission(Permission.MANAGE_SYSTEM)) {
    return <AccessDenied />;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {user?.firstName}!</p>
      {isSuperAdmin() && <SuperAdminTools />}
    </div>
  );
};
```

**Example: Logout Button**

```typescript
import { useLogout } from '@/domains/shared/hooks/useAuth';

export const LogoutButton: React.FC = () => {
  const { logout, isLoading } = useLogout();

  const handleLogout = async () => {
    await logout();
    // Navigation to login handled automatically
  };

  return (
    <button onClick={handleLogout} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
};
```

#### 4. Permission-Based UI Rendering

```typescript
import { usePermissions } from '@/domains/shared/hooks/useAuth';
import { Permission } from '@/domains/shared/types/common';

export const UserActions: React.FC = () => {
  const { 
    hasPermission, 
    hasAnyPermission,
    isSuperAdmin 
  } = usePermissions();

  return (
    <div className="actions">
      {/* Show to users with specific permission */}
      {hasPermission(Permission.MANAGE_USERS) && (
        <button>Create User</button>
      )}

      {/* Show to users with any of these permissions */}
      {hasAnyPermission([Permission.VIEW_ANALYTICS, Permission.VIEW_REPORTS]) && (
        <button>View Reports</button>
      )}

      {/* Show only to SuperAdmin */}
      {isSuperAdmin() && (
        <button>System Configuration</button>
      )}
    </div>
  );
};
```

---

## 🔌 API Integration

### Authentication Endpoints

All authentication endpoints are configured in `core/config/environment.ts`:

```typescript
export const API_ENDPOINTS = {
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
  }
};
```

### Request/Response Formats

#### Login

**Request:**
```typescript
POST /auth/login
Content-Type: application/json

{
  "email": "admin@fitvire.com",
  "password": "SecurePassword123!",
  "rememberMe": true
}
```

**Response:**
```typescript
{
  "success": true,
  "data": {
    "user": {
      "id": "user-123",
      "email": "admin@fitvire.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "superadmin",
      "permissions": ["MANAGE_SYSTEM", "MANAGE_USERS"],
      "isActive": true,
      "emailVerified": true,
      "createdAt": "2025-01-15T10:30:00Z",
      "updatedAt": "2025-09-30T14:20:00Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "accessTokenExpiry": 1696085400000,
      "refreshTokenExpiry": 1696671000000
    },
    "sessionId": "session-456"
  },
  "message": "Login successful"
}
```

#### Token Refresh

**Request:**
```typescript
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```typescript
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Forgot Password

**Request:**
```typescript
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "admin@fitvire.com"
}
```

**Response:**
```typescript
{
  "success": true,
  "message": "Password reset email sent successfully"
}
```

#### Reset Password

**Request:**
```typescript
POST /auth/reset-password
Content-Type: application/json

{
  "token": "reset-token-from-email",
  "newPassword": "NewSecurePassword123!",
  "confirmPassword": "NewSecurePassword123!"
}
```

**Response:**
```typescript
{
  "success": true,
  "message": "Password reset successful"
}
```

### API Client Configuration

The API client automatically handles authentication:

```typescript
// Automatic token injection
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Automatic token refresh on 401
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Refresh token logic
      const newToken = await refreshToken();
      // Retry original request
      return apiClient(originalRequest);
    }
    return Promise.reject(error);
  }
);
```

---

## 🗄️ State Management

### Zustand Auth Store

The authentication state is managed with Zustand for optimal performance:

```typescript
// domains/shared/stores/authStore.ts
interface AuthState {
  // State
  user: User | null;
  sessionId: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (user: User, tokens: AuthTokens, sessionId: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
```

### State Selectors

Use selective subscriptions to prevent unnecessary re-renders:

```typescript
// Subscribe to specific state slices
const user = useAuthStore((state) => state.user);
const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

// Or use the provided hook
const { user, isAuthenticated, isLoading } = useAuth();
```

### Token Storage

Tokens are stored in localStorage for persistence:

```typescript
// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'fitvire_admin_auth_token',
  REFRESH_TOKEN: 'fitvire_admin_refresh_token',
};

// Store tokens
localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, accessToken);
localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

// Retrieve tokens
const accessToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

// Clear tokens
localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
```

**Security Note**: While localStorage is used for convenience, consider using httpOnly cookies in production for enhanced security.

---

## 🔒 Security Best Practices

### 1. Token Security

**Do's:**
✅ Use short expiration times for access tokens (15 minutes)  
✅ Use longer expiration for refresh tokens (7 days)  
✅ Implement automatic token refresh before expiration  
✅ Clear tokens on logout  
✅ Validate tokens on every request  

**Don'ts:**
❌ Never store passwords in plain text  
❌ Never log sensitive tokens  
❌ Never expose tokens in URLs  
❌ Never share tokens across domains without proper CORS  

### 2. Password Security

**Password Requirements:**
```typescript
// Minimum requirements enforced
- Length: At least 8 characters
- Uppercase: At least one uppercase letter
- Lowercase: At least one lowercase letter
- Number: At least one digit
- Special: At least one special character (!@#$%^&*(),.?":{}|<>)
```

**Password Validation:**
```typescript
import { authService } from '@/domains/shared/services/authService';

const validatePassword = (password: string) => {
  const result = authService.validatePasswordStrength(password);
  
  if (!result.isValid) {
    console.log('Password issues:', result.feedback);
  }
  
  return result.isValid;
};
```

### 3. Session Management

**Session Security:**
```typescript
// Automatic session validation every 5 minutes
useEffect(() => {
  const validateSession = async () => {
    const result = await authService.validateSession();
    if (!result.isValid) {
      logout();
    }
  };

  const interval = setInterval(validateSession, 5 * 60 * 1000);
  return () => clearInterval(interval);
}, []);
```

**Session Timeout:**
```typescript
// Configured in environment
VITE_SESSION_TIMEOUT=60  // 60 minutes of inactivity
```

### 4. HTTPS Only

**Always use HTTPS in production:**
```typescript
// Environment configuration
export const env = {
  API_BASE_URL: isProduction 
    ? 'https://api.fitvire.com' 
    : 'http://localhost:8000/api'
};
```

### 5. Input Validation

**Client-side validation with Zod:**
```typescript
const loginSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password too long'),
});
```

**Server-side validation is mandatory** - Never trust client input alone.

### 6. Error Handling

**Never expose sensitive information in errors:**
```typescript
// Bad ❌
throw new Error('User with email admin@fitvire.com not found');

// Good ✅
throw new Error('Invalid email or password');
```

**User-friendly error messages:**
```typescript
export const formatAuthError = (error: any): string => {
  const errorMessages: Record<string, string> = {
    'AUTH_INVALID_CREDENTIALS': 'Invalid email or password',
    'AUTH_ACCOUNT_LOCKED': 'Account temporarily locked',
    'AUTH_EMAIL_NOT_VERIFIED': 'Please verify your email',
    'AUTH_TOKEN_EXPIRED': 'Session expired. Please log in again',
  };

  return errorMessages[error.code] || 'An unexpected error occurred';
};
```

### 7. Rate Limiting

**Prevent brute force attacks:**
```typescript
// Configured on backend with exponential backoff
- Max login attempts: 5 within 15 minutes
- Account lockout: 30 minutes after max attempts
- IP-based rate limiting for additional protection
```

### 8. Audit Logging

**Track security events:**
```typescript
interface SecurityEvent {
  userId: string;
  event: SecurityEventType;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
}

type SecurityEventType = 
  | 'login_success'
  | 'login_failed'
  | 'logout'
  | 'password_changed'
  | 'suspicious_activity';
```

---

## 🧪 Testing Authentication

### Development Test Login

For development and testing, use the `useTestLogin` hook:

```typescript
import { useTestLogin } from '@/domains/shared/hooks/useAuth';

export const DevLogin: React.FC = () => {
  const { testLogin, isLoading } = useTestLogin();

  return (
    <div className="dev-login">
      <h3>Quick Test Login (Development Only)</h3>
      
      <button onClick={() => testLogin('superadmin')} disabled={isLoading}>
        Login as SuperAdmin
      </button>
      
      <button onClick={() => testLogin('admin')} disabled={isLoading}>
        Login as Admin
      </button>
      
      <button onClick={() => testLogin('manager')} disabled={isLoading}>
        Login as Manager
      </button>
    </div>
  );
};
```

**Test Users Created:**
```typescript
const mockUsers = {
  superadmin: {
    email: 'superadmin@fitvire.com',
    role: 'superadmin',
    permissions: [MANAGE_SYSTEM, MANAGE_USERS, MANAGE_PARTNERS, VIEW_ANALYTICS],
  },
  admin: {
    email: 'admin@fitvire.com',
    role: 'internal_staff',
    internalStaffTitle: 'Admin',
    permissions: [MANAGE_USERS, MANAGE_PARTNERS, VIEW_ANALYTICS],
  },
  manager: {
    email: 'manager@fitvire.com',
    role: 'internal_staff',
    internalStaffTitle: 'Manager',
    permissions: [VIEW_ANALYTICS, VIEW_REPORTS],
  }
};
```

### Unit Testing

**Testing authentication hooks:**
```typescript
import { renderHook, waitFor } from '@testing-library/react';
import { useLogin } from '@/domains/shared/hooks/useAuth';

describe('useLogin', () => {
  it('should login successfully', async () => {
    const { result } = renderHook(() => useLogin());

    await waitFor(() => {
      result.current.login({
        email: 'test@fitvire.com',
        password: 'password123'
      });
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle login errors', async () => {
    const { result } = renderHook(() => useLogin());

    await waitFor(() => {
      result.current.login({
        email: 'invalid@fitvire.com',
        password: 'wrong'
      });
    });

    expect(result.current.error).toBeTruthy();
  });
});
```

**Testing protected components:**
```typescript
import { render, screen } from '@testing-library/react';
import { ProtectedComponent } from './ProtectedComponent';

describe('ProtectedComponent', () => {
  it('should redirect when not authenticated', () => {
    // Mock unauthenticated state
    mockAuthStore({ isAuthenticated: false });
    
    render(<ProtectedComponent />);
    
    expect(window.location.pathname).toBe('/login');
  });

  it('should render when authenticated', () => {
    // Mock authenticated state
    mockAuthStore({ 
      isAuthenticated: true,
      user: mockUser 
    });
    
    render(<ProtectedComponent />);
    
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });
});
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Infinite Login Loop

**Problem:** App keeps redirecting to login even after successful authentication.

**Solution:**
```typescript
// Check if auth state is properly initialized
const { isAuthenticated, isInitialized } = useAuthStatus();

if (!isInitialized) {
  return <Spinner />;  // Wait for initialization
}

if (!isAuthenticated) {
  return <Navigate to="/login" />;
}
```

#### 2. Token Refresh Fails

**Problem:** 401 errors even with valid refresh token.

**Solution:**
```typescript
// Ensure refresh token is properly stored
localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

// Check token expiration
const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};
```

#### 3. CORS Errors

**Problem:** Authentication requests blocked by CORS policy.

**Solution:**
```typescript
// Ensure backend CORS configuration allows:
- Origin: http://localhost:5173 (development)
- Methods: GET, POST, PUT, DELETE, OPTIONS
- Headers: Authorization, Content-Type
- Credentials: true
```

#### 4. LocalStorage Not Available

**Problem:** Tokens not persisting in certain browsers (incognito/private mode).

**Solution:**
```typescript
// Implement fallback storage
const safeLocalStorage = {
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return sessionStorage.getItem(key);
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      sessionStorage.setItem(key, value);
    }
  }
};
```

#### 5. Session Expires Too Quickly

**Problem:** Users getting logged out frequently.

**Solution:**
```typescript
// Adjust token expiration in .env
VITE_JWT_ACCESS_TOKEN_EXPIRY=30        # Increase to 30 minutes
VITE_JWT_REFRESH_TOKEN_EXPIRY=14       # Increase to 14 days
VITE_SESSION_TIMEOUT=120               # Increase to 2 hours

// Implement activity tracking
const updateLastActivity = () => {
  localStorage.setItem('lastActivity', Date.now().toString());
};

// Reset session timeout on user activity
document.addEventListener('mousemove', updateLastActivity);
document.addEventListener('keypress', updateLastActivity);
```

### Debug Mode

Enable debug mode for detailed logging:

```bash
# .env.local
VITE_ENABLE_DEBUG_MODE=true
```

This will log:
- All API requests and responses
- Authentication state changes
- Token refresh attempts
- Session validation checks

---

## 📚 API Reference

### AuthService Methods

#### `login(credentials: LoginRequest): Promise<LoginResponse>`
Authenticate user with email and password.

**Parameters:**
- `credentials.email` - User email address
- `credentials.password` - User password
- `credentials.rememberMe` - Optional, extend session duration

**Returns:** User data, tokens, and session ID

**Throws:** Authentication error on failure

---

#### `logout(): Promise<void>`
Logout current user and invalidate session.

**Returns:** void

**Note:** Continues with local logout even if API call fails

---

#### `refreshTokens(): Promise<{ accessToken: string; refreshToken: string }>`
Refresh authentication tokens.

**Returns:** New access and refresh tokens

**Throws:** Error if refresh fails (triggers logout)

---

#### `forgotPassword(request: ForgotPasswordRequest): Promise<void>`
Request password reset email.

**Parameters:**
- `request.email` - Email address for password reset

**Returns:** void (email sent confirmation)

---

#### `resetPassword(request: ResetPasswordRequest): Promise<void>`
Reset password with token from email.

**Parameters:**
- `request.token` - Reset token from email
- `request.newPassword` - New password
- `request.confirmPassword` - Password confirmation

**Returns:** void (password reset confirmation)

---

#### `changePassword(request: ChangePasswordRequest): Promise<void>`
Change password for authenticated user.

**Parameters:**
- `request.currentPassword` - Current password
- `request.newPassword` - New password
- `request.confirmPassword` - Password confirmation

**Returns:** void (password changed confirmation)

---

#### `getProfile(): Promise<User>`
Get current user profile.

**Returns:** Current user data

---

#### `updateProfile(updates: Partial<User>): Promise<User>`
Update user profile.

**Parameters:**
- `updates` - Partial user object with fields to update

**Returns:** Updated user data

---

#### `validateSession(): Promise<{ isValid: boolean; user?: User }>`
Validate current session.

**Returns:** Session validity status and user data

---

#### `verifyEmail(token: string): Promise<void>`
Verify email with token.

**Parameters:**
- `token` - Verification token from email

**Returns:** void (email verified confirmation)

---

#### `validatePasswordStrength(password: string): PasswordStrength`
Validate password strength.

**Parameters:**
- `password` - Password to validate

**Returns:** Object with score, feedback, and validity

---

### Custom Hooks Reference

#### `useLogin()`
Hook for login functionality.

**Returns:**
```typescript
{
  login: (credentials: LoginRequest) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}
```

---

#### `useLogout()`
Hook for logout functionality.

**Returns:**
```typescript
{
  logout: () => Promise<void>;
  isLoading: boolean;
}
```

---

#### `useAuthStatus()`
Hook for authentication status.

**Returns:**
```typescript
{
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  hasUser: boolean;
  userRole: UserRole | undefined;
  userPermissions: Permission[];
}
```

---

#### `usePermissions()`
Hook for permission checking.

**Returns:**
```typescript
{
  hasPermission: (permission: Permission) => boolean;
  hasAnyPermission: (permissions: Permission[]) => boolean;
  hasAllPermissions: (permissions: Permission[]) => boolean;
  hasRole: (role: UserRole) => boolean;
  isSuperAdmin: () => boolean;
  isInternalStaff: () => boolean;
  getInternalStaffTitle: () => string | null;
  userRole: UserRole | undefined;
  userPermissions: Permission[];
}
```

---

## 💻 Development Guidelines

### File and Folder Conventions

#### Naming Conventions
- **Components**: PascalCase (e.g., `DataTable.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useAuth.ts`)
- **Services**: camelCase with "Service" suffix (e.g., `authService.ts`)
- **Types**: camelCase (e.g., `user.ts`, `api.ts`)
- **Constants**: SCREAMING_SNAKE_CASE in shared folder
- **Folders**: lowercase (e.g., `components`, `hooks`)

#### Component Development Template

```typescript
/**
 * ComponentName - Brief description
 */

// 1. React imports
import React, { useState } from 'react';

// 2. External libraries
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

// 3. Internal shared components
import { Button, Input } from '@/domains/shared/components/ui';
import { DataTable } from '@/domains/shared/components/data';

// 4. Domain-specific imports
import { CustomerService } from '@/domains/customers/services';

// 5. Types
import type { Customer } from '@/domains/customers/types';

// Props interface
interface ComponentNameProps {
  // Required props first
  id: string;
  title: string;
  
  // Optional props
  description?: string;
  className?: string;
  
  // Event handlers
  onSubmit?: (data: Customer) => void;
}

// Component implementation
export const ComponentName: React.FC<ComponentNameProps> = ({
  id,
  title,
  description,
  className,
  onSubmit,
}) => {
  // Hooks
  const [isLoading, setIsLoading] = useState(false);
  
  // Event handlers
  const handleSubmit = async () => {
    setIsLoading(true);
    // Implementation
    setIsLoading(false);
  };
  
  // Render
  return (
    <div className={className}>
      {/* Component JSX */}
    </div>
  );
};

// Default export (for pages)
export default ComponentName;
```

### Import Patterns

#### Recommended Pattern
```typescript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. External libraries
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// 3. Internal imports (absolute paths)
import { DataTable } from '@/domains/shared/components/data';
import { Button } from '@/domains/shared/components/ui';

// 4. Type imports
import type { User, ApiResponse } from '@/domains/shared/types';

// 5. Relative imports (same domain)
import { formatDate } from '../utils';
```

---

## 📁 File & Folder Conventions

### Project Structure

```
fitvire-web-admin/
│
├── src/
│   ├── core/                           # Core infrastructure
│   │   ├── api/                       # HTTP client & interceptors
│   │   └── config/                    # Environment configuration
│   │
│   ├── domains/                       # Domain-driven structure
│   │   ├── shared/                    # Cross-domain resources
│   │   │   ├── components/           # Reusable UI components
│   │   │   │   ├── ui/              # Basic UI elements
│   │   │   │   ├── forms/           # Form components
│   │   │   │   ├── data/            # Data display
│   │   │   │   ├── navigation/      # Navigation components
│   │   │   │   ├── feedback/        # User feedback
│   │   │   │   ├── media/           # Media handling
│   │   │   │   ├── charts/          # Data visualization
│   │   │   │   ├── layout/          # Page layouts
│   │   │   │   └── utility/         # Utility components
│   │   │   ├── hooks/               # Reusable hooks
│   │   │   ├── services/            # API services
│   │   │   ├── stores/              # Global state
│   │   │   ├── types/               # Shared types
│   │   │   └── pages/               # Top-level pages
│   │   │
│   │   ├── management/              # Platform administration
│   │   ├── customers/               # Customer management
│   │   └── partners/                # Partner management
│   │
│   ├── App.tsx                       # Root component
│   ├── AppRouter.tsx                 # Route configuration
│   └── main.tsx                      # Application entry
│
├── docs/                             # Documentation
│   └── AUTH_GUIDE.md                # Complete guide (this file)
│
├── .env.example                      # Environment template
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── vite.config.ts                    # Vite configuration
└── README.md                         # Project overview
```

---

## 🗄️ State Management Patterns

### Zustand for Client State

```typescript
// stores/uiStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  // State
  theme: 'light' | 'dark';
  sidebarCollapsed: boolean;
  
  // Actions
  setTheme: (theme: 'light' | 'dark') => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      // Initial state
      theme: 'dark',
      sidebarCollapsed: false,
      
      // Actions
      setTheme: (theme) => set({ theme }),
      toggleSidebar: () => set((state) => ({ 
        sidebarCollapsed: !state.sidebarCollapsed 
      })),
    }),
    {
      name: 'ui-storage',
    }
  )
);
```

### React Query for Server State

```typescript
// hooks/useCustomers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { customerService } from '../services/customerService';

export const useCustomers = () => {
  const queryClient = useQueryClient();
  
  // Fetch customers
  const { data, isLoading, error } = useQuery({
    queryKey: ['customers'],
    queryFn: customerService.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,   // 10 minutes
  });
  
  // Create customer
  const createMutation = useMutation({
    mutationFn: customerService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
  
  return {
    customers: data,
    isLoading,
    error,
    createCustomer: createMutation.mutate,
  };
};
```

### React Hook Form for Form State

```typescript
// components/CustomerForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zod schema
const customerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
});

type CustomerFormData = z.infer<typeof customerSchema>;

export const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
  });
  
  const onSubmit = async (data: CustomerFormData) => {
    // Handle submission
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
};
```

---

## 🧪 Testing Strategy

### Unit Testing (Vitest)

**Component Testing:**
```typescript
// components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
  
  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('applies variant styles', () => {
    render(<Button variant="primary">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
  });
});
```

**Hook Testing:**
```typescript
// hooks/useCustomers.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCustomers } from './useCustomers';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

describe('useCustomers', () => {
  it('fetches customers', async () => {
    const { result } = renderHook(() => useCustomers(), {
      wrapper: createWrapper(),
    });
    
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.customers).toBeDefined();
  });
});
```

### Integration Testing

Test API service layer integration, complete user journey testing, error handling and edge case scenarios, and protected routes with role-based access validation.

### E2E Testing (Playwright)

Complete user journeys, cross-browser testing, visual regression testing, and performance monitoring.

### Quality Gates

- Pre-commit hooks run linting and formatting
- CI/CD pipeline runs all tests
- Type checking with TypeScript strict mode
- Bundle size monitoring

---

## 🚀 Deployment

### Build Configuration

#### Development
```bash
npm run dev
# Hot reload, source maps, verbose logging
```

#### Staging
```bash
npm run build:staging
# Production build with development features
```

#### Production
```bash
npm run build
# Optimized build, tree-shaking, minification
```

### Deployment Environments

#### Development Environment
- **URL**: https://dev-manage.fitvire.com
- **Deployment**: Automatic on `dev` branch push
- **Features**: Debug tools, hot reload, verbose logging

#### Staging Environment
- **URL**: https://staging-manage.fitvire.com
- **Deployment**: Manual trigger from `staging` branch
- **Features**: Production-like config, performance monitoring

#### Production Environment
- **URL**: https://manage.fitvire.com
- **Deployment**: Automated release pipeline with approval
- **Features**: CDN distribution, error tracking, analytics

### Infrastructure
- **Platform**: Cloudflare Pages
- **CDN**: Cloudflare global network
- **Security**: WAF, DDoS mitigation, SSL/TLS
- **Monitoring**: Uptime monitoring, incident alerting

---

## ⚡ Performance Optimization

### Bundle Optimization

- **Code Splitting**: Route-based and component-based lazy loading
- **Tree Shaking**: ES modules for optimal dead code elimination
- **Dynamic Imports**: Load heavy dependencies on demand
- **Asset Optimization**: Image compression and WebP conversion
- **CDN Integration**: Static asset delivery through CloudFlare

### Runtime Performance

- **Virtual Scrolling**: Handle large datasets without DOM bloat
- **Memoization**: React.memo and useMemo for expensive calculations
- **Debounced Inputs**: Reduce API calls for search and filters
- **Background Updates**: React Query background synchronization

### Memory Management

- Clean up event listeners and subscriptions properly
- Cancel pending API requests on component unmount
- Manage WebSocket connections with proper lifecycle handling

---

## 🎯 Future Enhancements

### Planned Features

- [ ] **OAuth Integration** - Google, Microsoft SSO
- [ ] **Multi-Factor Authentication** - TOTP, SMS, Hardware keys
- [ ] **Biometric Authentication** - Face ID, Touch ID for mobile admin
- [ ] **Device Management** - Trusted devices, concurrent session limits
- [ ] **Advanced Audit Logging** - Comprehensive security event tracking
- [ ] **Rate Limiting** - Client-side request throttling
- [ ] **Session Analytics** - User activity patterns and insights
- [ ] **Password-less Login** - Magic links, WebAuthn support
- [ ] **Remember Device** - Skip 2FA on trusted devices
- [ ] **Security Notifications** - Email alerts for suspicious activities

---

## 📝 Change Log

### Version 1.0.0 (September 30, 2025)
- ✅ Initial JWT authentication implementation
- ✅ Token refresh mechanism
- ✅ Role-based access control
- ✅ Password management (forgot/reset/change)
- ✅ Email verification workflow
- ✅ Session validation
- ✅ Development test login
- ✅ Comprehensive documentation

---

## 🤝 Contributing

When contributing to authentication code:

1. **Security First** - All security-related changes require thorough review
2. **Test Coverage** - Maintain 85%+ test coverage for auth code
3. **Documentation** - Update this guide for any auth changes
4. **Backward Compatibility** - Don't break existing auth flows
5. **TODO Comments** - Mark incomplete features clearly

---

## 📞 Support

For authentication-related issues:

1. Check this guide first
2. Review error messages in debug mode
3. Check browser console for detailed logs
4. Contact development team: support@fitvire.com

---

**Built with security and user experience in mind by the FitVire Development Team** 🔒

*Secure, scalable authentication for modern web applications* 🚀
