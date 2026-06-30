import { useEffect, useState } from 'react';

/**
 * Returns true when window has scrolled past `threshold` pixels.
 */
export function useScrolled(threshold = 64) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
