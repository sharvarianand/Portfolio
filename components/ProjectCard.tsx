'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { useClientTheme } from '../hooks/useClientTheme';
import { GlowingEffect } from './ui/glowing-effect';

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  image: string | { dark: string; light: string };
}

const ProjectCard = ({ name, description, tags, github, demo, image }: ProjectCardProps) => {
  const { resolvedTheme, mounted } = useClientTheme();

  let imageUrl: string;
  if (typeof image === 'string') {
    imageUrl = image;
  } else {
    // Default to light theme image during SSR to prevent hydration mismatch
    imageUrl = !mounted ? image.light : (resolvedTheme === 'dark' ? image.dark : image.light);
  }

  const isDemoActive = demo && demo !== '#';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden bg-black/40 dark:bg-black/60 border border-white/5 dark:border-white/10 hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      {/* Project ProjectCard Image */}
      <div className="relative h-64 overflow-hidden border-b border-white/5">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={600}
            height={400}
            className={`w-full h-full ${['InterVueX', 'AI & Engineering Portfolio'].includes(name) ? 'object-contain bg-zinc-950' : 'object-cover object-top'} transform group-hover:scale-105 transition-transform duration-700`}
            priority={['InterVueX', 'AI & Engineering Portfolio'].includes(name)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
            <span className="text-4xl">🖼️</span>
          </div>
        )}
        {/* Subtle vignette instead of heavy bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold mb-2 gradient-text">{name}</h3>
        <p className="text-light-text-secondary dark:text-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 border border-white/10 text-light-text-primary dark:text-text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg text-center font-heading text-sm border border-gray-300 dark:border-gray-700 text-light-text-primary dark:text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <FaGithub className="h-4 w-4" />
            <span>Code</span>
          </a>
          {demo && (
            isDemoActive ? (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg text-center font-heading text-sm bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <div
                className="flex-1 px-4 py-2 rounded-lg text-center font-heading text-sm bg-light-surface-secondary dark:bg-surface-secondary text-light-text-muted dark:text-text-muted cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                <span>Live Demo</span>
              </div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 