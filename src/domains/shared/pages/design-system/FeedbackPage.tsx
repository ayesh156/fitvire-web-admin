/**
 * Feedback Design System Page
 * Showcase of loading states, empty states, error states, and user feedback patterns
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Loader2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Inbox,
  Search,
  FileText,
  Package,
  Users,
  TrendingUp,
} from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Spinner from '../../components/ui/Spinner';
import Button from '../../components/ui/Button';

export const FeedbackPage: React.FC = () => {
  const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleAction = (state: 'loading' | 'success' | 'error') => {
    setLoadingState('loading');
    setTimeout(() => {
      setLoadingState(state);
      setTimeout(() => setLoadingState('idle'), 2000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Feedback</h2>
        <p className="text-neutral/70 text-lg">
          Loading states, empty states, and user feedback patterns
        </p>
      </motion.div>

      {/* Loading States */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
            <h3 className="text-xl font-bold text-white">Loading States</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface/20 rounded-xl text-center">
              <Spinner size="lg" />
              <p className="text-white font-medium mt-4 mb-1">Large Spinner</p>
              <p className="text-neutral/60 text-sm">For page-level loading</p>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl text-center">
              <Spinner size="md" />
              <p className="text-white font-medium mt-4 mb-1">Medium Spinner</p>
              <p className="text-neutral/60 text-sm">For component loading</p>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl text-center">
              <Spinner size="sm" />
              <p className="text-white font-medium mt-4 mb-1">Small Spinner</p>
              <p className="text-neutral/60 text-sm">For inline loading</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-surface/20 rounded-xl">
            <h4 className="text-white font-semibold mb-4">Skeleton Loading</h4>
            <div className="space-y-3">
              <div className="h-4 bg-surface/60 rounded animate-pulse"></div>
              <div className="h-4 bg-surface/60 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-surface/60 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Action Feedback States */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Action Feedback States</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold">Success State</h4>
                  <p className="text-neutral/60 text-sm">Action completed successfully</p>
                </div>
              </div>
              <p className="text-neutral/70 text-sm">
                Your changes have been saved and will take effect immediately.
              </p>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold">Error State</h4>
                  <p className="text-neutral/60 text-sm">Action failed to complete</p>
                </div>
              </div>
              <p className="text-neutral/70 text-sm">
                Unable to process your request. Please check your connection and try again.
              </p>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-yellow-400 font-semibold">Warning State</h4>
                  <p className="text-neutral/60 text-sm">Proceed with caution</p>
                </div>
              </div>
              <p className="text-neutral/70 text-sm">
                This action cannot be undone. Make sure you want to proceed.
              </p>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center animate-spin">
                  <Loader2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold">Processing State</h4>
                  <p className="text-neutral/60 text-sm">Action in progress</p>
                </div>
              </div>
              <p className="text-neutral/70 text-sm">
                Please wait while we process your request. This may take a moment.
              </p>
            </div>
          </div>

          <div className="p-6 bg-surface/30 rounded-xl">
            <h4 className="text-white font-semibold mb-4">Interactive Demo</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button
                variant="success"
                onClick={() => handleAction('success')}
                disabled={loadingState === 'loading'}
              >
                Trigger Success
              </Button>
              <Button
                variant="danger"
                onClick={() => handleAction('error')}
                disabled={loadingState === 'loading'}
              >
                Trigger Error
              </Button>
            </div>

            {loadingState !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-surface/40 flex items-center space-x-3"
              >
                {loadingState === 'loading' && (
                  <>
                    <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                    <span className="text-neutral/80">Processing your request...</span>
                  </>
                )}
                {loadingState === 'success' && (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Success! Action completed.</span>
                  </>
                )}
                {loadingState === 'error' && (
                  <>
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Error! Something went wrong.</span>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </GlassCard>
      </motion.div>

      {/* Empty States */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Empty States</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-surface/20 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Inbox className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">No Messages</h4>
              <p className="text-neutral/70 text-sm mb-4">
                You don't have any messages yet. When you receive a message, it will appear here.
              </p>
              <Button variant="primary" size="sm">
                Send a Message
              </Button>
            </div>

            <div className="p-8 bg-surface/20 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">No Results Found</h4>
              <p className="text-neutral/70 text-sm mb-4">
                We couldn't find any results matching your search. Try using different keywords.
              </p>
              <Button variant="outline" size="sm">
                Clear Search
              </Button>
            </div>

            <div className="p-8 bg-surface/20 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">No Documents</h4>
              <p className="text-neutral/70 text-sm mb-4">
                Upload your first document to get started with document management.
              </p>
              <Button variant="success" size="sm">
                Upload Document
              </Button>
            </div>

            <div className="p-8 bg-surface/20 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">No Orders</h4>
              <p className="text-neutral/70 text-sm mb-4">
                You haven't placed any orders yet. Browse our catalog to get started.
              </p>
              <Button variant="secondary" size="sm">
                Browse Products
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Progress Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Progress Indicators</h3>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Profile Completion</span>
                <span className="text-primary font-semibold">75%</span>
              </div>
              <div className="w-full h-2 bg-surface/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Upload Progress</span>
                <span className="text-green-400 font-semibold">100%</span>
              </div>
              <div className="w-full h-2 bg-surface/40 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Processing</span>
                <span className="text-blue-400 font-semibold">45%</span>
              </div>
              <div className="w-full h-2 bg-surface/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '45%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Storage Used</span>
                <span className="text-yellow-400 font-semibold">90%</span>
              </div>
              <div className="w-full h-2 bg-surface/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Stats Cards with States */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Stat Cards with States</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center space-x-1 text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12%</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">2,543</div>
              <div className="text-neutral/70 text-sm">Total Users</div>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl opacity-50">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-surface/40 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-neutral/40" />
                </div>
                <Spinner size="sm" />
              </div>
              <div className="text-3xl font-bold text-neutral/40 mb-1">---</div>
              <div className="text-neutral/50 text-sm">Loading...</div>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl border border-red-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
              </div>
              <div className="text-red-400 font-semibold mb-1">Error</div>
              <div className="text-neutral/70 text-sm">Failed to load data</div>
            </div>
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
        <h4 className="text-primary font-bold text-lg mb-4">Feedback Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Always <strong>provide feedback</strong> for user actions - loading, success, error states</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>skeleton loaders</strong> instead of spinners for content that has a known structure</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Make empty states <strong>actionable</strong> - tell users what they can do next</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Show <strong>progress indicators</strong> for long-running operations</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>appropriate icons</strong> that match the message type and context</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Provide <strong>clear error messages</strong> with actionable solutions when things go wrong</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default FeedbackPage;
