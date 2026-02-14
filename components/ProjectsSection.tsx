'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { ContainerScroll } from './ui/container-scroll-animation';
import { GlowingEffect } from './ui/glowing-effect';
import { useClientTheme } from '../hooks/useClientTheme';

const ProjectsSection = () => {
  const { resolvedTheme, mounted } = useClientTheme();

  const getImageUrl = (image: string | { dark: string; light: string }) => {
    if (typeof image === 'string') return image;
    return !mounted ? image.light : (resolvedTheme === 'dark' ? image.dark : image.light);
  };

  return (
    <section id="projects" className="relative">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              A showcase of my work in AI, web development, and software engineering.
            </p>
          </div>
        }
      >
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1.5}
                />

                <div className="relative h-full w-full rounded-3xl overflow-hidden bg-neutral-900/50 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    {/* Project Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={getImageUrl(project.image)}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                          {project.name}
                        </h3>

                        {/* Description */}
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 4).map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800/60 text-neutral-200 hover:bg-neutral-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-300"
                          title="View Code"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-300"
                            title="View Live Demo"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default ProjectsSection;
