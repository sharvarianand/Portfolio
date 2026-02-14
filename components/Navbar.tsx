'use client';

import React, { useState, useEffect } from 'react';
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconTrophy,
  IconMail,
  IconFileText
} from '@tabler/icons-react';
import { useRouter, usePathname } from 'next/navigation';
import ResumeModal from './ResumeModal';
import { FloatingDock } from './ui/floating-dock';


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'about', element: document.getElementById('about') },
        { id: 'skills', element: document.getElementById('skills') },
        { id: 'projects', element: document.getElementById('projects') },
        { id: 'achievements', element: document.getElementById('achievements') },
        { id: 'contact', element: document.getElementById('contact') },
      ];

      let currentSection = 'home';

      for (const { id, element } of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    if (section === 'resume') {
      setIsResumeModalOpen(true);
      return;
    }

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
    { title: 'Home', icon: <IconHome className="h-full w-full" />, href: '#home', onClick: (e: React.MouseEvent) => { e.preventDefault(); handleNavigation('home'); } },
    { title: 'About', icon: <IconUser className="h-full w-full" />, href: '#about', onClick: (e: React.MouseEvent) => { e.preventDefault(); handleNavigation('about'); } },
    { title: 'Skills', icon: <IconCode className="h-full w-full" />, href: '#skills', onClick: (e: React.MouseEvent) => { e.preventDefault(); handleNavigation('skills'); } },
    { title: 'Projects', icon: <IconBriefcase className="h-full w-full" />, href: '#projects', onClick: (e: React.MouseEvent) => { e.preventDefault(); handleNavigation('projects'); } },
    { title: 'Achievements', icon: <IconTrophy className="h-full w-full" />, href: '#achievements', onClick: (e: React.MouseEvent) => { e.preventDefault(); handleNavigation('achievements'); } },
    { title: 'Contact', icon: <IconMail className="h-full w-full" />, href: '#contact', onClick: (e: React.MouseEvent) => { e.preventDefault(); handleNavigation('contact'); } },
    { title: 'Resume', icon: <IconFileText className="h-full w-full" />, href: '#resume', onClick: (e: React.MouseEvent) => { e.preventDefault(); handleNavigation('resume'); } },
  ];

  return (
    <>
      <div className="fixed top-1/2 right-10 -translate-y-1/2 z-50">
        <FloatingDock
          items={navItems}
          orientation="vertical"
          desktopClassName="bg-surface/60 backdrop-blur-xl border-border/50"
          mobileClassName="fixed top-6 right-6"
        />
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
};

export default Navbar;