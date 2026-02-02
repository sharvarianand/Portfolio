'use client';
import React from 'react';
import { achievements } from '../data/achievements';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { GlowingEffect } from './ui/glowing-effect';

import { ContainerScroll } from './ui/container-scroll-animation';

const AchievementsSection = () => {
  return (
    <section id="achievements">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text">
              Key Achievements
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Milestones that define my professional and academic growth.
            </p>
          </div>
        }
      >
        <div className="p-4 md:p-8">
          {/* Badges Container */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mb-20">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                className="group relative w-64 h-64 rounded-full flex flex-col items-center justify-center p-6 text-center shadow-2xl transition-all duration-300 cursor-pointer border-4 border-white/10 dark:border-white/10 bg-black/40 dark:bg-black/60 backdrop-blur-md hover:border-white/50"
              >
                <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={3} />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent dark:from-slate-800/20 dark:to-transparent" />
                <div className="absolute -inset-2 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-sm font-bold text-gray-400 mt-2">{item.year}</span>
                </div>
                <div className="absolute inset-0 z-20 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-slate-200 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative group p-8 rounded-2xl bg-black/40 dark:bg-black/60 backdrop-blur-xl border border-white/5 dark:border-white/10 overflow-hidden shadow-xl">
              <GlowingEffect spread={45} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-shrink-0 text-white dark:text-gray-300">
                  <FaCertificate size={64} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold text-light-text-primary dark:text-text-primary">
                    Collection of Certificates
                  </h3>
                  <p className="mt-2 text-light-text-secondary dark:text-text-secondary">
                    Gallery of my certifications and official recognitions.
                  </p>
                </div>
                <div className="flex-shrink-0 mt-6 md:mt-0">
                  <a
                    href="/certificates"
                    className="inline-block px-8 py-3 rounded-lg font-heading bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black text-lg shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default AchievementsSection; 