'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image?: string;
  beds?: number;
  baths?: number;
  size?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  image,
  beds = 3,
  baths = 2,
  size = '1,800 sqft',
}) => {
  return (
    <Link href={`/listings/${id}`}>
      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-full h-48">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              No Image
            </div>
          )}
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600">{location}</p>
          <p className="text-green-600 font-bold mt-2">{price}</p>

          <div className="flex items-center text-gray-500 text-sm gap-4 mt-3">
            <div className="flex items-center gap-1">
              <BedDouble size={16} /> {beds} Beds
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} /> {baths} Baths
            </div>
            <div className="flex items-center gap-1">
              <Ruler size={16} /> {size}
            </div>
          </div>

          <div className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded text-center">
            View Details
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;