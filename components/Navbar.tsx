'use client';

import React, { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  DocumentTextIcon,
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  TrophyIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import ResumeModal from './ResumeModal';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check sections in order, including nested ones
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'about', element: document.getElementById('about') },
        { id: 'skills', element: document.getElementById('skills') },
        { id: 'projects', element: document.getElementById('projects') },
        { id: 'achievements', element: document.getElementById('achievements') },
        { id: 'contact', element: document.getElementById('contact') },
      ];

      let currentSection = 'home';

      // Check each section
      for (const { id, element } of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;

          // Check if scroll position is within this element
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = id;
            // Don't break - let later sections override if they also match
            // This handles nested sections properly
          }
        }
      }

      setActiveSection(currentSection);
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // Run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setIsMobileMenuOpen(false);
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
    { href: 'home', label: 'Home', icon: HomeIcon },
    { href: 'about', label: 'About', icon: UserIcon },
    { href: 'skills', label: 'Skills', icon: CodeBracketIcon },
    { href: 'projects', label: 'Projects', icon: BriefcaseIcon },
    { href: 'achievements', label: 'Achievements', icon: TrophyIcon },
    { href: 'contact', label: 'Contact', icon: EnvelopeIcon },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-[55%] z-50 -translate-x-1/2 rounded-2xl px-1 py-1 items-center gap-1 backdrop-blur-md border transition-all duration-300 hidden lg:flex ${isScrolled
          ? 'bg-surface/80 border-border shadow-lg'
          : 'bg-transparent border-transparent'
          }`}
      >
        {navItems.map(({ href, label }) => (
          <button
            key={href}
            onClick={() => handleNavigation(href)}
            className={`relative px-4 py-2 rounded-xl font-heading text-sm transition-all duration-300 ${activeSection === href
              ? 'text-primary'
              : 'text-text-secondary hover:text-text-primary'
              }`}
          >
            {activeSection === href && (
              <motion.span
                layoutId="activeSection"
                className="absolute inset-0 rounded-xl bg-primary/10"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        ))}

        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="relative px-4 py-2 rounded-xl font-heading text-sm transition-all duration-300 text-text-secondary hover:text-text-primary hover:bg-primary/10 flex items-center gap-1"
        >
          <DocumentTextIcon className="w-4 h-4" />
          <span>Resume</span>
        </button>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="fixed top-4 right-4 z-50 lg:hidden flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-surface/90 border border-border backdrop-blur-md shadow-lg"
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
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-text-primary" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-text-primary" />
                )}
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
              className="w-56 bg-surface/95 border border-border backdrop-blur-xl rounded-2xl shadow-lg"
            >
              <div className="p-2 space-y-1">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-heading font-medium text-sm transition-all duration-300 flex items-center gap-3 ${activeSection === href
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-primary/5'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setIsResumeModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl font-heading font-medium text-sm transition-all duration-300 text-text-secondary hover:text-text-primary hover:bg-primary/5 flex items-center gap-2"
                >
                  <DocumentTextIcon className="w-4 h-4" />
                  Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
};

export default Navbar;