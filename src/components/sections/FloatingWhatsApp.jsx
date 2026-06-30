import { CONTACT } from '../../data/siteData';
import { IconWhatsApp } from '../ui/Icons';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Chat with us on WhatsApp"
    >
      <IconWhatsApp />
      <span className={styles.label}>WhatsApp Us</span>
    </a>
  );
}
