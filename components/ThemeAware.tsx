'use client';

import { useClientTheme } from '../hooks/useClientTheme';

interface ThemeAwareProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ThemeAware = ({ children, fallback = null }: ThemeAwareProps) => {
  const { mounted } = useClientTheme();
  
  if (!mounted) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
};