import { WHY_HELENE } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { useReveal } from '../../hooks/useReveal';
import styles from './WhyHeleneSection.module.css';

export function WhyHeleneSection() {
  const ref = useReveal();

  return (
    <section className={`section section--white ${styles.whyHelene}`} id="about-clinic" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>About Us</SectionLabel>
          <h2 className={styles.headline}>{WHY_HELENE.headline}</h2>
        </div>

        <div className={styles.grid}>
          {WHY_HELENE.cards.map(({ icon, title, body }, i) => (
            <div key={i} className={styles.card} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <div className={styles.cardInner}>
                <span className={styles.icon} aria-hidden="true">{icon}</span>
                <div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardBody}>{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
