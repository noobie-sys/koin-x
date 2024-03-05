"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Triangle } from "lucide-react";

const TrendingCard = () => {
  return (
    <div className="w-80  mt-10 bg-white shadow-lg rounded-lg flex flex-col items-start p-2 ">
      <h1 className="font-semibold">Trending Coins (24h)</h1>
      <div className="w-full flex gap-y-2 flex-col pt-3 cursor-pointer">
        <div className="w-full flex justify-between hover:bg-primary/5 p-2 ">
          <div className="text-sm tracking-wide">
            <h1>Ethereum(ETH)</h1>
          </div>

          <div>
            <Badge className="bg-green-300/30 flex gap-2 text-green-500 font-light text-xs">
              <Triangle className="w-2 h-2 fill-green-500" />
              <span>8.21%</span>
            </Badge>
          </div>
        </div>
        <div className="w-full flex justify-between hover:bg-primary/5 p-2">
          <div className="text-sm tracking-wide">
            <h1>Ethereum(ETH)</h1>
          </div>

          <div>
            <Badge className="bg-green-300/30 flex gap-2 text-green-500 font-light text-xs">
              <Triangle className="w-2 h-2 fill-green-500" />
              <span>8.21%</span>
            </Badge>
          </div>
        </div>
        <div className="w-full flex justify-between hover:bg-primary/5 p-2 ">
          <div className="text-sm tracking-wide">
            <h1>Ethereum(ETH)</h1>
          </div>

          <div>
            <Badge className="bg-green-300/30 flex gap-2 text-green-500 font-light text-xs">
              <Triangle className="w-2 h-2 fill-green-500" />
              <span>8.21%</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
