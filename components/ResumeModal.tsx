'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { FaFileAlt } from 'react-icons/fa';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Sharvari_Bhondekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 flex items-center justify-center">
                  <FaFileAlt className="text-white text-lg" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    Resume
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Sharvari Bhondekar
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Download
                </button>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="relative bg-slate-50 dark:bg-slate-800 h-[calc(90vh-120px)]">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-800 z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600 dark:text-slate-400">Loading resume...</p>
                  </div>
                </div>
              )}
              
              <iframe
                src="/Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                className="w-full h-full"
                title="Resume PDF"
                style={{ border: 'none' }}
                onLoad={() => setIsLoading(false)}
              />
              
              {/* Fallback for browsers that don't support PDF viewing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="text-center p-8">
                  <FaFileAlt className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    PDF viewer not supported in your browser
                  </p>
                  <button
                    onClick={handleDownload}
                    className="pointer-events-auto px-6 py-3 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                  >
                    Download Resume Instead
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;