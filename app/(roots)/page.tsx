'use client'
import Image from "next/image";
import TradingViewWidget from "./_components/CryptoDetails/tradingViewChart";
import AdditinalCard from "./_components/RightNav/AdditionalCard";
import TrendingCard from "./_components/RightNav/trendingCard";
import Details from "./_components/CryptoDetails/details";
import useData from "@/hooks/useData";

const getData = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true");

  if(!res.ok){
    throw new Error("Data not found...")
  }
  return res.json()
}

export default  function Home() {
  return (
    <main className="flex min-h-screen md:flex-row flex-col md:justify-between p-10">
      <section className="w-full p-4 px-10 overflow-hidden rounded-lg flex md:flex-col">
        <TradingViewWidget /> 
        <Details />
      </section>
      <aside className="flex flex-col gap-3">
        <AdditinalCard />
        <TrendingCard />
      </aside>
    </main>
  );
}
