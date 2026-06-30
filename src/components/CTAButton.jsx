import styles from './CTAButton.module.css';

export default function CTAButton({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  fullWidth = false,
  className = '',
  icon,
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.full : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={cls} role="button">
        {label}
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {label}
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
    </button>
  );
}
