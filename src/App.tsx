import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyMarquee from './components/TechnologyMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecruiterModal from './components/RecruiterModal';
import ResumeModal from './components/ResumeModal';
import EmailModal from './components/EmailModal';
import { useScrollProgress, useReducedMotion } from './hooks/useAnimation';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailModalSubject, setEmailModalSubject] = useState<string | undefined>();
  const [emailModalMessage, setEmailModalMessage] = useState<string | undefined>();

  const prefersReducedMotion = useReducedMotion();
  const scrollProgress = useScrollProgress();

  const handleOpenEmailModal = (subject?: string, message?: string) => {
    setEmailModalSubject(subject);
    setEmailModalMessage(message);
    setIsEmailModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'experience',
        'projects',
        'skills',
        'contact',
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-primary-bg text-text-primary overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-blue to-accent-purple z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenEmailModal={() => handleOpenEmailModal()}
      />

      {/* Main Content */}
      <main>
        <Hero
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenEmailModal={() => handleOpenEmailModal()}
        />
        <TechnologyMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact onOpenEmailModal={handleOpenEmailModal} />
      </main>

      {/* Footer */}
      <Footer onOpenEmailModal={() => handleOpenEmailModal()} />

      {/* Recruiter Quick View Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
        onOpenResume={() => {
          setIsRecruiterModalOpen(false);
          setIsResumeModalOpen(true);
        }}
        onOpenEmailModal={(subject, message) => {
          setIsRecruiterModalOpen(false);
          handleOpenEmailModal(subject, message);
        }}
      />

      {/* Digital Resume & PDF Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Direct Contact & Email Modal (Guaranteed Cross-Platform) */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        initialSubject={emailModalSubject}
        initialMessage={emailModalMessage}
      />

      {/* Prefers Reduced Motion Styles */}
      {prefersReducedMotion && (
        <style>{`
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `}</style>
      )}
    </div>
  );
}

export default App;
