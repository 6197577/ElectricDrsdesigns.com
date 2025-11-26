import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import LocationCard from '../components/LocationCard';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <Layout>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Your Trusted Electricians in West Virginia & Florida</h1>
          <p>Reliable, Safe, and Professional Electrical Solutions.</p>
          <Link href="/contact" className="btn">Get a Free Estimate</Link>
        </div>
      </header>
      <section className="container">
        <h2 className={styles.sectionTitle}>Our Core Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceHighlight}>
            <h3>Residential Services</h3>
            <p>Panel upgrades, smart home installations, and safety.</p>
            <Link href="/services/residential" className="btn-secondary">View Residential</Link>
          </div>
          <div className={styles.serviceHighlight}>
            <h3>Commercial Services</h3>
            <p>Compliance plans, thermography, and repairs.</p>
            <Link href="/services/commercial" className="btn-secondary">View Commercial</Link>
          </div>
        </div>
      </section>
      <section className="container" style={{backgroundColor: '#f9f9f9', borderRadius:'8px', padding:'40px'}}>
        <h2 className={styles.sectionTitle}>Serving Our Communities</h2>
        <div className={styles.locationGrid}>
          <LocationCard name="Charleston, WV" imageUrl="/images/charleston.jpg" pageUrl="/locations/charleston" />
          <LocationCard name="Gainesville, FL" imageUrl="/images/gainesville-florida.jpg" pageUrl="/locations/gainesville-florida" />
        </div>
        <div style={{textAlign:'center', marginTop:'30px'}}>
            <Link href="/locations" className="btn">All Locations</Link>
        </div>
      </section>
    </Layout>
  );
}
