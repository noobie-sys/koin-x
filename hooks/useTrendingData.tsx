"use client";

import { useEffect, useState } from "react";

const useTrendingCoin = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    const fetchedData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );

        if (!res.ok) {
          throw new Error("Failed to Fetched..");
        }
        if (res.status === 200) {
          const fetchedData = await res.json();
          setData(fetchedData?.coins);
        }

      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    };
    fetchedData();
  }, []);

  return { loading, data };
};

export default useTrendingCoin;
