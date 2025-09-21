'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import ResumeModal from './ResumeModal';

const AboutSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4">
      <div className="relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-10 border border-slate-200 dark:border-slate-700">
        {/* Gradient Halo */}
        <div className="absolute left-10 top-10 w-56 h-56 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-20 blur-3xl -z-10" />
        {/* Left: Photo + badge/quote */}
        <div className="flex flex-col items-center text-center gap-4 flex-shrink-0">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-4 border-sky-400 hover:scale-105 hover:rotate-2 transition-transform duration-300">
            <Image src="/photo.jpg" alt="Sharvari Bhondekar" width={400} height={400} className="object-cover w-full h-full" />
          </div>
          <span className="px-3 py-1 text-xs bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-md mt-2">
            🚀 Currently exploring: Java and DSA
            </span>
          <blockquote className="italic text-slate-500 dark:text-slate-300 text-center mt-2 text-sm">“Curiosity fuels my code.”</blockquote>
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text">About Me</h2>
          <div className="flex flex-col items-start mb-2">
            <span className="text-xl font-bold text-slate-900 dark:text-white">Sharvari Bhondekar <span role="img" aria-label="brain">🧠</span></span>
            <span className="text-base font-medium text-slate-700 dark:text-slate-300 mt-1">Software Engineer | AI Enthusiast</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-sky-700/10 text-sky-700 dark:bg-sky-700/30 dark:text-sky-200 px-3 py-1 rounded text-sm font-semibold">Curious</span>
            <span className="bg-indigo-700/10 text-indigo-700 dark:bg-indigo-700/30 dark:text-indigo-200 px-3 py-1 rounded text-sm font-semibold">Collaborative</span>
            <span className="bg-purple-700/10 text-purple-700 dark:bg-purple-700/30 dark:text-purple-200 px-3 py-1 rounded text-sm font-semibold">Impact-Driven</span>
          </div>
          <div className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed space-y-3 font-medium">
            <p>
              As an engineering student specializing in Artificial Intelligence and Data Science, I&apos;m driven by a passion for leveraging technology to solve complex problems.
          </p>
            <p>
              I thrive on building impactful applications that solve real-world problems and staying up-to-date with the latest advancements in AI and tech. My goal is to contribute to cutting-edge solutions that shape a better future.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-heading text-lg font-semibold text-sky-600 dark:text-sky-400 mb-2">Core Strengths</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-700/10 text-green-700 dark:bg-green-700/30 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">Communication</span>
              <span className="bg-yellow-700/10 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">Leadership</span>
              <span className="bg-blue-700/10 text-blue-700 dark:bg-blue-700/30 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">Teamwork</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-3 text-slate-700 dark:text-slate-300 text-base font-medium">
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-sky-500 dark:text-sky-400" /> Mumbai, India</div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-sky-500 dark:text-sky-400" /> sharvaribhondekar23@gmail.com</div>
          </div>
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-semibold self-start text-lg"
          >
            <FaFileAlt /> View Resume
          </button>
        </div>
      </div>
      {/* Tech Stack Section */}
      <div id="skills" className="w-full max-w-6xl px-4 mt-24">
        <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-8 text-left">
          <span className="block bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">Tech I Use</span>
          <span className="block bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">to Build Scalable Solutions</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map(({ name, icon: Icon }, index) => {
            // Define brand colors for each skill
            const brandColors: Record<string, string> = {
              HTML: '#E34F26',
              CSS: '#1572B6',
              JavaScript: '#F7DF1E',
              TypeScript: '#3178C6',
              React: '#61DAFB',
              'Next.js': '#000000',
              'Node.js': '#339933',
              'Express.js': '#000000',
              Tailwind: '#06B6D4',
              MongoDB: '#47A248',
              MySQL: '#4479A1',
              Python: '#3776AB',
              Java: '#007396',
              Git: '#F05032',
            };
            const color = brandColors[name] || 'currentColor';
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/60 rounded-xl p-6 border border-slate-200 dark:border-border shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Icon className="mb-3" size={48} color={color} />
                <span className="font-heading text-lg text-slate-800 dark:text-slate-100 mt-1">{name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  );
};

export default AboutSection; 