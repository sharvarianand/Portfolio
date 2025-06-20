'use client';

import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScroll((scrolled / height) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div
        className="h-1 bg-gradient-light-primary dark:bg-gradient-primary transition-all duration-300"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollIndicator; 