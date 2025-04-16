// src/app/listings/page.tsx
  // app/listings/page.tsx
'use client';

import React, { useState } from 'react';
import FilterBar from '@/components/FilterBar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
};

const initialProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Villa',
    location: 'New York',
    price: 1200,
    image: '/house1.jpg',
  },
  {
    id: 2,
    title: 'Cozy Studio',
    location: 'Los Angeles',
    price: 900,
    image: '/house2.jpg',
  },
  {
    id: 3,
    title: 'Spacious Villa',
    location: 'Miami',
    price: 2500,
    image: '/house3.jpg',
  },
];

export default function ListingsPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(initialProperties);

  const handleFilterAction = (location: string, minPrice: number, maxPrice: number) => {
    const filtered = initialProperties.filter((property) => {
      const matchesLocation =
        !location || property.location.toLowerCase().includes(location.toLowerCase());
      const matchesPrice =
        property.price >= minPrice && (maxPrice === 0 || property.price <= maxPrice);
      return matchesLocation && matchesPrice;
    });

    setFilteredProperties(filtered);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 pt-32 pb-12 space-y-8">
      <h1 className="text-3xl font-bold text-white mb-6">Property Listings</h1>
      <FilterBar onFilterAction={handleFilterAction} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <motion.div
            key={property.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={property.image}
                alt={property.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-2xl"
                priority
              />
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">{property.title}</h2>
                <p className="text-gray-400">{property.location}</p>
                <p className="text-green-500 font-bold mt-2 text-lg">
                  ${property.price.toLocaleString()}
                </p>
              </div>

              {/* View Details Button */}
              <Link
                href={`/listings/${property.id}`}
                className="mt-4 bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
