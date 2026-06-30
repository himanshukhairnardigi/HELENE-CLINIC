import { TESTIMONIALS } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import ReviewCard from './ReviewCard';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.section}`} id="results" aria-labelledby="testimonials-heading">
      <Container>
        <div className="reveal" ref={ref}>
          <SectionTitle
            tag="Patient Stories"
            heading="Real Results from Real Patients"
            subheading="Read first-hand accounts from patients who have experienced the Helene Clinic difference."
            center
            id="testimonials-heading"
          />

          <ul className={styles.grid} role="list">
            {TESTIMONIALS.map((t) => (
              <li key={t.name}>
                <ReviewCard {...t} />
              </li>
            ))}
          </ul>

          <div className={styles.disclaimer}>
            <p>Individual results vary. These testimonials reflect personal experiences and are not a guarantee of outcomes.</p>
          </div>

          <div className={styles.cta}>
            <CTAButton label="Share Your Journey With Us" href="#contact" variant="outline" size="md" />
          </div>
        </div>
      </Container>
    </section>
  );
}
