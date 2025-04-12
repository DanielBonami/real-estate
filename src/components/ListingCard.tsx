'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ListingCardProps = {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
};

export default function ListingCard({
  id,
  title,
  location,
  price,
  image,
}: ListingCardProps) {
  return (
    <Link
      href={`/listings/${id}`}
      className="block"
    >
      <motion.div
        className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-700">{location}</p>
          <p className="text-green-600 font-bold mt-2">${price.toLocaleString()}</p>

          <div className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded">
            View Details
          </div>
        </div>
      </motion.div>
    </Link>
  );
}