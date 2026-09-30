import React from 'react';

interface CurveProps {
  fillColor?: string;
  bgColor?: string;
  className?: string;
  inverted?: boolean;
  withPolkaDots?: boolean;
  /**
   * When true, the dark arch area is left transparent so the parent section's
   * background and ContourTexture lines flow all the way to the exact curve edge.
   */
  transparentArch?: boolean;
  /**
   * When true, renders the arch curving downward toward the left and right edges
   * (M0,90 C380,5 1060,5 1440,90 L1440,92 L0,92 Z).
   */
  downwardArch?: boolean;
}

/**
 * Signature architectural curve divider.
 * Supports `transparentArch` mode so background overlay curves inside dark sections
 * extend all the way to touch the exact edge of the black curve.
 */
export const CurvedDivider: React.FC<CurveProps> = ({
  fillColor = '#0A0B0C',
  bgColor = '#E1E1E1',
  className = '',
  inverted = false,
  withPolkaDots = false,
  transparentArch = false,
  downwardArch = false,
}) => {
  // Parallel curved polka dot rows following the black arch
  const curvedPolkaRows = [
    { offset: -14, opacity: 0.22 },
    { offset: -28, opacity: 0.20 },
    { offset: -42, opacity: 0.17 },
    { offset: -56, opacity: 0.14 },
    { offset: -70, opacity: 0.11 },
    { offset: -84, opacity: 0.08 },
    { offset: -98, opacity: 0.05 },
  ];

  if (inverted && withPolkaDots) {
    const baseY = 110;
    return (
      <div
        className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
        style={{ backgroundColor: transparentArch ? 'transparent' : bgColor }}
      >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 block"
        >
          {transparentArch ? (
            // Fill the upper region above the arch with bgColor so the lower arch stays transparent
            // allowing the parent dark section's ContourTexture to touch the curve edge
            <path
              d={`M0,0 L1440,0 L1440,${baseY} C1060,${baseY + 85} 380,${baseY + 85} 0,${baseY} Z`}
              fill={bgColor}
            />
          ) : null}

          {/* Parallel Curved Polka Dot Rows - curving in lockstep with the black curve */}
          {curvedPolkaRows.map((row, idx) => {
            const y = baseY + row.offset;
            return (
              <path
                key={idx}
                d={`M -20,${y} C 380,${y + 85} 1060,${y + 85} 1460,${y}`}
                fill="none"
                stroke="#181715"
                strokeWidth="3.2"
                strokeDasharray="0.1 22"
                strokeLinecap="round"
                opacity={row.opacity}
              />
            );
          })}

          {!transparentArch && (
            /* Inverted Arch (Deep Black) */
            <path
              d={`M0,${baseY} C380,${baseY + 85} 1060,${baseY + 85} 1440,${baseY} L1440,200 L0,200 Z`}
              fill={fillColor}
            />
          )}
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{ backgroundColor: transparentArch ? 'transparent' : bgColor }}
    >
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 block"
      >
        {downwardArch ? (
          // Subtle, organic footer curve matching reference look & feel
          <path
            d="M0,48 C420,44 960,-6 1440,50 L1440,92 L0,92 Z"
            fill={fillColor}
          />
        ) : inverted ? (
          transparentArch ? (
            // Fill top spandrel above the concave curve with bgColor; bottom arch stays transparent
            <path
              d="M0,0 L1440,0 C1060,85 380,85 0,0 Z"
              fill={bgColor}
            />
          ) : (
            // Inverted arch (concave curve from bottom towards top)
            <path
              d="M0,0 C380,85 1060,85 1440,0 L1440,92 L0,92 Z"
              fill={fillColor}
            />
          )
        ) : transparentArch ? (
          // Fill bottom spandrels below the convex curve with bgColor; top arch stays transparent
          <path
            d="M0,20 C360,90 1080,90 1440,20 L1440,92 L0,92 Z"
            fill={bgColor}
          />
        ) : (
          // Standard arch (convex curve extending down into the light section)
          <path
            d="M0,0 L1440,0 L1440,20 C1080,90 360,90 0,20 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
};
