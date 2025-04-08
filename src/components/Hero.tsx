'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/house1.jpg')` }} // Make sure the image is in the /public folder
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-md text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Dream Home
        </h1>
        <p className="mb-6 text-lg">
          Explore the best properties available for rent or purchase.
        </p>
        <a
          href="/buy"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          Browse Listings
        </a>
      </div>
    </section>
  );
}