# 🚀 FitVire Web Admin - Project Instructions & Implementation Guide

## 📋 Project Overview

**FitVire Web Admin** is a modern React-based management dashboard for the FitVire fitness platform. Built with cutting-edge technologies and enterprise-grade architecture patterns, this application provides comprehensive administrative capabilities for managing users, partners, and platform operations.

### 🏗️ Architecture & Tech Stack

**Frontend Framework:**
- **React 19.1.1** - Latest React with concurrent rendering and automatic batching
- **TypeScript 5.8.3** - Strict type safety with advanced features
- **Vite 7.1.6** - Next-generation build tool with 10x faster HMR

**State Management:**
- **Zustand 5.0.8** - Lightweight state management (2KB vs Redux ~20KB)
- **React Query 5.89.0** - Server state management with automatic caching
- **React Hook Form 7.62.0** - Performance-focused forms with minimal re-renders

**Styling & UI:**
- **Tailwind CSS 4.1.13** - Utility-first CSS with modern engine
- **Framer Motion 12.23.15** - Production-ready animations
- **Lucide React 0.544.0** - Consistent icon library
- **Glass Morphism Design System** - Modern, translucent UI components

**Development Tools:**
- **ESLint + Prettier** - Code quality and formatting
- **Vitest** - Fast unit testing framework
- **TypeScript Strict Mode** - Maximum type safety
- **Husky + Lint-staged** - Pre-commit hooks

## 🎯 Current Implementation Status

### ✅ Completed Features

#### 1. **Core Architecture**
- ✅ Domain-driven design with `/src/domains/shared` structure
- ✅ Clean Architecture patterns with separation of concerns
- ✅ TypeScript strict mode configuration
- ✅ Environment-based configuration management
- ✅ Comprehensive error handling and logging

#### 2. **Authentication System**
- ✅ JWT-based authentication with secure token storage
- ✅ Role-based access control (SuperAdmin, Internal Staff)
- ✅ Permission-based authorization system
- ✅ Session management with automatic timeout
- ✅ Zustand store for client state management
- ✅ Token refresh capabilities (ready for backend integration)

#### 3. **UI Component System**
- ✅ Glass morphism design components (Button, Input, Card, Spinner)
- ✅ Responsive authentication layouts
- ✅ Form validation with Zod schema integration
- ✅ Loading states and error boundaries
- ✅ Consistent color palette and typography

#### 4. **Routing & Navigation**
- ✅ Protected route components with authentication guards
- ✅ Public route redirects for authenticated users
- ✅ Lazy loading with React.Suspense
- ✅ Role-based route access control

#### 5. **API Integration Layer**
- ✅ Centralized Axios client with interceptors
- ✅ Request/response logging and error handling
- ✅ Authentication token management
- ✅ Retry logic with exponential backoff
- ✅ File upload utilities

### 🔄 In Progress / Ready for Development

#### 1. **Dashboard Features**
- 🔄 Main dashboard layout with sidebar navigation
- 🔄 User management interface
- 🔄 Analytics and reporting components
- 🔄 Real-time notifications system

#### 2. **Testing Infrastructure**
- 🔄 Component testing with React Testing Library
- 🔄 API service testing with MSW (Mock Service Worker)
- 🔄 E2E testing setup with Playwright
- 🔄 Coverage reporting and CI/CD integration

## 📁 Project Structure

```
fitvire-web-admin/
├── src/
│   ├── App.tsx                    # Main application component
│   ├── AppRouter.tsx              # Route configuration
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles
│   │
│   ├── core/                      # Core infrastructure
│   │   ├── api/
│   │   │   └── client.ts          # HTTP client configuration
│   │   └── config/
│   │       └── environment.ts     # Environment configuration
│   │
│   └── domains/                   # Domain-driven architecture
│       └── shared/                # Shared domain functionality
│           ├── components/        # UI components
│           │   ├── ui/           # Base UI components
│           │   ├── forms/        # Form-specific components
│           │   ├── layout/       # Layout components
│           │   └── feedback/     # Notifications, modals
│           ├── hooks/            # Custom React hooks
│           ├── pages/            # Page components
│           ├── services/         # API service layer
│           ├── stores/           # Zustand state stores
│           └── types/            # TypeScript definitions
│
├── public/                       # Static assets
├── .env                         # Environment variables
├── .env.example                 # Environment template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts             # Vite build configuration
└── vitest.config.ts           # Test configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **npm 9+** or **yarn 3+**
- **Git** for version control

### Installation & Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd fitvire-web-admin
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Development Server**
   ```bash
   npm run dev
   # Opens http://localhost:5173
   ```

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Production build
npm run preview          # Preview production build

# Code Quality
npm run lint             # ESLint checking
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run unit tests
npm run test:ui          # Test UI interface
npm run test:coverage    # Coverage report

# Utilities
npm run clean            # Clean build artifacts
npm run build:analyze    # Bundle size analysis
```

