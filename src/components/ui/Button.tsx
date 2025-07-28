import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:ring-blue-500',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        initial={{ translateY: '100%' }}
        whileHover={{ translateY: '0%' }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}