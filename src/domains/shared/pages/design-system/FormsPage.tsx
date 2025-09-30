/**
 * Forms Design System Page
 * Showcase of form elements and validation patterns
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Lock, Bell, Search, Calendar } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export const FormsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Forms</h2>
        <p className="text-neutral/70 text-lg">
          Input fields with enhanced focus states and visual feedback
        </p>
      </motion.div>

      {/* Input Fields */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Input Fields</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Input
                label="Standard Input"
                placeholder="Enter your name"
                leftIcon={<Users className="w-4 h-4" />}
              />
              <Input
                label="Email Input"
                type="email"
                placeholder="admin@fitvire.com"
                leftIcon={<Mail className="w-4 h-4" />}
              />
              <Input
                label="Password Input"
                type="password"
                placeholder="Enter password"
                leftIcon={<Lock className="w-4 h-4" />}
              />
            </div>
            <div className="space-y-6">
              <Input
                label="With Helper Text"
                placeholder="Search..."
                leftIcon={<Search className="w-4 h-4" />}
                helperText="Press / to focus"
              />
              <Input
                label="Disabled State"
                placeholder="Disabled input"
                disabled
                leftIcon={<Bell className="w-4 h-4" />}
              />
              <Input
                label="With Error"
                placeholder="Invalid input"
                error="This field is required"
                leftIcon={<Calendar className="w-4 h-4" />}
              />
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Input Sizes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Input Sizes</h3>
          <div className="space-y-6">
            <Input
              label="Large Input"
              size="lg"
              placeholder="Large size input"
              leftIcon={<Users className="w-5 h-5" />}
            />
            <Input
              label="Medium Input (Default)"
              size="md"
              placeholder="Medium size input"
              leftIcon={<Users className="w-4 h-4" />}
            />
            <Input
              label="Small Input"
              size="sm"
              placeholder="Small size input"
              leftIcon={<Users className="w-4 h-4" />}
            />
          </div>
        </GlassCard>
      </motion.div>

      {/* Select Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Select Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                Standard Select
              </label>
              <select className="w-full px-4 py-3 bg-surface/40 backdrop-blur-sm border border-glass-border text-white rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                Multiple Select
              </label>
              <select
                multiple
                className="w-full px-4 py-3 bg-surface/40 backdrop-blur-sm border border-glass-border text-white rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Textarea */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Textarea</h3>
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-surface/40 backdrop-blur-sm border border-glass-border text-white rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
              placeholder="Enter your message..."
            />
            <p className="text-xs text-neutral/60 mt-2">Maximum 500 characters</p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Checkbox & Radio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Checkbox & Radio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Checkboxes</h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded bg-surface/40 border-glass-border text-primary focus:ring-2 focus:ring-primary/50"
                    defaultChecked
                  />
                  <span className="text-neutral/80">Option 1</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded bg-surface/40 border-glass-border text-primary focus:ring-2 focus:ring-primary/50"
                  />
                  <span className="text-neutral/80">Option 2</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded bg-surface/40 border-glass-border text-primary focus:ring-2 focus:ring-primary/50"
                  />
                  <span className="text-neutral/80">Option 3</span>
                </label>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Radio Buttons</h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-group"
                    className="w-5 h-5 bg-surface/40 border-glass-border text-primary focus:ring-2 focus:ring-primary/50"
                    defaultChecked
                  />
                  <span className="text-neutral/80">Choice 1</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-group"
                    className="w-5 h-5 bg-surface/40 border-glass-border text-primary focus:ring-2 focus:ring-primary/50"
                  />
                  <span className="text-neutral/80">Choice 2</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-group"
                    className="w-5 h-5 bg-surface/40 border-glass-border text-primary focus:ring-2 focus:ring-primary/50"
                  />
                  <span className="text-neutral/80">Choice 3</span>
                </label>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Form Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Complete Form Example</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                placeholder="John"
                required
                leftIcon={<Users className="w-4 h-4" />}
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                required
                leftIcon={<Users className="w-4 h-4" />}
              />
            </div>
            <Input
              label="Email Address"
              type="email"
              placeholder="john.doe@example.com"
              required
              leftIcon={<Mail className="w-4 h-4" />}
              helperText="We'll never share your email"
            />
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                Role
              </label>
              <select className="w-full px-4 py-3 bg-surface/40 backdrop-blur-sm border border-glass-border text-white rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                <option>Select a role</option>
                <option>Administrator</option>
                <option>Manager</option>
                <option>Viewer</option>
              </select>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <Button variant="primary" type="submit">
                Submit Form
              </Button>
              <Button variant="outline" type="reset">
                Reset
              </Button>
            </div>
          </form>
        </GlassCard>
      </motion.div>

      {/* Usage Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-primary/10 to-primary-hover/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
      >
        <h4 className="text-primary font-bold text-lg mb-4">Form Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Always provide clear labels for form fields</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use helper text to provide additional context</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Show validation errors clearly and immediately</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use appropriate input types (email, password, etc.)</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Include visual feedback for disabled states</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default FormsPage;
