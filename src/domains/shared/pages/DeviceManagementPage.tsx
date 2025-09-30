/**
 * Device Management Page
 * Track and manage all connected devices across the FitVire platform
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Tablet,
  Monitor,
  Activity,
  Search,
  Filter,
  Download,
  Bell,
  Eye,
  Power,
  AlertTriangle
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import PageHeader from '../components/ui/PageHeader';

interface Device {
  id: string;
  deviceName: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  owner: string;
  os: string;
  status: 'active' | 'inactive' | 'blocked';
  lastActive: string;
  location: string;
}

export const DeviceManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - TODO: Replace with API integration
  const mockDevices: Device[] = [
    {
      id: '1',
      deviceName: 'iPhone 14 Pro',
      deviceType: 'mobile',
      owner: 'John Doe',
      os: 'iOS 17.2',
      status: 'active',
      lastActive: '2 minutes ago',
      location: 'New York, USA'
    },
    {
      id: '2',
      deviceName: 'Samsung Galaxy Tab S9',
      deviceType: 'tablet',
      owner: 'Sarah Johnson',
      os: 'Android 14',
      status: 'active',
      lastActive: '1 hour ago',
      location: 'London, UK'
    },
    {
      id: '3',
      deviceName: 'MacBook Pro',
      deviceType: 'desktop',
      owner: 'Mike Chen',
      os: 'macOS 14.2',
      status: 'inactive',
      lastActive: '2 days ago',
      location: 'Singapore'
    },
    {
      id: '4',
      deviceName: 'Unknown Device',
      deviceType: 'mobile',
      owner: 'Suspicious User',
      os: 'Android 12',
      status: 'blocked',
      lastActive: '1 week ago',
      location: 'Unknown'
    }
  ];

  const stats = [
    { label: 'Total Devices', value: '45,234', trend: '+12%', icon: Smartphone, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Now', value: '12,543', trend: '+8%', icon: Activity, color: 'from-green-500 to-green-600' },
    { label: 'Blocked', value: '234', trend: '-15%', icon: AlertTriangle, color: 'from-red-500 to-red-600' },
    { label: 'Notifications', value: '1,234', trend: '+5%', icon: Bell, color: 'from-purple-500 to-purple-600' }
  ];

  const getStatusBadge = (status: Device['status']) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" size="sm" dot>Active</Badge>;
      case 'inactive':
        return <Badge variant="neutral" size="sm">Inactive</Badge>;
      case 'blocked':
        return <Badge variant="danger" size="sm">Blocked</Badge>;
      default:
        return <Badge variant="neutral" size="sm">{status}</Badge>;
    }
  };

  const getDeviceIcon = (type: Device['deviceType']) => {
    switch (type) {
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-primary" />;
      case 'tablet':
        return <Tablet className="w-5 h-5 text-blue-400" />;
      case 'desktop':
        return <Monitor className="w-5 h-5 text-purple-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-neutral/60" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Device Management"
        description="Monitor and manage all connected devices across the FitVire platform"
        icon={<Smartphone className="w-8 h-8 text-primary" />}
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
                  <Badge variant={stat.trend.startsWith('+') ? 'success' : 'danger'} size="xs">
                    {stat.trend}
                  </Badge>
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
                placeholder="Search devices..."
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
              <Button variant="primary" icon={<Bell className="w-4 h-4" />}>
                Send Notification
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Devices Table */}
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
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Device</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Owner</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">OS</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Location</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Last Active</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Status</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockDevices.map((device) => (
                  <tr key={device.id} className="border-b border-glass-border/50 hover:bg-surface/20 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        {getDeviceIcon(device.deviceType)}
                        <div>
                          <div className="text-white font-medium">{device.deviceName}</div>
                          <div className="text-neutral/60 text-sm capitalize">{device.deviceType}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-neutral/80">{device.owner}</td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary" size="sm">{device.os}</Badge>
                    </td>
                    <td className="py-4 px-4 text-neutral/70 text-sm">{device.location}</td>
                    <td className="py-4 px-4 text-neutral/70 text-sm">{device.lastActive}</td>
                    <td className="py-4 px-4">{getStatusBadge(device.status)}</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          className={`p-2 rounded-lg transition-colors ${
                            device.status === 'blocked' 
                              ? 'hover:bg-green-500/10 text-green-400' 
                              : 'hover:bg-red-500/10 text-red-400'
                          }`}
                        >
                          <Power className="w-4 h-4" />
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
            <p className="text-neutral/70 text-sm">Showing 1-4 of {mockDevices.length} devices</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-4">Device Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-neutral/70 text-sm">Mobile Devices</span>
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-white">68%</div>
              <div className="text-xs text-neutral/60 mt-1">30,759 devices</div>
            </div>
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-neutral/70 text-sm">Tablet Devices</span>
                <Tablet className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">22%</div>
              <div className="text-xs text-neutral/60 mt-1">9,951 devices</div>
            </div>
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-neutral/70 text-sm">Desktop Devices</span>
                <Monitor className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">10%</div>
              <div className="text-xs text-neutral/60 mt-1">4,523 devices</div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default DeviceManagementPage;
