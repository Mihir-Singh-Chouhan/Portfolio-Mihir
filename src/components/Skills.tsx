import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

const SkillBadge: React.FC<{ skill: string; index: number }> = ({
  skill,
}) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group"
    >
      <div className="px-4 py-2 rounded-lg border border-card-border bg-card-bg hover:border-accent-blue hover:bg-orange-50 transition-all cursor-pointer shadow-sm hover:shadow-md">
        <span className="text-sm font-medium text-text-secondary group-hover:text-accent-blue transition-colors">
          {skill}
        </span>
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<{
  category: string;
  skills: string[];
  index: number;
}> = ({ category, skills }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="space-y-4"
    >
      <div>
        <h3 className="text-lg font-bold text-accent-blue mb-3 uppercase tracking-wider">
          {category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <SkillBadge
              key={skillIndex}
              skill={skill}
              index={skillIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-text-secondary">
              Languages, frameworks, and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {portfolioData.skills.map((skillGroup, idx) => (
              <SkillCategory
                key={idx}
                category={skillGroup.category}
                skills={skillGroup.items}
                index={idx}
              />
            ))}
          </motion.div>

          {/* Proficiency Info */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 p-6 rounded-xl border border-card-border bg-card-bg text-center shadow-sm"
          >
            <p className="text-text-secondary">
              <span className="text-accent-blue font-semibold">Expert Level:</span> Java,
              Spring Boot, React, Microservices
            </p>
            <p className="text-text-secondary mt-2">
              <span className="text-accent-blue font-semibold">Proficient:</span> All
              listed technologies above
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
