import { useMemo } from "react";
import styles from "./Work.module.css";
import Gallery from "../../components/Gallery/Gallery.jsx";

export default function Work() {
  const photoItems = useMemo(
    () => [
      {
        id: "a1",
        title: "Archive 01",
        note: "graphite / paper",
        src: "/photos/1.jpeg",
      },
      {
        id: "a2",
        title: "Archive 02",
        note: "charcoal / texture",
        src: "/photos/2.jpeg",
      },
      {
        id: "a3",
        title: "Archive 03",
        note: "ink / distortion",
        src: "/photos/3.jpeg",
      },
      {
        id: "a4",
        title: "Archive 04",
        note: "study",
        src: "/photos/4.jpeg",
      },
      {
        id: "a5",
        title: "Archive 05",
        note: "draft",
        src: "/photos/5.jpeg",
      },
      {
        id: "a6",
        title: "Archive 06",
        note: "unfinished",
        src: "/photos/6.jpeg",
      },
      {
        id: "a7",
        title: "Archive 07",
        note: "unfinished",
        src: "/photos/7.jpeg",
      },
      {
        id: "a8",
        title: "Archive 08",
        note: "unfinished",
        src: "/photos/8.jpeg",
      },
      {
        id: "a9",
        title: "Archive 09",
        note: "unfinished",
        src: "/photos/9.jpeg",
      },
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
