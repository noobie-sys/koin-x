"use client";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import React, { useState } from "react";
import FundamentalDetails from "./fundamental-details";
import Popover from "@/components/utils/popover";



const Fundamentals = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full  items-center relative">
        <h1 className="text-2xl font-semibold tracking-tight">Fundamentals</h1>

        <Info
          className="ml-2 w-4 h-4  cursor-pointer"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
        <Popover num={44} active={active} text=" This is fundamentals of bitcoin, if you know wanna about it. It
            Consist of price , marketplace, how it permofem whole day." />
      </div>
      <div className="details w-full h-full">
        <FundamentalDetails />
      </div>
    </div>
  );
};

export default Fundamentals;
