/**
 * FitVire Web Admin - Main Application Component
 * 
 * Transformed to use TailAdmin-inspired dashboard UI
 * Features:
 * - Modern sidebar navigation with collapsible design
 * - Dark mode support with system preference detection
 * - Responsive design optimized for admin workflows
 * - Framer Motion animations for smooth interactions
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './AppRouter';

// Configure React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

/**
 * Main App Component - Clean Authentication Flow
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
