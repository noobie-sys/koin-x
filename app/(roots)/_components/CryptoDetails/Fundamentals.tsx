"use client";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import React, { useState } from "react";
import FundamentalDetails from "./fundamental-details";



const Fundamentals = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full  items-center relative">
        <h1 className="text-2xl font-semibold tracking-tight">Fundamentals</h1>

        <Info
          className="ml-2 w-4 h-4 peer/draft cursor-pointer"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
        <div
          className={cn(
            "bg-slate-200 rounded-xl ml-4 absolute w-96 left-44 opacity-0 invisible transition   p-2 h-20",
            active && "opacity-100 visible"
          )}
        >
          <h1 className="font-light text-sm">
            This is fundamentals of bitcoin, if you know wanna about it. It
            Consist of price , marketplace, how it permofem whole day..
          </h1>
        </div>
      </div>
      <div className="details w-full h-full">
        <FundamentalDetails />
      </div>
    </div>
  );
};

export default Fundamentals;
