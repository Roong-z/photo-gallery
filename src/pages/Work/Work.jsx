import { useMemo, useState } from 'react';
import styles from './Work.module.css';
import Gallery from '../../components/Gallery/Gallery.jsx';

export default function Work() {
  const [tab, setTab] = useState('art'); // 'art' | 'tattoo'

  const artItems = useMemo(
    () => [
      { id: 'a1', title: 'Archive 01', note: 'graphite / paper' },
      { id: 'a2', title: 'Archive 02', note: 'charcoal / texture' },
      { id: 'a3', title: 'Archive 03', note: 'ink / distortion' },
      { id: 'a4', title: 'Archive 04', note: 'study' },
      { id: 'a5', title: 'Archive 05', note: 'draft' },
      { id: 'a6', title: 'Archive 06', note: 'unfinished' },
    ],
    []
  );

  const tattooItems = useMemo(
    () => [
      { id: 't1', title: 'Tattoo Example 01', note: 'fine line' },
      { id: 't2', title: 'Tattoo Example 02', note: 'flash' },
      { id: 't3', title: 'Tattoo Example 03', note: 'small piece' },
      { id: 't4', title: 'Tattoo Example 04', note: 'reference' },
    ],
    []
  );

  return (
    <section>
      <div className={styles.head}>
        <h2 className={styles.h2}>Work</h2>
        <p className={styles.p}>ART</p>

        <div className={styles.tabs}>
          <button
            type="button"
            onClick={() => setTab('art')}
            className={
              tab === 'art' ? `${styles.tab} ${styles.active}` : styles.tab
            }
          >
            ART (MAIN)
          </button>

          <button
            type="button"
            onClick={() => setTab('tattoo')}
            className={
              tab === 'tattoo' ? `${styles.tab} ${styles.active}` : styles.tab
            }
          >
            TATTOO (EXAMPLES)
          </button>
        </div>
      </div>

      <Gallery items={tab === 'art' ? artItems : tattooItems} />
    </section>
  );
}
