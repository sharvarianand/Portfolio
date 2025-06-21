'use client';
import React from 'react';
import { achievements } from '../data/achievements';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl gradient-text mb-16 text-center font-bold"
        >
          My Achievements
        </motion.h2>

        {/* Badges Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="group relative w-72 h-72 rounded-full flex flex-col items-center justify-center p-6 text-center shadow-2xl transition-all duration-300 cursor-pointer border-4 border-slate-700 bg-slate-800 hover:border-sky-500"
            >
              {/* Inner gradient circle for depth */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-900" />
              
              {/* Glowing hover effect */}
              <div className="absolute -inset-2 rounded-full bg-sky-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content visible by default */}
              <div className="relative z-10 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-7xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {item.title}
                </h3>
                 <span className="text-sm font-bold text-sky-400 mt-2">{item.year}</span>
              </div>
              
              {/* Description revealed on hover */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-slate-200 text-sm">
                  {item.description}
                </p>
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
          className="mt-24"
        >
          <div className="relative group p-8 rounded-2xl bg-light-surface dark:bg-surface border border-light-border dark:border-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-shrink-0 text-cyan-400">
                <FaCertificate size={64} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-light-text-primary dark:text-text-primary">
                  My Collection of Certificates
                </h3>
                <p className="mt-2 text-light-text-secondary dark:text-text-secondary">
                  A curated gallery of all my certifications and official recognitions.
                </p>
              </div>
              <div className="flex-shrink-0 mt-6 md:mt-0">
                <a
                  href="/certificates"
                  className="inline-block px-10 py-4 rounded-lg font-heading bg-gradient-light-primary dark:bg-gradient-primary text-white text-lg shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-semibold"
                >
                  View All Certificates
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection; 