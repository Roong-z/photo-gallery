import styles from './Donation.module.css';

export default function Donation() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Donation</h2>
      <p className={styles.p}>Keep the work alive</p>

      <div className={styles.box}>
        <div className={styles.placeholder}>QR / Link Placeholder</div>
        <div className={styles.small}>
          Support the artist. Keep the work alive.
        </div>
      </div>
    </section>
  );
}
