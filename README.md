# FitVire Web Admin
## Administrative Dashboard for Fitness Platform Management 🏢

[![React Version](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.6-green.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-blue.svg)](https://tailwindcss.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

**FitVire Web Admin** is a modern administrative dashboard built with clean architecture principles, domain-driven design, and modern React patterns. Designed for scalability, maintainability, and developer experience in managing the FitVire fitness marketplace ecosystem.

### 🎯 **Core Philosophy**
- **Domain-Driven Design**: Clear separation of business concerns with explicit domain boundaries
- **Clean Architecture**: Dependency inversion with infrastructure isolation from business logic
- **Scalable Patterns**: SOLID principles with composition over inheritance
- **Type Safety**: End-to-end TypeScript with comprehensive interface contracts
- **Performance First**: Optimized bundles, lazy loading, and efficient state management

---

## 🏗️ **Architecture Overview**

### **Clean Architecture Layers**

**FitVire Web Admin** implements a clean, four-layer architecture with explicit separation of concerns:

- **Presentation Layer**: React components, Zustand stores for UI state, and React Query for server state management
- **Application Layer**: Custom hooks for business logic, service layer for API communication, and event handlers for user interactions
- **Domain Layer**: Core business rules and entities, domain models with validation, and use cases with business policies
- **Infrastructure Layer**: HTTP client configuration, local storage management, and external API integrations

## 📁 **Detailed Project Structure**

```
fitvire-web-admin/
│
├── 📁 public/                                    # Static assets served directly
│
├── 📁 src/                                      # Main source code directory
│   │
│   ├── 📁 assets/                               # Build-time assets
│   │   ├── 📁 icons/                           # SVG icons and graphics
│   │   │
│   │   ├── 📁 images/                          # Optimized images
│   │   │
│   │   └── 📁 fonts/                           # Custom font files
│   │
│   ├── 📁 domains/                              # Domain-driven business logic
│   │   │
│   │   ├── 📁 shared/                          # Cross-domain shared resources
│   │   │   ├── 📁 components/                  # Reusable UI components
│   │   │   │   ├── 📁 ui/                      # Basic UI elements
│   │   │   │   │   ├── 🧩 Button.tsx           # Polymorphic button component
│   │   │   │   │   ├── 🧩 Input.tsx            # Form input with validation
│   │   │   │   │   ├── 🧩 Badge.tsx            # Status and category badges
│   │   │   │   │   ├── 🧩 Avatar.tsx           # User avatar component
│   │   │   │   │   ├── 🧩 Spinner.tsx          # Loading spinner
│   │   │   │   │   ├── 🧩 Tooltip.tsx          # Hover tooltip component
│   │   │   │   │   ├── 🧩 Card.tsx             # Container card component
│   │   │   │   │   └── 🧩 Divider.tsx          # Content separator
│   │   │   │   │
│   │   │   │   ├── 📁 forms/                   # Form-related components
│   │   │   │   │   ├── 🧩 FormField.tsx        # Input + Label + Error
│   │   │   │   │   ├── 🧩 SearchBox.tsx        # Search input with icon
│   │   │   │   │   ├── 🧩 Select.tsx           # Dropdown select component
│   │   │   │   │   ├── 🧩 Checkbox.tsx         # Checkbox input
│   │   │   │   │   ├── 🧩 RadioGroup.tsx       # Radio button group
│   │   │   │   │   └── 🧩 DatePicker.tsx       # Date selection input
│   │   │   │   │
│   │   │   │   ├── 📁 data/                    # Data display components
│   │   │   │   │   ├── 🧩 DataTable.tsx        # Sortable, filterable table
│   │   │   │   │   ├── 🧩 DataCard.tsx         # Metric display card
│   │   │   │   │   ├── 🧩 StatusIndicator.tsx  # Online/offline status
│   │   │   │   │   ├── 🧩 ProgressBar.tsx      # Progress indicator
│   │   │   │   │   ├── 🧩 StatCard.tsx         # Statistics display card
│   │   │   │   │   └── 🧩 EmptyState.tsx       # No data placeholder
│   │   │   │   │
│   │   │   │   ├── 📁 navigation/              # Navigation components
│   │   │   │   │   ├── 🧩 Sidebar.tsx          # Navigation sidebar
│   │   │   │   │   ├── 🧩 Header.tsx           # Top navigation header
│   │   │   │   │   ├── 🧩 Breadcrumb.tsx       # Navigation breadcrumb
│   │   │   │   │   ├── 🧩 TabsContainer.tsx    # Tab navigation
│   │   │   │   │   └── 🧩 Pagination.tsx       # Table pagination
│   │   │   │   │
│   │   │   │   ├── 📁 feedback/                # User feedback components
│   │   │   │   │   ├── 🧩 Modal.tsx            # Full-featured modal
│   │   │   │   │   ├── 🧩 ConfirmDialog.tsx    # Confirmation modal
│   │   │   │   │   ├── 🧩 Toast.tsx            # Toast notification
│   │   │   │   │   ├── 🧩 Alert.tsx            # Alert message
│   │   │   │   │   └── 🧩 LoadingOverlay.tsx   # Loading state overlay
│   │   │   │   │
│   │   │   │   ├── 📁 media/                   # Media handling components
│   │   │   │   │   ├── 🧩 FileUploader.tsx     # Drag-drop file upload
│   │   │   │   │   ├── 🧩 ImagePreview.tsx     # Image display component
│   │   │   │   │   └── 🧩 MediaGallery.tsx     # Media gallery viewer
│   │   │   │   │
│   │   │   │   ├── 📁 charts/                  # Chart and visualization
│   │   │   │   │   ├── 🧩 ChartContainer.tsx   # Chart wrapper component
│   │   │   │   │   ├── 🧩 LineChart.tsx        # Line chart component
│   │   │   │   │   ├── 🧩 BarChart.tsx         # Bar chart component
│   │   │   │   │   └── 🧩 PieChart.tsx         # Pie chart component
│   │   │   │   │
│   │   │   │   ├── 📁 layout/                  # Layout components
│   │   │   │   │   ├── 🧩 DashboardLayout.tsx  # Main dashboard layout
│   │   │   │   │   ├── 🧩 AuthLayout.tsx       # Authentication layout
│   │   │   │   │   ├── 🧩 ErrorLayout.tsx      # Error page layout
│   │   │   │   │   ├── 🧩 PageHeader.tsx       # Page title & actions
│   │   │   │   │   └── 🧩 ContentWrapper.tsx   # Main content container
│   │   │   │   │
│   │   │   │   └── 📁 utility/                 # Utility components
│   │   │   │       ├── 🧩 ActionMenu.tsx       # Dropdown action menu
│   │   │   │       ├── 🧩 CopyButton.tsx       # Copy to clipboard
│   │   │   │       ├── 🧩 ExportButton.tsx     # Data export functionality
│   │   │   │       └── 🧩 RefreshButton.tsx    # Data refresh trigger
│   │   │   │
│   │   │   ├── 📁 pages/                       # Top-level page components
│   │   │   │   ├── 📄 LoginPage.tsx            # Authentication login page
│   │   │   │   ├── 📄 DashboardPage.tsx        # Main dashboard overview
│   │   │   │   ├── 📄 NotFoundPage.tsx         # 404 error page
│   │   │   │   ├── 📄 UnauthorizedPage.tsx     # 403 access denied page
│   │   │   │   ├── 📄 ServerErrorPage.tsx      # 500 server error page
│   │   │   │   └── 📄 MaintenancePage.tsx      # Maintenance mode page
│   │   │   │
│   │   │   ├── 📁 hooks/                       # Reusable business logic
│   │   │   │   ├── 🪝 useDebounce.ts           # Debounced value hook
│   │   │   │   ├── 🪝 useLocalStorage.ts       # Persistent local state
│   │   │   │   ├── 🪝 useMediaQuery.ts         # Responsive design queries
│   │   │   │   ├── 🪝 usePermissions.ts        # User permission checks
│   │   │   │   ├── 🪝 useToast.ts              # Toast notification system
│   │   │   │   ├── 🪝 usePagination.ts         # Table pagination logic
│   │   │   │   └── 🪝 useAsyncOperation.ts     # Async operation states
│   │   │   │
│   │   │   ├── 📁 services/                    # Cross-domain utilities
│   │   │   │   ├── 🛠️ api.ts                   # Axios HTTP client setup
│   │   │   │   ├── 🛠️ storage.ts               # Local storage utilities
│   │   │   │   ├── 🛠️ validation.ts           # Zod schema utilities
│   │   │   │   ├── 🛠️ formatting.ts           # Data formatting helpers
│   │   │   │   ├── 🛠️ constants.ts            # Application constants
│   │   │   │   └── 🛠️ utils.ts                # General utility functions
│   │   │   │
│   │   │   ├── 📁 types/                       # Shared type definitions
│   │   │   │   ├── 📝 api.ts                   # HTTP response interfaces
│   │   │   │   ├── 📝 common.ts                # Common types and enums
│   │   │   │   ├── 📝 events.ts                # Event system types
│   │   │   │   ├── 📝 ui.ts                    # UI component prop types
│   │   │   │   └── 📝 permissions.ts           # Permission system types
│   │   │   │
│   │   │   └── 📁 stores/                      # Global application state
│   │   │       ├── 🏪 authStore.ts             # Authentication state
│   │   │       ├── 🏪 uiStore.ts               # UI theme and preferences
│   │   │       ├── 🏪 notificationStore.ts     # Toast notifications
│   │   │       └── 🏪 sidebarStore.ts          # Sidebar collapse state
│   │   │
│   │   ├── 📁 management/                      # Platform administration domain
│   │   │   ├── 📁 components/                  # Management UI components
│   │   │   │   ├── 🧩 SystemMetricsDashboard.tsx    # Real-time system stats
│   │   │   │   ├── 🧩 StaffUserTable.tsx             # Staff user management
│   │   │   │   ├── 🧩 PlatformMonitoringPanel.tsx   # System health monitoring
│   │   │   │   ├── 🧩 AuditLogViewer.tsx             # Audit trail interface
│   │   │   │   ├── 🧩 FeatureToggleManager.tsx      # Feature flag controls
│   │   │   │   └── 🧩 SystemConfigPanel.tsx         # Configuration management
│   │   │   │
│   │   │   ├── 📁 hooks/                       # Management business logic
│   │   │   │   ├── 🪝 useSystemMetrics.ts            # Real-time system data
│   │   │   │   ├── 🪝 useAuditLogs.ts                # Audit trail management
│   │   │   │   ├── 🪝 useFeatureFlags.ts             # Feature toggle hooks
│   │   │   │   ├── 🪝 useStaffManagement.ts          # Staff CRUD operations
│   │   │   │   └── 🪝 useSystemHealth.ts             # Health monitoring
│   │   │   │
│   │   │   ├── 📁 pages/                       # Management page components
│   │   │   │   ├── 📄 DashboardPage.tsx              # Management dashboard
│   │   │   │   ├── 📄 StaffManagementPage.tsx        # Staff administration
│   │   │   │   ├── 📄 SystemMonitoringPage.tsx       # System monitoring
│   │   │   │   ├── 📄 AuditLogsPage.tsx              # Audit log viewer
│   │   │   │   ├── 📄 FeatureFlagsPage.tsx           # Feature management
│   │   │   │   └── 📄 SystemConfigPage.tsx           # System configuration
│   │   │   │
│   │   │   ├── 📁 services/                    # Management API services
│   │   │   │   ├── 🛠️ managementApi.ts               # Management endpoints
│   │   │   │   ├── 🛠️ auditService.ts                # Audit log services
│   │   │   │   ├── 🛠️ systemConfigService.ts         # Configuration API
│   │   │   │   ├── 🛠️ featureFlagService.ts          # Feature flag API
│   │   │   │   └── 🛠️ healthCheckService.ts          # System health API
│   │   │   │
│   │   │   ├── 📁 stores/                      # Management state
│   │   │   │   ├── 🏪 managementStore.ts              # Dashboard state
│   │   │   │   ├── 🏪 auditLogStore.ts               # Audit log state
│   │   │   │   └── 🏪 systemConfigStore.ts           # Config state
│   │   │   │
│   │   │   └── 📁 types/                       # Management types
│   │   │       ├── 📝 management.ts                  # Management entities
│   │   │       ├── 📝 audit.ts                       # Audit log types
│   │   │       ├── 📝 systemConfig.ts                # Config types
│   │   │       └── 📝 metrics.ts                     # Metrics types
│   │   │
│   │   ├── 📁 customers/                       # Customer lifecycle management
│   │   │   ├── 📁 components/                  # Customer UI components
│   │   │   │   ├── 🧩 CustomerProfileCard.tsx        # Customer details view
│   │   │   │   ├── 🧩 CustomerTable.tsx              # Customer listing table
│   │   │   │   ├── 🧩 BookingTimeline.tsx            # Customer booking history
│   │   │   │   ├── 🧩 SupportTicketPanel.tsx         # Support ticket interface
│   │   │   │   ├── 🧩 CustomerAnalytics.tsx          # Customer insights
│   │   │   │   └── 🧩 CustomerFormModal.tsx          # Customer edit modal
│   │   │   │
│   │   │   ├── 📁 hooks/                       # Customer business logic
│   │   │   │   ├── 🪝 useCustomers.ts                # Customer CRUD operations
│   │   │   │   ├── 🪝 useCustomerBookings.ts         # Booking management
│   │   │   │   ├── 🪝 useSupportTickets.ts           # Support ticket handling
│   │   │   │   ├── 🪝 useCustomerAnalytics.ts        # Customer insights
│   │   │   │   └── 🪝 useCustomerSearch.ts           # Advanced search
│   │   │   │
│   │   │   ├── 📁 pages/                       # Customer page components
│   │   │   │   ├── 📄 CustomersListPage.tsx          # Customer listing
│   │   │   │   ├── 📄 CustomerDetailPage.tsx         # Customer profile
│   │   │   │   ├── 📄 CustomerBookingsPage.tsx       # Booking management
│   │   │   │   ├── 📄 CustomerSupportPage.tsx        # Support dashboard
│   │   │   │   └── 📄 CustomerAnalyticsPage.tsx      # Customer analytics
│   │   │   │
│   │   │   ├── 📁 services/                    # Customer API services
│   │   │   │   ├── 🛠️ customerApi.ts                 # Customer endpoints
│   │   │   │   ├── 🛠️ bookingService.ts              # Booking operations
│   │   │   │   ├── 🛠️ supportService.ts              # Support ticketing
│   │   │   │   └── 🛠️ customerAnalyticsService.ts    # Analytics API
│   │   │   │
│   │   │   ├── 📁 stores/                      # Customer state
│   │   │   │   ├── 🏪 customerStore.ts               # Customer management state
│   │   │   │   ├── 🏪 bookingStore.ts                # Booking state
│   │   │   │   └── 🏪 supportStore.ts                # Support dashboard state
│   │   │   │
│   │   │   └── 📁 types/                       # Customer types
│   │   │       ├── 📝 customer.ts                    # Customer entities
│   │   │       ├── 📝 booking.ts                     # Booking types
│   │   │       ├── 📝 support.ts                     # Support ticket types
│   │   │       └── 📝 analytics.ts                   # Analytics types
│   │   │
│   │   └── 📁 partners/                        # Partner ecosystem management
│   │       ├── 📁 components/                  # Partner UI components
│   │       │   ├── 🧩 PartnerApprovalTable.tsx       # Partner approval workflow
│   │       │   ├── 🧩 GymManagementPanel.tsx         # Gym partner management
│   │       │   ├── 🧩 TrainerProfileCard.tsx         # Trainer details view
│   │       │   ├── 🧩 ServiceOfferingManager.tsx     # Service catalog management
│   │       │   ├── 🧩 CommissionTracker.tsx          # Revenue/payout tracking
│   │       │   └── 🧩 PartnerAnalytics.tsx           # Partner performance
│   │       │
│   │       ├── 📁 hooks/                       # Partner business logic
│   │       │   ├── 🪝 usePartners.ts                 # Partner CRUD operations
│   │       │   ├── 🪝 usePartnerApproval.ts          # Approval workflows
│   │       │   ├── 🪝 useServiceManagement.ts        # Service offerings
│   │       │   ├── 🪝 useCommissionTracking.ts       # Financial tracking
│   │       │   └── 🪝 usePartnerAnalytics.ts         # Partner insights
│   │       │
│   │       ├── 📁 pages/                       # Partner page components
│   │       │   ├── 📄 PartnersListPage.tsx           # Partner listing
│   │       │   ├── 📄 PartnerDetailPage.tsx          # Partner profile
│   │       │   ├── 📄 GymManagementPage.tsx          # Gym management
│   │       │   ├── 📄 TrainerManagementPage.tsx      # Trainer management
│   │       │   ├── 📄 ServiceManagementPage.tsx      # Service catalog
│   │       │   ├── 📄 CommissionDashboardPage.tsx    # Financial dashboard
│   │       │   └── 📄 PartnerAnalyticsPage.tsx       # Partner analytics
│   │       │
│   │       ├── 📁 services/                    # Partner API services
│   │       │   ├── 🛠️ partnerApi.ts                  # Partner endpoints
│   │       │   ├── 🛠️ gymService.ts                  # Gym management API
│   │       │   ├── 🛠️ trainerService.ts              # Trainer management API
│   │       │   ├── 🛠️ serviceOfferingService.ts      # Service catalog API
│   │       │   ├── 🛠️ commissionService.ts           # Commission tracking API
│   │       │   └── 🛠️ partnerAnalyticsService.ts     # Analytics API
│   │       │
│   │       ├── 📁 stores/                      # Partner state
│   │       │   ├── 🏪 partnerStore.ts                # Partner management state
│   │       │   ├── 🏪 approvalStore.ts               # Approval workflow state
│   │       │   ├── 🏪 serviceStore.ts                # Service management state
│   │       │   └── 🏪 commissionStore.ts             # Commission tracking state
│   │       │
│   │       └── 📁 types/                       # Partner types
│   │           ├── 📝 partner.ts                     # Partner entities
│   │           ├── 📝 gym.ts                         # Gym management types
│   │           ├── 📝 trainer.ts                     # Trainer types
│   │           ├── 📝 service.ts                     # Service offering types
│   │           ├── 📝 commission.ts                  # Financial types
│   │           └── 📝 analytics.ts                   # Analytics types
│   │
│   ├── 📁 core/                                 # Core application infrastructure
│   │   ├── 📁 api/                             # HTTP communication layer
│   │   │   ├── 🛠️ client.ts                    # Axios instance configuration
│   │   │   ├── 🛠️ interceptors.ts              # Request/response middleware
│   │   │   ├── 🛠️ endpoints.ts                # API endpoint constants
│   │   │   └── 📝 types.ts                     # API contract types
│   │   │
│   │   ├── 📁 auth/                            # Authentication system
│   │   │   ├── 🛡️ AuthContext.tsx              # Authentication context
│   │   │   ├── 🛡️ ProtectedRoute.tsx           # Route protection component
│   │   │   ├── 🛡️ authService.ts               # JWT token management
│   │   │   ├── 🛡️ permissions.ts               # Role-based access control
│   │   │   └── 📝 types.ts                     # Auth-related types
│   │   │
│   │   ├── 📁 config/                          # Application configuration
│   │   │   ├── ⚙️ environment.ts               # Environment variables
│   │   │   ├── ⚙️ constants.ts                 # Application constants
│   │   │   ├── ⚙️ theme.ts                     # Design system tokens
│   │   │   └── ⚙️ features.ts                  # Feature flags
│   │   │
│   │   ├── 📁 providers/                       # Context providers setup
│   │   │   ├── 🔧 QueryProvider.tsx            # React Query configuration
│   │   │   ├── 🔧 ThemeProvider.tsx            # Theme context setup
│   │   │   ├── 🔧 ErrorProvider.tsx            # Global error handling
│   │   │   └── 🔧 AppProviders.tsx             # All providers wrapper
│   │   │
│   │   └── 📁 routing/                         # Application routing
│   │       ├── 🛣️ AppRouter.tsx                # Main router configuration
│   │       ├── 🛣️ routes.ts                    # Route definitions
│   │       ├── 🛣️ routeGuards.ts               # Navigation guards
│   │       └── 🛣️ lazyRoutes.ts                # Code splitting utilities
│   │
│   ├── 📁 styles/                              # Global styling
│   │   └── 🎨 globals.css                      # Global CSS styles
│   │
│   ├── 🚀 main.tsx                             # React application entry point
│   └──📱 App.tsx                              # Root application component
│
├── 📁 docs/                                   # Project documentation
│
├── 📄 README.md                               # Project documentation
└── 📄 LICENSE                                 # Project license
```

### **Domain Boundaries & Responsibilities**

#### **🔄 Shared Domain** (Cross-Domain Infrastructure)
**Purpose**: Provides foundational components and utilities used across all domains

**Domain Structure**: The shared domain contains atomic design components including polymorphic buttons with variants, form inputs with validation states, portal-based modal systems, and virtualized tables with sorting and filtering. It includes reusable business logic through custom hooks for debounced values, persistent local state, and responsive design queries. Cross-domain utilities provide Axios instances with interceptors, Zod schema utilities, and data formatting functions. Shared type definitions include HTTP response interfaces, common enums and types, and event system types. Global application state management covers authentication state, UI theme management, and toast notifications.

#### **👨‍💼 Management Domain** (Platform Administration)
**Purpose**: Internal FitVire staff operations and system administration

**Domain Structure**: Management components include system metrics dashboards, staff user administration interfaces, and platform monitoring tools. Custom hooks provide real-time system statistics, compliance tracking through audit logs, and feature toggle management. API services handle management-specific endpoints, audit trail services, and system configuration management. TypeScript interfaces define management entity types, audit log structures, and system configuration objects. State management covers management dashboard state and audit log tracking.

#### **👥 Customer Domain** (Customer Lifecycle Management)  
**Purpose**: Customer account management, support, and engagement analytics

**Domain Structure**: Customer components include detailed customer profile views, booking timeline interfaces, and customer support ticket systems. Custom hooks manage customer CRUD operations, booking management workflows, and support ticket handling. API services provide customer management endpoints, booking operation handlers, and support ticketing systems. TypeScript definitions cover customer entity types, booking-related interfaces, and support ticket structures. State management includes customer management state and support dashboard tracking.

#### **🏪 Partner Domain** (Partner Ecosystem Management)
**Purpose**: Gym, trainer, and sports center partnership management

**Domain Structure**: Partner components feature approval workflow interfaces, service offering management tools, and revenue/payout tracking systems. Custom hooks handle partner CRUD operations, service management workflows, and financial tracking. API services include partner management endpoints, service catalog APIs, and commission calculation services. TypeScript interfaces define partner entity types, service offering structures, and financial transaction types. State management covers partner management state and commission tracking systems.

### **Core Application Infrastructure**

#### **Core Services Architecture**
The core infrastructure includes HTTP communication layer with Axios instance configuration, request/response middleware, API endpoint constants, and API contract types. Authentication system provides authentication context, route protection, JWT token management, and role-based access control. Application routing includes main router configuration, route definitions, navigation guards, and code splitting utilities. Configuration management handles environment variables, application constants, design system tokens, and feature flags. Context providers setup React Query, theme context, and global error handling.

#### **Architecture Benefits**
The domain-driven structure promotes code organization with clear separation of concerns, improved maintainability through isolated business logic, enhanced testability with focused unit tests, scalable development allowing teams to work on different domains independently, and reusable components across the application.

---

## 🎯 **Design Patterns & Best Practices**

### **Clean Architecture Principles**

#### **Dependency Inversion**
- **High-level modules**: Domain entities and business rules don't depend on low-level implementation details
- **Abstraction layers**: Interfaces define contracts between layers, enabling easy testing and maintenance
- **Infrastructure isolation**: Database, HTTP clients, and external services are abstracted behind interfaces

#### **Single Responsibility Principle**
- **Component focus**: Each component has one reason to change
- **Service specialization**: API services handle only HTTP communication
- **Hook isolation**: Custom hooks encapsulate single pieces of business logic

#### **Domain-Driven Design**
- **Ubiquitous language**: Business terminology consistent between code and stakeholders
- **Bounded contexts**: Clear domain boundaries prevent feature creep
- **Aggregate roots**: Domain entities maintain consistency within their boundaries

### **State Management Architecture**

#### **State Separation Strategy**
The application uses a clear separation of state types: Client State managed by Zustand for UI theme, sidebar collapsed state, and notifications; Server State managed by React Query for API data with loading states, error handling, and refetch capabilities; Form State handled by React Hook Form for input registration, form submission, and validation state management.

#### **State Management Boundaries**
- **Global UI State**: Theme, navigation, notifications (Zustand)
- **Server State**: API data, caching, synchronization (React Query)  
- **Form State**: Input validation, submission handling (React Hook Form)
- **Local State**: Component-specific state (useState/useReducer)

### **Component Architecture Patterns**

#### **Atomic Design Implementation**
Components are organized following atomic design principles with Atoms as basic UI elements like buttons with variants and sizes, Molecules as component combinations like form fields with labels and validation, Organisms as complex components like customer tables with sorting and filtering, Templates as page layouts with sidebar and header components, and Pages as complete views like customer list pages.

#### **Composition Patterns**
- **Render Props**: Complex logic sharing without higher-order components
- **Custom Hooks**: Business logic extraction with reusability
- **Context Providers**: Cross-component data sharing with minimal prop drilling
- **Polymorphic Components**: Flexible component APIs with TypeScript generics

### **Data Flow Architecture**

#### **Unidirectional Data Flow**
The application follows a clear data flow pattern where user actions trigger service layer calls, which update state through React Query, automatically causing UI re-renders with user feedback through toast notifications.

#### **Error Boundary Strategy**
- **Global Error Handling**: Application-level error boundary for unexpected errors
- **Domain Error Handling**: Domain-specific error handling with user-friendly messages
- **API Error Handling**: HTTP error interception with automatic retry logic
- **Form Error Handling**: Real-time validation with accessibility support

### **Security Architecture**

#### **Authentication Flow**
The JWT token management system maintains user authentication state with access tokens, refresh tokens, and permissions. Route protection ensures components require specific permissions with fallback to unauthorized pages.

#### **Permission-Based Access Control**
- **Role-Based Permissions**: Hierarchical permission system (Admin → Manager → Viewer)
- **Feature-Level Authorization**: Granular permissions for specific features
- **Data-Level Security**: Row-level security for multi-tenant data access
- **API Security**: JWT token validation with automatic refresh

### **Performance Optimization**

#### **Code Splitting Strategy**
Route-based splitting loads customer and partner management on demand. Component-based splitting loads data visualization libraries when needed.

#### **Bundle Optimization**
- **Tree Shaking**: ES modules for optimal dead code elimination
- **Dynamic Imports**: Load heavy dependencies on demand
- **Asset Optimization**: Image compression and WebP conversion
- **CDN Integration**: Static asset delivery through CloudFlare

#### **Runtime Performance**
- **Virtual Scrolling**: Handle large datasets without DOM bloat
- **Memoization**: React.memo and useMemo for expensive calculations
- **Debounced Inputs**: Reduce API calls for search and filters
- **Background Updates**: React Query background synchronization

---

## 🛠️ **Technology Stack & Architecture**

### **Core Framework & Runtime**
- **⚛️ React 19.1.1** - Latest React with concurrent features, automatic batching, and improved hydration
- **🔧 TypeScript 5.8.3** - Advanced type system with strict mode, comprehensive interface contracts
- **⚡ Vite 7.1.6** - Next-generation build tool with lightning-fast HMR and optimized bundling
- **🎨 Tailwind CSS 4.1.13** - Utility-first CSS framework with CSS-in-JS engine for production performance

### **State Management & Data Layer**
- **🏪 Zustand 5.0.8** - Lightweight (2kb) state management with TypeScript-first API and persistence
- **🔄 TanStack React Query 5.89.0** - Server state management with intelligent caching, background updates, and optimistic updates
- **📡 Axios 1.12.2** - Promise-based HTTP client with comprehensive interceptors and request/response transformation
- **🗄️ React Hook Form 7.62.0** - High-performance forms with minimal re-renders and comprehensive validation

### **UI & User Experience**
- **🎭 Framer Motion 12.23.15** - Production-ready motion library for fluid animations and gesture handling
- **✅ Zod 4.1.9** - TypeScript-first schema validation with runtime safety and type inference
- **📝 Hookform Resolvers 5.2.2** - Seamless integration between React Hook Form and validation libraries
- **🎛️ Lucide React 0.544.0** - Beautiful, consistent icon library with 1000+ SVG icons

### **Data Visualization & Analytics**
- **📊 Chart.js 5.7.14** - Flexible, responsive charting library with Canvas rendering for performance
- **📈 React Chart.js 2 7.7.3** - React wrapper for Chart.js with component-based API
- **📉 Recharts 3.13.4** - Composable charting library built specifically for React applications

### **Development & Code Quality**
- **🔍 ESLint 9.20.0** - Advanced linting with TypeScript rules and React best practices
- **💅 Prettier 4.0.5** - Consistent code formatting with Tailwind CSS class sorting
- **🐕 Husky 10.6.11** - Git hooks for automated quality checks and commit standards
- **🧪 Vitest 2.1.4** - Fast unit testing framework with native TypeScript support
- **🎭 Playwright 1.49.0** - End-to-end testing with cross-browser automation

### **Routing & Navigation**
- **🛣️ React Router DOM 7.9.1** - Declarative routing with data loading and nested routes
- **📱 React Dropzone 14.3.8** - Drag-and-drop file upload with validation and preview
- **📅 date-fns 4.1.0** - Modern date utility library with tree-shaking support

---

## 🚀 **Quick Start Guide**

### **Prerequisites & Environment**

Required versions:
- Node.js: 18.0.0+
- npm: 9.0.0+
- Git: 2.34.0+

Recommended development tools:
- VS Code: Latest with TypeScript, ESLint, Prettier extensions

### **Installation & Setup**

1. Clone repository
2. Install dependencies with npm install
3. Configure environment by copying .env.example to .env.local and editing with your configuration
4. Start development server with npm run dev
5. Open in browser at http://localhost:5173

### **Environment Configuration**

Required Configuration:
- Application Identity: VITE_APP_NAME, VITE_APP_VERSION, VITE_APP_ENV
- API Configuration: VITE_API_BASE_URL, VITE_API_TIMEOUT, VITE_API_RETRY_ATTEMPTS
- Authentication: VITE_JWT_ACCESS_TOKEN_EXPIRY, VITE_JWT_REFRESH_TOKEN_EXPIRY, VITE_SESSION_TIMEOUT
- Feature Flags: VITE_ENABLE_ANALYTICS, VITE_ENABLE_ERROR_REPORTING, VITE_ENABLE_PERFORMANCE_MONITORING
- File Upload: VITE_MAX_FILE_SIZE, VITE_ALLOWED_FILE_TYPES
- External Services (Optional): VITE_GOOGLE_ANALYTICS_ID, VITE_SENTRY_DSN, VITE_MIXPANEL_PROJECT_TOKEN

### **Development Commands**

Development commands include npm run dev for development server with hot reload, npm run dev:host for network-accessible development server, and npm run dev:https for HTTPS development server.

Building commands include npm run build for optimized production build, npm run build:analyze for bundle analysis, and npm run preview for previewing production build locally.

Code quality commands include npm run lint for ESLint analysis with auto-fix, npm run type-check for TypeScript compilation verification, npm run format for Prettier code formatting, and npm run audit for security vulnerability scanning.

Testing commands include npm run test for unit tests with Vitest, npm run test:watch for tests in watch mode, npm run test:coverage for coverage reports, and npm run test:e2e for end-to-end tests with Playwright.

Utility commands include npm run clean for cleaning build artifacts, npm run deps:check for checking outdated dependencies, and npm run deps:update for updating dependencies to latest versions.

---

## 🎯 **Platform Features & Capabilities**

### **🏠 Executive Dashboard**
- **Real-time Metrics**: Live platform KPIs with WebSocket updates
- **Revenue Analytics**: Interactive charts with time-series data and trend analysis
- **User Activity Monitoring**: Customer engagement tracking and behavior analytics
- **System Health Indicators**: API response times, error rates, and uptime monitoring
- **Quick Action Center**: One-click access to critical administrative functions

### **👥 Advanced User Management**
- **Customer Lifecycle Management**: Complete customer journey tracking from registration to retention
- **Partner Onboarding Pipeline**: Streamlined approval workflow with automated verification
- **Role-Based Access Control**: Granular permissions with hierarchical role inheritance
- **Bulk Operations**: Mass updates, import/export, and batch processing capabilities
- **Audit Trail System**: Comprehensive activity logging for compliance and security

### **📊 Business Intelligence & Analytics**
- **Revenue Dashboard**: Multi-dimensional revenue analysis with custom date ranges
- **Customer Segmentation**: Advanced filtering and cohort analysis with behavioral insights
- **Partner Performance Tracking**: Commission calculations, payout management, and performance metrics
- **Custom Report Builder**: Drag-and-drop report creation with scheduled delivery
- **Data Export Hub**: Multiple format support (PDF, Excel, CSV) with automated generation

### **📝 Content & Platform Management**
- **Service Category Administration**: Hierarchical category management with SEO optimization
- **Media Library**: Centralized asset management with automatic image optimization
- **Promotional Campaign Tools**: Content scheduling, A/B testing, and performance tracking
- **SEO Management**: Meta tags, structured data, and search optimization tools
- **Content Approval Workflows**: Multi-stage approval process with reviewer assignment

### **⚙️ System Administration**
- **Feature Flag Management**: Real-time feature toggles with user segmentation
- **Configuration Panel**: Dynamic system settings without deployment requirements
- **Database Administration**: Query monitoring, performance optimization, and maintenance tools
- **API Rate Limiting**: Configurable throttling with usage analytics
- **Security Monitoring**: Threat detection, intrusion prevention, and incident response

### **🔒 Security & Compliance Framework**
- **Multi-Factor Authentication**: TOTP, SMS, and hardware key support
- **Session Management**: Concurrent session limits with device tracking
- **Data Privacy Controls**: GDPR compliance tools with automated data handling
- **Security Audit Logs**: Comprehensive logging with tamper-proof storage
- **Incident Response Dashboard**: Security event monitoring with automated alerting

---

## 📊 **Performance & Quality Standards**

### **Performance Benchmarks**
- **First Contentful Paint**: <1.2s (Excellent)
- **Largest Contentful Paint**: <2.0s (High-performance target)
- **Time to Interactive**: <2.8s (Responsive user experience)
- **Cumulative Layout Shift**: <0.1 (Stable visual experience)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

### **Code Quality Metrics**
- **TypeScript Coverage**: 100% (Strict mode enabled)
- **Test Coverage**: 85%+ (Unit, integration, and E2E tests)
- **Bundle Analysis**: Automated dependency tracking with size alerts
- **Performance Budgets**: CI/CD pipeline enforcement for bundle size limits
- **Accessibility Score**: WCAG 2.1 AA compliance (95%+)

---

## 🧪 **Testing & Quality Assurance**

### **Testing Strategy**

Unit Testing with Vitest and React Testing Library includes running all unit tests, watch mode for development, coverage report generation, and visual test runner interface.

Integration Testing covers API integration tests and custom hook testing.

End-to-End Testing with Playwright includes full user journey tests, E2E tests with browser UI, and visual regression testing.

Performance Testing includes Lighthouse performance audits and bundle size analysis.

### **Quality Gates**
- **Pre-commit Hooks**: ESLint, Prettier, TypeScript compilation, unit tests
- **CI/CD Pipeline**: Comprehensive testing, security scans, performance budgets
- **Code Review**: Mandatory peer review with architecture validation
- **Performance Monitoring**: Real-time performance tracking in production
- **Security Auditing**: Automated vulnerability scanning and dependency updates

---

## 🚀 **Deployment & DevOps**

### **Build Configuration**

Development Builds include development server with hot reload, network-accessible development server, and HTTPS development server.

Production Builds include optimized production build, bundle analysis with Rollup Analyzer, staging environment build, and preview production build locally.

Quality Assurance includes ESLint analysis with auto-fix, TypeScript compilation verification, Prettier code formatting, and security vulnerability scanning.

### **Deployment Environments**

#### **Development Environment**
- **Purpose**: Feature development and testing
- **Deployment**: Automatic on `dev` branch push
- **Features**: Debug tools, hot reload, verbose logging
- **URL**: https://dev-manage.fitvire.com

#### **Staging Environment**
- **Purpose**: Pre-production testing and QA validation
- **Deployment**: Manual trigger from `staging` branch
- **Features**: Production-like configuration, performance monitoring
- **URL**: https://staging-manage.fitvire.com

#### **Production Environment**
- **Purpose**: Live administrative dashboard for FitVire platform
- **Deployment**: Automated release pipeline with approval gates
- **Features**: CDN distribution, error tracking, performance analytics
- **URL**: https://manage.fitvire.com

### **Infrastructure & Hosting**
- **Primary Platform**: Cloudflare Pages with edge optimization
- **CDN**: Cloudflare global network with automatic image optimization
- **Security**: WAF protection, DDoS mitigation, SSL/TLS encryption
- **Monitoring**: Real-time uptime monitoring with incident alerting
- **Backup Strategy**: Multi-region redundancy with point-in-time recovery

---

## 🔧 **Development Guidelines**

### **Architecture Principles**
1. **Domain Isolation**: Clear boundaries between business domains
2. **Dependency Inversion**: Abstract external dependencies behind interfaces
3. **Single Responsibility**: Each component, hook, and service has one purpose
4. **Composition over Inheritance**: Favor composition patterns and custom hooks
5. **Type Safety**: Comprehensive TypeScript coverage with strict mode

### **Component Development Standards**

Components should follow a structured approach with comprehensive props interfaces including required props first, optional props with clear naming, style customization, and testing identifiers. Custom hooks should handle business logic with early returns for loading and error states. Main renders should include accessibility and testing considerations with proper ARIA labels and test IDs.

### **State Management Patterns**

State management should use clear interface definitions with state properties and actions with clear naming. Zustand stores should handle UI state management. React Query integration should handle API data with proper caching, stale time, garbage collection time, and retry logic.

### **API Service Architecture**

API services should follow a class-based pattern with dependency injection, async methods for HTTP operations, proper error handling, and consistent response types. Services should handle CRUD operations, filtering, pagination, and domain-specific business operations.

### **Testing Best Practices**

Component testing should verify user information display, wait for data loading, test user interactions, and check for proper DOM elements. Hook testing should verify data fetching, async operations, loading states, and error handling with proper mocking of API calls.

---

## 📄 **License & Legal**

**Private License** - This project is proprietary software owned by FitVire. All rights reserved. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

### **Intellectual Property**
- **Source Code**: Proprietary to FitVire with all rights reserved
- **Design Assets**: Protected under FitVire brand guidelines
- **Third-Party Licenses**: See LICENSES.md for dependency attributions
- **Contribution Agreement**: All contributors assign rights to FitVire

---

## �‍💻 Developer & Product Info

**Developer**: Absterco - [https://absterco.com](https://absterco.com)  
**Product**: FitVire Web Admin Dashboard  
**Contact**: support@fitvire.com

**About**: Modern administrative dashboard for fitness marketplace management built with React 19, TypeScript, and domain-driven architecture for scalable platform administration.

---

**Built with ❤️ and world-class engineering by the FitVire Development Team**

*Modern domain-driven architecture for scalable fitness platform management* 🚀