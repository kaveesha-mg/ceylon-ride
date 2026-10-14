import Link from 'next/link';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <>
      <main style={{ padding: '100px 1.5rem 4rem', minHeight: '80vh', backgroundColor: 'var(--background)' }}>
      {/* Navigation */}
      <header className="header" style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '1rem 0', background: '#0f172a', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800 }}>
            🛵 Ceylon<span style={{ color: '#0ea5e9'}}>Ride</span>
          </Link>
          <Link href="/checkout" style={{ color: '#cbd5e1' }}>← Back to Checkout</Link>
        </div>
      </header>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--surface-border)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--foreground)' }}>Terms and Conditions</h1>
        
        <div style={{ color: 'var(--foreground)', opacity: 0.9, lineHeight: 1.8, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>Welcome to Ceylon Ride. By renting a scooter from us, you agree to the following terms and conditions:</p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>1. Valid Documents</h3>
          <p>The renter must present a valid passport and a valid driver's license (International Driving Permit or a Sri Lankan temporary driving permit) at the time of delivery/pickup.</p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>2. Helmets and Law</h3>
          <p>Wearing a helmet is mandatory by Sri Lankan law for both the rider and the passenger. We provide helmets free of charge. You are responsible for paying any traffic fines incurred during your rental period.</p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>3. Fuel Policy</h3>
          <p>The scooter will be provided with a certain level of fuel. It must be returned with the same level of fuel. No refunds are given for excess fuel.</p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>4. Damages and Liability</h3>
          <p>Basic third-party insurance is included. However, the renter is fully responsible for any physical damage to the scooter, theft, or loss of keys during the rental period. Repair costs will be charged directly to the renter.</p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>5. Usage Area</h3>
          <p>Our scooters are intended for use within the Southern Province (Galle, Unawatuna, Ahangama, Mirissa, etc.). Taking the scooter on Expressways is strictly prohibited by law.</p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>6. Payment and Cancellation</h3>
          <p>Full payment for the rental period must be made upon booking or at the time of delivery. Cancellations made 24 hours prior to the rental period are eligible for a full refund.</p>

        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
