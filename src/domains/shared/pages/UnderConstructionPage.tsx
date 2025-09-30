/**
 * Under Construction Page - FitVire Admin Design System
 * Professional placeholder for pages that are planned but not yet implemented
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Construction, 
  Home, 
  ArrowLeft, 
  Clock, 
  CheckCircle2,
  Zap,
  Sparkles,
  Calendar
} from 'lucide-react';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';

interface UnderConstructionPageProps {
  title?: string;
  description?: string;
  estimatedCompletion?: string;
  features?: string[];
}

export const UnderConstructionPage: React.FC<UnderConstructionPageProps> = ({
  title,
  description,
  estimatedCompletion = 'Coming Soon',
  features = []
}) => {
  const location = useLocation();
  
  // Extract page name from URL if title not provided
  const pageName = title || location.pathname
    .split('/')
    .filter(Boolean)
    .pop()
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'This Page';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-primary-hover rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8">
        
        {/* Construction Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.1
          }}
          className="relative"
        >
          <div className="relative inline-block">
            {/* Main icon container */}
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-hover rounded-3xl flex items-center justify-center shadow-2xl">
              <Construction className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            
            {/* Floating sparkles */}
            <motion.div
              animate={{ 
                y: [-8, 8, -8],
                rotate: [0, 360, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [8, -8, 8],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4"
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 max-w-2xl"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="warning" size="md" withGlow>
              <>
                <Clock className="w-3 h-3" />
                {estimatedCompletion}
              </>
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-neutral/80 bg-clip-text text-transparent">
            {pageName} is Under Construction
          </h1>
          
          <p className="text-lg md:text-xl text-neutral/70 leading-relaxed">
            {description || `We're working hard to build an amazing ${pageName.toLowerCase()} experience. This feature is currently in development and will be available soon.`}
          </p>
        </motion.div>

        {/* Features Preview (if provided) */}
        {features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-3xl"
          >
            <GlassCard padding="lg" variant="elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Coming Features</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-surface/20 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral/80 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-md"
        >
          <GlassCard padding="md" variant="surface">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral/70">Development Progress</span>
                <span className="text-primary font-semibold">In Progress</span>
              </div>
              
              {/* Animated progress bar */}
              <div className="w-full h-2 bg-surface/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full relative"
                >
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-neutral/60">
                <Calendar className="w-3 h-3" />
                <span>Our team is actively working on this feature</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4 items-center justify-center pt-8"
        >
          <Button
            size="lg"
            icon={<ArrowLeft className="w-5 h-5" />}
            onClick={() => window.history.back()}
            className="min-w-[180px]"
          >
            Go Back
          </Button>
          
          <span className="text-neutral/40">or</span>
          
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
          transition={{ delay: 1.1 }}
          className="pt-12"
        >
          <div className="text-center space-y-2">
            <p className="text-sm text-neutral/60">
              Want to be notified when this feature launches?{' '}
              <a 
                href="mailto:updates@fitvire.com?subject=Notify me about new features" 
                className="text-primary hover:text-primary-hover font-medium transition-colors duration-200"
              >
                Subscribe to Updates
              </a>
            </p>
            <p className="text-xs text-neutral/40">
              FitVire Admin • Building the future of fitness management
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
