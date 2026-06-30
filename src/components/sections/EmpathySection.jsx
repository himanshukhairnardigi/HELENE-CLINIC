import { useState } from 'react';
import { EMPATHY, CONTACT } from '../../data/siteData';
import { IconWhatsApp } from '../ui/Icons';
import { useReveal } from '../../hooks/useReveal';
import styles from './EmpathySection.module.css';

export function EmpathySection() {
  const ref = useReveal();
  const [activeTab, setActiveTab] = useState(0);
  const tab = EMPATHY.tabs[activeTab];

  return (
    <section className={`section section--white ${styles.empathy}`} id="about" ref={ref}>
      <div className="container container--narrow">
        <h2 className={styles.headline} data-reveal>{EMPATHY.headline}</h2>
        <p className={styles.intro} data-reveal data-reveal-delay="1">{EMPATHY.intro}</p>

        <div className={styles.card} data-reveal data-reveal-delay="2">
          {/* Tabs */}
          <div className={styles.tabs} role="tablist">
            {EMPATHY.tabs.map((t, i) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`empathy-panel-${t.key}`}
                className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            id={`empathy-panel-${tab.key}`}
            role="tabpanel"
            className={styles.panel}
          >
            <ul className={styles.points} role="list">
              {tab.points.map((p, i) => (
                <li key={i} className={styles.point}>
                  <span className={styles.pointIcon} aria-hidden="true">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.closing} data-reveal data-reveal-delay="3">{EMPATHY.closing}</p>

        <div className={styles.cta} data-reveal data-reveal-delay="4">
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            <IconWhatsApp />
            <span>{EMPATHY.cta.label}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
