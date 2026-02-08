import { useMemo } from 'react';
import styles from './Goods.module.css';
import Gallery from '../../components/Gallery/Gallery.jsx';

export default function Goods() {
  const items = useMemo(
    () => [
      { id: 'g1', title: 'Clay Piece 01', note: 'Price: (add) / DM or email' },
      { id: 'g2', title: 'Art Object 02', note: 'Limited' },
      { id: 'g3', title: 'Print 03' },
      { id: 'g4', title: 'Small item 04' },
    ],
    []
  );

  return (
    <section>
      <div className={styles.head}>
        <h2 className={styles.h2}>Goods</h2>
        <p className={styles.p}>Contact me</p>
        <a
          className={styles.cta}
          href="mailto:your.email@example.com?subject=Goods%20Inquiry"
        >
          Email for purchase inquiry
        </a>
      </div>

      <Gallery items={items} />
    </section>
  );
}
