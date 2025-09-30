/**
 * App Router Configuration
 * Free navigation without authentication guards
 */

import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from './domains/shared/components/ui/Spinner';

// Lazy-loaded page components
const LoginPage = React.lazy(() => import('./domains/shared/pages/LoginPage').then(module => ({ default: module.LoginPage })));
const VerificationPage = React.lazy(() => import('./domains/shared/pages/VerificationPage'));
const ForgotPasswordPage = React.lazy(() => import('./domains/shared/pages/ForgotPasswordPage').then(module => ({ default: module.ForgotPasswordPage })));
const ResetPasswordPage = React.lazy(() => import('./domains/shared/pages/ResetPasswordPage').then(module => ({ default: module.ResetPasswordPage })));
const DashboardLayout = React.lazy(() => import('./domains/shared/components/layout/DashboardLayout').then(module => ({ default: module.DashboardLayout })));

// Dashboard page components
const DashboardOverview = React.lazy(() => import('./domains/shared/pages/DashboardOverview'));
const UserManagement = React.lazy(() => import('./domains/shared/pages/UserManagement'));
const AdvancedUserManagement = React.lazy(() => import('./domains/shared/pages/AdvancedUserManagement'));
const CustomersPage = React.lazy(() => import('./domains/shared/pages/CustomersPage'));
const PartnersPage = React.lazy(() => import('./domains/shared/pages/PartnersPage'));
const DeviceManagementPage = React.lazy(() => import('./domains/shared/pages/DeviceManagementPage'));
const UnderConstructionPage = React.lazy(() => import('./domains/shared/pages/UnderConstructionPage'));
const Settings = React.lazy(() => import('./domains/shared/pages/Settings'));
const Profile = React.lazy(() => import('./domains/shared/pages/Profile'));
const NotFoundPage = React.lazy(() => import('./domains/shared/pages/NotFoundPage'));

// Design System pages
const DesignSystemLayout = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.DesignSystemLayout })));
const OverviewPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.OverviewPage })));
const ColorsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.ColorsPage })));
const TypographyPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.TypographyPage })));
const ButtonsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.ButtonsPage })));
const CardsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.CardsPage })));
const FormsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.FormsPage })));
const BadgesPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.BadgesPage })));
const TablesPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.TablesPage })));
const ChartsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.ChartsPage })));
const NotificationsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.NotificationsPage })));
const FeedbackPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.FeedbackPage })));
const AnimationsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.AnimationsPage })));
const LayoutsPage = React.lazy(() => import('./domains/shared/pages/design-system').then(m => ({ default: m.LayoutsPage })));



/**
 * Loading Component for Suspense
 */
const SuspenseLoader: React.FC = () => (
  <div className="flex h-[100dvh] min-h-[100dvh] items-center justify-center bg-background">
    <div className="text-center">
      <Spinner size="xl" />
      <p className="text-neutral/70 mt-4">Loading...</p>
    </div>
  </div>
);



/**
 * Main App Router Component
 */
