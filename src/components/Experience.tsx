import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark mb-4">
              Experience
            </h2>
            <p className="text-text-secondary">
              My professional journey and key milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="relative"
              >
                {/* Timeline Dot and Line */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-accent-blue border-4 border-dark-secondary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  />
                  {idx < portfolioData.experience.length - 1 && (
                    <motion.div
                      className="w-1 bg-gradient-to-b from-accent-blue to-dark-border flex-1"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      style={{ originY: 0 }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  className="ml-12 p-6 rounded-lg border border-card-border bg-card-bg hover:border-accent-blue/50 transition-colors shadow-sm hover:shadow-md"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark">
                        {exp.title}
                      </h3>
                      <p className="text-accent-blue font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-text-secondary whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-text-primary mb-2">
                      Key Responsibilities:
                    </p>
                    <ul className="space-y-1">
                      {exp.responsibilities.slice(0, 5).map((resp, respIdx) => (
                        <motion.li
                          key={respIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: respIdx * 0.1 }}
                          className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-accent-blue mt-1">▪</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIdx * 0.05 }}
                        className="px-3 py-1 text-xs rounded-full border border-accent-blue/30 bg-blue-50 text-accent-blue font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
