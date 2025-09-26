/**
 * Pure React Context Authentication - No Zustand, No Infinite Loops
 * Simple context provider with stable references
 */

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Auth context type
interface AuthContextType {
  isLoggedIn: boolean;
  currentUser: string | null;
  login: (user: string) => void;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const login = (user: string) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const value = {
    isLoggedIn,
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};