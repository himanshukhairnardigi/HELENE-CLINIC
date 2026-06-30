import styles from './Heading.module.css';

/**
 * Section heading with optional subheading.
 */
export function Heading({
  as: Tag = 'h2',
  children,
  sub,
  center = false,
  light = false,
  serif = true,
  className = '',
}) {
  return (
    <div
      className={[
        styles.wrapper,
        center && styles['wrapper--center'],
        className,
      ].filter(Boolean).join(' ')}
    >
      <Tag
        className={[
          styles.heading,
          serif && styles['heading--serif'],
          light && styles['heading--light'],
        ].filter(Boolean).join(' ')}
      >
        {children}
      </Tag>
      {sub && (
        <p
          className={[
            styles.sub,
            light && styles['sub--light'],
          ].filter(Boolean).join(' ')}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
