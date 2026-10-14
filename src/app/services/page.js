"use client";

import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    title: 'SCOOTER RENTALS',
    description: 'Brand new, fully maintained Honda Dio scooters available for daily, weekly, or monthly rentals. Helmets included.',
    image: '/images/honda_dio.png',
    btnText: 'VIEW SCOOTERS',
    link: '/scooters'
  },
  {
    title: 'HOTEL DELIVERY',
    description: 'We bring the scooter to you! Free delivery and pickup to your hotel or villa in Galle, Unawatuna, and Ahangama areas.',
    image: 'https://images.unsplash.com/photo-1543622748-5bc8120c8ce7?q=80&w=1000&auto=format&fit=crop',
    btnText: 'CONTACT US',
    link: '/contact'
  },
  {
    title: '24/7 SUPPORT',
    description: 'Ride with peace of mind. Our team is available on WhatsApp around the clock to assist you with any issues on the road.',
    btnText: 'CHAT ON WHATSAPP',
    link: 'https://wa.me/94763890644'
  },
  {
    title: 'FULL INSURANCE',
    description: 'At Ceylon Ride we understand that accidents and emergencies can happen to even the most cautious riders. That’s why we ensure all our bikes are fully insured to offer our customers peace of mind and protection in the unlikely event of damage.\n\nWe take great pride in offering the highest quality motorbikes for rent, and we want our customers to enjoy their riding experience without any worries. By providing full insurance coverage, we aim to alleviate any concerns about unexpected expenses or liability in case of an accident.'
  }
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Navigation */}
      <header className="header" style={{ position: 'sticky', top: 0, left: 0, right: 0, padding: '1rem 0', background: '#0f172a', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800 }}>
            🛵 Ceylon<span style={{ color: '#0ea5e9'}}>Ride</span>
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase' }}>Home</Link>
            <Link href="/scooters" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase' }}>Scooters</Link>
            <Link href="/services" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase' }}>Services</Link>
            <Link href="/#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase' }}>About Us</Link>
            <Link href="/contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase' }}>Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '1000px' }}>
        
        {/* Title & Description */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', background: 'var(--surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--foreground)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            OUR SERVICES
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            We provide everything you need for a perfect riding experience across the beautiful South Coast of Sri Lanka.
            As a locally owned and operated business, we pride ourselves on providing not just a rental service, but a premium experience.
          </p>
        </div>

        {/* Carousel Outer Container */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%', margin: '0 auto', gap: '20px' }}>
          
          {/* Left Arrow (Outside) */}
          <button 
            onClick={prevSlide}
            style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#333', color: '#ffffff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.2rem', zIndex: 10, boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
          >
            ◀
          </button>

          {/* Image Container */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', height: '450px', overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
            
            {/* Background Image (Increased blur) */}
            <div 
              style={{
                position: 'absolute',
                top: '-20px', left: '-20px', right: '-20px', bottom: '-20px', 
                backgroundImage: `url('https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1000&auto=format&fit=crop')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(10px) brightness(0.8)',
                zIndex: 0
              }}
            ></div>

            {/* Solid White Overlay Box */}
            <div 
              style={{
                position: 'absolute',
                top: '5%',
                bottom: '5%',
                left: '12%',
                right: '5%',
                backgroundColor: '#ffffff', // Clean white background
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                zIndex: 1
              }}
            >
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', color: '#0f172a' }}>
                {services[currentIndex].title}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem', color: '#334155', fontWeight: 500, whiteSpace: 'pre-wrap' }}>
                {services[currentIndex].description}
              </p>
              {services[currentIndex].btnText && (
                services[currentIndex].link.startsWith('http') ? (
                  <a href={services[currentIndex].link} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e11d48', color: 'white', padding: '1rem 3rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
                    {services[currentIndex].btnText}
                  </a>
                ) : (
                  <Link href={services[currentIndex].link} style={{ backgroundColor: '#e11d48', color: 'white', padding: '1rem 3rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
                    {services[currentIndex].btnText}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right Arrow (Outside) */}
          <button 
            onClick={nextSlide}
            style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#333', color: '#ffffff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.2rem', zIndex: 10, boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
          >
            ▶
          </button>
        </div>

        {/* Carousel Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2.5rem' }}>
          {services.map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: currentIndex === idx ? '#333' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            ></div>
          ))}
        </div>

        {/* Footer Area */}
        <div style={{ textAlign: 'center', marginTop: '6rem', color: 'var(--foreground)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>🛵</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            Ceylon Ride
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.25rem' }}>
            Gunasewana, Pitiduwa, Habaraduwa
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            WhatsApp: +9476 389 0644
          </p>
        </div>

      </div>
    </main>
  );
}
