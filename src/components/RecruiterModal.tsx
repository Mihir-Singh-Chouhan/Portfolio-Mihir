import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Download,
  Copy,
  Check,
  Linkedin,
  Github,
  Mail,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Clock,
  MapPin,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
  onOpenEmailModal?: (subject?: string, message?: string) => void;
}

const RecruiterModal: React.FC<RecruiterModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenEmailModal,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailRecruiter = () => {
    if (onOpenEmailModal) {
      onClose();
      onOpenEmailModal(
        'Interview / Opportunity: Java Full Stack Developer Role - Mihir Singh Chouhan',
        `Hi Mihir,\n\nI reviewed your portfolio and would like to discuss an engineering opportunity with you.\n\nBest regards,\n[Recruiter / Hiring Manager Name]`
      );
    } else {
      const subject = encodeURIComponent(`Interview / Opportunity: Java Full Stack Developer Role - Mihir Singh Chouhan`);
      const body = encodeURIComponent(
        `Hi Mihir,\n\nI reviewed your portfolio and would like to discuss an engineering opportunity with you.\n\nBest regards,\n[Recruiter / Hiring Manager Name]`
      );
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${subject}&body=${body}`, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-card-bg rounded-2xl border border-card-border shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Top Accent Header */}
            <div className="bg-gradient-to-r from-orange-500 via-accent-blue to-accent-purple p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                  <Sparkles size={13} className="text-yellow-300" />
                  15-Second Candidate Dossier
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/80 text-white text-xs font-semibold">
                  Active Candidate
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Mihir Singh Chouhan
              </h2>
              <p className="text-orange-100 text-sm sm:text-base mt-1">
                Java Full Stack Developer • Spring Boot & Microservices Specialist
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium mb-1">
                    <Briefcase size={14} className="text-accent-blue" />
                    Experience
                  </div>
                  <div className="text-base font-bold text-primary-dark">
                    {portfolioData.personal.yearsExperience}
                  </div>
                  <div className="text-xs text-text-secondary truncate">Digi Mantra Labs</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium mb-1">
                    <Clock size={14} className="text-emerald-500" />
                    Notice Period
                  </div>
                  <div className="text-base font-bold text-emerald-600">Immediate</div>
                  <div className="text-xs text-text-secondary">Open to Offers</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium mb-1">
                    <GraduationCap size={14} className="text-accent-purple" />
                    Education
                  </div>
                  <div className="text-base font-bold text-primary-dark">MCA (8.00)</div>
                  <div className="text-xs text-text-secondary truncate">Lovely Prof. Univ.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium mb-1">
                    <MapPin size={14} className="text-accent-blue" />
                    Location
                  </div>
                  <div className="text-base font-bold text-primary-dark">India</div>
                  <div className="text-xs text-text-secondary">Remote / Relocate</div>
                </div>
              </div>

              {/* Core Keyword Matcher (ATS Friendly) */}
              <div>
                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <span>ATS Keyword Match Checklist</span>
                  <span className="text-[11px] font-normal text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    High Production Match
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.coreSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-primary-dark flex items-center gap-1.5 shadow-2xs hover:border-accent-blue transition-colors"
                    >
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Executive Value Highlights */}
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-100">
                <h3 className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-2">
                  Why Mihir? (Key Engineering Proof Points)
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-text-secondary">
                  {portfolioData.recruiterDossier.topHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-blue font-bold mt-0.5">▪</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-card-border space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Email Recruiter */}
                  <button
                    onClick={handleEmailRecruiter}
                    className="flex-1 min-w-[160px] px-5 py-3 rounded-xl bg-accent-blue hover:bg-orange-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Mail size={16} />
                    <span>Send Interview Invite</span>
                  </button>

                  {/* Copy Email Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-primary-dark font-medium text-sm transition-all flex items-center gap-2 shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  {/* Resume Action: Preview and Direct PDF Download */}
                  {onOpenResume && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenResume();
                      }}
                      className="px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-primary-dark font-medium text-sm transition-all flex items-center gap-2 shadow-2xs"
                      title="Preview candidate interactive CV"
                    >
                      <ExternalLink size={16} />
                      <span>Preview CV</span>
                    </button>
                  )}

                  <a
                    href="/Mihir_Singh_Chouhan_Resume.pdf"
                    download="Mihir_Singh_Chouhan_Resume.pdf"
                    className="px-4 py-3 rounded-xl border border-accent-blue/40 bg-orange-50 hover:bg-orange-100 text-accent-blue font-semibold text-sm transition-all flex items-center gap-2 shadow-2xs"
                    title="Download candidate CV"
                  >
                    <Download size={16} />
                    <span>Download CV (PDF)</span>
                  </a>
                </div>

                {/* Secondary Links */}
                <div className="flex items-center justify-between pt-1 text-xs text-text-secondary">
                  <div className="flex items-center gap-4">
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent-blue hover:underline font-medium"
                    >
                      <Linkedin size={13} />
                      LinkedIn Profile
                      <ExternalLink size={11} />
                    </a>
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent-blue hover:underline font-medium"
                    >
                      <Github size={13} />
                      GitHub Profile
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  <span className="text-[11px] text-text-light hidden sm:inline">
                    Prefers: Remote / Hybrid / On-site
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RecruiterModal;
