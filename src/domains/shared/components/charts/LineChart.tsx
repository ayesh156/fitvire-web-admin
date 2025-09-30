import React from 'react';
import clsx from 'clsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      tension?: number;
      fill?: boolean;
      borderWidth?: number;
      pointBackgroundColor?: string;
      cubicInterpolationMode?: 'monotone' | 'default';
    }>;
  };
  title?: string;
  height?: number;
  className?: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, title, height = 300, className }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          color: '#6b7280',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      title: {
        display: !!title,
        text: title,
        color: '#D9D9D9',
        font: {
          family: 'Inter',
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        titleColor: '#f9fafb',
        bodyColor: '#d1d5db',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          family: 'Inter',
          size: 14,
        },
        bodyFont: {
          family: 'Inter',
          size: 13,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#f3f4f6',
          drawBorder: false,
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
      },
      line: {
        borderWidth: 2,
        tension: 0.4,
      },
    },
  };

  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_20px_45px_-28px_rgba(239,68,68,0.45)] transition-colors duration-300',
        className
      )}
    >
      <div style={{ height: `${height}px` }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;