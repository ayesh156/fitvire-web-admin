import React, { useMemo } from 'react';
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
  Dumbbell,
  Download,
  PlusCircle,
  Award
} from 'lucide-react';

import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import StatCard from '../components/data/StatCard';
import SectionCard from '../components/ui/SectionCard';
import QuickActionCard from '../components/dashboard/QuickActionCard';
import PageContainer from '../components/layout/PageContainer';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

const formatCompactNumber = (value: number) =>
  new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value);

const mockData = {
  keyMetrics: {
    totalMembers: 15748,
    activeMembers: 12456,
    partnerFacilities: 347,
    monthlyRevenue: 542300,
    completionRate: 87,
    avgRating: 4.8,
    todayWorkouts: 89
  },
  recentActivities: [
    {
      id: 1,
      type: 'workout',
      user: 'Sarah Johnson',
      action: 'completed HIIT workout',
      time: '2 min ago'
    },
    {
      id: 2,
      type: 'partnership',
      user: 'Elite Fitness Center',
      action: 'joined as verified partner',
      time: '15 min ago'
    },
    {
      id: 3,
      type: 'membership',
      user: 'Mike Davis',
      action: 'upgraded to Premium',
      time: '1 hour ago'
    },
    {
      id: 4,
      type: 'review',
      user: 'Emma Wilson',
      action: 'left 5-star review',
      time: '2 hours ago'
    }
  ],
  quickInsights: [
    { label: 'Peak Hours', value: '6-8 PM', trend: '+12%', icon: 'clock' },
    { label: 'Top Workout', value: 'HIIT Burnout', trend: '+24%', icon: 'zap' },
    { label: 'Active Streaks', value: '8.2K users', trend: '+9%', icon: 'users' },
    { label: 'Churn Risk', value: '2.8% forecast', trend: '-1.2%', icon: 'trend' }
  ]
};

const engagementHighlights = [
  { id: 'streaks', label: 'Streak Retention', value: '92%', caption: 'Members on 7+ day streaks' },
  { id: 'conversion', label: 'Conversion Velocity', value: '48%', caption: 'Trial → paid before day 5' },
  { id: 'completion', label: 'Workout Completion', value: '87%', caption: 'Programs finished weekly' }
];

const revenuePrograms = [
  { id: 'virtual-classes', label: 'Virtual Classes', value: 210, growth: 18.4 },
  { id: 'corporate', label: 'Corporate Wellness', value: 156, growth: 12.1 },
  { id: 'events', label: 'Popup Events', value: 94, growth: 9.6 },
  { id: 'marketplace', label: 'Marketplace Sales', value: 82, growth: 7.3 }
];

const engagementChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Active Members',
      data: [9200, 9400, 9870, 10120, 10980, 11240, 11810],
      borderColor: 'rgba(240,68,68,1)',
      backgroundColor: 'rgba(240,68,68,0.15)',
      tension: 0.4,
      fill: true,
      borderWidth: 2,
      pointRadius: 0
    },
    {
      label: 'Workout Completions',
      data: [7800, 8020, 8450, 8710, 9260, 9480, 9960],
      borderColor: 'rgba(254,176,107,1)',
      backgroundColor: 'rgba(254,176,107,0.1)',
      tension: 0.4,
      fill: true,
      borderWidth: 2,
      pointRadius: 0
    }
  ]
};

const revenueChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Revenue (in $K)',
      data: [310, 342, 365, 398, 421, 444, 468],
      backgroundColor: ['rgba(240,68,68,0.85)', 'rgba(250,140,22,0.85)', 'rgba(32,201,151,0.85)', 'rgba(138,92,246,0.85)', 'rgba(240,68,68,0.85)', 'rgba(250,140,22,0.85)', 'rgba(32,201,151,0.85)'],
      borderRadius: 16,
      barThickness: 24
    }
  ]
};

const activityLabelMap: Record<string, string> = {
  workout: 'Workout',
  partnership: 'Partnership',
  membership: 'Subscription',
  review: 'Feedback'
};

