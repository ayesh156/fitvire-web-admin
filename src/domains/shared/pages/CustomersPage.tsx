/**
 * Customers Management Page
 * Overview and management of all customer accounts
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Users,
  TrendingUp,
  Activity,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import PageHeader from '../components/ui/PageHeader';

interface Customer {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  status: 'active' | 'inactive' | 'suspended';
  subscription: string;
  totalSpent: string;
  lastActive: string;
}

export const CustomersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - TODO: Replace with API integration
  const mockCustomers: Customer[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      joinedDate: '2024-01-15',
      status: 'active',
      subscription: 'Premium',
      totalSpent: '$1,245',
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      joinedDate: '2024-02-20',
      status: 'active',
      subscription: 'Basic',
      totalSpent: '$589',
      lastActive: '1 day ago'
    },
    {
      id: '3',
      name: 'Mike Chen',
      email: 'mike.chen@example.com',
      joinedDate: '2023-12-01',
      status: 'inactive',
      subscription: 'Free',
      totalSpent: '$0',
      lastActive: '2 weeks ago'
    }
  ];

  const stats = [
    { label: 'Total Customers', value: '12,543', trend: '+12%', icon: ShoppingBag, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Users', value: '8,234', trend: '+8%', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Revenue', value: '$125K', trend: '+24%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { label: 'Engagement', value: '89%', trend: '+5%', icon: Activity, color: 'from-orange-500 to-orange-600' }
  ];

  const getStatusBadge = (status: Customer['status']) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" size="sm" dot>Active</Badge>;
      case 'inactive':
        return <Badge variant="neutral" size="sm">Inactive</Badge>;
      case 'suspended':
        return <Badge variant="danger" size="sm">Suspended</Badge>;
      default:
        return <Badge variant="neutral" size="sm">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Customers"
        description="Manage all customer accounts and track engagement across the FitVire platform"
        icon={<ShoppingBag className="w-8 h-8 text-primary" />}
      />

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard padding="md" hoverEffect="lift" interactive>
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral/70 text-sm">{stat.label}</span>
                  <Badge variant="success" size="xs">{stat.trend}</Badge>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Filters and Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="md" variant="surface">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <Input
                placeholder="Search customers..."
                leftIcon={<Search className="w-4 h-4" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" icon={<Filter className="w-4 h-4" />}>
                Filter
              </Button>
              <Button variant="secondary" icon={<Download className="w-4 h-4" />}>
                Export
              </Button>
              <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
                Add Customer
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Customers Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Customer</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Subscription</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Total Spent</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Last Active</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-glass-border/50 hover:bg-surface/20 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <div className="text-white font-medium">{customer.name}</div>
                        <div className="text-neutral/60 text-sm">{customer.email}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={customer.subscription === 'Premium' ? 'primary' : 'secondary'} size="sm">
                        {customer.subscription}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-white font-medium">{customer.totalSpent}</td>
                    <td className="py-4 px-4">{getStatusBadge(customer.status)}</td>
                    <td className="py-4 px-4 text-neutral/70 text-sm">{customer.lastActive}</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-blue-500/10 text-blue-400 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-neutral/70 text-sm">Showing 1-3 of {mockCustomers.length} customers</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default CustomersPage;
