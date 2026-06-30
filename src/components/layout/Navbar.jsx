import { useState, useCallback } from 'react';
import { NAV, CONTACT } from '../../data/siteData';
import { useScrolled } from '../../hooks/useScrolled';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Button } from '../ui/Button';
import { IconMenu, IconX, IconPhone } from '../ui/Icons';
import styles from './Navbar.module.css';

export function Navbar() {
  const scrolled = useScrolled(56);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 900px)');

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((p) => !p), []);

  return (
    <>
      <header
        className={[styles.header, scrolled && styles['header--scrolled']].filter(Boolean).join(' ')}
        role="banner"
      >
        <div className={`${styles.inner} container--wide`}>
          {/* Logo */}
          <a href="#top" className={styles.logo} aria-label="Helene Clinic India — Home">
            <span className={styles.logoMark} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="4" fill="currentColor" className={styles.logoRect}/>
                <path d="M14 5v18M5 14h18" stroke="currentColor" className={styles.logoPlus} strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.logoText}>
              <span className={styles.logoName}>HELENE</span>
              <span className={styles.logoDivider} aria-hidden="true"/>
              <span className={styles.logoSub}>CLINIC</span>
            </span>
          </a>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav aria-label="Main navigation" className={styles.desktopNav}>
              <ul className={styles.navList} role="list">
                {NAV.links.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className={styles.navLink}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Desktop Actions */}
          {!isMobile && (
            <div className={styles.actions}>
              <a href={`tel:${CONTACT.phone}`} className={styles.phoneLink} aria-label={`Call us: ${CONTACT.phone}`}>
                <IconPhone />
                <span>{CONTACT.phone}</span>
              </a>
              <Button href={NAV.cta.href} variant="primary" size="sm">
                {NAV.cta.label}
              </Button>
            </div>
          )}

          {/* Mobile Toggle */}
          {isMobile && (
            <button
              className={styles.menuBtn}
              onClick={toggle}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <IconX /> : <IconMenu />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          id="mobile-menu"
          className={[styles.mobileMenu, open && styles['mobileMenu--open']].filter(Boolean).join(' ')}
          aria-hidden={!open}
        >
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileNavList} role="list">
              {NAV.links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.mobileNavLink} onClick={close}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCtas}>
              <a href={`tel:${CONTACT.phone}`} className={styles.mobilePhone}>
                <IconPhone />
                {CONTACT.phone}
              </a>
              <Button href={NAV.cta.href} variant="primary" size="md" fullWidth onClick={close}>
                {NAV.cta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Overlay */}
      {isMobile && open && (
        <div className={styles.overlay} onClick={close} aria-hidden="true" />
      )}
    </>
  );
}
