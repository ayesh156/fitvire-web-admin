/**
 * Cards Design System Page
 * Showcase of glass morphism cards and layouts
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Target,
  Shield,
  Users,
  TrendingUp,
  Heart,
} from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';

export const CardsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Cards</h2>
        <p className="text-neutral/70 text-lg">
          Glass morphism effects with improved backdrop filtering
        </p>
      </motion.div>

      {/* Card Variants */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Card Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard padding="md" variant="glass">
              <h4 className="text-white font-semibold mb-2">Glass Card</h4>
              <p className="text-neutral/70 text-sm">
                Enhanced backdrop blur with glassmorphism effect
              </p>
            </GlassCard>

            <GlassCard padding="md" variant="surface">
              <h4 className="text-white font-semibold mb-2">Surface Card</h4>
              <p className="text-neutral/70 text-sm">
                Solid surface with subtle transparency
              </p>
            </GlassCard>

            <GlassCard padding="md" variant="elevated">
              <h4 className="text-white font-semibold mb-2">Elevated Card</h4>
              <p className="text-neutral/70 text-sm">
                Card with shadow and elevation effect
              </p>
            </GlassCard>
          </div>
        </GlassCard>
      </motion.div>

      {/* Interactive Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Interactive Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard padding="md" hoverEffect="lift" interactive className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Lift Effect</h4>
              <p className="text-neutral/70 text-sm">
                Hover to see the lift animation
              </p>
              <Badge variant="primary" size="sm" className="mt-3">Active</Badge>
            </GlassCard>

            <GlassCard padding="md" hoverEffect="lift" interactive tone="success" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Success Tone</h4>
              <p className="text-neutral/70 text-sm">
                Card with success color accent
              </p>
              <Badge variant="success" size="sm" className="mt-3">Complete</Badge>
            </GlassCard>

            <GlassCard padding="md" hoverEffect="lift" interactive tone="accent" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Accent Tone</h4>
              <p className="text-neutral/70 text-sm">
                Card with accent color theme
              </p>
              <Badge variant="info" size="sm" className="mt-3">Protected</Badge>
            </GlassCard>
          </div>
        </GlassCard>
      </motion.div>

      {/* Padding Variations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Padding Variations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <GlassCard padding="sm" variant="surface">
                <p className="text-white text-sm">Small Padding (p-5)</p>
              </GlassCard>
              <GlassCard padding="md" variant="surface">
                <p className="text-white text-sm">Medium Padding (p-6)</p>
              </GlassCard>
            </div>
            <div className="space-y-4">
              <GlassCard padding="lg" variant="surface">
                <p className="text-white text-sm">Large Padding (p-8)</p>
              </GlassCard>
              <GlassCard padding="xs" variant="surface">
                <p className="text-white text-sm">Extra Small Padding (p-4)</p>
              </GlassCard>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Stats Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard padding="md" hoverEffect="lift" interactive>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="success" size="xs" dot>+12%</Badge>
              </div>
              <div className="text-3xl font-bold text-white mb-1">2,543</div>
              <div className="text-neutral/70 text-sm">Total Users</div>
            </GlassCard>

            <GlassCard padding="md" hoverEffect="lift" interactive tone="success">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <Badge variant="success" size="xs" dot>+24%</Badge>
              </div>
              <div className="text-3xl font-bold text-white mb-1">$45.2K</div>
              <div className="text-neutral/70 text-sm">Revenue</div>
            </GlassCard>

            <GlassCard padding="md" hoverEffect="lift" interactive tone="accent">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-400" />
                </div>
                <Badge variant="info" size="xs" dot>+8%</Badge>
              </div>
              <div className="text-3xl font-bold text-white mb-1">94.5%</div>
              <div className="text-neutral/70 text-sm">Satisfaction</div>
            </GlassCard>
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
        <h4 className="text-primary font-bold text-lg mb-4">Card Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>glass</strong> variant for layered UI elements</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>surface</strong> variant for content containers</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>elevated</strong> variant for important cards</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Add <strong>interactive</strong> prop for clickable cards</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>tone</strong> prop to apply color themes</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default CardsPage;
