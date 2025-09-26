import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, Settings, User, Menu, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardHeaderProps {
  onSidebarToggle: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onSidebarToggle
}) => {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Demo user data (no auth required)
  const user = {
    name: 'FitVire Admin',
    email: 'admin@fitvire.com',
    role: 'SuperAdmin',
    avatar: '/images/user/user-01.jpg' // TODO: Add default avatar
  };

  const handleLogout = () => {
    // Simply navigate to login (no auth clearing needed)
    navigate('/login', { replace: true });
  };

  const notifications = [
    {
      id: 1,
      title: 'New partner registration',
      message: 'PowerGym has submitted registration',
      time: '5 min ago',
      type: 'info'
    },
    {
      id: 2,
      title: 'Payment received',
      message: 'Monthly subscription from user #1234',
      time: '12 min ago',
      type: 'success'
    },
    {
      id: 3,
      title: 'System alert',
      message: 'Server maintenance in 2 hours',
      time: '1 hour ago',
      type: 'warning'
    }
  ];

  return (
    <header className="sticky top-0 z-30 bg-glass-bg backdrop-blur-md border-b border-glass-border">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Mobile sidebar toggle */}
          <button
            onClick={onSidebarToggle}
            className="p-2 text-neutral/70 rounded-lg hover:bg-glass-bg hover:text-neutral lg:hidden transition-all duration-300"
          >
            <Menu size={20} />
          </button>

          {/* Search Bar */}
          <div className="relative ml-4 hidden sm:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search users, bookings, facilities..."
              className="
                w-64 pl-10 pr-4 py-2 text-sm text-neutral bg-glass-bg border border-glass-border 
                rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                placeholder-neutral/60 backdrop-blur-sm hover:bg-glass-bg/80 transition-all duration-300
              "
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-neutral/70 rounded-lg hover:bg-glass-bg hover:text-neutral transition-all duration-300"
            >
              <Bell size={20} />
              {/* Notification badge */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            </button>

            {/* Notifications dropdown */}
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-80 bg-glass-bg backdrop-blur-md border border-glass-border rounded-lg z-50 shadow-xl"
              >
                <div className="p-4 border-b border-glass-border">
                  <h3 className="text-sm font-semibold text-neutral">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border-b border-glass-border/50 hover:bg-glass-bg/50 transition-colors duration-200"
                    >
                      <div className="flex items-start">
                        <div
                          className={`
                            w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0
                            ${notification.type === 'success' ? 'bg-emerald-500' : ''}
                            ${notification.type === 'warning' ? 'bg-amber-500' : ''}
                            ${notification.type === 'info' ? 'bg-primary-500' : ''}
                          `}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral">
                            {notification.title}
                          </p>
                          <p className="text-sm text-neutral/80">
                            {notification.message}
                          </p>
                          <p className="text-xs text-neutral/60 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-glass-bg/50">
                  <button className="w-full text-sm text-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2 text-neutral/70 rounded-lg hover:bg-glass-bg hover:text-neutral transition-all duration-300">
            <Settings size={20} />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center p-2 text-neutral/70 rounded-lg hover:bg-glass-bg hover:text-neutral transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-medium text-white">
                  {user.name.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
              <div className="ml-3 text-left hidden sm:block">
                <p className="text-sm font-medium text-neutral">
                  {user.name}
                </p>
                <p className="text-xs text-neutral/60">
                  {user.role}
                </p>
              </div>
            </button>

            {/* User dropdown menu */}
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-56 bg-glass-bg backdrop-blur-md border border-glass-border rounded-lg z-50 shadow-xl"
              >
                <div className="p-4 border-b border-glass-border">
                  <p className="text-sm font-medium text-neutral">
                    {user.name}
                  </p>
                  <p className="text-sm text-neutral/70">
                    {user.email}
                  </p>
                </div>
                <div className="py-2">
                  <a
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    <User className="w-4 h-4 mr-3" />
                    Profile Settings
                  </a>
                  <a
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Account Settings
                  </a>
                  <hr className="my-2 border-glass-border" />
                  <button 
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-primary-400 hover:bg-glass-bg hover:text-primary-300 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-4 sm:hidden">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="
              w-full pl-10 pr-4 py-2 text-sm text-neutral bg-glass-bg border border-glass-border 
              rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
              placeholder-neutral/60 backdrop-blur-sm hover:bg-glass-bg/80 transition-all duration-300
            "
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;