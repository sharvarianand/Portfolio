'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Globe from './Globe';
import { useTheme } from '../app/ThemeProvider';
import SocialsFloat from './SocialsFloat';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const { theme } = useTheme();
  const globeColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60">
        <Globe color={globeColor} />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center w-full">
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

        <div className="z-10 relative text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-bold mb-6">
              <span className="font-sans text-5xl md:text-6xl text-light-text-primary dark:text-text-primary block">
                Hi, I&apos;m
              </span>
              <span className="font-heading text-6xl md:text-8xl gradient-text">
                Sharvari Bhondekar
              </span>
            </h1>
          </motion.div>
        </div>

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
      </div>
      <SocialsFloat />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="text-light-text-secondary dark:text-text-secondary hover:text-light-text-primary dark:hover:text-text-primary transition-colors"
          >
            <FaArrowDown size={24} />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 