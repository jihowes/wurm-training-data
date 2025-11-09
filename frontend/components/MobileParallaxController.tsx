'use client';

import { useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const SCROLL_INTENSITY = 0.12;
const MAX_OFFSET = 240; // px

export default function MobileParallaxController() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    const setOffset = (value: number) => {
      root.style.setProperty('--mobile-parallax-offset', `${value}px`);
    };

    const update = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setOffset(0);
        return;
      }

      const offset = Math.min(window.scrollY * SCROLL_INTENSITY, MAX_OFFSET);
      setOffset(offset);
    };

    let frame: number | null = null;

    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        update();
      });
    };

    const onResize = () => update();

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}


