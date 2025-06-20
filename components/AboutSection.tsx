'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const techBadges = [
  'React', 'Python', 'FastAPI', 'Next.js', 'Tailwind', 'AI/ML'
];

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-4">
      <div className="relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-10 border border-slate-200 dark:border-slate-700">
        {/* Gradient Halo */}
        <div className="absolute left-10 top-10 w-56 h-56 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-20 blur-3xl -z-10" />
        {/* Left: Photo + badge/quote */}
        <div className="flex flex-col items-center text-center gap-4 flex-shrink-0">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-sky-400 hover:scale-105 hover:rotate-2 transition-transform duration-300">
            <Image src="/photo.jpg" alt="Sharvari Bhondekar" width={400} height={400} className="object-cover w-full h-full" />
          </div>
          <span className="px-3 py-1 text-xs bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-md mt-2">
            🚀 Currently exploring: Java and DSA
          </span>
          <blockquote className="italic text-slate-500 dark:text-slate-300 text-center mt-2 text-sm">“Curiosity fuels my code.”</blockquote>
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text">About Me</h2>
          <div className="flex flex-col items-start mb-2">
            <span className="text-xl font-bold text-slate-900 dark:text-white">Sharvari Bhondekar🧠</span>
            <span className="text-base font-medium text-slate-700 dark:text-slate-300 mt-0.5">Software Engineer | AI Enthusiast</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-sky-700/10 text-sky-700 dark:bg-sky-700/30 dark:text-sky-200 px-2 py-1 rounded text-xs font-semibold">Curious</span>
            <span className="bg-indigo-700/10 text-indigo-700 dark:bg-indigo-700/30 dark:text-indigo-200 px-2 py-1 rounded text-xs font-semibold">Collaborative</span>
            <span className="bg-purple-700/10 text-purple-700 dark:bg-purple-700/30 dark:text-purple-200 px-2 py-1 rounded text-xs font-semibold">Impact-Driven</span>
          </div>
          <div className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed space-y-4 font-medium">
            <p>
              I'm a developer passionate about crafting high-quality, scalable software solutions.
            </p>
            <p>
              I thrive on building impactful applications that solve real-world problems and love exploring the latest in AI and tech.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 text-slate-700 dark:text-slate-300 text-base font-medium">
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-sky-500 dark:text-sky-400" /> Mumbai, India</div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-sky-500 dark:text-sky-400" /> sharvaribhondekar23@gmail.com</div>
          </div>
          <a
            href="/mock_resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-semibold self-start text-lg"
          >
            <FaFileAlt /> View Resume
          </a>
        </div>
      </div>
      {/* Tech Stack Section */}
      <div className="w-full max-w-6xl px-4 mt-12">
        <h3 className="text-2xl font-heading text-light-text-primary dark:text-text-primary mb-8">Technologies I work with</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light-surface dark:bg-surface rounded-xl p-6 border border-light-border dark:border-border hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-light-text-primary dark:text-text-primary font-medium text-lg">{skill}</span>
                <span className="text-light-primary dark:text-primary font-semibold">85%</span>
              </div>
              <div className="w-full h-2 bg-light-border dark:bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-light-primary dark:bg-gradient-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 