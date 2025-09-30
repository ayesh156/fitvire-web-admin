/**
 * Design System Layout - Simplified wrapper for design system pages
 * Navigation is now integrated into the main DashboardSidebar for consistency
 */

import React from 'react';
import { Outlet } from 'react-router-dom';

export const DesignSystemLayout: React.FC = () => {
  return <Outlet />;
};

export default DesignSystemLayout;
