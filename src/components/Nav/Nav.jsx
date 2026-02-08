import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const links = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/goods', label: 'Goods' },
  { to: '/booking', label: 'Booking' },
  { to: '/donation', label: 'Donation' },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.brandTop}>MJ</span>
          <span className={styles.brandSub}>secret archive / art & tattoo</span>
        </NavLink>

        <nav className={styles.nav}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
