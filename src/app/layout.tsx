// app/layout.tsx — Server component (default for layout.tsx)

'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooter = pathname === '/listings';

  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 600); // overlay duration
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white overflow-x-hidden">
        <Navbar />

        {/* Full-screen transition overlay */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              className="fixed inset-0 z-50 bg-gray-900"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Page content */}
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}



