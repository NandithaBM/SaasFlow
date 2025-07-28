import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

export function Card({ children, className, hover = true, tilt = false }: CardProps) {
  return (
    <motion.div
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        className
      )}
      whileHover={tilt ? { 
        rotateY: 5, 
        rotateX: 5, 
        scale: 1.02,
        transition: { duration: 0.3 }
      } : hover ? { 
        y: -5, 
        transition: { duration: 0.2 } 
      } : {}}
      style={tilt ? { transformStyle: 'preserve-3d' } : {}}
    >
      {children}
    </motion.div>
  );
}