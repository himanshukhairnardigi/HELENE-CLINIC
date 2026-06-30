import styles from './Divider.module.css';

export function Divider({ center = false, light = false }) {
  return (
    <div
      className={[
        styles.divider,
        center && styles['divider--center'],
        light && styles['divider--light'],
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  );
}
