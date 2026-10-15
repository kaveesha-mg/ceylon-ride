"use client";

import { useState, useEffect } from 'react';
import styles from './PWAInstallPrompt.module.css';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    // Register Service Worker for PWA
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('Ceylon Ride PWA Service Worker registered:', reg.scope);
        })
        .catch((err) => {
          console.error('Service Worker registration failed:', err);
        });
    }

    // Check if already running in standalone mode (already installed as an app)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;

    if (isStandalone) {
      return; // Already installed, do not show banner
    }

    // Check if user dismissed the prompt in this session
    const dismissed = sessionStorage.getItem('pwa_prompt_dismissed');
    if (dismissed) {
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // Standard Android / Chrome / Edge install prompt capture
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // If on iOS and not standalone, show the prompt after a slight delay
    if (isAppleDevice && !isStandalone) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <>
      <div className={styles.installBanner} role="alert">
        <div className={styles.bannerContent}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/icon-192x192.png"
            alt="Ceylon Ride App Icon"
            className={styles.appIcon}
          />
          <div className={styles.textWrap}>
            <span className={styles.appName}>Ceylon Ride App</span>
            <span className={styles.appDesc}>Install for fast scooter bookings</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.installBtn}
            onClick={handleInstallClick}
          >
            Install
          </button>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleDismiss}
            aria-label="Dismiss install prompt"
          >
            ✕
          </button>
        </div>
      </div>

      {/* iOS Instructions Modal */}
      {showIOSModal && (
        <div
          className={styles.iosModalOverlay}
          onClick={() => setShowIOSModal(false)}
        >
          <div
            className={styles.iosModal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.iosHeader}>
              <span>📲</span>
              <span>Install on iPhone</span>
            </div>
            <div className={styles.iosSteps}>
              <div className={styles.iosStepRow}>
                <div className={styles.iosStepIcon}>1</div>
                <div>Tap the <strong>Share</strong> button (📤) at the bottom of Safari.</div>
              </div>
              <div className={styles.iosStepRow}>
                <div className={styles.iosStepIcon}>2</div>
                <div>Scroll down and select <strong>&quot;Add to Home Screen&quot;</strong> (➕).</div>
              </div>
              <div className={styles.iosStepRow}>
                <div className={styles.iosStepIcon}>3</div>
                <div>Tap <strong>Add</strong> in the top right corner.</div>
              </div>
            </div>
            <button
              type="button"
              className={styles.iosCloseBtn}
              onClick={() => {
                setShowIOSModal(false);
                setShowPrompt(false);
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
