// src/app/listings/page.tsx
'use client';

import React, { useState } from 'react';
import ListingCard from '@/components/ListingCard';
import FilterBar from '@/components/FilterBar';

const allListings = [
  {
    id: 'modern-villa',
    title: 'Modern Villa',
    location: 'Los Angeles, CA',
    price: 1200000,
    image: '/house1.jpg',
  },
  {
    id: 'cozy-cottage',
    title: 'Cozy Cottage',
    location: 'Asheville, NC',
    price: 320000,
    image: '/house2.jpg',
  },
  {
    id: 'luxury-apartment',
    title: 'Luxury Apartment',
    location: 'New York, NY',
    price: 850000,
    image: '/house3.jpg',
  },
];

export default function ListingsPage() {
  const [filteredListings, setFilteredListings] = useState(allListings);
  const [loading, setLoading] = useState(false);

  const handleFilter = (
    location: string,
    minPrice: number,
    maxPrice: number
  ) => {
    setLoading(true);

    const filtered = allListings.filter((listing) => {
      const matchesLocation = listing.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const matchesMinPrice = isNaN(minPrice) || listing.price >= minPrice;
      const matchesMaxPrice = isNaN(maxPrice) || listing.price <= maxPrice;

      return matchesLocation && matchesMinPrice && matchesMaxPrice;
    });

    setTimeout(() => {
      setFilteredListings(filtered);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24 sm:mt-32">
        <h1 className="text-3xl font-bold mb-6 text-center">Available Listings</h1>
        <FilterBar onFilter={handleFilter} />

        {loading ? (
          <p className="text-center mt-10 text-gray-600 text-lg">Loading listings...</p>
        ) : filteredListings.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                id={listing.id}
                title={listing.title}
                location={listing.location}
                price={listing.price}
                image={listing.image}
              />
            ))}
          </div>
        ) : (
          <p className="text-center mt-10 text-gray-500 text-lg">
            No listings match your search criteria.
          </p>
        )}
      </main>
    </div>
  );
}