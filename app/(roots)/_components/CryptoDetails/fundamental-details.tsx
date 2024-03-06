import useData from "@/hooks/useData";
import { DataTypes } from "@/type";
import React from "react";

const FundamentalDetails = () => {
  const { data, loading } = useData();

  return (
    <div className="w-full h-full py-6">
      {data === undefined ? (
        "Loading..."
      ) : (
        <div className="w-full ">
          {data.map((item: DataTypes, id: number) => (
            <div key={id} className="flex flex-wrap gap-x-2  justify-between">
              <div className="lg:w-[45%] w-full">
                <div className=" py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>Bitcoin Price</h1>
                    <span>${item.current_price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>Market Cap</h1>
                    <span>${item.market_cap.toLocaleString()}</span>
                  </div>
                </div>
                <div className=" py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>24H Low / 24H High</h1>
                    <span>
                      ${item.low_24h.toLocaleString()} / $
                      {item.high_24h.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className=" py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>Market Cap Dominaction</h1>
                    <span>33.66 %</span>
                  </div>
                </div>
                <div className="py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>7D Low / 7D High</h1>
                    <span>$46,400 / $45,345</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[45%] w-full">
                <div className=" py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>Volume / Market Cap</h1>
                    <span>
                      {(item.total_volume / item.market_cap).toFixed(4)}
                    </span>
                  </div>
                </div>
                <div className=" py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>Trading Volume</h1>
                    <span>${item.total_volume.toLocaleString()}</span>
                  </div>
                </div>
                <div className=" py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>All Time High</h1>
                    <div className="flex flex-col text-right">
                      <span className="">
                        ${item.ath.toLocaleString()}{" "}
                        <span className="text-red-500 ml-2">
                          {item.ath_change_percentage.toFixed(2)}%
                        </span>
                      </span>
                      {/* <span className="text-xs">Nov 10, 2021(about 1 year)</span> */}
                    </div>
                  </div>
                </div>
                <div className="py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>Market cap Rank</h1>
                    <span>#{item.market_cap_rank}</span>
                  </div>
                </div>
                <div className=" py-4 border-b border-gray-500 px-1 ">
                  <div className="w-full flex px-2 justify-between items-center">
                    <h1>All Time low</h1>
                    <div className="flex flex-col text-right">
                      <span>
                        ${item.atl}{" "}
                        <span className="text-green-500 ml-2">
                          {item.atl_change_percentage.toLocaleString()}%
                        </span>
                      </span>
                      <span className="text-xs"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FundamentalDetails;
