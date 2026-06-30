import { FOOTER, SITE_META } from '../data/content';
import Container from './Container';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <a href="#top" className={styles.logo} aria-label="Helene Clinic — Back to top">
                <span className={styles.logoIcon} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="16" fill="#1a6b8a"/>
                    <path d="M16 7v18M7 16h18" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className={styles.logoText}><strong>Helene</strong> Clinic</span>
              </a>
              <p className={styles.tagline}>{FOOTER.tagline}</p>
              <address className={styles.contactBlock} aria-label="Contact information">
                <a href={`tel:${FOOTER.contact.phone}`} className={styles.contactLink}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                  </svg>
                  {FOOTER.contact.phone}
                </a>
                <a href={`mailto:${FOOTER.contact.email}`} className={styles.contactLink}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  {FOOTER.contact.email}
                </a>
                <span className={styles.address}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  {FOOTER.contact.address}
                </span>
              </address>
            </div>

            <nav aria-label="Quick links">
              <h3 className={styles.colTitle}>Quick Links</h3>
              <ul className={styles.linkList} role="list">
                {FOOTER.quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className={styles.link}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Conditions we treat">
              <h3 className={styles.colTitle}>Conditions We Treat</h3>
              <ul className={styles.linkList} role="list">
                {FOOTER.conditions.map((c) => (
                  <li key={c}>
                    <a href="#treatment" className={styles.link}>{c}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className={styles.colTitle}>Get Started</h3>
              <p className={styles.ctaText}>Start with a free specialist consultation — no obligation, no cost.</p>
              <a href="#contact" className={styles.ctaBtn}>Request Free Consultation</a>
              <div className={styles.whatsapp}>
                <a
                  href={`https://wa.me/${FOOTER.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                  aria-label="Chat on WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.bottom}>
        <Container>
          <div className={styles.bottomInner}>
            <p className={styles.disclaimer}>{FOOTER.disclaimer}</p>
            <div className={styles.bottomRight}>
              <p className={styles.copyright}>
                © {currentYear} Helene Clinic. All rights reserved.
              </p>
              <nav aria-label="Legal links">
                <ul className={styles.legalLinks} role="list">
                  {FOOTER.legal.map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} className={styles.legalLink}>{label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
