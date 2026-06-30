import { useEffect, useRef } from 'react';
import { HERO } from '../data/content';
import CTAButton from './CTAButton';
import Container from './Container';
import styles from './Hero.module.css';

export default function Hero() {
  const statsRef = useRef(null);

  return (
    <section className={styles.hero} id="top" aria-label="Hero section">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.overlay} />
        <div className={styles.pattern} />
      </div>

      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            {HERO.badge && (
              <span className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                {HERO.badge}
              </span>
            )}

            <h1 className={styles.headline}>
              {HERO.headline.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? styles.headlineAccent : ''}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            <p className={styles.subheadline}>{HERO.subheadline}</p>

            <div className={styles.ctas}>
              <CTAButton
                label={HERO.ctaPrimary.label}
                href={HERO.ctaPrimary.href}
                variant="primary"
                size="lg"
              />
              <CTAButton
                label={HERO.ctaSecondary.label}
                href={HERO.ctaSecondary.href}
                variant="outline-light"
                size="lg"
              />
            </div>

            <div className={styles.trust} aria-label="Trust indicators">
              <span className={styles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                ISO Certified
              </span>
              <span className={styles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                No Surgery Required
              </span>
              <span className={styles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                Free Consultation
              </span>
            </div>
          </div>

          <div className={styles.imageCard} aria-hidden="true">
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <circle cx="40" cy="28" r="16" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                  <path d="M14 68c0-14.36 11.64-26 26-26h0c14.36 0 26 11.64 26 26" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Clinical Consultation</span>
              </div>
              <div className={styles.floatingCard}>
                <strong>5,000+</strong>
                <span>Lives Transformed</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.statsBar} ref={statsRef} aria-label="Key statistics">
        <Container>
          <ul className={styles.statsList} role="list">
            {HERO.stats.map(({ value, label }) => (
              <li key={label} className={styles.statItem}>
                <strong className={styles.statValue}>{value}</strong>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
