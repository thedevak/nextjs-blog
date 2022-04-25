import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>Blog</div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Design</Link>
          </li>
          <li>
            <Link href="/">Development</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
