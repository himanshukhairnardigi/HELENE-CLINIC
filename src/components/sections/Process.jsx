import { PROCESS, CONTACT } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { IconWhatsApp } from '../ui/Icons';
import { useReveal } from '../../hooks/useReveal';
import styles from './Process.module.css';

export function Process() {
  const ref = useReveal();

  return (
    <section className={`section section--light ${styles.process}`} id="process" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Treatment Journey</SectionLabel>
          <h2 className={styles.headline}>Your Journey with Helene Clinic</h2>
        </div>

        <ol className={styles.steps} role="list">
          {PROCESS.map(({ step, title, body, icon }, i) => (
            <li key={step} className={styles.step} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum} aria-label={`Step ${step}`}>{step}</div>
                {i < PROCESS.length - 1 && <div className={styles.line} aria-hidden="true" />}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepIcon} aria-hidden="true">{icon}</div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepBody}>{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.cta} data-reveal>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            <IconWhatsApp />
            <span>Share Your Reports on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
