/**
 * Colors Design System Page
 * Showcase of color palette and design tokens
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export const ColorsPage: React.FC = () => {
  const primaryColors = [
    { name: 'Primary 300', value: '#F87171', class: 'bg-primary-300' },
    { name: 'Primary 400', value: '#F04444', class: 'bg-primary-400' },
    { name: 'Primary 500', value: '#EF4444', class: 'bg-primary-500' },
    { name: 'Primary 600', value: '#DC2626', class: 'bg-primary-600' },
  ];

  const semanticColors = [
    { name: 'Success', value: '#22C55E', class: 'bg-success-500', description: 'Positive actions and states' },
    { name: 'Warning', value: '#F59E0B', class: 'bg-warning-500', description: 'Cautionary states' },
    { name: 'Error', value: '#EF4444', class: 'bg-error-500', description: 'Errors and destructive actions' },
    { name: 'Info', value: '#3B82F6', class: 'bg-info-500', description: 'Informational content' },
  ];

  const surfaceColors = [
    { name: 'Background', value: '#0F1117', class: 'bg-background', description: 'Main background' },
    { name: 'Surface', value: '#1A1D29', class: 'bg-surface', description: 'Card backgrounds' },
    { name: 'Glass BG', value: 'rgba(26, 29, 41, 0.40)', class: 'bg-glass-bg', description: 'Glass morphism' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Colors</h2>
        <p className="text-neutral/70 text-lg">
          FitVire color palette and design tokens
        </p>
      </motion.div>

      {/* Primary Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Primary Colors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {primaryColors.map((color) => (
              <div key={color.name} className="space-y-3">
                <div className={`${color.class} h-24 rounded-xl shadow-lg`}></div>
                <div>
                  <div className="text-white font-semibold">{color.name}</div>
                  <div className="text-neutral/60 text-sm font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Semantic Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Semantic Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semanticColors.map((color) => (
              <div key={color.name} className="flex items-center space-x-4 p-4 bg-surface/20 rounded-xl">
                <div className={`${color.class} w-16 h-16 rounded-xl shadow-lg flex-shrink-0`}></div>
                <div className="flex-1">
                  <div className="text-white font-semibold mb-1">{color.name}</div>
                  <div className="text-neutral/60 text-sm mb-2">{color.description}</div>
                  <div className="text-neutral/50 text-xs font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Surface Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Surface Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {surfaceColors.map((color) => (
              <div key={color.name} className="space-y-3">
                <div className={`${color.class} border border-glass-border h-24 rounded-xl`}></div>
                <div>
                  <div className="text-white font-semibold">{color.name}</div>
                  <div className="text-neutral/60 text-sm mb-1">{color.description}</div>
                  <div className="text-neutral/50 text-xs font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Text Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Text Colors</h3>
          <div className="space-y-4">
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="text-white text-lg mb-1">Primary Text</div>
              <code className="text-neutral/60 text-sm">text-white</code>
            </div>
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="text-neutral text-lg mb-1">Secondary Text</div>
              <code className="text-neutral/60 text-sm">text-neutral (rgba(255, 255, 255, 0.92))</code>
            </div>
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="text-neutral/80 text-lg mb-1">Tertiary Text</div>
              <code className="text-neutral/60 text-sm">text-neutral/80</code>
            </div>
            <div className="p-4 bg-surface/20 rounded-xl">
              <div className="text-neutral/60 text-lg mb-1">Muted Text</div>
              <code className="text-neutral/60 text-sm">text-neutral/60</code>
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
        <h4 className="text-primary font-bold text-lg mb-4">Color Usage Guidelines</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>primary colors</strong> for brand identity and primary actions</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>semantic colors</strong> to convey meaning and state</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Maintain <strong>WCAG AA contrast ratios</strong> for accessibility</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>opacity modifiers</strong> (/80, /60) for hierarchy</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ColorsPage;
