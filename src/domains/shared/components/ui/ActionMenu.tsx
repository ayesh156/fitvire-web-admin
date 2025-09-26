/**
 * ActionMenu Component - FitVire Admin Design System
 * Professional three-dot menu with intelligent positioning and overflow prevention
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, Settings, User, Eye, Edit, Trash2, Shield, Clock } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  divider?: boolean;
}

interface ActionMenuProps {
  items: MenuItem[];
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: 'auto' | 'left' | 'right';
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  items,
  className = "",
  size = 'md',
  position = 'auto'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<'left' | 'right'>('right');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Size variants for the trigger button
  const sizeClasses = {
    sm: 'w-6 h-6 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  // Calculate optimal menu position to prevent overflow
  useEffect(() => {
    if (isOpen && buttonRef.current && menuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const menuWidth = 200; // Approximate menu width
      const viewportWidth = window.innerWidth;
      const scrollLeft = window.pageXOffset;
      
      // Check if menu would overflow on the right
      const wouldOverflowRight = buttonRect.right + menuWidth > viewportWidth + scrollLeft;
      
      if (position === 'auto') {
        setMenuPosition(wouldOverflowRight ? 'left' : 'right');
      } else {
        setMenuPosition(position as 'left' | 'right');
      }
    }
  }, [isOpen, position]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleItemClick = (item: MenuItem) => {
    if (!item.disabled) {
      item.onClick();
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Three-dot trigger button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${sizeClasses[size]}
          flex items-center justify-center
          text-neutral-400 hover:text-neutral-300 hover:bg-surface
          rounded-lg transition-all duration-200 ease-out
          focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 focus:ring-offset-background
          ${isOpen ? 'bg-surface text-neutral-300' : ''}
        `}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <MoreHorizontal className={iconSizes[size]} />
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <div 
              className="fixed inset-0 z-40 md:hidden" 
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`
                absolute top-full mt-2 w-48 z-50
                glass-popup rounded-lg
                py-1 max-h-64 overflow-y-auto
                ${menuPosition === 'left' 
                  ? 'right-0 origin-top-right' 
                  : 'left-0 origin-top-left'
                }
              `}
              role="menu"
              aria-orientation="vertical"
            >
              {items.map((item, index) => (
                <React.Fragment key={item.id}>
                  {item.divider && index > 0 && (
                    <div className="my-1 border-t border-glass-border" />
                  )}
                  <button
                    onClick={() => handleItemClick(item)}
                    disabled={item.disabled}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-2.5 text-left text-sm
                      transition-colors duration-150
                      ${item.disabled 
                        ? 'text-neutral-500 cursor-not-allowed' 
                        : 'text-neutral-300 hover:text-neutral hover:bg-surface'
                      }
                      ${item.className || ''}
                      focus:outline-none focus:bg-surface focus:text-neutral
                    `}
                    role="menuitem"
                  >
                    <div className={`
                      flex-shrink-0 
                      ${item.disabled ? 'text-neutral-500' : 'text-neutral-400'}
                    `}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </React.Fragment>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Predefined menu item factories for common actions
export const createSettingsMenuItem = (onClick: () => void): MenuItem => ({
  id: 'settings',
  label: 'Settings',
  icon: <Settings className="w-4 h-4" />,
  onClick
});

export const createProfileMenuItem = (onClick: () => void): MenuItem => ({
  id: 'profile',
  label: 'Profile',
  icon: <User className="w-4 h-4" />,
  onClick
});

export const createViewMenuItem = (onClick: () => void): MenuItem => ({
  id: 'view',
  label: 'View Details',
  icon: <Eye className="w-4 h-4" />,
  onClick
});

export const createEditMenuItem = (onClick: () => void): MenuItem => ({
  id: 'edit',
  label: 'Edit',
  icon: <Edit className="w-4 h-4" />,
  onClick
});

export const createDeleteMenuItem = (onClick: () => void): MenuItem => ({
  id: 'delete',
  label: 'Delete',
  icon: <Trash2 className="w-4 h-4" />,
  onClick,
  className: 'text-red-400 hover:text-red-300 hover:bg-red-900/20',
  divider: true
});

export const createSecurityMenuItem = (onClick: () => void): MenuItem => ({
  id: 'security',
  label: 'Security Settings',
  icon: <Shield className="w-4 h-4" />,
  onClick
});

export const createActivityMenuItem = (onClick: () => void): MenuItem => ({
  id: 'activity',
  label: 'Activity Log',
  icon: <Clock className="w-4 h-4" />,
  onClick
});

export default ActionMenu;