import { useState, useEffect } from 'react';
import axios from 'axios';

interface PriceData {
  latest: number;
  average: number;
  history: number[];
  count: number;
}

const usePriceData = (symbol: string, minutes: number) => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PriceData>(
          `https://currency-api-sable.vercel.app/price/${symbol}?minutes=${minutes}`
        );
        setPriceData(response.data);
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    const interval = setInterval(fetchData, 60000);

    fetchData();

    return () => clearInterval(interval);
  }, [symbol, minutes]);

  return priceData;
};

export default usePriceData;
