import React from 'react';
import { 
  Users, 
  UserCheck, 
  Building, 
  TrendingUp, 
  DollarSign,
  Activity,
  Heart,
  Zap,
  Target,
  Trophy,
  ArrowUpRight,
  Clock,
  ChevronRight,
  Star,
  Dumbbell,
  Timer,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

// Enhanced fitness platform metrics
const mockData = {
  keyMetrics: {
    totalMembers: 15748,
    activeMembers: 12456,
    partnerFacilities: 347,
    monthlyRevenue: 542300,
    todayWorkouts: 89,
    avgRating: 4.8
  },
  workoutStats: {
    totalWorkouts: 156789,
    completionRate: 87,
    avgDuration: 42,
    popularCategory: 'HIIT Training'
  },
  recentActivities: [
    {
      id: 1,
      type: 'workout',
      user: 'Sarah Johnson',
      action: 'completed HIIT workout',
      time: '2 min ago',
      icon: 'Zap',
      color: 'success'
    },
    {
      id: 2,
      type: 'partnership',
      user: 'Elite Fitness Center',
      action: 'joined as verified partner',
      time: '15 min ago',
      icon: 'Building',
      color: 'info'
    },
    {
      id: 3,
      type: 'membership',
      user: 'Mike Davis',
      action: 'upgraded to Premium',
      time: '1 hour ago',
      icon: 'Trophy',
      color: 'warning'
    },
    {
      id: 4,
      type: 'review',
      user: 'Emma Wilson',
      action: 'left 5-star review',
      time: '2 hours ago',
      icon: 'Star',
      color: 'primary'
    }
  ],
  quickInsights: [
    { label: 'Peak Hours', value: '6-8 PM', trend: '+12%', icon: 'Clock' },
    { label: 'Top Workout', value: 'HIIT', trend: '+24%', icon: 'Zap' },
    { label: 'Avg Duration', value: '42 min', trend: '+8%', icon: 'Timer' },
    { label: 'Satisfaction', value: '4.8/5', trend: '+0.2', icon: 'Heart' }
  ]
};

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  gradient: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeType = 'positive',
  gradient,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Subtle glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          {change && (
            <div className="flex items-center space-x-1">
              <ArrowUpRight className={`w-4 h-4 ${changeType === 'positive' ? 'text-emerald-400' : 'text-red-400'} group-hover:scale-110 transition-transform duration-300`} />
              <span className={`text-sm font-semibold ${changeType === 'positive' ? 'text-emerald-400' : 'text-red-400'}`}>
                {change}
              </span>
            </div>
          )}
        </div>
        <h3 className="text-gray-400 text-sm font-medium mb-2 group-hover:text-gray-300 transition-colors duration-300">{title}</h3>
        <p className="text-3xl font-bold text-white tracking-tight group-hover:text-gray-50 transition-colors duration-300">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </p>
      </div>
    </motion.div>
  );
};

