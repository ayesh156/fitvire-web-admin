/**
 * User Management Page - FitVire Admin Design System
 * TailAdmin-inspired user management with dark theme
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Filter,
  Download,
  Users,
  UserCheck,
  UserX
} from 'lucide-react';
import Table from '../components/ui/Table';
import type { TableColumn, TableAction } from '../components/ui/Table';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import FilterComponent from '../components/ui/FilterComponent';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'partner' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
  lastActive: string;
  workoutsCompleted?: number;
  subscriptionType?: string;
  partnerType?: string;
}

const UserManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customers' | 'partners' | 'management'>('customers');
  const [statusFilters, setStatusFilters] = useState<string[]>([]);
  const [subscriptionFilters, setSubscriptionFilters] = useState<string[]>([]);
  const [partnerTypeFilters, setPartnerTypeFilters] = useState<string[]>([]);

  // Mock data - TODO: Replace with API data
  const mockUsers: User[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      role: 'customer',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2024-09-24',
      workoutsCompleted: 45,
      subscriptionType: 'Premium'
    },
    {
      id: '2',
      name: 'Elite Fitness Center',
      email: 'contact@elitefitness.com',
      role: 'partner',
      status: 'active',
      joinDate: '2024-02-01',
      lastActive: '2024-09-25',
      partnerType: 'Gym'
    },
    {
      id: '3',
      name: 'Mike Davis',
      email: 'mike.davis@email.com',
      role: 'customer',
      status: 'inactive',
      joinDate: '2024-03-10',
      lastActive: '2024-08-15',
      workoutsCompleted: 12,
      subscriptionType: 'Basic'
    },
    {
      id: '4',
      name: 'John Smith',
      email: 'john.smith@fitvire.com',
      role: 'admin',
      status: 'active',
      joinDate: '2023-12-01',
      lastActive: '2024-09-25'
    }
  ];

  const filteredUsers = mockUsers.filter(user => {
    // Filter by tab
    let tabMatch = false;
    if (activeTab === 'customers') tabMatch = user.role === 'customer';
    if (activeTab === 'partners') tabMatch = user.role === 'partner';
    if (activeTab === 'management') tabMatch = user.role === 'admin';
    
    if (!tabMatch) return false;

    // Filter by status
    if (statusFilters.length > 0 && !statusFilters.includes(user.status)) {
      return false;
    }

    // Filter by subscription (customers only)
    if (activeTab === 'customers' && subscriptionFilters.length > 0) {
      if (!user.subscriptionType || !subscriptionFilters.includes(user.subscriptionType.toLowerCase())) {
        return false;
      }
    }

    // Filter by partner type (partners only)
    if (activeTab === 'partners' && partnerTypeFilters.length > 0) {
      if (!user.partnerType) return false;
      const partnerTypeMap: Record<string, string> = {
        'trainer': 'Personal Trainer',
        'gym': 'Gym Owner',
        'nutritionist': 'Nutritionist'
      };
      const matchingTypes = partnerTypeFilters.map(filter => partnerTypeMap[filter]).filter(Boolean);
      if (!matchingTypes.includes(user.partnerType)) {
        return false;
      }
    }

    return true;
  });

  const columns: TableColumn<User>[] = [
    {
      key: 'name',
      header: 'User',
      sortable: true,
      render: (_, user) => (
        <div className="flex items-center">
          <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-sm font-medium text-white">
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
      )
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (value) => (
        <Badge 
          variant={value === 'active' ? 'success' : value === 'suspended' ? 'danger' : 'warning'}
          dot
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      )
    },
    {
      key: 'joinDate',
      header: 'Join Date',
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString()
    },
    {
      key: 'lastActive',
      header: 'Last Active',
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString()
    }
  ];

  // Add role-specific columns
  if (activeTab === 'customers') {
    columns.splice(2, 0, 
      {
        key: 'subscriptionType',
        header: 'Subscription',
        render: (value) => (
          <Badge variant={value === 'Premium' ? 'primary' : 'secondary'}>
            {value}
          </Badge>
        )
      },
      {
        key: 'workoutsCompleted',
        header: 'Workouts',
        sortable: true,
        render: (value) => (
          <span className="text-brand-400 font-medium">{value || 0}</span>
        )
      }
    );
  } else if (activeTab === 'partners') {
    columns.splice(2, 0, {
      key: 'partnerType',
      header: 'Type',
      render: (value) => (
        <Badge variant="info">{value}</Badge>
      )
    });
  }

  const actions: TableAction<User>[] = [
    {
      label: 'View Details',
      icon: <Eye className="w-4 h-4" />,
      onClick: (user) => console.log('View user:', user),
    },
    {
      label: 'Edit User',
      icon: <Edit className="w-4 h-4" />,
      onClick: (user) => console.log('Edit user:', user),
    },
    {
      label: 'Delete User',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: (user) => console.log('Delete user:', user),
      className: 'text-red-600 hover:bg-red-50',
      show: (user) => user.role !== 'admin'
    }
  ];

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'customers': return <Users className="w-4 h-4" />;
      case 'partners': return <UserCheck className="w-4 h-4" />;
      case 'management': return <UserX className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            User Management
          </h1>
          <p className="text-gray-400">
            Manage customers, partners, and administrative users across the FitVire platform.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            icon={<Download className="w-4 h-4" />}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Export
          </Button>
          <Button
            variant="primary"
            icon={<Plus className="w-4 h-4" />}
          >
            Add User
          </Button>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="border-b border-gray-700"
      >
        <nav className="flex space-x-8">
          {(['customers', 'partners', 'management'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab 
                  ? 'border-brand-500 text-brand-400' 
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }
              `}
            >
              {getTabIcon(tab)}
              <span className="capitalize">{tab}</span>
              <Badge variant="gray" size="sm">
                {filteredUsers.length}
              </Badge>
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-white">Filters</span>
            <div className="text-sm text-gray-400">
              Showing {filteredUsers.length} {activeTab}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-400">Sort by:</div>
            <select className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500">
              <option>Name</option>
              <option>Join Date</option>
              <option>Last Active</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FilterComponent
            label="Status"
            options={[
              { value: 'active', label: 'Active', count: mockUsers.filter(u => u.role === (activeTab === 'customers' ? 'customer' : activeTab === 'partners' ? 'partner' : 'admin') && u.status === 'active').length },
              { value: 'inactive', label: 'Inactive', count: mockUsers.filter(u => u.role === (activeTab === 'customers' ? 'customer' : activeTab === 'partners' ? 'partner' : 'admin') && u.status === 'inactive').length },
              { value: 'suspended', label: 'Suspended', count: mockUsers.filter(u => u.role === (activeTab === 'customers' ? 'customer' : activeTab === 'partners' ? 'partner' : 'admin') && u.status === 'suspended').length }
            ]}
            selectedValues={statusFilters}
            onSelectionChange={setStatusFilters}
            placeholder="All Statuses"
          />

          {activeTab === 'customers' && (
            <FilterComponent
              label="Subscription"
              options={[
                { value: 'premium', label: 'Premium', count: mockUsers.filter(u => u.role === 'customer' && u.subscriptionType === 'Premium').length },
                { value: 'basic', label: 'Basic', count: mockUsers.filter(u => u.role === 'customer' && u.subscriptionType === 'Basic').length },
                { value: 'free', label: 'Free Trial', count: mockUsers.filter(u => u.role === 'customer' && u.subscriptionType === 'Free Trial').length }
              ]}
              selectedValues={subscriptionFilters}
              onSelectionChange={setSubscriptionFilters}
              placeholder="All Subscriptions"
            />
          )}

          {activeTab === 'partners' && (
            <FilterComponent
              label="Partner Type"
              options={[
                { value: 'trainer', label: 'Personal Trainer', count: mockUsers.filter(u => u.role === 'partner' && u.partnerType === 'Personal Trainer').length },
                { value: 'gym', label: 'Gym Owner', count: mockUsers.filter(u => u.role === 'partner' && u.partnerType === 'Gym Owner').length },
                { value: 'nutritionist', label: 'Nutritionist', count: mockUsers.filter(u => u.role === 'partner' && u.partnerType === 'Nutritionist').length }
              ]}
              selectedValues={partnerTypeFilters}
              onSelectionChange={setPartnerTypeFilters}
              placeholder="All Partner Types"
            />
          )}
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Table
          data={filteredUsers}
          columns={columns}
          actions={actions}
          searchable={true}
          searchPlaceholder={`Search ${activeTab}...`}
          className="bg-gray-800 border-gray-700"
          emptyMessage={`No ${activeTab} found`}
        />
      </motion.div>
    </div>
  );
};

export default UserManagement;