import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, Sparkles, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface ContactProps {
  onOpenEmailModal?: (subject?: string, message?: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenEmailModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailMe = () => {
    if (onOpenEmailModal) {
      onOpenEmailModal(
        'Discussion: Full Stack Developer Role / Opportunity',
        `Hi Mihir,\n\nI reviewed your portfolio and would like to connect regarding an engineering role.\n\nBest regards,\n`
      );
    } else {
      const subject = encodeURIComponent('Discussion: Full Stack Developer Role / Opportunity');
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${subject}`, '_blank');
    }
  };

  const handleRecruiterEmail = () => {
    if (onOpenEmailModal) {
      onOpenEmailModal(
        'Interview Opportunity: Java Full Stack Developer Role',
        `Hi Mihir,\n\nI was impressed by your portfolio and experience in Java, Spring Boot, and Microservices. We would love to schedule an interview with you.\n\nBest regards,\n`
      );
    } else {
      const subject = encodeURIComponent('Interview Opportunity: Java Full Stack Developer Role');
      const body = encodeURIComponent(
        `Hi Mihir,\n\nI was impressed by your portfolio and experience in Java, Spring Boot, and Microservices. We would love to schedule an interview with you.\n\nBest regards,\n`
      );
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${subject}&body=${body}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary-bg relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
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
            className="text-base sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Looking for a Java Full Stack Engineer who understands high-scale distributed systems and clean code? Let's connect.
          </motion.p>

          {/* Contact Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center pt-4"
          >
            {/* Email Me Button (Guaranteed to open modal or Gmail) */}
            <motion.button
              onClick={handleEmailMe}
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-accent-blue hover:bg-orange-600 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Mail size={18} />
              <span>Email Me</span>
            </motion.button>

            {/* Recruiter Quick Invite */}
            <motion.button
              onClick={handleRecruiterEmail}
              className="px-6 py-3.5 rounded-xl border border-accent-blue/40 bg-orange-50 hover:bg-orange-100 text-accent-blue font-semibold transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Sparkles size={16} />
              <span>Schedule Interview</span>
            </motion.button>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919424766602?text=Hi%20Mihir%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-card-border bg-card-bg hover:border-accent-blue text-text-secondary hover:text-accent-blue font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <WhatsAppIcon size={18} />
              <span>WhatsApp</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-card-border bg-card-bg hover:border-accent-blue text-text-secondary hover:text-accent-blue font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-card-border bg-card-bg hover:border-accent-blue text-text-secondary hover:text-accent-blue font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Github size={18} />
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          {/* Email Display & 1-Click Copy with Toast */}
          <motion.div variants={fadeInUp} className="pt-6 space-y-3">
            <p className="text-xs sm:text-sm text-text-secondary">Or copy details directly:</p>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 sm:px-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-sm sm:text-base font-mono text-primary-dark font-medium px-2">
                {portfolioData.personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-accent-blue text-xs font-semibold flex items-center gap-1.5 transition-colors border border-accent-blue/30 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied! ✓</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 text-xs text-text-secondary flex items-center justify-center gap-2">
              <Phone size={13} className="text-accent-blue" />
              <span>Phone / WhatsApp: <strong className="text-primary-dark">+91-9424766602</strong></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
