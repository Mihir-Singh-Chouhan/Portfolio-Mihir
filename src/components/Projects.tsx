import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Layers, Copy, Check, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: (typeof portfolioData.projects)[0];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyArchitecture = () => {
    if (project.architecture) {
      navigator.clipboard.writeText(`${project.title} Architecture: ${project.architecture}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDiscussProject = () => {
    const subject = encodeURIComponent(`Discussion: Architecture & Tech Stack of ${project.title}`);
    const body = encodeURIComponent(
      `Hi Mihir,\n\nI was reviewing the ${project.title} project on your portfolio and would like to discuss the architecture and implementation details.\n\nBest regards,\n`
    );
    window.open(`mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const archNodes = project.architecture ? project.architecture.split('→').map((s) => s.trim()) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-card-bg rounded-2xl border border-card-border shadow-2xl p-6 sm:p-8 z-10 my-6 max-h-[88vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors text-text-secondary"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs text-accent-blue font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-orange-50 border border-accent-blue/20">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mt-3">
                  {project.title}
                </h2>
              </div>

              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {/* Visual Architecture Flow Diagram */}
              {archNodes.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-primary-dark uppercase tracking-wider flex items-center gap-1.5">
                      <Layers size={14} className="text-accent-blue" />
                      <span>Distributed Architecture Flow</span>
                    </h3>
                    <button
                      onClick={handleCopyArchitecture}
                      className="text-xs text-accent-blue hover:text-orange-600 font-medium flex items-center gap-1 transition-colors"
                      title="Copy architecture flow"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-emerald-500" />
                          <span className="text-emerald-500 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Flow</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Flow pipeline nodes */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 overflow-x-auto">
                    <div className="flex items-center gap-2 min-w-max">
                      {archNodes.map((node, idx) => (
                        <React.Fragment key={idx}>
                          <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono font-medium text-primary-dark shadow-2xs">
                            {node}
                          </div>
                          {idx < archNodes.length - 1 && (
                            <ArrowRight size={14} className="text-accent-blue shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-bold text-primary-dark mb-3 uppercase tracking-wider">
                  Technologies Utilized
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-lg border border-accent-blue/30 bg-orange-50 text-accent-blue font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-xs font-bold text-primary-dark mb-3 uppercase tracking-wider">
                  Key Production Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-accent-blue mt-0.5 font-bold">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleDiscussProject}
                  className="px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-sm"
                >
                  <Mail size={15} />
                  <span>Discuss This Project</span>
                </button>
                <span className="text-xs text-text-secondary">
                  🔒 Enterprise Client Platform
                </span>
              </div>
            </div>
          </motion.div>
        </div>
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
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer h-full"
    >
      <div className="relative rounded-2xl border border-card-border bg-card-bg overflow-hidden hover:border-accent-blue/50 transition-all p-6 sm:p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-lg">
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-accent-blue to-accent-purple transition-opacity pointer-events-none" />

        <div className="relative z-10 space-y-4">
          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span className="inline-block text-xs font-bold text-accent-blue uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-text-light font-mono group-hover:text-accent-blue transition-colors flex items-center gap-1">
              <span>Inspect</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-primary-dark group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-xs rounded-md border border-accent-blue/20 bg-orange-50 text-accent-blue font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 text-xs text-text-secondary">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="relative z-10 pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-text-secondary">
          <span className="font-mono text-[11px] truncate max-w-[240px]">
            {project.architecture ? 'Event-Driven Microservices' : 'Full Stack Application'}
          </span>
          <span className="text-accent-blue font-semibold group-hover:underline flex items-center gap-1">
            View Details
            <ArrowRight size={13} />
          </span>
        </div>
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
