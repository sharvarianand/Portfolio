'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FloatingCode = () => {
  const codeSnippets = [
    { code: '{ AI }', x: '15%', y: '25%', delay: 0 },
    { code: '<dev/>', x: '85%', y: '20%', delay: 0.8 },
    { code: '()=>', x: '10%', y: '70%', delay: 1.6 },
    { code: '{}', x: '90%', y: '75%', delay: 2.4 },
    { code: '...', x: '8%', y: '50%', delay: 3.2 },
    { code: '[]', x: '88%', y: '45%', delay: 4 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [20, -10, -30],
          }}
          transition={{
            duration: 4,
            delay: snippet.delay,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeInOut"
          }}
          className="absolute text-xs font-mono bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent opacity-20"
          style={{ left: snippet.x, top: snippet.y }}
        >
          {snippet.code}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCode;