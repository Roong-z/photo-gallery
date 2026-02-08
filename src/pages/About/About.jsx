import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>About</h2>
      <p className={styles.p}>Moments remembered. Feelings shared.</p>

      <div className={styles.box}>
        <div className={styles.label}>Artist statement</div>
        <p className={styles.p2}>Texture. Emotion. Dreamscape </p>
      </div>
    </section>
  );
}
