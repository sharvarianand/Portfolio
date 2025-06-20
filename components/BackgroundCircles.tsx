'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  const [circles, setCircles] = useState<any[]>([]);

  useEffect(() => {
    const colors = ['#38bdf8', '#6366f1', '#7c3aed', '#0ea5e9'];
    const newCircles = Array.from({ length: 25 }).map(() => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const background = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * 40 - 20;
      const y = Math.random() * 40 - 20;
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 5;
      return { left, top, background, x, y, duration, delay };
    });
    setCircles(newCircles);
  }, []);

  if (circles.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${circle.left}%`,
            top: `${circle.top}%`,
            background: circle.background,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
            x: [0, circle.x, 0],
            y: [0, circle.y, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles; 