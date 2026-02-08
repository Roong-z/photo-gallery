import styles from './Gallery.module.css';

export default function Gallery({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((it) => (
        <article
          key={it.id}
          className={styles.card}
          style={{
            '--r': Math.random(),
            '--y': Math.random(),
          }}
        >
          <div className={styles.frame}>
            <div className={styles.thumb} aria-label={it.title}>
              <div className={styles.placeholder}>ARCHIVE</div>
              {/* 나중에 실제 이미지:
              <img src={it.src} alt={it.title} loading="lazy" />
              */}
            </div>

            <div className={styles.meta}>
              <div className={styles.title}>{it.title}</div>
              {it.note ? <div className={styles.note}>{it.note}</div> : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
