import styles from './Container.module.css';

export default function Container({ children, narrow = false, className = '' }) {
  return (
    <div className={`${narrow ? styles.narrow : styles.container} ${className}`}>
      {children}
    </div>
  );
}
