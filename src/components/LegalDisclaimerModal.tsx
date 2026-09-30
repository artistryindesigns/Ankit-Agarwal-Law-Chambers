import React, { useState, useEffect } from 'react';
import { COMPLIANCE_DISCLAIMER_2026 } from '../data/legalContent';
import { AnkitAgarwalLogo } from './AnkitAgarwalLogo';

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onAgree: () => void;
  isMandatoryIntro?: boolean;
}

export const LegalDisclaimerModal: React.FC<LegalDisclaimerModalProps> = ({
  isOpen,
  onAgree,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasExited, setHasExited] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setIsFadingOut(false);
      setHasExited(false);
    }
  }, [isOpen]);

  if (!isOpen && !mounted) return null;

  const handleProceedClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onAgree();
      setMounted(false);
      setIsFadingOut(false);
    }, 800);
  };

  const handleExitClick = () => {
    setHasExited(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-heading"
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-[2px] transition-opacity duration-700 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div
        className={`relative w-full max-w-[540px] max-h-[92vh] flex flex-col bg-[#FAF7F2] border border-[#D8D0C5] shadow-2xl transition-all duration-700 ease-out overflow-hidden ${
          isFadingOut
            ? 'opacity-0 scale-[0.97] -translate-y-2 pointer-events-none'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        <div className="overflow-y-auto px-5 sm:px-8 py-5 sm:py-6">
          {/* Official Chamber Logo with Ankit Agarwal Law Chambers text right next to it */}
          <div className="mb-3.5 sm:mb-4 flex items-center gap-2.5">
            <AnkitAgarwalLogo size="sm" theme="dark" />
            <div className="flex flex-col justify-center leading-tight">
              <span
                className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#141413]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                ANKIT AGARWAL
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-normal uppercase tracking-[0.26em] text-[#4A4640] mt-0.5">
                LAW CHAMBERS
              </span>
            </div>
          </div>

          {hasExited ? (
            <div className="py-4 space-y-3.5">
              <h2
                className="text-xl sm:text-2xl font-normal text-[#141413]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Session Ended
              </h2>
              <p className="text-xs sm:text-[13px] text-[#3A3632] leading-relaxed">
                You have chosen to exit the website of Ankit Agarwal Law Chambers.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setHasExited(false)}
                  className="px-6 py-2.5 bg-[#141413] hover:bg-[#2B2927] text-white text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer"
                >
                  Return to Disclaimer
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Heading */}
              <h2
                id="disclaimer-heading"
                className="text-xl sm:text-2xl font-normal text-[#141413] mb-2.5 sm:mb-3 leading-snug"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Disclaimer
              </h2>

              {/* Lead Paragraph */}
              <p className="text-[#181715] text-xs sm:text-[13px] leading-[1.55] mb-2.5 sm:mb-3 font-normal">
                {COMPLIANCE_DISCLAIMER_2026.leadParagraph}
              </p>

              {/* Bulleted Points matching the exact new draft */}
              <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 text-[#3A3632] text-xs sm:text-[13px] leading-[1.5] mb-5">
                {COMPLIANCE_DISCLAIMER_2026.bulletPoints.map((point, index) => (
                  <li key={index} className="pl-0.5">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Action Buttons: I AGREE and EXIT */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <button
                  type="button"
                  onClick={handleProceedClick}
                  disabled={isFadingOut}
                  autoFocus
                  className="px-6 sm:px-8 py-2.5 bg-[#141413] hover:bg-[#292826] text-white text-[11px] font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer disabled:opacity-50"
                >
                  I AGREE
                </button>

                <button
                  type="button"
                  onClick={handleExitClick}
                  disabled={isFadingOut}
                  className="px-6 sm:px-8 py-2.5 bg-white hover:bg-neutral-100 text-[#141413] border border-[#141413] text-[11px] font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer disabled:opacity-50"
                >
                  EXIT
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
