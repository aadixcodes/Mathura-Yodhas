
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full h-auto aspect-video relative font-[heading-1]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false 
        }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="w-full h-full aspect-video">
            <Image
              src={"/assets/HeroBanner1.jpg"}
              alt="Banner 1"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="w-full h-full aspect-video">
            <Image
              src={"/assets/HeroBanner2.jpg"}
              alt="Banner 2"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="w-full h-full aspect-video">
            <Image
              src={"/assets/HeroBanner3.jpg"}
              alt="Banner 3"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;