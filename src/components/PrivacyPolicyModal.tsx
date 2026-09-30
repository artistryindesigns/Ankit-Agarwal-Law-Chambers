import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalContent';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#141414] border border-neutral-700 shadow-2xl text-neutral-200">
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#181818]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-heading text-xl text-[#F5EFE6]">Privacy Policy & Data Standards 2026</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed text-justify">
          <p>
            <strong>Effective Date:</strong> January 1, 2026 (Updated under the Legal Practice Digital Privacy Compliance Act, 2026).
          </p>

          <h4 className="text-[#C5A059] font-semibold text-sm">1. Advocate-Client Privilege & Confidentiality</h4>
          <p>
            At {ADVOCATE_INFO.firmName}, safeguarding client information and sensitive legal inquiries is governed by the highest ethical standards of legal jurisprudence. Any communications submitted via our digital intake channels are treated with strict confidentiality under advocate-client privilege protocols.
          </p>

          <h4 className="text-[#C5A059] font-semibold text-sm">2. Information Collection</h4>
          <p>
            We collect only the information voluntarily provided by visitors—such as name, email address, telephone number, and case inquiry details—strictly for evaluating legal representation needs and responding to inquiries.
          </p>

          <h4 className="text-[#C5A059] font-semibold text-sm">3. Zero Third-Party Sale or Tracking</h4>
          <p>
            We do not sell, rent, monetize, or disclose visitor data to third-party marketing brokers or behavioral advertising networks. In full adherence to the 2026 Privacy Norms, analytical logging is minimized strictly to site operational security.
          </p>

          <h4 className="text-[#C5A059] font-semibold text-sm">4. Data Retention & Security Measures</h4>
          <p>
            Inquiry submissions are stored in encrypted environments. If formal engagement does not follow an initial inquiry, communication records are securely purged in accordance with statutory retention schedules.
          </p>

          <h4 className="text-[#C5A059] font-semibold text-sm">5. Contact Information</h4>
          <p>
            For privacy inquiries or data rights requests, contact Chambers at {ADVOCATE_INFO.email} or by post at {ADVOCATE_INFO.address}.
          </p>
        </div>

        <div className="px-6 py-3 bg-[#181818] border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-neutral-200 hover:bg-white text-black text-xs font-semibold uppercase tracking-wider"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
