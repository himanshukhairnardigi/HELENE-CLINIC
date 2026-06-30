import { useState } from 'react';
import { HERO, CONTACT } from '../../data/siteData';
import { Button } from '../ui/Button';
import { IconWhatsApp, IconCheck } from '../ui/Icons';
import styles from './Hero.module.css';

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = HERO.headlines[activeIdx];

  return (
    <section className={styles.hero} id="top" aria-label="Hero">
      {/* Background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGradient} />
        <div className={styles.bgPattern} />
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
      </div>

      <div className={styles.inner}>
        <div className={`container ${styles.contentWrap}`}>
          {/* Condition toggle */}
          <div className={styles.conditionToggle} role="tablist" aria-label="Select your condition">
            {HERO.headlines.map((h, i) => (
              <button
                key={h.condition}
                role="tab"
                aria-selected={activeIdx === i}
                className={`${styles.toggleBtn} ${activeIdx === i ? styles.toggleBtnActive : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                {h.condition === 'diabetes' ? '🩸 Diabetes' : '🦵 Knee Pain'}
              </button>
            ))}
          </div>

          {/* Pre-heading */}
          <div className={styles.preheading} data-reveal="fade">
            <span className={styles.preheadingDot} aria-hidden="true" />
            <span>{HERO.preheading}</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline} data-reveal>
            {active.headline}
          </h1>

          {/* Subheadline */}
          <p className={styles.subheadline} data-reveal data-reveal-delay="1">
            {active.sub}
          </p>

          {/* Trust badges */}
          <ul className={styles.trust} role="list" data-reveal data-reveal-delay="2" aria-label="Key credentials">
            {HERO.trustBadges.map((badge) => (
              <li key={badge} className={styles.trustItem}>
                <IconCheck />
                <span>{badge}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className={styles.ctas} data-reveal data-reveal-delay="3">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waPrimary}
              aria-label="Talk to our medical team on WhatsApp"
            >
              <IconWhatsApp />
              <span>{HERO.cta.primary.label}</span>
            </a>
            <Button href={HERO.cta.secondary.href} variant="outline-light" size="lg">
              {HERO.cta.secondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar} aria-label="Key statistics">
        <div className="container">
          <ul className={styles.statsList} role="list">
            {HERO.stats.map(({ value, label }, i) => (
              <li key={i} className={styles.statItem}>
                <strong className={styles.statValue}>{value}</strong>
                <span className={styles.statLabel}>
                  {label.split('\n').map((l, j) => (
                    <span key={j}>{l}</span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
