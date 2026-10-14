"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('branch');
  const [days, setDays] = useState(0);
  
  // Pricing Constants
  const RATES = {
    day: 7.6,
    week: 52,
    month: 220
  };

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    whatsapp: '',
    country: '',
    bikeModel: '',
    rideType: '',
    dropoffLocation: '',
    deliveryLocation: '',
    notes: ''
  });
  const [documentFile, setDocumentFile] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculate Days and Price
  useEffect(() => {
    if (pickupDate && dropoffDate) {
      const start = new Date(pickupDate);
      const end = new Date(dropoffDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      setDays(diffDays > 0 ? diffDays : 0);
    }
  }, [pickupDate, dropoffDate]);

  const calculateTotal = () => {
    if (days === 0) return 0;
    
    let total = 0;
    let remainingDays = days;

    const months = Math.floor(remainingDays / 30);
    total += months * RATES.month;
    remainingDays %= 30;

    const weeks = Math.floor(remainingDays / 7);
    total += weeks * RATES.week;
    remainingDays %= 7;

    total += remainingDays * RATES.day;
    return total.toFixed(2);
  };

  const totalPrice = calculateTotal();
  const totalLKR = (totalPrice * (2500 / 7.6)).toFixed(0); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setDocumentFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      data.append('pickupDate', pickupDate);
      data.append('dropoffDate', dropoffDate);
      data.append('deliveryMethod', deliveryMethod);
      data.append('days', days);
      data.append('totalPrice', totalPrice);
      data.append('totalLKR', totalLKR);
      data.append('bikeId', 'dio-110');
      if (documentFile) {
        data.append('document', documentFile);
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        body: data // Fetch API automatically sets correct multipart headers
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting booking.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <main className={styles.checkoutContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className={styles.card} style={{ textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          <h1 className={styles.title} style={{ marginBottom: '1rem' }}>Reservation Received!</h1>
          <p style={{ marginBottom: '2rem', color: 'var(--foreground)', opacity: 0.8 }}>
            Thank you, {formData.firstName} {formData.lastName}. We have received your reservation request for {formData.bikeModel || 'Honda Dio 110'} ({days} days). 
            We will contact you shortly on WhatsApp ({formData.whatsapp}) to confirm your reservation.
          </p>
          <Link href="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.checkoutContainer}>
      {/* Navigation */}
      <header className="header" style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '1rem 0', background: '#0f172a', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800 }}>
            🛵 Ceylon<span style={{ color: '#0ea5e9'}}>Ride</span>
          </Link>
          <Link href="/scooters" style={{ color: '#cbd5e1' }}>← Back to Scooters</Link>
        </div>
      </header>

      <div className="container">
        <h1 className={styles.title}>Reserve Your Bike</h1>
        
        <form className={styles.grid} onSubmit={handleSubmit} encType="multipart/form-data">
          
          {/* Left Column - Form Details */}
          <div>
            <div className={styles.card} style={{ marginBottom: '2rem' }}>
              <h2 className={styles.cardTitle}>1. Personal Information</h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className={styles.input} placeholder="Enter your first name" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className={styles.input} placeholder="Enter your last name" required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className={styles.select} required>
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={styles.input} placeholder="Enter your email address" required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={styles.input} placeholder="Enter your phone number" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>WhatsApp Number</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className={styles.input} placeholder="Enter your WhatsApp number" required />
                </div>
              </div>
              <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                <label className={styles.label}>Country</label>
                <select name="country" value={formData.country} onChange={handleInputChange} className={styles.select} required>
                  <option value="" disabled>Select your country</option>
                  <option value="United Kingdom">🇬🇧 United Kingdom</option>
                  <option value="Russia">🇷🇺 Russia</option>
                  <option value="Germany">🇩🇪 Germany</option>
                  <option value="France">🇫🇷 France</option>
                  <option value="Australia">🇦🇺 Australia</option>
                  <option value="United States">🇺🇸 United States</option>
                  <option value="United Arab Emirates">🇦🇪 United Arab Emirates (Dubai)</option>
                  <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                  <option value="India">🇮🇳 India</option>
                  <option value="Netherlands">🇳🇱 Netherlands</option>
                  <option value="Italy">🇮🇹 Italy</option>
                  <option value="Spain">🇪🇸 Spain</option>
                  <option value="Switzerland">🇨🇭 Switzerland</option>
                  <option value="Sweden">🇸🇪 Sweden</option>
                  <option value="Canada">🇨🇦 Canada</option>
                  <option value="Israel">🇮🇱 Israel</option>
                  <option value="China">🇨🇳 China</option>
                  <option value="Japan">🇯🇵 Japan</option>
                  <option value="Sri Lanka">🇱🇰 Sri Lanka</option>
                  <option value="Other">🌍 Other</option>
                </select>
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>2. Rental Details</h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Pick-up Date</label>
                  <input 
                    type="date" 
                    className={styles.input} 
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Drop-off Date</label>
                  <input 
                    type="date" 
                    className={styles.input} 
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* BIKE MODEL and I RIDE */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>BIKE MODEL *</label>
                  <select 
                    name="bikeModel" 
                    value={formData.bikeModel} 
                    onChange={handleInputChange} 
                    className={styles.select} 
                    required
                  >
                    <option value="" disabled>Select your bike model...</option>
                    <option value="Honda Dio 110 - Sports Orange">Honda Dio 110 - Sports Orange</option>
                    <option value="Honda Dio 110 - Sports Blue">Honda Dio 110 - Sports Blue</option>
                    <option value="Honda Dio DX 110 - Sports Red">Honda Dio DX 110 - Sports Red</option>
                    <option value="Honda Dio DX 110 - Matte Green">Honda Dio DX 110 - Matte Green</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>I RIDE *</label>
                  <select 
                    name="rideType" 
                    value={formData.rideType} 
                    onChange={handleInputChange} 
                    className={styles.select} 
                    required
                  >
                    <option value="" disabled>Select your ride type...</option>
                    <option value="Solo">Solo</option>
                    <option value="With passenger">With passenger</option>
                  </select>
                </div>
              </div>

              {/* Drop-off Location */}
              <div className={styles.formGroup}>
                <label className={styles.label}>DROP-OFF LOCATION *</label>
                <select 
                  name="dropoffLocation" 
                  value={formData.dropoffLocation} 
                  onChange={handleInputChange} 
                  className={styles.select} 
                  required
                >
                  <option value="" disabled>Select drop-off location...</option>
                  <option value="Habaraduwa Branch (Main Office)">Habaraduwa Branch (Main Office)</option>
                  <option value="Delivery Location">Delivery Location</option>
                </select>
              </div>

              <div className={styles.formGroup} style={{ marginTop: '1.5rem' }}>
                <label className={styles.label}>How would you like to receive the scooter?</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="branch"
                      checked={deliveryMethod === 'branch'}
                      onChange={() => setDeliveryMethod('branch')}
                    /> Pick up at Habaraduwa Branch
                  </label>
                  <label className={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="hotel"
                      checked={deliveryMethod === 'hotel'}
                      onChange={() => setDeliveryMethod('hotel')}
                    /> Deliver to my Location
                  </label>
                </div>
              </div>

              {deliveryMethod === 'hotel' && (
                <div className={styles.formGroup} style={{ marginTop: '1.5rem', animation: 'fadeIn 0.3s ease-in' }}>
                  <label className={styles.label}>Delivery Location / Address (Galle, Unawatuna, Ahangama area)</label>
                  <input 
                    type="text" 
                    name="deliveryLocation" 
                    value={formData.deliveryLocation} 
                    onChange={handleInputChange} 
                    className={styles.input} 
                    placeholder="Enter your delivery location or address" 
                    required 
                  />
                </div>
              )}

              {/* Additional Notes */}
              <div className={styles.formGroup} style={{ marginTop: '1.5rem' }}>
                <label className={styles.label}>ADDITIONAL NOTES</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows={3}
                  placeholder="Enter your special requests, questions, or suggestions"
                />
              </div>

              <div className={styles.formGroup} style={{ marginTop: '1.5rem' }}>
                <label className={styles.label}>Upload Valid Document (Passport, Driving License, etc.)</label>
                <input 
                  type="file" 
                  name="document"
                  accept="image/*,.pdf" 
                  onChange={handleFileChange} 
                  className={styles.input}
                  required
                />
                <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>We need a copy of your document for verification purposes.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className={styles.card} style={{ position: 'sticky', top: '100px' }}>
              <h2 className={styles.cardTitle}>Order Summary</h2>
              
              <div className={styles.summaryItem}>
                <span>Vehicle</span>
                <span style={{ fontWeight: 600 }}>{formData.bikeModel || 'Select your bike model...'}</span>
              </div>

              {formData.rideType && (
                <div className={styles.summaryItem}>
                  <span>Ride Type</span>
                  <span style={{ fontWeight: 600 }}>{formData.rideType}</span>
                </div>
              )}
              
              <div className={styles.summaryItem}>
                <span>Rental Duration</span>
                <span style={{ fontWeight: 600 }}>{days} Days</span>
              </div>
              
              <div className={styles.summaryItem}>
                <span>Delivery</span>
                <span>{deliveryMethod === 'hotel' ? 'Location Delivery (Free)' : 'Branch Pickup'}</span>
              </div>

              {formData.dropoffLocation && (
                <div className={styles.summaryItem}>
                  <span>Drop-off</span>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', textAlign: 'right', maxWidth: '160px' }}>{formData.dropoffLocation}</span>
                </div>
              )}

              <div className={styles.totalRow}>
                <span>Total Amount</span>
                <div style={{ textAlign: 'right' }}>
                  <div>${totalPrice}</div>
                  <div style={{ fontSize: '1rem', color: 'var(--foreground)', opacity: 0.7, fontWeight: 500 }}>
                    ~ Rs {totalLKR} LKR
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <input 
                    type="checkbox" 
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    style={{ marginTop: '0.2rem' }}
                  />
                  <span>
                    I agree to the <Link href="/terms" target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Terms and Conditions</Link>, including the rental policy and liability waiver.
                  </span>
                </label>
              </div>

              <button type="submit" disabled={isSubmitting || days === 0} className={`btn btn-primary ${styles.submitBtn}`}>
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
              </button>
              
              <p style={{ textAlign: 'center', fontSize: '0.85rem', opacity: 0.7, marginTop: '1rem' }}>
                Secure payment via PayHere will be added later. <br /> Helmets are included for free.
              </p>
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}
