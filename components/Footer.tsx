'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-light-surface dark:bg-surface border-t border-light-border dark:border-border p-8 text-center text-light-text-secondary dark:text-text-secondary">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Sharvari Bhondekar. All rights reserved.</p>
          <p className="text-xs mt-1">Built with Next.js, React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 