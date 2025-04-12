'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/house1.jpg')` }}
    >
      <div className="bg-transparent text-white p-8 text-center drop-shadow-lg">
        <motion.h1
          className="text-4xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Find Your Dream Home
        </motion.h1>

        <motion.p
          className="mb-6 text-lg drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover the best properties available for rent or purchase.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <Link href="/listings">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
              Browse Listings
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}