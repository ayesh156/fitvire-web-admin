/**
 * Design Showcase Page - FitVire Admin Design System
 * Comprehensive showcase of all enhanced UI components and design patterns
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Eye, 
  Star, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Users,
  Settings,
  Bell,
  Shield,
  Zap,
  Heart,
  Sparkles,
  Layers,
  Grid,
  Award,
  Target,
  Activity
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import GlassCard from '../components/ui/GlassCard';
import Input from '../components/ui/Input';
import PageContainer from '../components/layout/PageContainer';

const DesignShowcase: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('components');

  const ComponentShowcase = () => (
    <div className="space-y-12">
      {/* Button Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
  <GlassCard padding="lg" variant="elevated" hoverEffect="lift">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Enhanced Buttons</h3>
              <p className="text-neutral/70">Interactive buttons with gradient effects and micro-animations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Primary Variants</h4>
              <Button variant="primary" size="lg" icon={<Star className="w-5 h-5" />}>
                Primary Button
              </Button>
              <Button variant="secondary" size="lg" icon={<Users className="w-5 h-5" />}>
                Secondary Button
              </Button>
              <Button variant="outline" size="lg" icon={<Settings className="w-5 h-5" />}>
                Outline Button
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Status Variants</h4>
              <Button variant="success" size="lg" icon={<CheckCircle className="w-5 h-5" />}>
                Success Button
              </Button>
              <Button variant="warning" size="lg" icon={<AlertTriangle className="w-5 h-5" />}>
                Warning Button
              </Button>
              <Button variant="danger" size="lg" icon={<XCircle className="w-5 h-5" />}>
                Danger Button
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Special States</h4>
              <Button variant="primary" size="lg" loading>
                Loading Button
              </Button>
              <Button variant="outline" size="lg" disabled>
                Disabled Button
              </Button>
              <Button variant="ghost" size="lg" icon={<Eye className="w-5 h-5" />}>
                Ghost Button
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.section>

      {/* Badge Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
  <GlassCard padding="lg" variant="surface" hoverEffect="lift">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Enhanced Badges</h3>
              <p className="text-neutral/70">Status indicators with gradient backgrounds and animations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Standard Badges</h4>
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

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Badges with Dots</h4>
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
      </motion.section>

      {/* Glass Cards Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
  <GlassCard padding="lg" variant="glass" hoverEffect="lift">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Enhanced Glass Morphism</h3>
              <p className="text-neutral/70">Advanced glass morphism effects with improved backdrop filtering</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard padding="sm" hoverEffect="lift" interactive className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Interactive Card</h4>
              <p className="text-neutral/70 text-sm">Hover for enhanced effects with scale and shadow animations</p>
            </GlassCard>

            <GlassCard padding="sm" hoverEffect="lift" interactive tone="success" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Analytics Card</h4>
              <p className="text-neutral/70 text-sm">Enhanced backdrop blur with improved visual hierarchy</p>
            </GlassCard>

            <GlassCard padding="sm" hoverEffect="lift" interactive tone="accent" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Security Card</h4>
              <p className="text-neutral/70 text-sm">Consistent glass effects with brand-aligned gradients</p>
            </GlassCard>
          </div>
        </GlassCard>
      </motion.section>

      {/* Form Elements Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
  <GlassCard padding="lg" variant="elevated" hoverEffect="lift">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Grid className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Enhanced Form Elements</h3>
              <p className="text-neutral/70">Improved focus states and visual feedback</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Input
                label="Enhanced Input Field"
                placeholder="Focus for enhanced effects"
                leftIcon={<Users className="w-4 h-4" />}
                className="focus-enhanced"
              />
              <Input
                label="Email Input"
                type="email"
                placeholder="admin@fitvire.com"
                leftIcon={<Bell className="w-4 h-4" />}
                className="focus-enhanced"
              />
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-3">Enhanced Select</label>
                <select className="w-full px-4 py-3 bg-surface/40 backdrop-blur-sm border border-glass-border text-white rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 focus-enhanced">
                  <option>Select an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Enhanced Textarea</label>
                <textarea 
                  rows={3} 
                  className="w-full px-4 py-3 bg-surface/40 backdrop-blur-sm border border-glass-border text-white rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none focus-enhanced"
                  placeholder="Enter your message..."
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.section>
    </div>
  );

  const AnimationShowcase = () => (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
  <GlassCard padding="lg" variant="surface" hoverEffect="lift">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Micro-interactions</h3>
              <p className="text-neutral/70">Subtle animations that enhance user experience</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="p-8 bg-gradient-to-br from-primary/20 to-primary-hover/20 rounded-2xl border border-primary/30 text-center cursor-pointer"
            >
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-white font-semibold">Hover to Scale & Rotate</h4>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 text-center cursor-pointer"
            >
              <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold">Hover to Lift</h4>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 text-center cursor-pointer"
            >
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold">Click to Compress</h4>
            </motion.div>
          </div>
        </GlassCard>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Status Indicators</h3>
              <p className="text-neutral/70">Enhanced status indicators with animations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Animated Status</h4>
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
              <h4 className="text-lg font-semibold text-white mb-4">Pulse Animations</h4>
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
      </motion.section>
    </div>
  );

  return (
    <PageContainer className="gap-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-6"
      >
        <div className="p-4 bg-gradient-to-br from-primary to-primary-hover rounded-3xl shadow-xl">
          <Palette className="w-12 h-12 text-white" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white font-display mb-2">Design Showcase</h1>
          <p className="text-neutral/80 text-xl leading-relaxed">
            Enhanced FitVire admin design system with modern UI components and interactions
          </p>
        </div>
      </motion.div>

      {/* Improvement Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white">Design Enhancements Applied</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-400 text-lg">✅ Visual Improvements</h4>
              <ul className="text-neutral/80 space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Enhanced scrollbar with gradients</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Improved glass morphism effects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Button gradient enhancements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Badge backdrop blur effects</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-400 text-lg">🎨 Interactive Elements</h4>
              <ul className="text-neutral/80 space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Enhanced focus states</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Improved hover animations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Subtle micro-interactions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Status indicator animations</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary text-lg">🚀 Performance</h4>
              <ul className="text-neutral/80 space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Optimized transition durations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Hardware-accelerated animations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Consistent easing functions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Reduced layout shift</span>
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border-b border-glass-border"
      >
        <nav className="flex space-x-8">
          {[
            { id: 'components', label: 'Components', icon: Grid },
            { id: 'animations', label: 'Animations', icon: Zap }
          ].map((tab, index) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedTab(tab.id)}
                className={`
                  flex items-center space-x-3 py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300
                  ${selectedTab === tab.id 
                    ? 'border-primary text-primary shadow-lg shadow-primary/10' 
                    : 'border-transparent text-neutral/60 hover:text-white hover:border-glass-border'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </nav>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {selectedTab === 'components' && <ComponentShowcase />}
        {selectedTab === 'animations' && <AnimationShowcase />}
      </motion.div>

      {/* Footer Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-primary/10 to-primary-hover/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-primary/20 rounded-xl">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-primary font-bold text-xl">Enhanced Design System</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-neutral/80 leading-relaxed mb-4">
              The FitVire admin dashboard now features an enhanced design system with improved visual consistency, 
              better user interactions, and modern UI patterns that align perfectly with the FitVire brand identity.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">All pages updated with consistent theming</span>
            </div>
          </div>
          <div>
            <p className="text-neutral/80 leading-relaxed mb-4">
              Every component has been enhanced with improved accessibility, better performance, 
              and subtle animations that provide visual feedback without being distracting.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="w-4 h-4" />
              <span className="font-medium">Designed with love for the FitVire community</span>
            </div>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
};

export default DesignShowcase;