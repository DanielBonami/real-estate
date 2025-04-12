'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch, FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';

type FilterProps = {
  onFilter: (location: string, minPrice: number, maxPrice: number) => void;
};

export default function FilterBar({ onFilter }: FilterProps) {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(
      location,
      minPrice === '' ? 0 : Number(minPrice),
      maxPrice === '' ? 0 : Number(maxPrice)
    );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-900 p-4 rounded shadow-md mb-6 flex flex-col sm:flex-row gap-4"
    >
      {/* Location input with icon */}
      <div className="relative w-full sm:w-auto">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="pl-10 pr-3 p-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out w-full"
        />
      </div>

      {/* Min Price input with icon */}
      <div className="relative w-full sm:w-auto">
        <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="pl-10 pr-3 p-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out w-full"
        />
      </div>

      {/* Max Price input with icon */}
      <div className="relative w-full sm:w-auto">
        <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="pl-10 pr-3 p-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded transition transform 
          duration-200 ease-in-out hover:bg-green-700 hover:scale-105 active:scale-95 w-full sm:w-auto"
      >
        Filter
      </button>
    </motion.form>
  );
}