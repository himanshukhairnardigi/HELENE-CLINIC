import { useState, useEffect } from 'react';
import { NAV_LINKS, SITE_META } from '../data/content';
import CTAButton from './CTAButton';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.inner}>
          <a href="#top" className={styles.logo} aria-label="Helene Clinic — Home">
            <span className={styles.logoIcon} aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="#1a6b8a"/>
                <path d="M16 7v18M7 16h18" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.logoText}>
              <strong>Helene</strong> Clinic
            </span>
          </a>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.navLink} onClick={handleNavClick}>
                  {label}
                </a>
              </li>
            ))}
            <li className={styles.mobileCtaItem}>
              <CTAButton label="Free Consultation" href="#contact" variant="primary" size="sm" />
            </li>
          </ul>

          <div className={styles.desktopActions}>
            <a href={`tel:${SITE_META.phone}`} className={styles.phoneLink} aria-label="Call us">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              {SITE_META.phone}
            </a>
            <CTAButton label="Free Consultation" href="#contact" variant="primary" size="sm" />
          </div>

          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
