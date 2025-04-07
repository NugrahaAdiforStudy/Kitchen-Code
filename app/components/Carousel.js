// components/HeroCarousel.js
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const HeroCarousel = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-4 mt-4 ml-2">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full aspect-video" // rasio 16:9 agar fleksibel
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={`/img/slide-${index}.png`}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
