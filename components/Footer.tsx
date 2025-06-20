'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="w-full py-8 text-center bg-light-surface/80 dark:bg-surface/80 border-t border-light-border dark:border-border mt-12">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="text-light-text-secondary dark:text-text-secondary">
          <span>&copy; {new Date().getFullYear()} Sharvari Bhondekar. All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/username/sharvari-portfolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-light-text-secondary dark:text-text-secondary hover:text-light-primary dark:hover:text-primary transition-colors duration-300"
          >
            GitHub Repo
          </a>
          <a 
            href="mailto:sharvari@example.com" 
            className="text-light-text-secondary dark:text-text-secondary hover:text-light-primary dark:hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-light-text-muted dark:text-text-muted text-sm"
      >
        Built with Next.js, React, TypeScript & Tailwind CSS
      </motion.div>
    </div>
  </footer>
);

export default Footer; 