'use client';
import React, { useState } from 'react';
import { certificates } from '../../data/certificates';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import { GlowingEffect } from '../../components/ui/glowing-effect';

const CertificatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(certificates.map(cert => cert.category)))];

  const filteredCertificates = selectedCategory === 'All'
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="min-h-screen bg-light-background dark:bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl md:text-6xl gradient-text mb-6 font-bold">
            My Certificates
          </h1>
          <p className="text-light-text-secondary dark:text-text-secondary text-lg max-w-2xl mx-auto">
            A collection of my achievements, recognitions, and certifications that showcase my journey in technology and innovation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black shadow-lg'
                : 'bg-black/40 dark:bg-black/60 text-light-text-primary dark:text-text-primary border border-white/5 dark:border-white/10 hover:border-white/50'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-black/40 dark:bg-black/60 rounded-2xl p-6 border border-white/5 dark:border-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              {/* Certificate Icon */}
              <div className="text-4xl mb-4 text-center">
                {certificate.icon}
              </div>

              {/* Certificate Info */}
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-bold text-light-text-primary dark:text-text-primary mb-2">
                  {certificate.title}
                </h3>
                <p className="text-light-text-secondary dark:text-text-secondary text-sm mb-3">
                  {certificate.description}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-light-surface-secondary dark:bg-surface-secondary rounded-full text-light-text-secondary dark:text-text-secondary">
                    {certificate.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-light-text-primary dark:text-text-primary rounded-full font-semibold">
                    {certificate.year}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black rounded-lg font-heading font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt size={16} />
                  View Certificate
                </a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📜</div>
            <h3 className="font-heading text-2xl text-light-text-primary dark:text-text-primary mb-2">
              No certificates found
            </h3>
            <p className="text-light-text-secondary dark:text-text-secondary">
              Try selecting a different category to view more certificates.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CertificatesPage; 