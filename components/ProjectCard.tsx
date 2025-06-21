'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  image: string;
}

const ProjectCard = ({ name, description, tags, github, demo, image }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden bg-light-surface dark:bg-surface border border-light-border dark:border-border hover:border-light-primary/50 dark:hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        {image ? (
          <Image 
            src={image} 
            alt={name}
            width={400}
            height={300}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 p-4"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-light-primary/10 dark:bg-gradient-primary/10">
            <span className="text-4xl">🖼️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-light-surface dark:from-surface via-light-surface/50 dark:via-surface/50 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-2xl font-bold mb-3 gradient-text">{name}</h3>
        <p className="text-light-text-secondary dark:text-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-light-primary/10 dark:bg-primary/10 border border-light-primary/20 dark:border-primary/20 text-light-primary dark:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg text-center font-heading text-sm border border-light-primary dark:border-primary text-light-primary dark:text-primary hover:bg-light-primary/10 dark:hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2 ${
              demo ? 'flex-1' : 'flex-1'
            }`}
          >
            <FaGithub className="h-5 w-5" />
            <span>Code</span>
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 rounded-lg text-center font-heading text-sm bg-gradient-light-primary dark:bg-gradient-primary text-white hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 