'use client';
import React from 'react';
import { projects } from '../data/projects';
import { ContainerScroll } from './ui/container-scroll-animation';
import { ExpandableCard } from './ui/expandable-card';

const ProjectsSection = () => {
  const expandableItems = projects.map((project) => ({
    title: project.name,
    description: project.description,
    src: typeof project.image === 'string' ? project.image : (project.image as any).dark,
    ctaText: 'View Details',
    ctaLink: project.demo || project.github,
    content: () => (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 border border-white/10 text-neutral-800 dark:text-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg text-center font-heading text-sm border border-border text-neutral-800 dark:text-neutral-200 hover:bg-surface-secondary transition-colors"
          >
            GitHub
          </a>
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 rounded-lg text-center font-heading text-sm bg-primary text-white hover:opacity-90 transition-opacity"
            >
              Live Demo
            </a>
          )}
        </div>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Experience the innovation behind {project.name}. This project leverages
          {project.tags.slice(0, 3).join(', ')} to deliver a high-performance solution
          tailored for excellence.
        </p>
      </div>
    ),
  }));

  return (
    <section id="projects">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              A showcase of my recent work, from AI agents to scalable engineering.
            </p>
          </div>
        }
      >
        <div className="p-4 md:p-8">
          <ExpandableCard items={expandableItems} />
        </div>
      </ContainerScroll>
    </section>
  );
};

export default ProjectsSection;
