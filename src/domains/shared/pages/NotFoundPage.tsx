/**
 * 404 Not Found Page - FitVire Admin Design System
 * Dark theme error page with fitness-themed styling and enhanced UX
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, HelpCircle, AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 -right-32 w-80 h-80 bg-primary-hover rounded-full blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Error Icon & Code */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.1
            }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-hover rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-6">
                <AlertTriangle className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-primary-hover rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full opacity-60"
              />
            </div>
            
            {/* 404 Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-4 tracking-tight"
            >
              404
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-primary to-primary-hover mx-auto rounded-full"
            />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-neutral/80 leading-relaxed max-w-md mx-auto">
              The page you're looking for doesn't exist in the FitVire admin dashboard.
              It may have been moved, deleted, or the URL is incorrect.
            </p>
          </motion.div>

          {/* Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {/* Quick Actions */}
            <GlassCard padding="sm" className="text-left hover:scale-105 transition-transform duration-300">
              <div className="p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">Dashboard</h3>
                <p className="text-neutral/70 text-sm mb-4">Return to the main admin dashboard</p>
                <Link to="/dashboard">
                  <Button size="sm" className="w-full">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </GlassCard>

            <GlassCard padding="sm" className="text-left hover:scale-105 transition-transform duration-300">
              <div className="p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">Search</h3>
                <p className="text-neutral/70 text-sm mb-4">Find what you're looking for</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {/* TODO: Implement search functionality */}}
                >
                  Open Search
                </Button>
              </div>
            </GlassCard>

            <GlassCard padding="sm" className="text-left hover:scale-105 transition-transform duration-300">
              <div className="p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">Help</h3>
                <p className="text-neutral/70 text-sm mb-4">Get support from our team</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:support@fitvire.com')}
                >
                  Contact Support
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              icon={<ArrowLeft className="w-5 h-5" />}
              onClick={() => window.history.back()}
              className="min-w-[180px]"
            >
              Go Back
            </Button>
            
            <span className="text-neutral/40 hidden sm:block">or</span>
            
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="outline"
                icon={<Home className="w-5 h-5" />}
                className="min-w-[180px]"
              >
                Back to Dashboard
              </Button>
            </Link>
          </motion.div>

          {/* Help Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 pt-8 border-t border-glass-border"
          >
            <div className="text-center space-y-3">
              <p className="text-sm text-neutral/60">
                Need immediate assistance?{' '}
                <a 
                  href="mailto:support@fitvire.com" 
                  className="text-primary hover:text-primary-hover font-medium transition-colors duration-200"
                >
                  Contact FitVire Support
                </a>
                {' '}• Available 24/7
              </p>
              <p className="text-xs text-neutral/40">
                © 2025 FitVire Admin Dashboard. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;