export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          {/* Authentication Routes - No guards, free access */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/verify" element={<VerificationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Dashboard Routes - No authentication required */}
          <Route 
            path="/dashboard" 
            element={
              <DashboardLayout>
                <DashboardOverview />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/dashboard/analytics" 
            element={
              <DashboardLayout>
                <DashboardOverview />
              </DashboardLayout>
            } 
          />
          
          {/* Customers Routes */}
          <Route 
            path="/customers" 
            element={
              <DashboardLayout>
                <CustomersPage />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/customers/users" 
            element={
              <DashboardLayout>
                <UserManagement />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/customers/subscriptions" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Customer Subscriptions"
                  description="Manage all customer subscription plans, billing cycles, and payment history across the FitVire platform."
                  estimatedCompletion="Q2 2025"
                  features={[
                    'Subscription tier management',
                    'Billing and payment tracking',
                    'Renewal and cancellation handling',
                    'Usage analytics and insights'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/customers/activity" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Customer Activity"
                  description="Track customer engagement, workout completion rates, and platform usage patterns in real-time."
                  estimatedCompletion="Q2 2025"
                  features={[
                    'Real-time activity monitoring',
                    'Engagement metrics and trends',
                    'Workout completion tracking',
                    'Platform usage analytics'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Partners Routes */}
          <Route 
            path="/partners" 
            element={
              <DashboardLayout>
                <PartnersPage />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/partners/individual" 
            element={
              <DashboardLayout>
                <PartnersPage />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/partners/individual/users" 
            element={
              <DashboardLayout>
                <UserManagement />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/partners/organizations" 
            element={
              <DashboardLayout>
                <PartnersPage />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/partners/organizations/users" 
            element={
              <DashboardLayout>
                <UserManagement />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/partners/verification" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Partner Verification"
                  description="Review and approve partner applications, verify credentials, and manage partner onboarding workflow."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Application review dashboard',
                    'Document verification system',
                    'Credential validation',
                    'Automated approval workflow',
                    'Partner onboarding tracking'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Device Management Routes */}
          <Route 
            path="/devices" 
            element={
              <DashboardLayout>
                <DeviceManagementPage />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/devices/active" 
            element={
              <DashboardLayout>
                <DeviceManagementPage />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/devices/analytics" 
            element={
              <DashboardLayout>
                <DeviceManagementPage />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/devices/notifications" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Device Notifications"
                  description="Send targeted push notifications to specific devices or user segments across the FitVire platform."
                  estimatedCompletion="Q2 2025"
                  features={[
                    'Push notification composer',
                    'Device targeting and segmentation',
                    'Scheduled notification delivery',
                    'Delivery analytics and tracking',
                    'Template management'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Fitness Content Routes */}
          <Route 
            path="/fitness/workouts" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Workout Management"
                  description="Create, organize, and manage workout programs, exercise libraries, and training plans for the FitVire community."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Workout program builder',
                    'Exercise library with videos',
                    'Training plan templates',
                    'Difficulty level management',
                    'Category and tag organization'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/fitness/nutrition" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Nutrition Plans"
                  description="Manage nutrition guides, meal plans, recipes, and dietary recommendations for different fitness goals."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Meal plan builder',
                    'Recipe database with nutritional info',
                    'Dietary restriction filters',
                    'Calorie and macro tracking',
                    'Custom nutrition recommendations'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/fitness/challenges" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Fitness Challenges"
                  description="Create and manage fitness challenges, competitions, and community events to boost user engagement."
                  estimatedCompletion="Q2 2025"
                  features={[
                    'Challenge creation wizard',
                    'Leaderboard management',
                    'Prize and reward system',
                    'Participant tracking',
                    'Challenge analytics and reporting'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Location & Facilities Routes */}
          <Route 
            path="/locations/gyms" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Gyms & Centers"
                  description="Manage gym locations, fitness centers, and facility information across the FitVire network."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Facility profile management',
                    'Equipment and amenity tracking',
                    'Operating hours configuration',
                    'Photo gallery management',
                    'Review and rating system'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/locations/sports" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Sports Facilities"
                  description="Manage sports facilities including courts, fields, and specialized training venues."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Sports venue directory',
                    'Court/field availability',
                    'Booking system integration',
                    'Facility specifications',
                    'Location mapping'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/locations/coverage" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Areas Coverage"
                  description="View and manage geographic coverage areas, service zones, and regional analytics for the FitVire platform."
                  estimatedCompletion="Q2 2025"
                  features={[
                    'Interactive coverage maps',
                    'Service zone management',
                    'Regional performance metrics',
                    'Expansion planning tools',
                    'Partner density heatmaps'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Bookings & Payments Routes */}
          <Route 
            path="/bookings" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Bookings Management"
                  description="View and manage all customer bookings, appointments, and reservations across the FitVire platform."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Real-time booking dashboard',
                    'Appointment scheduling',
                    'Cancellation management',
                    'Booking analytics and trends',
                    'Waitlist management'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/payments/transactions" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Transaction Management"
                  description="Monitor and manage all financial transactions, payments, and refunds processed through FitVire."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Transaction history and search',
                    'Payment gateway integration',
                    'Refund processing',
                    'Revenue analytics',
                    'Fraud detection alerts'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/payments/subscriptions" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Subscription Payments"
                  description="Manage recurring subscription payments, billing cycles, and payment failures across all subscription plans."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Subscription billing dashboard',
                    'Payment retry management',
                    'Churn analysis',
                    'Revenue forecasting',
                    'Payment method management'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Calendar & Events Routes */}
          <Route 
            path="/calendar" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Schedule & Events"
                  description="Manage the platform-wide event calendar, class schedules, and special events across all FitVire locations."
                  estimatedCompletion="Q2 2025"
                  features={[
                    'Interactive calendar interface',
                    'Event creation and management',
                    'Class scheduling tools',
                    'Recurring event templates',
                    'Attendance tracking',
                    'Multi-location scheduling'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Analytics Routes */}
          <Route 
            path="/analytics/platform" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Platform Analytics"
                  description="Comprehensive platform-wide analytics including user growth, engagement metrics, and system performance."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Real-time platform metrics',
                    'User growth analytics',
                    'Engagement tracking',
                    'Performance monitoring',
                    'Custom report builder'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/analytics/users" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="User Insights"
                  description="Deep dive into user behavior, preferences, and engagement patterns to optimize the FitVire experience."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'User behavior analytics',
                    'Cohort analysis',
                    'Retention metrics',
                    'User journey mapping',
                    'Segmentation tools'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/analytics/revenue" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Revenue Reports"
                  description="Detailed revenue analytics, financial reporting, and business intelligence for data-driven decision making."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Revenue dashboards',
                    'Financial forecasting',
                    'Profit margin analysis',
                    'Revenue attribution',
                    'Custom financial reports'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/analytics/partners" 
            element={
              <DashboardLayout>
                <UnderConstructionPage 
                  title="Partner Performance"
                  description="Track and analyze partner performance metrics, earnings, customer satisfaction, and growth trends."
                  estimatedCompletion="Q1 2025"
                  features={[
                    'Partner performance scorecards',
                    'Earnings analytics',
                    'Customer satisfaction metrics',
                    'Service quality tracking',
                    'Partner comparison tools'
                  ]}
                />
              </DashboardLayout>
            } 
          />
          
          {/* Legacy User Management Routes - Redirect to new structure */}
          <Route 
            path="/users" 
            element={<Navigate to="/customers/users" replace />}
          />
          <Route 
            path="/users/advanced" 
            element={
              <DashboardLayout>
                <AdvancedUserManagement />
              </DashboardLayout>
            } 
          />

          {/* Settings and Profile Routes - No authentication required */}
          <Route 
            path="/settings" 
            element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            } 
          />

          {/* Design System Routes - Development */}
          <Route 
            path="/design/*" 
            element={
              <DashboardLayout>
                <DesignSystemLayout />
              </DashboardLayout>
            }
          >
            <Route index element={<Navigate to="/design/overview" replace />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="colors" element={<ColorsPage />} />
            <Route path="typography" element={<TypographyPage />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="cards" element={<CardsPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="badges" element={<BadgesPage />} />
            <Route path="tables" element={<TablesPage />} />
            <Route path="charts" element={<ChartsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="animations" element={<AnimationsPage />} />
            <Route path="layouts" element={<LayoutsPage />} />
          </Route>

          {/* Root redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;