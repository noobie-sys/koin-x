'use client'
import TradingViewWidget from "./_components/CryptoDetails/tradingViewChart";
import AdditinalCard from "./_components/RightNav/AdditionalCard";
import TrendingCard from "./_components/RightNav/trendingCard";
import Details from "./_components/CryptoDetails/details";
import Sentiments from "./_components/CryptoDetails/Sentiments";
import AboutCoin from "./_components/CryptoDetails/about";
import TrendingData from "./_components/TrendindData/TrendingData";



export default  function Home() {
  return (
    <main className="flex min-h-screen lg:flex-row flex-col md:justify-between items-center lg:items-start lg:p-10">
      <section className="w-full h-full p-4 px-10 overflow-hidden rounded-lg flex flex-col ">
        <h1 className="text-2xl font-bold uppercase pb-2 text-[#d7d9db] ">Bitcoin</h1>
        <TradingViewWidget /> 
        <Details />
        <Sentiments />
        <AboutCoin />
       <TrendingData />
      </section>
      <aside className="flex flex-col  justify-center items-center h-full gap-3    ">
        <AdditinalCard />
        <TrendingCard />
      </aside>
    </main>
  );
}
