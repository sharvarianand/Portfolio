'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-light-surface dark:bg-surface border-t border-light-border dark:border-border p-8 text-light-text-secondary dark:text-text-secondary">
      <div className="max-w-6xl mx-auto flex justify-center sm:justify-start text-center sm:text-left">
        <div>
          <h3 className="font-heading text-2xl font-bold gradient-text mb-1">Sharvari Bhondekar</h3>
          <p className="text-sm">&copy; {new Date().getFullYear()} Sharvari Bhondekar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 