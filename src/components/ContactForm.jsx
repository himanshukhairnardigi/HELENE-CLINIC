import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';
import { SITE_META } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './ContactForm.module.css';

const CONDITIONS = [
  'Osteoarthritis / Joint Pain',
  'Rheumatoid Arthritis',
  'Cerebral Palsy',
  'Autism Spectrum Disorder',
  "Parkinson's Disease",
  'Multiple Sclerosis',
  'Spinal Cord Injury',
  'Autoimmune Condition',
  'Anti-Ageing / Wellness',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.info('Form submission:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <section className={`section ${styles.section}`} id="contact" aria-labelledby="contact-heading">
      <Container>
        <div className="reveal" ref={ref}>
          <div className={styles.inner}>
            <div className={styles.info}>
              <SectionTitle
                tag="Free Consultation"
                heading="Start Your Journey to Recovery"
                subheading="Share your medical details and our specialists will contact you within 24 hours to discuss your case at no cost."
                light
                id="contact-heading"
              />

              <ul className={styles.contactList} role="list" aria-label="Contact information">
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                    </svg>
                  </span>
                  <a href={`tel:${SITE_META.phone}`} className={styles.contactLink}>{SITE_META.phone}</a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <a href={`mailto:${SITE_META.email}`} className={styles.contactLink}>{SITE_META.email}</a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                  </span>
                  <a
                    href={`https://wa.me/${SITE_META.contact?.whatsapp || '919876543210'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>

              <div className={styles.trustBadges} aria-label="Trust badges">
                {['Free Consultation', 'Response within 24hrs', 'No Obligation'].map((b) => (
                  <span key={b} className={styles.trustBadge}>{b}</span>
                ))}
              </div>
            </div>

            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.success} role="alert" aria-live="polite">
                  <div className={styles.successIcon} aria-hidden="true">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your consultation request has been received. Our specialists will contact you within 24 hours.</p>
                  <CTAButton label="Submit Another Request" onClick={() => setSubmitted(false)} variant="outline" size="md" />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={styles.form}
                  noValidate
                  aria-label="Consultation request form"
                >
                  <h2 className={styles.formTitle}>Request Free Consultation</h2>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="firstName" className={styles.label}>First Name <span aria-hidden="true">*</span></label>
                      <input
                        id="firstName"
                        type="text"
                        className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                        placeholder="Enter first name"
                        autoComplete="given-name"
                        aria-required="true"
                        aria-invalid={!!errors.firstName}
                        {...register('firstName', { required: 'First name is required' })}
                      />
                      {errors.firstName && <span className={styles.error} role="alert">{errors.firstName.message}</span>}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="lastName" className={styles.label}>Last Name <span aria-hidden="true">*</span></label>
                      <input
                        id="lastName"
                        type="text"
                        className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                        placeholder="Enter last name"
                        autoComplete="family-name"
                        aria-required="true"
                        aria-invalid={!!errors.lastName}
                        {...register('lastName', { required: 'Last name is required' })}
                      />
                      {errors.lastName && <span className={styles.error} role="alert">{errors.lastName.message}</span>}
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>Email Address <span aria-hidden="true">*</span></label>
                      <input
                        id="email"
                        type="email"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="your@email.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                        })}
                      />
                      {errors.email && <span className={styles.error} role="alert">{errors.email.message}</span>}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>Phone / WhatsApp <span aria-hidden="true">*</span></label>
                      <input
                        id="phone"
                        type="tel"
                        className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: { value: /^[+]?[\d\s\-()]{7,}$/, message: 'Enter a valid phone number' },
                        })}
                      />
                      {errors.phone && <span className={styles.error} role="alert">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="country" className={styles.label}>Country</label>
                    <input
                      id="country"
                      type="text"
                      className={styles.input}
                      placeholder="Your country"
                      autoComplete="country-name"
                      {...register('country')}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="condition" className={styles.label}>Condition / Treatment Interest <span aria-hidden="true">*</span></label>
                    <select
                      id="condition"
                      className={`${styles.input} ${errors.condition ? styles.inputError : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.condition}
                      {...register('condition', { required: 'Please select a condition' })}
                    >
                      <option value="">Select your condition</option>
                      {CONDITIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.condition && <span className={styles.error} role="alert">{errors.condition.message}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Brief Medical History / Message</label>
                    <textarea
                      id="message"
                      className={styles.textarea}
                      placeholder="Briefly describe your condition, current treatments, and any questions you have..."
                      rows={4}
                      {...register('message')}
                    />
                  </div>

                  <CTAButton
                    label={isSubmitting ? 'Sending…' : 'Request Free Consultation'}
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                  />

                  <p className={styles.privacy}>
                    Your information is kept strictly confidential. By submitting, you agree to our{' '}
                    <a href="/privacy" className={styles.privacyLink}>Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
