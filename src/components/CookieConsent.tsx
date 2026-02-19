"use client";
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white px-6 py-4 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-4 animate-fade-in">
      <span className="text-sm">We use cookies to enhance your experience. By continuing, you agree to our privacy policy.</span>
      <button onClick={accept} className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow hover:scale-105 transition-transform">Accept</button>
    </div>
  );
}
