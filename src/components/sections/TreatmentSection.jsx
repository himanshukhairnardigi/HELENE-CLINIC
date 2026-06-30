import { TREATMENTS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { Button } from '../ui/Button';
import { useReveal } from '../../hooks/useReveal';
import styles from './TreatmentSection.module.css';

export function TreatmentSection() {
  const ref = useReveal();

  return (
    <section className={`section section--light ${styles.treatments}`} id="treatments" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Treatment Areas</SectionLabel>
          <Heading sub="What conditions can MSC therapy address?">Conditions We Treat</Heading>
          <Divider />
        </div>

        <div className={styles.grid}>
          {TREATMENTS.map((t, i) => (
            <article key={t.id} className={styles.card} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} aria-hidden="true">{t.icon}</div>
                <h3 className={styles.cardTitle}>{t.name}</h3>
                <p className={styles.cardDesc}>{t.description}</p>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.conditionsLabel}>Conditions treated:</p>
                <ul className={styles.conditions} role="list">
                  {t.conditions.map((c) => (
                    <li key={c} className={styles.condition}>{c}</li>
                  ))}
                </ul>
                {t.outcome && (
                  <div className={styles.outcome}>
                    <span className={styles.outcomeIcon} aria-hidden="true">✦</span>
                    <span>{t.outcome}</span>
                  </div>
                )}
              </div>
              <div className={styles.cardFooter}>
                <Button href="#contact" variant="outline" size="sm">
                  Enquire About {t.name}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
