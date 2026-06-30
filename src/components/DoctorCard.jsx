import styles from './DoctorCard.module.css';

export default function DoctorCard({ name, title, specialisation, experience, credentials, bio }) {
  return (
    <article className={styles.card} aria-label={`Doctor profile: ${name}`}>
      <div className={styles.photoWrapper} aria-hidden="true">
        <div className={styles.photoPlaceholder}>
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="32" cy="22" r="13" stroke="rgba(26,107,138,0.35)" strokeWidth="2"/>
            <path d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22" stroke="rgba(26,107,138,0.35)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className={styles.badge}>{specialisation}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
        <p className={styles.experience}>{experience}</p>

        <p className={styles.bio}>{bio}</p>

        <div className={styles.credentials}>
          <h4 className={styles.credLabel}>Qualifications</h4>
          <ul className={styles.credList} role="list">
            {credentials.map((c) => (
              <li key={c} className={styles.credItem}>
                <span className={styles.credDot} aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
