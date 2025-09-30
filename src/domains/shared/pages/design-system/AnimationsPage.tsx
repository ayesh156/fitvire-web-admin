/**
 * Animations Design System Page
 * Showcase of micro-interactions and transitions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Shield, Zap } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export const AnimationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Animations</h2>
        <p className="text-neutral/70 text-lg">
          Subtle animations that enhance user experience
        </p>
      </motion.div>

      {/* Hover Animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Hover Animations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="p-8 bg-gradient-to-br from-primary/20 to-primary-hover/20 rounded-2xl border border-primary/30 text-center cursor-pointer"
            >
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-white font-semibold">Scale & Rotate</h4>
              <p className="text-neutral/60 text-sm mt-2">Hover to interact</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 text-center cursor-pointer"
            >
              <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold">Lift Up</h4>
              <p className="text-neutral/60 text-sm mt-2">Hover to lift</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 text-center cursor-pointer"
            >
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold">Scale & Press</h4>
              <p className="text-neutral/60 text-sm mt-2">Click to compress</p>
            </motion.div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Status Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Status Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Animated Status</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-xl">
                  <div className="status-indicator active">
                    <span className="text-green-400 font-medium">System Active</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-xl">
                  <div className="status-indicator warning">
                    <span className="text-yellow-400 font-medium">Maintenance Mode</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-xl">
                  <div className="status-indicator error">
                    <span className="text-red-400 font-medium">Service Down</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-xl">
                  <div className="status-indicator inactive">
                    <span className="text-gray-400 font-medium">Offline Status</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Pulse Animations</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-xl">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-subtle"></div>
                  <span className="text-white">Subtle Pulse Effect</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-white">Standard Ping Animation</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-surface/30 rounded-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-spin border-2 border-blue-500 border-t-transparent"></div>
                  <span className="text-white">Loading Spinner</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Entrance Animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Entrance Animations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-surface/20 rounded-xl text-center"
            >
              <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-white font-medium">Fade In Up</p>
              <p className="text-neutral/60 text-sm mt-1">opacity + translateY</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-surface/20 rounded-xl text-center"
            >
              <Zap className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <p className="text-white font-medium">Fade In Scale</p>
              <p className="text-neutral/60 text-sm mt-1">opacity + scale</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-surface/20 rounded-xl text-center"
            >
              <Zap className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <p className="text-white font-medium">Slide In Right</p>
              <p className="text-neutral/60 text-sm mt-1">opacity + translateX</p>
            </motion.div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Transition Timing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Transition Timing</h3>
          <div className="space-y-4">
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Fast (150ms)</span>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  transition-all duration-150
                </code>
              </div>
              <p className="text-neutral/60 text-sm">
                Used for small UI changes like hover states on small elements
              </p>
            </div>

            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Default (300ms)</span>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  transition-all duration-300
                </code>
              </div>
              <p className="text-neutral/60 text-sm">
                Standard timing for most UI interactions and state changes
              </p>
            </div>

            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Slow (500ms)</span>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  transition-all duration-500
                </code>
              </div>
              <p className="text-neutral/60 text-sm">
                Used for complex animations and page transitions
              </p>
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
        <h4 className="text-primary font-bold text-lg mb-4">Animation Principles</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Keep animations <strong>subtle and purposeful</strong> - they should enhance, not distract</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>consistent timing</strong> across similar interactions</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Prefer <strong>hardware-accelerated properties</strong> (transform, opacity)</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Respect user <strong>prefers-reduced-motion</strong> settings</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>ease-out</strong> for entrances, <strong>ease-in</strong> for exits</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AnimationsPage;
