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

  // Ensure consistent colors between server and client renders
  const brainGradientStops = isDarkMode 
    ? ["#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6"]
    : ["#0284c7", "#2563eb", "#4f46e5", "#7c3aed"];

  const personGradientStops = isDarkMode
    ? ["#3b82f6", "#8b5cf6"]
    : ["#2563eb", "#7c3aed"];

  // Prevent hydration issues with random values
  const staticParticlePositions = mounted ? null : Array.from({ length: 30 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 23) % 100}%`
  }));

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
            {/* Quantum Neural Icon - Above Globe */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 1.2, type: "spring" }}
              className="relative z-20 mb-4"
            >
              <div className="relative">
                {/* Multi-layer holographic glow */}
                <motion.div
                  className="absolute -inset-4 w-32 h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -inset-2 w-28 h-28 bg-gradient-to-l from-purple-500 via-pink-500 to-cyan-400 rounded-full blur-xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Quantum Neural Network Icon */}
                <svg width="100" height="100" viewBox="0 0 100 100" className="relative z-10">
                  <defs>
                    <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={brainGradientStops[0]} />
                      <stop offset="33%" stopColor={brainGradientStops[1]} />
                      <stop offset="66%" stopColor={brainGradientStops[2]} />
                      <stop offset="100%" stopColor={brainGradientStops[3]} />
                    </linearGradient>
                    <filter id="neuralGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <radialGradient id="coreGlow">
                      <stop offset="0%" stopColor={brainGradientStops[1]} stopOpacity="0.8"/>
                      <stop offset="100%" stopColor={brainGradientStops[3]} stopOpacity="0.2"/>
                    </radialGradient>
                  </defs>
                  
                  <g filter="url(#neuralGlow)">
                    {/* Outer hexagonal ring */}
                    <path
                      d="M50,10 L75,25 L75,55 L50,70 L25,55 L25,25 Z"
                      stroke="url(#neuralGradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.7"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 40"
                        to="360 50 40"
                        dur="20s"
                        repeatCount="indefinite"
                      />
                    </path>
                    
                    {/* Middle diamond */}
                    <path
                      d="M50,20 L65,40 L50,60 L35,40 Z"
                      stroke="url(#neuralGradient)"
                      strokeWidth="2"
                      fill="url(#coreGlow)"
                      opacity="0.5"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 50 40"
                        to="0 50 40"
                        dur="15s"
                        repeatCount="indefinite"
                      />
                    </path>
                    
                    {/* Central core */}
                    <circle cx="50" cy="40" r="12" fill="url(#neuralGradient)" opacity="0.4" />
                    <circle cx="50" cy="40" r="8" fill="url(#coreGradient)" />
                    
                    {/* Neural nodes - Outer layer */}
                    <circle cx="50" cy="10" r="3" fill="url(#neuralGradient)" opacity="0.9">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="75" cy="25" r="3" fill="url(#neuralGradient)" opacity="0.9">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.3s" />
                    </circle>
                    <circle cx="75" cy="55" r="3" fill="url(#neuralGradient)" opacity="0.9">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.6s" />
                    </circle>
                    <circle cx="50" cy="70" r="3" fill="url(#neuralGradient)" opacity="0.9">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.9s" />
                    </circle>
                    <circle cx="25" cy="55" r="3" fill="url(#neuralGradient)" opacity="0.9">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1.2s" />
                    </circle>
                    <circle cx="25" cy="25" r="3" fill="url(#neuralGradient)" opacity="0.9">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1.5s" />
                    </circle>
                    
                    {/* Neural connections with animation */}
                    <line x1="50" y1="10" x2="50" y2="40" stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="75" y1="25" x2="50" y2="40" stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="0.5s" />
                    </line>
                    <line x1="75" y1="55" x2="50" y2="40" stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="1s" />
                    </line>
                    <line x1="50" y1="70" x2="50" y2="40" stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="1.5s" />
                    </line>
                    <line x1="25" y1="55" x2="50" y2="40" stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="2s" />
                    </line>
                    <line x1="25" y1="25" x2="50" y2="40" stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="2.5s" />
                    </line>
                    
                    {/* Data particles flowing */}
                    <circle r="1.5" fill={brainGradientStops[0]}>
                      <animateMotion dur="2s" repeatCount="indefinite" path="M50,10 L50,40" />
                    </circle>
                    <circle r="1.5" fill={brainGradientStops[2]}>
                      <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M75,25 L50,40" />
                    </circle>
                    <circle r="1.5" fill={brainGradientStops[1]}>
                      <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M75,55 L50,40" />
                    </circle>
                    
                    {/* AI Text in center */}
                    <text x="50" y="43" textAnchor="middle" fontSize="8" fill={isDarkMode ? brainGradientStops[0] : "#1e293b"} fontWeight="bold" opacity="1" stroke={isDarkMode ? "none" : "#fff"} strokeWidth={isDarkMode ? "0" : "0.5"}>AI</text>
                  </g>
                  
                  {/* Orbiting data points */}
                  <circle r="2" fill={brainGradientStops[0]} opacity="0.8">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 40"
                      to="360 50 40"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2" fill={brainGradientStops[3]} opacity="0.8">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="180 50 40"
                      to="540 50 40"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" begin="0.75s" />
                  </circle>
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
                      left: mounted ? `${Math.random() * 100}%` : staticParticlePositions?.[i]?.left || '50%',
                      top: mounted ? `${Math.random() * 100}%` : staticParticlePositions?.[i]?.top || '50%',
                    }}
                    animate={{
                      opacity: isDarkMode ? [0.2, 0.8, 0.2] : [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: mounted ? Math.random() * 3 + 2 : 3,
                      repeat: Infinity,
                      delay: mounted ? Math.random() * 2 : 0,
                    }}
                  />
                ))}
              </div>
              
              {/* Geodesic Dome Globe */}
              <div className="absolute inset-0 opacity-90">
                {mounted && <Globe />}
              </div>
              
              {/* Futuristic Developer with Holographic Setup - Inside Globe */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="relative"
                >
                  <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="futuristicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={personGradientStops[0]} />
                        <stop offset="100%" stopColor={personGradientStops[1]} />
                      </linearGradient>
                      <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="hologramGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <g filter="url(#hologramGlow)" opacity={isDarkMode ? 0.9 : 0.95}>
                      {/* Ergonomic futuristic chair */}
                      <g stroke="url(#futuristicGradient)" strokeWidth="2.5" fill="url(#futuristicGradient)" fillOpacity="0.4">
                        <path d="M55 115 Q 50 110 50 100 L50 75 Q50 70 55 68" strokeLinecap="round" />
                        <path d="M115 115 Q 120 110 120 100 L120 75 Q120 70 115 68" strokeLinecap="round" />
                        <ellipse cx="85" cy="115" rx="30" ry="5" fill="url(#futuristicGradient)" opacity="0.6" />
                        <path d="M70 130 L70 145 M100 130 L100 145" strokeLinecap="round" fill="none" />
                        <path d="M65 145 L75 145 M95 145 L105 145" strokeWidth="3" strokeLinecap="round" fill="none" />
                      </g>
                      
                      {/* Person with VR/AR headset */}
                      <g stroke="url(#futuristicGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        {/* Head with futuristic headset */}
                        <circle cx="85" cy="45" r="14" fill="url(#futuristicGradient)" fillOpacity="0.5" stroke="url(#futuristicGradient)" strokeWidth="2" />
                        {/* VR Headset band */}
                        <path d="M71 45 Q 71 38 85 38 Q 99 38 99 45" strokeWidth="4" fill="url(#futuristicGradient)" fillOpacity="0.3" />
                        <rect x="75" y="42" width="20" height="8" rx="2" fill="url(#hologramGradient)" opacity="0.8" stroke="url(#futuristicGradient)" strokeWidth="1.5" />
                        {/* Headset details */}
                        <circle cx="80" cy="46" r="2" fill={personGradientStops[0]} opacity="1">
                          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="90" cy="46" r="2" fill={personGradientStops[0]} opacity="1">
                          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
                        </circle>
                        
                        {/* Body */}
                        <path d="M85 59 L85 95" strokeWidth="4" stroke="url(#futuristicGradient)" fill="none" />
                        
                        {/* Arms - coding position */}
                        <path d="M85 70 L65 75 L60 90" strokeWidth="3.5" fill="none" />
                        <path d="M85 70 L105 75 L110 90" strokeWidth="3.5" fill="none" />
                        
                        {/* Hands on holographic keyboard */}
                        <circle cx="60" cy="90" r="4" fill="url(#futuristicGradient)" opacity="0.9" />
                        <circle cx="110" cy="90" r="4" fill="url(#futuristicGradient)" opacity="0.9" />
                        
                        {/* Legs */}
                        <path d="M85 95 L75 115" strokeWidth="3.5" fill="none" />
                        <path d="M85 95 L95 115" strokeWidth="3.5" fill="none" />
                      </g>
                      
                      {/* Holographic floating screens */}
                      <g opacity="0.9">
                        {/* Left holographic screen */}
                        <g transform="rotate(-25 45 65)">
                          <rect x="30" y="55" width="30" height="22" rx="1" stroke="url(#hologramGradient)" strokeWidth="2" fill="url(#hologramGradient)" fillOpacity="0.3" />
                          <line x1="33" y1="60" x2="50" y2="60" stroke="url(#hologramGradient)" strokeWidth="1.5" opacity="0.8">
                            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
                          </line>
                          <line x1="33" y1="64" x2="55" y2="64" stroke="url(#hologramGradient)" strokeWidth="1.5" opacity="0.8">
                            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" begin="0.3s" />
                          </line>
                          <line x1="33" y1="68" x2="48" y2="68" stroke="url(#hologramGradient)" strokeWidth="1.5" opacity="0.8">
                            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" begin="0.6s" />
                          </line>
                          <circle cx="35" cy="72" r="1.5" fill="url(#hologramGradient)">
                            <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
                          </circle>
                        </g>
                        
                        {/* Center main holographic display */}
                        <rect x="65" y="48" width="40" height="30" rx="2" stroke="url(#hologramGradient)" strokeWidth="2.5" fill="url(#hologramGradient)" fillOpacity="0.35" />
                        <g opacity="0.9">
                          <text x="70" y="58" fontSize="4" fill="url(#hologramGradient)" fontWeight="bold">&lt;code/&gt;</text>
                          <line x1="68" y1="62" x2="88" y2="62" stroke="url(#hologramGradient)" strokeWidth="2">
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
                          </line>
                          <line x1="68" y1="66" x2="98" y2="66" stroke="url(#hologramGradient)" strokeWidth="2">
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
                          </line>
                          <line x1="68" y1="70" x2="92" y2="70" stroke="url(#hologramGradient)" strokeWidth="2">
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
                          </line>
                        </g>
                        
                        {/* Right holographic screen */}
                        <g transform="rotate(25 125 65)">
                          <rect x="110" y="55" width="30" height="22" rx="1" stroke="url(#hologramGradient)" strokeWidth="2" fill="url(#hologramGradient)" fillOpacity="0.3" />
                          {/* Data visualization */}
                          <rect x="113" y="60" width="3" height="12" fill="url(#hologramGradient)" opacity="0.7">
                            <animate attributeName="height" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
                          </rect>
                          <rect x="118" y="63" width="3" height="9" fill="url(#hologramGradient)" opacity="0.7">
                            <animate attributeName="height" values="6;9;6" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
                          </rect>
                          <rect x="123" y="58" width="3" height="14" fill="url(#hologramGradient)" opacity="0.7">
                            <animate attributeName="height" values="10;14;10" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
                          </rect>
                          <rect x="128" y="61" width="3" height="11" fill="url(#hologramGradient)" opacity="0.7">
                            <animate attributeName="height" values="7;11;7" dur="1.5s" repeatCount="indefinite" begin="0.9s" />
                          </rect>
                        </g>
                      </g>
                      
                      {/* Holographic keyboard with glow */}
                      <g>
                        <ellipse cx="85" cy="95" rx="28" ry="6" stroke="url(#hologramGradient)" strokeWidth="2" fill="url(#hologramGradient)" fillOpacity="0.4" />
                        <g opacity="0.8">
                          {/* Key rows */}
                          <rect x="63" y="92" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="69" y="92" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="75" y="92" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="81" y="92" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="87" y="92" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="93" y="92" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="99" y="92" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          
                          <rect x="66" y="96" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="72" y="96" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="78" y="96" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="84" y="96" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="90" y="96" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                          <rect x="96" y="96" width="4" height="3" rx="0.5" fill="url(#hologramGradient)" opacity="0.9" />
                        </g>
                      </g>
                      
                      {/* Floating data particles and code snippets */}
                      <g opacity="0.7">
                        {/* Neural network connections */}
                        <circle cx="35" cy="40" r="2" fill="url(#hologramGradient)">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="42" cy="48" r="2" fill="url(#hologramGradient)">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.4s" />
                        </circle>
                        <circle cx="38" cy="52" r="2" fill="url(#hologramGradient)">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.8s" />
                        </circle>
                        <line x1="35" y1="40" x2="42" y2="48" stroke="url(#hologramGradient)" strokeWidth="0.5" opacity="0.4" />
                        <line x1="42" y1="48" x2="38" y2="52" stroke="url(#hologramGradient)" strokeWidth="0.5" opacity="0.4" />
                        <line x1="38" y1="52" x2="35" y2="40" stroke="url(#hologramGradient)" strokeWidth="0.5" opacity="0.4" />
                        
                        {/* Floating code symbols */}
                        <text x="125" y="38" fontSize="6" fill="url(#hologramGradient)" opacity="0.6">
                          <animate attributeName="y" values="38;33;38" dur="3s" repeatCount="indefinite" />
                          {'{ }'}
                        </text>
                        <text x="130" y="48" fontSize="5" fill="url(#hologramGradient)" opacity="0.6">
                          <animate attributeName="y" values="48;43;48" dur="3s" repeatCount="indefinite" begin="0.5s" />
                          01
                        </text>
                        <text x="133" y="55" fontSize="5" fill="url(#hologramGradient)" opacity="0.6">
                          <animate attributeName="y" values="55;50;55" dur="3s" repeatCount="indefinite" begin="1s" />
                          AI
                        </text>
                      </g>
                      
                      {/* Energy/data flow lines */}
                      <g opacity="0.4">
                        <path
                          d="M45 85 Q 50 80 55 85"
                          stroke="url(#hologramGradient)"
                          strokeWidth="1"
                          fill="none"
                        >
                          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
                        </path>
                        <path
                          d="M115 85 Q 120 80 125 85"
                          stroke="url(#hologramGradient)"
                          strokeWidth="1"
                          fill="none"
                        >
                          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        </path>
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
        {Array.from({ length: 40 }).map((_, i) => {
          // Use deterministic values during SSR
          const size = mounted ? Math.random() * 2 + 1 : ((i % 3) + 1);
          const left = mounted ? Math.random() * 100 : (i * 7) % 100;
          const top = mounted ? Math.random() * 100 : (i * 11) % 100;
          const duration = mounted ? Math.random() * 4 + 3 : 5;
          const delay = mounted ? Math.random() * 3 : 0;
          
          return (
            <motion.div
              key={`star-${i}`}
              className={`absolute rounded-full ${isDarkMode ? 'bg-white' : 'bg-slate-800'}`}
              style={{
                width: size + 'px',
                height: size + 'px',
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                opacity: isDarkMode ? [0.2, 0.8, 0.2] : [0.4, 1, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
        
        {/* Tiny glowing particles */}
        {Array.from({ length: 60 }).map((_, i) => {
          // Use deterministic values during SSR
          const left = mounted ? Math.random() * 100 : (i * 13) % 100;
          const top = mounted ? Math.random() * 100 : (i * 17) % 100;
          const duration = mounted ? Math.random() * 6 + 4 : 6;
          const delay = mounted ? Math.random() * 4 : 0;
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(45deg, ${personGradientStops[0]}, ${personGradientStops[1]})`,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                opacity: isDarkMode ? [0.1, 0.6, 0.1] : [0.3, 0.8, 0.3],
                y: [0, -20, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
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