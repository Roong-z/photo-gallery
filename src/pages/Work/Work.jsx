import { useMemo } from "react";
import styles from "./Work.module.css";
import Gallery from "../../components/Gallery/Gallery.jsx";

export default function Work() {
  const photoItems = useMemo(
    () => [
      { id: "a1", title: "Archive 01", note: "graphite / paper" },
      { id: "a2", title: "Archive 02", note: "charcoal / texture" },
      { id: "a3", title: "Archive 03", note: "ink / distortion" },
      { id: "a4", title: "Archive 04", note: "study" },
      { id: "a5", title: "Archive 05", note: "draft" },
      { id: "a6", title: "Archive 06", note: "unfinished" },
    ],
    []
  );

  return (
    <section>
      <div className={styles.head}>
        <h2 className={styles.h2}>Work</h2>
        <p className={styles.p}>Photo</p>
      </div>

      <Gallery items={photoItems} />
    </section>
  );
}
