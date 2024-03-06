"use client";
import { DataTypes } from "@/type";
import { useEffect, useState , memo } from "react";

const useData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );

        if (!res.ok) {
          throw new Error("Data not Found..");
        }
        if (res.ok) {
          const fetchedData = await res.json();
          setData(fetchedData);
        }
      } catch (error) {
        console.log("Fetching error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [data]);
  return { loading,data};
};

export default useData;
