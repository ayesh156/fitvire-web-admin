/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  // @ts-ignore - Vitest extends Vite config
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
        '**/dist/**',
        '**/*.test.*',
        '**/*.spec.*'
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/domains/shared/components'),
      '@/hooks': resolve(__dirname, './src/domains/shared/hooks'),
      '@/utils': resolve(__dirname, './src/domains/shared/utils'),
      '@/types': resolve(__dirname, './src/domains/shared/types'),
      '@/services': resolve(__dirname, './src/domains/shared/services'),
      '@/stores': resolve(__dirname, './src/domains/shared/stores')
    }
  }
});