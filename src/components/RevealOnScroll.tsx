import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  distancePx?: number;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * RevealOnScroll
 * Smooth GPU-accelerated fade-in and slide-up transition triggered by IntersectionObserver.
 * Adheres strictly to the Frontend Design Constitution:
 * - Only animates transform and opacity (compositor-only properties)
 * - Honors prefers-reduced-motion for accessibility
 * - Retains full content accessibility if IntersectionObserver is unsupported
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 700,
  distancePx = 28,
  threshold = 0.12,
  as: Component = 'div',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Check IntersectionObserver support
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // Trigger slightly before element completely enters viewport
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : `translateY(${distancePx}px)`,
    transition: `opacity ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  // Typecast to any to allow dynamic HTML element tag rendering
  const DynamicComponent = Component as any;

  return (
    <DynamicComponent ref={ref} style={style} className={className}>
      {children}
    </DynamicComponent>
  );
};
