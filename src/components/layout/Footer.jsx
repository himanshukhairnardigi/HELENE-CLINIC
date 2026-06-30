import { FOOTER, CONTACT, NAV } from '../../data/siteData';
import { IconPhone, IconMail, IconMap, IconYoutube, IconInstagram, IconWhatsApp } from '../ui/Icons';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className="container--wide">
          <div className={styles.topInner}>
            {/* Brand */}
            <div className={styles.brand}>
              <a href="#top" className={styles.logo} aria-label="Helene Clinic India — Back to top">
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <rect width="28" height="28" rx="4" fill="#1a3249"/>
                  <path d="M14 5v18M5 14h18" stroke="#c9a44a" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
                <span className={styles.logoText}>
                  <span>HELENE</span>
                  <span className={styles.logoDot} aria-hidden="true"/>
                  <span>CLINIC</span>
                </span>
              </a>
              <p className={styles.tagline}>{FOOTER.tagline}</p>

              <address className={styles.contactBlock} aria-label="Contact information">
                <a href={`tel:${CONTACT.phone}`} className={styles.contactLine}>
                  <IconPhone /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className={styles.contactLine}>
                  <IconMail /> {CONTACT.email}
                </a>
                <span className={styles.contactLine}>
                  <IconMap /> {CONTACT.address}
                </span>
              </address>

              <div className={styles.social} aria-label="Social media links">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.whatsapp}`}
                  aria-label="Chat on WhatsApp"
                >
                  <IconWhatsApp />
                </a>
                {FOOTER.social.map(({ platform, href, label }) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={label}
                  >
                    {platform === 'YouTube' ? <IconYoutube /> : <IconInstagram />}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {FOOTER.columns.map(({ heading, links }) => (
              <nav key={heading} aria-label={heading}>
                <h3 className={styles.colHeading}>{heading}</h3>
                <ul className={styles.colList} role="list">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className={styles.colLink}>{label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* CTA column */}
            <div className={styles.ctaCol}>
              <h3 className={styles.colHeading}>Get Started</h3>
              <p className={styles.ctaColText}>
                Free specialist consultation — no commitment, no cost.
              </p>
              <a href="#contact" className={styles.ctaColBtn}>
                Request Free Consultation
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
                aria-label="Chat on WhatsApp"
              >
                <IconWhatsApp />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container--wide">
          <p className={styles.disclaimer}>{FOOTER.disclaimer}</p>
          <div className={styles.bottomBar}>
            <p className={styles.copyright}>
              © {year} Helene Clinic. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className={styles.legalLinks} role="list">
                {FOOTER.columns[2].links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className={styles.legalLink}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
