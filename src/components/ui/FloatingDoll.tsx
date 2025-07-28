import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function FloatingDoll() {
  const dollRef = useRef<HTMLDivElement>(null);
  const [eyePos, setEyePos] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dollRef.current) return;
      const rect = dollRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      // Limit eye movement radius
      const maxDist = 8;
      const dist = Math.min(Math.sqrt(dx * dx + dy * dy), maxDist);
      const angle = Math.atan2(dy, dx);
      const offsetX = Math.cos(angle) * dist;
      const offsetY = Math.sin(angle) * dist;
      setEyePos({
        left: { x: offsetX, y: offsetY },
        right: { x: offsetX, y: offsetY },
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full flex justify-center my-8">
      <motion.div
        ref={dollRef}
        className="relative"
        style={{ width: 80, height: 80 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Mascot SVG with eye tracking */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="36" fill="#6366F1" stroke="#fff" strokeWidth="4" />
          <ellipse cx="40" cy="50" rx="18" ry="10" fill="#fff" opacity="0.7" />
          {/* Eye whites */}
          <circle cx="30" cy="38" r="8" fill="#fff" />
          <circle cx="50" cy="38" r="8" fill="#fff" />
          {/* Pupils (move with mouse) */}
          <motion.circle
            cx={30 + eyePos.left.x}
            cy={38 + eyePos.left.y}
            r="3"
            fill="#6366F1"
          />
          <motion.circle
            cx={50 + eyePos.right.x}
            cy={38 + eyePos.right.y}
            r="3"
            fill="#6366F1"
          />
        </svg>
      </motion.div>
    </div>
  );
} 