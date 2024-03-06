"use client";
import Popover from "@/components/utils/popover";
import { Info } from "lucide-react";
import React, { useState } from "react";
import { EmblaOptionsType } from 'embla-carousel'
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
            <Info className="w-5 h-5 ml-4 mr-2  " onMouseEnter={() => setKey(true)}
          onMouseLeave={() => setKey(false)} />
            <Popover active={key} text="Hello Developer" num={44} />
          </div>
        </div>
        <div className="w-full flex flex-col">
            <Carousel />
            <div className="w-full">
                <div className=""> </div>
                <div></div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
