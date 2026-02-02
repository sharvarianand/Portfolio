'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ContainerScroll } from './ui/container-scroll-animation';
import { experience } from '@/data/experience';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { GlowingEffect } from './ui/glowing-effect';

const ExperienceSection = () => {
  return (
    <section id="experience">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text">
              Professional Experience
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              My journey through internships, bootcamps, and research presentations.
            </p>
          </div>
        }
      >
        <div className="p-4 md:p-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 h-[calc(100%-2rem)] w-0.5 bg-border" />

          {experience.map((item, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-4 border-background flex items-center justify-center z-10">
                {item.type === 'research' ? (
                  <AcademicCapIcon className="h-4 w-4 text-text-primary" />
                ) : (
                  <BriefcaseIcon className="h-4 w-4 text-text-primary" />
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
                    className="relative bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg"
                  >
                    <GlowingEffect spread={35} glow={true} disabled={false} proximity={56} inactiveZone={0.01} borderWidth={1.5} />
                    <p className="text-sm font-semibold text-text-secondary mb-1">{item.date}</p>
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary font-semibold">{item.institution}</p>
                    {item.description && (
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.description}</p>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
};

export default ExperienceSection;
