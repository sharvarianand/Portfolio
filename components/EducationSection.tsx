'use client';
import React from 'react';
import { education } from '../data/education';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl gradient-text mb-16 text-center font-bold"
        >
          Education & Activities
        </motion.h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-4 -translate-x-1/2 h-[calc(100%-2rem)] w-1 bg-light-border dark:bg-border rounded-full" />
          
          {education.map((item, index) => (
            <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'text-left'}`}>
              <div className="w-1/2" />
              <div className="w-1/2 px-8">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-light-surface dark:bg-surface border-4 border-light-background dark:border-background flex items-center justify-center ${index % 2 === 0 ? '-right-12' : '-left-12'}`}>
                    {item.type === 'degree' ? (
                      <AcademicCapIcon className="h-5 w-5 text-light-primary dark:text-primary" />
                    ) : (
                      <BriefcaseIcon className="h-5 w-5 text-light-primary dark:text-primary" />
                    )}
                  </div>
                  <div className="bg-light-surface dark:bg-surface p-6 rounded-2xl border border-light-border dark:border-border shadow-lg">
                    <p className="text-sm font-semibold text-light-primary dark:text-primary mb-1">{item.date}</p>
                    <h3 className="font-heading text-xl font-bold text-light-text-primary dark:text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-light-text-secondary dark:text-text-secondary font-semibold">{item.institution}</p>
                    {item.gpa && item.gpa !== 'N/A' && (
                      <p className="text-sm text-light-text-secondary dark:text-text-secondary mt-2">Grade: {item.gpa}</p>
                    )}
                     {item.description && (
                      <p className="text-sm text-light-text-secondary dark:text-text-secondary mt-2">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 