import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Adds `is-visible` class when element enters the viewport.
 * Works with [data-reveal] CSS attribute in utilities.css.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
        ...options,
      }
    );

    // Observe element itself and all [data-reveal] children
    const targets = [el, ...el.querySelectorAll('[data-reveal]')];
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}
