/**
 * Layouts Design System Page
 * Showcase of layout patterns, grid systems, and spacing conventions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Grid, Columns, Square } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';

export const LayoutsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Layouts</h2>
        <p className="text-neutral/70 text-lg">
          Layout patterns, grid systems, and spacing conventions for the FitVire platform
        </p>
      </motion.div>

      {/* Grid System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Grid className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Grid System</h3>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-semibold">12-Column Grid</h4>
                <Badge variant="primary" size="sm">Responsive</Badge>
              </div>
              <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xs font-semibold">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Common Grid Patterns</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-neutral/70 text-sm mb-2">Two Columns (6 + 6)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Col 6
                    </div>
                    <div className="h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Col 6
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-neutral/70 text-sm mb-2">Three Columns (4 + 4 + 4)</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Col 4
                    </div>
                    <div className="h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Col 4
                    </div>
                    <div className="h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Col 4
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-neutral/70 text-sm mb-2">Sidebar Layout (3 + 9)</p>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Sidebar (Col 3)
                    </div>
                    <div className="col-span-9 h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Main Content (Col 9)
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-neutral/70 text-sm mb-2">Asymmetric Layout (4 + 8)</p>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4 h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Col 4
                    </div>
                    <div className="col-span-8 h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60">
                      Col 8
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Container Widths */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Layout className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Container Widths</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Small Container</span>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  max-w-2xl (672px)
                </code>
              </div>
              <div className="w-full bg-surface/20 rounded-lg p-4">
                <div className="max-w-2xl mx-auto h-12 bg-blue-500/20 rounded-lg border border-blue-500/30"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Medium Container</span>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  max-w-4xl (896px)
                </code>
              </div>
              <div className="w-full bg-surface/20 rounded-lg p-4">
                <div className="max-w-4xl mx-auto h-12 bg-green-500/20 rounded-lg border border-green-500/30"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Large Container</span>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  max-w-6xl (1152px)
                </code>
              </div>
              <div className="w-full bg-surface/20 rounded-lg p-4">
                <div className="max-w-6xl mx-auto h-12 bg-purple-500/20 rounded-lg border border-purple-500/30"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Extra Large Container</span>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  max-w-7xl (1280px)
                </code>
              </div>
              <div className="w-full bg-surface/20 rounded-lg p-4">
                <div className="max-w-7xl mx-auto h-12 bg-primary/20 rounded-lg border border-primary/30"></div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Spacing Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <Square className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Spacing Scale</h3>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Extra Small', class: 'space-y-2', value: '0.5rem (8px)' },
              { name: 'Small', class: 'space-y-3', value: '0.75rem (12px)' },
              { name: 'Medium', class: 'space-y-4', value: '1rem (16px)' },
              { name: 'Large', class: 'space-y-6', value: '1.5rem (24px)' },
              { name: 'Extra Large', class: 'space-y-8', value: '2rem (32px)' },
              { name: '2X Large', class: 'space-y-12', value: '3rem (48px)' },
            ].map((spacing) => (
              <div key={spacing.name} className="p-4 bg-surface/20 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{spacing.name}</span>
                  <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                    {spacing.value}
                  </code>
                </div>
                <div className={spacing.class}>
                  <div className="h-3 bg-primary/30 rounded"></div>
                  <div className="h-3 bg-primary/30 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Common Layout Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Columns className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Common Layout Patterns</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Dashboard Layout</h4>
              <div className="p-4 bg-surface/20 rounded-xl">
                <div className="grid grid-cols-12 gap-4 h-64">
                  <div className="col-span-2 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                    Sidebar
                  </div>
                  <div className="col-span-10 space-y-4">
                    <div className="h-16 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                      Header
                    </div>
                    <div className="grid grid-cols-3 gap-4 flex-1">
                      <div className="bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                        Card
                      </div>
                      <div className="bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                        Card
                      </div>
                      <div className="bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                        Card
                      </div>
                    </div>
                    <div className="h-20 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                      Main Content
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Card Grid Layout</h4>
              <div className="p-4 bg-surface/20 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-32 bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm"
                    >
                      Card {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Split View Layout</h4>
              <div className="p-4 bg-surface/20 rounded-xl">
                <div className="grid grid-cols-2 gap-4 h-48">
                  <div className="bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                    Left Panel
                  </div>
                  <div className="bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                    Right Panel
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Centered Content Layout</h4>
              <div className="p-4 bg-surface/20 rounded-xl">
                <div className="flex items-center justify-center h-48">
                  <div className="w-96 h-full bg-surface/40 rounded-lg flex items-center justify-center text-neutral/60 text-sm">
                    Centered Content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Responsive Breakpoints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Responsive Breakpoints</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white">Breakpoint</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white">Prefix</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white">Min Width</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white">Typical Device</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-glass-border/50">
                  <td className="py-3 px-4 text-neutral">Small</td>
                  <td className="py-3 px-4">
                    <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">sm:</code>
                  </td>
                  <td className="py-3 px-4 text-neutral/80">640px</td>
                  <td className="py-3 px-4 text-neutral/70">Large phones</td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-3 px-4 text-neutral">Medium</td>
                  <td className="py-3 px-4">
                    <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">md:</code>
                  </td>
                  <td className="py-3 px-4 text-neutral/80">768px</td>
                  <td className="py-3 px-4 text-neutral/70">Tablets</td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-3 px-4 text-neutral">Large</td>
                  <td className="py-3 px-4">
                    <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">lg:</code>
                  </td>
                  <td className="py-3 px-4 text-neutral/80">1024px</td>
                  <td className="py-3 px-4 text-neutral/70">Small laptops</td>
                </tr>
                <tr className="border-b border-glass-border/50">
                  <td className="py-3 px-4 text-neutral">Extra Large</td>
                  <td className="py-3 px-4">
                    <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">xl:</code>
                  </td>
                  <td className="py-3 px-4 text-neutral/80">1280px</td>
                  <td className="py-3 px-4 text-neutral/70">Desktops</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-neutral">2X Large</td>
                  <td className="py-3 px-4">
                    <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">2xl:</code>
                  </td>
                  <td className="py-3 px-4 text-neutral/80">1536px</td>
                  <td className="py-3 px-4 text-neutral/70">Large desktops</td>
                </tr>
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
        <h4 className="text-primary font-bold text-lg mb-4">Layout Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use a <strong>consistent grid system</strong> across all pages for visual harmony</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Follow <strong>mobile-first</strong> approach - design for small screens first, then scale up</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>consistent spacing</strong> from the spacing scale for better rhythm</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Limit content width for <strong>better readability</strong> - use max-w-7xl or smaller</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Test layouts at all <strong>breakpoints</strong> to ensure responsive behavior</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>semantic HTML</strong> elements (header, nav, main, aside, footer) for accessibility</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default LayoutsPage;
