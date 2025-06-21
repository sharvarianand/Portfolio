'use client';
import React from 'react';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl gradient-text mb-16 text-center"
        >
          My Professional Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-light-border dark:bg-border rounded-full" />
          
          {experience.map((item, index) => (
            <div key={item.title} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2" />
              <div className="w-1/2 px-4">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`relative bg-light-surface dark:bg-surface p-6 rounded-2xl border border-light-border dark:border-border shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                >
                  <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-light-primary dark:bg-primary border-4 border-light-background dark:border-background ${index % 2 === 0 ? '-left-3' : '-right-3'}`} />
                  <p className="text-sm font-semibold text-light-primary dark:text-primary mb-1">{item.date}</p>
                  <h3 className="font-heading text-xl font-bold text-light-text-primary dark:text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-light-text-secondary dark:text-text-secondary">{item.company}</p>
                  <ul className="mt-4 list-disc list-inside text-sm text-light-text-secondary dark:text-text-secondary space-y-1">
                    {item.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 