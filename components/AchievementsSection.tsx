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
          className="font-heading text-4xl md:text-5xl gradient-text mb-4 text-left"
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
              className="bg-light-surface dark:bg-surface p-6 rounded-2xl border border-light-border dark:border-border hover:shadow-lg hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex flex-col items-start"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-heading text-xl font-bold text-light-text-primary dark:text-text-primary mb-2">{item.title}</h3>
              <p className="text-light-text-secondary dark:text-text-secondary text-sm mb-4 flex-grow">{item.description}</p>
              <span className="text-xs font-bold text-light-primary dark:text-primary mt-auto">{item.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 