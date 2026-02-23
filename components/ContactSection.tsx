'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { GlowingEffect } from './ui/glowing-effect';

const ContactSection = () => {
  const [result, setResult] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // IMPORTANT: Replace with your own access key from web3forms.com
  const accessKey = 'e4f4ffb3-b31e-4756-8848-e950db7707cf';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Error from Web3Forms:', data);
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResult('An error occurred while sending the message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-0 pb-16 flex flex-col items-center text-center gap-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/5 to-transparent dark:via-white/5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 w-full"
      >
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-heading text-3xl md:text-4xl gradient-text mb-4 relative font-black">
          Get In Touch
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-light-text-secondary dark:text-text-secondary max-w-3xl mx-auto mb-12 relative">
          Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities and creative ideas.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-left">
            <h3 className="font-heading text-2xl text-light-text-primary dark:text-text-primary mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-white/10">
                  <FaEnvelope className="h-5 w-5 text-light-text-primary dark:text-text-primary" />
                </div>
                <div>
                  <p className="text-light-text-primary dark:text-text-primary font-medium">Email</p>
                  <a href="mailto:sharvaribhondekar23@gmail.com" className="text-light-text-secondary dark:text-text-secondary hover:text-light-text-primary dark:hover:text-text-primary transition-colors">sharvaribhondekar23@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-white/10">
                  <FaLinkedin className="h-5 w-5 text-light-text-primary dark:text-text-primary" />
                </div>
                <div>
                  <p className="text-light-text-primary dark:text-text-primary font-medium">LinkedIn</p>
                  <a href="https://linkedin.com/in/sharvari-bhondekar-872a7a282" target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-text-secondary hover:text-light-text-primary dark:hover:text-text-primary transition-colors">linkedin.com/in/sharvari-bhondekar</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-white/10">
                  <FaGithub className="h-5 w-5 text-light-text-primary dark:text-text-primary" />
                </div>
                <div>
                  <p className="text-light-text-primary dark:text-text-primary font-medium">GitHub</p>
                  <a href="https://github.com/sharvarianand" target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-text-secondary hover:text-light-text-primary dark:hover:text-text-primary transition-colors">github.com/sharvarianand</a>
                </div>
              </div>
            </div>
            <div className="relative bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-xl p-6 border border-white/5 dark:border-white/10 shadow-lg">
              <GlowingEffect
                spread={35}
                glow={true}
                disabled={false}
                proximity={56}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <h4 className="font-heading text-lg text-light-text-primary dark:text-text-primary mb-4">Current Status</h4>
              <ul className="space-y-2 text-light-text-secondary dark:text-text-secondary">
                <li>✅ Available for freelance work and full-time opportunities</li>
                <li>✅ Working on personal projects</li>
                <li>✅ Actively seeking internship opportunities</li>
                <li>✅ Open to collaboration</li>
              </ul>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} onSubmit={handleSubmit} className="relative bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-2xl sm:p-8 p-4 shadow-lg flex flex-col gap-8 border border-white/5 dark:border-white/10 w-full max-w-md mx-auto">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1.2}
            />
            <h3 className="font-heading text-2xl text-light-text-primary dark:text-text-primary mb-4">Send Me a Message</h3>
            <input type="hidden" name="subject" value="New Message from Portfolio" />

            <div className="relative group mb-2">
              <input type="text" id="name" name="name" required className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-light-text-primary dark:focus:border-text-primary outline-none py-3 px-2 text-base text-light-text-primary dark:text-text-primary placeholder-transparent transition-all" placeholder="Name" />
              <label htmlFor="name" className="absolute left-2 -top-2 text-xs text-light-text-primary dark:text-text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted dark:peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-light-text-primary dark:peer-focus:text-text-primary">Name</label>
            </div>
            <div className="relative group mb-2">
              <input type="email" id="email" name="email" required className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-light-text-primary dark:focus:border-text-primary outline-none py-3 px-2 text-base text-light-text-primary dark:text-text-primary placeholder-transparent transition-all" placeholder="Email" />
              <label htmlFor="email" className="absolute left-2 -top-2 text-xs text-light-text-primary dark:text-text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted dark:peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-light-text-primary dark:peer-focus:text-text-primary">Email</label>
            </div>
            <div className="relative group mb-2">
              <textarea id="message" name="message" required rows={4} className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-light-text-primary dark:focus:border-text-primary outline-none py-3 px-2 text-base text-light-text-primary dark:text-text-primary placeholder-transparent transition-all resize-none" placeholder="Message" />
              <label htmlFor="message" className="absolute left-2 -top-2 text-xs text-light-text-primary dark:text-text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted dark:peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-light-text-primary dark:peer-focus:text-text-primary">Message</label>
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-xl font-heading bg-gradient-to-r from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-100 text-white dark:text-black shadow-lg hover:shadow-primary/25 transition-shadow font-semibold text-base sm:text-lg" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {result && <p className={`mt-4 text-sm ${result.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{result}</p>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 
