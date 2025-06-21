'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../app/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'education', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    if (pathname !== '/') {
      // If we're not on the main page, navigate to main page first
      router.push(`/#${section}`);
    } else {
      // If we're on the main page, scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'education', label: 'Education' },
    { href: 'experience', label: 'Experience' },
    { href: 'achievements', label: 'Achievements' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl px-1 py-1 flex items-center gap-1 backdrop-blur-md border transition-all duration-300 ${
        isScrolled 
          ? 'bg-light-surface/80 dark:bg-surface/80 border-light-border dark:border-border shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      {navItems.map(({ href, label }) => (
        <button
          key={href}
          onClick={() => handleNavigation(href)}
          className={`relative px-4 py-2 rounded-xl font-heading text-sm transition-all duration-300 ${
            activeSection === href
              ? 'text-light-primary dark:text-primary'
              : 'text-light-text-secondary dark:text-text-secondary hover:text-light-text-primary dark:hover:text-text-primary'
          }`}
        >
          {activeSection === href && (
            <motion.span
              layoutId="activeSection"
              className="absolute inset-0 rounded-xl bg-light-primary/10 dark:bg-primary/10"
              transition={{ type: 'spring', duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}

      <button
        onClick={toggleTheme}
        className="ml-1 p-2 rounded-xl hover:bg-light-primary/10 dark:hover:bg-primary/10 transition-colors relative"
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          {theme === 'dark' ? (
            <SunIcon className="w-5 h-5 text-primary" />
          ) : (
            <MoonIcon className="w-5 h-5 text-light-primary" />
          )}
        </motion.div>
      </button>
    </motion.nav>
  );
};

export default Navbar; 