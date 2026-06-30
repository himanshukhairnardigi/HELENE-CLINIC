import styles from './ReviewCard.module.css';

function StarIcon({ filled }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"
      fill={filled ? '#c9a84c' : 'none'}
      stroke="#c9a84c" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export default function ReviewCard({ name, location, condition, rating, quote, outcome }) {
  return (
    <article className={styles.card} aria-label={`Review by ${name}`}>
      <div className={styles.rating} aria-label={`${rating} out of 5 stars`} role="img">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>

      <blockquote className={styles.quote}>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>

      {outcome && (
        <div className={styles.outcome}>
          <span className={styles.outcomeLabel}>Outcome:</span>
          <span>{outcome}</span>
        </div>
      )}

      <footer className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <strong className={styles.name}>{name}</strong>
          <p className={styles.meta}>{location} · {condition}</p>
        </div>
      </footer>
    </article>
  );
}
