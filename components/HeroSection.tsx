'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center items-center text-center gap-6 pt-24 overflow-hidden">
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
          <span className="text-light-text-primary dark:text-text-primary">Hi, I'm </span>
          <span className="gradient-text">Sharvari Bhondekar</span>
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
        I'm passionate about crafting high-quality software, solving real-world problems, and continuously learning new technologies. My goal is to create impactful products that make a difference.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="/mock_resume.pdf"
          download
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

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative flex gap-6 mt-8"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-light-surface dark:bg-surface border border-light-border dark:border-border hover:bg-light-primary/10 dark:hover:bg-primary/10 hover:border-light-primary dark:hover:border-primary transition-all duration-300"
        >
          <span className="text-2xl">📱</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-light-surface dark:bg-surface border border-light-border dark:border-border hover:bg-light-primary/10 dark:hover:bg-primary/10 hover:border-light-primary dark:hover:border-primary transition-all duration-300"
        >
          <span className="text-2xl">💼</span>
        </a>
        <a
          href="mailto:sharvari@example.com"
          className="p-3 rounded-full bg-light-surface dark:bg-surface border border-light-border dark:border-border hover:bg-light-primary/10 dark:hover:bg-primary/10 hover:border-light-primary dark:hover:border-primary transition-all duration-300"
        >
          <span className="text-2xl">✉️</span>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 rounded-full border-2 border-light-primary dark:border-primary p-1"
        >
          <div className="w-1.5 h-1.5 bg-light-primary dark:bg-primary rounded-full mx-auto" />
        </motion.div>
        <p className="text-light-text-muted dark:text-text-muted text-sm mt-2">SCROLL DOWN</p>
      </motion.div>
    </section>
  );
};

export default HeroSection; 