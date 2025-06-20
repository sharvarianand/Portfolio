'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ['#38bdf8', '#6366f1', '#7c3aed', '#0ea5e9'][Math.floor(Math.random() * 4)],
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles; 