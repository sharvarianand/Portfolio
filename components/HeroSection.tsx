'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Globe from './Globe';
import { useClientTheme } from '../hooks/useClientTheme';
import SocialsFloat from './SocialsFloat';
import FloatingCode from './FloatingCode';

const HeroSection = () => {
  const { resolvedTheme, mounted } = useClientTheme();

  const isDarkMode = mounted && resolvedTheme === 'dark';

  const brainGradientStops = isDarkMode 
    ? ["#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6"]
    : ["#0284c7", "#2563eb", "#4f46e5", "#7c3aed"];

  const personGradientStops = isDarkMode
    ? ["#3b82f6", "#8b5cf6"]
    : ["#2563eb", "#7c3aed"];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-light-text-primary dark:text-text-primary block mb-2">
                  Hi, I&apos;m
                </span>
                <span className="gradient-text block">
                  Sharvari Bhondekar
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-light-primary dark:text-primary">
                AI Enthusiast
              </h2>
              <h3 className="text-lg md:text-xl text-light-text-secondary dark:text-text-secondary">
                Aspiring Software Developer | Scaling Smart Solutions
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-base md:text-lg text-light-text-secondary dark:text-text-secondary leading-relaxed max-w-xl"
            >
              I&apos;m passionate about crafting high-quality software, solving real-world problems, 
              and continuously learning new technologies especially in the field of Artificial Intelligence. 
              My goal is to create impactful products that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-light-primary dark:border-primary text-light-primary dark:text-primary hover:bg-light-primary/10 dark:hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Developer Tags */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['React', 'Next.js', 'Python', 'AI/ML', 'TypeScript', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-light-primary/10 dark:bg-primary/10 border border-light-primary/20 dark:border-primary/20 text-light-primary dark:text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Minimalist Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex flex-col justify-center items-center"
          >
            {/* Brain/Circuit Icon - Above Globe */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="relative z-20 mb-4" // Positioned above
            >
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-2 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
                
                {/* Brain/Circuit Icon */}
                <svg width="80" height="80" viewBox="0 0 80 80" className="relative z-10">
                  <g fill="none" stroke="url(#brainGradient)" strokeWidth="1.5">
                    <circle cx="40" cy="40" r="12" opacity="0.9" />
                    <circle cx="40" cy="40" r="6" fill="url(#brainGradient)" opacity="0.2" />
                    <path d="M28 40 L16 28 M52 40 L64 28 M40 28 L40 16 M28 52 L16 64 M52 52 L64 64 M40 52 L40 64" />
                    <path d="M32 32 L20 20 M48 32 L60 20 M32 48 L20 60 M48 48 L60 60" opacity="0.7" />
                    <circle cx="16" cy="28" r="2.5" fill="url(#brainGradient)" opacity="0.8" />
                    <circle cx="64" cy="28" r="2.5" fill="url(#brainGradient)" opacity="0.8" />
                    <circle cx="40" cy="16" r="2.5" fill="url(#brainGradient)" opacity="0.8" />
                    <circle cx="16" cy="64" r="2.5" fill="url(#brainGradient)" opacity="0.8" />
                    <circle cx="64" cy="64" r="2.5" fill="url(#brainGradient)" opacity="0.8" />
                    <circle cx="40" cy="64" r="2.5" fill="url(#brainGradient)" opacity="0.8" />
                  </g>
                  <defs>
                    <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={brainGradientStops[0]} />
                      <stop offset="30%" stopColor={brainGradientStops[1]} />
                      <stop offset="70%" stopColor={brainGradientStops[2]} />
                      <stop offset="100%" stopColor={brainGradientStops[3]} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            <div className="relative w-full max-w-lg aspect-square">
              {/* Theme-aware Background */}
              <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-80' : 'bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 opacity-90'}`}>
                {/* Tiny glowing particles in background */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-0.5 h-0.5 rounded-full opacity-40 ${isDarkMode ? 'bg-white' : 'bg-slate-700'}`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: isDarkMode ? [0.2, 0.8, 0.2] : [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              {/* Geodesic Dome Globe */}
              <div className="absolute inset-0 opacity-90">
                <Globe />
              </div>
              
              {/* Central Person Icon - Inside Globe */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="relative"
                >
                  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={personGradientStops[0]} />
                        <stop offset="100%" stopColor={personGradientStops[1]} />
                      </linearGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <g filter="url(#glow)" opacity={isDarkMode ? 0.8 : 0.9}>
                      {/* Person */}
                      <g stroke="url(#personGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                        {/* Head */}
                        <circle cx="75" cy="40" r="12" />
                        {/* Body */}
                        <path d="M75 52 V 90" />
                        {/* Chair */}
                        <path d="M50 110 H 100" />
                        <path d="M50 110 V 80 H 100 V 110" />
                        <path d="M75 110 V 125" />
                        <path d="M65 125 H 85" />
                      </g>
                      
                      {/* Laptop */}
                      <g fill="url(#personGradient)">
                        <rect x="85" y="75" width="40" height="25" rx="2" transform="rotate(-15 85 75)" />
                        <path d="M80 105 H 130 L 125 110 H 85 Z" />
                      </g>

                      {/* Emanating Lines */}
                      <g stroke="url(#personGradient)" strokeWidth="1.5" opacity="0.7">
                        <path d="M88 72 L95 60" />
                        <path d="M93 70 L103 55" />
                        <path d="M98 68 L111 50" />
                      </g>
                    </g>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Theme-aware Background */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-60' : 'opacity-30'}`} />
      
      {/* Starry Digital Space */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large stars */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className={`absolute rounded-full ${isDarkMode ? 'bg-white' : 'bg-slate-800'}`}
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: isDarkMode ? [0.2, 0.8, 0.2] : [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Tiny glowing particles */}
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${personGradientStops[0]}, ${personGradientStops[1]})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: isDarkMode ? [0.1, 0.6, 0.1] : [0.3, 0.8, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Subtle Floating Code */}
      <FloatingCode />
      
      <SocialsFloat />
      
      {/* Scroll Indicator */}
      <motion.a 
        href="#about" 
        aria-label="Scroll down" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-light-text-secondary dark:border-text-secondary flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-light-text-secondary dark:bg-text-secondary"
            animate={{ y: [4, 20, 4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        </div>
        <span className="mt-2 text-sm text-light-text-secondary dark:text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll Down
        </span>
      </motion.a>
    </section>
  );
};

export default HeroSection; 