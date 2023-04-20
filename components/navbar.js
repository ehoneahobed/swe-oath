import Link from 'next/link';
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__left}>
          <Link href="/" className={styles.navbar__logo}>
            SE Ethical Codex
          </Link>
        </div>
        <div className={styles.navbar__right}>
          <Link href="/oath" className={styles.navbar__link}>
            Oath
          </Link>
          <Link href="/about" className={styles.navbar__link}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
