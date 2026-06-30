import { RESEARCH, CONTACT } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { IconWhatsApp } from '../ui/Icons';
import { useReveal } from '../../hooks/useReveal';
import styles from './ResearchSection.module.css';

export function ResearchSection() {
  const ref = useReveal();

  return (
    <section className={`section section--light ${styles.research}`} id="research" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Clinical Evidence</SectionLabel>
          <h2 className={styles.headline}>{RESEARCH.headline}</h2>
          <p className={styles.lead}>{RESEARCH.intro}</p>
        </div>

        <div className={styles.studies}>
          {RESEARCH.studies.map((study, i) => (
            <div key={study.id} className={styles.studyCard} data-reveal data-reveal-delay={String(i + 1)}>
              <div className={styles.studyHeader}>
                <span className={styles.badge}>{study.badge}</span>
                <h3 className={styles.studyTitle}>{study.headline}</h3>
                <p className={styles.studyDetail}>{study.detail}</p>
              </div>

              <ul className={styles.findings} role="list">
                {study.findings.map((f, j) => (
                  <li key={j} className={styles.finding}>
                    <span className={styles.findingBullet} aria-hidden="true">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className={styles.studyNote}>{study.note}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta} data-reveal>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <IconWhatsApp />
            <span>{RESEARCH.cta.label}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
