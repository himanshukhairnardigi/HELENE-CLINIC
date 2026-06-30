import { useState } from 'react';
import { FAQS } from '../data/content';
import Container from './Container';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './FAQ.module.css';

function FAQItem({ question, answer, isOpen, onClick, index }) {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={id}
      >
        <span>{question}</span>
        <span className={styles.icon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={styles.answerWrapper}
        hidden={!isOpen}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useScrollReveal();

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className={`section section--light ${styles.section}`} id="faq" aria-labelledby="faq-heading">
      <Container narrow>
        <div className="reveal" ref={ref}>
          <SectionTitle
            tag="FAQs"
            heading="Frequently Asked Questions"
            subheading="Have questions about stem cell therapy? Find answers to the most common questions below."
            center
            id="faq-heading"
          />

          <div className={styles.list} role="list" aria-label="Frequently asked questions">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={faq.question}
                {...faq}
                index={i}
                isOpen={openIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>Can't find your answer? Our specialists are available to help.</p>
            <CTAButton label="Ask a Specialist" href="#contact" variant="primary" size="md" />
          </div>
        </div>
      </Container>
    </section>
  );
}
