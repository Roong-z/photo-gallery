import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ items }) {
  const [open, setOpen] = useState(null); // { src, title } or null

  return (
    <>
      <div className={styles.grid}>
        {items.map((it) => (
          <article
            key={it.id}
            className={styles.card}
            style={{ "--r": Math.random(), "--y": Math.random() }}
          >
            <div className={styles.frame}>
              <button
                type="button"
                className={styles.thumbBtn}
                onClick={() => setOpen({ src: it.src, title: it.title })}
                aria-label={`Open ${it.title}`}
              >
                <div className={styles.thumb}>
                  {it.src ? (
                    <img src={it.src} alt={it.title} loading="lazy" />
                  ) : (
                    <div className={styles.placeholder}>ARCHIVE</div>
                  )}
                </div>
              </button>

              <div className={styles.meta}>
                <div className={styles.title}>{it.title}</div>
                {it.note ? <div className={styles.note}>{it.note}</div> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {open ? (
        <div
          className={styles.modalBackdrop}
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              ×
            </button>

            <img className={styles.modalImg} src={open.src} alt={open.title} />
            <div className={styles.modalCap}>{open.title}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
