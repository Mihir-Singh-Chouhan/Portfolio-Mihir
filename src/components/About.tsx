import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

const StatCounter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const numValue = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(numValue)) return;

    const duration = 2000;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(numValue * progress);

      setDisplayValue(`${current}${value.replace(/[0-9]/g, '')}`);

      if (progress === 1) {
        clearInterval(interval);
        setDisplayValue(value);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [hasStarted, value]);

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold text-accent-blue mb-2">
        {displayValue}
      </div>
      <p className="text-text-secondary text-sm sm:text-base">{label}</p>
    </motion.div>
  );
};

const PhilosophyCard: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 32, className: 'text-accent-blue' };
    switch (iconName) {
      case 'TrendingUp':
        return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
      case 'Shield':
        return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
      case 'Lock':
        return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
      case 'Code':
        return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10 }}
      className="p-6 rounded-xl border border-card-border bg-card-bg hover:bg-slate-50 transition-all group cursor-pointer shadow-sm hover:shadow-md"
    >
      <div className="mb-4 p-3 w-fit rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
        {getIcon(icon)}
      </div>
      <h3 className="text-lg font-bold text-primary-dark mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Title */}
          <div className="text-center space-y-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold text-primary-dark"
            >
              {portfolioData.about.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              {portfolioData.about.description}
            </motion.p>
          </div>

          {/* Statistics */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {portfolioData.about.stats.map((stat, idx) => (
              <StatCounter
                key={idx}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </motion.div>

          {/* Philosophy Cards */}
          <div>
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-primary-dark mb-8 text-center"
            >
              Engineering Philosophy
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {portfolioData.philosophy.map((item, idx) => (
                <PhilosophyCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
