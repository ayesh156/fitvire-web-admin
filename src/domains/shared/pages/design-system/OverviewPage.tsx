/**
 * Design System Overview Page
 * Introduction to the FitVire design system with quick stats and highlights
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Heart,
  Sparkles,
  Zap,
  Shield,
  Palette,
  Eye,
  Code,
} from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';

export const OverviewPage: React.FC = () => {
  const stats = [
    { label: 'Components', value: '50+', icon: Code, color: 'from-blue-500 to-blue-600' },
    { label: 'Color Tokens', value: '120+', icon: Palette, color: 'from-purple-500 to-purple-600' },
    { label: 'Animations', value: '30+', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
    { label: 'Patterns', value: '40+', icon: Eye, color: 'from-green-500 to-green-600' },
  ];

  const features = [
    {
      title: 'Modern React 19',
      description: 'Built with latest React features including concurrent rendering and automatic batching',
      icon: Zap,
      tone: 'primary',
    },
    {
      title: 'TypeScript First',
      description: 'Full type safety with TypeScript 5.8+ for better developer experience',
      icon: Shield,
      tone: 'success',
    },
    {
      title: 'Accessible by Default',
      description: 'WCAG 2.1 AA compliant with semantic HTML and ARIA attributes',
      icon: Heart,
      tone: 'accent',
    },
    {
      title: 'Performance Optimized',
      description: 'Lightweight components with code splitting and lazy loading',
      icon: Sparkles,
      tone: 'warning',
    },
  ];

  const principles = [
    'Consistency across the entire FitVire ecosystem',
    'Mobile-first responsive design approach',
    'Dark mode with system preference support',
    'Accessibility and inclusive design',
    'Performance and bundle size optimization',
    'Developer experience and maintainability',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Welcome to FitVire Design System</h2>
              <p className="text-neutral/70 mt-1">
                A comprehensive collection of reusable components and design patterns
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-neutral/80 leading-relaxed text-lg">
              The FitVire Design System is a carefully crafted collection of UI components,
              design tokens, and interaction patterns that power the FitVire admin dashboard.
              Built with modern web technologies and design best practices, it ensures
              consistency, accessibility, and exceptional user experience across all features.
            </p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <GlassCard padding="md" hoverEffect="lift" interactive>
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-neutral/70">{stat.label}</div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white">Key Features</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <GlassCard 
                    padding="md" 
                    tone={feature.tone as any}
                    hoverEffect="lift"
                    interactive
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-surface/40 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-neutral/70 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </GlassCard>
      </motion.div>

      {/* Design Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white">Design Principles</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-start space-x-3 p-4 bg-surface/20 rounded-xl"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral/80 leading-relaxed">{principle}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="primary" size="md" withGlow>React 19.1.1</Badge>
            <Badge variant="secondary" size="md">TypeScript 5.8+</Badge>
            <Badge variant="success" size="md">Tailwind CSS 4.1</Badge>
            <Badge variant="info" size="md">Vite 7.1</Badge>
            <Badge variant="info" size="md">Framer Motion 12</Badge>
            <Badge variant="warning" size="md">Zustand 5.0</Badge>
            <Badge variant="neutral" size="md">React Query 5.89</Badge>
            <Badge variant="primary" size="md">React Hook Form 7.62</Badge>
          </div>

          <div className="mt-6 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <p className="text-neutral/80 leading-relaxed">
              <strong className="text-primary">Note:</strong> All components are built with
              these exact package versions. Always use the specified packages to maintain
              consistency and avoid compatibility issues.
            </p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Getting Started */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-primary/10 to-primary-hover/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-primary/20 rounded-xl">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-primary font-bold text-xl">Ready to explore?</h3>
        </div>
        <p className="text-neutral/80 leading-relaxed">
          Navigate through the sidebar to explore individual component pages. Each page
          includes interactive examples, usage guidelines, and code snippets to help you
          build consistent and beautiful interfaces.
        </p>
      </motion.div>
    </div>
  );
};

export default OverviewPage;
