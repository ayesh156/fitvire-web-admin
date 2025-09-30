/**
 * DataTable Component - FitVire Admin Design System
 * Professional data table with ActionMenu integration and intelligent navigation
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { 
  ChevronUp, 
  ChevronDown, 
  Search,
  Filter,
  Download,
  Plus
} from 'lucide-react';
import ActionMenu, { 
  createSettingsMenuItem, 
  createProfileMenuItem, 
  createViewMenuItem, 
  createEditMenuItem, 
  createDeleteMenuItem,
  type MenuItem
} from '../utility/ActionMenu';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { cardBaseClass, cardVariants } from '../ui/componentThemes';

export interface DataTableColumn<T = any> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  className?: string;
  width?: string;
}

export interface DataTableRow {
  id: string | number;
  [key: string]: any;
}

interface DataTableProps<T extends DataTableRow> {
  data: T[];
  columns: DataTableColumn<T>[];
  title?: string;
  description?: string;
  searchable?: boolean;
  filterable?: boolean;
  exportable?: boolean;
  addable?: boolean;
  onAdd?: () => void;
  onExport?: () => void;
  pageSize?: number;
  className?: string;
  // Action menu configuration
  enableActions?: boolean;
  customActions?: (row: T) => MenuItem[];
  onViewDetails?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  // Navigation paths
  settingsPath?: string;
  profilePath?: string;
}

function DataTable<T extends DataTableRow>({
  data,
  columns,
  title,
  description,
  searchable = true,
  filterable = true,
  exportable = true,
  addable = false,
  onAdd,
  onExport,
  pageSize = 10,
  className = "",
  enableActions = true,
  customActions,
  onViewDetails,
  onEdit,
  onDelete,
  settingsPath = "/settings",
  profilePath = "/profile"
}: DataTableProps<T>) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on search term
  const filteredData = data.filter(row => {
    if (!searchTerm) return true;
    return Object.values(row).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    
    if (aValue === bValue) return 0;
    
    const comparison = aValue < bValue ? -1 : 1;
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  const handleSort = (columnKey: string, sortable?: boolean) => {
    if (!sortable) return;
    
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const handleExport = () => {
    if (onExport) {
      onExport();
    } else {
      // Default CSV export
      const csvContent = [
        columns.map(col => col.header).join(','),
        ...filteredData.map(row => 
          columns.map(col => {
            const value = row[col.key as keyof T];
            return `"${String(value).replace(/"/g, '""')}"`;
          }).join(',')
        )
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title || 'data'}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const getDefaultActions = (row: T): MenuItem[] => {
    const actions: MenuItem[] = [];

    // View details action
    if (onViewDetails) {
      actions.push(createViewMenuItem(() => onViewDetails(row)));
    }

    // Edit action
    if (onEdit) {
      actions.push(createEditMenuItem(() => onEdit(row)));
    }

    // Settings navigation
    actions.push(createSettingsMenuItem(() => navigate(settingsPath)));

    // Profile navigation
    actions.push(createProfileMenuItem(() => navigate(profilePath)));

    // Delete action (with divider)
    if (onDelete) {
      actions.push(createDeleteMenuItem(() => onDelete(row)));
    }

    return actions;
  };

  const getActionsForRow = (row: T): MenuItem[] => {
    if (customActions) {
      return customActions(row);
    }
    return getDefaultActions(row);
  };

  const renderCellContent = (column: DataTableColumn<T>, row: T, index: number) => {
    if (column.render) {
      return column.render(row[column.key as keyof T], row, index);
    }
    
    const value = row[column.key as keyof T];
    
    // Handle common data types
    if (typeof value === 'boolean') {
      return <Badge variant={value ? 'success' : 'danger'}>{value ? 'Yes' : 'No'}</Badge>;
    }
    
    if (value && Object.prototype.toString.call(value) === '[object Date]') {
      return (value as Date).toLocaleDateString();
    }
    
    return String(value || '—');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          {title && (
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          )}
          {description && (
            <p className="text-neutral/70">{description}</p>
          )}
        </motion.div>
      )}

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-glass-border bg-surface/40 p-4 backdrop-blur-sm sm:flex-row sm:items-center"
      >
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-1">
          {/* Search */}
          {searchable && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-neutral/50" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 rounded-xl border border-glass-border bg-surface/60 pl-10 pr-4 py-2 text-sm text-white placeholder:text-neutral/60 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all duration-200"
              />
            </div>
          )}

          {/* Results count */}
          <div className="text-sm text-neutral/60">
            Showing {startIndex + 1}-{Math.min(startIndex + pageSize, sortedData.length)} of {sortedData.length} results
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          {filterable && (
            <Button variant="ghost" size="sm" icon={<Filter className="w-4 h-4" />}>
              Filter
            </Button>
          )}
          
          {exportable && (
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Download className="w-4 h-4" />}
              onClick={handleExport}
            >
              Export
            </Button>
          )}
          
          {addable && onAdd && (
            <Button 
              variant="primary" 
              size="sm" 
              icon={<Plus className="w-4 h-4" />}
              onClick={onAdd}
            >
              Add New
            </Button>
          )}
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={clsx(cardBaseClass, cardVariants.surface, 'overflow-hidden')}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-750 border-b border-gray-700">
              <tr>
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className={`
                      px-6 py-4 text-left text-xs font-semibold text-neutral/60 uppercase tracking-wide transition-colors duration-200
                      ${column.sortable ? 'cursor-pointer hover:text-white/90 select-none' : ''}
                      ${column.className || ''}
                    `}
                    style={{ width: column.width }}
                    onClick={() => handleSort(String(column.key), column.sortable)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{column.header}</span>
                      {column.sortable && (
                        <div className="flex flex-col">
                          <ChevronUp 
                            className={`w-3 h-3 ${
                              sortColumn === column.key && sortDirection === 'asc'
                                ? 'text-primary-400' 
                                : 'text-neutral/50'
                            }`} 
                          />
                          <ChevronDown 
                            className={`w-3 h-3 -mt-1 ${
                              sortColumn === column.key && sortDirection === 'desc'
                                ? 'text-primary-400' 
                                : 'text-neutral/50'
                            }`} 
                          />
                        </div>
                      )}
                    </div>
                  </th>
                ))}
                {enableActions && (
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wide w-16">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {paginatedData.map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="hover:bg-gray-750 transition-colors duration-150"
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className={`px-6 py-4 text-sm text-gray-300 ${column.className || ''}`}
                    >
                      {renderCellContent(column, row, startIndex + index)}
                    </td>
                  ))}
                  {enableActions && (
                    <td className="px-6 py-4 text-right">
                      <ActionMenu
                        items={getActionsForRow(row)}
                        size="sm"
                        position="left"
                      />
                    </td>
                  )}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {paginatedData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No data found</div>
            {searchTerm && (
              <div className="text-gray-500 text-sm">
                Try adjusting your search criteria
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between rounded-2xl border border-glass-border bg-surface/40 p-4 backdrop-blur-sm"
        >
          <div className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {/* Page numbers */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`
                      w-8 h-8 text-sm rounded-lg transition-colors duration-150
                      ${currentPage === pageNum
                        ? 'bg-brand-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                      }
                    `}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default DataTable;