## 🔧 Development Workflow

### 1. **Component Development**
- Use functional components with TypeScript
- Follow domain-driven organization
- Implement proper prop typing with interfaces
- Use Tailwind CSS for styling
- Add Framer Motion for animations

```tsx
// Example: domains/shared/components/ui/MyComponent.tsx
interface MyComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  variant = 'primary',
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-4 ${
        variant === 'primary' ? 'text-primary-500' : 'text-neutral'
      }`}
      onClick={onClick}
    >
      {title}
    </motion.div>
  );
};
```

### 2. **State Management Patterns**
- Use Zustand for client state (UI, preferences)
- Use React Query for server state (API data)
- Use React Hook Form for form state

```tsx
// Zustand Store Example
interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useUIStore = create<UIState>()((set) => ({
  sidebarOpen: true,
  theme: 'dark',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setTheme: (theme) => set({ theme })
}));
```

### 3. **API Integration**
- Use the centralized API client
- Implement proper error handling
- Add loading states and optimistic updates

```tsx
// Service Layer Example
export const userService = {
  async getUsers(params: SearchParams): Promise<ApiResponse<User[]>> {
    return api.get('/users', { params });
  },
  
  async createUser(userData: CreateUserRequest): Promise<ApiResponse<User>> {
    return api.post('/users', userData);
  }
};

// Component Usage with React Query
const { data: users, isLoading, error } = useQuery({
  queryKey: ['users', searchParams],
  queryFn: () => userService.getUsers(searchParams)
});
```

### 4. **Form Handling**
- Use React Hook Form with Zod validation
- Implement proper error states and feedback

```tsx
const schema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters')
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
});
```

## 🎨 Design System Guidelines

### Color Palette
```css
/* Primary Colors */
--primary-500: #F04444;    /* Main brand color */
--primary-400: #f87171;    /* Lighter variant */
--primary-600: #dc2626;    /* Darker variant */

/* Background Colors */
--background: #0a0a0a;     /* Main background */
--surface: #1a1a1a;       /* Card backgrounds */
--glass-bg: rgba(43, 43, 43, 0.4); /* Glass morphism */

/* Text Colors */
--neutral: #D9D9D9;       /* Primary text */
--neutral-400: #a3a3a3;   /* Secondary text */
```

### Typography
- **Primary Font:** Inter (clean, modern sans-serif)
- **Display Font:** Cal Sans (for headings)
- **Monospace:** JetBrains Mono (for code)

### Component Patterns
- Glass morphism with `backdrop-blur-glass`
- Consistent border radius with `rounded-xl`
- Smooth animations with Framer Motion
- Responsive design with mobile-first approach

## 🔐 Authentication & Security

### Authentication Flow
1. User submits login credentials
2. API validates and returns JWT tokens
3. Tokens stored securely in sessionStorage
4. Automatic token refresh before expiration
5. Session timeout with activity tracking

### Security Features
- JWT token management with automatic refresh
- Role-based access control (RBAC)
- Permission-based UI rendering
- Secure token storage (sessionStorage vs localStorage)
- CSRF protection ready for implementation
- Input validation with Zod schemas

### User Roles & Permissions
```typescript
// User Roles
- SuperAdmin: Full platform access
- Internal Staff: Limited management access

// Permissions
- manage_users: User CRUD operations
- manage_partners: Partner management
- manage_customers: Customer management
- view_analytics: Analytics dashboard access
- export_data: Data export capabilities
```

## 📊 Performance Optimization

### Bundle Optimization
- Route-based code splitting with React.lazy()
- Tree shaking for minimal bundle size
- Dynamic imports for heavy components
- Image optimization with WebP format

### Runtime Performance
- React.memo() for expensive component re-renders
- useCallback() and useMemo() for optimization
- Virtual scrolling for large datasets
- Aggressive React Query caching

### Monitoring & Analytics
```typescript
// Performance monitoring ready for:
- Core Web Vitals tracking
- Bundle size monitoring
- API response time tracking
- Error rate monitoring with Sentry
- User analytics with Google Analytics
```

## 🧪 Testing Strategy

### Unit Testing
```bash
# Component testing with React Testing Library
npm run test

