import styles from './SectionLabel.module.css';

/**
 * Small uppercase label shown above section headings.
 * Optionally centered, optionally with an accent line.
 */
export function SectionLabel({ children, center = false, light = false }) {
  return (
    <span
      className={[
        styles.label,
        center && styles['label--center'],
        light && styles['label--light'],
      ].filter(Boolean).join(' ')}
    >
      {children}
    </span>
  );
}
