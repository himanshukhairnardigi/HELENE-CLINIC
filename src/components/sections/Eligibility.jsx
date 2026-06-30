import { ELIGIBILITY } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { Button } from '../ui/Button';
import { IconCheck } from '../ui/Icons';
import { useReveal } from '../../hooks/useReveal';
import styles from './Eligibility.module.css';

export function Eligibility() {
  const ref = useReveal();

  return (
    <section className={`section section--white ${styles.eligibility}`} id="eligibility" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Patient Suitability</SectionLabel>
          <Heading sub="Understanding who benefits most from MSC therapy">
            Am I a Candidate?
          </Heading>
          <Divider />
        </div>

        <div className={styles.grid}>
          <div className={styles.col} data-reveal data-reveal-delay="1">
            <div className={styles.colHeader}>
              <span className={styles.colIcon} aria-hidden="true">✓</span>
              <h3 className={styles.colTitle}>Suitable Candidates</h3>
            </div>
            <ul className={styles.list} role="list">
              {ELIGIBILITY.suitable.map((item, i) => (
                <li key={i} className={styles.item}>
                  <IconCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.col} ${styles.colNot}`} data-reveal data-reveal-delay="2">
            <div className={styles.colHeader}>
              <span className={styles.colIcon} aria-hidden="true">✗</span>
              <h3 className={styles.colTitle}>May Not Be Suitable</h3>
            </div>
            <ul className={styles.list} role="list">
              {ELIGIBILITY.notSuitable.map((item, i) => (
                <li key={i} className={`${styles.item} ${styles.itemNot}`}>
                  <span className={styles.crossIcon} aria-hidden="true">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.note} data-reveal>
          <p>{ELIGIBILITY.note}</p>
          <Button href="#contact" variant="primary">
            Request Free Eligibility Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}
