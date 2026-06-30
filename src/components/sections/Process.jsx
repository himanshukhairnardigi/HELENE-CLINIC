import { PROCESS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { Button } from '../ui/Button';
import { useReveal } from '../../hooks/useReveal';
import styles from './Process.module.css';

export function Process() {
  const ref = useReveal();

  return (
    <section className={`section section--light ${styles.process}`} id="process" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Treatment Journey</SectionLabel>
          <Heading sub="A transparent, carefully coordinated pathway to treatment">
            Your Path to Treatment
          </Heading>
          <Divider />
        </div>

        <ol className={styles.steps} role="list">
          {PROCESS.map(({ step, title, body }, i) => (
            <li key={step} className={styles.step} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <div className={styles.stepNum} aria-label={`Step ${step}`}>{step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepBody}>{body}</p>
              </div>
              {i < PROCESS.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <div className={styles.cta} data-reveal>
          <Button href="#contact" variant="primary" size="lg">
            Start Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