interface ActivityItemProps {
  activity: {
    id: number;
    type: string;
    user: string;
    action: string;
    time: string;
    icon: string;
    color: string;
  };
  index: number;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, index }) => {
  const IconComponent = {
    'Zap': Zap,
    'Building': Building,
    'Trophy': Trophy,
    'Star': Star
  }[activity.icon] || Activity;

  const colorClasses = {
    success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    info: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    warning: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    primary: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className={`p-2.5 rounded-lg border ${colorClasses[activity.color as keyof typeof colorClasses]} group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-4 h-4" />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium text-sm group-hover:text-gray-100 transition-colors duration-300">
          <span className="text-red-400 font-semibold">{activity.user}</span> {activity.action}
        </p>
        <p className="text-gray-400 text-xs mt-0.5 group-hover:text-gray-300 transition-colors duration-300">
          {activity.time}
        </p>
      </div>
    </motion.div>
  );
};

interface InsightCardProps {
  insight: {
    label: string;
    value: string;
    trend: string;
    icon: string;
  };
  index: number;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight, index }) => {
  const IconComponent = {
    'Clock': Clock,
    'Zap': Zap,
    'Timer': Timer,
    'Heart': Heart
  }[insight.icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg">
          <IconComponent className="w-4 h-4 text-white" />
        </div>
        <span className="text-xs text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-1 rounded-full">
          {insight.trend}
        </span>
      </div>
      <h4 className="text-gray-400 text-xs font-medium mb-1">{insight.label}</h4>
      <p className="text-white font-bold text-sm">{insight.value}</p>
    </motion.div>
  );
};

const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-red-600/20 via-orange-600/20 to-red-500/20 backdrop-blur-md rounded-3xl border border-white/20 p-8 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-red-600/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-400/10 to-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-400/10 to-orange-600/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl shadow-xl"
            >
              <Dumbbell className="w-8 h-8 text-white" />
            </motion.div>
            
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                FitVire Dashboard
              </h1>
              <p className="text-gray-300 text-lg">
                Your fitness platform at a glance
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{mockData.keyMetrics.todayWorkouts}</div>
              <div className="text-xs text-gray-400">Workouts Today</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{mockData.keyMetrics.avgRating}</div>
              <div className="text-xs text-gray-400">Avg Rating</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Total Members"
          value={mockData.keyMetrics.totalMembers}
          icon={<Users className="w-6 h-6 text-white" />}
          change="+12.5%"
          gradient="from-red-500 to-red-600"
          delay={0}
        />
        
        <MetricCard
          title="Active Members"
          value={mockData.keyMetrics.activeMembers}
          icon={<UserCheck className="w-6 h-6 text-white" />}
          change="+8.2%"
          gradient="from-orange-500 to-red-500"
          delay={0.1}
        />
        
        <MetricCard
          title="Partner Facilities"
          value={mockData.keyMetrics.partnerFacilities}
          icon={<Building className="w-6 h-6 text-white" />}
          change="+15.7%"
          gradient="from-red-500 to-orange-600"
          delay={0.2}
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Monthly Revenue"
          value={`$${(mockData.keyMetrics.monthlyRevenue / 1000).toFixed(0)}K`}
          icon={<DollarSign className="w-6 h-6 text-white" />}
          change="+23.1%"
          gradient="from-amber-500 to-orange-600"
          delay={0}
        />
        
        <MetricCard
          title="Total Workouts"
          value={`${(mockData.workoutStats.totalWorkouts / 1000).toFixed(0)}K`}
          icon={<Activity className="w-6 h-6 text-white" />}
          change="+18.4%"
          gradient="from-red-500 to-red-600"
          delay={0.1}
        />
        
        <MetricCard
          title="Completion Rate"
          value={`${mockData.workoutStats.completionRate}%`}
          icon={<Target className="w-6 h-6 text-white" />}
          change="+5.3%"
          gradient="from-green-500 to-emerald-600"
          delay={0.2}
        />
        
        <MetricCard
          title="Avg Duration"
          value={`${mockData.workoutStats.avgDuration}min`}
          icon={<Clock className="w-6 h-6 text-white" />}
          change="+2.1%"
          gradient="from-orange-500 to-orange-600"
          delay={0.3}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Recent Activity</span>
            </h2>
            <button className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center space-x-1 transition-colors duration-200">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {mockData.recentActivities.map((activity, index) => (
              <ActivityItem key={activity.id} activity={activity} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Quick Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Quick Insights</span>
          </h2>
          
          <div className="space-y-4">
            {mockData.quickInsights.map((insight, index) => (
              <InsightCard key={insight.label} insight={insight} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <Zap className="w-5 h-5" />
          <span>Quick Actions</span>
        </h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { 
              title: 'Member Management', 
              desc: 'Manage customer accounts', 
              icon: Users, 
              gradient: 'from-red-500 to-red-600',
              href: '/members'
            },
            { 
              title: 'Partner Network', 
              desc: 'Review facility partnerships', 
              icon: Building, 
              gradient: 'from-emerald-500 to-emerald-600',
              href: '/partners'
            },
            { 
              title: 'Analytics', 
              desc: 'Platform insights & metrics', 
              icon: TrendingUp, 
              gradient: 'from-orange-500 to-orange-600',
              href: '/analytics'
            },
            { 
              title: 'Workout Content', 
              desc: 'Manage fitness programs', 
              icon: Award, 
              gradient: 'from-amber-500 to-orange-600',
              href: '/workouts'
            }
          ].map((action, index) => (
            <motion.button
              key={action.title}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                {action.title}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {action.desc}
              </p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* TODO: Development Status Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl border border-amber-500/30 p-6"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-amber-500/20 rounded-lg">
            <Trophy className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-amber-400 font-bold text-lg">Development Status</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-300">✅ Dashboard redesign complete</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-300">✅ Modern UI/UX implementation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-300">✅ Viewport height & scrolling fixed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-300">✅ Custom scrollbar styling</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-gray-300">🔄 API integration (in progress)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-gray-300">⏳ Real-time data (planned)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-gray-300">⏳ Advanced analytics (planned)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-300">✅ Responsive layout optimization</span>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-amber-400/70 mt-4">
          TODO: Remove this development notice in production
        </p>
      </motion.div>

      {/* Additional content to test scrolling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
      >
        <h3 className="text-white font-bold text-lg mb-4">Scrolling Test Content</h3>
        <p className="text-gray-300 mb-4">
          This section demonstrates the viewport height and scrolling functionality. 
          The content area now has proper height constraints and smooth scrolling behavior, 
          just like the sidebar.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Test Card {i + 1}</h4>
              <p className="text-gray-400 text-sm">
                Sample content to demonstrate scrollable viewport functionality with proper height management.
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardOverview;