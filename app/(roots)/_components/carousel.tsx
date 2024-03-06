"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Scrollbar, Pagination, Navigation } from "swiper/modules";
import { Coins, Newspaper, PiIcon, TrendingUp } from "lucide-react";

const data = [
  {
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident magni illum.",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident magni illum, ad facere qui iusto vero, impedit libero pariatur vitae reprehenderit eligendi quo dolores nobis voluptatibus cumque cum obcaecati!",
    Icon: Newspaper,
    bgColor: "bg-blue-500",
    iconColor: "bg-blue-500",
  },
  {
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident magni illum.",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident magni illum, ad facere qui iusto vero, impedit libero pariatur vitae reprehenderit eligendi quo dolores nobis voluptatibus cumque cum obcaecati!",
    Icon: TrendingUp,
    bgColor: "bg-green-500",
    iconColor: "bg-green-500",
  },
  {
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident magni illum.",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident magni illum, ad facere qui iusto vero, impedit libero pariatur vitae reprehenderit eligendi quo dolores nobis voluptatibus cumque cum obcaecati!",
    Icon: Coins,
    bgColor: "bg-red-400",
    iconColor: "bg-red-500",
  },
];
export default function Carousel() {
  return (
    <div className="w-full h-[30vh] flex justify-center items-center mt-20">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={80}
        navigation={true}
        modules={[Scrollbar, Navigation]}
        className="mySwiper"
      >
        {data.map((el, i) => (
          <SwiperSlide key={i} className="" >
            <div
              className={`flex ${el.bgColor} w-[35vw] bg-opacity-45 rounded-2xl p-4  h-full justify-center `}
            >
              <div className={`logo  p-3  rounded-full mr-5 `}>
                <div className={`${el.iconColor} p-4 rounded-full `}>

                <el.Icon className="w-6 h-6 font-bold text-white"  />
                </div>
              </div>
              <div className="details w-full h-full">
                <div className="mt-4 text-lg mb-5 ">
                  <h1>{el.title}</h1>
                </div>
                <div className="text-sm  tracking-wider">
                  <p>{el.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
