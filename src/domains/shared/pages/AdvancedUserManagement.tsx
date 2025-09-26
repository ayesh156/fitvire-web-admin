/**
 * Advanced User Management - FitVire Admin Design System
 * Demonstrates DataTable with ActionMenu integration for Settings and Profile navigation
 */

import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Star, Calendar, MapPin } from 'lucide-react';
import DataTable, { type DataTableColumn } from '../components/ui/DataTable';
import Badge from '../components/ui/Badge';
import { createSettingsMenuItem, createProfileMenuItem, createViewMenuItem, createEditMenuItem, createDeleteMenuItem, type MenuItem } from '../components/ui/ActionMenu';
import { useNavigate } from 'react-router-dom';

interface AdvancedUser {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'partner' | 'admin' | 'manager';
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  joinDate: string;
  lastActive: string;
  location: string;
  subscriptionType?: 'Premium' | 'Basic' | 'Free Trial';
  partnerType?: 'Personal Trainer' | 'Gym Owner' | 'Nutritionist';
  workoutsCompleted?: number;
  rating?: number;
  verified: boolean;
}

const AdvancedUserManagement: React.FC = () => {
  const navigate = useNavigate();

  // Mock data with comprehensive user information
  const mockUsers: AdvancedUser[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      role: 'customer',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2024-09-24',
      location: 'New York, NY',
      subscriptionType: 'Premium',
      workoutsCompleted: 45,
      rating: 4.8,
      verified: true
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      role: 'partner',
      status: 'active',
      joinDate: '2024-02-20',
      lastActive: '2024-09-23',
      location: 'Los Angeles, CA',
      partnerType: 'Personal Trainer',
      rating: 4.9,
      verified: true
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      role: 'customer',
      status: 'inactive',
      joinDate: '2024-03-10',
      lastActive: '2024-09-20',
      location: 'Miami, FL',
      subscriptionType: 'Basic',
      workoutsCompleted: 12,
      rating: 4.2,
      verified: false
    },
    {
      id: '4',
      name: 'David Park',
      email: 'david.park@email.com',
      role: 'partner',
      status: 'active',
      joinDate: '2024-01-05',
      lastActive: '2024-09-24',
      location: 'Seattle, WA',
      partnerType: 'Gym Owner',
      rating: 4.7,
      verified: true
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      email: 'lisa.thompson@email.com',
      role: 'admin',
      status: 'active',
      joinDate: '2023-12-01',
      lastActive: '2024-09-24',
      location: 'Austin, TX',
      verified: true
    },
    {
      id: '6',
      name: 'Carlos Mendez',
      email: 'carlos.mendez@email.com',
      role: 'customer',
      status: 'suspended',
      joinDate: '2024-04-15',
      lastActive: '2024-09-15',
      location: 'Phoenix, AZ',
      subscriptionType: 'Free Trial',
      workoutsCompleted: 3,
      rating: 3.5,
      verified: false
    },
    {
      id: '7',
      name: 'Anna Kowalski',
      email: 'anna.kowalski@email.com',
      role: 'partner',
      status: 'pending',
      joinDate: '2024-09-20',
      lastActive: '2024-09-22',
      location: 'Chicago, IL',
      partnerType: 'Nutritionist',
      verified: false
    },
    {
      id: '8',
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      role: 'manager',
      status: 'active',
      joinDate: '2023-11-15',
      lastActive: '2024-09-24',
      location: 'Denver, CO',
      verified: true
    }
  ];

  // Define table columns
  const columns: DataTableColumn<AdvancedUser>[] = [
    {
      key: 'name',
      header: 'User',
      sortable: true,
      render: (_, user) => (
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-white">
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-white">{user.name}</span>
              {user.verified && (
                <div title="Verified">
                  <Shield className="w-4 h-4 text-brand-400" />
                </div>
              )}
            </div>
            <div className="text-sm text-neutral-400">{user.email}</div>
          </div>
        </div>
      )
    },
    {
      key: 'role',
      header: 'Role',
      sortable: true,
      render: (value) => {
        const variants = {
          customer: 'primary',
          partner: 'success',
          admin: 'danger',
          manager: 'warning'
        } as const;
        return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>;
      }
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (value) => {
        const variants = {
          active: 'success',
          inactive: 'gray',
          suspended: 'danger',
          pending: 'warning'
        } as const;
        return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>;
      }
    },
    {
      key: 'location',
      header: 'Location',
      render: (value) => (
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-neutral-400" />
          <span className="text-neutral-300">{value}</span>
        </div>
      )
    },
    {
      key: 'subscriptionType',
      header: 'Plan',
      render: (value, user) => {
        if (user.role !== 'customer') return '—';
        if (!value) return <Badge variant="gray">No Plan</Badge>;
        
        const variants = {
          'Premium': 'success',
          'Basic': 'info',
          'Free Trial': 'warning'
        } as const;
        
        return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>;
      }
    },
    {
      key: 'partnerType',
      header: 'Specialization',
      render: (value, user) => {
        if (user.role !== 'partner') return '—';
        return value ? <Badge variant="info">{value}</Badge> : <Badge variant="gray">Unspecified</Badge>;
      }
    },
    {
      key: 'rating',
      header: 'Rating',
      sortable: true,
      render: (value) => {
        if (!value) return '—';
        return (
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white font-medium">{value}</span>
          </div>
        );
      }
    },
    {
      key: 'joinDate',
      header: 'Joined',
      sortable: true,
      render: (value) => (
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-neutral-400" />
          <span className="text-neutral-300">{new Date(value).toLocaleDateString()}</span>
        </div>
      )
    }
  ];

  // Custom action menu for each user
  const getUserActions = (user: AdvancedUser): MenuItem[] => {
    const actions: MenuItem[] = [];

    // View Details
    actions.push(createViewMenuItem(() => {
      console.log('View details for:', user.name);
      // You could open a modal or navigate to detail page
    }));

    // Edit User
    actions.push(createEditMenuItem(() => {
      console.log('Edit user:', user.name);
      // You could open an edit modal or navigate to edit page
    }));

    // Settings Navigation
    actions.push(createSettingsMenuItem(() => {
      navigate('/settings');
    }));

    // Profile Navigation  
    actions.push(createProfileMenuItem(() => {
      navigate('/profile');
    }));

    // Delete (for non-admin users)
    if (user.role !== 'admin') {
      actions.push(createDeleteMenuItem(() => {
        if (confirm(`Are you sure you want to delete ${user.name}?`)) {
          console.log('Delete user:', user.name);
          // Implement delete logic
        }
      }));
    }

    return actions;
  };

  const handleAddUser = () => {
    console.log('Add new user');
    // You could open an add user modal or navigate to add user page
  };

  const handleExport = () => {
    console.log('Exporting user data...');
    // Custom export logic would go here
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-3"
      >
        <User className="w-8 h-8 text-brand-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Advanced User Management</h1>
          <p className="text-gray-400 mt-1">
            Comprehensive user management with intelligent action menus and navigation
          </p>
        </div>
      </motion.div>

      {/* Data Table */}
      <DataTable
        data={mockUsers}
        columns={columns}
        title="User Directory"
        description="Manage users across all roles with advanced filtering and actions"
        searchable={true}
        filterable={true}
        exportable={true}
        addable={true}
        onAdd={handleAddUser}
        onExport={handleExport}
        pageSize={10}
        enableActions={true}
        customActions={getUserActions}
        settingsPath="/settings"
        profilePath="/profile"
        onViewDetails={(user) => console.log('View details:', user)}
        onEdit={(user) => console.log('Edit user:', user)}
        onDelete={(user) => {
          if (confirm(`Delete ${user.name}?`)) {
            console.log('Delete user:', user);
          }
        }}
      />

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-surface rounded-lg p-6 border border-glass-border"
      >
        <h3 className="text-lg font-semibold text-white mb-3">Action Menu Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-medium text-brand-400">Intelligent Positioning</h4>
            <ul className="text-gray-400 space-y-1">
              <li>• Auto-detects container boundaries</li>
              <li>• Prevents overflow with smart positioning</li>
              <li>• Responsive design for mobile and desktop</li>
              <li>• Click-outside and ESC key handling</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-brand-400">Navigation Integration</h4>
            <ul className="text-gray-400 space-y-1">
              <li>• Direct navigation to Settings page</li>
              <li>• Direct navigation to Profile page</li>
              <li>• Contextual actions per user type</li>
              <li>• Smooth animations and transitions</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedUserManagement;