'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `font-bold text-lg transition duration-200 ${
      pathname === path
        ? 'text-green-400 underline underline-offset-4'
        : 'text-white hover:text-gray-300'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold drop-shadow hover:text-gray-200 transition"
        >
          DreamHome
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/buy" className={linkClasses('/buy')}>
            Buy
          </Link>
          <Link href="/rent" className={linkClasses('/rent')}>
            Rent
          </Link>
          <Link href="/contact" className={linkClasses('/contact')}>
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Slide-in Menu */}
      {/* Mobile Sidebar Slide-in Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="md:hidden fixed top-16 left-0 w-full bg-black bg-opacity-90 text-white px-6 py-6 z-40"
    >
      <div className="flex flex-col space-y-4">
        <Link href="/buy" className={linkClasses('/buy')} onClick={() => setIsOpen(false)}>
          Buy
        </Link>
        <Link href="/rent" className={linkClasses('/rent')} onClick={() => setIsOpen(false)}>
          Rent
        </Link>
        <Link href="/contact" className={linkClasses('/contact')} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </motion.div>
    )}
  </AnimatePresence>
    </nav>
  );
}