/**
 * Partners Management Page
 * Overview and management of all partner accounts (trainers, gyms, organizations)
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Building2,
  User,
  TrendingUp,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  CheckCircle
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import PageHeader from '../components/ui/PageHeader';

interface Partner {
  id: string;
  name: string;
  type: 'individual' | 'organization';
  email: string;
  joinedDate: string;
  status: 'active' | 'pending' | 'suspended';
  verified: boolean;
  services: string;
  revenue: string;
}

export const PartnersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - TODO: Replace with API integration
  const mockPartners: Partner[] = [
    {
      id: '1',
      name: 'FitZone Gym',
      type: 'organization',
      email: 'contact@fitzone.com',
      joinedDate: '2024-01-10',
      status: 'active',
      verified: true,
      services: 'Gym Membership',
      revenue: '$12,450'
    },
    {
      id: '2',
      name: 'Alex Thompson',
      type: 'individual',
      email: 'alex.trainer@example.com',
      joinedDate: '2024-02-15',
      status: 'active',
      verified: true,
      services: 'Personal Training',
      revenue: '$3,280'
    },
    {
      id: '3',
      name: 'Sarah Williams',
      type: 'individual',
      email: 'sarah.yoga@example.com',
      joinedDate: '2024-03-01',
      status: 'pending',
      verified: false,
      services: 'Yoga Classes',
      revenue: '$0'
    }
  ];

  const stats = [
    { label: 'Total Partners', value: '1,234', trend: '+18%', icon: UserCheck, color: 'from-blue-500 to-blue-600' },
    { label: 'Individual', value: '856', trend: '+15%', icon: User, color: 'from-green-500 to-green-600' },
    { label: 'Organizations', value: '378', trend: '+22%', icon: Building2, color: 'from-purple-500 to-purple-600' },
    { label: 'Total Revenue', value: '$245K', trend: '+28%', icon: TrendingUp, color: 'from-orange-500 to-orange-600' }
  ];

  const getStatusBadge = (status: Partner['status']) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" size="sm" dot>Active</Badge>;
      case 'pending':
        return <Badge variant="warning" size="sm" dot>Pending</Badge>;
      case 'suspended':
        return <Badge variant="danger" size="sm">Suspended</Badge>;
      default:
        return <Badge variant="neutral" size="sm">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: Partner['type']) => {
    switch (type) {
      case 'individual':
        return <Badge variant="info" size="sm">Individual</Badge>;
      case 'organization':
        return <Badge variant="primary" size="sm">Organization</Badge>;
      default:
        return <Badge variant="neutral" size="sm">{type}</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Partners"
        description="Manage all service providers including trainers, gyms, and fitness organizations"
        icon={<UserCheck className="w-8 h-8 text-primary" />}
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
                placeholder="Search partners..."
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
                Add Partner
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Partners Table */}
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
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Partner</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Type</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Services</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Revenue</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Status</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockPartners.map((partner) => (
                  <tr key={partner.id} className="border-b border-glass-border/50 hover:bg-surface/20 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{partner.name}</span>
                            {partner.verified && (
                              <CheckCircle className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                          <div className="text-neutral/60 text-sm">{partner.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">{getTypeBadge(partner.type)}</td>
                    <td className="py-4 px-4 text-neutral/80 text-sm">{partner.services}</td>
                    <td className="py-4 px-4 text-white font-medium">{partner.revenue}</td>
                    <td className="py-4 px-4">{getStatusBadge(partner.status)}</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-blue-500/10 text-blue-400 transition-colors">
                          <Edit className="w-4 h-4" />
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
            <p className="text-neutral/70 text-sm">Showing 1-3 of {mockPartners.length} partners</p>
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

export default PartnersPage;
