'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = Array.from(document.querySelectorAll('.reveal'));

    if (reducedMotion) {
      reveals.forEach((element) => element.classList.add('visible'));
      return undefined;
    }

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
      );
      reveals.forEach((element) => observer.observe(element));
    } else {
      reveals.forEach((element) => element.classList.add('visible'));
    }

    return () => {
      observer?.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const glow = document.querySelector('.pointer-glow');
    const pointerFine = window.matchMedia('(pointer: fine)').matches;
    let frame = 0;

    const onPointerMove = (event) => {
      if (!glow || !pointerFine || frame) return;
      frame = window.requestAnimationFrame(() => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
        frame = 0;
      });
    };

    if (glow && pointerFine) window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return null;
}
