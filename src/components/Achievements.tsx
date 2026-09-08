import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';
import { Star, TrendingUp, ExternalLink, Award, CheckCircle } from 'lucide-react';

const AchievementCard: React.FC<{
  title: string;
  source: string;
  logo?: string;
  url?: string;
}> = ({ title, source, logo, url }) => {
  const [imgError, setImgError] = React.useState(false);

  const cardContent = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200/80 p-2 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
        {logo && !imgError ? (
          <img
            src={logo}
            alt={`${source} logo`}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-orange-50 flex items-center justify-center text-accent-blue">
            {source.includes('HackerRank') ? <Star className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1">
          <h3 className="font-bold text-primary-dark text-base sm:text-lg mb-1 leading-snug group-hover:text-accent-blue transition-colors">
            {title}
          </h3>
          {url && (
            <ExternalLink size={14} className="text-text-light group-hover:text-accent-blue transition-colors shrink-0 mt-1" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-text-secondary">
            {source}
          </span>
          {url && (
            <span className="text-[11px] text-accent-blue font-medium hidden sm:inline">
              View Verified Profile ↗
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(249, 115, 22, 0.12)' }}
      className="group p-5 sm:p-6 rounded-xl border border-card-border bg-card-bg hover:border-accent-blue/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full cursor-pointer"
          title={`Open ${title} on ${source}`}
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
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
                logo={achievement.logo}
                url={achievement.url}
              />
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="mt-12 p-6 sm:p-8 rounded-2xl border border-card-border bg-card-bg shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200/80 p-2 shadow-2xs flex items-center justify-center shrink-0">
              <img
                src={portfolioData.education[0].logo || "/images/lpu-logo.png"}
                alt={portfolioData.education[0].institution}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-dark">
                  {portfolioData.education[0].institution}
                </h3>
                {portfolioData.education[0].location && (
                  <span className="text-xs sm:text-sm font-medium text-text-secondary">
                    {portfolioData.education[0].location}
                  </span>
                )}
              </div>
              <p className="text-accent-blue font-semibold text-base sm:text-lg">
                {portfolioData.education[0].degree}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs sm:text-sm text-text-secondary">
                <span className="px-3 py-1 rounded-md bg-slate-100 font-medium">
                  CGPA: {portfolioData.education[0].cgpa}
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 font-medium">
                  Graduated {portfolioData.education[0].year}
                </span>
              </div>
            </div>
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
                  className="p-4 rounded-xl border border-card-border bg-card-bg hover:border-accent-blue/50 transition-colors shadow-sm hover:shadow-md"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-orange-50 text-accent-blue mt-0.5">
                        <Award size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-primary-dark">{cert.title}</p>
                        <p className="text-sm text-accent-blue font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {cert.date && (
                        <span className="text-xs text-text-secondary block whitespace-nowrap">
                          {cert.date}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium mt-1">
                        <CheckCircle size={12} />
                        Verified
                      </span>
                    </div>
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
