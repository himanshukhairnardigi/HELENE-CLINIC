import { DOCTORS } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import DoctorCard from './DoctorCard';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Doctors.module.css';

export default function Doctors() {
  const ref = useScrollReveal();

  return (
    <section className={`section section--light ${styles.section}`} id="doctors" aria-labelledby="doctors-heading">
      <Container>
        <div className="reveal" ref={ref}>
          <SectionTitle
            tag="Our Specialists"
            heading="Meet Our Expert Team"
            subheading="Our multidisciplinary specialists bring decades of clinical experience and research expertise to every patient's care."
            center
            id="doctors-heading"
          />

          <div className={styles.grid}>
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.name} {...doctor} />
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.note}>
              All treatment plans are reviewed by a multidisciplinary team — not a single physician.
            </p>
            <CTAButton label="Speak with a Specialist" href="#contact" variant="primary" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
