/**
 * Profile Page - FitVire Admin Design System
 * Enhanced profile management interface with dark theme and improved UX
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Save,
  Edit,
  Shield,
  Clock,
  Award,
  Upload,
  Key,
  Activity,
  Settings,
  LogOut,
  Eye,
  Calendar,
  Globe
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import GlassCard from '../components/ui/GlassCard';
import PageContainer from '../components/layout/PageContainer';

interface ProfileData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  bio: string;
  
  // Admin Information
  role: string;
  department: string;
  joinDate: string;
  lastLogin: string;
  employeeId: string;
  
  // Security
  passwordLastChanged: string;
  twoFactorEnabled: boolean;
  lastPasswordChange: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@fitvire.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    timezone: 'Pacific Standard Time (PST)',
    bio: 'Senior System Administrator managing FitVire platform infrastructure and user operations.',
    role: 'Super Admin',
    department: 'Platform Operations',
    joinDate: '2024-01-15',
    lastLogin: '2024-09-25 14:30',
    employeeId: 'FV-ADMIN-001',
    passwordLastChanged: '2024-08-15',
    twoFactorEnabled: true,
    lastPasswordChange: '2024-08-15'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [originalProfile, setOriginalProfile] = useState<ProfileData>(profile);

  const handleInputChange = (key: keyof ProfileData, value: string | boolean) => {
    setProfile(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    try {
      // TODO: Implement save to backend
      console.log('Saving profile:', profile);
      setOriginalProfile(profile);
      setHasChanges(false);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
    setHasChanges(false);
  };

  const handleAvatarUpload = () => {
    // TODO: Implement avatar upload functionality
    console.log('Upload avatar');
  };

  const InfoCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    description?: string;
    children: React.ReactNode;
    className?: string;
  }> = ({ icon, title, description, children, className = "" }) => (
    <GlassCard className={`${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <div className="text-primary">{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {description && <p className="text-sm text-neutral/70">{description}</p>}
        </div>
      </div>
      {children}
    </GlassCard>
  );

  const InfoRow: React.FC<{
    label: string;
    value: string | boolean;
    icon?: React.ReactNode;
    editable?: boolean;
    type?: 'text' | 'email' | 'tel' | 'textarea';
    onEdit?: (value: string) => void;
  }> = ({ label, value, icon, editable = false, type = 'text', onEdit }) => (
    <div className="py-4 border-b border-glass-border last:border-b-0">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          {icon && (
            <div className="text-neutral/60 mt-1">
              {icon}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-xs text-neutral/60 uppercase tracking-wide font-medium mb-1">
              {label}
            </p>
            {isEditing && editable && onEdit ? (
              type === 'textarea' ? (
                <textarea
                  value={value as string}
                  onChange={(e) => onEdit(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 bg-surface/50 border border-glass-border text-white text-sm rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                />
              ) : (
                <Input
                  type={type}
                  value={value as string}
                  onChange={(e) => onEdit(e.target.value)}
                  className="text-sm"
                  size="sm"
                  fullWidth
                />
              )
            ) : (
              <p className="text-white font-medium break-words">
                {typeof value === 'boolean' ? (value ? 'Enabled' : 'Disabled') : value}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const StatCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    value: string | number;
    trend?: string;
    color?: 'primary' | 'success' | 'warning' | 'danger';
  }> = ({ icon, title, value, trend, color = 'primary' }) => {
    const colorClasses = {
      primary: 'text-primary bg-primary/20',
      success: 'text-green-400 bg-green-400/20',
      warning: 'text-yellow-400 bg-yellow-400/20',
      danger: 'text-red-400 bg-red-400/20'
    };

    return (
      <GlassCard padding="sm" className="text-center">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${colorClasses[color]}`}>
          {icon}
        </div>
        <h4 className="text-2xl font-bold text-white mb-1">{value}</h4>
        <p className="text-sm text-neutral/70 mb-1">{title}</p>
        {trend && <p className="text-xs text-neutral/50">{trend}</p>}
      </GlassCard>
    );
  };

  return (
    <PageContainer className="gap-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
      >
        <div className="flex items-center space-x-6">
          {/* Enhanced Profile Avatar */}
          <div className="relative group">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold text-white">
                {profile.firstName[0]}{profile.lastName[0]}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAvatarUpload}
              className="absolute -bottom-2 -right-2 p-2 bg-primary hover:bg-primary-hover border-4 border-background rounded-xl transition-all duration-200 shadow-lg"
            >
              <Camera className="w-4 h-4 text-white" />
            </motion.button>
            <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-white mb-3 font-display">
              {profile.firstName} {profile.lastName}
            </h1>
            <div className="flex items-center space-x-3 mb-4">
              <Badge variant="success" size="md" className="px-4 py-2 font-semibold uppercase tracking-wide">
                {profile.role}
              </Badge>
              <span className="text-neutral/40">•</span>
              <span className="text-neutral/80 text-lg">{profile.department}</span>
            </div>
            <p className="text-neutral/80 text-base max-w-md leading-relaxed">
              {profile.bio}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {isEditing ? (
            <>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button variant="ghost" size="lg" onClick={handleCancel} className="border border-glass-border hover:bg-surface/60">
                  Cancel
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSave}
                  icon={<Save className="w-5 h-5" />}
                  disabled={!hasChanges}
                  loading={false}
                  className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg hover:shadow-primary/25"
                >
                  Save Changes
                </Button>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Settings className="w-5 h-5" />}
                  onClick={() => {/* TODO: Navigate to settings */}}
                  className="border-glass-border text-neutral hover:bg-surface/60 hover:border-primary/30"
                >
                  Settings
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsEditing(true)}
                  icon={<Edit className="w-5 h-5" />}
                  className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg hover:shadow-primary/25"
                >
                  Edit Profile
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <StatCard
          icon={<Calendar className="w-6 h-6" />}
          title="Days Active"
          value={253}
          trend="Since joining"
          color="success"
        />
        <StatCard
          icon={<Activity className="w-6 h-6" />}
          title="Actions Today"
          value={47}
          trend="Above average"
          color="primary"
        />
        <StatCard
          icon={<Eye className="w-6 h-6" />}
          title="Sessions"
          value={1}
          trend="Currently active"
          color="warning"
        />
        <StatCard
          icon={<Shield className="w-6 h-6" />}
          title="Security Score"
          value="98%"
          trend="Excellent"
          color="success"
        />
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2"
        >
          <InfoCard
            icon={<User className="w-6 h-6" />}
            title="Personal Information"
            description="Manage your personal details and contact information"
          >
            <div className="space-y-0">
              <InfoRow
                label="First Name"
                value={profile.firstName}
                editable
                onEdit={(value) => handleInputChange('firstName', value)}
              />
              <InfoRow
                label="Last Name"
                value={profile.lastName}
                editable
                onEdit={(value) => handleInputChange('lastName', value)}
              />
              <InfoRow
                label="Email Address"
                value={profile.email}
                icon={<Mail className="w-4 h-4" />}
                editable
                type="email"
                onEdit={(value) => handleInputChange('email', value)}
              />
              <InfoRow
                label="Phone Number"
                value={profile.phone}
                icon={<Phone className="w-4 h-4" />}
                editable
                type="tel"
                onEdit={(value) => handleInputChange('phone', value)}
              />
              <InfoRow
                label="Location"
                value={profile.location}
                icon={<MapPin className="w-4 h-4" />}
                editable
                onEdit={(value) => handleInputChange('location', value)}
              />
              <InfoRow
                label="Timezone"
                value={profile.timezone}
                icon={<Globe className="w-4 h-4" />}
                editable
                onEdit={(value) => handleInputChange('timezone', value)}
              />
              <InfoRow
                label="Bio"
                value={profile.bio}
                editable
                type="textarea"
                onEdit={(value) => handleInputChange('bio', value)}
              />
            </div>
          </InfoCard>
        </motion.div>

        {/* Account & Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Account Information */}
          <InfoCard
            icon={<Shield className="w-6 h-6" />}
            title="Account Information"
            description="Your administrative account details"
          >
            <div className="space-y-0">
              <InfoRow
                label="Employee ID"
                value={profile.employeeId}
                icon={<Award className="w-4 h-4" />}
              />
              <InfoRow
                label="Role"
                value={profile.role}
                icon={<Award className="w-4 h-4" />}
              />
              <InfoRow
                label="Department"
                value={profile.department}
              />
              <InfoRow
                label="Join Date"
                value={new Date(profile.joinDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                icon={<Calendar className="w-4 h-4" />}
              />
              <InfoRow
                label="Last Login"
                value={profile.lastLogin}
                icon={<Clock className="w-4 h-4" />}
              />
            </div>
          </InfoCard>

          {/* Security Status */}
          <InfoCard
            icon={<Key className="w-6 h-6" />}
            title="Security Status"
            description="Your account security settings"
          >
            <div className="space-y-0">
              <InfoRow
                label="Two-Factor Auth"
                value={profile.twoFactorEnabled}
                icon={<Shield className="w-4 h-4" />}
              />
              <InfoRow
                label="Password Changed"
                value={new Date(profile.passwordLastChanged).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                icon={<Key className="w-4 h-4" />}
              />
            </div>
          </InfoCard>
        </motion.div>
      </div>

      {/* Security Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <InfoCard
          icon={<Shield className="w-6 h-6" />}
          title="Security Actions"
          description="Manage your account security and authentication settings"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div whileHover={{ scale: 1.02, y: -2 }}>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Key className="w-5 h-5" />}
                className="h-16 border-glass-border text-neutral hover:bg-surface/60 hover:border-primary/30 w-full"
                onClick={() => {/* TODO: Implement change password */}}
              >
                Change Password
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, y: -2 }}>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Shield className="w-5 h-5" />}
                className="h-16 border-glass-border text-neutral hover:bg-surface/60 hover:border-primary/30 w-full"
                onClick={() => {/* TODO: Implement 2FA toggle */}}
              >
                {profile.twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, y: -2 }}>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Activity className="w-5 h-5" />}
                className="h-16 border-glass-border text-neutral hover:bg-surface/60 hover:border-primary/30 w-full"
                onClick={() => {/* TODO: Implement login history */}}
              >
                Login History
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, y: -2 }}>
              <Button 
                variant="outline" 
                size="lg"
                icon={<LogOut className="w-5 h-5" />}
                className="h-16 border-glass-border text-neutral hover:bg-surface/60 hover:border-primary/30 w-full"
                onClick={() => {/* TODO: Implement logout all sessions */}}
              >
                End All Sessions
              </Button>
            </motion.div>
          </div>
        </InfoCard>
      </motion.div>
    </PageContainer>
  );
};

export default Profile;