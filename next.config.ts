import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Vercel deployment
  images: {
    unoptimized: true, // Set to false to use Vercel's image optimization
    domains: ["images.unsplash.com"], // External hosts used by project card images
  },
  
  // Keep experimental features minimal for stability
  
  // Ensure proper trailing slash handling
  trailingSlash: false,
};

export default nextConfig;
