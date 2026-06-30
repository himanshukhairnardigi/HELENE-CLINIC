import { ABOUT } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './About.module.css';

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#e8f4f8"/>
      <path d="M8 12l3 3 5-5" stroke="#1a6b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.about}`} id="about" aria-labelledby="about-heading">
      <Container>
        <div className={`${styles.inner} reveal`} ref={ref}>
          <div className={styles.imageCol}>
            <div className={styles.imageStack}>
              <div className={styles.imagePrimary} aria-hidden="true">
                <div className={styles.imagePlaceholder}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <circle cx="32" cy="22" r="13" stroke="rgba(26,107,138,0.3)" strokeWidth="2"/>
                    <path d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22" stroke="rgba(26,107,138,0.3)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Specialist Consultation</span>
                </div>
              </div>
              <div className={styles.imageSecondary} aria-hidden="true">
                <div className={styles.accentCard}>
                  <strong>ISO Certified</strong>
                  <span>Laboratory & Processes</span>
                </div>
              </div>
              <div className={styles.yearsBadge} aria-label="15+ years of research">
                <strong>15+</strong>
                <span>Years Research</span>
              </div>
            </div>
          </div>

          <div className={styles.contentCol}>
            <SectionTitle
              tag={ABOUT.tag}
              heading={ABOUT.heading}
              id="about-heading"
            />

            {ABOUT.body.map((para, i) => (
              <p key={i} className={styles.body}>{para}</p>
            ))}

            <ul className={styles.trustList} role="list" aria-label="Key trust points">
              {ABOUT.trustPoints.map((point) => (
                <li key={point} className={styles.trustItem}>
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <CTAButton
              label="Learn More About Our Approach"
              href="#treatment"
              variant="outline"
              size="md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
