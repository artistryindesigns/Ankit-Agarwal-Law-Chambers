import React from 'react';
import { PageId } from '../types';
import { ADVOCATE_INFO } from '../data/legalContent';
import { AnkitAgarwalLogo } from './AnkitAgarwalLogo';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDisclaimer: () => void;
  onOpenPrivacy: () => void;
  onOpenAccessibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDisclaimer,
  onOpenPrivacy,
  onOpenAccessibility,
}) => {
  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181715] text-[#A39E96] font-sans-body pt-8 sm:pt-14 pb-9 sm:pb-12 -mt-px">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* MOBILE VIEW FOOTER (< 640px) */}
        <div className="sm:hidden space-y-5">
          {/* Row 1: Official Logo + Justified Wordmark */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="inline-flex items-center text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 cursor-pointer"
            aria-label={`${ADVOCATE_INFO.firmName} Home`}
          >
            <AnkitAgarwalLogo size="sm" theme="light" />
          </button>

          {/* Row 2: Disclaimer & Privacy Policy */}
          <div className="flex items-center gap-6 text-[13px] text-[#A39E96] font-normal">
            <button
              type="button"
              onClick={onOpenDisclaimer}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

          {/* Row 3: Copyright & Non-Solicitation Notice */}
          <p className="text-[13px] text-[#8C867E] leading-relaxed font-normal">
            © 2026 Ankit Agarwal Law Chambers. Not legal advice; not a solicitation of work.
          </p>
        </div>

        {/* TABLET & DESKTOP VIEW FOOTER (>= 640px) */}
        <div className="hidden sm:block">
          {/* Top 3-Column Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-8 md:gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-[#2E2C28] items-start">
            
            {/* Column 1: Official Logo & Location Subtitle */}
            <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-4">
              <button
                type="button"
                onClick={handleLogoClick}
                className="inline-flex items-center text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 cursor-pointer"
                aria-label={`${ADVOCATE_INFO.firmName} Home`}
              >
                <AnkitAgarwalLogo size="sm" theme="light" />
              </button>

              <p className="text-xs sm:text-[13px] text-[#A39E96] font-normal tracking-wide">
                Advocate, Tinsukia, Assam
              </p>
            </div>

            {/* Column 2: Chambers Coordinates */}
            <div className="sm:col-span-1 md:col-span-5 lg:col-span-5 space-y-3.5">
              <h3
                className="text-base sm:text-[18px] text-[#F3EFEA] font-normal leading-snug"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Agarwal Law Chambers
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#A39E96] font-normal">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8C867E] shrink-0 mt-0.5 stroke-[1.6]" />
                  <span className="leading-relaxed">
                    Bordoloi Nagar, Bhaben Gogoi Path, Near Namghar Road, Tinsukia, Assam. 786125
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#8C867E] shrink-0 stroke-[1.6]" />
                  <a href="tel:+918876154321" className="hover:text-white transition-colors">
                    +91 8876154321
                  </a>
                </li>

                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#8C867E] shrink-0 stroke-[1.6]" />
                  <span>[EMAIL]</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Information Links */}
            <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 space-y-3.5 md:justify-self-end lg:justify-self-start w-full">
              <h3
                className="text-base sm:text-[18px] text-[#F3EFEA] font-normal leading-snug"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Information
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#A39E96] font-normal">
                <li>
                  <button
                    type="button"
                    onClick={onOpenDisclaimer}
                    className="text-left hover:text-white transition-colors cursor-pointer"
                  >
                    Disclaimer
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-left hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={onOpenAccessibility}
                    className="text-left hover:text-white transition-colors cursor-pointer"
                  >
                    Legal Information
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Non-Solicitation Notice */}
          <div className="pt-6 sm:pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-[#8C867E]">
            <div>
              © 2026 Ankit Agarwal Law Chambers
            </div>

            <div className="sm:text-right leading-relaxed">
              The information on this website is not legal advice and is not a solicitation of work.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
