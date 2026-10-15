import Link from 'next/link';
import styles from '../app/scooters/scooters.module.css';

const bikes = [
  {
    id: 'dio-orange',
    name: 'Honda Dio 110',
    category: 'SCOOTER • SPORTS ORANGE',
    priceDayUSD: '7.6',
    priceDayLKR: '2,500',
    priceWeekUSD: '52',
    priceWeekLKR: '17,200',
    priceMonthUSD: '220',
    priceMonthLKR: '73,000',
    image: '/images/cards/card_dio_orange.png',
  },
  {
    id: 'dio-blue',
    name: 'Honda Dio 110',
    category: 'SCOOTER • SPORTS BLUE',
    priceDayUSD: '7.6',
    priceDayLKR: '2,500',
    priceWeekUSD: '52',
    priceWeekLKR: '17,200',
    priceMonthUSD: '220',
    priceMonthLKR: '73,000',
    image: '/images/cards/card_dio_blue.png',
  },
  {
    id: 'dio-red',
    name: 'Honda Dio DX 110',
    category: 'SCOOTER • SPORTS RED',
    priceDayUSD: '7.6',
    priceDayLKR: '2,500',
    priceWeekUSD: '52',
    priceWeekLKR: '17,200',
    priceMonthUSD: '220',
    priceMonthLKR: '73,000',
    image: '/images/cards/card_dio_red.png',
  },
  {
    id: 'dio-green',
    name: 'Honda Dio DX 110',
    category: 'SCOOTER • MATTE GREEN',
    priceDayUSD: '7.6',
    priceDayLKR: '2,500',
    priceWeekUSD: '52',
    priceWeekLKR: '17,200',
    priceMonthUSD: '220',
    priceMonthLKR: '73,000',
    image: '/images/cards/card_dio_green.png',
  },
];

const specRows = [
  {
    left: {
      label: 'Engine Capacity',
      val: '110cc',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M9 4v4M15 4v4M2 12h2M20 12h2M7 14h3M14 14h3" />
        </svg>
      )
    },
    right: {
      label: 'Transmission',
      val: 'Automatic',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M6 8v8M18 8v8M6 12h12" />
        </svg>
      )
    }
  },
  {
    left: {
      label: 'Passengers',
      val: '2 PAX',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    right: {
      label: 'Mileage',
      val: 'Unlimited',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14l3-3" />
          <path d="M3.34 17a10 10 0 1 1 17.32 0" />
          <circle cx="12" cy="14" r="2" fill="currentColor" />
        </svg>
      )
    }
  },
  {
    left: {
      label: 'Helmets',
      val: '1 or 2',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 7.48 2 13c0 2.22.73 4.28 1.96 5.95.27.37.71.58 1.17.58h4.37c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H7c-.55 0-1-.45-1-1s.45-1 1-1h6.5c.83 0 1.5.67 1.5 1.5 0 .55.45 1 1 1h1.5c.38 0 .73-.21.9-.55C20.5 17.8 22 15.6 22 13c0-5.52-4.48-10-10-10z"/>
        </svg>
      )
    },
    right: {
      label: 'Luggage Carrier',
      val: 'Yes, Large (16in X 12in)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M9 11v6M15 11v6" />
        </svg>
      )
    }
  },
  {
    left: {
      label: 'Phone Holder',
      val: 'Available',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M10 6h4M12 18h.01" />
        </svg>
      )
    },
    right: {
      label: 'USB Fast Charger',
      val: 'Not available',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
  },
  {
    left: {
      label: 'Bungee Cords',
      val: 'Available',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    right: {
      label: 'Repair & Maintence',
      val: 'Included',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    }
  }
];

