/**
 * Tables Design System Page
 * Showcase of data tables, sorting, filtering, and pagination patterns
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Table as TableIcon, Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import Table from '../../components/ui/Table';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export const TablesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active', joined: '2024-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive', joined: '2024-03-10' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Admin', status: 'Active', joined: '2024-01-25' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', role: 'User', status: 'Pending', joined: '2024-04-05' },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com', role: 'Manager', status: 'Active', joined: '2024-02-14' },
    { id: 7, name: 'David Wilson', email: 'david@example.com', role: 'User', status: 'Active', joined: '2024-03-22' },
  ];

  const basicColumns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    { key: 'status', header: 'Status' },
  ];

  const totalPages = Math.ceil(sampleData.length / itemsPerPage);
  const paginatedData = sampleData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Tables</h2>
        <p className="text-neutral/70 text-lg">
          Data tables with sorting, filtering, and pagination capabilities
        </p>
      </motion.div>

      {/* Basic Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <TableIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Basic Table</h3>
          </div>

          <Table columns={basicColumns} data={sampleData.slice(0, 5)} />
        </GlassCard>
      </motion.div>

      {/* Table with Status Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Table with Custom Rendering</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Name</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Email</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Role</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Joined</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.slice(0, 5).map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="border-b border-glass-border/50 hover:bg-surface/20 transition-colors"
                  >
                    <td className="py-4 px-4 text-neutral">{user.name}</td>
                    <td className="py-4 px-4 text-neutral/80">{user.email}</td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={user.role === 'Admin' ? 'primary' : user.role === 'Manager' ? 'secondary' : 'neutral'}
                        size="sm"
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          user.status === 'Active' ? 'success' :
                          user.status === 'Pending' ? 'warning' : 'neutral'
                        }
                        size="sm"
                        dot
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-neutral/70 text-sm">{user.joined}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>

      {/* Table with Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Interactive Table</h3>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search users..."
                leftIcon={<Search className="w-4 h-4" />}
                size="md"
              />
            </div>
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>
              Filters
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4">
                    <button className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                      <span>Name</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-4">
                    <button className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                      <span>Email</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-4">
                    <button className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                      <span>Role</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-4">
                    <button className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                      <span>Status</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-glass-border/50 hover:bg-surface/20 transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-4 text-neutral font-medium">{user.name}</td>
                    <td className="py-4 px-4 text-neutral/80">{user.email}</td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={user.role === 'Admin' ? 'primary' : user.role === 'Manager' ? 'secondary' : 'neutral'}
                        size="sm"
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          user.status === 'Active' ? 'success' :
                          user.status === 'Pending' ? 'warning' : 'neutral'
                        }
                        size="sm"
                        dot
                      >
                        {user.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4 border-t border-glass-border">
            <div className="text-sm text-neutral/70">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
              {Math.min(currentPage * itemsPerPage, sampleData.length)} of {sampleData.length} results
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                icon={<ChevronLeft className="w-4 h-4" />}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      w-8 h-8 rounded-lg text-sm font-medium transition-all
                      ${
                        currentPage === page
                          ? 'bg-primary text-white'
                          : 'text-neutral/70 hover:bg-surface/40'
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                icon={<ChevronRight className="w-4 h-4" />}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Compact Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Compact Table</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-2 px-3 text-xs font-semibold text-white uppercase tracking-wider">Name</th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-white uppercase tracking-wider">Role</th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-white uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.slice(0, 5).map((user) => (
                  <tr key={user.id} className="border-b border-glass-border/30 hover:bg-surface/10 transition-colors">
                    <td className="py-2 px-3 text-sm text-neutral">{user.name}</td>
                    <td className="py-2 px-3 text-sm text-neutral/80">{user.role}</td>
                    <td className="py-2 px-3">
                      <Badge variant={user.status === 'Active' ? 'success' : 'neutral'} size="xs">
                        {user.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>

      {/* Striped Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Striped Table</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Name</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Email</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.slice(0, 6).map((user, index) => (
                  <tr
                    key={user.id}
                    className={`
                      border-b border-glass-border/30 transition-colors
                      ${index % 2 === 0 ? 'bg-surface/10' : 'bg-transparent'}
                      hover:bg-surface/20
                    `}
                  >
                    <td className="py-3 px-4 text-neutral">{user.name}</td>
                    <td className="py-3 px-4 text-neutral/80">{user.email}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={user.status === 'Active' ? 'success' : user.status === 'Pending' ? 'warning' : 'neutral'}
                        size="sm"
                        dot
                      >
                        {user.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>

      {/* Usage Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-primary/10 to-primary-hover/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
      >
        <h4 className="text-primary font-bold text-lg mb-4">Table Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>sortable columns</strong> for data that users need to organize</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Implement <strong>pagination</strong> for tables with more than 20 rows</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Provide <strong>search and filters</strong> for large datasets</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>hover states</strong> to indicate interactive rows</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Keep table headers <strong>sticky</strong> for long tables</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>badges</strong> for status indicators instead of plain text</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default TablesPage;
