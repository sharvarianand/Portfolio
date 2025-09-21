'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useClientTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a default theme during SSR to prevent hydration mismatch
  return {
    resolvedTheme: mounted ? resolvedTheme : 'light',
    setTheme,
    mounted,
  };
};