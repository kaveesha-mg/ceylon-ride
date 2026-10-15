import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import PWAInstallPrompt from "../components/PWAInstallPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#030508",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Ceylon Ride | Premium Scooter Rentals in Sri Lanka",
  description: "Easy, affordable and reliable scooter rentals around Galle, Unawatuna, Thalpe, Habaraduwa & Ahangama. Book your Honda Dio online today.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ceylon Ride",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <FloatingWhatsApp />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}

