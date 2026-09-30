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
 * Directly renders the authentic user-provided logo from:
 * `src/assets/images/Ankit Agarwal Law Chambers Logo.png`
 *
 * Guarantees:
 * - 100% transparent background (no white box, no container borders).
 * - Sits seamlessly on #F3F3F3, #FFFFFF, dark backgrounds, etc.
 * - Perfectly sized for header, footer, and brand showcases.
 */
export const AnkitAgarwalLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'sm',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  // Sizing tuned for header and page elements
  const sizeStyles = {
    sm: 'h-10 sm:h-11 max-h-11',
    md: 'h-14 sm:h-16 max-h-16',
    lg: 'h-24 sm:h-28 max-h-28',
    xl: 'h-36 sm:h-44 max-h-44',
  }[size];

  // Select the appropriate transparent asset based on background theme
  const logoSrc = isLight ? officialLogoLight : officialLogo;

  return (
    <div
      className={`inline-flex items-center justify-center bg-transparent select-none p-0 m-0 ${className}`}
      style={{ backgroundColor: 'transparent' }}
    >
      <img
        src={logoSrc}
        alt="Ankit Agarwal Law Chambers Logo"
        className={`${sizeStyles} w-auto object-contain bg-transparent transition-transform duration-200 group-hover:scale-[1.02] filter drop-shadow-none`}
        style={{
          backgroundColor: 'transparent',
          imageRendering: 'auto',
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default AnkitAgarwalLogo;
