'use client';
import React from 'react';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 flex flex-col items-center text-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl gradient-text mb-4"
        >
          Education & Experience
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-light-text-secondary dark:text-text-secondary mb-12 max-w-3xl mx-auto"
        >
          My academic journey and professional development, highlighting key milestones and areas of expertise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 bg-light-surface dark:bg-surface border border-light-border dark:border-border hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300 ${
                item.type === 'badge' ? 'ring-2 ring-light-highlight/20 dark:ring-highlight/20' : ''
              }`}
            >
              {item.type === 'badge' && (
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 right-4 bg-gradient-light-highlight dark:bg-gradient-highlight text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                >
                  GATE 2026
                </motion.span>
              )}
              
              <div className="text-center">
                <h3 className="font-heading text-lg text-light-text-primary dark:text-text-primary mb-2">{item.title}</h3>
                <p className="text-light-text-secondary dark:text-text-secondary text-sm leading-relaxed">{item.description}</p>
                
                {item.type === 'bootcamp' && (
                  <div className="mt-4 pt-4 border-t border-light-border dark:border-border">
                    <span className="text-light-primary dark:text-primary text-sm font-medium">Full Stack + DSA (Java)</span>
                  </div>
                )}
                
                {item.type === 'hackathon' && (
                  <div className="mt-4 pt-4 border-t border-light-border dark:border-border">
                    <span className="text-light-secondary dark:text-secondary text-sm font-medium">Code Craft AI x Dev, Smart India Hackathon</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="/certificates"
            className="inline-block px-8 py-3 rounded-full font-heading bg-gradient-light-primary dark:bg-gradient-primary text-white shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-semibold"
          >
            View Certificates
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection; 