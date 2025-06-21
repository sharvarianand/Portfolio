'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl gradient-text mb-8 font-bold"
        >
          My Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-light-text-secondary dark:text-text-secondary"
        >
          Coming soon...
        </motion.p>
        </div>
    </section>
  );
};

export default ExperienceSection; 