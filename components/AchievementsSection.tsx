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
          className="font-heading text-4xl md:text-5xl gradient-text mb-4 text-left font-bold"
        >
          My Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-light-text-secondary dark:text-text-secondary mb-12 max-w-3xl text-left"
        >
          A few of my proudest accomplishments and recognitions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-light-surface dark:bg-slate-800/80 p-6 rounded-2xl border border-light-border dark:border-slate-700/80 overflow-hidden hover:shadow-xl hover:border-sky-500/50 dark:hover:border-sky-500 transition-all duration-300 flex flex-col items-start"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute top-0 -left-48 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />

              <div className="text-4xl mb-4 p-3 bg-slate-700/50 border border-slate-600 rounded-xl shadow-md">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-light-text-primary dark:text-text-primary mb-2 z-10">{item.title}</h3>
              <p className="text-light-text-secondary dark:text-slate-300 text-sm mb-4 flex-grow z-10">{item.description}</p>
              <span className="text-xs font-bold text-sky-400 mt-auto z-10">{item.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 