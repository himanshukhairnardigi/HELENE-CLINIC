import { ELIGIBILITY } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Eligibility.module.css';

function CheckIcon({ suitable }) {
  if (suitable) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#e8f4f8"/>
        <path d="M8 12l3 3 5-5" stroke="#1a6b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#fdf0ee"/>
      <path d="M15 9l-6 6M9 9l6 6" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function Eligibility() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.section}`} id="eligibility" aria-labelledby="eligibility-heading">
      <Container>
        <div className="reveal" ref={ref}>
          <SectionTitle
            tag="Eligibility"
            heading={ELIGIBILITY.heading}
            subheading={ELIGIBILITY.intro}
            center
            id="eligibility-heading"
          />

          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>
                <span className={styles.good} aria-hidden="true">✓</span>
                Suitable Candidates
              </h3>
              <ul className={styles.list} role="list">
                {ELIGIBILITY.suitable.map((item) => (
                  <li key={item} className={styles.item}>
                    <CheckIcon suitable />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.column} ${styles.notSuitable}`}>
              <h3 className={styles.columnTitle}>
                <span className={styles.bad} aria-hidden="true">✕</span>
                Not Suitable If
              </h3>
              <ul className={styles.list} role="list">
                {ELIGIBILITY.notSuitable.map((item) => (
                  <li key={item} className={styles.item}>
                    <CheckIcon suitable={false} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Unsure about your eligibility? Our specialists will review your full medical history at no cost.
            </p>
            <CTAButton label={ELIGIBILITY.cta.label} href={ELIGIBILITY.cta.href} variant="primary" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
