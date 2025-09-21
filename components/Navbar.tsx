'use client';

import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useClientTheme } from '../hooks/useClientTheme';

const Navbar = () => {
  const { resolvedTheme, setTheme, mounted } = useClientTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    if (pathname !== '/') {
      router.push(`/#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'skills', label: 'Skills' },
    { href: 'projects', label: 'Projects' },
    { href: 'education', label: 'Education' },
    { href: 'achievements', label: 'Achievements' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl px-1 py-1 items-center gap-1 backdrop-blur-md border transition-all duration-300 hidden lg:flex ${
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
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="ml-1 p-2 rounded-xl hover:bg-light-primary/10 dark:hover:bg-primary/10 transition-colors relative"
        aria-label="Toggle theme"
      >
          <motion.div initial={false} animate={{ rotate: mounted && resolvedTheme === 'dark' ? 0 : 180 }} transition={{ duration: 0.5 }} >
            {!mounted ? (
              <SunIcon className="w-5 h-5 text-light-primary" />
            ) : resolvedTheme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-primary" />
            ) : (
              <MoonIcon className="w-5 h-5 text-light-primary" />
            )}
        </motion.div>
      </button>
    </motion.nav>

      {/* Mobile Navbar */}
      <div className="fixed top-4 right-4 z-50 lg:hidden flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-light-surface/90 dark:bg-surface/90 border border-light-border dark:border-border backdrop-blur-md shadow-lg"
            aria-label="Toggle theme"
          >
            <motion.div initial={false} animate={{ rotate: mounted && resolvedTheme === 'dark' ? 0 : 180 }} transition={{ duration: 0.5 }} >
              {!mounted ? (
                <SunIcon className="w-6 h-6 text-light-primary" />
              ) : resolvedTheme === 'dark' ? (
                <SunIcon className="w-6 h-6 text-primary" />
              ) : (
                <MoonIcon className="w-6 h-6 text-light-primary" />
              )}
            </motion.div>
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-light-surface/90 dark:bg-surface/90 border border-light-border dark:border-border backdrop-blur-md shadow-lg"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'x' : 'bars'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? ( <XMarkIcon className="w-6 h-6 text-light-text-primary dark:text-text-primary" /> ) : ( <Bars3Icon className="w-6 h-6 text-light-text-primary dark:text-text-primary" /> )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-56 bg-light-surface/95 dark:bg-surface/95 border border-light-border dark:border-border backdrop-blur-xl rounded-2xl shadow-lg"
            >
              <div className="p-2 space-y-1">
                {navItems.map(({ href, label }) => (
                  <button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-heading font-medium text-sm transition-all duration-300 ${
                      activeSection === href
                        ? 'text-light-primary dark:text-primary bg-light-primary/10 dark:bg-primary/10'
                        : 'text-light-text-secondary dark:text-text-secondary hover:text-light-text-primary dark:hover:text-text-primary hover:bg-light-primary/5 dark:hover:bg-primary/5'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar; 