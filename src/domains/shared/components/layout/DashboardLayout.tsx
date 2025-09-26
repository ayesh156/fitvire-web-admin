/**
 * Dashboard Layout Component
 * Main layout with no authentication required
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background relative">
      {/* FitVire brand background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-black to-background pointer-events-none" />
      {/* Subtle FitVire brand accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 pointer-events-none" />
      {/* Sidebar */}
      <div className="relative z-10">
        <DashboardSidebar 
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen relative z-10">
        {/* Header */}
        <DashboardHeader onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

        {/* Page Content - Scrollable viewport */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden content-scrollbar smooth-scroll">
          <div className="p-6 min-h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;