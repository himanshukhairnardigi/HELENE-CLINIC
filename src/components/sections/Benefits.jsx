import { BENEFITS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { useReveal } from '../../hooks/useReveal';
import styles from './Benefits.module.css';

export function Benefits() {
  const ref = useReveal();

  return (
    <section className={`section section--dark ${styles.benefits}`} id="benefits" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel light>Why MSC Therapy</SectionLabel>
          <Heading light sub="The science-backed advantages of allogeneic stem cell treatment">
            Benefits of Our Approach
          </Heading>
          <Divider />
        </div>

        <div className={styles.grid}>
          {BENEFITS.map(({ icon, title, body }, i) => (
            <div key={i} className={styles.card} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <div className={styles.cardIcon} aria-hidden="true">{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
