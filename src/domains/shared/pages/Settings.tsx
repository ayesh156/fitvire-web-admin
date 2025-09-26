/**
 * Settings Page - FitVire Admin Design System
 * Comprehensive settings interface with dark theme and enhanced UX
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Database,
  Save,
  RotateCcw,
  Palette,
  Globe,
  Monitor,
  Smartphone,
  Mail,
  Lock,
  Server,
  HardDrive,
  Clock,
  AlertTriangle,
  CheckCircle,
  Download,
  Upload,
  Eye,
  EyeOff
} from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';

interface SettingsData {
  // Profile Settings
  adminName: string;
  adminEmail: string;
  language: string;
  timezone: string;
  
  // Appearance Settings
  theme: 'dark' | 'light' | 'system';
  colorScheme: 'default' | 'blue' | 'green' | 'purple';
  compactMode: boolean;
  
  // Notification Settings
  emailNotifications: boolean;
  pushNotifications: boolean;
  systemAlerts: boolean;
  securityAlerts: boolean;
  weeklyReports: boolean;
  
  // Security Settings
  sessionTimeout: number;
  twoFactorAuth: boolean;
  autoLogout: boolean;
  passwordComplexity: 'basic' | 'medium' | 'high';
  
  // System Settings
  maintenanceMode: boolean;
  backupFrequency: 'daily' | 'weekly' | 'monthly';
  dataRetention: number;
  apiRateLimit: number;
  logLevel: 'error' | 'warn' | 'info' | 'debug';
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsData>({
    // Profile Settings
    adminName: 'FitVire Admin',
    adminEmail: 'admin@fitvire.com',
    language: 'en',
    timezone: 'America/Los_Angeles',
    
    // Appearance Settings
    theme: 'dark',
    colorScheme: 'default',
    compactMode: false,
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    systemAlerts: true,
    securityAlerts: true,
    weeklyReports: false,
    
    // Security Settings
    sessionTimeout: 60,
    twoFactorAuth: true,
    autoLogout: true,
    passwordComplexity: 'high',
    
    // System Settings
    maintenanceMode: false,
    backupFrequency: 'daily',
    dataRetention: 90,
    apiRateLimit: 1000,
    logLevel: 'info'
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [originalSettings, setOriginalSettings] = useState<SettingsData>(settings);

  const handleInputChange = (key: keyof SettingsData, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setSaveLoading(true);
    try {
      // TODO: Implement save to backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Saving settings:', settings);
      setOriginalSettings(settings);
      setHasChanges(false);
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setSaveLoading(false);
    }
  };

  const handleReset = () => {
    setSettings(originalSettings);
    setHasChanges(false);
  };

  const handleRestoreDefaults = () => {
    const defaultSettings: SettingsData = {
      adminName: 'FitVire Admin',
      adminEmail: 'admin@fitvire.com',
      language: 'en',
      timezone: 'America/Los_Angeles',
      theme: 'dark',
      colorScheme: 'default',
      compactMode: false,
      emailNotifications: true,
      pushNotifications: true,
      systemAlerts: true,
      securityAlerts: true,
      weeklyReports: false,
      sessionTimeout: 60,
      twoFactorAuth: false,
      autoLogout: true,
      passwordComplexity: 'medium',
      maintenanceMode: false,
      backupFrequency: 'daily',
      dataRetention: 90,
      apiRateLimit: 1000,
      logLevel: 'info'
    };
    setSettings(defaultSettings);
    setHasChanges(true);
  };

  const SettingsCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    description: string; 
    children: React.ReactNode;
    className?: string;
  }> = ({ icon, title, description, children, className = "" }) => (
    <GlassCard className={className}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <div className="text-primary">{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-neutral/70">{description}</p>
        </div>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </GlassCard>
  );

  const InputField: React.FC<{
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    icon?: React.ReactNode;
  }> = ({ label, value, onChange, type = 'text', placeholder, icon }) => (
    <div>
      <Input
        label={label}
        type={type}
        value={value.toString()}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        leftIcon={icon}
        size="md"
      />
    </div>
  );

  const ToggleField: React.FC<{
    label: string;
    description: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon?: React.ReactNode;
  }> = ({ label, description, checked, onChange, icon }) => (
    <div className="flex items-center justify-between p-4 bg-surface/30 rounded-xl border border-glass-border">
      <div className="flex items-center space-x-3">
        {icon && (
          <div className="text-neutral/60">
            {icon}
          </div>
        )}
        <div>
          <label className="text-sm font-medium text-white">{label}</label>
          <p className="text-xs text-neutral/70">{description}</p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background
          ${checked ? 'bg-primary shadow-lg shadow-primary/25' : 'bg-surface border border-glass-border'}
        `}
      >
        <motion.span
          animate={{
            x: checked ? 24 : 4,
            backgroundColor: checked ? '#ffffff' : '#9CA3AF'
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="inline-block h-4 w-4 rounded-full shadow-sm"
        />
      </motion.button>
    </div>
  );

  const SelectField: React.FC<{
    label: string;
    value: string;
    options: { value: string; label: string; description?: string }[];
    onChange: (value: string) => void;
    icon?: React.ReactNode;
  }> = ({ label, value, options, onChange, icon }) => (
    <div>
      <label className="block text-sm font-medium text-white mb-3">
        <div className="flex items-center space-x-2">
          {icon && <div className="text-neutral/60">{icon}</div>}
          <span>{label}</span>
        </div>
      </label>
      <div className="space-y-2">
        {options.map(option => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => onChange(option.value)}
            className={`
              w-full p-3 rounded-xl border text-left transition-all duration-200
              ${value === option.value 
                ? 'bg-primary/20 border-primary text-white' 
                : 'bg-surface/30 border-glass-border text-neutral hover:bg-surface/50'
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{option.label}</p>
                {option.description && (
                  <p className="text-xs text-neutral/70 mt-1">{option.description}</p>
                )}
              </div>
              {value === option.value && (
                <CheckCircle className="w-5 h-5 text-primary" />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const StatusBadge: React.FC<{ status: 'active' | 'inactive' | 'warning' }> = ({ status }) => {
    const statusConfig = {
      active: { color: 'success' as const, label: 'Active', icon: CheckCircle },
      inactive: { color: 'secondary' as const, label: 'Inactive', icon: EyeOff },
      warning: { color: 'warning' as const, label: 'Warning', icon: AlertTriangle }
    };
    
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
      <Badge variant={config.color} className="flex items-center space-x-1">
        <Icon className="w-3 h-3" />
        <span>{config.label}</span>
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary/20 rounded-2xl">
            <SettingsIcon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-neutral/70">Configure your admin dashboard preferences and system settings</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {hasChanges && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-3"
            >
              <Button
                variant="ghost"
                onClick={handleReset}
                icon={<RotateCcw className="w-4 h-4" />}
                size="lg"
              >
                Reset
              </Button>
              <Button
                variant="primary"
                onClick={handleSave}
                icon={<Save className="w-4 h-4" />}
                loading={saveLoading}
                size="lg"
              >
                Save Changes
              </Button>
            </motion.div>
          )}
          <Button
            variant="outline"
            onClick={handleRestoreDefaults}
            icon={<RotateCcw className="w-4 h-4" />}
            size="lg"
          >
            Restore Defaults
          </Button>
        </div>
      </motion.div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SettingsCard
            icon={<User className="w-6 h-6" />}
            title="Profile Settings"
            description="Basic admin profile and localization preferences"
          >
            <InputField
              label="Admin Name"
              value={settings.adminName}
              onChange={(value) => handleInputChange('adminName', value)}
              placeholder="Enter admin name"
              icon={<User className="w-4 h-4" />}
            />
            <InputField
              label="Email Address"
              value={settings.adminEmail}
              onChange={(value) => handleInputChange('adminEmail', value)}
              type="email"
              placeholder="Enter email address"
              icon={<Mail className="w-4 h-4" />}
            />
            <SelectField
              label="Language"
              value={settings.language}
              icon={<Globe className="w-4 h-4" />}
              options={[
                { value: 'en', label: 'English', description: 'English (US)' },
                { value: 'es', label: 'Spanish', description: 'Español' },
                { value: 'fr', label: 'French', description: 'Français' },
                { value: 'de', label: 'German', description: 'Deutsch' }
              ]}
              onChange={(value) => handleInputChange('language', value)}
            />
            <SelectField
              label="Timezone"
              value={settings.timezone}
              icon={<Clock className="w-4 h-4" />}
              options={[
                { value: 'America/Los_Angeles', label: 'Pacific Time', description: 'UTC-8' },
                { value: 'America/New_York', label: 'Eastern Time', description: 'UTC-5' },
                { value: 'Europe/London', label: 'Greenwich Time', description: 'UTC+0' },
                { value: 'Asia/Tokyo', label: 'Japan Time', description: 'UTC+9' }
              ]}
              onChange={(value) => handleInputChange('timezone', value)}
            />
          </SettingsCard>
        </motion.div>

        {/* Appearance Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SettingsCard
            icon={<Palette className="w-6 h-6" />}
            title="Appearance"
            description="Customize the look and feel of your dashboard"
          >
            <SelectField
              label="Theme"
              value={settings.theme}
              icon={<Monitor className="w-4 h-4" />}
              options={[
                { value: 'dark', label: 'Dark Theme', description: 'Optimized for low-light environments' },
                { value: 'light', label: 'Light Theme', description: 'Clean and bright interface' },
                { value: 'system', label: 'System', description: 'Follow system preference' }
              ]}
              onChange={(value) => handleInputChange('theme', value as 'dark' | 'light' | 'system')}
            />
            <SelectField
              label="Color Scheme"
              value={settings.colorScheme}
              icon={<Palette className="w-4 h-4" />}
              options={[
                { value: 'default', label: 'FitVire Red', description: 'Default brand colors' },
                { value: 'blue', label: 'Ocean Blue', description: 'Professional blue theme' },
                { value: 'green', label: 'Forest Green', description: 'Nature-inspired green' },
                { value: 'purple', label: 'Royal Purple', description: 'Elegant purple accent' }
              ]}
              onChange={(value) => handleInputChange('colorScheme', value as 'default' | 'blue' | 'green' | 'purple')}
            />
            <ToggleField
              label="Compact Mode"
              description="Reduce spacing for more content density"
              checked={settings.compactMode}
              onChange={(checked) => handleInputChange('compactMode', checked)}
              icon={<Monitor className="w-4 h-4" />}
            />
          </SettingsCard>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SettingsCard
            icon={<Bell className="w-6 h-6" />}
            title="Notifications"
            description="Configure how and when you receive notifications"
          >
            <ToggleField
              label="Email Notifications"
              description="Receive important updates via email"
              checked={settings.emailNotifications}
              onChange={(checked) => handleInputChange('emailNotifications', checked)}
              icon={<Mail className="w-4 h-4" />}
            />
            <ToggleField
              label="Push Notifications"
              description="Browser notifications for real-time alerts"
              checked={settings.pushNotifications}
              onChange={(checked) => handleInputChange('pushNotifications', checked)}
              icon={<Smartphone className="w-4 h-4" />}
            />
            <ToggleField
              label="System Alerts"
              description="Critical system and error notifications"
              checked={settings.systemAlerts}
              onChange={(checked) => handleInputChange('systemAlerts', checked)}
              icon={<Server className="w-4 h-4" />}
            />
            <ToggleField
              label="Security Alerts"
              description="Login attempts and security events"
              checked={settings.securityAlerts}
              onChange={(checked) => handleInputChange('securityAlerts', checked)}
              icon={<Shield className="w-4 h-4" />}
            />
            <ToggleField
              label="Weekly Reports"
              description="Summary reports of platform activity"
              checked={settings.weeklyReports}
              onChange={(checked) => handleInputChange('weeklyReports', checked)}
              icon={<Download className="w-4 h-4" />}
            />
          </SettingsCard>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SettingsCard
            icon={<Shield className="w-6 h-6" />}
            title="Security"
            description="Authentication and access control settings"
          >
            <InputField
              label="Session Timeout"
              value={settings.sessionTimeout}
              onChange={(value) => handleInputChange('sessionTimeout', parseInt(value) || 60)}
              type="number"
              placeholder="60"
              icon={<Clock className="w-4 h-4" />}
            />
            <ToggleField
              label="Two-Factor Authentication"
              description="Add extra security layer to your account"
              checked={settings.twoFactorAuth}
              onChange={(checked) => handleInputChange('twoFactorAuth', checked)}
              icon={<Lock className="w-4 h-4" />}
            />
            <ToggleField
              label="Auto Logout"
              description="Automatically log out after inactivity"
              checked={settings.autoLogout}
              onChange={(checked) => handleInputChange('autoLogout', checked)}
              icon={<Shield className="w-4 h-4" />}
            />
            <SelectField
              label="Password Complexity"
              value={settings.passwordComplexity}
              icon={<Lock className="w-4 h-4" />}
              options={[
                { value: 'basic', label: 'Basic', description: 'Minimum 8 characters' },
                { value: 'medium', label: 'Medium', description: 'Letters, numbers, and symbols' },
                { value: 'high', label: 'High', description: 'Strong requirements with special rules' }
              ]}
              onChange={(value) => handleInputChange('passwordComplexity', value as 'basic' | 'medium' | 'high')}
            />
          </SettingsCard>
        </motion.div>

        {/* System Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="xl:col-span-2"
        >
          <SettingsCard
            icon={<Database className="w-6 h-6" />}
            title="System Configuration"
            description="Platform-wide settings and maintenance options"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <ToggleField
                  label="Maintenance Mode"
                  description="Put the entire system in maintenance mode"
                  checked={settings.maintenanceMode}
                  onChange={(checked) => handleInputChange('maintenanceMode', checked)}
                  icon={<AlertTriangle className="w-4 h-4" />}
                />
                <SelectField
                  label="Backup Frequency"
                  value={settings.backupFrequency}
                  icon={<HardDrive className="w-4 h-4" />}
                  options={[
                    { value: 'daily', label: 'Daily', description: 'Automated daily backups' },
                    { value: 'weekly', label: 'Weekly', description: 'Weekly backup schedule' },
                    { value: 'monthly', label: 'Monthly', description: 'Monthly backup only' }
                  ]}
                  onChange={(value) => handleInputChange('backupFrequency', value as 'daily' | 'weekly' | 'monthly')}
                />
                <InputField
                  label="Data Retention (days)"
                  value={settings.dataRetention}
                  onChange={(value) => handleInputChange('dataRetention', parseInt(value) || 90)}
                  type="number"
                  placeholder="90"
                  icon={<Database className="w-4 h-4" />}
                />
              </div>
              <div className="space-y-6">
                <InputField
                  label="API Rate Limit (requests/hour)"
                  value={settings.apiRateLimit}
                  onChange={(value) => handleInputChange('apiRateLimit', parseInt(value) || 1000)}
                  type="number"
                  placeholder="1000"
                  icon={<Server className="w-4 h-4" />}
                />
                <SelectField
                  label="Log Level"
                  value={settings.logLevel}
                  icon={<Eye className="w-4 h-4" />}
                  options={[
                    { value: 'error', label: 'Error', description: 'Only critical errors' },
                    { value: 'warn', label: 'Warning', description: 'Errors and warnings' },
                    { value: 'info', label: 'Info', description: 'General information logs' },
                    { value: 'debug', label: 'Debug', description: 'Detailed debugging information' }
                  ]}
                  onChange={(value) => handleInputChange('logLevel', value as 'error' | 'warn' | 'info' | 'debug')}
                />
              </div>
            </div>
            
            {/* System Status */}
            <div className="mt-8 p-4 bg-surface/30 rounded-xl border border-glass-border">
              <h4 className="text-sm font-medium text-white mb-4 flex items-center space-x-2">
                <Server className="w-4 h-4" />
                <span>System Status</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral/70">Platform Status</span>
                  <StatusBadge status="active" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral/70">Backup System</span>
                  <StatusBadge status="active" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral/70">Security Monitoring</span>
                  <StatusBadge status="active" />
                </div>
              </div>
            </div>
          </SettingsCard>
        </motion.div>
      </div>

      {/* Footer Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-glass-border"
      >
        <Button
          variant="outline"
          size="lg"
          icon={<Download className="w-5 h-5" />}
          onClick={() => {/* TODO: Export settings */}}
        >
          Export Settings
        </Button>
        <Button
          variant="outline"
          size="lg"
          icon={<Upload className="w-5 h-5" />}
          onClick={() => {/* TODO: Import settings */}}
        >
          Import Settings
        </Button>
      </motion.div>
    </div>
  );
};

export default Settings;