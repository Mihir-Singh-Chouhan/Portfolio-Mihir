import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Sparkles, FileText, CheckCircle2, RotateCcw } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenRecruiterModal?: () => void;
  onOpenResumeModal?: () => void;
  onOpenEmailModal?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  onOpenRecruiterModal,
  onOpenResumeModal,
  onOpenEmailModal,
}) => {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isExecuted, setIsExecuted] = useState(false);

  const codeSnippet = [
    'const engineer = {',
    '  name: "Mihir",',
    '  stack: [',
    '    "Java", "Spring Boot",',
    '    "React", "Microservices"',
    '  ],',
    '  mindset: "Scalable"',
    '}',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setCodeLines((prev) => [...prev, codeSnippet[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 180);

    return () => clearInterval(interval);
  }, []);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setIsExecuted(true);
    }, 700);
  };

  const handleResetRun = () => {
    setIsExecuted(false);
  };

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(highlight);
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < parts.length - 1 && (
          <span className="text-accent-blue font-semibold">{highlight}</span>
        )}
      </React.Fragment>
    ));
  };

  const floatingTechs = [
    { name: 'Java', delay: 0 },
    { name: 'Spring Boot', delay: 0.2 },
    { name: 'React', delay: 0.4 },
    { name: 'Microservices', delay: 0.6 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-bg pt-24 pb-16"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-left"
          >
            {/* Author Profile Avatar & Role Badge */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4"
            >
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300" />
                <img
                  src={portfolioData.personal.avatar || "/images/mihir.png"}
                  alt={portfolioData.personal.name}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-md"
                  loading="eager"
                />
                <span
                  className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs"
                  title={portfolioData.personal.availability}
                />
              </div>
              <div className="space-y-1">
                <div className="inline-block px-3 py-1 rounded-full border border-accent-blue/30 bg-orange-50 text-accent-blue text-xs font-semibold uppercase tracking-wider">
                  {portfolioData.hero.badge}
                </div>
                <h2 className="text-base sm:text-lg font-bold text-primary-dark">
                  {portfolioData.personal.name}
                </h2>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={staggerItem}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
                {highlightText(portfolioData.hero.heading, portfolioData.hero.highlightText)}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              {portfolioData.hero.description}
            </motion.p>

            {/* Above-The-Fold Core Tech Stack Bar (For instant 3-second recruiter scanning) */}
            <motion.div variants={staggerItem} className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-accent-blue uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Core Stack at a Glance</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {portfolioData.coreSkills.map((skill, idx) => (
                  <motion.a
                    key={idx}
                    href="#skills"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white border border-slate-200 text-primary-dark font-medium hover:border-accent-blue hover:text-accent-blue transition-colors shadow-2xs"
                  >
                    {skill}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Proof Metrics Strip */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-3 text-xs text-text-secondary pt-1"
            >
              <div className="flex items-center gap-1.5 font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {portfolioData.personal.availability}
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="font-medium">1.9+ Yrs @ Digi Mantra Labs</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="font-medium">10M+ Users Supported</span>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 pt-3">
              {/* Recruiter Quick Dossier */}
              <motion.button
                onClick={onOpenRecruiterModal}
                className="px-5 sm:px-6 py-3 bg-gradient-to-r from-orange-500 via-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2 shadow-md"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Sparkles size={16} className="text-yellow-200" />
                <span>⚡ Recruiter Quick View</span>
              </motion.button>

              {/* View Resume Button */}
              <motion.button
                onClick={onOpenResumeModal}
                className="px-5 py-3 border border-accent-blue/40 bg-orange-50 hover:bg-orange-100 text-accent-blue font-semibold rounded-xl transition-all flex items-center gap-2 shadow-xs"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileText size={16} />
                <span>View Resume / CV</span>
              </motion.button>

              {/* View Projects */}
              <motion.a
                href="#projects"
                className="px-5 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-primary-dark font-medium rounded-xl transition-all flex items-center gap-1.5 shadow-xs"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Projects</span>
              </motion.a>

              {/* Let's Connect Button */}
              {onOpenEmailModal && (
                <motion.button
                  onClick={onOpenEmailModal}
                  className="px-5 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-primary-dark font-medium rounded-xl transition-all flex items-center gap-1.5 shadow-xs"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Let's Connect</span>
                </motion.button>
              )}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Code & Architecture Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Code Card Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-orange-400 opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity" />
              
              <div className="relative bg-card-bg border border-card-border rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-xl">
                {/* Code Window Top Bar */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono text-text-secondary">
                      CandidateProfile.java
                    </span>
                  </div>

                  {/* Interactive Run Button */}
                  <div className="flex items-center gap-2">
                    {isExecuted ? (
                      <button
                        onClick={handleResetRun}
                        className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-text-secondary text-xs font-mono flex items-center gap-1 transition-colors"
                        title="Reset code view"
                      >
                        <RotateCcw size={11} />
                        <span>Reset</span>
                      </button>
                    ) : null}
                    <button
                      onClick={handleRunCode}
                      disabled={isRunning}
                      className="px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-xs disabled:opacity-50"
                    >
                      <Play size={11} fill="white" />
                      <span>{isRunning ? 'Compiling...' : isExecuted ? 'Re-run Benchmark' : 'Run Profile'}</span>
                    </button>
                  </div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-xs sm:text-sm text-text-secondary space-y-1">
                  {codeLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                  {codeLines.length < codeSnippet.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="text-accent-blue"
                    >
                      █
                    </motion.span>
                  )}
                </div>

                {/* Simulated Real-Time Benchmark Output */}
                <AnimatePresence>
                  {isExecuted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-3 border-t border-slate-200 font-mono text-xs text-left space-y-1.5 bg-slate-900 text-slate-100 p-3.5 rounded-xl"
                    >
                      <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 size={13} />
                        <span>Profile Evaluation Completed (100% Match):</span>
                      </div>
                      <div className="text-slate-300 text-[11px] space-y-0.5 pl-2">
                        <div>• Core: Java 17 | Spring Boot | Microservices | React</div>
                        <div>• Scale: 10M+ Users Supported • 30% Latency Optimized</div>
                        <div>• Quality: 90%+ Unit Test Coverage (JUnit / Mockito)</div>
                        <div className="text-yellow-300 pt-0.5">
                          ➔ Candidate Status: Ready to deploy & make an immediate impact!
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Interactive Technology Badges */}
            <div className="absolute inset-0 pointer-events-none hidden sm:block">
              {floatingTechs.map((tech, idx) => (
                <motion.a
                  key={idx}
                  href="#skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    y: [15, -5, 15],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3.5,
                    delay: tech.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute px-3 py-1 rounded-full text-xs font-semibold border border-accent-blue/40 bg-white/95 text-accent-blue shadow-md pointer-events-auto hover:scale-110 transition-transform ${
                    idx === 0
                      ? '-left-4 top-1/4'
                      : idx === 1
                      ? '-right-4 top-1/3'
                      : idx === 2
                      ? '-left-2 bottom-1/4'
                      : '-right-2 bottom-1/6'
                  }`}
                >
                  {tech.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-12 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" aria-label="Scroll to about section">
            <ChevronDown className="text-accent-blue hover:text-orange-600 transition-colors" size={26} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
