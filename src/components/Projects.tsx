import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: (typeof portfolioData.projects)[0];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:max-w-2xl md:-translate-x-1/2 md:-translate-y-1/2 z-50 overflow-y-auto"
          >
            <div className="bg-card-bg rounded-2xl border border-card-border p-8 shadow-xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={24} className="text-text-secondary" />
              </button>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-accent-blue font-semibold">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold text-primary-dark mt-2">
                    {project.title}
                  </h2>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold text-primary-dark mb-3 uppercase tracking-wider">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full border border-accent-blue/30 bg-orange-50 text-accent-blue font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-sm font-semibold text-primary-dark mb-3 uppercase tracking-wider">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-accent-blue mt-1.5 flex-shrink-0">
                          ▪
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture */}
                {project.architecture && (
                  <div>
                    <h3 className="text-sm font-semibold text-primary-dark mb-3 uppercase tracking-wider">
                      Architecture Overview
                    </h3>
                    <div className="p-4 rounded-lg bg-slate-50 border border-card-border font-mono text-xs text-text-secondary overflow-x-auto">
                      {project.architecture}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProjectCard: React.FC<{
  project: (typeof portfolioData.projects)[0];
  onClick: () => void;
}> = ({ project, onClick }) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl border border-card-border bg-card-bg overflow-hidden hover:border-accent-blue/50 transition-all p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-lg">
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-accent-blue to-accent-purple transition-opacity" />

        <div className="relative z-10 space-y-4">
          {/* Category Badge */}
          <span className="inline-block text-xs font-semibold text-accent-blue">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold text-primary-dark group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-full border border-accent-blue/20 bg-orange-50 text-accent-blue font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 text-xs text-text-secondary">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Arrow Icon */}
        <motion.div
          className="relative z-10 pt-4"
          animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-accent-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioData.projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark mb-4">
              Things I've built.
            </h2>
            <p className="text-lg text-text-secondary">
              Systems designed to solve real problems at scale.
            </p>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {portfolioData.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
