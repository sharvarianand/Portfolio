'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [shapes, setShapes] = useState<any[]>([]);

  useEffect(() => {
    const newShapes = [...Array(5)].map((_, i) => ({
      id: i,
      duration: Math.random() * 5 + 5,
      delay: i * 2,
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }));
    setShapes(newShapes);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center items-center text-center gap-6 pt-16 -mt-6 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-light-primary/10 dark:bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-light-secondary/10 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-light-highlight/10 dark:bg-highlight/10 rounded-full blur-3xl animate-pulse delay-2000" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="w-40 h-40 rounded-full bg-gradient-light-primary dark:bg-gradient-primary p-1 mb-8 animate-glow">
          <div className="w-full h-full rounded-full bg-light-background dark:bg-background flex items-center justify-center overflow-hidden">
            <span className="text-6xl">👩‍💻</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-light-text-primary dark:text-text-primary block">Hi, I'm</span>
          <span className="bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text block">Sharvari Bhondekar</span>
        </h1>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative font-heading text-2xl md:text-3xl lg:text-4xl text-light-primary dark:text-primary mb-6 font-semibold"
      >
        AI Enthusiast <span className="text-slate-400 dark:text-slate-600">|</span> Aspiring Software Developer <span className="text-slate-400 dark:text-slate-600">|</span> Scaling Smart Solutions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative text-base md:text-lg max-w-2xl lg:max-w-4xl text-light-text-secondary dark:text-text-secondary mb-8 px-4"
      >
        I'm passionate about crafting high-quality software, solving real-world problems, and continuously learning new technologies specially in the field of Artificial Intelligence. My goal is to create impactful products that make a difference.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <a
          href="#projects"
          className="group px-8 py-4 rounded-full font-heading text-white shadow-lg hover:scale-105 font-semibold bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 ease-in-out"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="group px-8 py-4 rounded-full font-heading border-2 border-light-primary dark:border-primary text-light-primary dark:text-primary hover:scale-105 hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-300 hover:shadow-[0_0_20px_#38bdf899] transition-all duration-300 font-semibold"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Floating Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute bg-sky-500/20 rounded-full"
            initial={{ opacity: 0, scale: 0, x: shape.x, y: shape.y }}
            animate={{ opacity: [0, 1, 0], scale: 1 }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
            style={{
              width: shape.width,
              height: shape.height,
              top: shape.top,
              left: shape.left,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 