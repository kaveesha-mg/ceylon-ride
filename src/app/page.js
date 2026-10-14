'use client';

import Link from 'next/link';
import styles from './page.module.css';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import Navbar from '../components/Navbar';
import VehiclesSection from '../components/VehiclesSection';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContainer}>
          {/* Header */}
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              Discover Sri Lanka on a <span>Scooter</span>
            </h1>
            <p className={styles.heroDescription}>
              Easy, affordable and reliable scooter rentals around Galle, Unawatuna, Thalpe, Habaraduwa & Ahangama. Start your adventure today.
            </p>
          </div>

            {/* Action Buttons Centered */}
            <div className={styles.actionRowCenter}>
              <Link href="/checkout" className={styles.bookNowBtn}>
                Book Now
              </Link>
              <a href="tel:+94763890644" className={styles.callBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +94763890644
              </a>
            </div>

          {/* Vehicle Features & Specs on Left Side (DLX area, no box) */}
          <div className={styles.specsLeftWrapper}>
            <div className={styles.specsListClean}>
              {/* 1. Full Insurance */}
              <div className={styles.specRow}>
                <span className={styles.specIconCircleGreen}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 5.5v5.5c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V5.5L12 2z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 12l2.5 2.5 5-5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className={styles.specLabel}>FULL INSURANCE:</span>
                <span className={styles.specValue}>YES</span>
              </div>

              {/* 2. Helmets */}
              <div className={styles.specRow}>
                <span className={styles.specIconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M13.5 3C7.7 3 3 7.7 3 13.5c0 2.4.8 4.6 2.2 6.4.3.4.8.6 1.3.6h4.5c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H8.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5 0 .6.4 1.1 1 1.2l1.5.3c.4.1.8-.1 1-.4 1.6-1.8 2.5-4.1 2.5-6.6C23 7.7 18.7 3 13.5 3z M11 11.5H5.8c-.4 0-.8-.4-.8-.8 0-.4.4-.8.8-.8H11c.4 0 .8.4.8.8 0 .4-.4.8-.8.8z"/>
                  </svg>
                </span>
                <span className={styles.specLabel}>HELMETS:</span>
                <span className={styles.specValue}>1 OR 2</span>
              </div>

              {/* 3. First-Aid Kit */}
              <div className={styles.specRow}>
                <span className={styles.specIconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <rect x="3" y="6" width="18" height="15" rx="3" fill="#fbbf24" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M12 9.5v8M8 13.5h8" stroke="#23272d" strokeWidth="2.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span className={styles.specLabel}>FIRST-AID KIT:</span>
                <span className={styles.specValue}>YES</span>
              </div>

              {/* 4. Transmission */}
              <div className={styles.specRow}>
                <span className={styles.specIconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="6" y1="6" x2="6" y2="18" />
                    <line x1="12" y1="6" x2="12" y2="18" />
                    <line x1="18" y1="6" x2="18" y2="18" />
                    <circle cx="6" cy="5" r="1.5" fill="#fbbf24" />
                    <circle cx="6" cy="19" r="1.5" fill="#fbbf24" />
                    <circle cx="12" cy="5" r="1.5" fill="#fbbf24" />
                    <circle cx="12" cy="19" r="1.5" fill="#fbbf24" />
                    <circle cx="18" cy="5" r="1.5" fill="#fbbf24" />
                    <circle cx="18" cy="19" r="1.5" fill="#fbbf24" />
                  </svg>
                </span>
                <span className={styles.specLabel}>TRANSMISSION:</span>
                <span className={styles.specValue}>AUTO</span>
              </div>

              {/* 5. 24/7 Road Side Assistance */}
              <div className={styles.specRow}>
                <span className={styles.specIconCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <line x1="12" y1="3" x2="12" y2="4.5" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="16" y1="4.2" x2="15.2" y2="5.5" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="19.2" y1="7.2" x2="17.9" y2="8" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="20.5" y1="11.5" x2="19" y2="11.5" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M19 14a7.5 7.5 0 1 1-4.2-9.7" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                    <polygon points="12,2 16,4.5 14.5,0.5" fill="#fbbf24" />
                    <text x="11.5" y="14.5" fill="#fbbf24" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">24</text>
                  </svg>
                </span>
                <span className={styles.specLabel}>24/7 ROAD SIDE ASSISTANCE:</span>
                <span className={styles.specValue}>YES</span>
              </div>

              {/* 6. Milage */}
              <div className={styles.specRow}>
                <span className={styles.specIconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 17a9 9 0 1 1 16 0" strokeWidth="2.2" />
                    <line x1="6.5" y1="14" x2="8" y2="13" strokeWidth="1.8" />
                    <line x1="8" y1="9" x2="9.5" y2="10" strokeWidth="1.8" />
                    <line x1="12" y1="7" x2="12" y2="9" strokeWidth="1.8" />
                    <line x1="16" y1="9" x2="14.5" y2="10" strokeWidth="1.8" />
                    <line x1="17.5" y1="14" x2="16" y2="13" strokeWidth="1.8" />
                    <line x1="12" y1="16" x2="16" y2="11" strokeWidth="2.4" stroke="#fbbf24" />
                    <circle cx="12" cy="16" r="2" fill="#fbbf24" strokeWidth="0" />
                  </svg>
                </span>
                <span className={styles.specLabel}>MILAGE:</span>
                <span className={styles.specValue}>UNLIMITED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scooters Section */}
      <VehiclesSection />

      {/* Why Choose Us / Services */}
      <ServicesSection />

      {/* About Us Section */}
      <AboutSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
