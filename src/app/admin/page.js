import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import styles from './admin.module.css';

// Force dynamic rendering so it fetches fresh data on every load
export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  let bookings = [];
  try {
    // Fetch bookings from SQLite database via Prisma
    bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  } catch (error) {
    console.error("Error fetching bookings. DB might not be initialized yet.", error);
  }

  // Calculate some basic stats
  const totalBookings = bookings.length;
  const totalRevenueLKR = bookings.reduce((sum, b) => sum + b.totalLKR, 0);

  return (
    <main className={styles.adminContainer}>
      
      {/* Header */}
      <header className="header" style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '1rem 0', background: '#0f172a', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800 }}>
            🛵 Ceylon<span style={{ color: '#0ea5e9'}}>Ride</span> <span style={{fontSize: '1rem', color: '#64748b', fontWeight: 400}}>| Admin Panel</span>
          </Link>
          <Link href="/" style={{ color: '#cbd5e1' }}>← View Website</Link>
        </div>
      </header>

      <div className="container">
        <h1 className={styles.title}>Dashboard Overview</h1>

        {/* Stats */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Total Bookings</span>
            <span className={styles.statValue}>{totalBookings}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Estimated Revenue</span>
            <span className={styles.statValue} style={{ color: '#10b981' }}>
              Rs. {totalRevenueLKR.toLocaleString()}
            </span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Active Scooters</span>
            <span className={styles.statValue}>1 (Honda Dio)</span>
          </div>
        </div>

        {/* Bookings Table */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date Placed</th>
                <th>Customer Details</th>
                <th>Dates & Duration</th>
                <th>Delivery</th>
                <th>Document</th>
                <th>Amount (LKR)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', opacity: 0.5 }}>
                    No bookings found yet.
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{booking.name} {booking.gender ? `(${booking.gender})` : ''}</div>
                      {booking.phone && <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>📞 {booking.phone}</div>}
                      <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>💬 {booking.whatsapp}</div>
                      <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{booking.country}</div>
                    </td>
                    <td>
                      <div>{booking.pickupDate} to {booking.dropoffDate}</div>
                      <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>({booking.days} Days)</div>
                      {booking.bikeModel && <div style={{ fontSize: '0.85rem', color: '#0ea5e9', fontWeight: 600 }}>🛵 {booking.bikeModel}</div>}
                      {booking.rideType && <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>👤 {booking.rideType}</div>}
                      {booking.dropoffLocation && <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>📍 Drop: {booking.dropoffLocation}</div>}
                    </td>
                    <td>
                      <div>{booking.deliveryMethod === 'hotel' ? 'Location Delivery' : 'Branch Pickup'}</div>
                      {(booking.deliveryLocation || booking.hotel) && (
                        <div style={{ fontSize: '0.85rem', opacity: 0.8, maxWidth: '160px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {booking.deliveryLocation || booking.hotel}
                        </div>
                      )}
                      {booking.notes && (
                        <div style={{ fontSize: '0.8rem', color: '#f59e0b', maxWidth: '160px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={booking.notes}>
                          📝 {booking.notes}
                        </div>
                      )}
                    </td>
                    <td>
                      {booking.documentUrl ? (
                        <a href={booking.documentUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', textDecoration: 'underline', fontSize: '0.85rem' }}>
                          View Document
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.85rem', opacity: 0.5 }}>N/A</span>
                      )}
                    </td>
                    <td style={{ fontWeight: 600 }}>Rs. {booking.totalLKR.toLocaleString()}</td>
                    <td>
                      <span className={styles.statusBadge}>{booking.status}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}
