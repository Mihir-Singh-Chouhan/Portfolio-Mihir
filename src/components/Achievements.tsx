import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';
import { Star, TrendingUp } from 'lucide-react';

const AchievementCard: React.FC<{
  title: string;
  source: string;
}> = ({ title, source }) => {
  const getIcon = (source: string) => {
    if (source.includes('HackerRank')) {
      return <Star className="w-6 h-6 text-accent-blue" />;
    }
    return <TrendingUp className="w-6 h-6 text-accent-blue" />;
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)' }}
      className="p-6 rounded-lg border border-card-border bg-card-bg hover:border-accent-blue/50 transition-all shadow-sm hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 rounded-lg bg-blue-100"
        >
          {getIcon(source)}
        </motion.div>
        <div className="flex-1">
          <h3 className="font-bold text-primary-dark mb-1">{title}</h3>
          <p className="text-sm text-accent-blue">{source}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-primary-bg">
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
              Always learning. Always building.
            </h2>
            <p className="text-lg text-text-secondary">
              Achievements and milestones
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioData.achievements.map((achievement, idx) => (
              <AchievementCard
                key={idx}
                title={achievement.title}
                source={achievement.source}
              />
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 p-8 rounded-xl border border-card-border bg-card-bg text-center shadow-sm"
          >
            <h3 className="text-xl font-bold text-primary-dark mb-2">
              {portfolioData.education[0].institution}
            </h3>
            <p className="text-accent-blue font-semibold mb-2">
              {portfolioData.education[0].degree}
            </p>
            <p className="text-text-secondary">
              CGPA: {portfolioData.education[0].cgpa} • Graduated{' '}
              {portfolioData.education[0].year}
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-6 text-center">
              Certifications
            </h3>
            <div className="space-y-3">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="p-4 rounded-lg border border-card-border bg-card-bg hover:border-accent-blue/50 transition-colors shadow-sm hover:shadow-md"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="font-semibold text-primary-dark">{cert.title}</p>
                      <p className="text-sm text-accent-blue">{cert.issuer}</p>
                    </div>
                    {cert.date && (
                      <span className="text-sm text-text-secondary whitespace-nowrap">
                        {cert.date}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
