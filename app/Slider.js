"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const images = [
  "/image1.webp",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
  "/image8.jpg",
  "/image9.jpg",
];

export default function Slider() {
  return (
    <div className="mt-5 relative w-full h-[70vh]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full h-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover rounded-md"
                sizes="100vw"
                priority={i === 0}
              />
              {/* {i === 0 && (
                <div className="absolute border-4 w-full text-white text-3xl font-bold drop-shadow-lg">
                  Hello world
                </div>
              )} */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 right-4 flex gap-2 items-center z-20">
        <button className="custom-prev bg-white text-gray-800 w-7 h-7 flex items-center justify-center rounded-full text-[12px] shadow-md">
          <h1 className="font-bold">&lt;</h1>
        </button>
        <button className="custom-next bg-white text-gray-800 w-7 h-7 flex items-center justify-center rounded-full text-[12px] shadow-md">
          &gt;
        </button>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 swiper-pagination"></div>
    </div>
  );
}
