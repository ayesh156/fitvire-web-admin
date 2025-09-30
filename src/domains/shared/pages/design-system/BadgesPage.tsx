/**
 * Badges Design System Page
 * Showcase of status badges and indicators
 */

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';

export const BadgesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Badges</h2>
        <p className="text-neutral/70 text-lg">
          Status indicators with gradient backgrounds and animations
        </p>
      </motion.div>

      {/* Badge Variants */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Badge Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Standard Badges</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" size="md" withGlow>Primary</Badge>
                <Badge variant="secondary" size="md">Secondary</Badge>
                <Badge variant="success" size="md">Success</Badge>
                <Badge variant="warning" size="md">Warning</Badge>
                <Badge variant="danger" size="md">Danger</Badge>
                <Badge variant="info" size="md">Info</Badge>
                <Badge variant="neutral" size="md">Neutral</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Badges with Dots</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" size="md" dot>Active</Badge>
                <Badge variant="success" size="md" dot>Online</Badge>
                <Badge variant="warning" size="md" dot>Pending</Badge>
                <Badge variant="danger" size="md" dot>Offline</Badge>
                <Badge variant="info" size="md" dot>Processing</Badge>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Badge Sizes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Badge Sizes</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-neutral/70 mb-3">Medium (Default)</p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" size="md">Medium Badge</Badge>
                <Badge variant="success" size="md" dot>With Dot</Badge>
                <Badge variant="warning" size="md" withGlow>With Glow</Badge>
              </div>
            </div>
            <div>
              <p className="text-sm text-neutral/70 mb-3">Small</p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" size="sm">Small Badge</Badge>
                <Badge variant="success" size="sm" dot>With Dot</Badge>
                <Badge variant="info" size="sm">Compact</Badge>
              </div>
            </div>
            <div>
              <p className="text-sm text-neutral/70 mb-3">Extra Small</p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" size="xs">XS</Badge>
                <Badge variant="success" size="xs" dot>Active</Badge>
                <Badge variant="danger" size="xs">New</Badge>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Status Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Common Status Badges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-neutral/70 uppercase tracking-wide">
                User Status
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success" size="sm" dot>Online</Badge>
                <Badge variant="warning" size="sm" dot>Away</Badge>
                <Badge variant="danger" size="sm" dot>Offline</Badge>
                <Badge variant="neutral" size="sm" dot>Invisible</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-neutral/70 uppercase tracking-wide">
                Order Status
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="info" size="sm">Pending</Badge>
                <Badge variant="warning" size="sm">Processing</Badge>
                <Badge variant="success" size="sm">Completed</Badge>
                <Badge variant="danger" size="sm">Cancelled</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-neutral/70 uppercase tracking-wide">
                Priority Levels
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="danger" size="sm">High</Badge>
                <Badge variant="warning" size="sm">Medium</Badge>
                <Badge variant="info" size="sm">Low</Badge>
                <Badge variant="neutral" size="sm">None</Badge>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Contextual Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">In Context</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <div className="text-white font-medium">John Doe</div>
                  <div className="text-neutral/60 text-sm">john.doe@example.com</div>
                </div>
              </div>
              <Badge variant="success" size="sm" dot>Active</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold">AS</span>
                </div>
                <div>
                  <div className="text-white font-medium">Alice Smith</div>
                  <div className="text-neutral/60 text-sm">alice.smith@example.com</div>
                </div>
              </div>
              <Badge variant="warning" size="sm" dot>Pending</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold">MB</span>
                </div>
                <div>
                  <div className="text-white font-medium">Mike Brown</div>
                  <div className="text-neutral/60 text-sm">mike.brown@example.com</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="primary" size="xs">Admin</Badge>
                <Badge variant="success" size="sm" dot>Online</Badge>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Usage Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-primary/10 to-primary-hover/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
      >
        <h4 className="text-primary font-bold text-lg mb-4">Badge Usage Guidelines</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>success</strong> for positive states (active, completed, online)</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>warning</strong> for cautionary states (pending, away)</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>danger</strong> for negative states (error, offline, cancelled)</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>dot</strong> prop for real-time status indicators</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Keep badge text concise (1-2 words maximum)</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default BadgesPage;
