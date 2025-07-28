import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: delay + i * 0.1,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}