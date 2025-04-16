'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropertyCard from '@/components/PropertyCard';

export default function BuyPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Properties for Sale</h1>
        <p className="text-gray-400 mb-8 text-lg">
          Explore our featured listings and find your dream home.
        </p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <PropertyCard
              id={4}
              title="Beachfront House"
              location="Malibu, CA"
              price="$4,000,000"
              image="/house4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard
              id={5}
              title="Downtown Condo"
              location="Chicago, IL"
              price="$8,500,000"
              image="/house5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard
              id={6}
              title="Mountain Cabin"
              location="Lake Tahoe, CA"
              price="$1,200,000"
              image="/house6.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
  