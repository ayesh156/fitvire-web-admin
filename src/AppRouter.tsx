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
const Settings = React.lazy(() => import('./domains/shared/pages/Settings'));
const Profile = React.lazy(() => import('./domains/shared/pages/Profile'));
const NotFoundPage = React.lazy(() => import('./domains/shared/pages/NotFoundPage'));



/**
 * Loading Component for Suspense
 */
const SuspenseLoader: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
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
          
          {/* User Management Routes - No authentication required */}
          <Route 
            path="/users" 
            element={
              <DashboardLayout>
                <UserManagement />
              </DashboardLayout>
            } 
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