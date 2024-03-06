"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Overview } from "./Overview-coin";
import Fundamentals from "./Fundamentals";
import useData from "@/hooks/useData";

const navbarToggle = ["Overview", "Fundamental", "News Insight", "Sentiments"];

const Details = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    // console.log(active)
  };

  return (
    <div className="w-full flex flex-col py-10">
      <div className={"flex gap-10 border-b border-slate-400 pb-2 overflow-hidden"}>
        {navbarToggle.map((nav, idx) => (
          <div key={idx} className={cn("text-lg font-semibold")}>
            <h1 className="cursor-pointer line-clamp-1">{nav}</h1>
          </div>
        ))}
      </div>
      <div className="w-full h-full bg-white shadow-lg mt-4 rounded-lg p-10">
        <Overview />
        <Fundamentals />
      </div>
    </div>
  );
};

export default Details;
