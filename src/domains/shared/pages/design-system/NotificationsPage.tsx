/**
 * Notifications Design System Page
 * Showcase of toast notifications, alerts, and notification patterns
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  X,
  Mail,
  MessageSquare,
  Gift,
} from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

export const NotificationsPage: React.FC = () => {
  const [showToast, setShowToast] = useState<string | null>(null);

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Payment Successful',
      message: 'Your subscription has been renewed for another month.',
      time: '2 minutes ago',
      unread: true,
      icon: CheckCircle,
    },
    {
      id: 2,
      type: 'info',
      title: 'New Feature Available',
      message: 'Check out our new analytics dashboard for better insights.',
      time: '1 hour ago',
      unread: true,
      icon: Info,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Action Required',
      message: 'Please verify your email address to continue using all features.',
      time: '3 hours ago',
      unread: false,
      icon: AlertTriangle,
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message from Admin',
      message: 'Your support ticket #1234 has been resolved.',
      time: '1 day ago',
      unread: false,
      icon: MessageSquare,
    },
  ];

  const Toast: React.FC<{
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    onClose: () => void;
  }> = ({ type, title, message, onClose }) => {
    const styles = {
      success: 'border-green-500/50 bg-green-500/10',
      error: 'border-red-500/50 bg-red-500/10',
      warning: 'border-yellow-500/50 bg-yellow-500/10',
      info: 'border-blue-500/50 bg-blue-500/10',
    };

    const icons = {
      success: <CheckCircle className="w-5 h-5 text-green-400" />,
      error: <XCircle className="w-5 h-5 text-red-400" />,
      warning: <AlertTriangle className="w-5 h-5 text-yellow-400" />,
      info: <Info className="w-5 h-5 text-blue-400" />,
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`
          ${styles[type]}
          backdrop-blur-xl border rounded-xl p-4 shadow-lg
          flex items-start space-x-3 max-w-md
        `}
      >
        <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm">{title}</h4>
          <p className="text-neutral/70 text-xs mt-1">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-neutral/60 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Notifications</h2>
        <p className="text-neutral/70 text-lg">
          Toast notifications, alerts, and notification center patterns
        </p>
      </motion.div>

      {/* Toast Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Toast Notifications</h3>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-neutral/70">
              Click the buttons below to preview different toast notification styles:
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="success"
                size="md"
                onClick={() => setShowToast('success')}
              >
                Show Success
              </Button>
              <Button
                variant="danger"
                size="md"
                onClick={() => setShowToast('error')}
              >
                Show Error
              </Button>
              <Button
                variant="warning"
                size="md"
                onClick={() => setShowToast('warning')}
              >
                Show Warning
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => setShowToast('info')}
              >
                Show Info
              </Button>
            </div>
          </div>

          {/* Toast Display Area */}
          <div className="min-h-[120px] flex items-center justify-center">
            {showToast === 'success' && (
              <Toast
                type="success"
                title="Success!"
                message="Your changes have been saved successfully."
                onClose={() => setShowToast(null)}
              />
            )}
            {showToast === 'error' && (
              <Toast
                type="error"
                title="Error Occurred"
                message="Something went wrong. Please try again."
                onClose={() => setShowToast(null)}
              />
            )}
            {showToast === 'warning' && (
              <Toast
                type="warning"
                title="Warning"
                message="This action may have unintended consequences."
                onClose={() => setShowToast(null)}
              />
            )}
            {showToast === 'info' && (
              <Toast
                type="info"
                title="Information"
                message="New updates are available for your application."
                onClose={() => setShowToast(null)}
              />
            )}
            {!showToast && (
              <p className="text-neutral/50 text-sm">Click a button to preview toast</p>
            )}
          </div>
        </GlassCard>
      </motion.div>

      {/* Inline Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Inline Alerts</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-green-400 font-semibold text-sm mb-1">Success Alert</h4>
                  <p className="text-neutral/70 text-sm">
                    Your profile has been updated successfully. Changes will be visible across the platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-blue-400 font-semibold text-sm mb-1">Info Alert</h4>
                  <p className="text-neutral/70 text-sm">
                    We've updated our privacy policy. Please review the changes before continuing.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-yellow-400 font-semibold text-sm mb-1">Warning Alert</h4>
                  <p className="text-neutral/70 text-sm">
                    Your subscription will expire in 3 days. Renew now to avoid service interruption.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-red-400 font-semibold text-sm mb-1">Error Alert</h4>
                  <p className="text-neutral/70 text-sm">
                    Failed to connect to the server. Please check your internet connection and try again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Notification Center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Notification Center</h3>
            <Badge variant="primary" size="sm">
              {notifications.filter((n) => n.unread).length} New
            </Badge>
          </div>

          <div className="space-y-3">
            {notifications.map((notification, index) => {
              const Icon = notification.icon;
              const colors = {
                success: 'text-green-400 bg-green-500/20',
                info: 'text-blue-400 bg-blue-500/20',
                warning: 'text-yellow-400 bg-yellow-500/20',
                message: 'text-purple-400 bg-purple-500/20',
              };

              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className={`
                    p-4 rounded-xl transition-all cursor-pointer
                    ${
                      notification.unread
                        ? 'bg-surface/40 hover:bg-surface/60'
                        : 'bg-surface/20 hover:bg-surface/30'
                    }
                  `}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[notification.type as keyof typeof colors]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-semibold text-sm">{notification.title}</h4>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-neutral/70 text-sm mb-1">{notification.message}</p>
                      <p className="text-neutral/50 text-xs">{notification.time}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-glass-border">
            <Button variant="ghost" size="sm" fullWidth>
              View All Notifications
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      {/* Notification Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Notification Badges</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-surface/20 rounded-xl text-center">
              <div className="relative inline-block mb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
              <h4 className="text-white font-semibold mb-1">Count Badge</h4>
              <p className="text-neutral/60 text-sm">Shows number of notifications</p>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl text-center">
              <div className="relative inline-block mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-background"></div>
              </div>
              <h4 className="text-white font-semibold mb-1">Dot Indicator</h4>
              <p className="text-neutral/60 text-sm">Simple unread indicator</p>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl text-center">
              <div className="relative inline-block mb-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-green-400" />
                </div>
                <div className="absolute -top-1 -right-1 px-2 py-0.5 bg-green-500 rounded-full">
                  <span className="text-white text-xs font-bold">New</span>
                </div>
              </div>
              <h4 className="text-white font-semibold mb-1">Text Badge</h4>
              <p className="text-neutral/60 text-sm">For special labels</p>
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
        <h4 className="text-primary font-bold text-lg mb-4">Notification Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>toast notifications</strong> for temporary, non-critical messages that auto-dismiss</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>inline alerts</strong> for contextual messages that require user attention</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Keep notification text <strong>concise and actionable</strong> - tell users what happened and what to do</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use appropriate <strong>notification types</strong> - don't use error for warnings or vice versa</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Provide <strong>clear dismiss actions</strong> for persistent notifications</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Group related notifications to avoid <strong>notification fatigue</strong></span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NotificationsPage;
