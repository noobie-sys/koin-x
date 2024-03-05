import useData from "@/hooks/useData";
import React from "react";

const FundamentalDetails = () => {
  const { data, loading } = useData();

  const { name, id, market_data } = data;

  console.log(
    name,
    id,
    market_data?.current_price.usd,
    market_data?.high_24h?.usd,
    market_data?.low_24h?.usd,
    market_data?.market_cap.usd,
    market_data?.market_cap_rank,
    market_data?.total_volume?.usd,
    market_data?.ath.usd,
    market_data?.atl.usd,
    market_data?.ath_change_percentage?.usd,
    market_data?.atl_change_percentage?.usd,
    market_data?.ath_date?.usd
  );
  //   const date = new Date(market_data?.ath_date?.usd);
  const dateString = `${market_data?.ath_date?.usd}`;
  const date = new Date(dateString);

  console.log("New Date", date);

  return (
    <div className="w-full h-full py-6">
      {data === undefined ? (
        "Loading..."
      ) : (
        <div className="w-full flex flex-wrap gap-x-2  justify-between">
          <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
            <div className="w-full flex px-2 justify-between items-center">
              <h1>Bitcoin Price</h1>
              <span>${market_data?.current_price.usd.toLocaleString()}</span>
            </div>
          </div>
          <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
            <div className="w-full flex px-2 justify-between items-center">
              <h1>Market Cap</h1>
              <span>${market_data?.market_cap.usd.toLocaleString()}</span>
            </div>
          </div>
          <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
            <div className="w-full flex px-2 justify-between items-center">
              <h1>24H Low / 24H High</h1>
              <span>
                ${market_data?.low_24h?.usd.toLocaleString()} / $
                {market_data?.high_24h?.usd.toLocaleString()}
              </span>
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
              <span>${market_data?.total_volume?.usd.toLocaleString()}</span>
            </div>
          </div>
          <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
            <div className="w-full flex px-2 justify-between items-center">
              <h1>All Time High</h1>
              <div className="flex flex-col text-right">
                <span className="">
                  ${market_data?.ath.usd.toLocaleString()}{" "}
                  <span className="text-red-500 ml-2">
                    {market_data?.ath_change_percentage?.usd.toFixed(2)}%
                  </span>
                </span>
                <span className="text-xs">Nov 10, 2021(about 1 year)</span>
              </div>
            </div>
          </div>
          <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
            <div className="w-full flex px-2 justify-between items-center">
              <h1>Market cap Rank</h1>
              <span>#{market_data?.market_cap_rank}</span>
            </div>
          </div>
          <div className="w-[45%] py-4 border-b border-gray-500 px-1 ">
            <div className="w-full flex px-2 justify-between items-center">
              <h1>All Time low</h1>
              <div className="flex flex-col text-right">
                <span>
                  ${market_data?.atl.usd}{" "}
                  <span className="text-green-500 ml-2">
                    {market_data?.atl_change_percentage?.usd.toLocaleString()}%
                  </span>
                </span>
                <span className="text-xs"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundamentalDetails;
