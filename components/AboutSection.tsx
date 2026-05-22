'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaFileAlt, FaBriefcase } from 'react-icons/fa';
import ResumeModal from './ResumeModal';
import { GlowingEffect } from './ui/glowing-effect';

import { ContainerScroll } from './ui/container-scroll-animation';

const AboutSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="about">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text">About Me</h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Transforming complex problems into elegant, AI-driven solutions.
            </p>
          </div>
        }
      >
        <div className="p-4 md:p-8">
          <div className="relative bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-10 border border-white/10 dark:border-white/10">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1.2}
            />
            {/* Left: Photo + badge/quote */}
            <div className="flex flex-col items-center text-center gap-4 flex-shrink-0">
              <div className="relative w-36 h-36 md:w-48 md:h-48">
                {/* Animated glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full opacity-75 blur-md animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full opacity-50"></div>

                {/* Photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 hover:scale-105 hover:rotate-2 transition-all duration-300 bg-white dark:bg-slate-800">
                  <Image
                    src="/photo.jpeg"
                    alt="Sharvari Bhondekar"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white text-white dark:text-black rounded-full font-semibold shadow-md mt-2">
                🚀 Currently exploring: Java and DSA
              </span>
              <blockquote className="italic text-slate-500 dark:text-slate-300 text-center mt-2 text-sm">“Curiosity fuels my code.”</blockquote>
            </div>
            {/* Right: Content */}
            <div className="flex-1 flex flex-col gap-3 justify-center text-left">
              <div className="flex flex-col items-start mb-2">
                <span className="text-xl font-bold text-slate-900 dark:text-white text-left">Sharvari Bhondekar <span role="img" aria-label="brain">🧠</span></span>
                <span className="text-base font-medium text-slate-700 dark:text-slate-300 mt-1">AI Engineer · Full-Stack Developer · Systems Thinker</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-700/10 text-gray-700 dark:bg-gray-700/30 dark:text-gray-200 px-3 py-1 rounded text-sm font-semibold">AI-Native Builder</span>
                <span className="bg-gray-600/10 text-gray-600 dark:bg-gray-600/30 dark:text-gray-200 px-3 py-1 rounded text-sm font-semibold">Systems Thinker</span>
                <span className="bg-gray-500/10 text-gray-500 dark:bg-gray-500/30 dark:text-gray-200 px-3 py-1 rounded text-sm font-semibold">High-Execution</span>
              </div>
              <div className="text-base text-slate-800 dark:text-slate-200 leading-relaxed space-y-3">
                <p>
                  I architect execution loops, not wrappers. My work sits at the convergence of <span className="font-semibold text-slate-900 dark:text-white">AI engineering</span>, <span className="font-semibold text-slate-900 dark:text-white">full-stack systems</span>, and <span className="font-semibold text-slate-900 dark:text-white">product architecture</span>, with a focus on AI-native platforms where intelligence is embedded into the foundation, not retrofitted.
                </p>
                <p>
                  I engineer with React, Next.js, Node.js, Express, Supabase, PostgreSQL, and GenAI APIs, building intelligent products that extend far beyond conventional CRUD. I leverage LLMs and AI copilots as native workflow layers to accelerate iteration velocity while preserving architectural clarity.
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-heading text-sm font-semibold text-light-text-primary dark:text-text-primary mb-2 uppercase tracking-widest">Open to</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/10 text-gray-700 dark:bg-gray-700/30 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">Remote Internships</span>
                  <span className="bg-gray-700/10 text-gray-700 dark:bg-gray-700/30 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">Full-Time Roles</span>
                  <span className="bg-gray-700/10 text-gray-700 dark:bg-gray-700/30 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">Async-First Teams</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-3 text-slate-700 dark:text-slate-300 text-base font-medium">
                <div className="flex items-center gap-2 text-left text-sm md:text-base"><FaMapMarkerAlt className="text-light-text-primary dark:text-text-primary" /> Mumbai, India</div>
                <div className="flex items-center gap-2 text-left text-sm md:text-base"><FaEnvelope className="text-light-text-primary dark:text-text-primary" /> sharvaribhondekar23@gmail.com</div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="mailto:sharvaribhondekar23@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-base"
                >
                  <FaBriefcase /> Hire Me
                </a>
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading border border-slate-400 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 font-semibold text-base"
                >
                  <FaFileAlt /> View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};

export default AboutSection; 