import { TESTIMONIALS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { IconStar } from '../ui/Icons';
import { useReveal } from '../../hooks/useReveal';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const ref = useReveal();

  return (
    <section className={`section section--dark ${styles.testimonials}`} id="testimonials" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel light>Patient Stories</SectionLabel>
          <Heading light sub="Real outcomes from patients across the globe">
            What Our Patients Say
          </Heading>
          <Divider />
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className={styles.card} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <IconStar key={j} />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <footer className={styles.footer}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <cite className={styles.name}>{t.name}</cite>
                  <span className={styles.meta}>{t.condition} · {t.location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
