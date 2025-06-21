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
          <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-light-border dark:bg-border" />
          
          {education.map((item, index) => (
            <div key={index} className="relative mb-12">
              {/* Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-light-surface dark:bg-surface border-4 border-light-background dark:border-background flex items-center justify-center">
                {item.type === 'degree' ? (
                  <AcademicCapIcon className="h-4 w-4 text-light-primary dark:text-primary" />
                ) : (
                  <BriefcaseIcon className="h-4 w-4 text-light-primary dark:text-primary" />
                )}
              </div>
              
              {/* Content */}
              <div className={`w-full flex ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-light-surface dark:bg-surface p-6 rounded-2xl border border-light-border dark:border-border shadow-lg"
                  >
                    <p className="text-sm font-semibold text-light-primary dark:text-primary mb-1">{item.date}</p>
                    <h3 className="font-heading text-xl font-bold text-light-text-primary dark:text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-light-text-secondary dark:text-text-secondary font-semibold">{item.institution}</p>
                    {item.gpa && item.gpa !== 'N/A' && (
                      <p className="text-sm text-light-text-secondary dark:text-text-secondary mt-2">Grade: {item.gpa}</p>
                    )}
                     {item.description && (
                      <p className="text-sm text-light-text-secondary dark:text-text-secondary mt-2">{item.description}</p>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;