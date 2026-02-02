'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Globe from './Globe';
import { useClientTheme } from '../hooks/useClientTheme';
import SocialsFloat from './SocialsFloat';
import FloatingCode from './FloatingCode';
import NeuralBackground from './ui/flow-field-background';
import { FaFileAlt, FaCode } from 'react-icons/fa';
import ResumeModal from './ResumeModal';
import { GlowingEffect } from './ui/glowing-effect';

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Software Engineer",
    "AI & Data Science Enthusiast",
    "Backend-Focused Problem Solver",
    "Cinematic Web Experiences"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const { resolvedTheme, mounted } = useClientTheme();

  const isDarkMode = mounted && resolvedTheme === 'dark';

  // Ensure consistent colors between server and client renders
  const brainGradientStops = isDarkMode
    ? ["#ffffff", "#e5e5e5", "#cccccc", "#b3b3b3"]
    : ["#000000", "#1a1a1a", "#333333", "#4d4d4d"];

  const personGradientStops = isDarkMode
    ? ["#ffffff", "#e5e5e5"]
    : ["#000000", "#1a1a1a"];

  // Prevent hydration issues with random values
  const staticParticlePositions = mounted ? null : Array.from({ length: 30 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 23) % 100}%`
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 2. Technical Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center relative z-10">
          {/* Name */}
          <div className="relative mb-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight flex flex-col md:flex-row items-center gap-2 md:gap-x-6">
              <motion.span
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-text"
              >
                Sharvari
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-text"
              >
                Bhondekar
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 h-[40px] md:h-[48px] flex items-center justify-center relative w-full"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white absolute whitespace-nowrap"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 max-w-2xl"
          >
            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed font-medium">
              Building intelligent systems, scalable backends,<br className="hidden md:block" /> and cinematic web experiences.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black shadow-lg hover:scale-105 transition-all duration-300 font-bold text-xl border border-white/10 group"
            >
              <FaCode className="text-2xl group-hover:rotate-12 transition-transform" /> View Projects
            </a>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading bg-transparent border-2 border-zinc-700 text-white hover:bg-zinc-800 transition-all duration-300 font-bold text-xl hover:scale-105"
            >
              <FaFileAlt className="text-2xl" /> Resume
            </button>
          </motion.div>
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Subtle Floating Code Decorations */}
      <div className="opacity-30 dark:opacity-20 pointer-events-none">
        <FloatingCode />
      </div>

      <SocialsFloat />

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-zinc-400"
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.a>
    </section>
  );
};

export default HeroSection; 