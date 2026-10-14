"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {/* Brand Badge inside Footer */}
        <div className={styles.topBrandRow}>
          <div className={styles.brandBadge}>
            <span className={styles.archIcon}>🛵</span>
            <span className={styles.archText}>
              Ceylon<span>Ride</span>
            </span>
          </div>
          <p className={styles.brandTagline}>
            <span className={styles.brandTaglineDot}></span>
            Premium Scooter Rentals in Sri Lanka • Galle & Southern Province
          </p>
        </div>

        <div className={styles.footerGrid}>
          
          {/* Column 1: Address */}
          <div>
            <h3 className={styles.colTitle}>Address</h3>
            <div className={styles.addressList}>
              <div className={styles.addressItem}>
                <svg className={styles.itemIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gunasewana, Pitiduwa, Habaraduwa, Galle, Sri Lanka.</span>
              </div>

              <div className={styles.addressItem}>
                <svg className={styles.itemIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94763890644" className={styles.addressLink}>+94 76 389 0644</a>
              </div>

              <div className={styles.addressItem}>
                <svg className={styles.itemIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.55 15.16 4.13 13.73 4.13 11.91C4.13 7.37 7.84 3.67 12.04 3.67ZM8.83 7.38C8.64 7.38 8.44 7.39 8.27 7.42C8.07 7.46 7.82 7.55 7.62 7.77C7.38 8.03 6.71 8.66 6.71 9.95C6.71 11.24 7.65 12.48 7.78 12.65C7.91 12.82 9.63 15.48 12.27 16.62C12.9 16.89 13.39 17.05 13.77 17.17C14.4 17.37 14.98 17.34 15.43 17.27C15.94 17.19 17 16.62 17.23 15.97C17.46 15.32 17.46 14.77 17.39 14.65C17.32 14.53 17.15 14.47 16.89 14.34C16.63 14.21 15.35 13.58 15.11 13.49C14.88 13.4 14.71 13.36 14.54 13.62C14.37 13.88 13.89 14.47 13.74 14.64C13.6 14.81 13.45 14.83 13.19 14.7C12.93 14.57 12.09 14.3 11.1 13.42C10.33 12.73 9.81 11.88 9.66 11.62C9.51 11.36 9.64 11.22 9.77 11.09C9.89 10.97 10.03 10.79 10.16 10.64C10.29 10.49 10.33 10.38 10.42 10.21C10.51 10.04 10.47 9.89 10.4 9.76C10.33 9.63 9.83 8.39 9.62 7.89C9.42 7.4 9.21 7.47 9.06 7.46L8.83 7.38Z" />
                </svg>
                <a href="https://wa.me/94763890644" target="_blank" rel="noopener noreferrer" className={styles.addressLink}>+94 76 389 0644</a>
              </div>

              <div className={styles.addressItem}>
                <svg className={styles.itemIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Gaveengunasekar95@gmail.com" className={styles.addressLink}>Gaveengunasekar95@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div>
            <h3 className={styles.colTitle}>Opening Hours</h3>
            <div className={styles.hoursBlock}>
              <div className={styles.hoursItem}>
                <span className={styles.hoursDays}>Monday – Friday:</span>
                <span className={styles.hoursTime}>07.00 AM - 7.00 PM</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.hoursDays}>Saturday – Sunday:</span>
                <span className={styles.hoursTime}>07.00 AM - 7.00 PM</span>
              </div>
              <div className={styles.hoursBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Online Booking 24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links / Navbar Buttons */}
          <div>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.navLinksList}>
              <li className={styles.navLinkItem}>
                <Link href="/#home">
                  <span className={styles.navLinkChevron}>›</span> Home
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link href="/#scooters">
                  <span className={styles.navLinkChevron}>›</span> Scooters
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link href="/#services">
                  <span className={styles.navLinkChevron}>›</span> Services
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link href="/#about">
                  <span className={styles.navLinkChevron}>›</span> About Us
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link href="/#faqs">
                  <span className={styles.navLinkChevron}>›</span> FAQs
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link href="/#contact">
                  <span className={styles.navLinkChevron}>›</span> Contact Us
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link href="/checkout">
                  <span className={styles.navLinkChevron}>›</span> Book Now
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link href="/terms">
                  <span className={styles.navLinkChevron}>›</span> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp QR Code Card */}
          <div className={styles.qrCardWrapper}>
            <h3 className={styles.colTitle}>Scan for WhatsApp Chat</h3>
            <a
              href="https://wa.me/message/MWN2O5VB7CSOL1?src=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.qrCard}
              title="Click or Scan to chat on WhatsApp"
            >
              <div className={styles.qrImageWrapper}>
                <img
                  src="/images/whatsapp-qr.png"
                  alt="Scan for WhatsApp Chat"
                  className={styles.qrImage}
                />
              </div>
              <div className={styles.scanMeBtn}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.55 15.16 4.13 13.73 4.13 11.91C4.13 7.37 7.84 3.67 12.04 3.67ZM8.83 7.38C8.64 7.38 8.44 7.39 8.27 7.42C8.07 7.46 7.82 7.55 7.62 7.77C7.38 8.03 6.71 8.66 6.71 9.95C6.71 11.24 7.65 12.48 7.78 12.65C7.91 12.82 9.63 15.48 12.27 16.62C12.9 16.89 13.39 17.05 13.77 17.17C14.4 17.37 14.98 17.34 15.43 17.27C15.94 17.19 17 16.62 17.23 15.97C17.46 15.32 17.46 14.77 17.39 14.65C17.32 14.53 17.15 14.47 16.89 14.34C16.63 14.21 15.35 13.58 15.11 13.49C14.88 13.4 14.71 13.36 14.54 13.62C14.37 13.88 13.89 14.47 13.74 14.64C13.6 14.81 13.45 14.83 13.19 14.7C12.93 14.57 12.09 14.3 11.1 13.42C10.33 12.73 9.81 11.88 9.66 11.62C9.51 11.36 9.64 11.22 9.77 11.09C9.89 10.97 10.03 10.79 10.16 10.64C10.29 10.49 10.33 10.38 10.42 10.21C10.51 10.04 10.47 9.89 10.4 9.76C10.33 9.63 9.83 8.39 9.62 7.89C9.42 7.4 9.21 7.47 9.06 7.46L8.83 7.38Z" />
                </svg>
                <span>SCAN ME</span>
              </div>
            </a>
            <p className={styles.qrSubtitle}>
              Scan with phone camera or tap to chat instantly on WhatsApp.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Ceylon Ride, All Rights Reserved.
          </p>
          <div className={styles.bottomActions}>
            <button
              onClick={scrollToTop}
              className={styles.scrollTopBtn}
              aria-label="Scroll to top"
              title="Back to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
