import React from 'react';

interface PolkaDotTextureProps {
  /**
   * Layout placement:
   * - 'continuous-flanks': Runs down the full height along both the left & right sides (used in What Sets Us Apart)
   * - 'top-center-and-bottom': Polka dots centered at the top and below the bottom (used in Testimonials)
   * - 'top-center': Centered polka dot cluster along the top edge
   * - 'bottom-center': Centered polka dot band along the bottom edge
   * - 'soft-vignette': Subtle outer perimeter framing
   */
  variant?: 
    | 'continuous-flanks' 
    | 'top-center-and-bottom'
    | 'top-center'
    | 'bottom-center'
    | 'top-both-sides' 
    | 'bottom-both-sides' 
    | 'diagonal-continuation'
    | 'left-and-right'
    | 'soft-vignette';
  /**
   * Opacity of the polka dots (defaults to 0.20 / 20% visibility as requested)
   */
  opacity?: number;
  /**
   * Dot color (defaults to dark charcoal on #C8C0B5)
   */
  dotColor?: string;
  /**
   * Dot radius in pixels (default: 1.5)
   */
  dotRadius?: number;
  /**
   * Grid gap spacing in pixels (default: 20)
   */
  spacing?: number;
  className?: string;
}

/**
 * Architectural Polka Dot Pattern Overlay
 * Specifically styled for warm sand (#C8C0B5) sections.
 * Supports continuous side flanks as well as alternating top-center & below-bottom arrangements.
 */
export const PolkaDotTexture: React.FC<PolkaDotTextureProps> = ({
  variant = 'continuous-flanks',
  opacity = 0.20,
  dotColor = '#181715',
  dotRadius = 1.5,
  spacing = 20,
  className = '',
}) => {
  const patternId = React.useId().replace(/:/g, '_');

  // Specialized dual-layer layout for top-center & below-bottom (Testimonials)
  if (variant === 'top-center-and-bottom') {
    return (
      <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
        {/* Top Center Polka Dot Accent */}
        <div
          className="absolute top-0 inset-x-0 w-full h-72 sm:h-88 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 65% 260px at 50% 0%, #000 0%, rgba(0,0,0,0.65) 50%, transparent 85%)',
            maskImage: 'radial-gradient(ellipse 65% 260px at 50% 0%, #000 0%, rgba(0,0,0,0.65) 50%, transparent 85%)',
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
            <defs>
              <pattern id={`${patternId}_top`} width={spacing} height={spacing} patternUnits="userSpaceOnUse">
                <circle cx={spacing / 2} cy={spacing / 2} r={dotRadius} fill={dotColor} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId}_top)`} />
          </svg>
        </div>

        {/* Below Bottom Polka Dot Accent */}
        <div
          className="absolute bottom-0 inset-x-0 w-full h-72 sm:h-88 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 75% 260px at 50% 100%, #000 0%, rgba(0,0,0,0.65) 50%, transparent 85%)',
            maskImage: 'radial-gradient(ellipse 75% 260px at 50% 100%, #000 0%, rgba(0,0,0,0.65) 50%, transparent 85%)',
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
            <defs>
              <pattern id={`${patternId}_btm`} width={spacing} height={spacing} patternUnits="userSpaceOnUse">
                <circle cx={spacing / 2} cy={spacing / 2} r={dotRadius} fill={dotColor} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId}_btm)`} />
          </svg>
        </div>
      </div>
    );
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'top-center':
        return {
          wrapper: 'absolute top-0 inset-x-0 w-full h-72 sm:h-88 pointer-events-none overflow-hidden z-0',
          mask: 'radial-gradient(ellipse 65% 260px at 50% 0%, #000 0%, rgba(0,0,0,0.65) 50%, transparent 85%)',
        };

      case 'bottom-center':
        return {
          wrapper: 'absolute bottom-0 inset-x-0 w-full h-72 sm:h-88 pointer-events-none overflow-hidden z-0',
          mask: 'radial-gradient(ellipse 75% 260px at 50% 100%, #000 0%, rgba(0,0,0,0.65) 50%, transparent 85%)',
        };

      // Continuous framing running down both left & right flanks (What Sets Us Apart)
      case 'continuous-flanks':
      case 'left-and-right':
      default:
        return {
          wrapper: 'absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0',
          mask: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 12%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.85) 88%, rgba(0,0,0,1) 100%)',
        };
    }
  };

  const { wrapper, mask } = getVariantStyles();

  return (
    <div
      className={`${wrapper} ${className}`}
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id={patternId}
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            {/* Architectural micro dot */}
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={dotRadius}
              fill={dotColor}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};
