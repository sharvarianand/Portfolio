'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 flex flex-col items-center text-center gap-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light-primary/5 to-transparent dark:via-primary/5" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 w-full"
      >
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-heading text-3xl md:text-4xl gradient-text mb-4 relative">
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
                <div className="w-10 h-10 rounded-full bg-light-primary/10 dark:bg-primary/10 flex items-center justify-center"><span className="text-light-primary dark:text-primary text-lg">✉️</span></div>
                <div>
                  <p className="text-light-text-primary dark:text-text-primary font-medium">Email</p>
                  <p className="text-light-text-secondary dark:text-text-secondary">sharvari@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-light-secondary/10 dark:bg-secondary/10 flex items-center justify-center"><span className="text-light-secondary dark:text-secondary text-lg">💼</span></div>
                <div>
                  <p className="text-light-text-primary dark:text-text-primary font-medium">LinkedIn</p>
                  <p className="text-light-text-secondary dark:text-text-secondary">linkedin.com/in/sharvari</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-light-highlight/10 dark:bg-highlight/10 flex items-center justify-center"><span className="text-light-highlight dark:text-highlight text-lg">📱</span></div>
                <div>
                  <p className="text-light-text-primary dark:text-text-primary font-medium">GitHub</p>
                  <p className="text-light-text-secondary dark:text-text-secondary">github.com/sharvari</p>
                </div>
              </div>
            </div>
            <div className="bg-light-surface dark:bg-surface rounded-xl p-6 border border-light-border dark:border-border">
              <h4 className="font-heading text-lg text-light-text-primary dark:text-text-primary mb-4">Current Status</h4>
              <ul className="space-y-2 text-light-text-secondary dark:text-text-secondary">
                <li>✅ Available for freelance work and full-time opportunities</li>
                <li>✅ Working on personal projects</li>
                <li>✅ Actively seeking internship opportunities</li>
                <li>✅ Open to collaboration</li>
              </ul>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} onSubmit={handleSubmit} className="bg-light-surface dark:bg-surface backdrop-blur-lg rounded-2xl p-8 shadow-lg flex flex-col gap-6 border border-light-border dark:border-border">
            <h3 className="font-heading text-2xl text-light-text-primary dark:text-text-primary mb-4">Send Me a Message</h3>
            <div className="relative group">
              <input type="text" id="name" name="name" required className="peer w-full bg-transparent border-b-2 border-light-primary/30 dark:border-primary/30 focus:border-light-primary dark:focus:border-primary outline-none py-2 px-1 text-light-text-primary dark:text-text-primary placeholder-transparent transition-all" placeholder="Name" />
              <label htmlFor="name" className="absolute left-1 -top-2 text-xs text-light-primary dark:text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted dark:peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-light-primary dark:peer-focus:text-primary">Name</label>
            </div>
            <div className="relative group">
              <input type="email" id="email" name="email" required className="peer w-full bg-transparent border-b-2 border-light-primary/30 dark:border-primary/30 focus:border-light-primary dark:focus:border-primary outline-none py-2 px-1 text-light-text-primary dark:text-text-primary placeholder-transparent transition-all" placeholder="Email" />
              <label htmlFor="email" className="absolute left-1 -top-2 text-xs text-light-primary dark:text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted dark:peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-light-primary dark:peer-focus:text-primary">Email</label>
            </div>
            <div className="relative group">
              <textarea id="message" name="message" required rows={4} className="peer w-full bg-transparent border-b-2 border-light-primary/30 dark:border-primary/30 focus:border-light-primary dark:focus:border-primary outline-none py-2 px-1 text-light-text-primary dark:text-text-primary placeholder-transparent transition-all resize-none" placeholder="Message" />
              <label htmlFor="message" className="absolute left-1 -top-2 text-xs text-light-primary dark:text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-light-text-muted dark:peer-placeholder-shown:text-text-muted peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-light-primary dark:peer-focus:text-primary">Message</label>
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 rounded-xl font-heading bg-gradient-light-primary dark:bg-gradient-primary text-white shadow-lg hover:shadow-primary/25 transition-shadow font-semibold">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 