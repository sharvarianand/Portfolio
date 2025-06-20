'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section id="about" className="py-24 flex flex-col items-center text-center gap-8">
      <motion.div
        {...fadeInUp}
        className="max-w-4xl lg:max-w-6xl mx-auto px-4"
      >
        <motion.h2
          {...fadeInUp}
          className="font-heading text-3xl md:text-4xl gradient-text mb-4"
        >
          About Me
        </motion.h2>
        
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h3 className="text-xl font-heading text-light-text-primary dark:text-text-primary">Sharvari Bhondekar</h3>
            <span className="px-3 py-1 text-sm bg-light-primary/10 dark:bg-primary/10 text-light-primary dark:text-primary rounded-full border border-light-primary/20 dark:border-primary/20">
              Aspiring Software Developer
            </span>
          </div>
          
          <p className="text-lg text-light-text-secondary dark:text-text-secondary max-w-4xl mx-auto leading-relaxed">
            I'm Sharvari, an aspiring software developer with a strong foundation in modern web technologies and a drive to build scalable, maintainable applications. I thrive on turning ideas into robust products and am always eager to learn and grow as a developer.
          </p>
          
          <p className="text-lg text-light-text-secondary dark:text-text-secondary max-w-4xl mx-auto leading-relaxed mt-4">
            My journey is fueled by curiosity, collaboration, and a commitment to excellence in software engineering. I enjoy working on challenging projects, collaborating with other developers, and continuously improving my skills to deliver high-quality solutions.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-light-surface dark:bg-surface rounded-xl p-6 border border-light-border dark:border-border">
            <h4 className="font-heading text-lg text-light-text-primary dark:text-text-primary mb-2">Name</h4>
            <p className="text-light-text-secondary dark:text-text-secondary">Sharvari Bhondekar</p>
          </div>
          <div className="bg-light-surface dark:bg-surface rounded-xl p-6 border border-light-border dark:border-border">
            <h4 className="font-heading text-lg text-light-text-primary dark:text-text-primary mb-2">Email</h4>
            <p className="text-light-text-secondary dark:text-text-secondary">sharvari@example.com</p>
          </div>
          <div className="bg-light-surface dark:bg-surface rounded-xl p-6 border border-light-border dark:border-border">
            <h4 className="font-heading text-lg text-light-text-primary dark:text-text-primary mb-2">Location</h4>
            <p className="text-light-text-secondary dark:text-text-secondary">Mumbai, India</p>
          </div>
        </motion.div>

        <motion.a
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          href="/mock_resume.pdf"
          download
          className="inline-block px-8 py-3 rounded-full font-heading bg-gradient-light-primary dark:bg-gradient-primary text-white shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-semibold"
        >
          View Resume
        </motion.a>
      </motion.div>

      <div className="w-full max-w-6xl px-4">
        <motion.h3
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-2xl font-heading text-light-text-primary dark:text-text-primary mb-8"
        >
          Technologies I work with
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light-surface dark:bg-surface rounded-xl p-6 border border-light-border dark:border-border hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-light-text-primary dark:text-text-primary font-medium">{skill}</span>
                <span className="text-light-primary dark:text-primary font-semibold">85%</span>
              </div>
              <div className="w-full h-2 bg-light-border dark:bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-light-primary dark:bg-gradient-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 