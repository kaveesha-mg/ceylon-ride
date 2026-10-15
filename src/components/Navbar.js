"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${mobileMenuOpen ? styles.headerExpanded : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        
        {/* Left corner: Logo */}
        <Link href="/" className={styles.logo} onClick={() => handleLinkClick('home')}>
          🛵 Ceylon<span>Ride</span>
        </Link>

        {/* Desktop Links / Mobile Dropdown */}
        <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksMobileOpen : ''}`}>
          <Link href="/" className={`${styles.navLink} ${activeLink === 'home' ? styles.active : ''}`} onClick={() => handleLinkClick('home')}>Home</Link>
          <Link href="#scooters" className={`${styles.navLink} ${activeLink === 'scooters' ? styles.active : ''}`} onClick={() => handleLinkClick('scooters')}>Scooters</Link>
          <Link href="#services" className={`${styles.navLink} ${activeLink === 'services' ? styles.active : ''}`} onClick={() => handleLinkClick('services')}>Services</Link>
          <Link href="#about" className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`} onClick={() => handleLinkClick('about')}>About Us</Link>
          <Link href="#faqs" className={`${styles.navLink} ${activeLink === 'faqs' ? styles.active : ''}`} onClick={() => handleLinkClick('faqs')}>FAQs</Link>
          <Link href="#contact" className={`${styles.navLink} ${activeLink === 'contact' ? styles.active : ''}`} onClick={() => handleLinkClick('contact')}>Contact Us</Link>
          <Link href="/checkout" className={styles.navLinkMobileBook} onClick={() => handleLinkClick('book')}>Book Now</Link>
        </nav>

        {/* Right corner: Desktop has Book Now; Mobile has Hamburger Menu Lines (iri tika) */}
        <div className={styles.navActions}>
          <Link href="/checkout" className={`btn btn-primary ${styles.bookNowNavBtn}`} onClick={() => setMobileMenuOpen(false)}>
            Book Now
          </Link>
          <button 
            type="button"
            className={styles.hamburgerBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
