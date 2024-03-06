"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingMiniChart from "./index";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Bitcoin } from "lucide-react";
import useTrendingCoin from "@/hooks/useTrendingData";
import Image from "next/image";

export default function TrendingCarousel() {
  const { data } = useTrendingCoin();
  console.log(data, "Data Fetched");
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        // centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
        breakpoints={{
            0 : {
                slidesPerView : 1,
                spaceBetween : 20
            },
            640 : {
                slidesPerView : 2,
                spaceBetween : 30
            },
            1024 : {
                slidesPerView : 4,
                spaceBetween : 30
            }
        }}
      >
        {data === undefined
          ? "Data is not found.."
          : data?.map((item: any, idx: number) => (
              <SwiperSlide>
                <div className="w-full  border-2 border-gray-400/60 rounded-lg shadow-lg ">
                  <div className="details">
                    <div className="flex items-center gap-4 p-2">
                      <div className="overflow-hidden rounded-full w-50 h-50">
                        <Image src={item?.item?.small} alt={"image"} width={49} height={49} className="object-cover object-center" />
                      </div>
                      <div className="flex gap-2">
                        <h1 className="text-black font-bold text-lg ">{item?.item?.symbol}</h1>
                        <span className="bg-green-400/60 px-3 items-center rounded-lg">
                          {item?.item?.data?.price_change_percentage_24h?.usd?.toLocaleString()}%
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <h1 className="text-lg tracking-wider ml-4 font-bold line-clamp-1 ">
                        {item?.item?.data?.price}
                      </h1>
                    </div>
                    <div className="py-5">
                      <TrendingMiniChart symbol={item?.item?.symbol}/>
                    </div>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
