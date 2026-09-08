import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Lock, Boxes, Code2 } from 'lucide-react';
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
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7 text-accent-blue group-hover:scale-110 transition-transform duration-300";
    switch (iconName.toLowerCase()) {
      case 'layers':
      case 'scalable':
      case 'trendingup':
        return <Layers className={iconClass} />;
      case 'shieldcheck':
      case 'reliable':
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      case 'lock':
      case 'secure':
        return <Lock className={iconClass} />;
      case 'boxes':
      case 'maintainable':
      case 'code':
        return <Boxes className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, boxShadow: '0 12px 28px rgba(249, 115, 22, 0.12)' }}
      className="p-6 rounded-xl border border-card-border bg-card-bg hover:border-accent-blue/40 transition-all group cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
    >
      <div>
        <div className="mb-4 p-3.5 w-fit rounded-xl bg-orange-50 border border-orange-200/60 group-hover:bg-orange-100 group-hover:border-accent-blue/40 transition-all duration-300 shadow-xs">
          {getIcon(icon)}
        </div>
        <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-accent-blue transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
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
