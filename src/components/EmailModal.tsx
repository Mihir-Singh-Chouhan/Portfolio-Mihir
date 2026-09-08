import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mail,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Phone,
  Send,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialMessage?: string;
}

const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'Opportunity Discussion / Java Full Stack Developer Role',
  initialMessage = `Hi Mihir,\n\nI came across your portfolio and was impressed by your experience with Java, Spring Boot, and Microservices architectures.\n\nWe would like to discuss an engineering opportunity with you.\n\nBest regards,\n[Your Name / Company]`,
}) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState(initialMessage);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  useEffect(() => {
    setSubject(initialSubject);
    setMessage(initialMessage);
  }, [initialSubject, initialMessage, isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getFullBody = () => {
    let body = message;
    if (senderName || senderEmail) {
      body += `\n\n---\nFrom: ${senderName || 'Anonymous'} (${senderEmail || 'No email provided'})`;
    }
    return body;
  };

  const openGmailWeb = () => {
    const encSub = encodeURIComponent(subject);
    const encBody = encodeURIComponent(getFullBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${encSub}&body=${encBody}`;
    window.open(gmailUrl, '_blank');
  };

  const openDefaultMail = () => {
    const encSub = encodeURIComponent(subject);
    const encBody = encodeURIComponent(getFullBody());
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${encSub}&body=${encBody}`;
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Mihir, I saw your portfolio and would like to discuss a software engineering opportunity.`
    );
    window.open(`https://wa.me/919424766602?text=${text}`, '_blank');
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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl bg-card-bg rounded-2xl border border-card-border shadow-2xl overflow-hidden z-10 my-6"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-accent-blue p-5 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1">
                  <Sparkles size={11} className="text-yellow-300" />
                  Direct Connect
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold">Contact Mihir</h2>
              <p className="text-orange-100 text-xs sm:text-sm mt-0.5">
                Send an interview invite, discussion request, or message.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-5 max-h-[78vh] overflow-y-auto">
              {/* Quick Launch Buttons (Solves the issue where mailto doesn't open) */}
              <div>
                <label className="text-xs font-bold text-text-secondary uppercase tracking-wider block mb-2">
                  Choose how to connect:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Gmail Web Compose */}
                  <button
                    onClick={openGmailWeb}
                    className="p-3 rounded-xl bg-orange-50 hover:bg-orange-100 border border-accent-blue/30 text-accent-blue font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs group"
                  >
                    <Mail size={16} className="group-hover:scale-110 transition-transform" />
                    <span>Open with Gmail Web</span>
                    <ExternalLink size={12} className="opacity-70" />
                  </button>

                  {/* WhatsApp */}
                  <button
                    onClick={openWhatsApp}
                    className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-2xs group"
                  >
                    <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
                    <span>Chat on WhatsApp</span>
                    <ExternalLink size={12} className="opacity-70" />
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  {/* Default Mail App */}
                  <button
                    onClick={openDefaultMail}
                    className="flex-1 py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs text-text-secondary font-medium transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send size={13} />
                    <span>Open Default Mail App (Outlook/Apple)</span>
                  </button>

                  {/* Copy Email */}
                  <button
                    onClick={handleCopyEmail}
                    className="py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs text-text-secondary font-medium transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Message Composer / Preview */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Message Preview / Template
                  </label>
                  <span className="text-[11px] text-text-light">
                    Editable before sending
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name (optional)"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email (optional)"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject line"
                    className="w-full px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent-blue"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent-blue leading-relaxed resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="text-xs text-text-secondary">
                    Recipient: <span className="font-mono text-accent-blue font-semibold">{portfolioData.personal.email}</span>
                  </div>
                  <button
                    onClick={openGmailWeb}
                    className="px-4 py-2 rounded-lg bg-accent-blue hover:bg-orange-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Mail size={14} />
                    <span>Send via Gmail</span>
                  </button>
                </div>
              </div>

              {/* Direct Info */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-text-secondary flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <Phone size={13} className="text-accent-blue" />
                  <span>Call/WhatsApp: <strong className="text-primary-dark">+91-9424766602</strong></span>
                </div>
                <span>Location: India (Open to Remote / Relocation)</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;
