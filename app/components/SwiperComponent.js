"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";

export default function SwiperComponent({ movies }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Keyboard]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      pagination={{ clickable: true }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            loading="lazy"
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
