import { useForm } from 'react-hook-form';
import { CONTACT, INQUIRY_CONDITIONS } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { Heading } from '../ui/Heading';
import { Divider } from '../ui/Divider';
import { Button } from '../ui/Button';
import { IconPhone, IconMail, IconMap, IconWhatsApp } from '../ui/Icons';
import { useReveal } from '../../hooks/useReveal';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const ref = useReveal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  function onSubmit(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', data);
        resolve();
      }, 1000);
    });
  }

  if (isSubmitSuccessful) {
    return (
      <section className={`section section--light ${styles.contact}`} id="contact" ref={ref}>
        <div className="container container--narrow">
          <div className={styles.success}>
            <span className={styles.successIcon} aria-hidden="true">✓</span>
            <h2 className={styles.successTitle}>Thank You!</h2>
            <p className={styles.successText}>
              Your enquiry has been received. Our medical coordinator will contact you
              within 24 hours to discuss your case.
            </p>
            <Button variant="outline" onClick={() => reset()}>
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section section--light ${styles.contact}`} id="contact" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Free Consultation</SectionLabel>
          <Heading sub="No obligation — our specialists will assess your case and guide you">
            Request Your Free Consultation
          </Heading>
          <Divider />
        </div>

        <div className={styles.layout}>
          <div className={styles.formWrap} data-reveal data-reveal-delay="1">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && <span className={styles.error} role="alert">{errors.firstName.message}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && <span className={styles.error} role="alert">{errors.lastName.message}</span>}
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                    })}
                  />
                  {errors.email && <span className={styles.error} role="alert">{errors.email.message}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>Phone / WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <span className={styles.error} role="alert">{errors.phone.message}</span>}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="country" className={styles.label}>Country of Residence *</label>
                <input
                  id="country"
                  type="text"
                  autoComplete="country-name"
                  className={`${styles.input} ${errors.country ? styles.inputError : ''}`}
                  {...register('country', { required: 'Country is required' })}
                />
                {errors.country && <span className={styles.error} role="alert">{errors.country.message}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="condition" className={styles.label}>Primary Condition / Area of Interest *</label>
                <select
                  id="condition"
                  className={`${styles.input} ${errors.condition ? styles.inputError : ''}`}
                  {...register('condition', { required: 'Please select a condition' })}
                >
                  <option value="">Select condition…</option>
                  {INQUIRY_CONDITIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.condition && <span className={styles.error} role="alert">{errors.condition.message}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Tell Us About Your Case</label>
                <textarea
                  id="message"
                  rows={4}
                  className={styles.textarea}
                  placeholder="Please describe your current symptoms, treatment history, and any questions you have…"
                  {...register('message')}
                />
              </div>

              <div className={styles.consent}>
                <input
                  type="checkbox"
                  id="consent"
                  className={styles.checkbox}
                  {...register('consent', { required: 'Please confirm your consent' })}
                />
                <label htmlFor="consent" className={styles.consentLabel}>
                  I consent to Helene Clinic contacting me regarding my enquiry and storing my information in accordance with their privacy policy. *
                </label>
              </div>
              {errors.consent && <span className={styles.error} role="alert">{errors.consent.message}</span>}

              <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Request Free Consultation'}
              </Button>

              <p className={styles.formNote}>
                We respond within 24 hours. Your information is kept strictly confidential.
              </p>
            </form>
          </div>

          <aside className={styles.sidebar} data-reveal data-reveal-delay="2">
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Contact Us Directly</h3>
              <div className={styles.contacts}>
                <a href={`tel:${CONTACT.phone}`} className={styles.contactItem}>
                  <IconPhone />
                  <span>{CONTACT.phone}</span>
                </a>
                <a href={`mailto:${CONTACT.email}`} className={styles.contactItem}>
                  <IconMail />
                  <span>{CONTACT.email}</span>
                </a>
                <span className={styles.contactItem}>
                  <IconMap />
                  <span>{CONTACT.address}</span>
                </span>
              </div>

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <IconWhatsApp />
                Chat on WhatsApp
              </a>
            </div>

            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>What to Expect</h3>
              <ol className={styles.expectList}>
                {[
                  'We review your enquiry within 24 hours',
                  'A specialist will contact you to discuss your case',
                  'You receive a personalised treatment assessment',
                  'No commitment required at this stage',
                ].map((item, i) => (
                  <li key={i} className={styles.expectItem}>
                    <span className={styles.expectNum}>{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
