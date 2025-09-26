import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Handle responsive sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };



  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <DashboardSidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content Area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <DashboardHeader 
          onSidebarToggle={toggleSidebar}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-screen-2xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;