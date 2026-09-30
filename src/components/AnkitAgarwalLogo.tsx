import React from 'react';
import officialLogo from '../assets/images/Ankit Agarwal Law Chambers Logo.png';
import officialLogoLight from '../assets/images/ankit_agarwal_law_chambers_logo_light.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
  showText?: boolean;
  variant?: 'inline' | 'stacked' | 'icon';
}

/**
 * Official Ankit Agarwal Law Chambers Logo Component
 *
 * Directly renders the authentic user-provided logo emblem alongside
 * the justified "ANKIT AGARWAL / ─── LAW CHAMBERS ───" wordmark lockup.
 */
export const AnkitAgarwalLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'sm',
  theme = 'dark',
  showText = true,
}) => {
  const isLight = theme === 'light';

  // Compact, all-device-friendly sizing
  const sizeStyles = {
    sm: 'h-7 sm:h-8 lg:h-9 max-h-9',
    md: 'h-12 sm:h-14 max-h-14',
    lg: 'h-20 sm:h-24 max-h-24',
    xl: 'h-32 sm:h-40 max-h-40',
  }[size];

  // Select the appropriate transparent asset based on background theme
  const logoSrc = isLight ? officialLogoLight : officialLogo;

  return (
    <div
      className={`inline-flex items-center gap-2 bg-transparent select-none p-0 m-0 ${className}`}
      style={{ backgroundColor: 'transparent' }}
    >
      <img
        src={logoSrc}
        alt="Ankit Agarwal Law Chambers Logo"
        className={`${sizeStyles} w-auto object-contain bg-transparent transition-transform duration-200 group-hover:scale-[1.02] filter drop-shadow-none shrink-0`}
        style={{
          backgroundColor: 'transparent',
          imageRendering: 'auto',
        }}
        loading="eager"
        decoding="async"
      />

      {showText && (
        <div
          className="inline-flex flex-col justify-center"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {/* Top Line: ANKIT AGARWAL */}
          <span
            className={`text-[10px] sm:text-[10.5px] lg:text-[11.5px] font-semibold uppercase tracking-[0.11em] leading-none whitespace-nowrap ${
              isLight ? 'text-[#F3EFEA]' : 'text-[#141413]'
            }`}
          >
            ANKIT AGARWAL
          </span>

          {/* Bottom Justified Line: ─── LAW CHAMBERS ─── */}
          <div className="w-full flex items-center gap-1 sm:gap-1.5 mt-1">
            <span
              className={`flex-1 h-[1px] ${
                isLight ? 'bg-[#A39E96]/80' : 'bg-[#141413]/70'
              }`}
              aria-hidden="true"
            />
            <span
              className={`text-[5.5px] sm:text-[6px] lg:text-[6.5px] font-normal uppercase tracking-[0.18em] leading-none whitespace-nowrap ${
                isLight ? 'text-[#C8C2B8]' : 'text-[#2B2927]'
              }`}
            >
              LAW CHAMBERS
            </span>
            <span
              className={`flex-1 h-[1px] ${
                isLight ? 'bg-[#A39E96]/80' : 'bg-[#141413]/70'
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnkitAgarwalLogo;
