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
    <div className="relative flex h-[100dvh] min-h-[100dvh] overflow-hidden bg-[#191919] text-neutral">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(240,68,68,0.06),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,107,74,0.05),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(255,255,255,0.035)_0%,_rgba(25,25,25,0)_55%)]" />
      </div>
      {/* Elevated vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(25,25,25,0)_45%,_rgba(0,0,0,0.55)_100%)] mix-blend-soft-light" />
      {/* Sidebar */}
      <div className="relative z-10">
        <DashboardSidebar 
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex h-full min-h-0 min-w-0 flex-1 flex-col">
        {/* Header */}
        <DashboardHeader onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

        {/* Page Content - Scrollable viewport */}
        <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden content-scrollbar smooth-scroll">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;