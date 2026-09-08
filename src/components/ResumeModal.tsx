import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Linkedin, Github, FileText, Eye } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'preview'>('preview');

  const handlePrint = () => {
    window.print();
  };

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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 z-10 my-4 sm:my-6 max-h-[92vh] flex flex-col overflow-hidden"
          >
            {/* Top Toolbar */}
            <div className="p-3.5 sm:px-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-accent-blue" />
                  <span className="text-sm font-bold text-primary-dark truncate max-w-[200px] sm:max-w-none">
                    Mihir_Singh_Chouhan_Resume.pdf
                  </span>
                </div>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-slate-200/80 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('pdf')}
                    className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === 'pdf'
                        ? 'bg-white text-primary-dark shadow-2xs'
                        : 'text-text-secondary hover:text-primary-dark'
                    }`}
                  >
                    <Eye size={12} />
                    <span>Original PDF</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === 'preview'
                        ? 'bg-white text-primary-dark shadow-2xs'
                        : 'text-text-secondary hover:text-primary-dark'
                    }`}
                  >
                    <FileText size={12} />
                    <span>Structured CV</span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {/* Direct PDF Download */}
                <a
                  href="/Mihir_Singh_Chouhan_Resume.pdf"
                  download="Mihir_Singh_Chouhan_Resume.pdf"
                  className="px-3.5 py-1.5 rounded-lg bg-accent-blue hover:bg-orange-600 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs hover:shadow-md"
                >
                  <Download size={14} />
                  <span>Download CV</span>
                </a>

                {/* Open in new tab */}
                <a
                  href="/Mihir_Singh_Chouhan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-primary-dark transition-all items-center gap-1.5"
                  title="Open PDF in new tab"
                >
                  <ExternalLink size={13} />
                  <span>Open Full PDF</span>
                </a>

                {/* Print button */}
                <button
                  onClick={handlePrint}
                  className="hidden md:flex p-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-text-secondary hover:text-primary-dark transition-colors"
                  title="Print"
                  aria-label="Print resume"
                >
                  <Printer size={15} />
                </button>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-text-secondary hover:text-primary-dark transition-colors ml-1"
                  aria-label="Close resume"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Mobile Tab Switcher */}
            <div className="flex sm:hidden border-b border-slate-200 bg-slate-100 p-1 text-xs">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`flex-1 py-1.5 rounded-md font-semibold text-center ${
                  activeTab === 'pdf' ? 'bg-white text-primary-dark shadow-2xs' : 'text-text-secondary'
                }`}
              >
                Original PDF
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex-1 py-1.5 rounded-md font-semibold text-center ${
                  activeTab === 'preview' ? 'bg-white text-primary-dark shadow-2xs' : 'text-text-secondary'
                }`}
              >
                Structured CV
              </button>
            </div>

            {/* Content Area */}
            {activeTab === 'pdf' ? (
              <div className="flex-1 p-2 sm:p-4 bg-slate-100 overflow-hidden flex flex-col">
                <iframe
                  src="/Mihir_Singh_Chouhan_Resume.pdf#toolbar=1"
                  className="w-full flex-1 min-h-[65vh] rounded-xl border border-slate-300 shadow-inner bg-white"
                  title="Mihir Singh Chouhan Resume PDF"
                />
                <div className="p-2 text-center text-xs text-text-secondary flex justify-center items-center gap-3">
                  <span>Having trouble viewing the PDF above?</span>
                  <a
                    href="/Mihir_Singh_Chouhan_Resume.pdf"
                    download="Mihir_Singh_Chouhan_Resume.pdf"
                    className="text-accent-blue font-semibold hover:underline flex items-center gap-1"
                  >
                    <Download size={13} />
                    Click here to download directly
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-primary-dark text-sm leading-relaxed">
                {/* Header */}
                <div className="border-b border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-dark">
                      {portfolioData.personal.name}
                    </h1>
                    <p className="text-base font-semibold text-accent-blue mt-0.5">
                      {portfolioData.personal.title} — Java & Spring Boot Specialist
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      {portfolioData.personal.yearsExperience} Experience • Backend Architecture • Distributed Systems
                    </p>
                  </div>
                  <div className="text-xs space-y-1 text-text-secondary sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Mail size={13} className="text-accent-blue" />
                      <span>{portfolioData.personal.email}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Linkedin size={13} className="text-accent-blue" />
                      <a
                        href={portfolioData.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-accent-blue"
                      >
                        linkedin.com/in/mihir-singh-chouhan
                      </a>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Github size={13} className="text-accent-blue" />
                      <a
                        href={portfolioData.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-accent-blue"
                      >
                        github.com/Mihir-Singh-Chouhan
                      </a>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <WhatsAppIcon size={13} className="text-accent-blue" />
                      <a
                        href={portfolioData.personal.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-accent-blue"
                      >
                        +91-9424766602 (WhatsApp)
                      </a>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin size={13} className="text-accent-blue" />
                      <span>{portfolioData.personal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-2">
                    Professional Summary
                  </h2>
                  <p className="text-text-secondary">
                    Full Stack Developer with {portfolioData.personal.yearsExperience} of production experience building scalable microservices architectures using Java, Spring Boot, Node.js, React, and cloud-native DevOps tools. Experienced in designing high-performance APIs for systems serving 10M+ users, implementing SOLID design principles, and maintaining 90%+ unit test coverage to ensure reliability and maintainability.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-2">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {portfolioData.skills.map((group, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-bold text-primary-dark">{group.category}: </span>
                        <span className="text-text-secondary">{group.items.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-3">
                    Professional Experience
                  </h2>
                  <div className="space-y-4">
                    {portfolioData.experience.map((exp, idx) => (
                      <div key={idx} className="border-l-2 border-orange-400 pl-4 space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                          <span className="font-bold text-primary-dark">
                            {exp.title} — <span className="text-accent-blue font-semibold">{exp.company}</span>
                          </span>
                          <span className="text-xs text-text-secondary font-medium">{exp.period}</span>
                        </div>
                        <p className="text-xs text-text-secondary italic">{exp.description}</p>
                        <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 pt-1">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-3">
                    Featured Projects
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {portfolioData.projects.map((proj, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-sm text-primary-dark">{proj.title}</h3>
                          <span className="text-[10px] font-semibold text-accent-blue px-2 py-0.5 rounded-full bg-orange-100">
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary">{proj.description}</p>
                        <div className="text-[11px] font-mono text-slate-600 bg-white p-1.5 rounded border border-slate-200">
                          {proj.architecture}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Achievements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-2">
                      Education
                    </h2>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                      <p className="font-bold text-primary-dark">
                        {portfolioData.education[0].institution}
                      </p>
                      <p className="text-accent-blue font-semibold">{portfolioData.education[0].degree}</p>
                      <p className="text-text-secondary">
                        CGPA: {portfolioData.education[0].cgpa} • Graduated {portfolioData.education[0].year}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-2">
                      Key Achievements
                    </h2>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                      {portfolioData.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                          <span className="font-medium text-primary-dark">{ach.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
