import { VIDEO_SECTION } from '../../data/siteData';
import { SectionLabel } from '../ui/SectionLabel';
import { useReveal } from '../../hooks/useReveal';
import styles from './VideoSection.module.css';

export function VideoSection() {
  const ref = useReveal();

  return (
    <section className={`section section--dark ${styles.video}`} id="video" ref={ref}>
      <div className="container container--narrow">
        <div className={styles.intro} data-reveal>
          <SectionLabel light>Inside the Clinic</SectionLabel>
          <h2 className={styles.headline}>{VIDEO_SECTION.headline}</h2>
          <p className={styles.body}>{VIDEO_SECTION.body}</p>
        </div>

        <div className={styles.embedWrap} data-reveal data-reveal-delay="1">
          <iframe
            className={styles.embed}
            src={`https://www.youtube.com/embed/${VIDEO_SECTION.youtubeId}`}
            title={VIDEO_SECTION.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <p className={styles.caption} data-reveal data-reveal-delay="2">
          {VIDEO_SECTION.caption}
        </p>
      </div>
    </section>
  );
}
