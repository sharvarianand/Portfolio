'use client';
import React from 'react';
import { education } from '../data/education';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-light-background dark:bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl gradient-text mb-12 text-center"
        >
          My Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-light-surface dark:bg-surface p-6 rounded-2xl border border-light-border dark:border-border hover:shadow-xl hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
            >
              <div className="bg-light-primary/10 dark:bg-primary/10 p-3 rounded-full">
                <AcademicCapIcon className="h-8 w-8 text-light-primary dark:text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-light-text-primary dark:text-text-primary">{item.degree}</h3>
                <p className="text-light-text-secondary dark:text-text-secondary font-semibold">{item.institution}</p>
                <p className="text-sm text-light-text-secondary dark:text-text-secondary mt-1">{item.date}</p>
                <p className="text-sm text-light-text-secondary dark:text-text-secondary mt-2">GPA: {item.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 