'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('on');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    function observe() {
      document.querySelectorAll('.rev:not([data-rev-observed])').forEach(el => {
        el.setAttribute('data-rev-observed', 'true');
        io.observe(el);
      });
    }

    // Watch for dynamically rendered client components adding .rev elements
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    observe();

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return null;
}
