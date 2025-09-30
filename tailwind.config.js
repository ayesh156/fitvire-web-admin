/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // FitVire Brand Colors - Exact Match
    primary: '#F04444',
    'primary-hover': '#FF6B4A',
    background: '#191919',
    surface: '#202020',
    elevated: '#252525',
    neutral: '#D9D9D9',
    'glass-bg': 'rgba(32, 32, 32, 0.85)',
    'glass-border': 'rgba(255, 255, 255, 0.12)',
        
        // Primary scale for consistency
        'primary-50': '#FEF2F2',
        'primary-100': '#FEE2E2',
        'primary-200': '#FECACA',
        'primary-300': '#FCA5A5',
        'primary-400': '#F87171',
        'primary-500': '#F04444',
        'primary-600': '#DC2626',
        'primary-700': '#B91C1C',
        'primary-800': '#991B1B',
        'primary-900': '#7F1D1D',
        
        // Status colors that work with dark theme
        success: {
          50: '#f0fdf4',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a'
        },
        warning: {
          50: '#fffbeb',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706'
        },
        error: {
          50: '#fef2f2',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626'
        },
        info: {
          50: '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb'
        },
        
        // Enhanced dark theme grays
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#1a202c',
          900: '#111827',
          950: '#0f0f0f'
        }
      },
      
      fontFamily: {
        sans: ['Exo 2', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Exo 2', 'system-ui', 'sans-serif'],
        body: ['Exo 2', 'system-ui', 'sans-serif'],
      },
      
      backdropBlur: {
        'glass': '12px',
      },
      
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s infinite linear',
      },
      
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
};
