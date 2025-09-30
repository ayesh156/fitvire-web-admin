/**
 * Buttons Design System Page
 * Showcase of all button variants, sizes, and states
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Users,
  Settings,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Eye,
  Download,
  Upload,
  Plus,
  Edit,
  Trash2,
  Save,
} from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';

export const ButtonsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Buttons</h2>
        <p className="text-neutral/70 text-lg">
          Interactive buttons with gradient effects and micro-animations
        </p>
      </motion.div>

      {/* Primary Variants */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Primary Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Primary</p>
                <Button variant="primary" size="lg" icon={<Star className="w-5 h-5" />}>
                  Primary Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Medium</p>
                <Button variant="primary" size="md" icon={<Star className="w-4 h-4" />}>
                  Primary Medium
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Small</p>
                <Button variant="primary" size="sm" icon={<Star className="w-4 h-4" />}>
                  Primary Small
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Secondary</p>
                <Button variant="secondary" size="lg" icon={<Users className="w-5 h-5" />}>
                  Secondary Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Medium</p>
                <Button variant="secondary" size="md" icon={<Users className="w-4 h-4" />}>
                  Secondary Medium
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Small</p>
                <Button variant="secondary" size="sm" icon={<Users className="w-4 h-4" />}>
                  Secondary Small
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Outline</p>
                <Button variant="outline" size="lg" icon={<Settings className="w-5 h-5" />}>
                  Outline Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Medium</p>
                <Button variant="outline" size="md" icon={<Settings className="w-4 h-4" />}>
                  Outline Medium
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Small</p>
                <Button variant="outline" size="sm" icon={<Settings className="w-4 h-4" />}>
                  Outline Small
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Status Variants */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Status Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Success</p>
                <Button variant="success" size="lg" icon={<CheckCircle className="w-5 h-5" />}>
                  Success Action
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Medium</p>
                <Button variant="success" size="md" icon={<CheckCircle className="w-4 h-4" />}>
                  Success Medium
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Warning</p>
                <Button variant="warning" size="lg" icon={<AlertTriangle className="w-5 h-5" />}>
                  Warning Action
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Medium</p>
                <Button variant="warning" size="md" icon={<AlertTriangle className="w-4 h-4" />}>
                  Warning Medium
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Danger</p>
                <Button variant="danger" size="lg" icon={<XCircle className="w-5 h-5" />}>
                  Danger Action
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Medium</p>
                <Button variant="danger" size="md" icon={<XCircle className="w-4 h-4" />}>
                  Danger Medium
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Special States */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Special States</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Loading State</p>
                <Button variant="primary" size="lg" loading>
                  Loading...
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Loading Medium</p>
                <Button variant="secondary" size="md" loading>
                  Processing
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Disabled State</p>
                <Button variant="primary" size="lg" disabled>
                  Disabled Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Disabled Outline</p>
                <Button variant="outline" size="md" disabled>
                  Disabled Outline
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral/70 mb-2">Ghost Variant</p>
                <Button variant="ghost" size="lg" icon={<Eye className="w-5 h-5" />}>
                  Ghost Button
                </Button>
              </div>
              <div>
                <p className="text-sm text-neutral/70 mb-2">Ghost Medium</p>
                <Button variant="ghost" size="md" icon={<Eye className="w-4 h-4" />}>
                  Ghost Medium
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Common Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Common Use Cases</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-neutral/70 mb-3">Form Actions</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" icon={<Save className="w-4 h-4" />}>
                  Save Changes
                </Button>
                <Button variant="outline" icon={<XCircle className="w-4 h-4" />}>
                  Cancel
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-neutral/70 mb-3">CRUD Operations</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="success" icon={<Plus className="w-4 h-4" />}>
                  Create New
                </Button>
                <Button variant="primary" icon={<Edit className="w-4 h-4" />}>
                  Edit
                </Button>
                <Button variant="danger" icon={<Trash2 className="w-4 h-4" />}>
                  Delete
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-neutral/70 mb-3">File Operations</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" icon={<Download className="w-4 h-4" />}>
                  Download
                </Button>
                <Button variant="secondary" icon={<Upload className="w-4 h-4" />}>
                  Upload
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-neutral/70 mb-3">Full Width Button</p>
              <Button variant="primary" size="lg" fullWidth icon={<CheckCircle className="w-5 h-5" />}>
                Full Width Action Button
              </Button>
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
        <h4 className="text-primary font-bold text-lg mb-4">Usage Guidelines</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>primary</strong> buttons for main actions and CTAs</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>secondary</strong> buttons for secondary actions</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>outline</strong> buttons for tertiary actions</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>danger</strong> buttons for destructive actions</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Always provide loading states for async operations</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Include meaningful icons when they enhance understanding</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ButtonsPage;
