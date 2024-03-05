import Image from "next/image";
import TradingViewWidget from "./_components/CryptoDetails/tradingViewChart";
import AdditinalCard from "./_components/RightNav/AdditionalCard";

export default function Home() {
  return (
    <main className="flex min-h-screen md:flex-row flex-col md:justify-between p-10">
      <section className="w-full  p-4">
        <TradingViewWidget />
      </section>
      <aside className="">
       <AdditinalCard />
      </aside>
      
      
    </main>
  );
}
