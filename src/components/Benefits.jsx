import { BENEFITS } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import BenefitCard from './BenefitCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Benefits.module.css';

export default function Benefits() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.benefits}`} id="benefits" aria-labelledby="benefits-heading">
      <Container>
        <div className="reveal" ref={ref}>
          <SectionTitle
            tag="Why Stem Cell Therapy"
            heading="The Benefits of Regenerative Treatment"
            subheading="Stem cell therapy addresses the root cause of conditions — not just symptoms — delivering long-lasting results with minimal intervention."
            center
            id="benefits-heading"
          />

          <ul className={styles.grid} role="list">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title}>
                <BenefitCard {...benefit} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
