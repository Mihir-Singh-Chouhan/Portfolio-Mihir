import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary-bg relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '-200px', right: '-200px' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark"
          >
            Let's build something great.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Have an idea, a challenging engineering problem, or an opportunity? Let's talk.
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            {/* Email */}
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="group px-8 py-4 rounded-lg border border-accent-blue bg-accent-blue text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Email Me</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-lg border border-card-border bg-card-bg hover:border-accent-blue text-text-secondary hover:text-accent-blue font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Email Display */}
          <motion.div
            variants={fadeInUp}
            className="pt-8"
          >
            <p className="text-sm text-text-secondary mb-2">Or reach out directly:</p>
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-xl font-mono text-accent-blue hover:text-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {portfolioData.personal.email}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