const activityIconMap: Record<string, React.ReactNode> = {
  workout: <Activity className="h-4 w-4 text-primary-300" />,
  partnership: <Building className="h-4 w-4 text-emerald-300" />,
  membership: <Users className="h-4 w-4 text-orange-300" />,
  review: <Heart className="h-4 w-4 text-rose-300" />
};

const insightIconMap: Record<string, React.ReactNode> = {
  clock: <Clock className="h-4 w-4 text-primary-300" />,
  zap: <Zap className="h-4 w-4 text-orange-300" />,
  users: <Users className="h-4 w-4 text-emerald-300" />,
  trend: <TrendingUp className="h-4 w-4 text-violet-300" />
};

const quickActions = [
  {
    title: 'Member Management',
    description: 'Review customer growth and retention cohorts.',
    icon: <Users className="h-6 w-6 text-white" />,
    accent: 'primary' as const,
    href: '/dashboard/customers'
  },
  {
    title: 'Partner Operations',
    description: 'Approve new partner facilities and trainers.',
    icon: <Building className="h-6 w-6 text-white" />,
    accent: 'emerald' as const,
    href: '/dashboard/partners'
  },
  {
    title: 'Analytics Studio',
    description: 'Deep-dive into KPIs, funnels, and retention.',
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    accent: 'orange' as const,
    href: '/dashboard/analytics'
  },
  {
    title: 'Content Programs',
    description: 'Publish workouts and orchestrate challenges.',
    icon: <Award className="h-6 w-6 text-white" />,
    accent: 'violet' as const,
    href: '/dashboard/programs'
  }
];

