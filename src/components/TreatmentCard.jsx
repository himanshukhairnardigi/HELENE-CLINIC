import styles from './TreatmentCard.module.css';

const ICONS = {
  bone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18.5 5.5a4.5 4.5 0 0 1 0 6.364L12 18.364l-6.364-6.364a4.5 4.5 0 1 1 6.364-6.364l.364.363.364-.363a4.5 4.5 0 0 1 3.172-1.316z"/>
    </svg>
  ),
  brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24 2.5 2.5 0 012.44-1.76zm5 0A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96-.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24A2.5 2.5 0 0014.5 2z"/>
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  star: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
};

export default function TreatmentCard({ icon, title, conditions, description, isActive, onClick }) {
  return (
    <article
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">{ICONS[icon]}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.arrow} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </div>

      {isActive && (
        <div className={styles.body}>
          <p className={styles.description}>{description}</p>
          <div className={styles.conditionsList} aria-label="Conditions treated">
            <h4 className={styles.conditionsLabel}>Conditions Treated:</h4>
            <ul role="list">
              {conditions.map((c) => (
                <li key={c} className={styles.conditionItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
