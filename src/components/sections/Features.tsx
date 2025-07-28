import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, BarChart3, Globe, Smartphone } from 'lucide-react';
import { Card } from '../ui/Card';
import "../../index.css";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with SOC2, GDPR, and more.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times globally.',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools built for modern distributed teams.',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights and reporting to drive data-driven decisions.',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy anywhere with our worldwide infrastructure network.',
      color: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Native mobile experience with offline capabilities.',
      color: 'text-pink-600 dark:text-pink-400'
    }
  ];

  return (
    <section id="features" className="py-24 overrideTopZero bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Features that scale</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to build, 
            scale, and optimize your business operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const [isHovered, setIsHovered] = useState(false);
            return (
              <div
                key={i}
                className="relative flex justify-center items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ overflow: 'visible' }}
              >
                <Card className="p-8 h-full relative overflow-hidden" tilt>
                  {/* White flash effect inside the card */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{
                      background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 70%, transparent 100%)',
                      filter: 'blur(10px)',
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#pricing"
            className="relative inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            whileHover={{ x: 5 }}
          >
            Explore all features
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
              aria-hidden="true"
            />
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}