/**
 * Charts Design System Page
 * Showcase of data visualization components and chart types
 */

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';

export const ChartsPage: React.FC = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [8000, 12000, 10000, 15000, 14000, 18000],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Bookings',
        data: [45, 52, 48, 61, 55, 67, 42],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderRadius: 8,
      },
    ],
  };

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Active Users',
        data: [1200, 1900, 1500, 2500, 2200, 3000, 2800, 3200, 3500, 3800, 4000, 4500],
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Charts</h2>
        <p className="text-neutral/70 text-lg">
          Data visualization components using Chart.js with responsive design
        </p>
      </motion.div>

      {/* Line Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Line Chart</h3>
              <p className="text-neutral/60 text-sm">Perfect for trends over time</p>
            </div>
          </div>

          <LineChart
            data={lineChartData}
            title="Revenue vs Expenses"
            height={300}
          />
        </GlassCard>
      </motion.div>

      {/* Bar Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Bar Chart</h3>
              <p className="text-neutral/60 text-sm">Ideal for comparing categories</p>
            </div>
          </div>

          <BarChart
            data={barChartData}
            title="Weekly Bookings"
            height={300}
          />
        </GlassCard>
      </motion.div>

      {/* Multi-Series Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Growth Chart</h3>
              <p className="text-neutral/60 text-sm">Yearly user growth trends</p>
            </div>
          </div>

          <LineChart
            data={monthlyData}
            title="Active Users Growth (2024)"
            height={300}
          />
        </GlassCard>
      </motion.div>

      {/* Chart Color Palette */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <PieChartIcon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Chart Color Palette</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="w-full h-16 rounded-lg mb-3" style={{ background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' }}></div>
              <h4 className="text-white font-semibold mb-1">Primary Red</h4>
              <p className="text-neutral/60 text-sm">Main brand color for highlights</p>
              <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded mt-2 inline-block">
                #EF4444
              </code>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="w-full h-16 rounded-lg mb-3" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' }}></div>
              <h4 className="text-white font-semibold mb-1">Blue</h4>
              <p className="text-neutral/60 text-sm">Information and secondary data</p>
              <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded mt-2 inline-block">
                #3B82F6
              </code>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="w-full h-16 rounded-lg mb-3" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' }}></div>
              <h4 className="text-white font-semibold mb-1">Green</h4>
              <p className="text-neutral/60 text-sm">Growth and positive metrics</p>
              <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded mt-2 inline-block">
                #22C55E
              </code>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="w-full h-16 rounded-lg mb-3" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}></div>
              <h4 className="text-white font-semibold mb-1">Orange</h4>
              <p className="text-neutral/60 text-sm">Warnings and attention</p>
              <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded mt-2 inline-block">
                #F59E0B
              </code>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="w-full h-16 rounded-lg mb-3" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' }}></div>
              <h4 className="text-white font-semibold mb-1">Purple</h4>
              <p className="text-neutral/60 text-sm">Premium features</p>
              <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded mt-2 inline-block">
                #8B5CF6
              </code>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="w-full h-16 rounded-lg mb-3" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)' }}></div>
              <h4 className="text-white font-semibold mb-1">Pink</h4>
              <p className="text-neutral/60 text-sm">Special highlights</p>
              <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded mt-2 inline-block">
                #EC4899
              </code>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Chart Types Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Chart Types & Use Cases</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-white font-semibold">Line Charts</h4>
              </div>
              <p className="text-neutral/70 text-sm leading-relaxed mb-3">
                Best for showing trends over time, continuous data, and multiple data series comparison.
              </p>
              <ul className="space-y-1 text-neutral/60 text-xs">
                <li>• Revenue trends</li>
                <li>• User growth over time</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold">Bar Charts</h4>
              </div>
              <p className="text-neutral/70 text-sm leading-relaxed mb-3">
                Ideal for comparing quantities across different categories or groups.
              </p>
              <ul className="space-y-1 text-neutral/60 text-xs">
                <li>• Category comparisons</li>
                <li>• Weekly/monthly stats</li>
                <li>• Distribution analysis</li>
              </ul>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <PieChartIcon className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="text-white font-semibold">Pie/Donut Charts</h4>
              </div>
              <p className="text-neutral/70 text-sm leading-relaxed mb-3">
                Perfect for showing proportions and percentage distributions.
              </p>
              <ul className="space-y-1 text-neutral/60 text-xs">
                <li>• Market share</li>
                <li>• Category breakdown</li>
                <li>• Budget allocation</li>
              </ul>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold">Area Charts</h4>
              </div>
              <p className="text-neutral/70 text-sm leading-relaxed mb-3">
                Great for emphasizing volume and cumulative totals over time.
              </p>
              <ul className="space-y-1 text-neutral/60 text-xs">
                <li>• Cumulative metrics</li>
                <li>• Stacked comparisons</li>
                <li>• Volume visualization</li>
              </ul>
            </div>
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
        <h4 className="text-primary font-bold text-lg mb-4">Chart Design Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Choose chart types that <strong>match your data story</strong> - don't force data into the wrong visualization</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>consistent colors</strong> across charts for the same data categories</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Keep charts <strong>simple and focused</strong> - remove unnecessary gridlines and decorations</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Provide <strong>clear labels and legends</strong> - users shouldn't have to guess what data represents</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Make charts <strong>responsive</strong> - they should work well on all screen sizes</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>tooltips</strong> to show precise values on hover without cluttering the chart</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ChartsPage;
