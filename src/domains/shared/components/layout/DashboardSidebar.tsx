import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  User, 
  BarChart3,
  Dumbbell,
  MapPin,
  CreditCard,
  Settings,
  ChevronDown,
  X,
  Palette,
  ShoppingBag,
  UserCheck,
  Smartphone
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

const MenuItem: React.FC<MenuItemProps & { isCollapsed: boolean; currentPath: string }> = ({ 
  icon, 
  label, 
  path, 
  children, 
  isCollapsed,
  currentPath
}) => {
  const hasActiveChild = useMemo(
    () => (children ? children.some((child) => currentPath.startsWith(child.path)) : false),
    [children, currentPath]
  );

  const [isExpanded, setIsExpanded] = useState(hasActiveChild);

  useEffect(() => {
    if (hasActiveChild) {
      setIsExpanded(true);
    }
  }, [hasActiveChild]);

  if (children) {
    return (
      <li>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            group flex w-full items-center rounded-xl px-3 py-3 text-sm font-medium text-neutral/80 transition-all duration-200
            hover:bg-[#202020]/80 hover:text-neutral
            ${(isExpanded || hasActiveChild) ? 'bg-[#202020]/90 text-neutral shadow-[0_6px_24px_rgba(240,68,68,0.18)]' : ''}
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
                  (isExpanded || hasActiveChild) ? 'rotate-180' : ''
                }`}
              />
            </>
          )}
        </button>
        
        <AnimatePresence>
          {(isExpanded || hasActiveChild) && !isCollapsed && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-3 mt-2 space-y-1 overflow-hidden border-l border-white/5 pl-4"
            >
              {children.map((child) => (
                <li key={child.path}>
                  <NavLink
                    to={child.path}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition-all duration-200 hover:bg-[#1f1f1f]/75 hover:text-neutral ${
                        isActive ? 'bg-primary-500/15 text-primary-300' : 'text-neutral/70'
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
          `group flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
            isActive
              ? 'bg-primary-500/15 text-primary-300 shadow-[0_4px_20px_rgba(240,68,68,0.15)]'
              : 'text-neutral/80 hover:bg-[#202020]/85 hover:text-neutral'
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
  const location = useLocation();

  const menuItems: MenuItemProps[] = [
    // MAIN MENU
    {
      icon: <LayoutDashboard size={20} />,
      label: 'Dashboard',
      path: '/dashboard'
    },
    
    // CUSTOMERS
    {
      icon: <ShoppingBag size={20} />,
      label: 'Customers',
      children: [
        { label: 'All Customers', path: '/customers' },
        { label: 'Users', path: '/customers/users' },
        { label: 'Subscriptions', path: '/customers/subscriptions' },
        { label: 'Activity', path: '/customers/activity' }
      ]
    },
    
    // PARTNERS
    {
      icon: <UserCheck size={20} />,
      label: 'Partners',
      children: [
        { label: 'All Partners', path: '/partners' },
        { label: 'Individual Partners', path: '/partners/individual' },
        { label: 'Individual Users', path: '/partners/individual/users' },
        { label: 'Organization Partners', path: '/partners/organizations' },
        { label: 'Organization Users', path: '/partners/organizations/users' },
        { label: 'Verification', path: '/partners/verification' }
      ]
    },
    
    // DEVICE MANAGEMENT
    {
      icon: <Smartphone size={20} />,
      label: 'Device Management',
      children: [
        { label: 'All Devices', path: '/devices' },
        { label: 'Active Devices', path: '/devices/active' },
        { label: 'Device Analytics', path: '/devices/analytics' },
        { label: 'Notifications', path: '/devices/notifications' }
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
    {
      icon: <Palette size={20} />,
      label: 'Design System',
      children: [
        { label: 'Overview', path: '/design/overview' },
        { label: 'Colors', path: '/design/colors' },
        { label: 'Typography', path: '/design/typography' },
        { label: 'Buttons', path: '/design/buttons' },
        { label: 'Cards', path: '/design/cards' },
        { label: 'Forms', path: '/design/forms' },
        { label: 'Badges', path: '/design/badges' },
        { label: 'Tables', path: '/design/tables' },
        { label: 'Charts', path: '/design/charts' },
        { label: 'Notifications', path: '/design/notifications' },
        { label: 'Feedback', path: '/design/feedback' },
        { label: 'Animations', path: '/design/animations' },
        { label: 'Layouts', path: '/design/layouts' }
      ]
    },
    
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
          relative ${isCollapsed ? 'w-[90px]' : 'w-[290px]'} 
          h-[100dvh] min-h-[100dvh] overflow-y-auto overflow-x-hidden border-r border-white/10 bg-[#191919]/92 backdrop-blur-xl
          flex-shrink-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] scrollbar-thin scrollbar-thumb-primary-500/30 scrollbar-track-transparent
        `}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(240,68,68,0.12),_transparent_65%)] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,107,74,0.08),_transparent_60%)] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(25,25,25,0.85))] mix-blend-soft-light" />

        <div className="relative z-10 flex h-full flex-col">
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                    <Dumbbell className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-3 text-xl font-bold text-neutral">
                    FitVire
                  </span>
                </motion.div>
              ) : (
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
              )}
            </div>

            <button
              onClick={onToggle}
              className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-white/10 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar Menu */}
          <nav className="px-4 pb-6">
            {/* Platform Management */}
            <div className="mb-8">
              {!isCollapsed && (
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral/60">
                  PLATFORM
                </h3>
              )}
              <ul className="space-y-2">
                {menuItems.slice(0, 9).map((item, index) => (
                  <MenuItem 
                    key={index} 
                    {...item} 
                    isCollapsed={isCollapsed}
                    currentPath={location.pathname}
                  />
                ))}
              </ul>
            </div>

            {/* Analytics & Tools */}
            <div>
              {!isCollapsed && (
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral/60">
                  ANALYTICS & TOOLS
                </h3>
              )}
              <ul className="space-y-2">
                {menuItems.slice(9).map((item, index) => (
                  <MenuItem 
                    key={index + 9} 
                    {...item} 
                    isCollapsed={isCollapsed}
                    currentPath={location.pathname}
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
              className="mx-4 mb-6 rounded-xl border border-primary-700/30 bg-gradient-to-r from-primary-900/20 to-primary-800/20 p-4"
            >
              <h3 className="mb-2 text-sm font-semibold text-primary-100">
                🏃‍♂️ FitVire Admin Pro
              </h3>
              <p className="mb-3 text-xs text-primary-300">
                Transform fitness management with advanced analytics and tools.
              </p>
              <button className="w-full rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:from-primary-700 hover:to-primary-600 hover:shadow-lg">
                Upgrade Now
              </button>
            </motion.div>
          )}
        </div>
      </motion.aside>
    </>
  );
};

export default DashboardSidebar;