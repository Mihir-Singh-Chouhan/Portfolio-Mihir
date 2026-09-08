import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...portfolioData.skills.map((s) => s.category)];

  const filteredGroups = portfolioData.skills
    .filter((group) => selectedCategory === 'All' || group.category === selectedCategory)
    .map((group) => {
      const filteredItems = group.items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      return { ...group, items: filteredItems };
    })
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-20 bg-secondary-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark mb-4">
              Technical Arsenal
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Interactive skill catalog for recruiters and engineering leads.
            </p>
          </motion.div>

          {/* Interactive Search & Filter Controls */}
          <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
              />
              <input
                type="text"
                placeholder="Search skills for your JD (e.g. Java, Kafka, React, Docker, Spring Boot)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-sm text-primary-dark placeholder:text-slate-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-accent-blue text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-text-secondary hover:border-accent-blue hover:text-primary-dark'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <AnimatePresence>
              {filteredGroups.length > 0 ? (
                filteredGroups.map((skillGroup) => (
                  <motion.div
                    key={skillGroup.category}
                    variants={staggerItem}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 rounded-2xl border border-card-border bg-card-bg shadow-sm space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h3 className="text-sm font-bold text-accent-blue uppercase tracking-wider">
                        {skillGroup.category}
                      </h3>
                      <span className="text-xs text-text-secondary font-mono">
                        {skillGroup.items.length} skill{skillGroup.items.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {skillGroup.items.map((skill, skillIdx) => {
                        const isCore = portfolioData.coreSkills.includes(skill);
                        return (
                          <motion.div
                            key={skillIdx}
                            whileHover={{ scale: 1.06, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 ${
                              isCore
                                ? 'bg-orange-50/70 border-accent-blue/40 text-accent-blue hover:bg-orange-100'
                                : 'bg-white border-slate-200 text-primary-dark hover:border-accent-blue/50'
                            }`}
                          >
                            {isCore && <Sparkles size={11} className="text-orange-500" />}
                            <span>{skill}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-text-secondary space-y-2">
                  <p className="text-base font-semibold">No skills matched "{searchQuery}"</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="text-xs text-accent-blue underline font-semibold"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Proficiency Info */}
          <motion.div
            variants={fadeInUp}
            className="p-5 sm:p-6 rounded-2xl border border-card-border bg-card-bg text-center shadow-sm space-y-1.5"
          >
            <p className="text-xs sm:text-sm text-text-secondary">
              <span className="text-accent-blue font-bold">Production Core:</span> Java, Spring Boot, Microservices, React, Redux, MySQL, REST APIs, Docker, Kafka
            </p>
            <p className="text-xs text-text-light">
              ⚡ Highlighted with sparkles = Core daily production competencies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
