import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.wrap}>
      <div className={styles.left}>
        <div className={styles.labelRow}>
          <span className={styles.tag}>DO NOT DISTURB</span>
          <span className={styles.tagAlt}>LOW LIGHT</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleThin}>PRIVATE</span>
          <span className={styles.titleBold}>ARCHIVE</span>
        </h1>

        <p className={styles.desc}>
          Texture. Emotion. Dreamscape
          <br />
          Art, Tatoo
        </p>

        <div className={styles.actions}>
          <Link to="/work" className="btn">
            ENTER WORK <span className={styles.dot} />
          </Link>
          <Link to="/booking" className={`${styles.btnGhost} btn`}>
            REQUEST BOOKING
          </Link>
        </div>

        <div className={styles.whisper}>
          <span className={styles.whisperLine}>If you found this,</span>
          <span className={styles.whisperLine}>keep it quiet.</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={`${styles.panel} paper`}>
          <div className={styles.panelHead}>
            <span className="smallCaps">notes</span>
            <span className={styles.serial}># 00-13</span>
          </div>

          <div className={styles.panelBody}>
            <div className={styles.item}>
              <span className={styles.k}>Location</span>
              <span className={styles.v}>Canada</span>
            </div>
            <div className={styles.item}>
              <span className={styles.k}>Style</span>
              <span className={styles.v}>line / texture / distortion</span>
            </div>
            <div className={styles.item}>
              <span className={styles.k}>Contact</span>
              <span className={styles.v}>your.email@example.com</span>
            </div>
          </div>

          <div className={styles.panelFoot}>
            <Link to="/about" className={styles.smallLink}>
              OPEN ABOUT
            </Link>
            <Link to="/goods" className={styles.smallLink}>
              OPEN GOODS
            </Link>
            <Link to="/donation" className={styles.smallLink}>
              TIP JAR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
