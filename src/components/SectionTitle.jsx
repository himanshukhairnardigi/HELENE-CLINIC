import styles from './SectionTitle.module.css';

export default function SectionTitle({ tag, heading, subheading, center = false, light = false }) {
  return (
    <div className={`${styles.wrapper} ${center ? styles.center : ''} ${light ? styles.light : ''}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.heading}>{heading}</h2>
      {subheading && <p className={styles.subheading}>{subheading}</p>}
    </div>
  );
}
