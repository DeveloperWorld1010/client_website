'use client';

import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll('.reveal'));
    let observer;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(el => observer.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('visible'));
    }

    const glow = document.querySelector('.glow');
    const pointerFine = window.matchMedia('(pointer:fine)').matches;
    const onPointer = e => {
      if (!glow) return;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    if (glow && pointerFine) window.addEventListener('pointermove', onPointer);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return null;
}
