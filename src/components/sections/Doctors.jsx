import { DOCTORS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { useReveal } from '../../hooks/useReveal';
import styles from './Doctors.module.css';

export function Doctors() {
  const ref = useReveal();

  return (
    <section className={`section section--light ${styles.doctors}`} id="doctors" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Medical Team</SectionLabel>
          <Heading sub="World-class specialists dedicated to your regenerative journey">
            Meet Our Specialists
          </Heading>
          <Divider />
        </div>

        <div className={styles.grid}>
          {DOCTORS.map((doc, i) => (
            <article key={doc.name} className={styles.card} data-reveal data-reveal-delay={String(i + 1)}>
              <div className={styles.avatar} aria-hidden="true">
                <span className={styles.avatarInitials}>
                  {doc.name.split(' ').slice(1).map(n => n[0]).join('')}
                </span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{doc.name}</h3>
                <p className={styles.specialty}>{doc.specialty}</p>
                <p className={styles.credentials}>{doc.credentials}</p>
                <p className={styles.bio}>{doc.bio}</p>
                {doc.expertise && (
                  <ul className={styles.expertiseList} role="list">
                    {doc.expertise.map((e) => (
                      <li key={e} className={styles.expertiseItem}>{e}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
