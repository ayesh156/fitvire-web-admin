import React from 'react';
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
    }>;
  };
  title?: string;
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, title, height = 300 }) => {
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
    <div className="glass-card p-6 rounded-2xl border border-glass-border">
      <div style={{ height: `${height}px` }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;