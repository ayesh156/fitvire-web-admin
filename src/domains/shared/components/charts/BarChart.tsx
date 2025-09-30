import React from 'react';
import clsx from 'clsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
      borderRadius?: number | { topLeft: number; topRight: number; bottomLeft: number; bottomRight: number };
      maxBarThickness?: number;
      barPercentage?: number;
      categoryPercentage?: number;
    }>;
  };
  title?: string;
  height?: number;
  stacked?: boolean;
  className?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title, height = 300, stacked = false, className }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#6b7280',
          usePointStyle: true,
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
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        titleColor: '#f9fafb',
        bodyColor: '#e5e7eb',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        borderWidth: 1,
        cornerRadius: 10,
        displayColors: false,
        titleFont: {
          family: 'Inter',
          size: 13,
        },
        bodyFont: {
          family: 'Inter',
          size: 12,
        },
        padding: 12,
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
        stacked,
      },
      y: {
        grid: {
          color: 'rgba(148, 163, 184, 0.15)',
          drawBorder: false,
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
        stacked,
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_20px_45px_-28px_rgba(249,115,22,0.45)] transition-colors duration-300',
        className
      )}
    >
      <div style={{ height: `${height}px` }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
