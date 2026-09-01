import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-bg border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-left md:text-left"
          >
            <h2 className="text-2xl font-bold text-primary-dark">
              MIHIR<span className="text-accent-blue">.</span>
            </h2>
            <p className="text-sm text-text-secondary mt-2">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Center - Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="text-sm text-text-secondary">
              Built with React, TypeScript &{' '}
              <span className="text-accent-blue">curiosity.</span>
            </p>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg border border-card-border hover:border-accent-blue text-text-secondary hover:text-accent-blue transition-colors shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.1 }}
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-card-border hover:border-accent-blue text-text-secondary hover:text-accent-blue transition-colors shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.1 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-border my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs text-text-light">
            © {currentYear} Mihir Singh Chouhan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
