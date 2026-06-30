import { ABOUT } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { useReveal } from '../../hooks/useReveal';
import styles from './About.module.css';

export function About() {
  const ref = useReveal();

  return (
    <section className={`section section--white ${styles.about}`} id="about" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>{ABOUT.label}</SectionLabel>
          <Heading sub={ABOUT.sub} serif>{ABOUT.heading}</Heading>
          <Divider />
          <p className={styles.lead}>{ABOUT.lead}</p>
        </div>

        <div className={styles.pillars}>
          {ABOUT.pillars.map(({ icon, title, body }, i) => (
            <div key={i} className={styles.pillar} data-reveal data-reveal-delay={String(i + 1)}>
              <div className={styles.pillarIcon} aria-hidden="true">{icon}</div>
              <h3 className={styles.pillarTitle}>{title}</h3>
              <p className={styles.pillarBody}>{body}</p>
            </div>
          ))}
        </div>

        <div className={styles.credentials} data-reveal>
          {ABOUT.credentials.map((c, i) => (
            <span key={i} className={styles.credBadge}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