# Testing utilities provided:
- Custom render function with providers
- Mock API responses with MSW
- Authentication state mocking
- Local/session storage mocking
```

### Integration Testing
- API service layer testing
- Authentication flow testing
- Protected route testing
- Form submission testing

### E2E Testing (Planned)
- Critical user journeys
- Cross-browser compatibility
- Mobile responsiveness
- Accessibility compliance

## 🚀 Deployment & CI/CD

### Build Process
```bash
# Production build
npm run build

# Build analysis
npm run build:analyze

# Preview build
npm run preview
```

### Deployment Targets
- **Primary:** Cloudflare Pages
- **Alternative:** Netlify, Vercel
- **Enterprise:** AWS S3 + CloudFront

### Environment Configuration
```bash
# Development
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:8000/api

# Staging
VITE_APP_ENV=staging
VITE_API_BASE_URL=https://staging-api.fitvire.com

# Production
VITE_APP_ENV=production
VITE_API_BASE_URL=https://api.fitvire.com
```

## 📋 TODO & Next Steps

### Immediate Priorities (Week 1-2)
- [ ] **Install missing dependencies** for testing infrastructure
- [ ] **Complete dashboard layout** with sidebar navigation
- [ ] **Implement user management** CRUD operations
- [ ] **Add real-time notifications** with WebSocket integration
- [ ] **Set up CI/CD pipeline** with automated testing

### Short-term Goals (Month 1)
- [ ] **Partner management interface** with service provider tools
- [ ] **Customer management dashboard** with booking analytics
- [ ] **Advanced filtering and search** across all entities
- [ ] **Bulk operations** for user management
- [ ] **Export functionality** with CSV/PDF generation

### Long-term Vision (Quarter 1)
- [ ] **Advanced analytics dashboard** with Chart.js visualizations
- [ ] **Real-time chat system** for customer support
- [ ] **Mobile-responsive optimization** for tablet management
- [ ] **Multi-language support** with i18n integration
- [ ] **Advanced security features** (2FA, device tracking)

### Performance & Scalability
- [ ] **Implement service workers** for offline capability
- [ ] **Add request caching** for better performance
- [ ] **Optimize bundle splitting** for faster load times
- [ ] **Add error tracking** with Sentry integration
- [ ] **Implement A/B testing** framework

## 🤝 Contributing Guidelines

### Code Standards
- Follow TypeScript strict mode
- Use Prettier for consistent formatting
- Implement comprehensive error handling
- Add JSDoc comments for complex functions
- Write unit tests for new components

### Git Workflow
```bash
# Feature development
git checkout -b feature/user-management
git commit -m "feat: add user list component with pagination"
git push origin feature/user-management

# Create PR with:
- Clear description of changes
- Screenshots for UI changes
- Test coverage information
- Performance impact assessment
```

### PR Review Checklist
- [ ] TypeScript compilation passes
- [ ] All tests pass
- [ ] Code follows established patterns
- [ ] Responsive design implemented
- [ ] Accessibility considerations addressed
- [ ] Performance impact evaluated

## 📞 Support & Resources

### Documentation
- [React Documentation](https://react.dev)
- [Zustand Guide](https://github.com/pmndrs/zustand)
- [React Query Tutorial](https://tanstack.com/query/latest)
- [Tailwind CSS Reference](https://tailwindcss.com/docs)

### Internal Resources
- FitVire API Documentation (TODO: Add link)
- Design System Figma (TODO: Add link)
- Architecture Decision Records (TODO: Add link)

### Contact
- Development Team: dev@fitvire.com (TODO: Update)
- Architecture Questions: architecture@fitvire.com (TODO: Update)
- Design System: design@fitvire.com (TODO: Update)

---

**Last Updated:** September 25, 2025  
**Version:** 1.0.0  
**Maintainer:** FitVire Development Team

> 💡 **Note:** This project follows domain-driven design principles and modern React best practices. Always prioritize type safety, performance, and user experience when implementing new features.