import React from "react";

const FundamentalDetails = () => {
  return (
    <div className="w-full h-full py-6">
      <div className="w-full flex flex-wrap gap-x-2  justify-between">
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>Bitcoin Price</h1>
            <span>$46,400</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>Market Cap</h1>
            <span>$46,400,343,34343</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>24H Low / 24H High</h1>
            <span>$46,400 / $16,500</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>Market Cap Dominaction</h1>
            <span>33.66 %</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>7D Low / 7D High</h1>
            <span>$46,400 / $45,345</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>Volume / Market Cap</h1>
            <span>0.0718</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>Trading Volume</h1>
            <span>$23,000,000,000</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>All Time High</h1>
            <div className="flex flex-col text-right">
              <span className="">
                $69,000.77 <span className="text-red-500">-75.6%</span>
              </span>
              <span className="text-xs">Nov 10, 2021(about 1 year)</span>
            </div>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>Market cap Rank</h1>
            <span>#1</span>
          </div>
        </div>
        <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
          <div className="w-full flex px-2 justify-between items-center">
            <h1>All time low</h1>
            <div className="flex flex-col text-right">
              <span>
                $69,000.77 <span>-75.6%</span>
              </span>
              <span className="text-xs">Nov 10, 2021(about 1 year)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentalDetails;
