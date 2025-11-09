'use client';

import { useEffect, useState } from 'react';

interface ParallaxOptions {
  /**
   * Base percentage for the background Y position (without scroll).
   * Defaults to 68 (%).
   */
  basePercent?: number;
  /**
   * Multiplier applied to the window scroll distance to compute the parallax offset.
   * Defaults to 0.2.
   */
  intensity?: number;
}

const MOBILE_BREAKPOINT = 768;

export function useMobileParallax({
  basePercent = 68,
  intensity = 0.2,
}: ParallaxOptions = {}) {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || typeof window === 'undefined') {
      setStyle({});
      return;
    }

    let frameId: number | null = null;

    const update = () => {
      frameId = null;
      const offsetPx = window.scrollY * intensity;
      setStyle({
        backgroundPosition: `center calc(${basePercent}% + ${offsetPx}px)`,
      });
    };

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isMobile, basePercent, intensity]);

  return style;
}


