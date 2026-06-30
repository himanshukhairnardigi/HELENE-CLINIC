import { useState } from 'react';
import { FAQS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { useReveal } from '../../hooks/useReveal';
import styles from './FAQ.module.css';

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{q}</span>
        <span className={styles.icon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={styles.answer} hidden={!isOpen}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`section section--white ${styles.faq}`} id="faq" ref={ref}>
      <div className="container container--narrow">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Common Questions</SectionLabel>
          <Heading sub="Everything you need to know before starting your journey">
            Frequently Asked Questions
          </Heading>
          <Divider />
        </div>

        <div className={styles.list} data-reveal>
          {FAQS.map(({ q, a }, i) => (
            <FAQItem
              key={i}
              q={q}
              a={a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
