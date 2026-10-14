"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={() => handleLinkClick('home')}>
          🛵 Ceylon<span>Ride</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${activeLink === 'home' ? styles.active : ''}`} onClick={() => handleLinkClick('home')}>Home</Link>
          <Link href="#scooters" className={`${styles.navLink} ${activeLink === 'scooters' ? styles.active : ''}`} onClick={() => handleLinkClick('scooters')}>Scooters</Link>
          <Link href="#services" className={`${styles.navLink} ${activeLink === 'services' ? styles.active : ''}`} onClick={() => handleLinkClick('services')}>Services</Link>
          <Link href="#about" className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`} onClick={() => handleLinkClick('about')}>About Us</Link>
          <Link href="#faqs" className={`${styles.navLink} ${activeLink === 'faqs' ? styles.active : ''}`} onClick={() => handleLinkClick('faqs')}>FAQs</Link>
          <Link href="#contact" className={`${styles.navLink} ${activeLink === 'contact' ? styles.active : ''}`} onClick={() => handleLinkClick('contact')}>Contact Us</Link>
        </nav>
        <div className={styles.navActions}>
          <Link href="/checkout" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: '2rem' }}>
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
