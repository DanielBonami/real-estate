// src/app/listings/[id]/page.tsx
'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const allProperties = [
  {
    id: 'modern-villa',
    title: 'Modern Villa',
    location: 'Beverly Hills, CA',
    price: '$3,200,000',
    image: '/house1.jpg',
    beds: 5,
    baths: 4,
    size: '4,000 sqft',
    description: 'A luxurious modern villa located in the heart of Beverly Hills.',
  },
  {
    id: 'cozy-cottage',
    title: 'Cozy Cottage',
    location: 'Aspen, CO',
    price: '$1,150,000',
    image: '/house2.jpg',
    beds: 3,
    baths: 2,
    size: '2,000 sqft',
    description: 'A charming and cozy cottage perfect for mountain living.',
  },
  {
    id: 'luxury-apartment',
    title: 'Luxury Apartment',
    location: 'Manhattan, NY',
    price: '$2,400,000',
    image: '/house3.jpg',
    beds: 2,
    baths: 2,
    size: '1,500 sqft',
    description: 'A stunning apartment with skyline views in Manhattan.',
  },
];

export default function PropertyDetails() {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);
  const property = allProperties.find((p) => p.id === id);

  if (!property) notFound();

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen px-4 sm:px-6 py-28">
      <motion.div
        className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-extrabold mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {property.title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {property.location}
        </motion.p>

        <motion.div
          className="relative w-full h-96 mb-6 rounded-md overflow-hidden shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.p
          className="text-3xl text-green-600 font-bold mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {property.price}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>
            <strong className="text-gray-800 dark:text-gray-200">Beds:</strong>{' '}
            {property.beds}
          </p>
          <p>
            <strong className="text-gray-800 dark:text-gray-200">Baths:</strong>{' '}
            {property.baths}
          </p>
          <p>
            <strong className="text-gray-800 dark:text-gray-200">Size:</strong>{' '}
            {property.size}
          </p>
        </motion.div>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {property.description}
        </motion.p>
      </motion.div>
    </main>
  );
}