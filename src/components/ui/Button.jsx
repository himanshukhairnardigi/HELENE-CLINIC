import styles from './Button.module.css';

/**
 * Primary CTA button. variant: 'primary' | 'outline' | 'ghost' | 'outline-light'
 * size: 'sm' | 'md' | 'lg'
 */
export function Button({
  as: Tag = 'button',
  children,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  ...rest
}) {
  const cls = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    fullWidth && styles['btn--full'],
    disabled && styles['btn--disabled'],
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
