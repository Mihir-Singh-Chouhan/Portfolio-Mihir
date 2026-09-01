import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  const [codeLines, setCodeLines] = useState<string[]>([]);

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
    }, 200);

    return () => clearInterval(interval);
  }, []);

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
    { name: 'Spring', delay: 0.2 },
    { name: 'React', delay: 0.4 },
    { name: 'Microservices', delay: 0.6 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-bg pt-20"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              variants={staggerItem}
              className="inline-block"
            >
              <div className="px-4 py-2 rounded-full border border-accent-blue/30 bg-orange-50 text-accent-blue text-sm font-medium">
                {portfolioData.hero.badge}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={staggerItem}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
                {highlightText(portfolioData.hero.heading, portfolioData.hero.highlightText)}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              {portfolioData.hero.description}
            </motion.p>

            {/* Availability Badge */}
            <motion.div variants={staggerItem} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-sm text-text-secondary">{portfolioData.personal.availability}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={staggerItem} className="flex gap-4 pt-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href={`mailto:${portfolioData.personal.email}`}
                className="px-8 py-3 border border-accent-blue text-accent-blue font-semibold rounded-lg hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Code Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple opacity-15 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-card-bg border border-card-border rounded-2xl p-6 backdrop-blur-xl shadow-lg">
                <div className="mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm text-text-secondary space-y-1">
                  {codeLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
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
              </div>
            </div>

            {/* Floating Technology Badges */}
            <div className="absolute inset-0 pointer-events-none">
              {floatingTechs.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    y: [20, 0, -20, 0],
                    opacity: [0, 1, 0.6, 1],
                  }}
                  transition={{
                    duration: 4,
                    delay: tech.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute px-3 py-1 rounded-full text-xs font-medium border border-accent-blue/30 bg-orange-50 text-accent-blue pointer-events-auto ${
                    idx % 2 === 0 ? 'left-0 top-1/4' : 'right-0 bottom-1/4'
                  }`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-accent-blue" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
