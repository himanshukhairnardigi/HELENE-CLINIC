import { CONTACT } from '../../data/siteData';
import { IconWhatsApp } from '../ui/Icons';
import styles from './StickyCTA.module.css';

export function StickyCTA() {
  return (
    <div className={styles.bar} role="complementary" aria-label="Contact us on WhatsApp">
      <p className={styles.text}>
        Wondering whether regenerative medicine in Japan may be suitable for you?
        <strong> Share your reports on WhatsApp and speak with our medical team.</strong>
      </p>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
        aria-label="Share your reports on WhatsApp"
      >
        <IconWhatsApp />
        <span>WhatsApp Us Now</span>
      </a>
    </div>
  );
}
