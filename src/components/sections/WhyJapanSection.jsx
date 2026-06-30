import { WHY_JAPAN, CONTACT } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { useReveal } from '../../hooks/useReveal';
import styles from './WhyJapanSection.module.css';

export function WhyJapanSection() {
  const ref = useReveal();

  return (
    <section className={`section section--dark ${styles.whyJapan}`} id="why-japan" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel light>Japan</SectionLabel>
          <h2 className={styles.headline}>{WHY_JAPAN.headline}</h2>
        </div>

        <div className={styles.grid}>
          {WHY_JAPAN.cards.map(({ icon, title, body }, i) => (
            <div key={i} className={styles.card} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <span className={styles.icon} aria-hidden="true">{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta} data-reveal>
          <a href={WHY_JAPAN.cta.href} className={styles.ctaBtn}>
            {WHY_JAPAN.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
