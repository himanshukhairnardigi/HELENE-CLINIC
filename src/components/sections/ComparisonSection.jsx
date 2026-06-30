import { useState } from 'react';
import { COMPARISON } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { useReveal } from '../../hooks/useReveal';
import styles from './ComparisonSection.module.css';

export function ComparisonSection() {
  const ref = useReveal();
  const [activeTable, setActiveTable] = useState(0);
  const table = COMPARISON.tables[activeTable];

  return (
    <section className={`section section--white ${styles.comparison}`} id="comparison" ref={ref}>
      <div className="container">
        <div className={styles.intro} data-reveal>
          <SectionLabel>Honest Comparison</SectionLabel>
          <h2 className={styles.headline}>{COMPARISON.headline}</h2>
          <p className={styles.lead}>{COMPARISON.intro}</p>
        </div>

        {/* Table selector */}
        <div className={styles.tabs} role="tablist" data-reveal>
          {COMPARISON.tables.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTable === i}
              className={`${styles.tab} ${activeTable === i ? styles.tabActive : ''}`}
              onClick={() => setActiveTable(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className={styles.tableWrap} data-reveal data-reveal-delay="1">
          <table className={styles.table} aria-label={`${table.label} treatment comparison`}>
            <thead>
              <tr>
                {table.columns.map((col) => (
                  <th key={col} className={styles.th}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={i} className={`${styles.tr} ${row.highlight ? styles.trHighlight : ''}`}>
                  <td className={`${styles.td} ${styles.tdOption}`}>
                    {row.highlight && <span className={styles.hlBadge}>Helene</span>}
                    {row.option}
                  </td>
                  <td className={styles.td}>{row.cost}</td>
                  <td className={styles.td}>{row.frequency}</td>
                  <td className={styles.td}>{row.targets}</td>
                  <td className={`${styles.td} ${styles.tdLimit}`}>{row.limitation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.disclaimer} data-reveal>{COMPARISON.disclaimer}</p>
      </div>
    </section>
  );
}
