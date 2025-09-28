import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper static optimization for Netlify
  images: {
    domains: [], // Add any external image domains here
  },
  
  // Ensure proper ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Keep experimental features minimal for stability
  
  // Ensure proper trailing slash handling
  trailingSlash: false,
};

export default nextConfig;
