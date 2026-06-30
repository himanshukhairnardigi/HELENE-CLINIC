import { WHYUS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { useReveal } from '../../hooks/useReveal';
import styles from './WhyUs.module.css';

export function WhyUs() {
  const ref = useReveal();

  return (
    <section className={`section section--white ${styles.whyUs}`} id="why-us" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Why Helene Clinic</SectionLabel>
          <Heading sub="Trusted by patients from over 40 countries worldwide">
            A Standard of Excellence in Regenerative Medicine
          </Heading>
          <Divider />
        </div>

        <div className={styles.stats}>
          {WHYUS.map(({ value, label, sub }, i) => (
            <div key={i} className={styles.stat} data-reveal data-reveal-delay={String(i + 1)}>
              <strong className={styles.statValue}>{value}</strong>
              <span className={styles.statLabel}>{label}</span>
              {sub && <span className={styles.statSub}>{sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
