import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Nav from "../Nav/Nav.jsx";

export default function Layout() {
  return (
    <div className={styles.shell}>
      <div className="noise" aria-hidden="true" />
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.stamp}>PRIVATE STUDIO</span>
          <span className={styles.copy}>
            © {new Date().getFullYear()}PHOTOS'J
          </span>
        </div>
      </footer>
    </div>
  );
}
