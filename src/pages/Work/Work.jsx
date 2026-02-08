import { useMemo } from "react";
import styles from "./Work.module.css";
import Gallery from "../../components/Gallery/Gallery.jsx";

export default function Work() {
  const photoItems = useMemo(
    () => [
      {
        id: "a1",
        title: "엇갈림",
        note: "그림자 / 뜻밖의빛",
        src: "/photos/1.jpeg",
      },
      {
        id: "a2",
        title: "만남",
        note: "유일한빛 / 나의전부",
        src: "/photos/2.jpeg",
      },
      {
        id: "a3",
        title: "겨울",
        note: "쓸쓸함 / 차가움",
        src: "/photos/3.jpeg",
      },
      {
        id: "a4",
        title: "소망",
        note: "따뜻한마음",
        src: "/photos/4.jpeg",
      },
      {
        id: "a5",
        title: "하늘바다",
        note: "이면",
        src: "/photos/5.jpeg",
      },
      {
        id: "a6",
        title: "집",
        note: "남아있던정",
        src: "/photos/6.jpeg",
      },
      {
        id: "a7",
        title: "빛바랜소망",
        note: "꺼지지않는빛",
        src: "/photos/7.jpeg",
      },
      {
        id: "a8",
        title: "오사카",
        note: "도시와물",
        src: "/photos/8.jpeg",
      },
      {
        id: "a9",
        title: "누군가의일상",
        note: "위로",
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
