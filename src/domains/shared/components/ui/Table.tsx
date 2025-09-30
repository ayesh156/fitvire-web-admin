/**
 * Table Component - FitVire Admin Design System
 * Reusable table component with sorting, pagination and actions
 */

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, MoreHorizontal, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { cardBaseClass, cardVariants } from './componentThemes';

export interface TableColumn<T = any> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}

export interface TableAction<T = any> {
  label: string;
  icon?: React.ReactNode;
  onClick: (item: T) => void;
  className?: string;
  show?: (item: T) => boolean;
}

interface TableProps<T = any> {
  data: T[];
  columns: TableColumn<T>[];
  actions?: TableAction<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  emptyMessage?: string;
  loading?: boolean;
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
  actions,
  searchable = false,
  searchPlaceholder = "Search...",
  title,
  subtitle,
  className = "",
  emptyMessage = "No data available",
  loading = false
}: TableProps<T>) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [showActionsFor, setShowActionsFor] = useState<number | null>(null);

  // Close action menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => setShowActionsFor(null);
    if (showActionsFor !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showActionsFor]);

  // Handle sorting
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  // Filter and sort data
  const processedData = React.useMemo(() => {
    let filtered = data;

    // Apply search filter
    if (searchable && searchTerm) {
      filtered = data.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply sorting
    if (sortKey) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerm, sortKey, sortDirection, searchable]);

  const getCellValue = (item: T, column: TableColumn<T>) => {
    const value = item[column.key as keyof T];
    return column.render ? column.render(value, item) : value;
  };

  if (loading) {
    return (
      <div className={`bg-white rounded-2xl border border-gray-200 ${className}`}>
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="grid grid-cols-4 gap-4">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(cardBaseClass, cardVariants.surface, 'overflow-hidden', className)}
    >
      {/* Header */}
      {(title || subtitle || searchable) && (
        <div className="px-6 py-5 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
              )}
            </div>
            
            {searchable && (
              <div className="relative max-w-xs">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-neutral/50" />
                </div>
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 text-sm rounded-xl border border-glass-border bg-surface/60 text-white placeholder:text-neutral/60 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all duration-200"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white/5 border-b border-white/5">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={clsx(
                    'px-6 py-4 text-left text-xs font-semibold text-neutral/60 uppercase tracking-wide transition-colors duration-200',
                    column.sortable && 'cursor-pointer hover:bg-white/10',
                    column.className
                  )}
                  onClick={() => column.sortable && handleSort(String(column.key))}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.header}</span>
                    {column.sortable && (
                      <div className="flex flex-col">
                        <ChevronUp
                          className={clsx(
                            'h-3 w-3',
                            sortKey === column.key && sortDirection === 'asc'
                              ? 'text-primary-400'
                              : 'text-neutral/50'
                          )}
                        />
                        <ChevronDown
                          className={clsx(
                            'h-3 w-3 -mt-1',
                            sortKey === column.key && sortDirection === 'desc'
                              ? 'text-primary-400'
                              : 'text-neutral/50'
                          )}
                        />
                      </div>
                    )}
                  </div>
                </th>
              ))}
              {actions && actions.length > 0 && (
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-white/5">
            {processedData.length === 0 ? (
              <tr>
                <td 
                  colSpan={columns.length + (actions ? 1 : 0)} 
                  className="px-6 py-12 text-center text-gray-500"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-lg font-medium text-white mb-1">No results found</p>
                    <p className="text-sm text-neutral/60">{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            ) : (
              processedData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-white/5 transition-colors duration-150"
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className={clsx('px-6 py-4 whitespace-nowrap text-sm text-white/90', column.className)}>
                      {getCellValue(item, column)}
                    </td>
                  ))}
                  {actions && actions.length > 0 && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowActionsFor(showActionsFor === index ? null : index);
                          }}
                          className="text-neutral/50 hover:text-neutral p-1 rounded-full hover:bg-white/10 transition-colors duration-150"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                        
                        {showActionsFor === index && (
                          <div className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-glass-bg/90 backdrop-blur-lg shadow-[0_20px_45px_rgba(0,0,0,0.35)] z-50 transform -translate-x-2">
                            <div className="py-1">
                              {actions
                                .filter(action => !action.show || action.show(item))
                                .map((action, actionIndex) => (
                                <button
                                  key={actionIndex}
                                  onClick={() => {
                                    action.onClick(item);
                                    setShowActionsFor(null);
                                  }}
                                  className={clsx(
                                    'flex items-center w-full px-4 py-2 text-sm text-left text-neutral/80 hover:bg-white/10 transition-colors duration-150',
                                    action.className
                                  )}
                                >
                                  {action.icon && <span className="mr-3">{action.icon}</span>}
                                  {action.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  )}
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Table;