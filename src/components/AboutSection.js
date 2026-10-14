"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './AboutSection.module.css';

/* =========================================================================
   GALLERY DATA CONFIGURATION
   -------------------------------------------------------------------------
   ඔබට පසුව ඔබගේම real images හෝ විස්තර මෙතැනින් ඉතා පහසුවෙන් edit කළ හැක:
   - image: ඡායාරූපයේ path එක (උදා: '/images/gallery/my_image.jpg' හෝ '/uploads/photo.jpg')
   - title: Scooter එකේ නම
   - category: වර්ගය හෝ පාට (උදා: 'SCOOTER • SPORTS BLUE')
   - location: විශේෂාංග හෝ spec (උදා: '110cc Automatic • HET Engine')
   - badge: Card එක උඩ පෙන්වන Tag එක (උදා: 'POPULAR CHOICE')
   - description: Lightbox modal එකේ පෙන්වන සවිස්තරාත්මක විස්තරය
   ========================================================================= */
const galleryItems = [
  {
    id: 1,
    title: 'Honda Dio 110 Sports Blue',
    category: 'SCOOTER • SPORTS BLUE',
    location: '110cc Automatic • Combi-Brake System',
    badge: 'Popular Choice',
    image: '/images/gallery/dio_sports_blue.jpg',
    description: 'Sporty and agile Honda Dio 110 in striking Sports Blue. Designed for smooth handling, excellent mileage, and effortless coastal cruising.',
  },
  {
    id: 2,
    title: 'Honda Dio 110 Matte Axis Grey',
    category: 'SCOOTER • MATTE EDITION',
    location: 'Refined Matte Finish • Tubeless Tyres',
    badge: 'Premium Matte',
    image: '/images/gallery/dio_matte_grey.jpg',
    description: 'Modern and sleek Matte Grey Honda Dio. Equipped with reliable braking, smooth suspension, and comfortable seating for day-long exploration.',
  },
  {
    id: 3,
    title: 'Honda Dio 110 (Touring Box Edition)',
    category: 'SCOOTER • TOURING READY',
    location: 'Rear Storage Trunk • Easy Automatic',
    badge: 'Extra Storage',
    image: '/images/gallery/dio_white_touring.jpg',
    description: 'Equipped with a secure lockable rear top box for daypacks, helmets, and cameras. The ideal scooter for multi-day beach hopping.',
  },
  {
    id: 4,
    title: 'Honda Dio DX Sports Red',
    category: 'SCOOTER • SPORTS RED',
    location: 'LED Headlamp • Generous Underseat Bay',
    badge: 'Beach Cruiser',
    image: '/images/gallery/dio_red_sports.jpg',
    description: 'Bright and energetic Sports Red Honda Dio. Features bright LED illumination and spacious under-seat storage for your daily gear.',
  },
  {
    id: 5,
    title: 'Honda Dio Coastal Explorer',
    category: 'SCOOTER • ROAD TRIP READY',
    location: 'Galle & Mirissa Highway Link',
    badge: 'Freedom to Ride',
    image: '/images/tourist_on_honda_dio.jpg',
    description: 'Discover hidden beaches, coastal viewpoints, and quiet inland trails at your own rhythm with zero stress.',
  },
  {
    id: 6,
    title: 'Honda Dio Island Touring',
    category: 'SCOOTER • DUO COMFORT',
    location: 'Spacious Dual Seat • Balanced Handling',
    badge: 'Comfort for Two',
    image: '/images/tourist_on_scooter.jpg',
    description: 'Generous pillion comfort and smooth throttle response make this Honda Dio ideal for couples exploring Sri Lanka together.',
  },
];

export default function AboutSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScrollButtons);
    };
  }, []);

  const handleScroll = (direction) => {
    if (!isMounted || !scrollRef.current) return;
    if (direction === 'left' && !canScrollLeft) return;
    if (direction === 'right' && !canScrollRight) return;
    const cardWidth = 380;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % galleryItems.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Top Description Area with Blurred Background */}
      <div className={styles.introBackgroundWrapper}>
        <div className={styles.introBgImage} aria-hidden="true" />
        <div className={styles.introOverlay} aria-hidden="true" />

        <div className={styles.introContainer}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.paragraph}>
            At Ceylon Ride, our mission is to make your island exploration effortless, enjoyable, and completely stress-free. We believe that true freedom begins when you take the handlebars yourself. Whether you&apos;re a solo backpacker cruising scenic coastal highways, a couple discovering hidden coves between Galle and Mirissa, or an explorer seeking authentic cultural stops at your own rhythm, our dependable, modern scooter fleet is ready for every journey.
          </p>
          <p className={styles.paragraph}>
            We warmly invite you to set off on this exciting journey with us. Whether this is your very first adventure across Sri Lanka&apos;s golden shores or you&apos;re a returning traveler rediscovering paradise, we promise unmatched hospitality, transparent service, and reliable rides that make every moment on the road safe, comfortable, and memorable.
          </p>
          <p className={styles.paragraph}>
            Thank you for discovering Ceylon Ride and letting us be part of your island story. We can&apos;t wait to share the open roads, coastal breeze, and unforgettable adventures with you. Let&apos;s ride together!
          </p>

          {/* Elegant Gradient Divider */}
          <div className={styles.introDivider} />
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.galleryWrapper}>
        <div className={styles.galleryHeader}>
          <div className={styles.galleryHeaderLeft}>
            <span className={styles.gallerySub}>— HONDA DIO SCOOTER PHOTO GALLERY —</span>
            <h3 className={styles.galleryTitle}>See the Ride Before You Choose</h3>
            <p className={styles.galleryDesc}>
              Browse photos of our well-maintained Honda Dio scooters to get a clear idea of what you&apos;ll be riding. Each scooter is prepared for comfort, reliability, and smooth travel, helping you choose the ride that best fits your journey through Sri Lanka.
            </p>

            {/* Navigation Arrows */}
            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => handleScroll('left')}
                disabled={isMounted ? !canScrollLeft : undefined}
                suppressHydrationWarning
                aria-label="Previous gallery images"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => handleScroll('right')}
                disabled={isMounted ? !canScrollRight : undefined}
                suppressHydrationWarning
                aria-label="Next gallery images"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Track */}
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack} ref={scrollRef}>
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={styles.galleryCard}
                onClick={() => setActiveLightboxIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveLightboxIndex(index);
                  }
                }}
              >
                <div className={styles.imageFrame}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cardImg}
                    loading="lazy"
                  />
                  <div className={styles.cardBadge}>{item.badge}</div>
                  <div className={styles.zoomHint} title="Click to view full photo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>

                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{item.category}</span>
                  <h4 className={styles.cardName}>{item.title}</h4>
                  <div className={styles.cardLocation}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-6.5-8-12a8 8 0 1116 0c0 5.5-8 12-8 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxCloseBtn}
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close photo preview"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              type="button"
              className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
              onClick={() => setActiveLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
              aria-label="Previous photo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
              onClick={() => setActiveLightboxIndex((prev) => (prev + 1) % galleryItems.length)}
              aria-label="Next photo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className={styles.lightboxImageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryItems[activeLightboxIndex].image}
                alt={galleryItems[activeLightboxIndex].title}
                className={styles.lightboxImage}
              />
            </div>

            <div className={styles.lightboxCaption}>
              <h3>{galleryItems[activeLightboxIndex].title}</h3>
              <p>{galleryItems[activeLightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
