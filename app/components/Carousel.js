// components/HeroCarousel.js
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const HeroCarousel = () => {
  return (
    <div className="w-[700px] ml-9 mt-4">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="h-[300px] w-[500px]"
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index} className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={`/img/slide-${index}.png`} // ganti sesuai nama file kamu
              alt={`Slide ${index}`}
              width={500}
              height={300}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
