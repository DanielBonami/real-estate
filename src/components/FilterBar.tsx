'use client';

import React, { useState } from 'react';
import { FaSearch, FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';

type FilterBarProps = {
  onFilterAction: (location: string, minPrice: number, maxPrice: number) => void;
};

export default function FilterBar({ onFilterAction }: FilterBarProps) {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedMin = parseInt(minPrice) || 0;
    const parsedMax = parseInt(maxPrice) || 0;

    if (!isNaN(parsedMin) && !isNaN(parsedMax)) {
      onFilterAction(location.trim(), parsedMin, parsedMax);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4"
    >
      {/* Location Input */}
      <div className="relative w-full sm:w-1/3">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="pl-10 p-2 w-full rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Min Price */}
      <div className="relative w-full sm:w-1/3">
        <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="pl-10 p-2 w-full rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Max Price */}
      <div className="relative w-full sm:w-1/3">
        <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="pl-10 p-2 w-full rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        Filter
      </button>
    </motion.form>
  );
}

