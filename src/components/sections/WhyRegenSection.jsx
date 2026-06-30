import { WHY_REGEN } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { useReveal } from '../../hooks/useReveal';
import styles from './WhyRegenSection.module.css';

export function WhyRegenSection() {
  const ref = useReveal();

  return (
    <section className={`section section--light ${styles.whyRegen}`} id="treatment" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Science</SectionLabel>
          <h2 className={styles.headline}>{WHY_REGEN.headline}</h2>
          <p className={styles.lead}>{WHY_REGEN.intro}</p>
        </div>

        <div className={styles.grid}>
          {WHY_REGEN.points.map(({ icon, title, body }, i) => (
            <div key={i} className={styles.card} data-reveal data-reveal-delay={String((i % 2) + 1)}>
              <span className={styles.icon} aria-hidden="true">{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer} data-reveal>
          <strong>Important note: </strong>{WHY_REGEN.disclaimer}
        </p>
      </div>
    </section>
  );
}
