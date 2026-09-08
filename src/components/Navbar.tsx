import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenRecruiterModal?: () => void;
  onOpenResumeModal?: () => void;
  onOpenEmailModal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenRecruiterModal,
  onOpenResumeModal,
  onOpenEmailModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-blue via-orange-500 to-accent-purple z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Brand Logo */}
            <motion.div
              className="text-xl md:text-2xl font-bold text-primary-dark cursor-pointer flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              onClick={() => handleNavClick('home')}
            >
              <img
                src={portfolioData.personal.avatar || "/images/mihir.png"}
                alt="Mihir"
                className="w-8 h-8 rounded-full object-cover border border-accent-blue/30 shadow-2xs"
              />
              <span>
                MIHIR<span className="text-accent-blue">.</span>
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors relative group py-1 ${
                    activeSection === item.id
                      ? 'text-accent-blue font-semibold'
                      : 'text-text-secondary hover:text-primary-dark'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-accent-blue"
                    animate={{
                      width: activeSection === item.id ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Recruiter Quick View */}
              {onOpenRecruiterModal && (
                <motion.button
                  onClick={onOpenRecruiterModal}
                  className="px-3.5 py-1.5 rounded-lg bg-orange-50 border border-accent-blue/40 text-accent-blue text-xs font-bold hover:bg-orange-100 transition-all flex items-center gap-1.5 shadow-2xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles size={13} className="text-orange-500" />
                  <span>Recruiter View</span>
                </motion.button>
              )}

              {/* Resume Button */}
              {onOpenResumeModal && (
                <motion.button
                  onClick={onOpenResumeModal}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-text-secondary hover:text-primary-dark text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={13} />
                  <span>Resume</span>
                </motion.button>
              )}

              {/* Let's Talk */}
              <motion.button
                onClick={() => {
                  if (onOpenEmailModal) {
                    onOpenEmailModal();
                  } else {
                    window.location.href = `mailto:${portfolioData.personal.email}`;
                  }
                }}
                className="px-4 py-2 bg-accent-blue text-white text-xs font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-xs hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              {onOpenRecruiterModal && (
                <button
                  onClick={onOpenRecruiterModal}
                  className="px-2.5 py-1 rounded-md bg-orange-50 text-accent-blue text-xs font-bold border border-accent-blue/30 flex items-center gap-1"
                >
                  <Sparkles size={12} />
                  <span>Recruiter</span>
                </button>
              )}
              <button
                className="p-1.5 text-primary-dark rounded-md hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-2xl border-b border-slate-200 px-2 pb-4 shadow-lg"
          >
            <div className="space-y-1 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-accent-blue text-white font-semibold'
                      : 'text-text-secondary hover:text-primary-dark hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2 border-t border-slate-100 mt-2">
                {onOpenResumeModal && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full text-center px-4 py-2 rounded-lg border border-accent-blue text-accent-blue text-xs font-semibold hover:bg-orange-50 flex items-center justify-center gap-2"
                  >
                    <FileText size={14} />
                    <span>View Resume / CV</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenEmailModal) {
                      onOpenEmailModal();
                    } else {
                      window.location.href = `mailto:${portfolioData.personal.email}`;
                    }
                  }}
                  className="block w-full text-center px-4 py-2.5 bg-accent-blue text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
