import { WHY_HELENE } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './WhyHelene.module.css';

export default function WhyHelene() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.section}`} id="why-helene" aria-labelledby="why-heading">
      <div className={styles.bg} aria-hidden="true" />
      <Container>
        <div className="reveal" ref={ref}>
          <SectionTitle
            tag="Why Choose Us"
            heading="Why Patients Choose Helene Clinic"
            subheading="We combine Japanese-developed research protocols with India's clinical excellence to deliver world-class regenerative care at accessible costs."
            center
            light
            id="why-heading"
          />

          <ul className={styles.grid} role="list">
            {WHY_HELENE.map(({ stat, label, detail }) => (
              <li key={label} className={styles.card}>
                <strong className={styles.stat}>{stat}</strong>
                <h3 className={styles.label}>{label}</h3>
                <p className={styles.detail}>{detail}</p>
              </li>
            ))}
          </ul>

          <div className={styles.cta}>
            <CTAButton label="Start Your Journey" href="#contact" variant="primary" size="lg" />
            <CTAButton label="View Patient Stories" href="#results" variant="outline-light" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
