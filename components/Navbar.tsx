'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../app/ThemeProvider';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
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

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 right-4 z-50 lg:hidden ${
          isScrolled 
            ? 'bg-light-surface/90 dark:bg-surface/90 border-light-border dark:border-border shadow-lg' 
            : 'bg-transparent border-transparent'
        } rounded-2xl border backdrop-blur-md transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-light-text-primary dark:text-text-primary px-3">
              SB
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-light-primary/10 dark:hover:bg-primary/10 transition-colors"
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
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-light-primary/10 dark:hover:bg-primary/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-light-text-primary dark:text-text-primary" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-light-text-primary dark:text-text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-light-border dark:border-border"
            >
              <div className="p-4 space-y-2">
                {navItems.map(({ href, label }) => (
                  <button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-heading text-sm transition-all duration-300 ${
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
      </motion.nav>
    </>
  );
};

export default Navbar; 