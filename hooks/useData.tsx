"use client";
import { useEffect, useState } from "react";

export interface Props {
  getBitcoinData: Promise<any>;
}

const useData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true"
      );

      if (!res.ok) {
        throw new Error("Data not Found..");
      }

      if (res.status === 200) {
        const fetchedData = await res.json();
        setData(fetchedData);
      }
      setLoading(false);
    };
    fetchData()
  }, []);
  return {loading , data}
};

export default useData;