const DashboardOverview: React.FC = () => {
  const headerStats = useMemo(
    () => [
      {
        label: 'Sessions Today',
        value: mockData.keyMetrics.todayWorkouts,
        helperText: 'Peak demand expected 6-9 PM'
      },
      {
        label: 'Avg Rating',
        value: mockData.keyMetrics.avgRating.toFixed(1),
        helperText: 'Across 12.4K verified reviews'
      },
      {
        label: 'Retention',
        value: '83%',
        helperText: 'Rolling 30-day customer retention'
      }
    ],
    []
  );

  const statCards = useMemo(
    () => [
      {
        label: 'Total Members',
        value: formatCompactNumber(mockData.keyMetrics.totalMembers),
        icon: <Users className="h-5 w-5 text-white" />,
        change: '+12.5%',
        changeDirection: 'up' as const,
        helperText: '1.2k joined this week',
        tone: 'primary' as const
      },
      {
        label: 'Active Members',
        value: formatCompactNumber(mockData.keyMetrics.activeMembers),
        icon: <UserCheck className="h-5 w-5 text-white" />,
        change: '+8.2%',
        changeDirection: 'up' as const,
        helperText: '82% daily streak maintained',
        tone: 'orange' as const
      },
      {
        label: 'Partner Facilities',
        value: mockData.keyMetrics.partnerFacilities,
        icon: <Building className="h-5 w-5 text-white" />,
        change: '+15.7%',
        changeDirection: 'up' as const,
        helperText: '12 new partners this month',
        tone: 'emerald' as const
      },
      {
        label: 'Monthly Revenue',
        value: formatCurrency(mockData.keyMetrics.monthlyRevenue),
        icon: <DollarSign className="h-5 w-5 text-white" />,
        change: '+23.1%',
        changeDirection: 'up' as const,
        helperText: 'Closed 39 enterprise deals',
        tone: 'violet' as const
      },
      {
        label: 'Completion Rate',
        value: `${mockData.keyMetrics.completionRate}%`,
        icon: <Target className="h-5 w-5 text-white" />,
        change: '+5.3%',
        changeDirection: 'up' as const,
        helperText: 'Daily schedule adoption surge',
        tone: 'emerald' as const
      }
    ],
    []
  );

  return (
    <PageContainer className="gap-8 text-neutral">
      <PageHeader
        title="Dashboard Overview"
        description="Central command center for FitVire performance, retention, and growth."
        icon={<Dumbbell className="h-8 w-8 text-white" />}
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Overview' }
        ]}
        stats={headerStats}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" size="md" icon={<Download className="h-4 w-4" />}>
              Export Report
            </Button>
            <Button variant="primary" size="md" icon={<PlusCircle className="h-4 w-4" />}>
              New Initiative
            </Button>
          </div>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {statCards.map((card, index) => (
          <StatCard
            key={card.label}
            label={card.label}
            value={card.value}
            icon={card.icon}
            change={card.change}
            changeDirection={card.changeDirection}
            helperText={card.helperText}
            tone={card.tone}
            delay={index * 0.06}
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <SectionCard
          className="xl:col-span-2"
          title="Engagement Pulse"
          description="Monitor how members move through workouts, streaks, and conversion windows."
          icon={<Activity className="h-5 w-5 text-primary-200" />}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {engagementHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral/60">
                  {highlight.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">{highlight.value}</p>
                <p className="text-xs text-neutral/60">{highlight.caption}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <LineChart
              data={engagementChartData}
              height={260}
              className="bg-transparent border-none p-0 shadow-none"
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Revenue Streams"
          description="Breakdown of the initiatives driving recurring revenue."
          icon={<DollarSign className="h-5 w-5 text-emerald-200" />}
        >
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <BarChart
              data={revenueChartData}
              height={260}
              className="bg-transparent border-none p-0 shadow-none"
            />
          </div>
          <div className="space-y-3">
            {revenuePrograms.map((program) => (
              <div
                key={program.id}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{program.label}</p>
                  <p className="text-xs text-neutral/60">${program.value}K this month</p>
                </div>
                <span className="flex items-center gap-1 text-sm font-semibold text-emerald-300">
                  <ArrowUpRight className="h-4 w-4" />
                  {program.growth}%
                </span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard
          className="lg:col-span-2"
          title="Latest Activity"
          description="Real-time events across customers, partners, and operations."
          icon={<Activity className="h-5 w-5 text-primary-200" />}
        >
          <div className="space-y-3">
            {mockData.recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10">
                  {activityIconMap[activity.type] ?? <Activity className="h-4 w-4 text-primary-300" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">
                    <span className="text-primary-300">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-neutral/60">{activity.time}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral/60">
                  {activityLabelMap[activity.type] ?? activity.type}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Quick Insights"
          description="Signals that highlight engagement momentum at a glance."
          icon={<TrendingUp className="h-5 w-5 text-orange-200" />}
        >
          <div className="space-y-4">
            {mockData.quickInsights.map((insight) => (
              <div
                key={insight.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10">
                    {insightIconMap[insight.icon] ?? <Heart className="h-4 w-4 text-primary-300" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{insight.label}</p>
                    <p className="text-xs text-neutral/60">{insight.value}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-300">{insight.trend}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard
        title="Quick Actions"
        description="Jump into the highest-impact workflows for today."
        icon={<Zap className="h-5 w-5 text-primary-200" />}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <QuickActionCard
              key={action.title}
              title={action.title}
              description={action.description}
              icon={action.icon}
              accent={action.accent}
              href={action.href}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Release Readiness"
        description="Track the status of pre-launch deliverables across the organisation."
        icon={<Trophy className="h-5 w-5 text-amber-200" />}
        tone="warning"
      >
        <div className="grid gap-4 text-sm text-neutral/70 md:grid-cols-2">
          <div className="space-y-2">
            {['Dashboard redesign complete', 'Modern UI/UX implementation', 'Viewport + scrolling polish', 'Custom scrollbar styling'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {['API integration (in progress)', 'Real-time data (planned)', 'Advanced analytics (planned)', 'QA regression pass'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-warning-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-warning-400/80">TODO: Remove this notice in production.</p>
      </SectionCard>
    </PageContainer>
  );
};

export default DashboardOverview;