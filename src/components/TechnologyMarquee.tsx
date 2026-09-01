import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const TechnologyMarquee: React.FC = () => {
  const technologies = portfolioData.technologies;
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="bg-secondary-bg border-y border-card-border overflow-hidden">
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-text-secondary tracking-widest">
            TECHNOLOGIES I WORK WITH
          </h3>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary-bg to-transparent z-10" />

          {/* Marquee */}
          <motion.div
            className="flex gap-4 pb-4"
            animate={{ x: [-100, -100 - (technologies.length * 150)] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            onHoverStart={() => {
              // Pause animation on hover
            }}
          >
            {duplicatedTechs.map((tech, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-card-border bg-card-bg text-text-secondary text-sm font-medium whitespace-nowrap hover:border-accent-blue hover:text-accent-blue transition-colors cursor-pointer shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, borderColor: '#F97316' }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyMarquee;
