import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Side: Image / Illustration */}
        <div className={styles.imageColumn}>
          <div className={styles.mainImageWrapper}>
            <div className={styles.mapBackground}></div>
            {/* Main Image */}
            <img 
              src="/images/tourist_on_honda_dio.jpg" 
              alt="Tourist riding Honda Dio scooter" 
              className={styles.mainImage}
            />
            
            {/* Floating Badges (Static Map Cards) */}
            <div className={`${styles.floatingBadge} ${styles.badge1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/locations/unawatuna.jpg" alt="Unawatuna Beach" className={styles.badgeImage} />
              <div className={styles.badgeText}>
                <h4>Unawatuna Beach</h4>
              </div>
              <div className={styles.mapPin}></div>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badge2}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/locations/galle_fort.png" alt="Galle Fort" className={styles.badgeImage} />
              <div className={styles.badgeText}>
                <h4>Galle Fort</h4>
              </div>
              <div className={styles.mapPin}></div>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badge3}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/locations/thalpe.png" alt="Thalpe" className={styles.badgeImage} />
              <div className={styles.badgeText}>
                <h4>Thalpe</h4>
              </div>
              <div className={styles.mapPin}></div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.contentColumn}>
          <span className={styles.eyebrow}>- WHY CHOOSE CEYLON RIDE -</span>
          <h2 className={styles.title}>Because Your Journey Deserves the Best</h2>
          <p className={styles.description}>
            At Ceylon Ride, we are here to make sure that every ride is smooth, reliable and worry-free, giving you the confidence to explore Sri Lanka without limits.
          </p>

          <div className={styles.featuresGrid}>
            
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Trusted Payment Options</h3>
                <p>Multiple payment methods, including cash, card, online transfer, and QR payments.</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Reliable Scooters</h3>
                <p>Brand-new Honda Dio scooters in excellent running condition for long-distance travel.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              </div>
              <div className={styles.featureContent}>
                <h3>24/7 Customer Support</h3>
                <p>Assistance available anytime throughout your journey in Sri Lanka.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Full Service & Maintenance</h3>
                <p>Regular servicing, maintenance, and repairs included with every rental.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Hotel Delivery</h3>
                <p>Convenient delivery and pickup directly to your hotel or villa anywhere in the South Coast.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Flexible Operating Hours</h3>
                <p>Open on request and flexible scheduling to suit your travel plans.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
