import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          <img src="/logo.svg" alt="Electric DRs Designs Logo" />
        </Link>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}><Link href="/services">Services</Link></li>
          <li className={styles.navItem}><Link href="/locations">Locations</Link></li>
          <li className={styles.navItem}><Link href="/about">About</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
          <li className={styles.navItemHighlight}><Link href="/maintenance-advisor">AI Safety Advisor</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
