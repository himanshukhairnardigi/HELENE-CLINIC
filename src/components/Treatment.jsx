import { useState } from 'react';
import { TREATMENTS } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import TreatmentCard from './TreatmentCard';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Treatment.module.css';

export default function Treatment() {
  const [activeId, setActiveId] = useState('orthopedic');
  const ref = useScrollReveal();

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`section section--light ${styles.treatment}`} id="treatment" aria-labelledby="treatment-heading">
      <Container>
        <div className={`reveal`} ref={ref}>
          <SectionTitle
            tag="What We Treat"
            heading="Advanced Treatments for Complex Conditions"
            subheading="We treat a wide range of chronic, degenerative, and neurological conditions using clinically validated stem cell protocols."
            center
            id="treatment-heading"
          />

          <div className={styles.grid}>
            {TREATMENTS.map((t) => (
              <TreatmentCard
                key={t.id}
                {...t}
                isActive={activeId === t.id}
                onClick={() => handleToggle(t.id)}
              />
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>Not sure if your condition is treatable? Our specialists will review your case for free.</p>
            <CTAButton label="Discuss Your Condition" href="#contact" variant="primary" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
