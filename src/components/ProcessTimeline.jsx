import { PROCESS } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './ProcessTimeline.module.css';

export default function ProcessTimeline() {
  const ref = useScrollReveal();

  return (
    <section className={`section section--light ${styles.section}`} id="process" aria-labelledby="process-heading">
      <Container>
        <div className="reveal" ref={ref}>
          <SectionTitle
            tag="How It Works"
            heading="Your Journey to Recovery"
            subheading="A clear, transparent process from first contact to long-term follow-up — we guide you every step of the way."
            center
            id="process-heading"
          />

          <ol className={styles.timeline} aria-label="Treatment process steps">
            {PROCESS.map(({ step, title, description }, index) => (
              <li key={step} className={styles.step}>
                <div className={styles.stepConnector} aria-hidden="true">
                  <div className={styles.stepNumber}>{step}</div>
                  {index < PROCESS.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepDescription}>{description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.cta}>
            <CTAButton label="Begin Your Journey Today" href="#contact" variant="primary" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
