'use client';

import { useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const MOBILE_INTENSITY = 0.3;
const DESKTOP_INTENSITY = 0.15;
const MAX_OFFSET = 260;

export default function MobileParallaxController() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const bgElement = document.querySelector<HTMLElement>('.parallax-bg');
    if (!bgElement) return undefined;

    let frame: number | null = null;

    const applyOffset = () => {
      frame = null;
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      const intensity = isMobile ? MOBILE_INTENSITY : DESKTOP_INTENSITY;
      const offset = Math.min(window.scrollY * intensity, MAX_OFFSET);
      bgElement.style.transform = `translateY(${offset}px)`;
    };

    const handleScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(applyOffset);
    };

    const handleResize = () => {
      applyOffset();
    };

    applyOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
