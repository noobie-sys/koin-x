"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Triangle } from "lucide-react";
import useTrendingCoin from "@/hooks/useTrendingData";

const TrendingCard = () => {
  const {data} = useTrendingCoin();

  return (
    <div className="lg:w-80 w-[80vw] mb-10 lg:mb-0  mt-10 bg-white shadow-lg rounded-lg flex flex-col items-start p-2 ">
      <h1 className="font-semibold px-1">Trending Coins (24h)</h1>
      <div className="w-full flex gap-y-2 flex-col pt-3 cursor-pointer">
        {
          data === undefined ? "Loading..." : (
            data?.slice(0 , 3)?.map((item : any , idx : number) => (
              <div key={idx} className="w-full flex justify-between hover:bg-primary/5 p-2 ">
                <div className="text-sm tracking-wide">
                  <h1>{item?.item?.name?.toUpperCase()} ({item?.item?.symbol})</h1>
                </div>
      
                <div>
                  <div className="bg-green-300/30 px-2 py-1 rounded-lg items-center flex gap-1 text-green-500 font-light text-xs">
                    <Triangle className="w-2 h-2 fill-green-500 text-center" />
                    <span className="text-center">{item?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
              
              
            ))
          )
        }
      </div>
    </div>
  );
};

export default TrendingCard;
