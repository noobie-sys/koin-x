"use client";
import Popover from "@/components/utils/popover";
import { Info } from "lucide-react";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "../carousel";

const Sentiments = () => {
  const [active, setActive] = useState<boolean>(false);
  const [key, setKey] = useState<boolean>(false);
  return (
    <div className="w-full bg-white shadow-lg rounded-lg h-screen p-10">
      <div className="flex items-center relative">
        <h1 className="text-4xl font-bold">Sentiment</h1>
        <Info
          className="w-5 h-5 cursor-pointer ml-4"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
        <Popover num={52} active={active} text="lorem jafj hjafjaskj asjhkf" />
      </div>
      <div className="flex flex-col w-full  mt-4 mr-3">
        <div className="w-full ">
          <div className="w-full flex  items-center relative">
            <h1 className="text-3xl text-muted-foreground ">Key Events</h1>
            <Info
              className="w-5 h-5 ml-4 mr-2  "
              onMouseEnter={() => setKey(true)}
              onMouseLeave={() => setKey(false)}
            />
            <Popover active={key} text="Hello Developer" num={44} />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <Carousel />
          <div className="w-full mt-20 flex flex-col">
            <div>
              <h1 className="text-3xl tracking-wider font-bold">
                Analyst Estimates
              </h1>
            </div>
            <div className="flex w-full  mt-4">
              <div className="bg-green-300/50 w-40 h-40 p-20 flex justify-center items-center rounded-full">
                <h1 className="text-4xl tracking-tighter text-green-700 relative">76 <span className="absolute top-0 -right-4 text-lg">%</span></h1>
              </div>
              <div className="flex w-full flex-col justify-center items-center gap-5  ml-10 p-2">
                <div className="flex w-full justify-center items-center gap-4">
                    <h1 className="text-xl text-slate-400 tracking-wider">Buy</h1>
                    <div className="flex relative w-full  items-center gap-2">
                        <div className="w-[76%] h-4 bg-green-500 rounded-md" />
                        <h1>76%</h1>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center gap-4">
                    <h1 className="text-xl text-slate-400 tracking-wider">Hold</h1>
                    <div className="flex relative w-full  items-center gap-2">
                        <div className="w-[8%] h-4 bg-gray-400 rounded-md" />
                        <h1>8%</h1>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center gap-4">
                    <h1 className="text-xl text-slate-400 tracking-wider">Sell</h1>
                    <div className="flex relative w-full  items-center gap-2">
                        <div className="w-[16%] h-4 bg-red-500 rounded-md" />
                        <h1>16%</h1>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
