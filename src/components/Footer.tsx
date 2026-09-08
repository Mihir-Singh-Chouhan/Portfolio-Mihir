import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenEmailModal?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenEmailModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    if (onOpenEmailModal) {
      onOpenEmailModal();
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`, '_blank');
    }
  };

  return (
    <footer className="bg-primary-bg border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
          {/* Left - Logo & Role */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-primary-dark">
              MIHIR<span className="text-accent-blue">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Full Stack Java Developer • Scalable Systems
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
            <p className="text-xs sm:text-sm text-text-secondary">
              Built with React, TypeScript, Tailwind &{' '}
              <span className="text-accent-blue font-semibold">curiosity.</span>
            </p>
          </motion.div>

          {/* Right - Social Links & Back to top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end items-center gap-3"
          >
            {/* Email icon with reliable click handler */}
            <motion.button
              onClick={handleEmailClick}
              className="w-10 h-10 p-2.5 rounded-xl border border-card-border bg-white hover:border-accent-blue text-text-secondary hover:text-accent-blue transition-colors shadow-2xs cursor-pointer flex items-center justify-center shrink-0"
              whileHover={{ scale: 1.08 }}
              aria-label="Email Mihir"
              title="Send an email to Mihir"
            >
              <Mail size={18} />
            </motion.button>

            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2.5 rounded-xl border border-card-border bg-white hover:border-accent-blue text-text-secondary hover:text-accent-blue transition-colors shadow-2xs flex items-center justify-center shrink-0"
              whileHover={{ scale: 1.08 }}
              aria-label="LinkedIn Profile"
              title="Open LinkedIn profile"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2.5 rounded-xl border border-card-border bg-white hover:border-accent-blue text-text-secondary hover:text-accent-blue transition-colors shadow-2xs flex items-center justify-center shrink-0"
              whileHover={{ scale: 1.08 }}
              aria-label="GitHub Profile"
              title="Open GitHub profile"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2.5 rounded-xl border border-card-border bg-white hover:border-accent-blue text-text-secondary hover:text-accent-blue transition-colors shadow-2xs flex items-center justify-center shrink-0"
              whileHover={{ scale: 1.08 }}
              aria-label="WhatsApp"
              title="Chat with Mihir on WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </motion.a>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 p-2.5 rounded-xl border border-slate-200 bg-orange-50 hover:bg-orange-100 text-accent-blue transition-colors shadow-2xs ml-2 cursor-pointer flex items-center justify-center shrink-0"
              whileHover={{ scale: 1.08 }}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-border my-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs text-text-light">
            © {currentYear} Mihir Singh Chouhan. Engineered for high performance & clean code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
