'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { GlowingEffect } from './ui/glowing-effect';
import { ContainerScroll } from './ui/container-scroll-animation';

const SkillsSection = () => {
    return (
        <section id="skills">
            <ContainerScroll
                titleComponent={
                    <div className="flex flex-col gap-2 mb-10">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text">
                            Technical Skills
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                            Technologies I use to build scalable solutions and innovative applications.
                        </p>
                    </div>
                }
            >
                <div className="p-4 md:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {skills.map(({ name, icon: Icon }, index) => {
                            const brandColors: Record<string, string> = {
                                HTML: '#E34F26', CSS: '#1572B6', JavaScript: '#F7DF1E', TypeScript: '#3178C6',
                                React: '#61DAFB', 'Next.js': '#000000', 'Node.js': '#339933', 'Express.js': '#000000',
                                Tailwind: '#06B6D4', MongoDB: '#47A248', MySQL: '#4479A1', Python: '#3776AB',
                                Java: '#007396', Git: '#F05032',
                            };
                            const color = brandColors[name] || 'currentColor';
                            return (
                                <motion.div
                                    key={name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="relative flex flex-col items-center justify-center bg-black/40 dark:bg-black/60 rounded-xl p-6 border border-white/5 dark:border-white/10 shadow-md hover:scale-105 transition-transform duration-300"
                                >
                                    <GlowingEffect spread={30} glow={true} disabled={false} proximity={48} inactiveZone={0.01} borderWidth={1.5} />
                                    <Icon className="mb-3" size={48} color={color} />
                                    <span className="font-heading text-lg text-slate-800 dark:text-slate-100 mt-1">{name}</span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Reference to Resume */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-slate-500 dark:text-slate-400 text-lg mb-4">
                            Want to see more details about my technical expertise?
                        </p>
                        <a
                            href="/Sharvari_Bhondekar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View Full Resume
                        </a>
                    </motion.div>
                </div>
            </ContainerScroll>
        </section>
    );
};

export default SkillsSection;
