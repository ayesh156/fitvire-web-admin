/**
 * Simple Authentication Test Component
 * 
 * This component tests the basic functionality of the authentication store
 * to ensure no infinite loops or circular dependencies exist.
 */

import { useAuthStore } from './domains/shared/stores/authStore';

export const AuthTest = () => {
  // Direct store access to avoid any selector issues
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const setLoading = useAuthStore((state) => state.setLoading);
  const setError = useAuthStore((state) => state.setError);

  const handleTestLogin = () => {
    setLoading(true);
    
    // Simulate login with mock data
    setTimeout(() => {
      login(
        {
          id: 'test-user-123',
          email: 'admin@fitvire.com',
          firstName: 'Test',
          lastName: 'Admin',
          role: 'superadmin',
          permissions: ['manage_users', 'manage_system', 'view_analytics'],
          avatar: undefined,
          lastLoginAt: undefined,
          isActive: true,
          emailVerified: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          accessToken: 'mock-access-token-123',
          refreshToken: 'mock-refresh-token-456',
          accessTokenExpiry: Date.now() + (15 * 60 * 1000), // 15 minutes
          refreshTokenExpiry: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
        },
        'test-session-789'
      );
      setLoading(false);
    }, 1000);
  };

  const handleTestError = () => {
    setError('This is a test error message');
  };

  const handleClearError = () => {
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* FitVire Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-hover/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="glass-card border border-glass-border rounded-2xl p-8 w-full max-w-md relative z-10">
        <h1 className="text-2xl font-bold text-neutral mb-6 text-center font-display">
          <span className="gradient-text">Auth Store Test</span>
        </h1>

        <div className="space-y-4 mb-6">
          <div className="text-neutral font-body">
            <strong>Status:</strong> {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
          </div>
          
          <div className="text-white">
            <strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}
          </div>
          
          {error && (
            <div className="text-red-300">
              <strong>Error:</strong> {error}
            </div>
          )}
          
          {user && (
            <div className="text-white">
              <strong>User:</strong> {user.firstName} {user.lastName} ({user.email})
              <br />
              <strong>Role:</strong> {user.role}
            </div>
          )}
        </div>

        <div className="space-y-3">
          {!isAuthenticated ? (
            <button
              onClick={handleTestLogin}
              disabled={isLoading}
              className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover disabled:opacity-50 transition-all duration-300 btn-smooth-hover"
            >
              {isLoading ? 'Logging in...' : 'Test Login'}
            </button>
          ) : (
            <button
              onClick={logout}
              className="w-full px-4 py-2 bg-surface text-neutral rounded-lg hover:bg-surface/80"
            >
              Logout
            </button>
          )}
          
          <button
            onClick={handleTestError}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Test Error
          </button>
          
          {error && (
            <button
              onClick={handleClearError}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Clear Error
            </button>
          )}
        </div>
      </div>
    </div>
  );
};