import Image from "next/image";
import TradingViewWidget from "./_components/CryptoDetails/tradingViewChart";

export default function Home() {
  return (
    <main className="flex min-h-screen md:flex-row flex-col md:justify-between p-10">
      <section className="w-2/3 bg-green-500 p-4">
        <TradingViewWidget />
      </section>
      <aside className="w-[30vw]  bg-red-500">
        <h1>Hello Dveloper</h1>
      </aside>
      
      
    </main>
  );
}
