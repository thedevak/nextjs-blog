import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>Blog</div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
