import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  User, 
  BarChart3, 
  Users,
  Dumbbell,
  MapPin,
  CreditCard,
  Settings,
  ChevronDown,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  path?: string;
  children?: Array<{
    label: string;
    path: string;
  }>;
}

const MenuItem: React.FC<MenuItemProps & { isCollapsed: boolean }> = ({ 
  icon, 
  label, 
  path, 
  children, 
  isCollapsed 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children) {
    return (
      <li>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            flex items-center w-full p-3 text-neutral/80 rounded-lg transition-all duration-200
            hover:bg-glass-bg group
            ${isExpanded ? 'bg-glass-bg' : ''}
          `}
        >
          <span className="flex-shrink-0 w-6 h-6 text-neutral/60 transition duration-200 group-hover:text-primary-400">
            {icon}
          </span>
          {!isCollapsed && (
            <>
              <span className="ml-3 font-medium">{label}</span>
              <ChevronDown 
                className={`ml-auto w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </>
          )}
        </button>
        
        <AnimatePresence>
          {isExpanded && !isCollapsed && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-9 mt-1 space-y-1 overflow-hidden"
            >
              {children.map((child) => (
                <li key={child.path}>
                  <NavLink
                    to={child.path}
                    className={({ isActive }) =>
                      `block p-2 text-sm text-neutral/70 rounded-lg transition-all duration-200 hover:bg-glass-bg hover:text-primary-400 ${
                        isActive ? 'text-primary-400 bg-primary-500/20' : ''
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  if (!path) return null;

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center p-3 text-neutral/80 rounded-lg transition-all duration-200 hover:bg-glass-bg group ${
            isActive ? 'bg-primary-500/20 text-primary-400' : ''
          }`
        }
      >
        <span className="flex-shrink-0 w-6 h-6 text-neutral/60 transition duration-200 group-hover:text-primary-400">
          {icon}
        </span>
        {!isCollapsed && <span className="ml-3 font-medium">{label}</span>}
      </NavLink>
    </li>
  );
};

const DashboardSidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const menuItems: MenuItemProps[] = [
    // MAIN MENU
    {
      icon: <LayoutDashboard size={20} />,
      label: 'Dashboard',
      path: '/dashboard'
    },
    
    // USER MANAGEMENT
    {
      icon: <Users size={20} />,
      label: 'User Management',
      children: [
        { label: 'All Users', path: '/users' },
        { label: 'Advanced View', path: '/users/advanced' },
        { label: 'Customers', path: '/users/customers' },
        { label: 'Partners', path: '/users/partners' },
        { label: 'Management', path: '/users/management' }
      ]
    },
    
    // FITNESS CONTENT
    {
      icon: <Dumbbell size={20} />,
      label: 'Fitness Content',
      children: [
        { label: 'Workouts', path: '/fitness/workouts' },
        { label: 'Nutrition Plans', path: '/fitness/nutrition' },
        { label: 'Challenges', path: '/fitness/challenges' }
      ]
    },
    
    // LOCATION & FACILITIES
    {
      icon: <MapPin size={20} />,
      label: 'Locations',
      children: [
        { label: 'Gyms & Centers', path: '/locations/gyms' },
        { label: 'Sports Facilities', path: '/locations/sports' },
        { label: 'Areas Coverage', path: '/locations/coverage' }
      ]
    },
    
    // BOOKINGS & PAYMENTS
    {
      icon: <CreditCard size={20} />,
      label: 'Bookings & Payments',
      children: [
        { label: 'Bookings', path: '/bookings' },
        { label: 'Transactions', path: '/payments/transactions' },
        { label: 'Subscriptions', path: '/payments/subscriptions' }
      ]
    },
    
    // CORE TOOLS
    { icon: <Calendar size={20} />, label: 'Schedule & Events', path: '/calendar' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    
    // ANALYTICS & REPORTS
    {
      icon: <BarChart3 size={20} />,
      label: 'Analytics & Reports',
      children: [
        { label: 'Platform Analytics', path: '/analytics/platform' },
        { label: 'User Insights', path: '/analytics/users' },
        { label: 'Revenue Reports', path: '/analytics/revenue' },
        { label: 'Partner Performance', path: '/analytics/partners' }
      ]
    },
    
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' }
  ];

  return (
    <>
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? '90px' : '290px'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`
          ${isCollapsed ? 'w-[90px]' : 'w-[290px]'} 
          h-screen overflow-y-auto overflow-x-hidden bg-surface/80 backdrop-blur-md border-r border-glass-border 
          flex-shrink-0 scrollbar-thin scrollbar-thumb-primary-500/30 scrollbar-track-transparent
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            {!isCollapsed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-neutral">
                  FitVire
                </span>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mx-auto shadow-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
            )}
          </div>
          
          <button
            onClick={onToggle}
            className="p-2 text-gray-400 rounded-lg hover:bg-white/10 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="px-4 pb-6">
          {/* Platform Management */}
          <div className="mb-8">
            {!isCollapsed && (
              <h3 className="mb-4 text-xs font-semibold text-neutral/60 uppercase tracking-wide">
                PLATFORM
              </h3>
            )}
            <ul className="space-y-2">
              {menuItems.slice(0, 7).map((item, index) => (
                <MenuItem 
                  key={index} 
                  {...item} 
                  isCollapsed={isCollapsed} 
                />
              ))}
            </ul>
          </div>

          {/* Analytics & Tools */}
          <div>
            {!isCollapsed && (
              <h3 className="mb-4 text-xs font-semibold text-neutral/60 uppercase tracking-wide">
                ANALYTICS & TOOLS
              </h3>
            )}
            <ul className="space-y-2">
              {menuItems.slice(7).map((item, index) => (
                <MenuItem 
                  key={index + 7} 
                  {...item} 
                  isCollapsed={isCollapsed} 
                />
              ))}
            </ul>
          </div>
        </nav>

        {/* Promo Section */}
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-4 mb-6 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/20 rounded-xl border border-primary-700/30"
          >
            <h3 className="mb-2 text-sm font-semibold text-primary-100">
              🏃‍♂️ FitVire Admin Pro
            </h3>
            <p className="mb-3 text-xs text-primary-300">
              Transform fitness management with advanced analytics and tools.
            </p>
            <button className="w-full px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-200 shadow-lg">
              Upgrade Now
            </button>
          </motion.div>
        )}
      </motion.aside>
    </>
  );
};

export default DashboardSidebar;