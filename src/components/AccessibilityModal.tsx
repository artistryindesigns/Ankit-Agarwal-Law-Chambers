import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalContent';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#141414] border border-neutral-700 shadow-2xl text-neutral-200">
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#181818]">
          <h3 className="font-serif-heading text-xl text-[#F5EFE6]">Accessibility Statement</h3>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close Accessibility Statement"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed text-justify">
          <p>
            {ADVOCATE_INFO.firmName} is committed to ensuring digital accessibility for people with disabilities. We continually refine the user experience for everyone and apply relevant accessibility standards across our platform.
          </p>

          <h4 className="text-[#C5A059] font-semibold text-sm">Conformance Status</h4>
          <p>
            This website aims to conform with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with a wide array of visual, motor, auditory, and cognitive abilities.
          </p>

          <h4 className="text-[#C5A059] font-semibold text-sm">Measures Implemented</h4>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Clear semantic HTML structure with accessible navigation landmarks and high-contrast color ratios.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Full keyboard navigation with visible focus rings (`focus-visible`).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Descriptive alternative text for non-text visual elements and accessible form labels.</span>
            </li>
          </ul>

          <h4 className="text-[#C5A059] font-semibold text-sm">Feedback & Assistance</h4>
          <p>
            If you encounter any accessibility barriers while using our website or need assistance in accessing legal information, please contact our chambers directly at <a href={`mailto:${ADVOCATE_INFO.email}`} className="text-[#C5A059] underline">{ADVOCATE_INFO.email}</a> or call <a href={`tel:${ADVOCATE_INFO.phone}`} className="text-[#C5A059] underline">{ADVOCATE_INFO.displayPhone}</a>.
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
