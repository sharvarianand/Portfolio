'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
        className="relative font-heading text-xl md:text-2xl lg:text-3xl text-light-primary dark:text-primary mb-4"
      >
        Aspiring Software Developer | Building Robust & Scalable Solutions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative text-lg md:text-xl max-w-2xl lg:max-w-4xl text-light-text-secondary dark:text-text-secondary mb-8 px-4"
      >
        I'm passionate about crafting high-quality software, solving real-world problems, and continuously learning new technologies specially in the field of Artificial Intelligence. My goal is to create impactful products that make a difference.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="#projects"
          className="px-8 py-4 rounded-full font-heading bg-gradient-light-primary dark:bg-gradient-primary text-white shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-semibold"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-full font-heading border-2 border-light-primary dark:border-primary text-light-primary dark:text-primary hover:bg-light-primary/10 dark:hover:bg-primary/10 transition-colors duration-300 font-semibold"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection; 