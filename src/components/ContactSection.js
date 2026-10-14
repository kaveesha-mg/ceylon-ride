"use client";

import { useState } from 'react';
import styles from '../app/contact/contact.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Auto-hide the success message after 5 seconds
        setTimeout(() => {
          setStatus('');
        }, 5000);
      } else {
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactContainer} style={{ paddingTop: '105px', scrollMarginTop: '10px' }}>
      <div className="container">
        <div className={styles.sectionDivider}></div>
        <div className={styles.headerSection}>
          <h2 className={styles.mainHeading}>— CONTACT US —</h2>
          <p className={styles.subDescription}>
            Have questions or need help planning your ride? Get in touch with us anytime! We’re happy to assist you before, during, and after your journey.
          </p>
        </div>

        {/* 2-Column Content Grid: Form + Get In Touch */}
        <div className={styles.contentGrid}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>SEND US A MESSAGE</h3>
              <p className={styles.formSubtitle}>
                Fill in the form below and we will get back to you as soon as possible.
              </p>
            </div>

            {status && <div style={{ padding: '1rem', background: '#10b98120', color: '#10b981', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center' }}>{status}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    required 
                    className={styles.input} 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className={styles.input} 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Phone / WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+94 77 000 0000" 
                    className={styles.input} 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className={styles.formGroup} style={{ marginBottom: '2rem' }}>
                <label className={styles.label}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea 
                  placeholder="Tell us which bike you need, your dates, and pickup location..." 
                  required 
                  className={styles.textarea}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ marginBottom: 0 }}
                ></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column: Get In Touch */}
          <div className={styles.sideInfoSection}>
            <div className={styles.sideInfoHeader}>
              <h3 className={styles.sideInfoTitle}>GET IN TOUCH</h3>
              <p className={styles.sideInfoSubtitle}>
                Reach us directly via phone, WhatsApp, or visit our location.
              </p>
            </div>

            <div className={styles.infoCardList}>
              {/* Phone Card */}
              <div className={styles.infoCard}>
                <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>PHONE</div>
                  <a href="tel:+94763890644" className={styles.cardValue}>+94 76 389 0644</a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className={styles.infoCard}>
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>WHATSAPP</div>
                  <a href="https://wa.me/94763890644" target="_blank" rel="noopener noreferrer" className={styles.cardValue}>+94 76 389 0644</a>
                </div>
              </div>

              {/* Email Card */}
              <div className={styles.infoCard}>
                <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>EMAIL</div>
                  <a href="mailto:Gaveengunasekar95@gmail.com" className={styles.cardValue}>Gaveengunasekar95@gmail.com</a>
                </div>
              </div>

              {/* Address Card */}
              <div className={styles.infoCard}>
                <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>ADDRESS</div>
                  <span className={styles.cardValue}>Gunasewana, Pitiduwa, Habaraduwa</span>
                </div>
              </div>

              {/* Hours Card */}
              <div className={styles.infoCard}>
                <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>HOURS</div>
                  <span className={styles.cardValue}>Open 24 hours</span>
                  <span className={styles.cardValue} style={{ opacity: 0.8 }}>24/7 WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Centered Below Both Boxes */}
        <div className={styles.mapSection}>
          <div className={styles.mapFrameWrapper}>
            <iframe
              title="Ceylon Ride Location Map"
              src="https://maps.google.com/maps?q=Gunasewana,+Pitiduwa,+Habaraduwa,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