function HondaWingLogo() {
  return (
    <div className={styles.hondaBadge} title="Honda">
      <svg
        width="26"
        height="18"
        viewBox="-1181 -632 1950 1330"
        fill="#DC2626"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <path d="M-860.666,696.668c0,0-12.333-40.002-34-61.668S-1083.334,446.334-1108,421.667s-73-72.665-73-142.666 c0-70,59-120,130.333-148.667S180.667-369,266.667-405s209.667-91.333,265.667-118S747-624.75,752.25-627.583 S760.333-632,762.833-632s4.834,2.167,4.834,5s-1.834,6.75-2.417,8.667S716.667-473.667,678.667-425S622-355.667,440-291.667 S-957.335,199.001-988.001,211.001s-100,33.333-100,84.667c0,41.333,41.333,73.334,53.333,84s338.667,316.999,338.667,316.999 H-860.666z" />
        <path d="M-1004,365.5c0,0-29.667-27.5-33.667-31.5s-12.667-18.999-12.667-29.666s2-36.334,47-50.334 S92.001-105.667,149.334-123.667S545.25-254,605.5-281c12.75-5.5,15-6.833,17-6.833s4.583,1.25,4.583,4.333s-1.417,5.417-2.5,7.167 S565.5-155.5,531.5-118S467-54,405-38.5S-623.5,237-629.75,238.75s-13.5,7.5-13.5,15.25c0,12.75,10.5,13.75,10.5,13.75L-1004,365.5z" />
        <path d="M-982.5,384.5L-897,464l443.5-83.5c0,0-11.5-7.25-11.5-15.625s6.75-13.875,14.875-15.5 s651.125-126.374,691.125-133.374s92.666-18.667,135.666-70.667S461.375,23.875,462.75,21.75s1.875-3.375,1.875-4.625 s-0.75-4.375-4-4.375s-5,0.75-8.25,2S-982.5,384.5-982.5,384.5z" />
        <path d="M275,267.5c-1.817,0.413-1151.667,215.833-1151.667,215.833l99.667,92.166l531.835-66.999 c0,0-10-3.666-10-14s9.833-14.167,15.5-15.167s273.667-40.335,305.167-45.002s83.333-15.5,127-61.5s86.668-97,88.334-99 s1.915-3.248,1.915-4.248S281.5,266.5,279,266.5C278.334,266.5,276.833,267.084,275,267.5z" />
        <polygon points="-753.333,597 -646.666,697 57.334,697 -206,533" />
      </svg>
    </div>
  );
}

export default function VehiclesSection() {
  return (
    <section id="scooters" className={styles.scootersSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our Bike Collection
          </h2>
          <p className={styles.sectionSubtitle}>
            Choose from our selection of well-maintained, fully automatic scooters suitable for long-distance travel, and hill-country adventures across Sri Lanka.
          </p>
        </div>

        <div className={styles.grid}>
          {bikes.map((bike) => (
            <div key={bike.id} className={styles.bikeCard}>
              {/* Studio Backdrop Image */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={bike.image} alt={bike.name} className={styles.scooterImg} />
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                {/* Title & Honda Badge */}
                <div className={styles.cardTopRow}>
                  <div className={styles.titleWrap}>
                    <h3 className={styles.bikeName}>{bike.name}</h3>
                    <span className={styles.categoryBadge}>{bike.category}</span>
                  </div>
                  <HondaWingLogo />
                </div>

                {/* 2-Column Specs Table */}
                <div className={styles.specsTable}>
                  {specRows.map((row, idx) => (
                    <div key={idx} className={styles.specRow}>
                      {/* Left Column */}
                      <div className={styles.specCell}>
                        <div className={styles.specIcon}>{row.left.icon}</div>
                        <div className={styles.specText}>
                          <span className={styles.specLabel}>{row.left.label}</span>
                          <span className={styles.specValue}>{row.left.val}</span>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className={styles.specCell}>
                        <div className={styles.specIcon}>{row.right.icon}</div>
                        <div className={styles.specText}>
                          <span className={styles.specLabel}>{row.right.label}</span>
                          <span className={styles.specValue}>{row.right.val}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing & Booking Button Footer */}
                <div className={styles.cardFooter}>
                  <div className={styles.priceCard}>
                    <div className={styles.mainPriceRow}>
                      <span className={styles.dailyUSD}>${bike.priceDayUSD}</span>
                      <span className={styles.dailyRateLabel}>/ day ({bike.priceDayLKR} LKR)</span>
                    </div>
                    <div className={styles.subPricesRow}>
                      <span className={styles.subPriceItem}>
                        <span className={styles.subPriceLabel}>Weekly:</span>
                        <span className={styles.subPriceVal}>${bike.priceWeekUSD} ({bike.priceWeekLKR} LKR)</span>
                      </span>
                      <span className={styles.subPriceItem}>
                        <span className={styles.subPriceLabel}>Monthly:</span>
                        <span className={styles.subPriceVal}>${bike.priceMonthUSD} ({bike.priceMonthLKR} LKR)</span>
                      </span>
                    </div>
                  </div>

                  <Link href="/checkout" className={styles.bookBtn}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
