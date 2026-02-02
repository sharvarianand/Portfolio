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
    link.href = '/Sharvari_Bhondekar_Resume.pdf';
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
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-black border border-white/10 rounded-3xl shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] w-full max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 shadow-inner">
                  <FaFileAlt className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white tracking-tight">
                    Current Resume
                  </h2>
                  <p className="text-sm text-zinc-400 font-medium">
                    Sharvari Bhondekar • Software Engineer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  Download PDF
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="relative bg-[#1a1a1a] h-[calc(90vh-96px)]">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                  <div className="text-center">
                    <div className="w-14 h-14 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
                    <p className="text-zinc-400 font-medium tracking-wide">Initializing secure preview...</p>
                  </div>
                </div>
              )}

              <iframe
                src="/Sharvari_Bhondekar_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                className="w-full h-full invert dark:invert-0 opacity-90 transition-opacity duration-500"
                title="Resume PDF"
                style={{ border: 'none' }}
                onLoad={() => setIsLoading(false)}
              />

              {/* Fallback for browsers that don't support PDF viewing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="text-center p-8">
                  <FaFileAlt className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
                  <p className="text-white font-medium mb-6">
                    PDF Preview is not supported in this browser.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="pointer-events-auto px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    Download Resume
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