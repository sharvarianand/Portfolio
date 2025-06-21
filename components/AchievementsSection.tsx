'use client';
import React from 'react';
import { achievements } from '../data/achievements';
import { motion } from 'framer-motion';

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
      </div>
    </section>
  );
};

export default AchievementsSection; 