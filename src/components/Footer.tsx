
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          {/* Updated to use the new logo image */}
          <img src="/images/logo-electric-drs.png" alt="Electric DRs Designs" className={styles.footerLogo} style={{height: '60px', width: 'auto'}} />
          <p>Your trusted, local electricians serving West Virginia & Florida.</p>
          <div style={{marginTop: '20px', display: 'flex', gap: '15px'}}>
            <a href="#" target="_blank">FB</a>
            <a href="#" target="_blank">TikTok</a>
            <a href="#" target="_blank">YouTube</a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>Hub</h4>
          <ul>
            <li><Link href="/hiring">Careers & Hiring</Link></li>
            <li><Link href="/reviews">Google Reviews</Link></li>
            <li><Link href="/payment">Make a Payment</Link></li>
            <li><Link href="/company/subcontractor-agreement">Vendor Agreement</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Resources</h4>
          <ul>
            <li><Link href="/resources/cost-of-downtime">Downtime Calculator</Link></li>
            <li><Link href="/resources/aep-requirements">AEP Specs</Link></li>
            <li><Link href="/services/residential/digital-products">Digital Shop</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <p>Charleston, WV</p>
          <p><strong>Phone:</strong> <a href="tel:304-410-9208">304-410-9208</a></p>
          <Link href="/contact" className="btn">Request Service</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Electric DRs Designs | All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
