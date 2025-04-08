'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropertyCard from '@/components/PropertyCard';

export default function RentPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Properties for Rent</h1>
        <p className="text-gray-400 mb-8 text-lg">
          Browse available rentals and find your perfect place to live.
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
              title="City Loft"
              location="New York, NY"
              price="$3,200/month"
              image="/house7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard
              title="Suburban Home"
              location="Austin, TX"
              price="$2,100/month"
              image="/house8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard
              title="Modern Studio"
              location="Seattle, WA"
              price="$1,800/month"
              image="/house9.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}